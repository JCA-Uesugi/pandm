//DBに保存するときのモデル作成
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ImageSchema = Schema({
    fileName: String,
    file: {
        data: Buffer,
        contentType: String
    }
},
    { collection: "upfile" });

module.exports = mongoose.model("Image", ImageSchema);