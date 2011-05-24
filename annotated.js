function(
  a							//placeholder for div element
) {
  with (google.maps) {
    var map = new Map(a
		, {	zoom:1				//zoom 1
      			,center: new LatLng(0,0)	//centered 0,0
			,overviewMapControl:!0		//overview
      			,mapTypeId: MapTypeId.TERRAIN	//terrain is beautiful
    		  }
		)
  }
}
