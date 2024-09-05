// Sample data for states and their districts
const stateDistricts = {
    kerala: [
        "Thiruvananthapuram", "Kollam", "Pathanamthitta", "Alappuzha",
        "Kottayam", "Idukki", "Ernakulam", "Thrissur", "Palakkad",
        "Malappuram", "Kozhikode", "Wayanad", "Kannur", "Kasaragod"
    ],
    karnataka: [
        "Bengaluru", "Mysuru", "Mangaluru", "Hubli-Dharwad", "Belagavi",
        "Kalaburagi", "Davangere", "Ballari", "Shivamogga", "Tumakuru"
    ],
    "tamil-nadu": [
        "Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem",
        "Tirunelveli", "Erode", "Vellore", "Thoothukudi", "Dindigul"
    ]
};

// Function to populate the districts list based on the selected state
function populateDistricts(state) {
    const districtsBox = document.getElementById('districts-box');
    const districtsList = document.getElementById('districts-list');

    // Clear any existing list
    districtsList.innerHTML = '';

    // Check if the state has districts in the sample data
    if (stateDistricts[state]) {
        // Create a list item for each district
        stateDistricts[state].forEach(district => {
            const li = document.createElement('li');
            li.textContent = district;

            // Add a click event to each district
            li.addEventListener('click', function() {
                alert(`You clicked on ${district} district`);
            });

            districtsList.appendChild(li);
        });

        // Show the districts box
        districtsBox.style.display = 'block';
    }
}

// Event listeners for each area on the map
const areas = document.querySelectorAll('area');

areas.forEach(area => {
    // Event to populate districts when a state is clicked
    area.addEventListener('click', function(event) {
        event.preventDefault();  // Prevent the default link action
        const state = this.getAttribute('alt').toLowerCase().replace(' ', '-');  // Get the state name
        populateDistricts(state);  // Populate the districts based on the selected state
    });
});
