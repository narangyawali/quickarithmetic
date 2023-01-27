const op1 = document.querySelector("#operand1");
const op2 = document.querySelector("#operand2");
const res1 = document.querySelector("#ran1");
const res2 = document.querySelector("#ran2");
const operator = document.querySelector("#operator");
const qn1 = document.querySelector("#qn1");
const qn2 = document.querySelector("#qn2");
const ansbydev = document.querySelector("#ansauto");
const userans = document.querySelector("#userans");
const time = document.querySelector("#time");
const displayedOperator = document.querySelector("#displayedOperator");
const back = document.querySelector("#back");

const ope = document.querySelectorAll(".ope");
const qn = document.querySelectorAll(".qn");

var ansact;

var startTime;
var endTime;
var timeDiff;

const cng = () => {
  res1.innerText = op1.value;
  res2.innerText = op2.value;
};

ope.forEach((element) => {
  element.addEventListener("change", cng);
});

cng();

qn.forEach((ele) => {
  ele.style.display = "inline";
});

const getRandNum = () => {
  var randNum = Math.floor(Math.random() * Math.pow(10, Number(op1.value)));

  if (randNum <= 1) {
    return getRandNum();
  } else {
    return randNum;
  }
};

const qnsgen = () => {
  qn1.innerText = getRandNum();
  qn2.innerText = getRandNum();

  findans();
  ansbyuser = 0;
  userans.innerText = "";
  userans.classList.remove("green");

  // check.innerText =""
  startTime = Date.now();
  time.innerText = "time";
};

const ans = () => {
  console.log(qn1.innerText + qn2.innerHTML);
};

const findans = () => {
  console.log(operator.value);
  displayedOperator.innerText = operator.value;
  switch (operator.value) {
    case "add":
      ansact = Number(qn1.innerText) + Number(qn2.innerHTML);
      break;
    case "sub":
      ansact = Number(qn1.innerText) - Number(qn2.innerHTML);
      break;
    case "mul":
      ansact = Number(qn1.innerText) * Number(qn2.innerHTML);
      break;
    case "div":
      // ansact =Number( qn1.innerText) / Number( qn2.innerHTML)
      // for ease result is in integer
      ansact = parseInt(Number(qn1.innerText) / Number(qn2.innerHTML));
      break;
    default:
      ansact = "error due to ...";
      break;
  }

  // ansbydev.innerText = Math.abs( ansact)
};

operator.addEventListener("change", findans);

const btn = document.querySelectorAll(".btn");

var ansbyuser = 0;

const handleinput = (element) => {
  userans.classList.remove("green");
  var digit = element.target.value;
  ansbyuser = ansbyuser * 10 + Number(digit);
  userans.innerText = ansbyuser;
  ansCheck();
};

btn.forEach((element) => {
  element.addEventListener("click", handleinput);
});

const handleKeybaordInput = (keyboardInput) => {
  console.log(keyboardInput);
  

  if (keyboardInput.keyCode >= 48 && keyboardInput.keyCode <= 57) {
      console.log("definitely a number");
      var digit = Number(keyboardInput.key);
      console.log(digit);

      userans.classList.remove("green");
      ansbyuser = ansbyuser * 10 + Number(digit);
      userans.innerText = ansbyuser;
      ansCheck();
      
  }

  if(keyboardInput.code == "Space" ||keyboardInput.code == "Enter"||keyboardInput.code=="KeyN"){
qnsgen()  }


};

document.addEventListener("keypress", handleKeybaordInput);

const keydown =(eve)=>{
    console.log(eve);
    if (eve.key=="Backspace" ) {
        backevent()
    }
    if (eve.key=="b") {
      backevent()
    }
}



document.addEventListener("keydown", keydown);

// const check = document.querySelector("#check")

const ansCheck = () => {
  if (ansbyuser == Math.abs(ansact)) {
    // check.innerText =" milooo"
    // ans check and give feedback
    userans.classList.add("green");
    endTime = Date.now();
    timeDiff = Math.round((endTime - startTime) / 100) / 10;
    console.log(timeDiff);
    time.innerText = timeDiff + "  sec";
  } else {
    userans.classList.remove("green");
  }
};

const backevent = () => {
  ansbyuser = Math.floor(ansbyuser / 10);
  userans.innerText = ansbyuser;
  ansCheck();
};

back.addEventListener("click", backevent);

qnsgen();
