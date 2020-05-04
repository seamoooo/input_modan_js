'use strict';

{
  function update() {
    // document.getElementById('target').textContent = 'Changed!';
    // document.querySelector('p').textContent = 'Changed!';
    //何番目か指定する。
    document.querySelectorAll('p')[1].textContent = 'Changed!';
    document.querySelectorAll('p').forEach((p,index) => {
      p.textContent = `${index}番目のpです。`;
    });
  }

  setTimeout(update, 1000);
}