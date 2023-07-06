const myDescriptionText = document.querySelector(".home-subtitle");

const textLoad = () => {
	setTimeout(() => {
		myDescriptionText.textContent = "Frontend Developer";
	}, 0);
	setTimeout(() => {
		myDescriptionText.textContent = "Software Engineer";
	}, 5000);
	setTimeout(() => {
		myDescriptionText.textContent = "Student";
	}, 10000);
};

textLoad();
setInterval(textLoad, 15000);
