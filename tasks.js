
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`⁠ Welcome to ${name}'s application! ⁠`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  if (text === 'quit'|| text==="exit") {
    quit();
  }
  else if(text === 'hello'){
    hello();
  }
  else if(text==='help'){
    help();
  }
  else{
    unknownCommand(text);
  }
}



/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * Says hello
 *
 * @returns {void}
 */
function hello(){
  console.log('hello!')
}


/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}
function help() {
  console.log("Available commands:");
  console.log("hello to Offers a friendly introduction.");
  console.log("quit or exit  to Exits the application.");
  console.log("help  to Lists all available commands.");
}

function onDataReceived(input) {
  console.log(`Input received: ${input}`); 

  const cleanedInput = input.trim(); 
  const words = cleanedInput.split(" "); 
  const command = words[0];
}
if (command === "hello") {
  if (words.length > 1) {
    const argument = words.slice(1).join(" "); 
    console.log(`hello ${argument}!`);
  } else {
    console.log("hello!");
  }
} else {
  console.log("Unknown command!");
}

if (command === "help") {
  console.log("Available commands:");
  console.log("- quit: Exit the app");
  console.log("- exit: Exit the app");
  console.log("- help: Show this list of commands");
  console.log('- hello [argument]: Greet the argument (e.g., "hello John"), or just say "hello!"');
}



let tasks = ["Buy groceries", "Read a book", "Go for a walk"]; 

function onDataReceived(input) {
  const cleanedInput = input.trim();
  const command = cleanedInput.split(" ")[0];

  if (command === "list") {
    if (tasks.length === 0) {
      console.log("The task list is empty.");
    } else {
      tasks.forEach((task, index) => {
        console.log(`${index + 1}. ${task}`);
      });
    }
  } else {
    console.log("Unknown command!");
  }
}

if (command === "add") {
  const task = cleanedInput.slice(4).trim(); // Get everything after "add"
  if (task) {
    tasks.push(task);
    console.log(`Task added: "${task}"`);
  } else {
    console.log("Error: Task description is required.");
  }
}

if (command === "remove") {
  const indexStr = cleanedInput.split(" ")[1];
  if (!indexStr) {
   
    if (tasks.length > 0) {
      const removedTask = tasks.pop();
      console.log(`Removed task: "${removedTask}"`);
    } else {
      console.log("Error: No tasks to remove.");
    }
  } else {
    const index = parseInt(indexStr) - 1;
    if (isNaN(index) || index < 0 || index >= tasks.length) {
      console.log("Error: Invalid task number.");
    } else {
      const removedTask = tasks.splice(index, 1);
      console.log(`Removed task: "${removedTask}"`);
    }
  }
}



let tasks = [
  { text: "Get milk", done: false },
  { text: "Complete homework", done: true },
  { text: "Workout", done: false },
];

if (command === "list") {
  if (tasks.length === 0) {
    console.log("The task list is empty.");
  } else {
    tasks.forEach((task, index) => {
      const status = task.done ? "[✓]" : "[ ]";
      console.log(`${index + 1}. ${status} ${task.text}`);
    });
  }
}

if (command.startsWith("add")) {
  const taskText = cleanedInput.slice(4).trim();
  if (taskText) {
    tasks.push({ text: taskText, done: false });
    console.log(`Task added: "${taskText}"`);
  } else {
    console.log("Error: Task description is required.");
  }
}

// The following line starts the application
startApp("Zahra elBaba")
