document.getElementById('openEnvelope').addEventListener('click', function() { // Hide the closed envelope
    // Hide the closed envelope and start its fly-out animation
    const closedEnvelope = document.querySelector('.envelope');
    closedEnvelope.style.animation = 'flyOutDown 1s ease-out';
    closedEnvelope.style.opacity = 0; // Ensure it is not visible during animation

    // Show and animate the open envelope
    const openEnvelope = document.querySelector('.envelope-open');
    openEnvelope.style.display = 'block'; // Make sure the open envelope is visible
    openEnvelope.style.animation = 'flyInFromTop 1s ease-out'; // Apply the animation
});

document.getElementById('openEnvelope').addEventListener('animationend', function() {
    // Ensure the closed envelope is completely hidden after the animation
    document.querySelector('.envelope').style.display = 'none';
});

document.getElementById('openPaper').addEventListener('click', function() {
    const openEnvelope = document.querySelector('.envelope-open');
    const paper = document.querySelector('.paper');

    // Hide the open envelope and start its fly-out animation
    openEnvelope.style.animation = 'flyOutDown 1s ease-out';
    openEnvelope.style.opacity = 0; // Ensure it is not visible during animation

    // Show and animate the paper
    paper.style.display = 'block'; // Make sure the paper is visible
    paper.style.animation = 'fadeIn 1s ease-out'; // Apply the animation

    // Optionally, hide the open envelope completely after the animation ends
    openEnvelope.addEventListener('animationend', function() {
        openEnvelope.style.display = 'none';
    });
});