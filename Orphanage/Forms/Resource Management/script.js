// Function to toggle sections
function toggleSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.style.display = section.style.display === 'none' ? 'block' : 'none';
        } else {
            section.style.display = 'none';
        }
    });
}

// Add Resource with Validation
function addResource() {
    const resourceName = document.getElementById('resourceName').value.trim();
    const resourceType = document.getElementById('resourceType').value.trim();
    const resourceDate = document.getElementById('resourceDate').value.trim();
    const resourceDescription = document.getElementById('resourceDescription').value.trim();

    // Validate required fields
    if (!resourceName || !resourceType || !resourceDate || !resourceDescription) {
        alert("Please fill in all fields.");
        return;
    }

    // Assuming all validations pass, show success message
    alert(`Resource Added!\nName: ${resourceName}\nType: ${resourceType}\nDate: ${resourceDate}\nDescription: ${resourceDescription}`);
}

// Search Resources (Mock function for demonstration)
function searchResources() {
    const resourceName = document.getElementById('searchResourceName').value.trim();
    const resourceDate = document.getElementById('searchResourceDate').value.trim();

    // Filter resources based on search criteria
    const filteredResources = resources.filter(resource => 
        (resourceName ? resource.name.includes(resourceName) : true) &&
        (resourceDate ? resource.date === resourceDate : true)
    );

    const resourcesTableBody = document.querySelector("#resourcesTable tbody");
    resourcesTableBody.innerHTML = ""; // Clear previous results

    filteredResources.forEach(resource => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${resource.name}</td>
            <td>${resource.type}</td>
            <td>${resource.date}</td>
            <td>${resource.description}</td>
        `;
        resourcesTableBody.appendChild(row);
    });
}
// Function to navigate back to homepage
function goToHomepage() {
    window.location.href = '../../index.html';
}


document.getElementById("resource-form").addEventListener("submit", function (e) {
   
    e.preventDefault();
   
    const residentData = {
        resourceType: document.getElementById("resource-type").value,
        units: document.getElementById("units").value,
        quantity: document.getElementById("quantity").value,
        resourceName: document.getElementById("resource-name").value,
        user_Type: document.getElementById("User_Type").value,
           };
   ;
 
        fetch('http://localhost:8085/api/resources/add_users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(residentData) 
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to add the resource.');
        }
        return response.json();
    })
    .then(data => {
        // On success, show a SweetAlert success message
        Swal.fire({
            title: 'Success!',
            text: 'Resource added successfully.',
            icon: 'success',
            confirmButtonText: 'OK'
        });
    })
    .catch(error => console.error('Error:', error));
});

//  get by name starts
document.getElementById("search-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from reloading the page

    // Get the resource name from the input field
    const resourceName = document.getElementById("searchResourceName").value.trim();



    // Check if the input is empty
    if (!resourceName) {
        alert("Please enter a resource name to search.");
        return;
    }

    // Fetch the data from the API based on the resource name
    fetch(`http://localhost:8085/api/resources/find_by_name?resourceName=${resourceName}`)
        .then(response => response.json())
        .then(data => {
           console.log("data is "+JSON.stringify);
           populateTable(data)
           
        })
        .catch(error => console.error('Error:', error));
});


function populateTable(data) {
    const tableBody = document.querySelector("#resourcesTable tbody");

    // Clear the table before adding new data
    tableBody.innerHTML = "";

    // Check if any data was returned
    if (data.length === 0) {
        const noDataRow = `<tr><td colspan="5">No resources found</td></tr>`;
        tableBody.insertAdjacentHTML("beforeend", noDataRow);
    } else {
        // Loop through the data and create table rows
        data.forEach(resource => {
            const row = `
                <tr>
                    <td>${resource.resourceName}</td>
                    <td>${resource.resourceType}</td>
                    <td>${resource.quantity}</td>
                    <td>${resource.units}</td>
                    <td>${new Date().toLocaleDateString()}</td>
                </tr>
            `;
            tableBody.insertAdjacentHTML("beforeend", row);
        });
    }
}

// ends