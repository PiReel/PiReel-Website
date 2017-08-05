// JavaScript Document
/* [scroll listener] */
window.document.addEventListener("scroll", function()
  {
  // ** *****[header up @100] 
  if(document.body.scrollTop > 100)
    { 
    var _q = xtag.query(this,"j-header")[0];
      /curtainsUp\-1/.test(_q.className) === true ? "" : _q.className = "tray curtainsUp-1";
// Needs be attached to the main content
    // var _z = xtag.query(this,"json-canvas")[0];
    //  /curtainsDown\-1/.test(_z.className) !== true ? "" : (_z.className = "_"); 

    var _p = xtag.query(this,"#header-toggle-btn")[0];
      /puddleShrink\-1/.test(_p.className) !== true ? "" : (_p.className = "puddleGrow-1");
    }
  /* [header snaps back @0] */
  else if(document.body.scrollTop === 0)
    {
    var _q = xtag.query(this,"j-header")[0];
      /curtainsUp\-1/.test(_q.className) !== true ? "" : _q.className = "tray";

    var _p = xtag.query(this,"#header-toggle-btn")[0];
      /puddleGrow\-1/.test(_p.className) !== true ? "" : (_p.className = "puddleShrink-1");

//var _z = xtag.query(this,"json-canvas")[0];
//      /curtainsDown\-1/.test(_z.className) !== true ? _z.className = "curtainsDown-1" : ("");
	  
      }
  } );

/* [load listener] */
window.addEventListener("load", function()
  {
  if(document.body.scrollTop > 50)
    { 
    var _q = xtag.query(this.document,"j-header")[0];
      /curtainsUp\-1/.test(_q.className) === true ? "" : _q.className.replace("curtainsUp-1","curtainsDown-1");
    }
  } );

/* [mouseup listener] */
window.document.addEventListener("mouseup", function(event){
    /* Global drag listener */
    jx.drag.target !== null ? ( 
      jx.drag.target.style.top = (event.clientY-30)+"px",
      jx.drag.target.style.left = (event.clientX-30)+"px",
      jx.drag.target = null ) : ("");
} );