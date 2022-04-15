const op1 = document.querySelector("#operand1")
const op2 = document.querySelector("#operand2")
const res1 = document.querySelector("#ran1")
const res2 = document.querySelector("#ran2")
const operator = document.querySelector("#operator")
const qn1 = document.querySelector("#qn1")
const qn2 = document.querySelector("#qn2")
const ansbydev = document.querySelector("#ansauto")
const userans = document.querySelector("#userans")

const ope = document.querySelectorAll(".ope")
const qn = document.querySelectorAll(".qn")

var ansact;


const cng =()=>{
    res1.innerText = op1.value
    res2.innerText = op2.value

}


ope.forEach(element => {
    element.addEventListener("change",cng)
    
});

cng()

qn.forEach(ele=>{
    ele.style.display = "inline"
   
})

const qnsgen=()=>{
    qn1.innerText = Math.floor( Math.random() * Math.pow(10,2))
    qn2.innerText = Math.floor( Math.random() * Math.pow(10,2))
    findans()
    ansbyuser =0
    userans.innerText=""
    check.innerText =""

}

const ans =()=>{
    console.log( qn1.innerText + qn2.innerHTML)
}

const findans= ()=>{
    console.log(operator.value);
    switch (operator.value) {
        case "add":
            ansact =Number( qn1.innerText) + Number( qn2.innerHTML)
            break;
    	case "sub":
            ansact =Number( qn1.innerText) - Number( qn2.innerHTML)
            break;
        case "mul":
            ansact = Number(qn1.innerText) * Number( qn2.innerHTML)
            break;
        case "div":
            ansact =Number( qn1.innerText) / Number( qn2.innerHTML)
            break;
        default:
            ansact ="error due to ..."
            break;
    }

    ansbydev.innerText = Math.abs( ansact)
}

const btn = document.querySelectorAll(".btn")

var ansbyuser =  0

const handleinput=(element)=>{
	var digit= element.target.value
    ansbyuser = ansbyuser * 10  + Number( digit)
    userans.innerText = ansbyuser
    ansCheck()
}

btn.forEach(element => {
    element.addEventListener('click',handleinput)
});

const check = document.querySelector("#check")

const ansCheck=()=>{
    if (ansbyuser == Math.abs( ansact)) {
        check.innerText =" milooo"
        
    }
}