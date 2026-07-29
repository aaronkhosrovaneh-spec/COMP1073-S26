// Student Information

// Replace these values with your own student information.
const studentName = "Your Name";
const studentId = "Your Student ID";

// Find the paragraph element in the HTML.
const studentInfo = document.getElementById("studentInfo");

// Dynamically add the student name and ID to the page.
studentInfo.textContent = `Student: ${studentName} | Student ID: ${studentId}`;

// NASA API Configuration

// Replace DEMO_KEY with your own NASA API key. You can request a free API key from NASA.
const API_KEY = "DEMO_KEY";

// NASA APOD API endpoint.
const API_URL = "https://api.nasa.gov/planetary/apod";

// Get HTML Elements

const datePicker = document.getElementById("datePicker");
const searchButton = document.getElementById("searchButton");
const todayButton = document.getElementById("todayButton");

const loadingMessage = document.getElementById("loadingMessage");
const errorMessage = document.getElementById("errorMessage");

const apodResult = document.getElementById("apodResult");
const apodImage = document.getElementById("apodImage");
const apodTitle = document.getElementById("apodTitle");
const apodDate = document.getElementById("apodDate");
const apodExplanation = document.getElementById("apodExplanation");
const apodCopyright = document.getElementById("apodCopyright");
const mediaLink = document.getElementById("mediaLink");

// Set the Maximum Date

// NASA's APOD API does not allow dates in the future. Get today's date and use it as the maximum date.
const today = new Date();

const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, "0");
const day = String(today.getDate()).padStart(2, "0");

const todayString = `${year}-${month}-${day}`;

datePicker.max = todayString;

// Load Today's APOD Automatically

loadAPOD(todayString);

// Function: Load APOD Data

async function loadAPOD(selectedDate) {

// Show loading message.
loadingMessage.classList.remove("hidden");

// Hide previous errors.
errorMessage.classList.add("hidden");

// Hide the old API result while loading.
apodResult.classList.add("hidden");

// Build the API request URL.
const requestURL =
    `${API_URL}?api_key=${API_KEY}&date=${selectedDate}`;

try {
    // Send a request to the NASA API.
    const response = await fetch(requestURL);

    // Check if the API request was successful.
    if (!response.ok) {
        throw new Error("Unable to retrieve data from NASA.");
    }

    // Convert the response into JavaScript JSON data.
    const data = await response.json();

    // Display the API data on the page.
    displayAPOD(data);
} catch (error) {
    // Display an error message if the request fails.
    errorMessage.textContent =
        `Error: ${error.message}`;
    errorMessage.classList.remove("hidden");
} finally {
    // Hide the loading message after the request finishes.
    loadingMessage.classList.add("hidden");
}

}

// Function: Display APOD Data

function displayAPOD(data) {


// Display the title.
apodTitle.textContent = data.title;

// Display the date.
apodDate.textContent = `Date: ${data.date}`;

// Display NASA's explanation.
apodExplanation.textContent = data.explanation;

// Display copyright information if available.
if (data.copyright) {
    apodCopyright.textContent =
        `Copyright: ${data.copyright}`;
} else {
    apodCopyright.textContent =
        "Copyright: NASA / Public Domain";
}

// Set the link to the original media.
mediaLink.href = data.url;

// Check whether the APOD is an image.
if (data.media_type === "image") {
    // Set the image source.
    apodImage.src = data.url;
    // Set useful alternative text.
    apodImage.alt = data.title;
    // Display the image.
    apodImage.classList.remove("hidden");
} else {
    // If NASA returns a video instead of an image, use the video's thumbnail if available.
    apodImage.src =
        data.thumbnail_url || "";
    apodImage.alt =
        `${data.title} video thumbnail`;
    apodImage.classList.remove("hidden");
}

// Show the completed APOD card.
apodResult.classList.remove("hidden");


}

// Search Button Event

searchButton.addEventListener("click", function () {


// Get the date selected by the user.
const selectedDate = datePicker.value;

// Make sure a date was selected.
if (!selectedDate) {
    errorMessage.textContent =
        "Please select a date first.";
    errorMessage.classList.remove("hidden");
    return;
}

// Load APOD for the selected date.
loadAPOD(selectedDate);


});

// Today's Picture Button Event

todayButton.addEventListener("click", function () {


// Set the date picker to today's date.
datePicker.value = todayString;

// Load today's APOD.
loadAPOD(todayString);


});
