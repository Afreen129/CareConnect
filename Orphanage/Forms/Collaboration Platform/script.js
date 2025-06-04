// Function to toggle between sections
function toggleSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = section.id === sectionId ? 'block' : 'none';
    });
}

// Function to format the date
function formatDate(dateString) {
    const dateParts = dateString.split('-');
    return `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`; // Format as dd/mm/yyyy
}

// Function to generate the invitation
function generateInvite() {
    const title = document.getElementById('eventTitle').value;
    const date = formatDate(document.getElementById('eventDate').value); // Format the date here
    const time = document.getElementById('eventTime').value + " " + document.getElementById('timeAMPM').value;
    const description = document.getElementById('description').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;

    // Check for empty fields
    if (!title || !date || !time || !description || !phone || !address) {
        alert("Please fill in all event details.");
        return;
    }

    // Update the invitation details
    document.getElementById('generatedTitle').innerText = title;
    document.getElementById('generatedDescription').innerText = description;
    document.getElementById('generatedDate').innerText = `Date: ${date}`; // Use formatted date
    document.getElementById('generatedTime').innerText = `Time: ${time}`;
    document.getElementById('generatedAddress').innerText = `Address: ${address}`;
    document.getElementById('generatedPhone').innerText = `Phone: ${phone}`;

    // Show the invitation template
    document.getElementById('generatedInvite').style.display = 'block';

    // Show action buttons
    document.getElementById('actionButtons').style.display = 'block';

    // Reset the form after generating the invite
    document.getElementById('inviteForm').reset();
}

// Function to handle the submission of the invitation
function submitInvite() {
    const title = document.getElementById('generatedTitle').innerText;
    const description = document.getElementById('generatedDescription').innerText;
    const date = document.getElementById('generatedDate').innerText;
    const time = document.getElementById('generatedTime').innerText;
    const address = document.getElementById('generatedAddress').innerText;
    const phone = document.getElementById('generatedPhone').innerText;

    // Save the details in the saved event section
    document.getElementById('savedTitle').innerText = title;
    document.getElementById('savedDescription').innerText = description;
    document.getElementById('savedDate').innerText = date;
    document.getElementById('savedTime').innerText = time;
    document.getElementById('savedAddress').innerText = address;
    document.getElementById('savedPhone').innerText = phone;

    // Show the saved event details section
    document.getElementById('saved-event-details').style.display = 'block';
    
    // Hide the generated invite and reset the form
    document.getElementById('generatedInvite').style.display = 'none';
    document.getElementById('actionButtons').style.display = 'none';
}

// Function to handle editing the invite
function editInvite() {
    // Populate the form with current invitation details
    document.getElementById('eventTitle').value = document.getElementById('generatedTitle').innerText;
    document.getElementById('eventDate').value = document.getElementById('generatedDate').innerText.split(': ')[1].split('/').reverse().join('-'); // Format back to yyyy-mm-dd for input
    document.getElementById('eventTime').value = document.getElementById('generatedTime').innerText.split(': ')[1].split(' ')[0];
    document.getElementById('timeAMPM').value = document.getElementById('generatedTime').innerText.split(' ')[1];
    document.getElementById('description').value = document.getElementById('generatedDescription').innerText;
    document.getElementById('phone').value = document.getElementById('generatedPhone').innerText.split(': ')[1];
    document.getElementById('address').value = document.getElementById('generatedAddress').innerText.split(': ')[1];

    // Hide the generated invite and action buttons
    document.getElementById('generatedInvite').style.display = 'none';
    document.getElementById('actionButtons').style.display = 'none';
}

// Function to handle deletion of the invite
function deleteInvite() {
    // Clear the generated invite section
    document.getElementById('generatedTitle').innerText = '';
    document.getElementById('generatedDescription').innerText = '';
    document.getElementById('generatedDate').innerText = '';
    document.getElementById('generatedTime').innerText = '';
    document.getElementById('generatedAddress').innerText = '';
    document.getElementById('generatedPhone').innerText = '';

    // Hide the generated invite and action buttons
    document.getElementById('generatedInvite').style.display = 'none';
    document.getElementById('actionButtons').style.display = 'none';
}

// Function to navigate back to homepage
function goToHomepage() {
    window.location.href = '../../index.html';
}