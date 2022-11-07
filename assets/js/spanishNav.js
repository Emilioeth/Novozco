//Nav Spanish ----------------------------------------------------------------

const inicioNav = document.querySelector('.inicio-nav');
const nosotrosNav = document.querySelector('.nosotros-nav');
const serviciosNav = document.querySelector('.servicios-nav');
const equipoNav = document.querySelector('.equipo-nav');
const contactanosNav = document.querySelector('.contactanos-nav');

function navInicio(){
	inicioNav.classList.add('active');
	nosotrosNav.classList.remove('active');
	serviciosNav.classList.remove('active');
	equipoNav.classList.remove('active');
	contactanosNav.classList.remove('active');
}
function navNosotros(){
	nosotrosNav.classList.add('active');
	inicioNav.classList.remove('active');
	serviciosNav.classList.remove('active');
	equipoNav.classList.remove('active');
	contactanosNav.classList.remove('active');
}
function navServicios(){
	serviciosNav.classList.add('active');
	nosotrosNav.classList.remove('active');
	inicioNav.classList.remove('active');
	equipoNav.classList.remove('active');
	contactanosNav.classList.remove('active');
}
function navEquipo(){
	equipoNav.classList.add('active');
	serviciosNav.classList.remove('active');
	nosotrosNav.classList.remove('active');
	inicioNav.classList.remove('active');
	contactanosNav.classList.remove('active');
}
function navContacto(){
	contactanosNav.classList.add('active');
	equipoNav.classList.remove('active');
	serviciosNav.classList.remove('active');
	nosotrosNav.classList.remove('active');
	inicioNav.classList.remove('active');
}

// ======================================================================


document.addEventListener('scroll', function(){

	var scrollN = $(window).scrollTop();
	var top = $('#top').height();
	var about = $('#about').outerHeight();
	var services = $('#services').outerHeight();
	var team = $('#team').outerHeight();

	if (scrollN < top){
		navInicio()
	}

	if (scrollN >= top){
		navNosotros()
	}

	if (scrollN >= top + about ){
		navServicios()
	}

	if (scrollN >= top + about + services){
		navEquipo()
	}

	if (scrollN >= top + about + services + team){
		navContacto()
	}

});