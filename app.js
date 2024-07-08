import add from "./index.js";
console.log(add(9, 9));
///////////////examples//////////////
//import sub from "./index.js"
//console.log(sub(1,1,1,1));
//import { mult } from "./index.js";
//console.log(mult(6,4));
//import { div } from "./index.js";
//console.log(div(5,2));
//import { userNames, myChoice, favFlower, favDress } from "./index.js";
//console.log(userNames);
///////////////examples//////////////
//import { myChoice } from "./index.js";
//console.log(myChoice);
//import { favFlower } from "./index.js";
//console.log(favFlower);
///////////////example///////////////
//import { favDress } from "./index.js";
//console.log(favDress);
//import { obj } from "./index.js";
//console.log(obj);
///////////////example///////////////
//import { myName } from "./index.js";
///console.log(myName);
//////////////step03a_modules example///////////
// import { Name as you } from "./index.js";   
// console.log(you.status);    
// import { userNames,favFlower } from "./index.js";
//console.log(userNames,favFlower);
///////////////////////step03c import inquirer////////////////////////////
//import inquirer from "inquirer";
// let saba = await inquirer.prompt({
// name: "name",
// type: "input",
// message: "Please Enter Your Name...",
// })
// console.log(`Hello! ${saba.name}`);
//////////////////////step03d import chalk examples////////////////////////////
//import inquirer from "inquirer";
//import chalk from "chalk";
//let answers = await inquirer.prompt([{
//name: "age",
// type: "number",
// message: "Enter your Age:"}
//]);
//console.log(chalk.blue("Insha Allah, in " + (60 - answers.age) + " years you will be 60 years old."));
import inquirer from "inquirer";
import chalk from "chalk";
let saba = await inquirer.prompt([{
        name: "saba",
        type: "input",
        message: chalk.greenBright("Tell me about ypurself....?")
    }]);
console.log(`Hello! ${saba.name}`);
