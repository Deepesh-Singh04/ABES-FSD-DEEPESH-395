function validateForm() { 
    const form = document.forms[0]; 
    form.addEventListener("submit", e => { 
        e.preventDefault(); 
        const fullname = form.fullname.value.trim(); 
        const password = form.password.value; 
        const confirm = form.confirm_password.value; 
        if (!/^[A-Za-z\s]+$/.test(fullname) || fullname.length < 6) { 
            alert("Invalid name"); 
            return; 
        } 
        if (password.length < 6) { 
            alert("Invalid password"); 
            return; 
        } 
        if (password !== confirm) { 
            alert("Passwords do not match"); 
            return; 
        } 
        alert("Registration successful"); 
        form.reset(); 
    }); 
}