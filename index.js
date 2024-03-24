#!  /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter firstnumber", type: "number", name: "firstnumber" },
    { message: "Enter secondnumber", type: "number", name: "secondnumber" },
    {
        message: "select one of the operator",
        type: "list",
        name: "operator",
        choices: [
            "Addition", "Subtraction", "Multiplication", "Division", "Exponentation", "Modules",
        ],
    },
]);
if (answer.operator === "Addition") {
    console.log(answer.firstnumber + answer.secondnumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstnumber - answer.secondnumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstnumber * answer.secondnumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstnumber / answer.secondnumber);
}
else if (answer.operator === "Exponentation") {
    console.log(answer.firstnumber ** answer.secondnumber);
}
if (answer.operator === "Modules") {
    console.log(answer.firstnumber % answer.secondnumber);
}
else
    console.log("please select the valid operator");
