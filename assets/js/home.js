var map = null;
var citralandLatLng = {lat: -7.2899950, lng: 112.6371532};
var points = [];

$(function() {
	$(".btn-citraland").on("click", function() {
		if (map != null) {
			map.panTo(citralandLatLng);
			map.setZoom(14);
		}
	});

	$(document).on("keyup", function(e) {
		switch (e.keyCode) {
			case 27: // ESC
				closeAllInfowindow();
				break;
		}
	});
});

function initMap() {
	map = new google.maps.Map(document.getElementById("map"), {
		center: citralandLatLng,
		zoom: 14
	});

	var ajax = ajaxCall("home/get-data", null, function(json) {
		var result = jQuery.parseJSON(json);
		var iLength = result.length;
		var point, id;
		for (var i = 0; i < iLength; i++) {
			point = result[i];
			id = "streetview" + point.id;

			var infowindow = new google.maps.InfoWindow({
				id: point.id,
				content: point.label + "<div id='" + id + "' style='margin-top: 10px; width: 400px; height: 250px;'></div>",
				isOpen: false
			});

			var marker = new google.maps.Marker({
				position: {lat: point.lat, lng: point.lng},
				map: map,
				label: point.id + "",
				title: point.label + ""
			});
			
			point["infowindow"] = infowindow;
			point["marker"] = marker;
			point["pano"] = null;
			points[point.id + ""] = point;
			
			marker.addListener("click", function() {
				closeAllInfowindow();

				var point = points[this.label];
				var infowindow = point.infowindow;
				infowindow.open(map, point.marker);
				infowindow.isOpen = true;
				
				google.maps.event.addListener(infowindow, "domready", function() {
					var point = points[this.id + ""];
					var pano = point.pano;
					if (pano == null) {
						pano = new google.maps.StreetViewPanorama(document.getElementById("streetview" + this.id), {
							navigationControl: true
						});
						pano.setPov({
							heading: point.heading,
							pitch: 0
						});
						pano.bindTo("position", point.marker);
						pano.setVisible(true);
						point.pano = pano;	
					} else {
						pano.setPov({
							heading: point.heading,
							pitch: 0
						});
					}
				});
			});
		}
	});
}

function closeAllInfowindow() {
	points.forEach(function(element) {
		if (element.infowindow.isOpen) {
			element.infowindow.close();
			element.infowindow.isOpen = false;
		}
	});
}