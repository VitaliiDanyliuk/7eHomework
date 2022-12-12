window.addEventListener('load', function () {

  showM()

  let calculator = {
    fNum: null,
    sNum: null,
    operator: null,
    waitSecNum: false,
    displayNum: '0',
    '+': function (a = this.fNum, b = this.sNum) {return a + b},
    '-': function (a = this.fNum, b = this.sNum) { return a - b },
    '*': function (a = this.fNum, b = this.sNum) {return a * b},
    '/': function (a = this.fNum, b = this.sNum) {return a / b},
  };

  function input(num) {
    if (calculator.waitSecNum) {
      calculator.displayNum = num;
      calculator.waitSecNum = false;
    } else {
      calculator.displayNum = (calculator.displayNum === '0') ? num : calculator.displayNum + num;
    }
  }

  function inputDecimal(dot) {
    if (!calculator.displayNum.includes(dot)) {
      calculator.displayNum += dot;
    }
  }

  function handleOperator(nextOperator) {
    const { fNum, displayNum, operator } = calculator;
    const inputValue = parseFloat(displayNum);

    if (operator && calculator.waitSecNum) {
      calculator.operator = nextOperator;
      return;
    }

    if (fNum == null && !isNaN(inputValue)) {
      calculator.fNum = inputValue;
    } else if (operator) {
      const result = calculator[operator](fNum, inputValue);

      calculator.displayNum = String(result);
      calculator.fNum = result;
    }

    calculator.waitSecNum = true;
    calculator.operator = nextOperator;
  }

  function resetCalculator() {
    calculator.displayNum = '0';
    calculator.waitSecNum = false;
    calculator.operator = null;
  }

  const display = document.querySelector('.display').querySelector('input');

  function updateDisplay() {
    display.value = calculator.displayNum;
  }

  function saveSessionData(){
    sessionStorage.setItem('savedNum', display.value)
  }

  function showM() {
      if (sessionStorage.savedNum) {
        m.style.visibility = 'visible'
      } else {
        m.style.visibility = 'hidden'
      }
    }

  const btn = document.querySelector('.orange');
  btn.disabled = false;
  const keys = document.querySelector('.keys');
  let k = 1;
  keys.addEventListener('click', function (e) {
     if (e.target.value === 'mrc'){
      if (display.value === sessionStorage.getItem('savedNum')){
        sessionStorage.clear()
      }
    display.value = sessionStorage.getItem('savedNum')

    showM()
    }

    if (e.target.value === 'm+' || e.target.value === 'm-'){
      saveSessionData()
      showM()

      return;
    }
    if (e.target.value === 'C') {
      resetCalculator();
      updateDisplay();
      return;
    }

    if (e.target.closest('.pink, .orange')) {
      handleOperator(e.target.value);
      updateDisplay();
      return;
    }

    if (e.target.value === '.') {
      inputDecimal(e.target.value);
      updateDisplay();
      return;
    }

    if (!isNaN(e.target.value)) {
      input(e.target.value);
      updateDisplay();
      return;
    }
  })
})