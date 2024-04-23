#! /usr/bin/env node

import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 1234;

let pinAns = await inquirer.prompt([{
    name:"pinNumber",
    type:"number",
    message:"please enter your pin number",
}]);
    console.log("welcome to your account");

    let  atmMachine = await inquirer.prompt([{
    name:"action",
    type:"list",
    message:"pleas an action",
    choices:["check balance","withdraw","fastCash"],

}]);
if(atmMachine.action==="check balance"){
    console.log(`your current balance is:${myBalance}`);
}
else if(atmMachine.action ==="withdraw"){
    let withdrawAmount = await inquirer.prompt([{
        name:"amount",
        type:"number",
        message:"how much do you want to withdraw",

    }]);
    if(withdrawAmount.amount<myBalance){(
     myBalance-=withdrawAmount.amount);
     console.log(`your remaining balance is ${myBalance}`);}

     else if(withdrawAmount.amount>myBalance){
        console.log(`insufficient balance! /n your current is ${myBalance}`);}}
        else if(atmMachine.action==="fastCash"){
            let cashAmount = await inquirer.prompt([{
            name:"cash",
            type:"list",
            message:"choose your amount",
            Choices:["1000","2000","5000","1000"],}]);

            myBalance -= cashAmount.cash;
            console.log(`your remaining balance is${myBalance}`);}
           else if(pinAns.pinNumber!== myPin){
            console.log("incorrect pin! please try again ");
           }
        