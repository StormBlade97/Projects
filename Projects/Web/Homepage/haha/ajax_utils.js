var fakeSlowNetwork;

// you can ignore this immediately-executing function
// it is used to simulate a slow network to show you how AJAX and Promises work
(function() {
  var lsKey = 'fake-slow-network';
  var networkFakeDiv = document.querySelector('.network-fake');
  var checkbox = networkFakeDiv.querySelector('input');

  fakeSlowNetwork = Number(localStorage.getItem(lsKey)) || 0;

  networkFakeDiv.style.display = 'block';
  checkbox.checked = !!fakeSlowNetwork;

  checkbox.addEventListener('change', function() {
    localStorage.setItem(lsKey, Number(checkbox.checked));
    location.reload();
  });
}());


// here is where the "real" example code starts
// it includes a few lines to "slow down" the AJAX calls
//   to simulate a real network scenario which you can ignore for now
//   but which will be relevant when we construct ASYNC callbacks next week

// *******
// AJAX STUFF
// *******
function getSync(url) {

  var req = new XMLHttpRequest();
  req.open('get', url, false);
  req.send();

  // pause here to simulate slow network - IGNORE
  var startTime = Date.now();
  var waitTime = 3000 * Math.random() * fakeSlowNetwork;
  while (waitTime > Date.now() - startTime);

  // now continue
  if (req.status == 200) {
    return req.response;
  }
  else {
    throw Error(req.statusText || "Request failed");
  }
}

function getJsonSync(url) {
  return JSON.parse(getSync(url));
}


// *******
// DOM STUFF
// *******
var storyDiv = document.querySelector('.story');

function addHtmlToPage(content) {
  var div = document.createElement('div');
  div.innerHTML = modifyString(content);
  storyDiv.appendChild(div);
}

function addTextToPage(content) {
  var p = document.createElement('p');
  p.textContent = modifyString(content);
  storyDiv.appendChild(p);
}
function modifyString(string)
{
  //loop through a string and find a word (dictum)
  var index = string.indexOf('dictum');
  if (index == -1) return string;
  //now call ajax to get us the word
  var word = getJsonSync('http://api.wordnik.com:80/v4/word.json/dictum/definitions?limit=200&includeRelated=true&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5');
  console.log(word);
  return string.slice(0,index + 7) + '<strong> (' +  word[0].text + ' ) </strong>' + string.slice(index + 7);
}
function getMeaning(word)
{
  var url = 'http://api.wordnik.com:80/v4/word.json/'+ word + '/definitions?limit=200&includeRelated=true&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';
  return getJsonSync(url);
}
