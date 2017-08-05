/* ********** [ JavaScript Document ] ********** */
( function(){
// ***** [toggle-btn] *****
var toggleButton = xtag.register("toggle-btn", 
  {
  extends: "button",
  mixins: ["utilities"],
  accessors:
	{
	activeClass: 
	  {
	  set: function(){
		
	    },
	  get: function(){
		return this.getAttribute("active-class");
	    }
	  }
	},
  events:
	{
	click: function(event)
	  {
	  var tar = event.target.getAttribute("target")._getDOM();
		if(tar.className === event.target.getAttribute("active-class")){
			tar.setAttribute("class", event.target.getAttribute("hidden-class") );
		}
		else{
			tar.setAttribute("class", event.target.getAttribute("active-class") );
		}
	  }
	}
  } );

var classButton = xtag.register("class-btn", {
	// for button sets that share the same menu frame
} );
 
} )();