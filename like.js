const like = document.querySelector(".like i");
const likeCount = document.querySelector(".likeCount");
like.addEventListener("click", () => {
	like.classList.toggle("far");
	like.classList.toggle("fas");
	if (like.classList.contains("fas")) {
		likeCount.innerHTML = Number(likeCount.innerHTML) + 1;
	} else {
		likeCount.innerHTML = Number(likeCount.innerHTML) - 1;
	}
});