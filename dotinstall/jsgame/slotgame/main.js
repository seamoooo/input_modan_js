'use strict';

{
    class panel {
        constructor() {
          const section = document.createElement('section');
          section.classList.add('panel')

          this.text = document.createElement('div');
          this.text.textContent = 'ほそかわしょうのすべらな〜い話'
          this.text.classList.add('text')

          this.timeoutId = undefined;

          this.stop = document.createElement('div')
          this.stop.textContent = 'STOP'
          this.stop.classList.add('stop')
          this.stop.addEventListener('click', ()=>{
            clearTimeout(this.timeoutId);
          });

          section.appendChild(this.text)
          section.appendChild(this.stop);

          const main = document.querySelector('main');
          main.appendChild(section);
        }

        //ランダムで配列の内容を返す
        getRandomText() {
            const text = [
                'これまでヤッた○○なプレイ',
                '実は私、○○なんです。暴露話',
                'あーちゃんの今後の住まい',
                'シーモの今後のキャリア',
                'ショウのTinder戦記',
                'やっさんとの馴れ初め・いきさつ',
                '初めて○○した話',
                'ひょっとしたら私だけ、、',
                'ちょっとイイ話',
                '初恋のひととの一番の思い出',
                '私が一番いま欲しいもの',
                '人生で最も感謝したいと思っていることは何？',
                '最も思い出深いストーリーを教えて',
                'お互いのいい部分を3つ共有してください。',
                '人生の中で、かなり恥ずかしい体験を相手に伝えてください',
                '完璧だと感じるのは、どんな日ですか？',
                'チャレンジしてみたいこと'
            ];
            return text[Math.floor(Math.random() * text.length) ]
        }

        //50ミリ秒ごと次の処理を行う
        spin() {
            this.text.textContent = this.getRandomText();
            this.timeoutId = setTimeout(() => {
                this.spin();
            }, 50)
        }
    }

    const panels = [
      new panel()
    ];

    const spin = document.getElementById('spin');
    spin.addEventListener('click', () => {
      panels.forEach(panel => {
        panel.spin();
      });
    });
};
