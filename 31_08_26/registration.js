
        document.getElementById("registrationForm").addEventListener("submit", function(event) {

            event.preventDefault();

            // Get form data
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const phone = document.getElementById("phone").value;

            // Create of JSON object
            const userData = {
                name: name,
                email: email,
                phone: phone
            };

            // Store data in localStorage
            localStorage.setItem("userData", JSON.stringify(userData));

            // Open another HTML page
            window.location.href = "Display.html";
        });
