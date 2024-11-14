// Add Event Listener for Staff Registration
document.getElementById("add-staff-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the form from submitting traditionally

    // Collect form data
    const staffData = {
        // staffId: document.getElementById("staff-id").value,
        name: document.getElementById("staff-name").value,
        role: document.getElementById("staff-role").value,
        email: document.getElementById("staff-email").value,
        phone: document.getElementById("staff-phone").value,
        dateOfJoining: document.getElementById("staff-date-joining").value,
        usertype: document.getElementById("User_Type").value
    };

    console.log("data is " + JSON.stringify(staffData));

    // Send the data to the backend API
    fetch('http://localhost:8085/api/staff', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(staffData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to add the staff member.');
        }
        return response.json();
    })
    .then(data => {
        // On success, show a SweetAlert success message
        Swal.fire({
            title: 'Success!',
            text: 'Staff member registered successfully.',
            icon: 'success',
            confirmButtonText: 'OK'
        });

        // Clear the form
        document.getElementById("add-staff-form").reset();
    })
    .catch(error => console.error('Error:', error));
});

// Fetch and Display Staff Records
function fetchStaffRecords() {
    fetch('http://localhost:8085/api/staff')
        .then(response => response.json())
        .then(data => {
            console.log(JSON.stringify(data)); // Check data in the console
            const tableBody = document.getElementById('view-staff-table').querySelector('tbody');

            // Clear existing rows in the table body
            tableBody.innerHTML = '';

            // Loop through the data and populate the table
            data.forEach(staff => {
                if (staff.usertype === "Orphanage") { 
                const row = document.createElement('tr');
                row.innerHTML = `
                  
                    <td>${staff.name}</td>
                    <td>${staff.role}</td>
                    <td>${staff.email}</td>
                    <td>${staff.phone}</td>
                    <td>${staff.dateOfJoining}</td>
                     <td>${staff.usertype}</td>
                `;
                tableBody.appendChild(row);
        }});
        })
        .catch(error => console.error('Error fetching data:', error));
}

// Show the corresponding section when sidebar menu items are clicked
document.getElementById('add-staff-menu').addEventListener('click', function() {
    document.getElementById('add-staff-section').style.display = 'block';
    document.getElementById('view-staff-section').style.display = 'none';
});

document.getElementById('view-staff-menu').addEventListener('click', function() {
    document.getElementById('add-staff-section').style.display = 'none';
    document.getElementById('view-staff-section').style.display = 'block';
    fetchStaffRecords(); // Fetch staff records when viewing the staff section
});

// Call the fetch function on page load to display all staff
document.addEventListener("DOMContentLoaded", function() {
    fetchStaffRecords(); // Fetch staff records initially
    document.getElementById('view-staff-section').style.display = 'none'; // Hide the View Staff section initially
});
