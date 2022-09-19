const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  //kita jalankan fungsi async awaitnya
  let xxi = await promiseTheaterIXX();
  let cgv = await promiseTheaterVGC();

  //disini saya pakai filter, bisa juga pakai looping
  return xxi.filter((i) => i.hasil === emosi).length + cgv.filter((i) => i.hasil === emosi).length;
};

module.exports = {
  promiseOutput,
};
