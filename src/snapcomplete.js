var baseURL = 'https://www.snapcomplete.com';
var s = document.createElement('script');
s.onreadystatechange = s.onload = function () {
  var state = s.readyState;
  var callback = SC.init;
  if (!callback.done && (!state || /loaded|complete/.test(state))) {
    callback.done = true;
    callback({'showImmediately': true});
  }
};
s.src = baseURL + '/js/plugin/embed.js';
document.body.appendChild(s);
