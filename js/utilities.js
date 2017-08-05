// JavaScript Document
( function(){
// *************** [Utilities Mixin] ***************
var mixins_Util = xtag.mixins.utilities = 
  {
  lifecycle:
    {
    created: function()
      {
      var _xtag = xtag.tags;

      	console.log("%c Creating the " + this.is + " element ...", "color: rgb(255,155,100); text-decoration: underline;");

      var stg = this.id ? this.id : this.is + jx.fire.length;

        console.log("%c Found, '" + this.is + "#" + this.id + "." + this.className, "color: rgb(255,155,100);");
        console.log("%c Assigning and updating fire data...", "color: rgb(255,155,100);");

		!jx.fire[stg] ? ( jx.fire[stg] = { node: this }, jx.fire.length += 1 ) : null;

        this.setAttribute("id", stg);

        console.log(jx.fire);

		

      }
    },
  methods:
    {
    // ********** [get_key_refs] **********
    get_key_refs: function(stg)
      {
      var key= null, dom = this,

		  m_array = stg.match(/[\w+\-+]+(?=[\.+\;\(\[\{\"\,\~+\-+])/g);

      if( stg[0] === "$" )
        {
        m_array.forEach( function(c,i,a,m_array)
          {

          if( key === null )
            {
			key = jx.fire[dom.id].json[c];
			}
          else
            {
			key = key[c];
			}

          } );
        return key;
        }
	  else if( stg[0] === "" )
	  	{
		
	  	}
      else
        {
        return stg[0] + ": Token not recgonized.";
        }
      },
    // ********** [get_dom_ref] **********  
    get_dom_ref: function(stg)
      {
      var key= null,
          m_array = stg.match(/[\w+\-+]+(?=[\.+\;\(\[\{\"\,\~+\-+])/g);
      m_array.forEach( function(c,i,a,m_array){ 
		  if(key===null){ key = jx.basing[c]; }
		  else{ key = key[c]; } } );
      return key;
      },
    // ********** [get_def_ref] ********** 
    get_def_refs: function(stg)
      {
      switch(stg)
        {
        case "": return "The definition declaration can not be empty.";
        default:
          
        return "Defintion: '" + stg + "'was not not found.";
        }
      },
    // ** [overFlow] 
    overFlow: function(options)
      {
      options.target.style.overflow = options.visibility;
      return options.visibility;
      },
	// ********** [type] **********
	type: function(url_string)
	  {
	  var stg = "";
	  for(var i=url_string.length-1; i >= 0; i--){
		if(url_string[i] === "."){
		  return stg;
		  }
		else if(/[a-z]/i.test(url_string[i])){
		  stg = url_string[i] + stg;
		  }
		}
	  }
    },
  accessors: 
    {
    visibility:
      {
      attribute:
        {
        validate: function(val)
          {
          return val;
          }
        },
      set: function(val)
        {
        this.overFlow( { visibility: val, target: this } );
        return;
        },
      get: function()
        {
        return this.getAttribute("visibility");
        }
      },

	// ** lots of varieties in attribute namespaces but alot of the attributes getters do the 
		// same thing but none of them share a function.
    dataQueue: 
      {
      attribute:
        {
        validate: function(val){ return val; }
        },
      set: function(val)
        {
        jx.fire[this.id].queueTray = val._getDOM();

        }
      },

 	// ** Interesting but what am I trying to accomplish.
    dataViewer: 
      {
      attribute:
        {
        validate: function(val){ return val; }
        },
      set: function(val)
        {
        jx.fire[this.id].viewer = val._getDOM();
        }
      },

    // ** data-get
		// ** good candidate for testing the syntax class constructor events
    dataGet:
      {
      attribute:
        {
        validate: function(val){
          return val;
          }
        },
      get: function()
        {
        return jx.fire[el.id].getData;;
        },
      set: function(val)
        {
        var el = this;

            jx.fire[this.id].getData = this.get_key_refs(val);

        }
    },
 
    /* [dataTray] */
    dataTray:
      {
      get: function()
        {
        if(this.hasAttribute("data-tray") === true){ return this.getAttribute("data-tray")._getDOM(); }
        else{ console.log("Tried returning data-tray but got a null response"); return null; }
        },
      set: function(val)
        {
        if(this.hasAttribute("data-tray") === true){ return val; }
        else{ return false; }
        }
      },

    // ********** [dataItem] **********
		// ********** Needs review for optimization and/or semantics. **********
    dataItem:
      {
      get: function()
        { 
        if(this.hasAttribute("data-item") === true){ return this.getAttribute("data-item")._getDOM(); }
        else{ return false; }
        }
      },

    // ********** [dataHidden] **********
		// ********** Needs review for optimization and/or semantics. **********
    dataHidden: 
      {
      get: function()
        {
		if(this.hasAttribute("data-hidden")){ return this.getAttribute("data-hidden"); }
		else{ return null; }
        }
      },

    // ********** [dataSelected] **********
		// **********  Needs review for optimization and/or semantics. **********
    dataSelected: 
      {
      attribute:
        {
        validate: function(val)
          { 
          return val;
          }
        },
      get: function()
        {
        if(this.hasAttribute("data-selected")===true){
          return this.getAttribute("data-selected");
          }else{ return null; }
        }
      },
 	
    dataActive: 
      {
	  // ** gets the data-active elements value ( true || false ) if it's not set it will set a data-active attribute and return false;
      get: function()
        {
        if(this.hasAttribute("data-active") === true) { return this.getAttribute("data-active"); }
        else { this.setAttribute("data-active","false"); return "false"; }
        }
      },

    // ********** [dataIcos] **********
		// ********** Param is an element node name **********
    dataIcos:
      {
      get: function()
        { return this.getElementsByTagName( this.getAttribute("data-icos") ); }
      },
	// **********[is] **********
	is: 
	  {
	  get: function(){
		return this.getAttribute("is") || this.nodeName.toLowerCase();
	    }
	  }
    }
  };

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
} )();