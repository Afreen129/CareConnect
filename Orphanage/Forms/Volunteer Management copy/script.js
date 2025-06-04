// document.addEventListener('DOMContentLoaded', () => {
//     const sections = document.querySelectorAll('.section');
//     const forms = {
//         register: document.getElementById('registerForm'),
//         search: document.getElementById('searchForm')
//     };

//     let volunteers = JSON.parse(localStorage.getItem('volunteers')) || {};
//     let uniqueIdCounter = Object.keys(volunteers).length + 1;

//     function showSection(id) {
//         sections.forEach(section => {
//             section.classList.toggle('active', section.id === id);
//         });
//     }

//     async function createVolunteer(volunteerData) {
//         try {
//             const response = await fetch('http://localhost:8085/api/volunteers', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(volunteerData) // This sends the data to your API
//             });

//             if (!response.ok) {
//                 throw new Error(`Error: ${response.statusText}`);
//             }

//             const createdVolunteer = await response.json();
//             return createdVolunteer;
//         } catch (error) {
//             console.error('Error creating volunteer:', error);
//         }
//     }

//     function addVolunteer(data) {
//         const volunteerId = uniqueIdCounter++;
//         volunteers[volunteerId] = data;
//         saveToLocalStorage();
//         populateViewTable();
//     }

//     function saveToLocalStorage() {
//         localStorage.setItem('volunteers', JSON.stringify(volunteers));
//     }

//     function populateViewTable() {
//         const tableBody = document.querySelector('#volunteersTable tbody');
//         tableBody.innerHTML = ''; // Clear previous data

//         Object.entries(volunteers).forEach(([id, volunteer]) => {
//             const row = tableBody.insertRow();
//             row.insertCell().textContent = id;
//             row.insertCell().textContent = volunteer.name;
//             row.insertCell().textContent = volunteer.email;
//             row.insertCell().textContent = volunteer.phone;
//             row.insertCell().textContent = volunteer.address;
//             row.insertCell().textContent = volunteer.skills;
//             row.insertCell().textContent = volunteer.task;
//             row.insertCell().textContent = volunteer.shift;
//             row.insertCell().textContent = volunteer.usertype;
            
//         });
//     }

//     window.editVolunteer = function(id) {
//         const volunteer = volunteers[id];
//         const form = forms.register;
//         form.name.value = volunteer.name;
//         form.email.value = volunteer.email;
//         form.phone.value = volunteer.phone;
//         form.address.value = volunteer.address;
//         form.skills.value = volunteer.skills;
//         form.tasks.value = volunteer.tasks;
//         form.shift.value = volunteer.shift;
//         row.insertCell().textContent = volunteer.usertype;

//         delete volunteers[id]; // Remove volunteer from the list temporarily
//         saveToLocalStorage();
//         populateViewTable();
//     };

//     window.deleteVolunteer = function(id) {
//         delete volunteers[id];
//         saveToLocalStorage();
//         populateViewTable();
//     };

//     // forms.register.addEventListener('submit', async function(event) {
//     //     event.preventDefault();
//     //     const formData = new FormData(this);
//     //     const data = Object.fromEntries(formData);
        
//     //     // Call the createVolunteer function
//     //     const createdVolunteer = await createVolunteer(data);
//     //     if (createdVolunteer) {
//     //         addVolunteer(createdVolunteer); // Add volunteer to local storage and table
//     //         this.reset(); // Clear the form after submission
//     //         alert('Volunteer registered successfully!'); // Show success message
//     //         showSection('view'); // Switch to the View section after registration
//     //     }
//     // });

//     forms.search.addEventListener('submit', function(event) {
//         event.preventDefault();
//         const formData = new FormData(this);
//         const searchName = formData.get('searchName').toLowerCase();
//         const searchResultsTable = document.querySelector('#searchResultsTable tbody');
//         searchResultsTable.innerHTML = ''; // Clear previous results

//         Object.entries(volunteers).forEach(([id, volunteer]) => {
//             if (volunteer.name.toLowerCase().includes(searchName)) {
//                 const row = searchResultsTable.insertRow();
//                 row.insertCell().textContent = id;
//                 row.insertCell().textContent = volunteer.name;
//                 row.insertCell().textContent = volunteer.email;
//                 row.insertCell().textContent = volunteer.phone;
//                 row.insertCell().textContent = volunteer.address;
//                 row.insertCell().textContent = volunteer.skills;
//                 row.insertCell().textContent = volunteer.task;
//                 row.insertCell().textContent = volunteer.shift;
//                 row.insertCell().textContent = volunteer.usertype;
//             }
//         });
//     });

//     populateViewTable(); // Initial population of the view table
// });

// krke deta main wait for 5 min


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
        // idhr se pehle db me add krna padega usertype .. smmha kk

    
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


// get data starts
// get ka method h ok
// Function to fetch and display volunteers data in the table
fetch('http://localhost:8085/api/volunteers')
    .then(response => response.json())
    .then(data => {
        console.log(JSON.stringify(data)); // Check data in the console
        const tableBody = document.getElementById('volunteersTable').querySelector('tbody');
        // ye table ki id rhegi

        // Clear existing rows in the table body
        tableBody.innerHTML = '';
// idhr condtion dena h table based ha
        // Loop through the data and populate the table rows for usertype "Olg Age"
        data.forEach(volunteer => {
            if (volunteer.usertype === "Orphanage") { // Filter by usertype
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
//dono k tble ko id alag dena padhega?...nhi nhi smae rak skte..mene glti se kiy atha ok... 
// but jo id html me hega same js me hega... smmhed haa smjhi.. aur kuch,,nhiii now gimme me 5 minon mobile then ja rha sone haa..disconnect