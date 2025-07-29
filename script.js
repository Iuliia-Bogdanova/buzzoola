document.getElementById("start-btn").addEventListener("click", () => {
    document.getElementById("start-btn").classList.add("fade-out");
    setTimeout(() => {
        document.querySelector(".slide1").classList.remove("active");
        document.querySelector(".slide2").classList.add("active");
        document.querySelector(".slide2__steps").classList.add("animate-steps");
    }, 300);
});