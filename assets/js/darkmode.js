let isDarkMode = false;
let icon = document.getElementById("icon");
if(icon){
  icon.onclick = function(){
    icon.src="./assets/images/light_mode.png"
  
    document.body.classList.toggle("darktheme");
    if (document.body.classList.contains("darktheme")){
      icon.src="./assets/images/light_mode.png"
    }
    else{
      icon.src="./assets/images/dark_mode.png"
    }
    const isDarkModeEnabled = document.body.classList.contains("darktheme");
    localStorage.setItem("darkMode", isDarkModeEnabled ? "enabled" : "disabled");
  }
}

document.addEventListener("DOMContentLoaded", function() {
  if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("darktheme");
    icon.src="./assets/images/light_mode.png"

}

});
