const envelope = document.querySelector('.envelope-wrapper');
const confettiContainer = document.querySelector('.confetti-container');

envelope.addEventListener('click', () => {

    envelope.classList.toggle('flap');

    createConfetti();
});

function createConfetti() {

    for (let i = 0; i < 25; i++) {

        const confetti = document.createElement("div");

        confetti.classList.add("confetti");

        confetti.innerHTML = "❤";

        confetti.style.left = Math.random() * 100 + "%";
        confetti.style.animationDuration = (2 + Math.random() * 2) + "s";

        confettiContainer.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 3000);
    }
}