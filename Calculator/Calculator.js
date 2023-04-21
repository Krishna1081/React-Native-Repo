const display = document.getElementById("display")
const clear = document.getElementById("clear")

const op = document.getElementsByClassName("operator-button")

const equal = document.getElementById("equal")
const numbers = document.getElementsByClassName("number-button")

for(let i = 0; i < op.length; i++){
  op[i].addEventListener('click', function(){
    display.innerHTML += op[i].innerHTML
  })
}

clear.addEventListener('click', function(){
  display.innerHTML = ""
})

for(let i = 0; i < numbers.length; i++){
  numbers[i].addEventListener('click', function(){
    display.innerHTML += numbers[i].innerHTML
  })
}

equal.addEventListener('click', function(){
  try{
    const equation = display.innerHTML
    const solution = eval(equation)
    display.innerHTML = eval(solution)
  }catch(error){
    display.innerHTML = 'Error'
  }
})

