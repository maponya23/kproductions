document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.querySelectorAll('.login-button');
    const loginModal = document.getElementById('login-modal');
    const closeButtons = document.querySelectorAll('.close');
    const forgotPasswordLink = document.querySelector('#login-form a');
    const forgotPasswordModal = document.getElementById('forgot-password-modal');

    loginButton.forEach(button => {
        button.addEventListener('click', () => {
            loginModal.style.display = 'block';
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            loginModal.style.display = 'none';
            forgotPasswordModal.style.display = 'none';
        });
    });

    window.addEventListener('click', (event) => {
        if (event.target == loginModal) {
            loginModal.style.display = 'none';
        }
        if (event.target == forgotPasswordModal) {
            forgotPasswordModal.style.display = 'none';
        }
    });

    forgotPasswordLink.addEventListener('click', (event) => {
        event.preventDefault();
        loginModal.style.display = 'none';
        forgotPasswordModal.style.display = 'block';
    });


    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    
});

function SendMail() {
    const params = {
        form_name: document.getElementById("fullname").value,
        name: document.getElementById("name").value,
        email_id: document.getElementById("email_id").value,
        phone: document.getElementById("phone").value,
        organisation: document.getElementById("organisation").value,
        type: document.getElementById("project_type").value,
        description: document.getElementById("description").value
    };

    fetch('/submit-enquiry', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
    })
    .then(response => {
        if (response.ok) {
            alert('Enquiry submitted successfully!');
        } else {
            alert('Failed to submit enquiry.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while submitting the enquiry.');
    });
}
