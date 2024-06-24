document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btn_welcome_message").onclick = () => {
        try {
            date = new Date().toLocaleTimeString("en-GB", {hour12: false, hour: "numeric", minute: "numeric"});
            alert("Wilkommen auf der Website\n\
                  \nWie geht es dir heute?\n\
                  \nAktuell ist es " + date + "\n\
                  \nDu nutzt folgenden Browser: " + navigator.userAgent + "\n\
                  \nDeine aktuelle Fenstergröße beträgt: " + window.innerWidth + "x" + window.innerHeight);
    
            let button = document.getElementById("btn_welcome_message");
            var parent = button.parentNode;
            parent.removeChild(button);
            button.remove();
            
            var ul = document.getElementById("lst_navigation");
            var li = document.createElement("li");
            var btn_reap = document.createElement("button");
            btn_reap.id = "btn_reap";
            li.appendChild(btn_reap);
            ul.appendChild(li);
        } catch(error) {
            console.log("lele");
        }
    }
})