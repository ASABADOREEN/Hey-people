/* control structures are portions of program code containing statements within them
they are of two kinds;
conditionals-where the excution depend on the circumstances e.g an if condition*/
//if we use
//loops; these excute certain statements, if it evaluates to "true"
//in while loop, we evaluate a acondition

let num1 = 10
let num2 = 20
if (num1>num2)
{
    console.log("num1 is less than num2")
}
else if(num1==num2)
 {
    console.log("num2 is greater than or eqaul to num1")
}
else{
    console.log("num2 is greater than num1")
}

let num1 = 10
let num2 = 20
if(num1>num2)
{
    console.log("num1 is less than num2")
}
else if(num1==num2)
{
    console.log("num2 is greater than num1")
}




else{
console.log("num2 is greater than num1")
}

/*the syntax for a while loop looks exactly like that of an if condition*/
let i = 0
while(i<5){
    console.log(i)
    i++
}