const toggle = document.getElementById("theme-toggle");
const root  = document.documentElement;

function setTheme(theme) {
    if (theme === "dark") {
        root.classList.add("dark-theme");
        toggle.innerHTML = '<i class="fa-solid fa-sun fs-6"></i>';
        localStorage.setItem("theme", "dark");
        toggle.setAttribute("aria-pressed", "true");
    } else{
        root.classList.remove("dark-theme");
        toggle.innerHTML = '<i class="fa-solid fa-moon fs-6"></i>';
        localStorage.setItem("theme", "light");
        toggle.setAttribute("aria-pressed", "false");
    }
}

const savedTheme = localStorage.getItem("theme") || "light";
setTheme(savedTheme);

toggle.addEventListener("click", () => {
    const currentTheme = root.classList.contains("dark-theme") ? "dark" : "light";
    setTheme(currentTheme === "dark" ? "light" : "dark");
});