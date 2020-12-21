const defaultCurrentTheme = () => (localStorage.currentTheme == null) ? localStorage.setItem("currentTheme", "#fff") : console.log("CurrentTheme: light or dark");
const iconBtnTheme = document.createElement("i");
const changeThemeBtn = document.querySelector(".changeTheme");

const darkTheme = "#43506c";
const lightTheme = "#fff";

defaultCurrentTheme();

if (localStorage.currentTheme == lightTheme) {
    iconBtnTheme.classList.add("fa-moon");
} else {
    iconBtnTheme.classList.add("fa-sun");
}

function updateUi() {
    const bodyStyle = document.body.style;
    if(localStorage.currentTheme == darkTheme){
        bodyStyle.setProperty("--themeColor", darkTheme);
        bodyStyle.setProperty("--textColor", "#fff");
        bodyStyle.setProperty("--borderTaskColor", "rgba(255, 255, 255, 0.2)");
        bodyStyle.setProperty("--bgColorTaskHover", "rgba(255, 255, 255, 0.02)");
        bodyStyle.setProperty("--colorIconTheme", "rgba(255, 255, 255, 0.4)");
    } else if(localStorage.currentTheme == lightTheme){
        bodyStyle.setProperty("--themeColor", lightTheme);
        bodyStyle.setProperty("--textColor", "#333");
        bodyStyle.setProperty("--borderTaskColor", "rgba(0, 0, 0, 0.1)");
        bodyStyle.setProperty("--bgColorTaskHover", "rgba(0, 0, 0, 0.02)");
        bodyStyle.setProperty("--colorIconTheme", "#43506c");
    }
}
updateUi();

changeThemeBtn.addEventListener('click', () => {
    if(localStorage.currentTheme == darkTheme) { 
        localStorage.currentTheme = lightTheme;

        iconBtnTheme.classList.remove("fa-sun");
        iconBtnTheme.classList.add("fa-moon");
    } else if (localStorage.currentTheme == lightTheme) {
        localStorage.currentTheme = darkTheme;

        iconBtnTheme.classList.remove("fa-moon");
        iconBtnTheme.classList.add("fa-sun");
    }

    updateUi();
});