const bannerText = document.getElementById('banner').getElementsByTagName('p');
const bannerImage = document.querySelector('.banner-img')
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const dot = document.querySelectorAll('.dot');
let i = 0;


function add_dot_selected()  {
	dot.toString()
    dot[i].classList.add("dot_selected")
};

function remove_dot_selected() {
	dot.toString()
	dot[i].classList.remove("dot_selected")
};

const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


arrowLeft.addEventListener("click", () => {	
	remove_dot_selected();
	i == i -- ;
	if (i < 0) {
		i = 3;
		bannerImage.src = `./assets/images/slideshow/${slides[i].image}`
		bannerText[0].innerHTML =  slides[i].tagLine
		add_dot_selected();
	} else {
		bannerImage.src = `./assets/images/slideshow/${slides[i].image}`
		bannerText[0].innerHTML = `<p>${slides[i].tagLine}</p>`
		add_dot_selected();
	}
}
)

	arrowRight.addEventListener("click", () => {
		remove_dot_selected();
		i == i ++;
		if (i > 3) {
			i = 0;
			bannerImage.src = `./assets/images/slideshow/${slides[i].image}`;
			bannerText[0].innerHTML =  slides[i].tagLine ;
			add_dot_selected();
			
		} else {
			bannerText[0].innerHTML =  slides[i].tagLine ;
			bannerImage.src = `./assets/images/slideshow/${slides[i].image}`;
			add_dot_selected();
			
		}
	}
	);



