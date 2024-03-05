document.addEventListener("DOMContentLoaded", function () {
	const sliderData = [];

	function Slider(name, area, time, cost, img) {
		this.name = name;
		this.city = this.name.replace(",", "<br> LCD");
		this.area = area;
		this.time = time;
		this.cost = cost;
		this.img = img;
	}

	sliderData.push(
		new Slider(
			"Rostov-On-Don, Admiral",
			81,
			3.5,
			"Upon request",
			"./images/slider-01.jpg"
		)
	);
	sliderData.push(
		new Slider(
			"Sochi, Thieves",
			105,
			4,
			"0.5 M",
			"./images/slider-02.jpg"
		)
	);
	sliderData.push(
		new Slider(
			"Rostov-On-Don, Patriotic",
			93,
			3,
			"1 M",
			"./images/slider-03.jpg"
		)
	);

	const appartmentLinks = document.querySelectorAll('.slider__img-link');
	const images = document.querySelectorAll(".slider__img");
	const sliderBlocks = document.querySelectorAll('.slider__block');
	const arrowLeft = document.getElementById("arrow-left");
	const arrowRight = document.getElementById("arrow-right");
	const dots = document.querySelectorAll(".dot");

	let currentIndex = 0;

	function showApartmentName(index) {
		appartmentLinks.forEach((link, i) => {
			if (i === index) {
				link.classList.add("active");
			} else {
				link.classList.remove("active");
			}
		});
	}

	function showImageAndSlide(index) {
		images.forEach((img, i) => {
			img.classList.remove("active");
			if (i === index) {
				img.classList.add("active");
				showActiveDot(index);
			}
		});
	}

	function activateDot(index) {
		dots.forEach((dot, i) => {
			if (i === index) {
				dot.classList.add("active");
			} else {
				dot.classList.remove("active");
			}
		});
	}

	function showActiveDot(index) {
		dots.forEach((dot, i) => {
			if (i === index) {
				dot.classList.add("active");
			} else {
				dot.classList.remove("active");
			}
		});
	}

	dots.forEach((dot, index) => {
		dot.addEventListener("click", function () {
			currentIndex = index;
			showApartmentName(currentIndex);
			showImageAndSlide(currentIndex);
			activateDot(currentIndex);
		});
	});

	function activateLinks(index) {
		appartmentLinks.forEach((link, i) => {
			if (i === index) {
				link.classList.remove('slider__img-link--hidden');
				link.classList.add('slider__img-link--visible');
			} else {
				link.classList.remove('slider__img-link--visible');
				link.classList.add('slider__img-link--hidden');
			}
		});
	}

	appartmentLinks.forEach((appartmentlink, index) => {
		appartmentlink.addEventListener("click", function () {
			currentIndex = index;
			showApartmentName(currentIndex);
			showImageAndSlide(currentIndex);
			activateDot(currentIndex);
		});
	});

	arrowLeft.onclick = function () {
		currentIndex = (currentIndex - 1 + appartmentLinks.length) % appartmentLinks.length;
		showApartmentName(currentIndex);
		showImageAndSlide(currentIndex);
		activateLinks(currentIndex);
	};

	arrowRight.onclick = function () {
		currentIndex = (currentIndex + 1) % appartmentLinks.length;
		showApartmentName(currentIndex);
		showImageAndSlide(currentIndex);
		activateLinks(currentIndex);
	};

	showApartmentName(currentIndex);
	showImageAndSlide(currentIndex);
	activateLinks(currentIndex);
});
