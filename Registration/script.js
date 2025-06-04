const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});
function toggleDropdown() {
    const options = document.getElementById('options');
    options.style.display = options.style.display === 'block' ? 'none' : 'block';
}

function selectOption(value) {
    document.getElementById('selectedValue').textContent = value;
    document.getElementById('options').style.display = 'none';
}

// Close dropdown if clicked outside
window.onclick = function(event) {
    const options = document.getElementById('options');
    if (!event.target.matches('.dropdown') && !event.target.matches('.dropdown *')) {
        options.style.display = 'none';
    }
}
    document.getElementById('signupForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        // Collect form data
        const data = {
            name: document.getElementById('name').value,
            phoneNumber: document.getElementById('phoneNumber').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
            userType: document.getElementById('userType').value
        };

        // alert("form data"+JSON.stringify(data))

        // Send data to Spring Boot API using fetch

        // alert("before fetch")
        fetch('http://192.168.25.1:8085/api/users/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            // alert('User created successfully!');
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    });

    // login start
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        // document.getElementById('signupForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission
    // alert("username"+username)
        // Get the input values
        const username = document.getElementById('username').value;
        const password = document.getElementById('password1').value;
        // const  password: document.getElementById('password').value;

    
        // Validate inputs
        if (username === "" || password === "") {
            alert("Please enter both username and password.");
            return;
        }
    
        // Send login request to Spring Boot backend
        // fetch('/api/auth/login', {


            fetch('http://localhost:8085/api/users/AuthLogin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password
            }),
        })
        .then(response => {
            if (response.ok) {
                return response.text();
            } else {
                throw new Error("Invalid login details");
            }
        })
        .then(data => {
            // alert("usertype"+data); // Display success message
            // console.log(data);
            if(data=== "Old age")
            {
                // alert("inside oldage home")
                // window.location.href = "admin-dashboard.html";
                window.location.href = "file:///C:/Users/Afreen%20Sagri/Documents/SEM%20V%20PROJECT/careconnect/Old%20age%20Home/Homepage/index.html";
            }
            else{
                window.location.href = "file:///C:/Users/Afreen%20Sagri/Documents/SEM%20V%20PROJECT/careconnect/Orphange/Homepage/index.html#";
//open signin wal p
            }
            
            // Redirect or perform other actions on successful login
        })
        .catch(error => {
            alert(error.message); // Display error message
        });
    });
    
    // login ends
