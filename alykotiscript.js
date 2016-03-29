  $(function() {
    $( "#volume_slider" ).slider({
		min: 0,
		max: 100,
		range:"min",
		slide: function( event, ui ) {
        $( "#volume" ).val( ui.value + " %" );
      }
    });
    $( "#temp_slider" ).slider({
		min: 15,
		max: 30,
		range:"min",
		value:21,
		slide: function( event, ui ) {
        $( "#temperature" ).val( ui.value + " \u00B0C" );
      }
    });
    $( "#lights" ).buttonset();
    $( "#stereos" ).buttonset();
    $ ( "#volume" ).val( $( "#volume_slider" ).slider( "value" ) + " %" );
   	$ ( "#temperature" ).val( $( "#temp_slider" ).slider( "value" ) + " \u00B0C");
  });