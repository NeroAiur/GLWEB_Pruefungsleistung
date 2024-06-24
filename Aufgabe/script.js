document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btn_welcome_message").onclick = () => {
        try {
            date = new Date().toLocaleTimeString("en-GB", {hour12: false, hour: "numeric", minute: "numeric"});
            alert("Wilkommen auf der Website\n\nWie geht es dir heute?\n\nAktuell ist es " + date + "\nDu nutzt folgenden Browser: " + navigator.userAgent);
    
            let button = document.getElementById("btn_welcome_message");
            var parent = button.parentNode;
            parent.removeChild(button);
            button.remove();  
        } catch(error) {
            console.log("lele");
        }
    }
})