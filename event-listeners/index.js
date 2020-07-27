console.log("bork");

const first = (str) => {
  return str + "1";
};

const second = (str) => {
  return str + "3";
};

const third = (str, cb) => {
  return cb(str);
};

console.log(third("0 ", first));
console.log(third("2 ", second));

window.addEventListener("click", function () {
  console.log("click");
});
