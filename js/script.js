// 0.IDの取得
//
const titleKey = document.getElementById("titlekey");
const memo = document.getElementById("memo");
const save = document.getElementById("save");
const clear = document.getElementById("clear");
const list = document.getElementById("list");

//
// 1.Save クリックイベント
//

save.addEventListener("click", function () {
  if (titleKey.value === "" && memo.value === "") {
    alert("何も入力されていません");
    return;
  } else {
    //入力フォームから値を取得
    const titleKeyValue = titleKey.value;
    const memoValue = memo.value;
    //localStorageに保存
    localStorage.setItem(titleKeyValue, memoValue);
    //保存したデータを画面一覧（#list）に追加し表示
    list.innerHTML += `<tr><th>${titleKeyValue}</th><td>${memoValue}</td></tr>`;
    //「削除する」ボタンを表示する
    clear.style.display = "";
    //フォームの中を空にする
    titlekey.value = "";
    memo.value = "";
  }
});

//
// 2.clear クリックイベント
//

clear.addEventListener("click", function () {
  const result = window.confirm("すべての内容が削除されます");
  if (result) {
    //localStorageのデータを全てクリアする
    localStorage.clear();
    //画面のリストを空にする
    list.innerHTML = "";
    //入力フォームも併せて空にする
    titleKey.value = "";
    memo.value = "";
    //「削除する」ボタンを非表示にする
    clear.style.display = "none";
  }
});

//
// 3.ページ読み込み：保存データ取得表示
//

for (let i = 0; i < localStorage.length; i++) {
  //各ループでキーを取得
  const currentKey = localStorage.key(i);
  //localStorageから取得
  const currentValue = localStorage.getItem(currentKey);
  //list 要素にHTMLを追加して表示
  list.innerHTML += `<tr><th>${currentKey}</th><td>${currentValue}</td></tr>`;
}

//
// ポップアップ広告の表示
//

// IDの取得
const popBtn = document.getElementById("pop-btn");
const close = document.getElementById("close-btn");

// 3秒後に表示
function popUp() {
  popBtn.style.display = "block";
}
setTimeout(popUp, 3000);

//クローズボタン押下で非表示
close.addEventListener("click", function () {
  popBtn.style.display = "none";
});
