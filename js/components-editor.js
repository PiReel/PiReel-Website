// JavaScript Document
( function(){
// ***** [editor] *****
class editor{
	constructor(opts){
		this.id = opts.id;
		this.node = opts.node;
		this.sheet = [];
	}
	getKeys(){}
	getDefs(){}
}

// ***** [json-editor] *****
var jEditor =  xtag.register( "json-editor", 
    {
    extends: "form",
    mixins: ["utilities", "textUtils"],
    lifecycle:
      {
      created: function()
        {
		var el = this;

        console.log("Creating JSON-EDITOR api...");
		  jx.jEditor.length += 1;

		if(jx.jEditor[this.id]){ 
			console.log("JSON-EDITOR api found for " + this.id); 
		  }
		else{ 
		  jx.jEditor[this.id] = new editor( { 
			id: el.id, 
			node: el,
			sheet: []
		  } ) 
		}

        }
      }
  } );

    // ***** e-ln *****
var eLine = xtag.register("e-ln", 
	{
	mixins: ["utilities"],
	methods: 
	  {
	  lineKeyDownDetect: function(ev, _key){ 
		switch(_key){
		  case "Tab":
			ev.preventDefault();
		  return;

		  case "Return":
				  // Execute macro up until this point
		  return;
				
		  case "Enter":
				  // Execute macro up until this point
		  return;

		  default:
		  return;
		  } 
	    },
	  lineKeyUpDetect: function(ev, _key){
		switch(_key){
			case "Tab":
			return;

			case "Return":
			return;
				
			case "Enter":
			return;

			default:
			return;
		  }
	    }
	  },
	lifecycle:
	  {
	  created: function(){
		var _parent = this.parentNode || this.parentNode.parentNode, _editor = jx.jEditor[_parent.id], _index = jx.jEditor.length;
		console.log("%c Found " + this.is + " for #" + _parent.id + "...updating line-index...", "color: pink;");

	    if(this.is === "e-ln"){
		  console.log("%c Setting the line-index attribute and updating the " + _parent.id + " jx.jEditor object...", "color: rgb(200,50,200);");
		  this.setAttribute("line-index", _index );
		  console.log("%c Pushing a line object to the " + _parent.id + " jx.jEditor object...", "color: rgb(200,50,200);")
		  _editor.sheet.push({}); 

		  };

	    }
	  },
	accessors:
	  {
	  lineIndex: 
	    {
		get: function(){
			return Number(this.getAttribute("line-index"));
		  }
		},
	  lineKey: 
		{
		get: function(){
		  return this.getAttribute("line-key");
	      },
		set: function(val){
		  this.setAttribute("line-key", val);
		  }
		}
	  },
	events:
	  {
	  keydown: function(ev){
	    this.lineKeyDownDetect( ev, ev.key );
	    },
	  keyup: function(ev){
		this.lineKeyUpDetect( ev, ev.key );
	    }
	  }
} );
	
// ***** e-key *****
var eKey = xtag.register("e-key", 
    {
    prototype: eLine.prototype,
	extends: "input",
    mixins: [ "utilities", "textUtils" ],
	methods: 
	  {
	  getSnippets: function(_key){
		// gets saved snippets for the lines key value.
	    }
	  },
    lifecycle:
      {
      created: function(){
		console.log("%c Checking the line key value of line " + this.parentNode.id, "color: rgb(255,155,255);");
		if(!this.value || this.value === ""){
		  console.log("%c No key value found.", "color: rgb(255,155,255);");
		  }
		else{
		  console.log("%c Setting key value to " + this.value, "color: rgb(255,155,255);");
		  jx.jEditor[this.parentNode.parentNode.id][jx.jEditor[this.parentNode.parentNode.id].length-1][this.value] = null;
		  }
	    }
      },
    events: 
      {
	  keydown: function(ev){
		// not complete...tie to function for special key characters for user shortcut's
	    },
	  keyup: function(ev){
		
	    }
      }
    } );

// ***** [e-txt] *****
var eText = xtag.register("e-txt", 
    {
    prototype: eLine.prototype,
    extends: "input",
    mixins: ["utilities","textUtils"],
	methods: 
	  {
	  
	  },
    lifecycle:
       {
       created: function(){
		console.log("%c Checking the line key for a definition value.", "color: rgb(255,75,255);");
		if(!this.value || this.value === ""){
		  console.log("%c No key definition value found.", "color: rgb(255,75,255);");
		  }
		else{
		  console.log("%c Setting key defintion value to " + this.value, "color: rgb(255,75,255);");
		  jx.jEditor[this.parentNode.parentNode.id][jx.jEditor[this.parentNode.parentNode.id].length-1][this.value] = null;
		  }
	     }
       },
	events:
	  {
	  keyup: function(ev){
		
	    }
	  }
    } );

} )();