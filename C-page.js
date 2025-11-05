// what am I trying to do? 
/* TODO:
    [x] create a goal user input
    [x] create subtask input
    - [x] add multiple subtasks: think about button adding element, not looping
    - [x] multiple subtasks in individual elements

    | Edit subtask btn |
    [x] - update <div>
    [] - make 'subtask' & 'target' dynamic
        - remove/edit btn on each -> prompt usr for new
*/


// Code for creating goal button
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
const subLog = document.querySelector("#taskLog"); // used as a parent section
let subtaskCounter = 1;
let idString ="subId" + subtaskCounter;
let subtaskArray = []; // basically a key for the ids & subtasks


// function to create unique ids, assign to new <div>s, then append to subLog <section>
function createContainer() { 
    idString ="subId" + subtaskCounter;
    const d = document.createElement('div'); 
    d.id=idString; 
    subLog.appendChild(d); 
    return d; 
}


// new function
function createsubtaskEditBtn(idString) {
    const button = document.createElement('button');
    button.textContent = 'Edit Subtask';
    document.getElementById(idString).appendChild(button);
}


// subtask button click -> prompt input -> calls createContainer() -> append subtask to <div>
subtaskButton.addEventListener("click", () => {
    subtask = prompt("Enter your subtasks:");

    if (!subtask) return;

    const newContainer = createContainer(); 
        newContainer;

        // breaks bc: 
        createsubtaskEditBtn(idString)

    //newContainer.textContent += " Subtask " + subtaskCounter + ": " + subtask; 
    document.getElementById(idString).appendChild(" Subtask " + subtaskCounter + ": " + subtask); 




    
    // FIX THIS HERE:
    const textNode = document.createTextNode(" Subtask " + subtaskCounter + ": " + subtask);
    document.getElementById(idString).appendChild(textNode); 
    // END OF FIX




    subtaskArray.push({ id: idString, subtask: subtask }); 

    subtaskCounter++;

});

// create function to do make this button whenever a subtask is added?
subtaskEditButton.addEventListener("click", () => {
    subtask = prompt("Enter your subtasks:");

    if (!subtask) return;

    const target = subtaskArray.find(obj => obj.id === "subId1");
    target.subtask = "New SUBTASK TEXT WOOOOOP"; // updates array

    let targetDiv = document.getElementById(target.id); // finds <div id="subId1">
    targetDiv.textContent = " Subtask " + target.id.substring(5,6) + ": " + target.subtask;

});


// prompt button for if user clicks remove, remove, if edit, then edit