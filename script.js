// Initial Pet Stats
let hunger = 50;
let happiness = 50;
let energy = 50;

// Update status display (status bars)
function updateStatus() {
    document.getElementById('hunger-bar').style.width = hunger + '%';
    document.getElementById('happiness-bar').style.width = happiness + '%';
    document.getElementById('energy-bar').style.width = energy + '%';
}

// Feed the pet
function feedPet() {
    hunger = Math.max(hunger - 15, 0);
    happiness = Math.min(happiness + 10, 100);
    energy = Math.min(energy + 5, 100);
    animatePet('eat');
    updateStatus();
}

// Play with the pet
function playWithPet() {
    if (energy > 10) {
        happiness = Math.min(happiness + 15, 100);
        hunger = Math.min(hunger + 10, 100);
        energy = Math.max(energy - 10, 0);
        animatePet('play');
    } else {
        alert("Your pet is too tired to play!");
    }
    updateStatus();
}

// Put the pet to sleep
function putPetToSleep() {
    energy = Math.min(energy + 20, 100);
    hunger = Math.min(hunger + 10, 100);
    animatePet('sleep');
    updateStatus();
}

// Animation based on activity
function animatePet(action) {
    const petImage = document.getElementById('pet-image');
    if (action === 'eat') {
        petImage.src = "eating-pet.png";  // Eating image
    } else if (action === 'play') {
        petImage.src = "play-pet.png";  // Playing image
    } else if (action === 'sleep') {
        petImage.src = "sleepy-pet.png";  // Sleeping image
    }
     // Revert to normal after 3 second
     setTimeout(() => {
      petImage.src = "main-pet.png"; // Normal pet image
  }, 3000);
}

// Initial update
updateStatus();

