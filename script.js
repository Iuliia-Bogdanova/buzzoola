document.getElementById("start-btn").addEventListener("click", () => {
    const startBtn = document.getElementById("start-btn");
    const slide1 = document.querySelector(".slide1");
    const slide2 = document.querySelector(".slide2");
    const slide3 = document.querySelector(".slide3");
    const steps = document.querySelector(".slide2__steps");
    const lastStep = document.querySelector(".step4");

    // Убрать кнопку
    startBtn.classList.add("fade-out");

    // Перейти к slide2 + анимация
    setTimeout(() => {
        slide1.classList.remove("active");
        slide2.classList.add("active");
        steps.classList.add("animate-steps");
    }, 300);

    lastStep.addEventListener(
        "animationend",
        () => {
            setTimeout(() => {
                startSlideCycle();
            }, 2000); // пауза slide2
        },
        { once: true }
    );

    function startSlideCycle() {
        slide2.classList.add("slide--exit-left");
        slide3.classList.add("slide--enter-right");
        slide3.classList.add("active");

        setTimeout(() => {
            slide2.classList.remove("active", "slide--exit-left");
            slide3.classList.remove("slide--enter-right");
        }, 500);

        setTimeout(() => {
            steps.style.opacity = "0";
            steps.classList.remove("animate-steps");

            slide3.classList.add("slide--exit-left");
            slide2.classList.add("slide--enter-right");
            slide2.classList.add("active");

            setTimeout(() => {
                slide3.classList.remove("active", "slide--exit-left");
                slide2.classList.remove("slide--enter-right");

                // Перезапустить анимацию slide2
                setTimeout(() => {
                    steps.style.opacity = "1";
                    void steps.offsetWidth; // форс-перерисовка
                    steps.classList.add("animate-steps");

                    setTimeout(() => {
                        startSlideCycle();
                    }, 5000); // slide2
                }, 100); // Задержка slide2
            }, 500); // Смахнуть slide2
        }, 3500); // slide3
    }
});
