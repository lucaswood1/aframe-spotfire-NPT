// vrspotfireoculus_js
var obj = JSON.parse($('#msDeploy').text())
var xMax = 2133 //parseFloat($('#xMax').text())
var yMax = 10592 //parseFloat($('#yMax').text())
var zMax = 10664 //parseFloat($('#zMax').text())
var xMin = -161 //parseFloat($('#xMax').text())
var yMin = -56 //parseFloat($('#yMax').text())
var zMin = 107 //parseFloat($('#zMax').text())


$('a-sphere').remove()

obj.forEach(function(point) {
	var x = (parseFloat(point.x)-xMin)/(xMax-xMin)
	var y = (parseFloat(point.y)-yMin)/(yMax-yMin)*10
	var z = (parseFloat(point.z)-zMin)/(zMax-zMin)*-10
	var color = ""
	if (parseFloat(point.NPTHours) > 3) {
		color = "#e04736"
	} else {
		color = "#32a852"
	}
	var output = '<a-sphere position="'+x+' '+y+' '+z+'" radius=".05" color="'+color+'"></a-sphere>'
	$('a-scene').append(output)
})

function loadScript( url, callback ) {
  var script = document.createElement( "script" )
  script.type = "text/javascript";
  if(script.readyState) {  // only required for IE <9
    script.onreadystatechange = function() {
      if ( script.readyState === "loaded" || script.readyState === "complete" ) {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {  //Others
    script.onload = function() {
      callback();
    };
  }

  script.src = url;
  document.getElementsByTagName( "head" )[0].appendChild( script );
}


// call the function...
loadScript('https://aframe.io/releases/0.9.2/aframe.min.js', function() {
  console.log('script ready!'); 
});