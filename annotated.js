function(
  a							//placeholder for div element
  , b							//placeholder for zoom
  , c							//placeholder for latitude
  , d							//placeholder for longitude
) {
  with (google.maps) {
    var map = new Map(a
		, {	zoom:b				//zoom 
      			,center: new LatLng(c,d)	//centered on c,d
			,overviewMapControl:!0		//overview
      			,mapTypeId: MapTypeId.TERRAIN	//terrain is beautiful
    		  }
		)
  }
}
