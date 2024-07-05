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

    document.getElementById("btn_login").onclick = () => {
        try {
            if ((document.cookie.includes("login_state=false") && !document.cookie.includes("login_state=true")) || (document.cookie == "")) {
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

    const header = document.querySelector(".header-wrapper");
    const footer = document.querySelector(".footer-wrapper");
    const mainWrapper = document.querySelector(".mainWrapper")
    const lst_navigation = document.querySelector(".lst_navigation")
    let lastScrollPosition = 0;
    let ticking = false;

    function adjustHeaderFooter() {
        const currentScrollPosition = window.scrollY;

        if (currentScrollPosition === 0) {
            header.style.height = "100px";
            lst_navigation.style.height = "100px";
            footer.style.height = "40px";
            mainWrapper.style.paddingTop = "100px";
            mainWrapper.style.paddingBottom = "40px";
        } else if ((currentScrollPosition + window.innerHeight + 30) >= document.documentElement.scrollHeight) {
            header.style.height = "40px";
            lst_navigation.style.height = "40px";
            footer.style.height = "100px";
            mainWrapper.style.paddingTop = "40px";
            mainWrapper.style.paddingBottom = "100px";
        } else {
            header.style.height = "50px";
            lst_navigation.style.height = "50px";
            footer.style.height = "50px";
            mainWrapper.style.paddingTop = "50px";
            mainWrapper.style.paddingBottom = "50px";
        }

        lastScrollPosition = currentScrollPosition;
    }

    window.addEventListener("scroll", function() {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                adjustHeaderFooter();
                ticking = false;
            });
            ticking = true;
        }
    });

    adjustHeaderFooter();

    const form = document.getElementById("ajaxForm");
    const responseContainer = document.getElementById("responseContainer");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        const inputText = formData.get("inputText");

        fetch("http://ajax.lern.es/ajax36.php", {
            method: "POST",
            body: new URLSearchParams({ text: inputText })
        })
        .then(response => response.text())
        .then(data => {
            responseContainer.textContent = data;
        })
        .catch(error => {
            responseContainer.textContent = "Ein Fehler ist aufgetreten: " + error;
        });
    });
})