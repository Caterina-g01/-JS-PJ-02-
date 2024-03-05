document.addEventListener("DOMContentLoaded", function () {

	const sliderData = [
		{
			name: "Rostov-On-Don, Admiral",
			area: 81,
			time: 3.5,
			cost: "Upon request",
		},
		{
			name: "Sochi, Thieves",
			area: 105,
			time: 4,
			cost: "0.5 M",
		},
		{
			name: "Rostov-On-Don, Patriotic",
			area: 93,
			time: 3,
			cost: "1 M",
		}
	];

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
				activateDot(index);
			}
		});
	}

	function activateDot(index) {
		document.querySelector(".dot.active")?.classList.remove("active");
		dots[index].classList.add("active");
		changeTextSlider(index);
	}

	function changeTextSlider(index) {
		const selectData = sliderData[index];
		const cityNameElement = document.querySelector(".slider__list.city-name");

		const nameParts = selectData.name.split(", ");
		cityNameElement.innerHTML = "";
		nameParts.forEach(part => {
			const listItem = document.createElement("li");
			listItem.textContent = part;
			cityNameElement.appendChild(listItem);
		});

		document.querySelector(".slider__list.apartment-area li").textContent = selectData.area + " m2";
		document.querySelector(".slider__list.repair-time li").textContent = selectData.time + " months";
		document.querySelector(".slider__list.repair-cost li").textContent = selectData.cost;
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
		document.querySelector(".slider__img-link.active")?.classList.remove("active");
		appartmentLinks[index].classList.add("active");
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
