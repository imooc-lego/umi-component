import moment from 'moment';

export function fromNow(timestamp) {
  const date = new Date(+timestamp);
  return moment(date).fromNow();
}

export function copy(text) {
  const input = document.createElement('input');
  input.value = text;
  document.body.appendChild(input);
  input.select(); // 选择对象
  document.execCommand('Copy'); // 执行浏览器复制命令
  input.className = 'input';
  input.style.display = 'none';
}
