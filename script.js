var app = new Vue({
  el: "#app",
  data:{
    previouse: "",
    current: "",
    operator: null,
    ops:['-','+','*','/'],
  },
  methods: {
    press(number) {
      if(this.current === ""){
        if(number === "0" || number === "00") return
      }
      if(this.current === "0"){
        this.current = ""
      }
      this.current = `${this.current}${number}`;
    },
    updateDisplay(){
      this.previouse = this.current;
      this.current = "";
    },
    clear(){
      this.previouse ="";
      this.current = "";
    },
    del(){
      this.current = this.current.substring(0, this.current.length -1);
    },
    sqroot(operator){
      if(this.current === "" || this.current.endsWith(typeof(string))) return
      this.previouse = `${operator}${this.current}`;
      this.current = Math.sqrt(this.current)
      this.current = this.current.toString();
    },
    dot(operator){
      if(this.current === ""){
        this.current += `0${operator}`
      }
      if(operator === '.' && this.current.includes('.')) return
      if(this.current.indexOf('.') === -1) {
        this.press('.')
      } 
    },
    equals(){
      if(this.current === "" || this.current === "0" || this.current === "00" || this.current.endsWith('.') || this.ops.length == 0 ) return
      this.updateDisplay();
      this.current = eval(this.previouse);
      this.current = this.current.toString();
      this.ops = []
    },
    checkOperator(op){
      this.current = this.current.substring(0, this.current.length - 1)
      this.ops.push(op)
    },
    subtraction(op){
      if(this.current === "" || this.current === "0" || this.current.endsWith('-')) return
      this.ops = []
      this.checkOperator(op)
      this.current += op
      this.operator = (a, b) => a - b
    },
    sumation(op){
      if(this.current === "" || this.current === "0" || this.current.endsWith('+') ) return;
      this.ops = [];
      this.checkOperator(op)
      this.current += op
      this.operator = (a, b) => a + b;
    },
    multiplay(op){
      if(this.current === "" || this.current === "0" || this.current.endsWith('*') ) return;
      this.checkOperator(op)
      this.current += op
      this.operator = (a, b) => a * b;
    },
    divide(op){
      if(this.current === "" || this.current === "0" || this.current.endsWith('/') ) return;
      this.checkOperator(op)
      this.current += op
      this.operator = (a, b) => a / b;
    }
  }
})