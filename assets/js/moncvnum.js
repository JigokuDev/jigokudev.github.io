var pageActuelle = ".presentation"
$( "#presentation" ).click(function() {
	$(pageActuelle).hide( "fast" );
	$('.navbar-collapse').collapse('hide');
	$( ".presentation" ).show( "slow" );
	pageActuelle = ".presentation";
    $('body').css('background-image', 'url("assets/media/textures/gaming-pattern.png")');
	});
$( "#competences" ).click(function() {
	$('.navbar-collapse').collapse('hide');
	$(pageActuelle).hide( "fast" );
	$( ".competences" ).show( "slow" );
	pageActuelle = ".competences";	
    $('body').css('background-image','url("assets/media/textures/qbkls.png")');
});
$( "#formations" ).click(function() {
	$('.navbar-collapse').collapse('hide');
	$(pageActuelle).hide( "fast" );
	$( ".formations" ).show( "slow" );
	pageActuelle = ".formations";
    $('body').css('background-image', 'url("assets/media/textures/hip-square.png")');	
});
$( "#experiences" ).click(function() {
	$('.navbar-collapse').collapse('hide');
	$(pageActuelle).hide( "fast" );
	$( ".experiences" ).show( "slow" );
	pageActuelle = ".experiences";
    $('body').css('background-image', 'url("assets/media/textures/tic-tac-toe.png")');
});
$( "#contact" ).click(function() {
	$('.navbar-collapse').collapse('hide');
	$(pageActuelle).hide( "fast" );
	$( ".contact-onglet" ).show( "slow" );
	pageActuelle = ".contact-onglet";
	$('body').css('background-color','#7bcfa9');	
});
$(document).on({
    mouseenter: function () {
        $(this).css("border", "1px #f1f1f1 solid");
    },
    mouseleave: function () {
        $(this).css("border", "0px")
    }
}, "#competence");