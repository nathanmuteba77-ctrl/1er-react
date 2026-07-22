const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("active");

        } else {

            entry.target.classList.remove("active");

        }

    });

}, {
    threshold: 0.2
});

reveals.forEach(reveal => observer.observe(reveal));
const bars = document.querySelectorAll(".fill");

const barObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        const bar = entry.target;

        if (entry.isIntersecting) {

            bar.style.width = bar.dataset.width;

        } else {

            bar.style.width = "0";

        }

    });

}, {
    threshold: 0.4
});

bars.forEach(bar => barObserver.observe(bar));