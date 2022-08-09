const express = require('express');
// corsポリシーに抵触するため、その対策としてcorsを利用する
const cors = require('cors');
const mongoose = require('mongoose');
const BooksList = require('./models/modules');
const Image = require('./models/imageModules');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const app = express();



const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true
};

//DB接続
mongoose.connect('mongodb://localhost/mydb', options);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'DB error'));
db.on('open', () => console.log('DB success!'));

//DBからデータ取得
app.get('/mydb', function (req, res) {
  BooksList.find(function (err, result) {
    if (!err) {
      return res.json(result);
    } else {
      return res.status(500).send('postmylist faild')
    }
  });
});

//テキスト表示通信
app.post('/test', function (req, res) {

  res.send({
    message: req.body.text,
    sample: req.body.sampletext,
  });

});

//テキストDB登録
app.post('/data', function (req, res) {
  var input = new BooksList({
    name: req.body.data
  });
  input.save(function (err) {
    if (err) throw err;
  });
  console.log(req.body.data);
});

//ファイルDB登録
app.post('/file', upload.single("file"), async function (req, res) {
  console.log(req.file)
  let imageUploadObject = {
    file: {
      data: req.file.buffer,
      contentType: req.body.header
    },
    fileName: req.body.fileName
  };
  const uploadObject = new Image(imageUploadObject);

  const uploadProcess = await uploadObject.save();
});

app.listen(process.env.PORT || 3000);