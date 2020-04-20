var ctx;
function init(){
    var canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    // コンテキストの設定
    ctx.strokeStyle = "#FF0000";
    ctx.fillStyle = "#00FF00";
    ctx.lineWidth = 10;
    ctx.lineCap = "round";
    ctx.shadowColor = "#000000";
    ctx.shadowBlur = 2

    // 線を引く
    ctx.beginPath();//初期化処理
    ctx.moveTo(100, 100);//筆をスタート
    ctx.lineTo(180, 250);//筆を動かす
    ctx.stroke();//線の描画

    // 矩形を塗潰す
    ctx.fillRect(300, 100, 100, 150); //(X座標,Y座標,横幅,縦幅)

    // 矩形を描く
    ctx.strokeRect(500, 100, 100, 150);
}
