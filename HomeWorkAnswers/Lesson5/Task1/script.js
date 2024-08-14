let getValueWeight = () =>
  parseFloat(document.querySelector("#valueWeight").value);
let getValueHeight = () =>
  parseFloat(document.querySelector("#valueHeight").value);

let imt = (weight, height) => weight / height ** 2;

let categoryIMT = (valueIMT) => {
  if (valueIMT < 18.5) {
    return "Недостатня вага";
  } else if (valueIMT >= 18.5 && valueIMT < 25) {
    return "Нормальна вага!";
  } else if (valueIMT >= 25 && valueIMT < 30) {
    return "Надмірна вага!";
  } else {
    return "Ожиріння!!!";
  }
};

let convert = (converter) => {
  return () => {
    let tempW = getValueWeight();
    let tempH = getValueHeight();
    let valueIMT = converter(tempW, tempH);
    let value = categoryIMT(valueIMT);
    showResult(value);
  };
};

document.querySelector("#btnIMT").onclick = convert(imt);

function showResult(result) {
  let output = document.querySelector("#output");
  output.innerHTML = result;
}
