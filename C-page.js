// what am I trying to do? 
// [x] create a goal user input
// [x] create subtask input
// - [x] add multiple subtasks: think about button adding element, not looping
// - [] multiple subtasks in individual elements


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

// find #subtaskButton button in html. find #taskLog <pre> element in html
const subtaskButton = document.querySelector("#subtaskButton");
const subLog = document.querySelector("#taskLog"); // will have to use as a parent section
let subtaskCounter = 0;
let subtaskArray = [];

// [] - create {id, text} array of objects for subtasks 

//let childSubLog = document.querySelector("#"+subtaskIdArray[subtaskCounter]); 


// function to create unique ids, assign to new <div>s, then append to subLog <section>
function createContainer() {
    const idString ="subId" + subtaskCounter; // naming unique id's based on num of subtasks
    const d = document.createElement('div'); // create <pre> elements to put subtasks into
    d.id=idString; // setting the <div> to have specific id
    subLog.appendChild(d); // append to parent "subLog" aka "#taskLog" <section> 
    subtaskArray.push({ id: idString }); // array of objects
    console.log(subtaskArray);
    return d; // returns the created <div> element
}

// subtask button click -> prompt input -> calls createContainer() -> append subtask to <div>
subtaskButton.addEventListener("click", () => {
    const subtask = prompt("Enter your subtasks:");

    if (!subtask) return;
    
    const newContainer = createContainer(); // get's new <div>

    newContainer.textContent += "Subtask " + (subtaskCounter + 1) + ": " + subtask;

    subtaskArray.push({ subtask: subtask });
    console.log(subtaskArray);
    subtaskCounter++;
});


/* 2 lines below remove/edit code
const target = subtaskArray.find(obj => obj.id === "subId1");
target.subtask = "New text"; */
