// // ইমেজ লোড হলে এনিমেশন অ্যাড করা হবে
// document.addEventListener("DOMContentLoaded", function () {
//     document.querySelector(".img-1").classList.remove("opacity-0", "translate-x-10");

// });
// document.addEventListener("DOMContentLoaded", function () {
//     document.querySelector(".img-2").classList.remove("opacity-0", "translate-x-10");

// });

window.onload = function() {
    gsap.to("#counter", { 
        innerText: 100, 
        duration: 2, 
        snap: { innerText: 1 }
    });
};