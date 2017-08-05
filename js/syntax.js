// *************** [syntax] ***************
( function(){
class syntax {
    constructor(opts){
		this.target = opts.target._getDOM,
		this.tokens = {};
		this.onToken = function(){ opts.onToken };
		this.onCommand = function(){ opts.onCommand };
		this.onCommandEnd = opts.onCommandEnd;
    }

	// ** ********** [returns an array of command lines] **********
	sortToLines(stg){
        var val = "", ret = [];
        for(var i=0; i < stg.length; i++){
          if(stg[i] === ";"){
            ret.push(val); val = "";
            }
          else{
            val+=stg[i];
            }
          }
        return ret;
    }

	seperators(stg){
		var rators = stg.match(/[\w+][\.\,\;]/g); return rators;
	}

	lnEnds(stg){
		var rators = stg.match(/\w*\-*\w*\;/g); return rators;
	}

	jxLock(syntax_obj,syntax_opts){
		syntax_obj.tokens[syntax_opts] =  
			{
			id: syntax_opts.id,
			type: syntax_opts.type,
			title: syntax_opts.title,
			description: syntax_opts.type
			}
	}
}

// ********** [pi reel syntax] **********
var language = new syntax( {
	target: "#text-editor",
	onToken: function(){
		
	},
	onCommand: function(){
		
	},
	onCommandEnd: function(){
		
	}
} );

// ********** Begining of definition creation. **********
// ********** [j-style] **********
var cssAtSyntax = language.jxLock(language,
  {
  id: "css_token",
  type: "component/language/text/css",
  title: "CSS Token",
  description: "A searchable style data format: animate and layout your projects.",
  token: "@",
  execute: function(){
	
  }
  } );

window.language = language;

} )();

