// what am I trying to do? 
/* TODO:
    [x] create a goal user input
    [x] create subtask input
    - [x] add multiple subtasks: think about button adding element, not looping
    - [x] multiple subtasks in individual elements
*/


// Code for goal
var goalButton = document.createElement("button");
goalButton.innerHTML = "Enter Goal";
goalButton.onclick = function() {
    promptGoal();
}

document.getElementById("goalButtonContainer").appendChild(goalButton);

function promptGoal() {
    //alert("Dynamic button clicked!");
    const userGoal =  prompt("Enter your goal:");
    if (userGoal === null) {
        alert("No input.");
    } else {
        var goalP = document.getElementById("goalP");
        goalP.textContent = "Your Goal: " + userGoal;
    }
}
// code for goal


// Code for Subtask Buttons
const subtaskButton = document.querySelector("#subtaskButton");
const subtaskEditButton = document.querySelector("#subtaskEditButton");
const subLog = document.querySelector("#taskLog"); // will have to use as a parent section
let subtask="";
let subtaskCounter = 0;
let idString ="subId" + subtaskCounter;
let subtaskArray = [];


// function to create unique ids, assign to new <div>s, then append to subLog <section>
function createContainer() { 
    idString ="subId" + subtaskCounter;
    const d = document.createElement('div'); 
    d.id=idString; 
    subLog.appendChild(d); 
    return d; 
}

// subtask button click -> prompt input -> calls createContainer() -> append subtask to <div>
subtaskButton.addEventListener("click", () => {
    subtask = prompt("Enter your subtasks:");

    if (!subtask) return;
    
    const newContainer = createContainer(); 

    newContainer.textContent += "Subtask " + (subtaskCounter + 1) + ": " + subtask;

    subtaskArray.push({ id: idString, subtask: subtask }); 

    subtaskCounter++;
});


// 2 lines below remove/edit code
/*  TODO: 
    [] - update <div>
    [] - make 'subtask' & 'target' dynamic
        - remove/edit btn on each -> prompt usr for new
*/
subtaskEditButton.addEventListener("click", () => {
    const target = subtaskArray.find(obj => obj.id === "subId1");
    target.subtask = "New SUBTASK TEXT WOOOOOP"; // updates array



    console.log(subtask);
    console.log(subtaskArray);
});

