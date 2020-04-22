//厳密エラーチェック
"use strict";

//広域変数
var tiles = [];

//初期化関数
function init(){
  var table = document.getElementById("table");

  //テーブル要素の描画
  for (var i = 0 ; i < 4 ; i++) {
      var tr =document.createElement("tr");
      for (var j = 0 ; j < 4 ; j++) {
          var td = document.createElement("td");
          var index = i * 4 +j;
          td.className = "title"
          td.index = index
          td.value = index
          td.textContent = index == 0 ? "" : index;
          td.onclick = click;
          tr.appendChild(td)
          tiles.push(td);
      }
      table.appendChild(tr)
  }
}