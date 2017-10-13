
(function(){
 
var nav = document.getElementById('global_nav');
var navCheckbox = document.getElementById('global_nav_checkbox');
var _piext = document.getElementById('jasmine-test');
var _jme = document.getElementsByClassName('jasmine_html-reporter');

navCheckbox.addEventListener('blur', function(e){
  if (!nav.contains(e.relatedTarget)) this.checked = false;
});

document.addEventListener('click', function(e){
  var anchor = e.target;
  if (anchor.host == location.host) {
    e.preventDefault();
    navCheckbox.checked = false;
    if (anchor.href != location.href) {
      updateRoute(anchor);
    }

  }
}, true);

Prism.highlightAll();

// Array.prototype.slice.call(document.querySelectorAll('x-code-prism'), 0).forEach(function(node){
//   var lineNumbers = false; // node.hasAttribute('line-numbers');
//   node.innerHTML = '<pre ' + (lineNumbers ? 'data-start="' + (Number(node.getAttribute('line-numbers')) || 1) + '"' : '') +
//     ' class="language-'+ (node.language || 'javascript') + ' ' +
//     (lineNumbers ? 'line-numbers' : '') + '"><code>' +
//     (node.innerHTML.match(/&lt;/) ? node.innerHTML : node.textContent) + '</code></pre>';
//   Prism.highlightElement(node.firstElementChild.firstElementChild, false);
// });

var hasClass = (function(){ try { return !!eval('"use strict"; class test{};');} catch (e){ return false; } })();
if (hasClass) {

  document.body.setAttribute('es6-classes', '');

}

})();