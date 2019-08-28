function hasClass(elem, cls) {
  cls = cls || '';
  if (cls.replace(/\s/g, '').length == 0) return false; //当cls没有参数时，返回false
  return new RegExp(' ' + cls + ' ').test(' ' + elem.className + ' ');
}

// 添加样式
function addClass(elem, cls) {
  if (!hasClass(elem, cls)) {
    elem.className = elem.className == '' ? cls : elem.className + ' ' + cls;
  }
}
// 移除样式
function removeClass(elem, cls) {
  if (hasClass(elem, cls)) {
    var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, '') + ' ';
    while (newClass.indexOf(' ' + cls + ' ') >= 0) {
      newClass = newClass.replace(' ' + cls + ' ', ' ');
    }
    elem.className = newClass.replace(/^\s+|\s+$/g, '');
  }
}


var nav1 = document.getElementById('nav_item_1');
var nav2 = document.getElementById('nav_item_2');
var type1 = document.getElementById('qrcode_mode');
var type2 = document.getElementById('form_mode');

var activeClass = 'active';
var noneClass = 'none';

nav1.onclick = function() {
  removeClass(nav2, activeClass);
  removeClass(type1, noneClass);
  addClass(type2, noneClass);
  addClass(nav1, activeClass);
}

nav2.onclick = function() {
  removeClass(nav1, activeClass);
  removeClass(type2, noneClass);
  addClass(type1, noneClass);
  addClass(nav2, activeClass);
}



