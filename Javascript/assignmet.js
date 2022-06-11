/*
a function called wrker is defined,
the function takes on three parameters that is to say name,age and position as arguments.

*/

function wrker(name, age, position) {
    // in this function,the name is returned as the output when invoked.
    return name;



    /*
    The function wrkSal below takes only one parameter called sal as an argument.
    
    
    */
    function wrkSal(sal) {
        //worker salary is assigned to the value of the function argument sal as shown above.
        const wrkSal = sal;
        //When instructed, the value of wrksal is output as sal as shown above.
        return wrkSal;
    }

    /*
    in the function called empNSSF, it takes one parameter called rate as the argument.
    this is where the NSSF benefits for the employers are calculated.
    
    */
    function empNSSF(rate) {
        //the rate passed as the argument is to set to get NSSFrate
        const nssfrate = rate;
        //function wrksal is assigned to a variable pay
        let pay = wrkSal(2000000);
        //to calculate nssf,the formula below is used that is to say; the product of rate by pay.
        let nssf = (rate / 100) * pay;
        //to calculate finalnssf, is done by substracting nssf from pay and assigning to varriable finalnssf
        let fnalnssf = pay - nssf;
        //when invoked, the function empNSSF outputs the value as finalnssf.
        return fnalnssf
    }
    /*
    the function is called paye
    it takes one parameter that is rate as the argument.
    
    */

    function paye(rate) {
        //the function paye assigns payerate as rate
        const payerate = rate;
        //functin wrksal is assigned to a variable pay
        let pay = wrkSal(2000000);
        //to calculate pay as you earn,we use the formula below that is to say; rate by pay
        let payee = (rate / 100) * pay;
        //to calculate finalpaye, we subtract payee from pay.
        let fnalpaye = pay - payee;
        //when invoked, function paye returns finalpaye.
        return fnalpaye;
    }

    /*
    this is a standard function that calculates the employer's net pay.
    
    */
    function emplynetpay() {
        //when invoked, the function outputs the following in console 
        console.log('Employee ' + wrker('osman', 27, 'manager') + 'earns: ' + wrkSal(2000000));
        console.log('his pay after nssf is : ', empNSSF(11));
        console.log('his pay after payee is : ', paye(30));

        //declaring the emplnetpay within the function is not right
        emplynetpay();
    }
}