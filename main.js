const btn = document.querySelector(".scroll-to-top");
const root = document.documentElement;

const handleScrollBar = () => {
	const scroll = window.scrollY;
	const leftToScroll =
		document.body.getBoundingClientRect().height - window.innerHeight;

	const scrollBarWidth = Math.floor((scroll / leftToScroll) * 100);

	root.style.setProperty("--scroll-width", `${scrollBarWidth}%`);

	if (scrollBarWidth > 80) {
		btn.classList.add("active");
	} else {
		btn.classList.remove("active");
	}
};

const scrollToTop = () => {
	window.scroll({
		top: 0,
		behavior: "smooth",
	});
};

window.addEventListener("scroll", handleScrollBar);
btn.addEventListener("click", scrollToTop);

// const btn = document.querySelector(".scroll-to-top");
// const root = document.documentElement;

// const handleScroolBar = () => {
// 	const scroll = window.scrollY;

// 	const wiewportHeight = window.innerHeight;

// 	const body = document.body.scrollHeight;

// 	const howCanWeScroll = body - wiewportHeight;

// 	const bingo = Math.floor((scroll / howCanWeScroll) * 100);

// 	root.style.setProperty("--scroll-width", bingo + "%");

// 	if (bingo > 80) {
// 		btn.classList.add("active");
// 	} else {
// 		btn.classList.remove("active");
// 	}
// };

// const scrollToTop = () => {
// 	window.scroll({
// 		top: 0,
// 		behavior: "smooth",
// 	});
// };

// window.addEventListener("scroll", handleScroolBar);
// btn.addEventListener("click", scrollToTop);
