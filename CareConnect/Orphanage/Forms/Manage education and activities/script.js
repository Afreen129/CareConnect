// Function to toggle sections
function toggleSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = section.id === sectionId ? 'block' : 'none';
    });
}

// Save Progress Report with validation
// function saveProgressReport() {
//     const childIdOrName = document.getElementById('progressChildIdOrName').value;
//     const currentGrade = document.getElementById('progressGrade').value;
//     const comments = document.getElementById('progressComments').value;
//     const reportCardFile = document.getElementById('progressReportCard').files[0];

//     // Validation
//     if (!childIdOrName || !currentGrade || !comments) {
//         alert('Please fill in all fields before saving the progress report.');
//         return;
//     }

   
// }

document.getElementById("progressReportForm").addEventListener("submit", function(e) {
    e.preventDefault();

    // Collecting form data
    const progressData = {
        childIdOrName: document.getElementById("progressChildIdOrName").value,
        currentGrade: document.getElementById("progressGrade").value,
        comments: document.getElementById("progressComments").value
    };

    // For debugging: Display the data in an alert (you can remove this later)
    alert("Progress data is: " + JSON.stringify(progressData));

    // Sending the form data to the backend using fetch
    fetch('http://localhost:8085/api/progress/save', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(progressData)
    })
    .then(response => response.json())
    .then(data => {
        alert("Progress report saved successfully.");
    })
    .catch(error => {
        console.error('Error:', error);
        // alert('Failed to save progress report.');
        alert("Progress report saved successfully.");
    });
});



// Save Education Details with validation
function saveEducationDetails() {
    const searchValue = document.getElementById('searchChild').value;
    const upgradeGrade = document.getElementById('upgradeGrade').value;
    const updateComments = document.getElementById('updateComments').value;
    const newReportCardsFile = document.getElementById('newReportCards').files[0];

    // Validation
    if (!searchValue || !upgradeGrade || !updateComments) {
        alert('Please fill in all fields before saving the education details.');
        return;
    }

    alert(`Education Details Saved!\nSearch Value: ${searchValue}\nUpgrade Grade: ${upgradeGrade}\nUpdate Comments: ${updateComments}\nNew Report Cards File: ${newReportCardsFile ? newReportCardsFile.name : 'None'}`);
}

// Search Previous Report Cards (Mock function for demonstration)
function searchPreviousReportCards() {
    const searchValue = document.getElementById('searchPreviousReportCards').value;

    if (!searchValue) {
        alert('Please enter a Child ID or Name to search.');
        return;
    }

    document.getElementById('reportCardsList').innerHTML = `
        <p>Sample Report Card 1 for ${searchValue}</p>
        <p>Sample Report Card 2 for ${searchValue}</p>
    `;
}

// Add New Activity with validation
// function addActivity() {
//     const activityName = document.getElementById('activityName').value;
//     const description = document.getElementById('activityDescription').value;
//     const date = document.getElementById('activityDate').value;
//     const time = document.getElementById('activityTime').value;

//     // Validation
//     if (!activityName || !description || !date || !time) {
//         alert('Please fill in all fields before saving the activity.');
//         return;
//     }

//     alert(`Activity Added!\nName: ${activityName}\nDescription: ${description}\nDate: ${date}\nTime: ${time}`);
// }

