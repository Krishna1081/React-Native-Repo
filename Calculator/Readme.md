# Calculator App 

## How My Calculator Works
Welcome to my calculator! This calculator allows you to perform basic arithmetic operations such as addition, subtraction, multiplication, and division. To use the calculator, simply click on the buttons to input the numbers and operators you want to use, and then click the equal sign to get your answer.

The calculator is built using HTML, CSS, and JavaScript. The HTML is used to create the structure of the calculator, while CSS is used to style it and make it visually appealing. JavaScript is used to make the calculator functional by handling user input and performing the necessary calculations.

Currently, the calculator performs basic arithmetic operations using the built-in JavaScript eval() function. However, there are several improvements that could be made to make the calculator more robust and user-friendly. For example, the calculator could be modified to handle more complex mathematical expressions, such as those involving parentheses or exponentiation. Additionally, error handling could be added to display an error message when the user inputs an invalid equation, such as one involving division by zero.

Here is an example of the JavaScript code used to handle user input and perform calculations:

            const display = document.getElementById("display")
            const clear = document.getElementById("clear")

            const op = document.getElementsByClassName("op")
            const equal = document.getElementById("equal")
            const numbers = document.getElementsByClassName("Number")

            for(let i = 0; i < op.length; i++){
            op[i].addEventListener('click', function(){
                display.innerHTML += op[i].innerHTML
            })
            }

            clear.addEventListener('click', function(){
            display.innerHTML = `<p></p>`
            })

            for(let i = 0; i < numbers.length; i++){
            numbers[i].addEventListener('click', function(){
                display.innerHTML += numbers[i].innerHTML
            })
            }

            equal.addEventListener('click', function(){
            const equation = display.innerHTML
            display.innerHTML = eval(equation)
            })

## Conclusion:
Overall, the calculator provides a simple and convenient way to perform basic arithmetic operations. With further development and improvement, it has the potential to become an even more powerful tool for performing mathematical calculations.