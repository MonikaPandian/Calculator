
var container = document.createElement("div")
container.classList.add("container")
var calus= document.createElement("div")
calus.classList.add("calus")
let span= document.createElement("span")
span.classList.add("text-right")
span.setAttribute("id","span")
var input = document. createElement("input") 
input. setAttribute("type","text")
input.setAttribute("id","input")
input.classList.add("text-right","form-control")

var one = document.createElement("button")
one.classList.add("bg-primary","text-light")
one.setAttribute("id","one")
one.setAttribute("value","1")
one.innerText="1"

var two = document.createElement("button")
two.classList.add("bg-primary","text-light")
two.setAttribute("id","two")
two.setAttribute("value","2")
two.innerText="2"

var three = document.createElement("button")
three.classList.add("bg-primary","text-light")
three.setAttribute("id","three")
three.setAttribute("value","3")
three.innerText="3"

var four = document.createElement("button")
four.classList.add("bg-primary","text-light")
four.setAttribute("id","four")
four.setAttribute("value","4")
four.innerText="4"

var five = document.createElement("button")
five.classList.add("bg-primary","text-light")
five.setAttribute("id","five")
five.setAttribute("value","5")
five.innerText="5"

var six = document.createElement("button")
six.classList.add("bg-primary","text-light")
six.setAttribute("id","six")
six.setAttribute("value","6")
six.innerText="6"

var seven = document.createElement("button")
seven.classList.add("bg-primary","text-light")
seven.setAttribute("id","seven")
seven.setAttribute("value","7")
seven.innerText="7"

var eight = document.createElement("button")
eight.classList.add("bg-primary","text-light")
eight.setAttribute("id","eight")
eight.setAttribute("value","8")
eight.innerText="8"

var nine = document.createElement("button")
nine.classList.add("bg-primary","text-light")
nine.setAttribute("id","nine")
nine.setAttribute("value","9")
nine.innerText="9"

var zero = document.createElement("button")
zero.classList.add("bg-primary","text-light")
zero.setAttribute("id","zero")
zero.setAttribute("value","0")
zero.innerText="0"

var equal = document.createElement("button")
equal.classList.add("bg-success","text-light")
equal.setAttribute("id","equal")
equal.setAttribute("value","=")
equal.innerText="="

var multi = document.createElement("button")
multi.classList.add("bg-warning","text-light")
multi.setAttribute("id","multi")
multi.setAttribute("value","*")
multi.innerText="x"

var add = document.createElement("button")
add.classList.add("bg-warning","text-light")
add.setAttribute("id","add")
add.setAttribute("value","+")
add.innerText="+"

var divi = document.createElement("button")
divi.classList.add("bg-warning","text-light")
divi.setAttribute("id","divi")
divi.setAttribute("value","/")
divi.innerText="/"

var sub = document.createElement("button")
sub.classList.add("bg-warning","text-light")
sub.setAttribute("id","sub")
sub.setAttribute("value","-")
sub.innerText="-"

var clear = document.createElement("button")
clear.classList.add("bg-danger","text-light")
clear.setAttribute("id","clear")
clear.setAttribute("value","")
clear.innerText="C"

         container.append(calus)
         calus.append(span)
         calus.append(input)
         calus.append(one)
         calus.append(two)
         calus.append(three)
         calus.append(four)
         calus.append(five)
         calus.append(six)
         calus.append(seven)
         calus.append(eight)
         calus.append(nine)
         calus.append(zero)
         calus.append(sub)
         calus.append(add)
         calus.append(multi)
         calus.append(divi)
         calus.append(clear)
         calus.append(equal)

         document.body.append(container)
         

var calus=document.querySelector('.calus')
calus.addEventListener('click', display)
clear.addEventListener('click',clear)
equal.addEventListener('click', result)

var input= document.querySelector('.calus')
var finalresult=document.querySelector('#input')
result.finalresult=""
document.body.addEventListener('keypress',keypress)


function display(event){
    var span = document.querySelector('#span')
    if(event.target.value===undefined){
       span.innerHTML = span.innerHTML+ ""
    }else{
        span.innerHTML= span.innerHTML+event.target.value;
    }

}
function clear(){
    var span = document.querySelector("#span")
    var finalresult = document.querySelector("#input")
    span.innerHTML=""
    finalresult.value = '0'
}
function result(){
    var span = document.querySelector('#span'); 
    var finalresult = document.querySelector('#input')
    finalresult.value = eval(span.innerText);
}
function calculation(num1,operator,num2){
    if(operator === "+"){
        return[num1+num2]
    }else if(operator === "-"){
        return num1-num2    
    }else if(operator === "*"){
        return num1*num2
    }else if(operator === "/"){
        return num1/num2
    }
}

function keypress(event){
    var span = document.querySelector("#span");
    if((event.key<10 && event.key>=0) || event.key==="*" || event.key==="-" || event.key==="+" || event.key==="/" ){
        span.innerText += event.key
    }else if(event.key==="Enter"){
        result()
    }
}