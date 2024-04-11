const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const myKey = process.env.API_KEY;


app.get('/', (req, res) => {
  // res.send('Hello World!')
  res.sendFile(path.join(__dirname, 'index.html'));
})

app.use(express.static(__dirname));

app.get('/api/data', async (req, res) => {
  try {
    const response = await fetch(`https://apis.data.go.kr/B553530/GHG_LIST_040/GHG_LIST_04_03_20220831_VIEW01?serviceKey=${myKey}&apiType=JSON`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).send("API 요청 중 오류 발생: " + error.message);
  }
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})