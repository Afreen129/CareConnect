document.addEventListener('DOMContentLoaded', () => {
    // Toggle between sections
    window.toggleSection = function(sectionId) {
        // Hide all sections
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => section.style.display = 'none');

        // Show the selected section
        const sectionToShow = document.getElementById(sectionId);
        if (sectionToShow) {
            sectionToShow.style.display = 'block';
        }
    };

    // Handle form submission for adding residents
    const addResidentForm = document.getElementById('addResidentForm');
    addResidentForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const resident = {
            name: document.getElementById('residentName').value,
            dob: document.getElementById('dob').value,
            contactNumber: document.getElementById('phone').value,
            admissionDate: document.getElementById('admissionDate').value,
            gender: document.getElementById('gender').value,
            reasonForAdmission: document.getElementById('reasonAdmission').value,
            medicalConditions: document.getElementById('medicalConditions').value,
            emergencyContact: document.getElementById('emergencyContact').value,
            emergencyPhone: document.getElementById('emergencyPhone').value,
            allergies: document.getElementById('allergies').value,
            bloodType: document.getElementById('bloodType').value,
            height: document.getElementById('height').value,
            weight: document.getElementById('weight').value
        };

        try {
            const response = await fetch('http://localhost:8085/api/residents/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(resident)
            });

            if (response.ok) {
                const addedResident = await response.json(); // Get the added resident details
                Swal.fire('Success', 'Resident added successfully: ' + addedResident.name, 'success');
                addResidentForm.reset();  // Clear form
            } else {
                const errorMessage = await response.text(); // Get the error message from the response
                Swal.fire('Error', errorMessage || 'Failed to add resident', 'error');
            }
        } catch (error) {
            console.error('Error:', error);
            Swal.fire('Error', 'Failed to connect to the server. Please try again later.', 'error');
        }
    });

    // Handle search functionality
    const searchForm = document.getElementById('search-form');
    searchForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const query = document.getElementById('searchResidentName').value; // Updated variable name

        // Check if the query is empty
        if (!query) {
            Swal.fire('Error', 'Please enter a name to search', 'error');
            return;
        }

        try {
            const response = await fetch(`http://localhost:8085/api/residents/search?name=${query}`, {
                method: 'GET'
            });

            if (response.ok) {
                const residents = await response.json();
                updateResidentTable(residents);
            } else if (response.status === 404) {
                const errorMessage = await response.text(); // Get the error message from the response
                Swal.fire('Error', errorMessage || 'No residents found', 'error');
            } else {
                const errorMessage = await response.text(); // Get the error message from the response
                Swal.fire('Error', errorMessage || 'An error occurred during search', 'error');
            }
        } catch (error) {
            console.error('Error:', error);
            Swal.fire('Error', 'Failed to connect to the server. Please try again later.', 'error');
        }
    });

    function updateResidentTable(residents) {
        const tableBody = document.querySelector('#resourcesTable tbody');
        tableBody.innerHTML = ''; // Clear the table

        residents.forEach((resident) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${resident.id}</td>
                <td>${resident.name}</td>
                <td>${resident.dob}</td>
                <td>${resident.emergencyContact}</td>
                <td>${resident.emergencyPhone}</td>
            `;
            tableBody.appendChild(row);
        });
        
    }
});
// Function to navigate back to homepage
function goToHomepage() {
    window.location.href = '../../index.html';
}
