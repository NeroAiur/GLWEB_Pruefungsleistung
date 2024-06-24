document.addEventListener("DOMContentLoaded", () => {
    let wm_btn_pressed = false;
    document.getElementById("btn_welcome_message").onclick = () => {
        try {
            if (wm_btn_pressed === false) {
                date = new Date().toLocaleTimeString("en-GB", {hour12: false, hour: "numeric", minute: "numeric"});
                alert("Wilkommen auf der Website\n\
                       \nWie geht es dir heute?\n\
                       \nAktuell ist es " + date + "\n\
                       \nDu nutzt folgenden Browser: " + navigator.userAgent + "\n\
                       \nDeine aktuelle Fenstergröße beträgt: " + window.innerWidth + "x" + window.innerHeight);
        
                let button = document.getElementById("btn_welcome_message");
                button.innerHTML = "Return Welcome Message";
                wm_btn_pressed = true;

            } else if (wm_btn_pressed === true) {
                let button = document.getElementById("btn_welcome_message");
                button.innerHTML = "Welcome Message";
                wm_btn_pressed = false;
            }

        } catch(error) {
            console.log("Error Welcome-Message-Button");
        }
    }
})