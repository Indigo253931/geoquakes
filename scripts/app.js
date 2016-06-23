// define globals
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";
var $quakesList;
var map;



function initMap() {

	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 39.76, lng: -105.01},
		zoom: 1
		}
	);}

		
		

$(document).on("ready", function() {
	var source = $("#quakes-template").html();
	var template= Handlebars.compile(source);

	$.get(weekly_quakes_endpoint, function(data){

		console.log(data);
	
		var quakeNames = template({quake:data.features});
		  $("#info").append(quakeNames);


	});

	// $("#map").append(quakesList);



});
