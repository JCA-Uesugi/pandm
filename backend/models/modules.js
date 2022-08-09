//DBに保存するときのモデル作成
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BooksListSchema = Schema({
    name: String
},
    {
        collection: "mylist"
    });
module.exports = mongoose.model("BooksList", BooksListSchema);

