const el = document.querySelector(".menu-toggle");

el.onclick = function () {
	el.classList.toggle(".mobile-nav");
	el.classList.toggle(".is-active");
};
