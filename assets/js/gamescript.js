// This function sets up the initial button event listeners
function initializeGame() {
    // Handle the start game button click
    document.getElementById('startGame').addEventListener('click', function() {
        // Hide the entire initial content
        document.getElementById('initialContent').style.display = 'none';
        // Show the game content
        document.getElementById('gameContent').style.display = 'block';
    });

    // Handle the call to the dealer
    document.getElementById('callDealer').addEventListener('click', function() {
        // Hide the map and choices
        document.getElementById('gameContent').style.display = 'none';
        showDealerInteraction(); // Call the function to handle dealer interaction
    });
}

// Shows the interaction with the dealer and sets up further interactions
function showDealerInteraction() {
    const dealerInteraction = document.getElementById('dealerInteraction');
    dealerInteraction.innerHTML = `
        <p>You call your dealer, and he's cool for a visit. Time to prepare!</p>
        <img src="./assets/images/Image6.png" alt="Player on the phone with his dealer">
        <button id="prepareVisit">Prepare for the visit</button>
    `;
    dealerInteraction.style.display = 'block'; // Show the dealer interaction div

    // Attach an event listener to the new button in the dealer interaction
    document.getElementById('prepareVisit').addEventListener('click', prepareForVisit);
}

// Function to handle preparation for visiting the dealer
function prepareForVisit() {
    alert('Preparing to visit the dealer...'); // Placeholder for the actual logic
    // Here you would add any logic for preparing to visit the dealer
}

// When the document is fully loaded, initialize the game
document.addEventListener('DOMContentLoaded', initializeGame);






