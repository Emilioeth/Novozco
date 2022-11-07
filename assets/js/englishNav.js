//Nav English ----------------------------------------------------------------

const homeNav = document.querySelector('.home-nav');
const aboutNav = document.querySelector('.about-nav');
const servicesNav = document.querySelector('.services-nav');
const teamNav = document.querySelector('.team-nav');
const contactNav = document.querySelector('.contact-nav');

function navHome(){
	homeNav.classList.add('active');
	aboutNav.classList.remove('active');
	servicesNav.classList.remove('active');
	teamNav.classList.remove('active');
	contactNav.classList.remove('active');
}
function navAbout(){
	aboutNav.classList.add('active');
	homeNav.classList.remove('active');
	servicesNav.classList.remove('active');
	teamNav.classList.remove('active');
	contactNav.classList.remove('active');
}
function navServices(){
	servicesNav.classList.add('active');
	aboutNav.classList.remove('active');
	homeNav.classList.remove('active');
	teamNav.classList.remove('active');
	contactNav.classList.remove('active');
}
function navTeam(){
	teamNav.classList.add('active');
	servicesNav.classList.remove('active');
	aboutNav.classList.remove('active');
	homeNav.classList.remove('active');
	contactNav.classList.remove('active');
}
function navContact(){
	contactNav.classList.add('active');
	teamNav.classList.remove('active');
	servicesNav.classList.remove('active');
	aboutNav.classList.remove('active');
	homeNav.classList.remove('active');
}

document.addEventListener('scroll', function(){

	var scrollN = $(window).scrollTop();
	var top = $('#top').height();
	var about = $('#about').outerHeight();
	var services = $('#services').outerHeight();
	var team = $('#team').outerHeight();

	if (scrollN < top){
		navHome()
	}

	if (scrollN >= top){
		navAbout()
	}

	if (scrollN >= top + about ){
		navServices()
	}

	if (scrollN >= top + about + services){
		navTeam()
	}

	if (scrollN >= top + about + services + team){
		navContact()
	}

});