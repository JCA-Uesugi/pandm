<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ text }}</h1>
    <h1>{{ sampletext }}</h1>
    <button @click="post">post</button><br />
    <li v-for="book in books" :key="book.index">{{ book.name }}</li>
    <form action="" method="post" enctype="multipart/form-data">
      <input type="text" id="text" name="dataname" />
      <input type="button" @click="Datapost" value="送信" /><br />
    </form>
    <input
      @change="selectedFile"
      type="file"
      id="datafile"
      name="datafile"
      accept="image/*"
    />
    <input type="button" @click="upload" value="アップロード" />
  </div>
</template>

<script>
import Methods from "@/api/methods";

export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      text: "",
      sampletext: "",
      books: "",
      imageFile: null,
    };
  },
  //必ず実行される
  created() {
    this.getData();
  },
  methods: {
    selectedFile(e) {
      e.preventDefault();
      let files = e.target.files;
      this.imageFile = files[0];
    },
    upload() {
      const formData = new FormData();
      formData.append("file", this.imageFile);
      let response = Methods.fileUpload(this.imageFile);
    },
    async post() {
      let element = { text: this.text };
      let response = await Methods.testPosting();
      console.log(response.data.message);
      this.text = response.data.message;
      this.sampletext = response.data.sample;
    },
    async getData() {
      let books_data = await Methods.testGetBooks();
      this.books = books_data.data;
    },

    Datapost() {
      let textData = Methods.dataPosting();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  text-align: left;
  display: block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
