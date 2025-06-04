

document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the form from submitting the traditional way

    // Collect form data
    const volunteerData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        address: document.getElementById("address").value,
        skills: document.getElementById("skills").value,
        task: document.getElementById("task").value,
        shift: document.getElementById("shift").value,
        usertype: document.getElementById("User_Type").value

    
    };

    // alert("data is "+JSON.stringify(volunteerData))
    console.log("data is "+JSON.stringify(volunteerData));
    

    // Send the data to the backend API
    fetch('http://localhost:8085/api/volunteers', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(volunteerData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to add the volunteer.');
        }
        return response.json();
    })
    .then(data => {
        // On success, show a SweetAlert success message
        Swal.fire({
            title: 'Success!',
            text: 'Volunteer registered successfully.',
            icon: 'success',
            confirmButtonText: 'OK'
        });
    })
    .catch(error => console.error('Error:', error));
});



fetch('http://localhost:8085/api/volunteers')
    .then(response => response.json())
    .then(data => {
        console.log(JSON.stringify(data)); // Check data in the console
        const tableBody = document.getElementById('volunteersTable1').querySelector('tbody');

        // Clear existing rows in the table body
        tableBody.innerHTML = '';

        // Loop through the data and populate the table rows for usertype "Olg Age"
        data.forEach(volunteer => {
            if (volunteer.usertype === "Olg Age") { // Filter by usertype
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${volunteer.id}</td>
                    <td>${volunteer.name}</td>
                    <td>${volunteer.email}</td>
                    <td>${volunteer.phone}</td>
                    <td>${volunteer.address}</td>
                    <td>${volunteer.skills}</td>
                    <td>${volunteer.task}</td>
                    <td>${volunteer.shift}</td>
                    <td>${volunteer.usertype}</td>
                `;
                tableBody.appendChild(row);
            }
        });
    })
    .catch(error => console.error('Error fetching data:', error));



//Ends