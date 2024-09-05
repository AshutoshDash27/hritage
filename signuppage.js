document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const location = document.getElementById('location').value;
    const mobile = document.getElementById('mobile').value;

    if (name && age && location && mobile) {
        alert(`Welcome, ${name}! Thank you for signing up from ${location}. We will contact you at ${mobile}.`);
    } else {
        alert('Please fill out all fields.');
    }
});
