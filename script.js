const button = document.querySelector("button");
const historyList = document.getElementById("historyList");

button.addEventListener("click", function () {
  const exercise = document.querySelector("select").value;
  const weight = document.querySelectorAll('input[type="number"]')[0].value;
  const reps = document.querySelectorAll('input[type="number"]')[1].value;

  // 保存（配列にする）
  let history = JSON.parse(localStorage.getItem("history")) || [];

  const today = new Date();
const dateText = `${today.getFullYear()}/${today.getMonth() + 1}/${today.getDate()}`;
const newRecord = `${dateText} ${exercise} ${weight}kg ${reps}回`;
  history.push(newRecord);

  localStorage.setItem("history", JSON.stringify(history));

  displayHistory();

  alert("保存したよ");
  document.querySelector("input[type='number']").value = "";
document.querySelectorAll("input[type='number']")[1].value = "";
});

// 表示する関数
function displayHistory() {
  const history = JSON.parse(localStorage.getItem("history")) || [];

  historyList.innerHTML = "";

  history.forEach(function (item, index) {
  const li = document.createElement("li");
  li.textContent = item;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "削除";

  deleteButton.addEventListener("click", function () {
    history.splice(index, 1);
    localStorage.setItem("history", JSON.stringify(history));
    displayHistory();
  });

  li.appendChild(deleteButton);
  historyList.appendChild(li);
});
}

// 最初に読み込む
displayHistory();