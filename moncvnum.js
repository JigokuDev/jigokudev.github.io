var pageActuelle = ".presentation"
$( "#presentation" ).click(function() {
	$(pageActuelle).hide( "fast" );
	$('.navbar-collapse').collapse('hide');
	$( ".presentation" ).show( "slow" );
	pageActuelle = ".presentation";
	$('body').css('background-color','#e6e6e6');
	});
$( "#competences" ).click(function() {
	$('.navbar-collapse').collapse('hide');
	$(pageActuelle).hide( "fast" );
	$( ".competences" ).show( "slow" );
	pageActuelle = ".competences";	
	$('body').css('background-color','#a0c3ff');
});
$( "#formations" ).click(function() {
	$('.navbar-collapse').collapse('hide');
	$(pageActuelle).hide( "fast" );
	$( ".formations" ).show( "slow" );
	pageActuelle = ".formations";
	$('body').css('background-color','#ed9d97');	
});
$( "#experiences" ).click(function() {
	$('.navbar-collapse').collapse('hide');
	$(pageActuelle).hide( "fast" );
	$( ".experiences" ).show( "slow" );
	pageActuelle = ".experiences";
	$('body').css('background-color','#ffe168');
});
$( "#contact" ).click(function() {
	$('.navbar-collapse').collapse('hide');
	$(pageActuelle).hide( "fast" );
	$( ".contact-onglet" ).show( "slow" );
	pageActuelle = ".contact-onglet";
	$('body').css('background-color','#7bcfa9');	
});