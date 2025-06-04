
🤝 CareConnect – Old Age Home & Orphanage Management System
CareConnect is a full-stack web application designed to manage both Old Age Homes and Orphanages. It enables easy tracking of residents and children, including their health records, medication schedules, educational progress, emergency alerts, and more — all through a responsive and user-friendly interface.


🧩 Key Features

👵 Old Age Home Management
- Add, edit, and delete senior resident profiles
- Maintain health records, emergency contacts, and preferences
- Set medication reminders and receive alerts

🧒 Orphanage Child Management
- Maintain child profiles with personal and educational details
- Schedule health checkups and track growth
- Organize educational and activity schedules

💊 Medication & Activity Reminders
- Timely alerts for medication or scheduled activities
- Pop-up messages and backend notification logic

🩺 Health Monitoring Dashboard
- Visualize vital health stats
- Alert system for critical health anomalies

🚨 Emergency & Missing Person Alerts
- Upload and manage missing reports with photos
- Facial recognition (if integrated)
- Geo-alerts and community sightings

🛠️ Technologies Used

Frontend
- HTML, CSS, JavaScript

Backend
- Java Spring Boot
- RESTful APIs
- Project Structure with Controller, Service, Repository
Database
- MySQL
- Access and query via HeidiSQL

Tools
- Postman (API Testing)
- Git & GitHub (Version Control)
- IntelliJ / VS Code (IDE

📦 Installation Guide

1. Clone the Repository

2. Frontend Setup
Open the index.html file from the root directory in a browser.
Or serve using a live server (VS Code extension or any other).

3. Backend Setup (Spring Boot)
Open the backend project in IntelliJ or Eclipse.
Ensure MySQL is running and a database (e.g., careconnect_db) is created.

Update application.properties:
spring.datasource.url=jdbc:mysql://localhost:3306/careconnect_db
spring.datasource.username=your_username
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update

Run the Spring Boot application:
mvn spring-boot:run

4.Database Setup
Create a MySQL database using HeidiSQL (or MySQL CLI/GUIs like phpMyAdmin).

Schema will be automatically created by JPA if ddl-auto=update.

👩‍💻 Author
Afreen129
GitHub: @Afreen129

📝 License
This project is licensed under the MIT License.
