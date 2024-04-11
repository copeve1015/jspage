const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const myKey = process.env.API_KEY;
const fs = require('fs');


app.get('/', (req, res) => {
  // res.send('Hello World!')
  res.sendFile(path.join(__dirname, 'index.html'));
})

app.use(express.static(__dirname));

app.get('/api/data', async (req, res) => {
  try {
    const response = await fetch(`https://apis.data.go.kr/B553530/GHG_LIST_040/GHG_LIST_04_03_20220831_VIEW01?serviceKey=${myKey}&apiType=JSON`);
    const data = await response.json();

    // 데이터를 JSON 형식 파일로 저장합니다. 데이터 캐싱처리
    fs.writeFile('data.json', JSON.stringify(data, null, 2), 'utf8', function (err) {
      if (err) {
        res.status(500).send(err.message);
        console.error(err);
      } else {
        res.send('save success!');
      }
    })

    // res.json(data);
  } catch (error) {
    res.status(500).send("API 요청 중 오류 발생: " + error.message);
  }
})

app.get('/api/read-data', (req, res) => {
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send('파일을 읽는 중 오류가 발생했습니다.');
    }
    res.json(JSON.parse(data));
  })
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})