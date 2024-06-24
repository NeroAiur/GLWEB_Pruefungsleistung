document.addEventListener("DOMContentLoaded", () => {
    if (document.cookie.includes("login_state=true")) {
        let btn_login = document.getElementById("btn_login");
        btn_login.innerHTML = "Logout";
    }

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

    login_button.onclick = () => {
        try {
            if (document.cookie.includes("login_state=false") && !document.cookie.includes("login_state=true")) {
                let c_value = "login_state=true";
                let date = new Date();
                date.setDate(date.getDate() + 1);
                let c_expiry = "expires=" + date.toGMTString();
                let c_path = "path=/";
                document.cookie = c_value + "; " + c_expiry + "; " + c_path;
                location.reload();
            } else if (document.cookie.includes("login_state=true")) {
                document.cookie = "login_state=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                location.reload();
            }
        } catch(error) {

        }
    }
})