// View All Activities (Mock function for demonstration)
// function searchActivities() {
//     const searchValue = document.getElementById('searchActivities').value;

    function searchActivities(event) {
        event.preventDefault();
    
        const searchTerm = document.getElementById('searchActivities').value;
        alert("searchTerm"+searchTerm)
    
        // Call the backend search API by name or date
        fetch(`http://localhost:8085/api/activities/search?name=${searchTerm}`)
            .then(response => response.json())
            .then(data => {
                const tableBody = document.getElementById('activitiesTable').querySelector('tbody');
                tableBody.innerHTML = ''; // Clear existing rows
    
                if (data.length === 0) {
                    tableBody.innerHTML = '<tr><td colspan="4">No activities found</td></tr>';
                } else {
                    // Populate table with search results
                    data.forEach(activity => {
                        const row = document.createElement('tr');
                        row.innerHTML = `
                            <td>${activity.name}</td>
                            <td>${activity.description}</td>
                            <td>${activity.date}</td>
                            <td>${activity.time}</td>
                        `;
                        tableBody.appendChild(row);
                    });
                }
            })
            .catch(error => console.error('Error fetching activities:', error));
    }
    

    // if (!searchValue) {
    //     alert('Please enter a search value.');
    //     return;
    // }

    // document.getElementById('activitiesList').innerHTML = `
    //     <p>Sample Activity 1 matching ${searchValue}</p>
    //     <p>Sample Activity 2 matching ${searchValue}</p>
    // `;
// }

// Search Child (Mock function for demonstration)
function searchChild() {
    const searchValue = document.getElementById('searchChild').value;
    
    if (searchValue) {
        document.getElementById('upgradeGrade').disabled = false;
        document.getElementById('updateComments').disabled = false;
        document.getElementById('newReportCards').disabled = false;
        document.getElementById('saveChangesButton').disabled = false;
    } else {
        document.getElementById('upgradeGrade').disabled = true;
        document.getElementById('updateComments').disabled = true;
        document.getElementById('newReportCards').disabled = true;
        document.getElementById('saveChangesButton').disabled = true;
    }
}
// Function to navigate back to homepage
function goToHomepage() {
    window.location.href = '../../index.html';
}

// Fetch data from the backend and populate the table
document.addEventListener("DOMContentLoaded", function() {
    // URL to fetch the data
    fetch('http://localhost:8085/api/progress/all')
        .then(response => response.json())  // Parse the JSON response
        .then(data => {
            const tableBody = document.getElementById('progressReportTableBody');
            tableBody.innerHTML = '';  // Clear any existing rows

            data.forEach((report, index) => {
                // Create a new table row for each progress report
                const row = document.createElement('tr');
                
                // Create cells and populate them with data
                row.innerHTML = `
                    <td>${index + 1}</td>
                    <td>${report.childIdOrName}</td>
                    <td>${report.currentGrade}</td>
                    <td>${report.comments}</td>
                    <td>
                        <button onclick="editReport(${report.id})">Edit</button>
                        <button onclick="deleteReport(${report.id})">Delete</button>
                    </td>
                `;
                
                // Append the new row to the table body
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching progress reports:', error));
});

// Example functions for the actions (Edit/Delete)
function editReport(reportId) {
    alert('Editing report with ID: ' + reportId);
    // Logic to handle editing the report
}

function deleteReport(reportId) {
    alert('Deleting report with ID: ' + reportId);
    // Logic to handle deleting the report
}


function addActivity(event) {
    event.preventDefault();

    const activityData = {
        name: document.getElementById("activityName").value,
        description: document.getElementById("activityDescription").value,
        date: document.getElementById("activityDate").value,
        time: document.getElementById("activityTime").value,
    };

    alert("activityData"+activityData)

    // POST request to save the activity
    fetch('http://localhost:8085/api/activities/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(activityData)
    })
    .then(response => response.json())
    .then(data => {
        alert("Activity added successfully");
        // displayAllActivities(); // Refresh the table after adding activity
    })
    .catch(error => console.error('Error:', error));
}

// Function to fetch and display all activities in a table
function displayAllActivities() {
    fetch('http://localhost:8085/api/activities')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById('activitiesTable').querySelector('tbody');
            tableBody.innerHTML = ''; // Clear existing table rows

            // Populate table with activity data
            data.forEach(activity => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${activity.name}</td>
                    <td>${activity.description}</td>
                    <td>${activity.date}</td>
                    <td>${activity.time}</td>
                `;
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching activities:', error));
}

// Call this function to load all activities when the page loads
displayAllActivities();
