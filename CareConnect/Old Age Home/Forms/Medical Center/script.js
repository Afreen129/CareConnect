// Function to toggle sections visibility
function toggleSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = section.id === sectionId ? 
            (section.style.display === 'none' ? 'block' : 'none') : 
            'none';
    });
}

// Book Appointment (Updated function)
function bookAppointment() {
    const resident = document.getElementById('appointmentResident').value.trim();
    const date = document.getElementById('appointmentDate').value.trim();
    const time = document.getElementById('appointmentTime').value.trim();

    if (!resident || !date || !time) {
        alert("Please fill in all appointment details.");
        return;
    }

    document.getElementById('appointmentConfirmation').innerHTML = `
        <p>Appointment Booked!</p>
        <p>Resident: ${resident}</p>
        <p>Date: ${date}</p>
        <p>Time: ${time}</p>
    `;
    document.getElementById('appointmentConfirmation').style.display = 'block';
}

// Update Resident Records (Mock function for demonstration)
function updateRecords() {
    const resident = document.getElementById('recordResident').value.trim();
    const notes = document.getElementById('residentRecord').value.trim();

    if (!resident || !notes) {
        alert("Please fill in all resident records details.");
        return;
    }

    document.getElementById('recordUpdateConfirmation').innerHTML = `
        <p>Resident Records Updated!</p>
        <p>Resident: ${resident}</p>
        <p>Notes: ${notes}</p>
    `;
    document.getElementById('recordUpdateConfirmation').style.display = 'block';
}

// View Medications (Mock function for demonstration)
function viewMedications() {
    const resident = document.getElementById('medicationResident').value.trim();

    if (!resident) {
        alert("Please enter a resident's name or ID.");
        return;
    }

    document.getElementById('medicationList').innerHTML = `
        <p>Medication details for ${resident}:</p>
        <ul>
            <li>Medication 1 - Dosage, Frequency</li>
            <li>Medication 2 - Dosage, Frequency</li>
        </ul>
    `;
    document.getElementById('medicationList').style.display = 'block';
}

// View Particular Record (Mock function for demonstration)
function viewParticularRecord() {
    const residentId = document.getElementById('particularResident').value.trim();

    if (!residentId) {
        alert("Please enter a resident's name or ID.");
        return;
    }

    // Placeholder data; replace with actual database fetching logic
    const activityData = "2024-09-15 at 10:00 AM";
    const medicalNotesData = "Resident is doing well with regular check-ups.";
    const medicationsData = [
        { name: "Aspirin", dosage: "100 mg", frequency: "Once a day" },
        { name: "Vitamin D", dosage: "2000 IU", frequency: "Once a week" }
    ];

    // Populate the section with fetched data
    document.getElementById('recordDetails').innerHTML = `
        <h3>Resident Record for ID: ${residentId}</h3>
        <p>Last Activity: ${activityData}</p>
        <p>Medical Notes: ${medicalNotesData}</p>
        <h4>Medications:</h4>
        <ul id="recordMedications"></ul>
    `;

    const medicationsList = document.getElementById('recordMedications');
    medicationsList.innerHTML = "";
    medicationsData.forEach(med => {
        const li = document.createElement('li');
        li.textContent = `${med.name} - ${med.dosage}, ${med.frequency}`;
        medicationsList.appendChild(li);
    });

    document.getElementById('recordDetails').style.display = 'block';
}
// Function to navigate back to homepage
function goToHomepage() {
    window.location.href = '../../index.html';
}