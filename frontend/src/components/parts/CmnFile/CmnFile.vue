<template>
  <div class="file" v-if="isVisible">
    <div class="fileup">
      <form id="fileElem">
      <input
        type="file"
        id="datafile"
        name="fileinput"
        @change="inputFiles"
        accept="image/*,text/*,application/*"
        accept-charset="ASCII"
        enctype="multipart/form-data"
      />
      </form>
    </div>
    <span v-show="upFiles">
      <button @click="upLoad(); getFiles()">アップロード</button></span
    >
    <div class="uplist" v-show="upFiles">
      <ul class="up-items" v-for="name in filesName" :key="name.index">
        <li>{{ name }}</li>
      </ul>
    </div>
    <table>
      <tr>
        <th>No</th>
        <th>ファイル名</th>
      </tr>
      <tr v-for="(data, index) in datas" :key="data.index">
        <td>{{ index +1 }}</td>
      <td><a :href="downloadUrl" download>{{ data.fileName }}</a></td>
      </tr>
    </table>
    <div v-show="download">
      <img src="imgUrl" />
      <a :href="downloadUrl" download>ダウンロード</a>
    </div>
  </div>
</template>
<script>
import Methods from "@/api/methods.js";
export default {
  name: "CmnFile",
  props: {
    isVisible: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      /** アップロードされたファイルオブジェクトのリスト */
      upFiles: '',
      /** アップロードされたファイルの名前 */
      filesName: '',
      files: Object,
      datas: [],
      downloadUrl: null,
      imgUrl: "",
      download: true,
    };
  },
  created(){
    this.getFiles();
    this.downloadFile();
  },
  methods: {
    /**
     * @param e イベント
     *
     */
    inputFiles(e) {
      e.preventDefault();
      let files = e.target.files;
      this.upFiles = files;
        this.filesName = this.upFiles.name;
    },
    async downloadFile(){
      let downloadFile = await Methods.fileDownload();
      // let unit = ArrayBuffer.from(downloadFile.data[0].file.data.data);
       this.downloadUrl = window.URL.createObjectURL(new Blob([downloadFile.data[0].file.data.data]));
     
    },
    upLoad() {
      Methods.fileUpload(this.upFiles);
    },
    async getFiles() {
      let files_data = await Methods.dataGet();
      console.log(files_data)
      this.datas = files_data.data;
    },
  }
};
</script>
<style scoped>
.fileup {
  display: inline-flex;
  float: left;
  width: 100%;
}
li {
  text-align: left;
}
</style>
