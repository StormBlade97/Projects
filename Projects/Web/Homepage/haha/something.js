function hasTextFilterer(elem, string) {
  content = elem.innerHTML;
  return (content.indexOf(string) != -1);
}
