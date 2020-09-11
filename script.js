var app = new Vue({
  el: "#app",
  data: {
    current: "",
    x: "",
    y: "",
    operator: null,
    changeMode: true
  },
  methods: {
    setNumber(digit){
      if(this.operator === null){
        this.x += digit;
        this.display = this.x;
      }
      else {
        this.y += digit;
        this.display = this.y;
      }
    },
    press(event) {
      let key = event.target.innerText;
      if(
        key != '=' &&
        key != 'C' &&
        key != '×' &&
        key != '÷' &&
        key != '√' &&
        key != '←'
      ) {
        app.current += key;
      } else if (key === "=") {
        equals();
      } else if (key === "C") {
        clear();
      } else if (key === "×") {
        multiply();
      } else if (key === "÷") {
        divide();
      } else if (key === "√") {
        squareRoot();
      } else if (key === "←") {
        backspace();
      } 
    },
    dot(){
      if(app.current.indexOf('.') === -1) {
        app.current = `${app.current}${'.'}`;
      }
    }
  }
});

function equals() {
  if ((app.current).indexOf("^") > -1) {
    var base = (app.current).slice(0, (app.current).indexOf("^"));
    var exponent = (app.current).slice((app.current).indexOf("^") + 1);
    app.current = eval("Math.pow(" + base + "," + exponent + ")");
  } else {
    app.current = eval(app.current)
  }
}
function clear() {
  app.current = ""
}
function multiply() {
  app.current += "×"
}
function divide() {
  app.current += "÷"
}
function sub() {
  app.current += "-"
}
function plus() {
  app.current += "+"
}
function squareRoot() {
  app.current = Math.sqrt(app.current)
}
function backspace() {
  app.current = app.current.substring(0, app.current.length -1);
}