let result = document.getElementById("input-text");

let calculate = (number) => {
  result.value += number;
};

let equals = () => {
  try {
    result.value = eval(result.value);
  } catch (error) {
    alert("Invalid operation.");
  }
};

let clr = () => {
  result.value = "";
};

let del = () => {
  result.value = result.value.slice(0, -1);
};
