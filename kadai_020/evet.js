const btn = document.getElementById('btn');

const text = document.getElementById('text');

btn.addEventListener('click', () => {
  
  const childList = document.createElement('li');

  childList.textContent = 'ボタンをクリックしました';

  text.appendChild(childList);

  text.textContent = 'ボタンをクリックしました';
});