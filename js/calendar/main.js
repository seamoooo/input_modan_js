'use strict';

console.clear();

{
  const year = 2020;
  const month = 4; // 5月

  function getfitstDate() {
    const dates = [];
    // 先月の末日
    const d = new Date(year, month, 0).getDate();
    // 今月の初めの曜日取得する
    const n = new Date(year, month, 1).getDay();
    console.log(d, n);

    //　一週目に前月が何日あるか取得
    for (let i = 0; i < n; i++) {
      // 入れるの先頭に追加
      dates.unshift({
        date: d - i,
        isToday: false,
        isDisabled: true,
      });
    }
    return dates;
  }

  function getlastDate() {
    const dates = [];
    const lastDay = new Date(year, month + 1, 0).getDay();
    for (let i = 1; i < 7 - lastDay; i++) {
      // 末日の日程に合わせて、値を引く
      dates.push({
        date: i,
        isToday: false,
        isDisabled: true,
      });
    }
    return dates;
  }

  function getCalendarBody() {
    const dates = []; // date: 日付, day: 曜日
    const lastDate = new Date(year, month + 1, 0).getDate();

    for (let i = 1; i <= lastDate; i++) {
      dates.push({
        date: i,
        isToday: false,
        isDisabled: false,
      });
    }
    return dates;
  }

  function createCalendar() {
    const dates = [...getfitstDate(), ...getCalendarBody(), ...getlastDate()];

    const weeks = [];
    const weeksCount = dates.length / 7;

    // 週の数だけループを回して、配列に格納する
    for (let i = 0; i < weeksCount; i++) {
      weeks.push(dates.splice(0, 7));
    }

    week.forEach((week) => {
      const tr = document.createElement('tr');
      week.forEach((date) => {
        const td = document.createElement('td');

        td.textContent = date.date;
        if (date.isToday) {
          td.class.add('today');
        }
        if (data.isDisabled) {
          td.classList.add('disabled');
        }

        tr.appendChild(td);
      });
      document.querySelector('today').appendChild(tr);
    });
  }

  createCalendar();
}
