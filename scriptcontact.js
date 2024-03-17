document.addEventListener("DOMContentLoaded", function() {
    const form = document.createElement("form");
    form.setAttribute("id", "contactForm");

    const textarea = document.createElement("textarea");
    textarea.setAttribute("id", "message");
    textarea.setAttribute("placeholder", "Type your message here...");
    textarea.setAttribute("rows", "4");

    const submitButton = document.createElement("button");
    submitButton.textContent = "Submit";

    form.appendChild(textarea);
    form.appendChild(submitButton);

    document.querySelector(".container").appendChild(form);

    // Event listener for form submission
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const message = document.getElementById("message").value;
        alert("Message submitted: " + message);
        // You can perform further actions with the submitted message here
    });
});