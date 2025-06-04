// Function to toggle sections visibility
function toggleSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = section.id === sectionId ? 
            (section.style.display === 'none' ? 'block' : 'none') : 
            'none';
    });
}

// Book Appointment (Mock function for demonstration)
function bookAppointment() {
    const child = document.getElementById('appointmentChild').value.trim();
    const date = document.getElementById('appointmentDate').value.trim();
    const time = document.getElementById('appointmentTime').value.trim();

    if (!child || !date || !time) {
        alert("Please fill in all appointment details.");
        return;
    }

    document.getElementById('appointmentConfirmation').innerHTML = `
        <p>Appointment Booked!</p>
        <p>Child: ${child}</p>
        <p>Date: ${date}</p>
        <p>Time: ${time}</p>
    `;
    document.getElementById('appointmentConfirmation').style.display = 'block';
}

// Save Medical Records (Mock function for demonstration)
function saveMedicalRecords() {
    const child = document.getElementById('medicalRecordsChild').value.trim();
    const notes = document.getElementById('medicalNotes').value.trim();

    if (!child || !notes) {
        alert("Please fill in all medical records details.");
        return;
    }

    document.getElementById('medicalRecordsConfirmation').innerHTML = `
        <p>Medical Records Updated!</p>
        <p>Child: ${child}</p>
        <p>Notes: ${notes}</p>
    `;
    document.getElementById('medicalRecordsConfirmation').style.display = 'block';
}

// View Medications (Mock function for demonstration)
function viewMedications() {
    document.getElementById('medicationsList').style.display = 'block';
    document.getElementById('medicationForm').style.display = 'block';
}

// Add New Medication (Mock function for demonstration)
function addMedication() {
    const name = document.getElementById('medicationName').value.trim();
    const dosage = document.getElementById('medicationDosage').value.trim();
    const frequency = document.getElementById('medicationFrequency').value.trim();
    const time = document.getElementById('medicationTime').value.trim();
    const startDate = document.getElementById('medicationStartDate').value.trim();
    const endDate = document.getElementById('medicationEndDate').value.trim();

    if (!name || !dosage || !frequency || !time || !startDate || !endDate) {
        alert("Please fill in all medication details.");
        return;
    }

    document.getElementById('medicationConfirmation').innerHTML = `
        <p>Medication Added!</p>
        <p>Name: ${name}</p>
        <p>Dosage: ${dosage}</p>
        <p>Frequency: ${frequency}</p>
        <p>Time: ${time}</p>
        <p>Start Date: ${startDate}</p>
        <p>End Date: ${endDate}</p>
    `;
    document.getElementById('medicationConfirmation').style.display = 'block';
}

// Edit Medication (Mock function for demonstration)
function editMedication() {
    // Placeholder for actual editing logic
    document.getElementById('medicationConfirmation').innerHTML = `<p>Medication Edited!</p>`;
    document.getElementById('medicationConfirmation').style.display = 'block';
}

// Delete Medication (Mock function for demonstration)
function deleteMedication() {
    // Placeholder for actual deletion logic
    document.getElementById('medicationConfirmation').innerHTML = `<p>Medication Deleted!</p>`;
    document.getElementById('medicationConfirmation').style.display = 'block';
}

// View Daily Overview (Mock function for demonstration)
function viewDailyOverview() {
    const date = document.getElementById('overviewDate').value.trim();

    if (!date) {
        alert("Please select a date.");
        return;
    }

    // Replace with actual logic to fetch data
    document.getElementById('dailyAppointments').innerHTML = `
        <h2>Appointments on ${date}</h2>
        <p>No appointments scheduled for this date.</p>
    `;
    document.getElementById('dailyAppointments').style.display = 'block';

    document.getElementById('dailyMedications').innerHTML = `
        <h2>Medications on ${date}</h2>
        <p>No medications to administer for this date.</p>
    `;
    document.getElementById('dailyMedications').style.display = 'block';
}

// Fetch Particular Record (Mock function for demonstration)
function fetchParticularRecord() {
    const childId = document.getElementById('recordChild').value.trim();

    if (!childId) {
        alert("Please enter a child's name or ID.");
        return;
    }

    // Placeholder data; replace with actual database fetching logic
    const appointmentData = "2024-09-15 at 10:00 AM";
    const medicalNotesData = "The child has been experiencing mild headaches. Recommended a follow-up in two weeks.";
    const medicationsData = [
        { name: "Paracetamol", dosage: "250 mg", frequency: "Twice a day", time: "Morning" },
        { name: "Vitamin C", dosage: "100 mg", frequency: "Once a day", time: "Evening" }
    ];

    // Populate the section with fetched data
    document.getElementById('recordAppointment').textContent = appointmentData;
    document.getElementById('recordMedicalNotes').textContent = medicalNotesData;

    const medicationsList = document.getElementById('recordMedications');
    medicationsList.innerHTML = "";
    medicationsData.forEach(med => {
        const li = document.createElement('li');
        li.textContent = `${med.name} - ${med.dosage}, ${med.frequency}, ${med.time}`;
        medicationsList.appendChild(li);
    });

    document.getElementById('recordDetails').style.display = 'block';
}
// Function to navigate back to homepage
function goToHomepage() {
    window.location.href = '../../index.html';
}