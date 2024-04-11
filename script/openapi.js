// import fetch from 'node-fetch';

// fetch('https://apis.data.go.kr/B553530/GHG_LIST_040/GHG_LIST_04_03_20220831_VIEW01?serviceKey=v92B0hNqU3LR4qMgNnKfddiAsNaE%2FSqToanZPEyKFzLczXxkgbmj8v06T1lx4yy5Xr2BsFD1PqKvwiAyAZuxPw%3D%3D&pageNo=1&numOfRows=10&apiType=JSON&q1=2019&q2=5%EC%9D%B8%20~%209%EC%9D%B8&q3=%EB%8C%80%EC%A0%84&q4=27213&q5=%EC%A0%84%EB%A0%A5&q6=%EC%A0%84%EB%A0%A5')
//   .then(response => response.text())
//   .then(data => console.log(data))
//   .catch(error => console.error(error))


document.addEventListener('DOMContentLoaded', function() {
  fetch('/api/data')
    .then(response => {
      return response.json();
    })
    .then(data => {
      tableItem = data.response.body.items.item;
      return updateTable(tableItem);
    })
    .catch(error => console.error(error))
})


function updateTable(items) {
  console.log(items);
  if (items && items.length > 0) {
    document.querySelector("#dataTable thead").innerHTML =
    `<tr>
      ${Object.keys(items[0]).map(key => `<th>${key}</th>`).join("")}
    </tr>`;
    document.querySelector("#dataTable tbody").innerHTML =
    items.map(item => {
      return `<tr>
      ${Object.keys(item).map(key => `<th>${item[key]}</th>`).join("")}
    </tr>`;
    })
  } else {
    clearTable();
  }
}

function clearTable() {
  document.querySelector("#dataTable thead").innerHTML = "";
  document.querySelector("#dataTable tbody").innerHTML = "";
}