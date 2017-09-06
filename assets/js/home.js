var map = null;
var citralandLatLng = {lat: -7.2899950, lng: 112.6371532};

$(function() {
	$(".btn-citraland").on("click", function() {
		if (map != null) {
			map.panTo(citralandLatLng);
			map.setZoom(14);
		}
	});
});

function initMap() {
	map = new google.maps.Map(document.getElementById("map"), {
		center: citralandLatLng,
		zoom: 14
	});

	var infowindow = new google.maps.InfoWindow({
		content: "Brother House, Hall Citraland<div id='streetview' style='margin-top: 10px; width: 400px; height: 250px;'></div>"
	});

	var marker = new google.maps.Marker({
		position: {lat: -7.282300, lng: 112.626996},
		map: map,
		label: "1",
		title: "Brother House, Hall Citraland"
	});
	marker.addListener("click", function() {
		infowindow.open(map, marker);

		var pano = null;
		google.maps.event.addListener(infowindow, "domready", function() {
			if (pano != null) {
				pano.unbind("position");
				pano.setVisible(false);
			}

			pano = new google.maps.StreetViewPanorama(document.getElementById("streetview"), {
				navigationControl: true
			});
			pano.setPov({
				heading: 275,
				pitch: 0
			});
			pano.bindTo("position", marker);
			pano.setVisible(true);
		});

		google.maps.event.addListener(infowindow, "closeclick", function() {
			pano.unbind("position");
			pano.setVisible(false);
			pano = null;
		});
	});

	var infowindow2 = new google.maps.InfoWindow({
		content: "Liem John<div id='streetview2' style='margin-top: 10px; width: 400px; height: 250px;'></div>"
	});

	var marker2 = new google.maps.Marker({
		position: {lat: -7.3060649, lng: 112.6561391},
		map: map,
		label: "2",
		title: "Liem John"
	});
	marker2.addListener("click", function() {
		infowindow2.open(map, marker2);

		var pano = null;
		google.maps.event.addListener(infowindow2, "domready", function() {
			if (pano != null) {
				pano.unbind("position");
				pano.setVisible(false);
			}

			pano = new google.maps.StreetViewPanorama(document.getElementById("streetview2"), {
				navigationControl: true
			});
			pano.bindTo("position", marker2);
			pano.setVisible(true);
		});

		google.maps.event.addListener(infowindow2, "closeclick", function() {
			pano.unbind("position");
			pano.setVisible(false);
			pano = null;
		});
	});

	var infowindow3 = new google.maps.InfoWindow({
		content: "Fei Ling<div id='streetview3' style='margin-top: 10px; width: 400px; height: 250px;'></div>"
	});

	var marker3 = new google.maps.Marker({
		position: {lat: -7.276476, lng: 112.647377},
		map: map,
		label: "3",
		title: "Fei Ling"
	});
	marker3.addListener("click", function() {
		infowindow3.open(map, marker3);

		var pano = null;
		google.maps.event.addListener(infowindow3, "domready", function() {
			if (pano != null) {
				pano.unbind("position");
				pano.setVisible(false);
			}

			pano = new google.maps.StreetViewPanorama(document.getElementById("streetview3"), {
				navigationControl: true
			});
			pano.bindTo("position", marker3);
			pano.setVisible(true);
		});

		google.maps.event.addListener(infowindow3, "closeclick", function() {
			pano.unbind("position");
			pano.setVisible(false);
			pano = null;
		});
	});

	var infowindow4 = new google.maps.InfoWindow({
		content: "Tan Sioe Kiem<div id='streetview4' style='margin-top: 10px; width: 400px; height: 250px;'></div>"
	});

	var marker4 = new google.maps.Marker({
		position: {lat: -7.276242, lng: 112.643214},
		map: map,
		label: "4",
		title: "Tan Sioe Kiem"
	});
	marker4.addListener("click", function() {
		infowindow4.open(map, marker4);

		var pano = null;
		google.maps.event.addListener(infowindow4, "domready", function() {
			if (pano != null) {
				pano.unbind("position");
				pano.setVisible(false);
			}

			pano = new google.maps.StreetViewPanorama(document.getElementById("streetview4"), {
				navigationControl: true
			});
			pano.setPov({
				heading: 187,
				pitch: 0
			});
			pano.bindTo("position", marker4);
			pano.setVisible(true);
		});

		google.maps.event.addListener(infowindow4, "closeclick", function() {
			pano.unbind("position");
			pano.setVisible(false);
			pano = null;
		});
	});

	var infowindow5 = new google.maps.InfoWindow({
		content: "Soemadi<div id='streetview5' style='margin-top: 10px; width: 400px; height: 250px;'></div>"
	});

	var marker5 = new google.maps.Marker({
		position: {lat: -7.279128, lng: 112.6504788},
		map: map,
		label: "5",
		title: "Soemadi"
	});
	marker5.addListener("click", function() {
		infowindow5.open(map, marker5);

		var pano = null;
		google.maps.event.addListener(infowindow5, "domready", function() {
			if (pano != null) {
				pano.unbind("position");
				pano.setVisible(false);
			}

			pano = new google.maps.StreetViewPanorama(document.getElementById("streetview5"), {
				navigationControl: true
			});
			pano.setPov({
				heading: 187,
				pitch: 0
			});
			pano.bindTo("position", marker5);
			pano.setVisible(true);
		});

		google.maps.event.addListener(infowindow5, "closeclick", function() {
			pano.unbind("position");
			pano.setVisible(false);
			pano = null;
		});
	});
}