function getAmt(){
    /* Function takes in three values from html script "tipcalc.html" and calculates how 
    a bill should be equally split. If an invalid input is included the form resets
    */

    //instantiate the neccesray variables from the html
    bill = document.getElementById("billAmt").value;
    numPeople = document.getElementById("people").value;
    tipPercent = document.getElementById("tip").value;

    //ensure values are valid inputs
    if(bill < 0 || numPeople < 1|| tipPercent < 0 || !Number.isInteger(bill) || 
    !Number.isInteger(numPeople) || !Number.isInteger(tipPercent)){
        alert("Please enter valid values")
        document.getElementById("calcForm").reset();
        return false;
    }

    //calculate the bill cuts
    finalPerc = percent(tipPercent)
    billAmt = calcBill(bill, numPeople, finalPerc);

    //update the html line with the found ammount and return false
    document.getElementById('out').innerHTML = "You owe $" + billAmt +" per person";
    return false;
}

//helper function to find percent
const percent = value => {
    return value/100;
}

//helper function that takes completed percentage and outputs desired result
const calcBill = (billAmt, numPeep, tipPerc) =>{
    total = Number(billAmt) + (Number(billAmt) * tipPerc)
    return total/numPeep
}