'use strict';

{
  function createclum(col) {
    // const source = [...Array(15)].map((_, i) => i);
    const source = [];
    for (let i = 0; i < 15; i++) {
      source[i] = i + 1 + 15 * col;
    }
    console.log(source);

    const colum = [];
    for (let i = 0; i < 5; i++) {
      colum[i] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
    }
    console.log(colum);

    return colum;
  }

  function createclums() {
    const columns = [];
    for (let i = 0; i < 5; i++) {
      columns[i] = createclum(i);
    }
    columns[2][2] = 'FREE';
    return columns;
  }

  function createBingo(columns) {
    const bingo = [];

    for (let row = 0; row < 5; row++) {
      bingo[row] = [];
      for (let col = 0; col < 5; col++) {
        bingo[row][col] = columns[col][row];
      }
    }
    return bingo;
  }

  function renderBingo(bingo) {
    for (let row = 0; row < 5; row++) {
      const tr = document.createElement('tr');

      for (let col = 0; col < 5; col++) {
        const td = document.createElement('td');
        td.textContent = bingo[row][col];
        tr.appendChild(td);
      }

      document.querySelector('tbody').appendChild(tr);
    }
  }
  const columns = createclums();
  const bingo = createBingo(columns);
  renderBingo(bingo);
}
