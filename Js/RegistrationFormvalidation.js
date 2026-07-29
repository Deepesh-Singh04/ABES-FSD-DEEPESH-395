document.querySelector('form').addEventListener('submit', function(event) {
    const firstName = document.getElementById('first_name').value.trim();
    const lastName = document.getElementById('last_name').value.trim();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPass = document.getElementById('confirm password').value;
    const qualifications = document.querySelectorAll('input[name="qualification"]:checked');
    
    let errorMessage = "";

    // 2. Name Validation (Length check)
    if (firstName.length < 2 || lastName.length < 2) {
        errorMessage += "First and Last name must be at least 2 characters long.\n";
    }

    // 3. Password Matching Logic
    if (password !== confirmPass) {
        errorMessage += "Passwords do not match.\n";
    }

    // 4. Complexity Check (Example: Min 8 chars)
    if (password.length < 8) {
        errorMessage += "Password must be at least 8 characters long.\n";
    }

    // 5. Checkbox Validation (Ensure at least one is picked)
    if (qualifications.length === 0) {
        errorMessage += "Please select at least one qualification.\n";
    }

    // 6. Final Decision
    if (errorMessage !== "") {
        alert(errorMessage); // Display errors
        event.preventDefault(); // Stop the form from submitting
    } else {
        alert("Form submitted successfully!");
    }
});