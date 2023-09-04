document.addEventListener("DOMContentLoaded", function () {
    // Get references to the HTML elements by their IDs
    const registroForm = document.getElementById("registroForm");
    const registroExitoso = document.getElementById("registroExitoso");
    const volverInicioButton = document.getElementById("volverInicio");

    // Add an event listener to the registration form when it's submitted
    registroForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Here, you can add the registration logic, such as sending data to the server.

        // Simulate a successful registration after 2 seconds
        setTimeout(function () {
            registroExitoso.style.display = "block"; // Display the success message
            volverInicioButton.style.display = "block"; // Display the "Volver al Inicio" button
        }, 2000); // Delay for 2 seconds (simulating server response time)
    });

    // Add an event listener to the "Volver al Inicio" button
    volverInicioButton.addEventListener("click", function () {
        // Redirect the user to the homepage (change "index.html" to your desired page)
        window.location.href = "index.html";
    });
});

