// similar functionality to dom_utils.js but with a sligthly cleaner application
// note that the methods provided live at the window (global) scope and are immediately invoked
// try them out on the 'dom_scripting.html' page
// for example "$live('div a', 'click', function (event) {});" adds a listener to links in divs

(function (window) {
	'use strict';

	// Get element(s) by CSS selector:
	window.qs = function (selector, scope) {
		return (scope || document).querySelector(selector);
	};
	window.qsa = function (selector, scope) {
		return (scope || document).querySelectorAll(selector);
	};

	// addEventListener wrapper:
	window.$on = function (target, type, callback, useCapture) { //this function add event listener to a component
		target.addEventListener(type, callback, !!useCapture);
	};

	// Register events on elements that may or may not exist yet:
	// $live('div a', 'click', function (event) {});
	window.$live = (function () { //define this function, and immediately execute it, this function take no arguments
		var eventRegistry = {};

		function dispatchEvent(event) {
			var targetElement = event.target;

			eventRegistry[event.type].forEach(function (entry) { //run this function on every entry object in the array stored as a member of eventRegistry
				var potentialElements = window.qsa(entry.selector); // potentialElements is an array of objects returned by window.qsa (querryselectorall)
				var hasMatch = Array.prototype.indexOf.call(potentialElements, targetElement) >= 0; //if this is -1, it means not found

				if (hasMatch) {
					entry.handler.call(targetElement, event); //there are potentialElements, entry will add handler of event to target element
					//function.prototype.call(this, args...) pretend the function to be executed exists in the object of 'this', and add the appropriate arguments in args...; then execute them
				}
			});
		}

		return function (selector, event, handler) { //windows.$live is this function
			if (!eventRegistry[event]) { //if there is yet to be this type of event
				eventRegistry[event] = []; //add it as new array
				window.$on(document.documentElement, event, dispatchEvent, true); //add event listener dispatchEvent to document.documentElement for this type event;
			}
			//if there already is a type of this event
			eventRegistry[event].push({ //push it to the array of type event in eventRegistry
				selector: selector,
				handler: handler
			});
		};
	}());

	// Find the element's parent with the given tag name:
	// $parent(qs('a'), 'div');
	window.$parent = function (element, tagName) {
		if (!element.parentNode) {
			return;
		}
		if (element.parentNode.tagName.toLowerCase() === tagName.toLowerCase()) {
			return element.parentNode;
		}
		return window.$parent(element.parentNode, tagName);
	};

	// Allow for looping on nodes by chaining:
	// qsa('.foo').forEach(function () {})
	NodeList.prototype.forEach = Array.prototype.forEach;
})(window);
