
import Api from './index'


export default {
  //データベースのデータ取得　backendのindex.jsに飛ぶ
  testGetBooks() {
    return Api().get('/mydb');
  },
  //テキスト表示　backendのindex.jsに飛ぶ
  testPosting() {
    const item = {
      text: 'Success!',
      sampletext: '見えた！'
    };
    return Api().post('/test', item);
  },
  //テキスト送信　backendのindex.jsに飛ぶ
  dataPosting() {
    const option = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data'
      },
      data: document.getElementById("text").value

    };
    return Api().post('/data', option);
  },
  //imageファイル送信　backendのindex.jsに飛ぶ
  fileUpload(imageFile) {
    const formData = new FormData();
    formData.append('file', imageFile);
    formData.append('header', { 'Content-Type': 'multipart/form-data' });
    formData.append('fileName', document.getElementById("datafile").value);
    return Api().post('/file', formData);


    // 他の処理も追加可能
  }
}