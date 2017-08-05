( function(){
/* *****[Globals] ***** */
var event = window.event;

// *************** [Start of Xtag Mixins] ***************
// ********** [textUtils mixin] **********
var mixins_Text = xtag.mixins.textUtils = 
  {
  accessors:
    {
    dataLib: 
      {
      get: function()
        {
        if(this.hasAttribute("data-lib") && /url\(/.test(this.getAttribute("data-lib")) !== true ){ 
          xtag.queryChildren(document.body,"#lib-JSON");
          return jx.fire["lib-JSON"] || {};
          }
        else{ 
          return jx.fire[this.id];
          }
        }
      },
    dataList:
      {
      set: function(val){
          val = val;
        },
      get: function(){
          
        }
      }
    }
  };

// ** ********** [Psuedos] ********** 
  // ** ********** [keys] **********
var _keysPsuedo = xtag.pseudos.keys = 
  {
  onAdd: function()
    {
    
    },
  onRemove: function()
      {
      
      },
  action: function(event)
      {
      if(event.value === "true")
        {
        
        }
      else if(event.value === "false")
        {
        
        }
      else
        {
        
        }
      }
  };

// ********** Start of xtag components **********
// ********** [fire-base] ********** 
var fBase = xtag.register( "fire-base", 
  {
  mixins: ["utilities"],
  lifecycle:
    {
    created: function()
      {
      var jsn = null;
        console.log("%c Attempting to retrieve JSON from 'fire-base' content.", "color: skyblue; text-decoration: underline;");
        try{
        var stg = this.innerHTML.replace(/\s+/g, " ");
          jsn = JSON.parse(stg);
          this.innerHTML = stg;
          console.log('%c JSON parsed and added to the jx.fire object.', "color: skyblue;");
          console.log(jx.fire);
          jx.fire[this.id] = jsn;
		  console.log("%c JSON being pushed to jx.json.", "color: skyblue;");
		  jx.json.push(jsn);
          console.log(jx.json);
      }
      catch(e){
        console.log('%c ' + e,"color: skyblue;");
      }
      jx.basing = jsn;
      return jsn;
      },
    inserted: function()
      {
      
      },
    removed: function()
      {
      
      },
    attributeChanged: function()
      {
      
      }
    },
  accessors:
    {
    // [data-get] value: json dot references. *Must start with a cash sign.
    dataList:
      {
      attribute: 
        {
        validate: function(val){
          return val;
          }
        },
      set: function(val)
        {
        return val;
        },
      get: function()
        {
        return this.getAttribute("data-list");    
        }
          
      }
    }
  } );

// ********** [Left off at the pallete api] **********
var global_disc = xtag.register( "global-disc", 
  {
  extends: "form",
  mixins: ["utilities"],
  // ** Built in API
  methods:
    {
    pallete: function(options){
      // ** Check for font menu options
      if(options.fonts)
        {
        for( var fI in options.fonts)
          {
          switch(fI)
            {
            case "menu":
              options.fonts[fI] === true ?
                ("") :
                ("");
            return;
            case "activated":
            return;
            case "deactivated":
            return;
            case "label":
            return;
            case "style":
            return;
            default:
            return;
            }
          }
        }

      // ** Check for background menu options
      if(options.background)
        {
      
        }
      if(options.remove)
        {
      
        }
      if(options.add)
        {
      
        }
      }
    },
  content: function(){/*
    <fieldset style='position:relative; border-radius:100%; width:100px; height:100px; background-color:rgba(255,255,255,.5);' is="global-pallete">
      <input type="color" style="border-radius:100%; width:30px; height:30px; padding:5px;" is="global-fcolor">
      <input type="number" style="border-radius:15%; width:30px; height:auto;" is="global-fsize">
      <input type="color" style="border-radius:100%; width:30px; height:30px; padding:5px;" is="global-bgcolor">
      <div is="drop-area"></div>
      <div is="drop-area"></div>
    </fieldset>
   */},

  // ** Lifecycle
  lifecycle:
    {
    created: function()
      {
      this.setAttribute("dragging","false");
      this.setAttribute("style", "position:fixed; top:0%; left:82.5%; border-radius:0% 100% 100% 100%; width:125px; height:125px; padding:10px; background-color:rgba(255,125,25,.75);");
      }
    },

  // ** Events
  events:
    {
    // ** mouse down
    mousedown: function(event){

      // ** accepted values of the dragging attr are true or false.
      // ** the default behavior for the draggable elements direct children
      // ** when they are clicked and dragged is to drag the parent window.
      // ** To prevent this behavior set dragging="prevent" [the final behavior is in testing]
      var dragStart = function(el){
          switch(el.getAttribute("dragging"))
            {
              case "true":
              return "false";
              case "false":
              return "true";
              case "prevent":
              return "prevent";
              default:
              return "true"
            }
	  };
       // ** check for dragging attr in the event target and its parent.
      event.target.hasAttribute("dragging") === true ? (
        event.target.setAttribute("dragging", dragStart(event.target)),
        jx.drag.target = event.target
        ) : null;
      event.target.parentNode.hasAttribute("dragging") === true ? ( 
        event.target.parentNode.setAttribute("dragging", dragStart(event.target.parentNode)),
        jx.drag.target = event.target.parentNode ) : null;
      },

    // ** mouse down
    mousemove: function(event){
      if(jx.drag.target !== null){
        jx.drag.top = (event.clientY-15);
        jx.drag.left = (event.clientX-15);
        if(jx.drag.target.getAttribute("dragging") === "true"){
          jx.drag.target.style.left = jx.drag.left+"px";
          jx.drag.target.style.top = jx.drag.top+"px";
          }
        else if(jx.drag.target.getAttribute("dragging")==="prevent" && event.target.outerHTML === jx.draggint.target.outerHTML){
          jx.drag.target.style.left = jx.drag.left+"px";
          jx.drag.target.style.top = jx.drag.top+"px";
          }
        }
      },
    // ** mouse up
    mouseup: function(event){console.log(event);
      jx.drag.top = (event.clientY-15); console.log(jx.drag.top);
      jx.drag.left = (event.clientX-15);
      jx.drag.target.setAttribute("dragging","false");
      jx.drag.target.style.top = jx.drag.top+"px";
      jx.drag.target.style.left = jx.drag.left+"px";
      jx.drag.target = null;
      }
    }
  } );

/* ********** [j-select] ********** */
var jSelect = xtag.register("j-select", 
  {
  content: "<j-toggle>-|-</j-toggle>",

/* [mixins] */
  mixins: ["utilities"],

/* [lifecycle] */
  lifecycle:
    {
    inserted: function()
      {
      var el = this;
      this.jReady( function(obj)
        {
        for(var i=0; i<obj.getData.length; i++)
          {
          var jOpt = document.createElement("j-option");
            el.getElementsByTagName("j-option")[0].innerHTML = "Loading blog entry...";
            jOpt.innerHTML = obj.getData[i].title;
            jOpt.setAttribute("selected","false");
            jOpt.setAttribute("title","Click to toggle selected status.");
            el.appendChild(jOpt);
            el.getElementsByTagName("j-option")[0].innerHTML = "Finished blog entry: " + (i+1);
          }
          el.getElementsByTagName("j-option")[0].innerHTML = "None selected";
        } );
      }
    },

/* [events] */
  events:
    {
    "tap:delegate(j-toggle)": function()
      {
      this.parentNode.visibility === "hidden" ? 
        ( this.parentNode.setAttribute("visibility", "visible") )
        :
         ( this.parentNode.setAttribute("visibility", "hidden") )
      }
    }
  } );

  /* ********** [j-option] ********** */
var jOption = xtag.register("j-option", 
  {
  mixins: ["utilities"],
  events:
    {
    tap: function()
      {
      var _rt = jx.fire[this.parentNode.id], _fire = jx.fire[this.parentNode.id].getData, queTray = null, _obj = null;

      for(var i = 0; i<_fire.length; i++)
        {
        _searchFunc(this.innerHTML, _fire[i].title) === null ? "" :
        (  this.selected === "false" ? this.setAttribute("selected","true") : this.setAttribute("selected","false"),
           queTray = document.createElement("j-data"), _obj = _fire[i] );
        }

      if(queTray !== null)
        {
        _rt.queueTray.appendChild(queTray);
        }
      else
        {
        
        }

      }
    },
    accessors:
      {
      selected: 
        {
        attribute:
          {
          validate: function(val){ return val; }
          },
        set: function(val)
          {
          val === "true" ? 
            ( "" ) : 
            ( "" );
          return val;
          },
        get: function()
          {
          return this.getAttribute("selected");
          }
        }
      }
  } );

    // ***** e-data *****
var eData = xtag.register("e-data", 
    {
    extends: "datalist",
    mixins: ["utilities", "textUtils"],
    lifecycle:
      {
      // ***** inserts option nodes into the datalist element *****
      inserted: function(){
	  console.log("Populating the data-list with data from jx.fire['lib-JSON']." );
      var _lib = jx.fire["lib-JSON"];
        for(var i=0; i<_lib.length; i++){
        var _opt = document.createElement("option");

          // ***** option value is equal to the name of the package. *****
          _opt.value = _lib[i].name;
          this.appendChild(_opt);
          }
		console.log(jx.fire['lib-JSON']);
		console.log("Completed loading: #" + this.id)
        }
      }
    } );


// ***** [toggle-btn] *****
var hideButton = xtag.register("hide-parent", 
  {
  extends: "button",
  mixins: ["utilities"],
  events:
	{
	tap: function(event)
	  {
	  var parent = event.target.parentNode;

	  	parent.setAttribute("class", "memory");
	  }
	}

  } );

// Filter the window [objects]
window.jx = jx;
window.pireel = pireel;

} )();