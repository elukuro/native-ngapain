// import axios from 'axios';
let suratList = require('./quran/list.json');

let surahCollection = {
  1: require('./quran/surat/1.json'),
};

const API = {
  getSurah: async function () {
    return suratList;
  },
  getDetail: async function (params) {
    if (params) {
      let surat = surahCollection[params.suratId];
      return surat.data.filter(item => item.aya_number === params.ayat);
    }
    return null;
  },
};
export default API;
