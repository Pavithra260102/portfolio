// You can add any JavaScript functionality you'd like here
// For example, you can use JavaScript for form validation or dynamic effects

console.log("Portfolio website loaded successfully!");
// Function to add visibility class to education items with delay
document.addEventListener("DOMContentLoaded", function () {
    const educationItems = document.querySelectorAll('.education-item');
    educationItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('visible'); // Reveal the item with animation
        }, index * 1000); // Add delay for each degree (1 second)
    });
});
function showProject(title, description) {
    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalDescription").innerText = description;
    document.getElementById("projectModal").style.display = "block";
}

function closeModal() {
    document.getElementById("projectModal").style.display = "none";
}

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target == document.getElementById("projectModal")) {
        closeModal();
    }
};
document.addEventListener("DOMContentLoaded", function () {
    const progressBars = document.querySelectorAll(".progress");

    progressBars.forEach(bar => {
        const percentage = bar.getAttribute("data-percent");
        bar.style.width = percentage;
        bar.textContent = percentage; // Show the percentage inside the bar
    });
});
