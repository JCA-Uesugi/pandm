const express = require("express");
// corsポリシーに抵触するため、その対策としてcorsを利用する
const cors = require("cors");
const mongoose = require("mongoose");
const BooksList = require("./models/modules");
const Image = require("./models/imageModules");
const multer = require("multer");
// const { default: axios } = require("axios");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const uploadLocal = multer({ dest: "/uploads" });
const app = express();
const dburl = "mongodb://localhost/mydb";

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

//DB接続
mongoose.connect(dburl, options);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
const db = mongoose.connection;
db.on("error", console.error.bind(console, "DB error"));
db.on("open", () => console.log("DB success!"));

//DBからデータ取得
app.get("/mydb", function (req, res) {
  BooksList.find(function (err, result) {
    if (!err) {
      console.log(result);
      return res.json(result);
    } else {
      return res.status(500).send("postmylist faild");
    }
  });
});
app.get("/myup", function (req, res) {
  Image.find(function (err, result) {
    if (!err) {
      return res.json(result);
      /*var img = Buffer.from(result[0].file.data, "base64");
      var images =[img];
      const formatedImages = images.map(buffer => {
       return `<img src = "data:image/*;base64, ${buffer.toString("base64")}"/>`
      }).join("")
      res.send(formatedImages)*/
      //res.send(img)
      //return res.json(result)
    } else {
      return res.status(500).send("getmydata faild");
    }
  });
});

//テキスト表示通信
app.post("/test", function (req, res) {
  res.send({
    message: req.body.text,
    sample: req.body.sampletext,
  });
});

//テキストDB登録
app.post("/data", function (req, res) {
  console.log(req.body);
  var input = new BooksList({
    name: req.body.data,
  });
  input.save(function (err) {
    if (err) throw err;
  });
  var notUtf8String = req.body.data;
  var detectResult = jschardet.detect(notUtf8String);
  console.log(detectResult);

  console.log(req.body.headers);
});

//ファイルDB登録
app.post("/file", upload.single("file"), async function (req, res) {
  console.log(req);
  let imageUploadObject = {
    fileName: req.body.fileName,
    file: {
      data: req.file.buffer,
      contentType: req.headers["content-type"],
    },
  };
  console.log(imageUploadObject);
  const uploadObject = new Image(imageUploadObject);

  const uploadProcess = await uploadObject.save();
  console.log("DB_input");
});

app.post("/download", function (req, res) {
  Image.find(function (err, result) {
    if (!err) {
      // console.log(result[0].file.data)
      var img = Buffer.from(result[0].file.data, "base64");
      // console.log(img)
      return res.json(result);
      /*
      var images =[img];
      const formatedImages = images.map(buffer => {
       return `<img src = "data:image/*;base64, ${buffer.toString("base64")}"/>`
      }).join("")
      res.send(formatedImages)*/
      //res.send(img)
      //return res.json(result)
    } else {
      return res.status(500).send("getmydata faild");
    }
  });
});

app.listen(process.env.PORT || 3000);
