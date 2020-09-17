var app = new Vue({
  el: "#app",
  data:{
    previouse: "",
    current: "",
    operator: null,
  },
  methods: {
    press(number) {
      this.current = `${this.current}${number}`;
    },
    subtraction(){
      this.current += "-"
      this.operator = (a, b) => a - b;
    },
    sumation(){
      this.current += "+"
      this.operator = (a, b) => a + b;
    },
    multiplay(){
      this.current += "*"
      this.operator = (a, b) => a * b;
    },
    divide(){
      this.current += "/"
      this.operator = (a, b) => a / b;
    },

    clear(){
      this.previouse ="";
      this.current = "";
    },
    del(){
      this.current = this.current.substring(0, this.current.length -1);
    },
    sqroot(){
      this.current = Math.sqrt(this.current)
    },
    dot(){
      if(this.current.indexOf('.') === -1) {
        this.press('.');
      } 
    },
    equals(){
      this.previouse = this.current
      this.current = eval(this.current)
    }
  }
})