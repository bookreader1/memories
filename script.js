function alignMessages() {

    const yourName = "_Vempire_"; // change if needed
    const messages = document.querySelectorAll(".pam");

    let lastSender = null;

    messages.forEach(msg => {

        const sender = msg.querySelector("h2");
        if (!sender) return;

        const currentSender = sender.textContent.trim();

        if (currentSender === yourName) {
            msg.classList.add("you");
        } else {
            msg.classList.add("her");
        }

        // Hide duplicate names
        if (currentSender === lastSender) {
            sender.style.display = "none";
        }

        lastSender = currentSender;
    });
}