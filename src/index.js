console.log('testindex.js')
import  './css/index.css'
import './less/index.less'
function component() {
  var element = document.createElement('div');

  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  element.innerHTML = '加大沙坑里几乎都是了抠脚大汉是';

  return element;
}

document.body.appendChild(component());