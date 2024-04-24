import inquirer from "inquirer";
import chalk from "chalk";
let todoList = [];
let conditions = true;
console.log(chalk.red("\n \tWelcome to my to do list appliaction \n"));
while (conditions) {
    let addTasks = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: chalk.green("Enter your new task : "),
        }
    ]);
    todoList.push(addTasks.task);
    console.log(`${addTasks.task} task added to list successfully.`);
    let addmoreTasks = await inquirer.prompt([
        {
            name: "addmore",
            type: "confirm",
            message: "would you like  to add another task to the list?",
            default: "false",
        }
    ]);
    conditions = addmoreTasks.addmore;
}
console.log("your todo list udated successfully:", todoList);
