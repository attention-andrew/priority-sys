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
let subtaskArray =[];
let subtaskIdArray =[];
let childSubLog = document.querySelector("#"+subtaskIdArray[subtaskCounter]); // subtaskIdArray specific value child for #taskLog parent
// ^ need this to be "#subIdN" | currently: null (but in theory could be "subIdN" *missing '#'*)

// function to create new container with new ids
// *theory is to make individual ids for tasks so they can be modified, moved, or removed easier*
function createContainer() {
    let idString ="subId" + subtaskCounter; // naming unique id's based on num of subtasks
    subtaskIdArray.push(idString); // put string into array
    p = document.createElement('pre'); // create <pre> elements to put subtasks into
    p.setAttribute("id", subtaskIdArray[subtaskCounter]); // setting the <pre> element to have specific id
    subLog.appendChild(p); // append to parent "subLog" aka "#taskLog" <section> 

    // debug stuff
    // console.log(typeof subtaskIdArray[subtaskCounter]);
    // console.log(subtaskCounter);
    // console.log(subtaskIdArray);
    // console.log(childSubLog);
}

// subtask button click --> put into array --> append input to "taskLog" <pre> element
subtaskButton.addEventListener("click", () => {
    let subtask = prompt("Enter your subtasks:");

    if (subtask === null){
        alert("No input.");
    } else {
        createContainer(); // create new container function for each subtask

        subtaskArray.push(subtask); // puts subtask in array

        // debug stuff
        // console.log(subtaskArray);
        // console.log(typeof subtaskArray);
        // console.log(subtaskCounter);

        console.log(typeof childSubLog);
        console.log(childSubLog); // this shows NULL
        console.log(typeof subLog);
        console.log(subLog); // this shows <section id="tasklog"><pre id="subId0">...

        // appends subtask to subLog parent <section>
            // TODO: [] change to add child into subLog parent
        // subLog.innerText += "Subtask " + (subtaskCounter + 1) + ": " + subtaskArray[subtaskCounter];
        childSubLog.innerText += "Subtask " + (subtaskCounter + 1) + ": " + subtaskArray[subtaskCounter];

        // indicates that you are trying to access the innerText property of a variable that currently holds a null value.
            // childSubLog = null rn

        subtaskCounter++;

        // debug stuff
        // console.log(subtaskArray);
        // console.log(subtaskCounter);
    }
});
