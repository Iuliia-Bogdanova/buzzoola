// document.getElementById("start-btn").addEventListener("click", () => {
//     // Добавляем класс fade-out к кнопке
//     document.getElementById("start-btn").classList.add("fade-out");

//     // Даем кнопке время исчезнуть (0.5s), затем переключаем слайды
//     setTimeout(() => {
//         document.querySelector(".slide1").classList.remove("active");
//         document.querySelector(".slide2").classList.add("active");
//     }, 300); // Задержка соответствует длительности transition для кнопки
// });

// document.getElementById("start-btn").addEventListener("click", () => {
//     document.getElementById("start-btn").classList.add("fade-out");
//     setTimeout(() => {
//         document.querySelector(".slide1").classList.remove("active");
//         document.querySelector(".slide2").classList.add("active");
//         // Запускаем анимацию шагов после появления слайда
//         setTimeout(() => {
//             document
//                 .querySelector(".slide2__steps")
//                 .classList.add("animate-steps");
//         }, 300); // Задержка соответствует transition слайда
//     }, 300); // Задержка соответствует transition кнопки
// });


// document.getElementById("start-btn").addEventListener("click", () => {
//     document.getElementById("start-btn").classList.add("fade-out");
//     setTimeout(() => {
//         document.querySelector(".slide1").classList.remove("active");
//         document.querySelector(".slide2").classList.add("active");
//         document.querySelector(".slide2__steps").classList.add("animate-steps");
//     }, 300); // Задержка соответствует transition кнопки
// });


document.getElementById("start-btn").addEventListener("click", () => {
    document.getElementById("start-btn").classList.add("fade-out");
    setTimeout(() => {
        document.querySelector(".slide1").classList.remove("active");
        document.querySelector(".slide2").classList.add("active");
        document.querySelector(".slide2__steps").classList.add("animate-steps");
    }, 500);
});