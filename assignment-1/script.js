// Characters array
let characters = [
    "The dog",
    "A pirate",
    "My teacher",
    "The astronaut",
    "A dinosaur"
];

// Actions array
let actions = [
    "jumped over",
    "ran around",
    "found",
    "laughed at",
    "chased"
];

// Objects array
let objects = [
    "the fence",
    "a giant pizza",
    "the treasure",
    "a robot",
    "the bicycle"
];

// Places array
let places = [
    "at the park",
    "on the moon",
    "in the classroom",
    "at the beach",
    "inside the castle"
];

// Endings array
let endings = [
    "before lunch.",
    "because it was funny.",
    "while everyone cheered.",
    "without making a sound.",
    "and everyone laughed."
];

// Index variables to keep track of current selection in each category
let characterIndex = 0;
let actionIndex = 0;
let objectIndex = 0;
let placeIndex = 0;
let endingIndex = 0;

// Moves to the next character in the list and updates the displayed text on the page
function nextCharacter() {
    characterIndex++;

    // Loop back to start if we reach the end of the array
    if(characterIndex >= characters.length) {
        characterIndex = 0;
    }

    // Update the HTML element with the new character
    document.getElementById("characterChoice").innerHTML =
        characters[characterIndex];
}

// Moves to the next action and updates display
function nextAction() {
    actionIndex++;

    if(actionIndex >= actions.length) {
        actionIndex = 0;
    }

    document.getElementById("actionChoice").innerHTML =
        actions[actionIndex];
}

// Moves to the next object and updates display
function nextObject() {
    objectIndex++;

    if(objectIndex >= objects.length) {
        objectIndex = 0;
    }

    document.getElementById("objectChoice").innerHTML =
        objects[objectIndex];
}

// Moves to the next place and updates display
function nextPlace() {
    placeIndex++;

    if(placeIndex >= places.length) {
        placeIndex = 0;
    }

    document.getElementById("placeChoice").innerHTML =
        places[placeIndex];
}

// Moves to the next ending and updates display
function nextEnding() {
    endingIndex++;

    if(endingIndex >= endings.length) {
        endingIndex = 0;
    }

    document.getElementById("endingChoice").innerHTML =
        endings[endingIndex];
}

// Moves to the next story and updates display
function makeStory() {
    let story =
        characters[characterIndex] + " " +
        actions[actionIndex] + " " +
        objects[objectIndex] + " " +
        places[placeIndex] + " " +
        endings[endingIndex];

    document.getElementById("story").innerHTML = story;
}
