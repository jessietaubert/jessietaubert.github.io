document.addEventListener('scroll', function() {

	if (window.location.pathname.includes('Personal.html')) {
    	const header = document.querySelector('.topdivpers');
   	 	const edu = document.querySelector('.edu');
    	const headerOpacity = 1 - (window.scrollY / (window.innerHeight+200));
    	header.style.opacity = headerOpacity;
   
  		const eduStartFade = 700;
    	let eduOp = 1;
    	if (scrollY > eduStartFade) {
        	eduOp = 1 - ((scrollY - eduStartFade) / (window.innerHeight+200));
   		}
    	edu.style.opacity = eduOp;
  	}  
});

function socials_dropdown(){
	var dropdown = document.getElementById("socials");
	var display = window.getComputedStyle(dropdown).display;
	
	if(display === "none") {
		dropdown.style.display = "block";
	}
	else {
		dropdown.style.display = "none";
	}
}

document.addEventListener("DOMContentLoaded", function () {
	let carousel = document.querySelector(".carousel");
	let items = carousel.querySelectorAll(".item");
  
	function showItem(index) {
	  items.forEach((item, idx) => {
		item.classList.remove("active");
		if (idx === index) {
		  item.classList.add("active");
		}
	  });
	}
  
	document.querySelector(".prev").addEventListener("click", () => {
	  let index = [...items].findIndex((item) =>
		item.classList.contains("active")
	  );
	  showItem((index - 1 + items.length) % items.length);
	});
  
	document.querySelector(".next").addEventListener("click", () => {
	  let index = [...items].findIndex((item) =>
		item.classList.contains("active")
	  );
	  showItem((index + 1) % items.length);
	});
  
  });


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
