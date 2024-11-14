// script.js

// Function to navigate back to the homepage
function goToHomepage() {
    window.location.href = 'index.html'; // Update with your actual homepage URL
}

// Function to toggle between Add Child and Search Child sections
function toggleSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = section.id === sectionId ? 'block' : 'none';
    });
}

// Function to handle form submission for adding a child
document.getElementById('addChildForm').onsubmit = async function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const childData = {
        name: document.getElementById('childName').value,
        dob: document.getElementById('dob').value,
        admissionDate: document.getElementById('admissionDate').value,
        gender: document.getElementById('gender').value,
        reasonForAdmission: document.getElementById('reasonAdmission').value,
        height: parseFloat(document.getElementById('height').value),
        weight: parseFloat(document.getElementById('weight').value),
        socialProgressNotes: document.getElementById('socialProgress').value,
    };

    // Make a POST request to add a new child
    const response = await fetch('http://localhost:8085/api/children', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(childData),
    });

    if (response.ok) {
        alert('Child added successfully!'); // Success message
        document.getElementById('addChildForm').reset(); // Reset the form
    } else {
        const errorText = await response.text();
        alert(`Failed to add child: ${errorText}`); // Show error message
    }
};

// Function to search for children
async function searchChild() {
    const query = document.getElementById('searchChildQuery').value;

    // Make a GET request to search for children by name or ID
    const response = await fetch(`http://localhost:8085/api/children/search?query=${query}`);
    const results = await response.json();

    const searchResultsDiv = document.getElementById('searchResults');
    searchResultsDiv.innerHTML = ''; // Clear previous results

    if (results.length > 0) {
        results.forEach(child => {
            const childDiv = document.createElement('div');
            childDiv.innerHTML = `<strong>${child.name}</strong> (ID: ${child.id})<br>
                                 DOB: ${child.dob}<br>
                                 Admission Date: ${child.admissionDate}<br>
                                 Gender: ${child.gender}<br>
                                 Height: ${child.height} cm<br>
                                 Weight: ${child.weight} kg<br>
                                 Reason for Admission: ${child.reasonForAdmission}<br>
                                 Social Progress Notes: ${child.socialProgressNotes}<br><br>`;
            searchResultsDiv.appendChild(childDiv); // Append child details to results
        });
    } else {
        searchResultsDiv.innerHTML = '<p>No results found.</p>'; // No results message
    }
}
