// import axios from 'axios';
let suratList = require('./quran/list.json');

let surahCollection = {
  78: require('./quran/surat/78.json'),
  79: require('./quran/surat/79.json'),
  80: require('./quran/surat/80.json'),
  81: require('./quran/surat/81.json'),
  82: require('./quran/surat/82.json'),
  83: require('./quran/surat/83.json'),
  84: require('./quran/surat/84.json'),
  85: require('./quran/surat/85.json'),
  86: require('./quran/surat/86.json'),
  87: require('./quran/surat/87.json'),
  88: require('./quran/surat/88.json'),
  89: require('./quran/surat/89.json'),
  90: require('./quran/surat/90.json'),
  91: require('./quran/surat/91.json'),
  92: require('./quran/surat/92.json'),
  93: require('./quran/surat/93.json'),
  94: require('./quran/surat/94.json'),
  95: require('./quran/surat/95.json'),
  96: require('./quran/surat/96.json'),
  97: require('./quran/surat/97.json'),
  98: require('./quran/surat/98.json'),
  99: require('./quran/surat/99.json'),
  100: require('./quran/surat/100.json'),
  101: require('./quran/surat/101.json'),
  102: require('./quran/surat/102.json'),
  103: require('./quran/surat/103.json'),
  104: require('./quran/surat/104.json'),
  105: require('./quran/surat/105.json'),
  106: require('./quran/surat/106.json'),
  107: require('./quran/surat/107.json'),
  108: require('./quran/surat/108.json'),
  109: require('./quran/surat/109.json'),
  110: require('./quran/surat/110.json'),
  111: require('./quran/surat/111.json'),
  112: require('./quran/surat/112.json'),
  113: require('./quran/surat/113.json'),
  114: require('./quran/surat/114.json'),
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
