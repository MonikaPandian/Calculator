var container = document.createElement("div")
container.classList.add("container")

var calus= document.createElement("div")
calus.classList.add("calus")

let span= document.createElement("span")
span.classList.add("text-right")
span.setAttribute("id","span")

var headingdiv=document.createElement("div")

var title=document.createElement("h1")
title.setAttribute("id","title")
title.innerText="Calculator with DOM"

var description=document.createElement("p")
description.innerText="Calculator"
description.setAttribute("id","description")

var input = document. createElement("input") 
input.setAttribute("type","text")
input.setAttribute("id","result")
input.classList.add("text-right","form-control")

const lineBreak = document.createElement("br")
const lineBreak1 = document.createElement("br")
const lineBreak2 = document.createElement("br")
const lineBreak3 = document.createElement("br")
const lineBreak4 = document.createElement("br")

var one = document.createElement("button")
one.classList.add("bg-primary","text-light")
one.setAttribute("id","1")
one.setAttribute("type","button")
one.setAttribute("value","1")
one.innerText="1"
one.addEventListener("click",display)

var two = document.createElement("button")
two.classList.add("bg-primary","text-light")
two.setAttribute("id","2")
two.setAttribute("type","button")
two.setAttribute("value","2")
two.innerText="2"
two.addEventListener("click",display)

var three = document.createElement("button")
three.classList.add("bg-primary","text-light")
three.setAttribute("id","3")
three.setAttribute("type","button")
three.setAttribute("value","3")
three.innerText="3"
three.addEventListener("click",display)

var four = document.createElement("button")
four.classList.add("bg-primary","text-light")
four.setAttribute("id","4")
four.setAttribute("type","button")
four.setAttribute("value","4")
four.innerText="4"
four.addEventListener("click",display)

var five = document.createElement("button")
five.classList.add("bg-primary","text-light")
five.setAttribute("id","5")
five.setAttribute("type","button")
five.setAttribute("value","5")
five.innerText="5"
five.addEventListener("click",display)

var six = document.createElement("button")
six.classList.add("bg-primary","text-light")
six.setAttribute("id","6")
six.setAttribute("type","button")
six.setAttribute("value","6")
six.innerText="6"
six.addEventListener("click",display)

var seven = document.createElement("button")
seven.classList.add("bg-primary","text-light")
seven.setAttribute("id","7")
seven.setAttribute("type","button")
seven.setAttribute("value","7")
seven.innerText="7"
seven.addEventListener("click",display)

var eight = document.createElement("button")
eight.classList.add("bg-primary","text-light")
eight.setAttribute("id","8")
eight.setAttribute("type","button")
eight.setAttribute("value","8")
eight.innerText="8"
eight.addEventListener("click",display)

var nine = document.createElement("button")
nine.classList.add("bg-primary","text-light")
nine.setAttribute("id","9")
nine.setAttribute("type","button")
nine.setAttribute("value","9")
nine.innerText="9"
nine.addEventListener("click",display)

var zero = document.createElement("button")
zero.classList.add("bg-primary","text-light")
zero.setAttribute("id","0")
zero.setAttribute("type","button")
zero.setAttribute("value","0")
zero.innerText="0"
zero.addEventListener("click",display)

var equal = document.createElement("button")
equal.classList.add("bg-success","text-light")
equal.setAttribute("id","equal")
equal.setAttribute("type","button")
equal.setAttribute("value","=")
equal.innerText="="
equal.addEventListener("click",result)

var multi = document.createElement("button")
multi.classList.add("bg-warning","text-light")
multi.setAttribute("id","multi")
multi.setAttribute("type","button")
multi.setAttribute("value","*")
multi.innerText="x"
multi.addEventListener("click",display)

var add = document.createElement("button")
add.classList.add("bg-warning","text-light")
add.setAttribute("id","add")
add.setAttribute("type","button")
add.setAttribute("value","+")
add.innerText="+"
add.addEventListener("click",display)

var divi = document.createElement("button")
divi.classList.add("bg-warning","text-light")
divi.setAttribute("id","divi")
divi.setAttribute("type","button")
divi.setAttribute("value","/")
divi.innerText="/"
divi.addEventListener("click",display)

var subtract = document.createElement("button")
subtract.classList.add("bg-warning","text-light")
subtract.setAttribute("id","subtract")
subtract.setAttribute("type","button")
subtract.setAttribute("value","-")
subtract.innerText="-"
subtract.addEventListener("click",display)

var clr = document.createElement("button")
clr.classList.add("bg-danger","text-light")
clr.setAttribute("id","clear")
clr.setAttribute("type","button")
clr.setAttribute("value","")
clr.innerText="C"
clr.addEventListener("click",clear)

        container.append(headingdiv)
        headingdiv.append(title)
        headingdiv.append(description)
        headingdiv.append(calus)
         calus.append(span)
         calus.append(input)
         calus.append(lineBreak)
         calus.append(lineBreak1)
         calus.append(seven)
         calus.append(eight)
         calus.append(nine)
         calus.append(add)
         calus.append(lineBreak2)
         calus.append(four)
         calus.append(five)
         calus.append(six)
         calus.append(subtract)
         calus.append(lineBreak3)
         calus.append(one)
         calus.append(two)
         calus.append(three)
         calus.append(multi)
         calus.append(lineBreak4)
         calus.append(clr)
         calus.append(zero)
         calus.append(equal)
         calus.append(divi)
         document.body.append(container)
         
         
document.body.addEventListener('keypress',keypress)

function display(event){    
    if(event.target.value===undefined){
       span.innerHTML = span.innerHTML+ ""
    }else{
        span.innerHTML= span.innerHTML+event.target.value;
    }
}

function clear(){
    var span = document.querySelector("#span")
    var finalresult = document.querySelector("#result")
    span.innerHTML=""
    finalresult.value = '0'
}

function result(){
    var span = document.querySelector('#span'); 
    var finalresult = document.querySelector('#result')
    finalresult.value = eval(span.innerText);
}

function keypress(event){    
    if((event.key<10 && event.key>=0) || event.key==="*" || event.key==="-" || event.key==="+" || event.key==="/" ){
        span.innerText += event.key
    }else if(event.key==="Enter"){
        result()
    }
    else if(event.key==="="){
        result()
    }
    else{
        alert("only numbers are allowed")
    }
}