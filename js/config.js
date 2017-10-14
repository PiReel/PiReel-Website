( function() {
/* 
============================================================================================================================= 
	== [CONFIG.JS WAS MADE TO HELP OPEN SOURCE PROJECTS DEVELOP THE FRONT END THAT REQUIRE YOU TO USE A STRICT SCHEMA.] 
	== [FOR MORE INFORMATION SEE PI REELS README.MD FILE OR OUR GITPAGE @TBD.]
============================================================================================================================= 
*/

// ***** IS: PI CONFIGURATION
  // ** FOR: WINDOW
  // ** DOES:
    // * CHECK FOR CUSTOM-ELEMENTS.MIN.JS
	// * CHECK FOR XTAG
	// * CREATE THE PI GLOBAL
	// * UPDATE THE XTAG BUILD OBJECT
	// * UPDATE THE XTAGELEMENT DEFINITION
	// * PROMPT FOR USER INPUT
	// * RETRIEVE SERVER SIDE RESOURCES USING XHR

/* ***** IS: GLOBAL PI;
  ** FOR: PI & XTAG;
  ** DOES: 
	* IMPLEMENTS THE CLEAR() METHOD TO WIPE THE INNERHTML OF ELEMENTS
***** */
var pi = {
	mixin: (base) => class extends base {
		// ** SOLUTION FOR CLEARING INNERHTML CONTENT OF NODES FOR XTAG**
		set clear(target){
			
		}
	},
	pkgs: { },
	/* ***** @IMPORT typeOf(obj) FROM: XTAG V1
	  ** This is an enhanced typeof check for all types of objects. 
	  ** Where typeof would normaly return 'object' for many common DOM objects (like NodeLists and HTMLCollections).
	  ** For example: typeOf(document.children) will correctly return 'htmlcollection'

	***** @IMPORT regexParseExt FROM: XTAG V1 RENAME TO: keyParser
	  ** Extension parser from x-tag, used for the property extension and psuedo names.
	  ** Enhanced to detect hyphenated names and associate it with meta data or constructor/class.
	***** */
	utils: {
		typeCache: {},
		keyParser: /([\w+\-]+)|(::|:)(\w+)(?:\((.+?(?=\)))\))?/g,
		typeParser: /\s([a-zA-Z]+)/,
		typeString: function(obj = pi.utils.typeCache){
			return obj.toString;
		},
		typeOf: function(obj) {
			var typeCache = pi.utils.typeCache,
				type = pi.utils.typeString().call(obj);
			return typeCache[type] || (typeCache[type] = type.match(pi.utils.typeParser)[1].toLowerCase());
		}
	},
	createPackage: function(name, options){
		
	},
	onPackageError: function(name, pkg, _func){
		
	},
	onPackageLoad: function(name, pkgs, _func){
		var _r = null;
		var _interval = window.setInterval(function(){
			// ***** CHECK PKGS
			if(pkgs){
				if(pkgs.length) {
					// LOOP THROUGH PCKGS ARRAY
					for(var i=0; i < pkgs.length; i++){
						// ***** COMPARE NAME AND PCKGS[I][NAME]
						if(pkgs[i].name === name){
							if(_func) {
								_func(name, pkgs[i], pkgs);
							}
							// ***** CLEAR INTERVAL
							window.clearInterval(_interval);
							return _r = pkgs[i];
						}
					}
				}
				else if(pkgs[name]){
					if(_func) {
						_func(name, pkgs[name], pkgs);
					}
					// ***** CLEAR INTERVAL
					window.clearInterval(_interval);
					return _r = pkgs[name];
				}
			}
		}, 125 );

		return _r;
	}
};

//**/ SCOPED GLOBAL VARIABLES START /**//
var scheme = {
	name: "pi-schema",
	mixins: ["stylesheets", "library", "extensions"],
	sheet: {
		"container::elem:page($;)": document.getElementsByTagName("x-page")[0] || document.createElement("x-page"),
		"extension::elem:page($child;)": document.getElementsByTagName("pi-extension")[0] || document.createElement("pi-extension"),
		"popup::elem:page($float;)": document.getElementsByTagName("pi-prompt")[0] || document.createElement("pi-prompt"),
		"popuplists::elem:page($extension.child;)": document.getElementsByTagName("pi-list") || document.createElement("pi-list"),
		"peekboxs::elem:page(2)": {
			length: 2,
			"$0(firstChild)": document.getElementsByTagName("x-peekbox")[0],
			"$1(lastChild)": document.getElementsByTagName("x-peekbox")[1]
		}
	},
	stylesheets: {
		
	},
	/* ***** IS: BUILT IN RESOURCE COLLECTION
	  ** TITLE: LIBRARY
	  ** FOR: XTAG
	  ** DOES: 
	    * STORE A COLLECTION OF XTAG COMPONENT/EXTENSION RESOURCES
		* STORE A COLLECTION OF PHYSICSJS WORLDS
		* STORE A COLLECTION OF CYTOSCAPE GRAPHS
	***** */
	library: {
		xtag: {
			components: [],
			extensions: []
		},
		// NOT SURE IF THEY ARE USING BOWER
		physicsjs: {
			worlds: []
		},
		// NOT SURE IF THEY ARE USING BOWER
		cytoscape: {
			graphs: []
		}
	},
	extensions: {
		pkgs: []
	},
	items: {
		extensions: function(item, options){
		
		},
		psuedos: function(item, options){
			
		},
		hasScript: function(item, options){
			var _s = document.scripts, i = 0, r = false;

			// FIND THE REQUESTED SCRIPT ITEM
			while(_s[i]){
				_s[i].src === item ? r=_s[i] : false;
				i++;
			};

			// EXECUTE OPTIONS IF AVAILABLE
			if( pi.utils.typeOf(options) ){
				
			}
			else{
				
			};

			return r;
		}
	}
};
//**/ GLOBAL VARIABLES END /**//

	/* ***** CUSTOM-ELEMENTS CHECK ***** */
	if(scheme.items.hasScript("src/custom-elements.min.js") === false){
		let _scc = document.createElement("script");
			_scc.src = "src/custom-elements.min.js";
		document.head.appendChild(_scc);
	}
	/* ***** XTAG CHECK ***** */
	if(scheme.items.hasScript("src/core.js") === false){
		let _scx = document.createElement("script");
			_scx.src = "src/core.js";
		document.head.appendChild(_scx);
	}

	/* ***** IS: EXTENSION;
	  *** TITLE: CONFIG
	  ** FOR: XTAG;
	  ** DOES: 
	    * PROMPT USER FOR INPUT;
	    * GATHER RESOURCES FROM SERVER;
	    * GATHER RESOURCES FROM USER;
		* UPDATE XTAG BUILD OBJECT
	*/
	const config = {
		// IS: EXTENSION NAME
		name: "config",
		meta: {
			title: null,
			version: null,
			description: null
		},
		mixin: (base) => class extends base {
			constructor(options){
				
			}
		},
		update: function(build, options) {
			// SAY THANKS
			console.log("%c THANKS TO ALL THE CONTRIBUTORS OF PI REEL.", "color: rgb(145,255,145);");

			// CHECK SCHEME API
			scheme.cloak.forEach( function(current, item){ 
				 
			} );

			// PUSH HTML SCHEMA IF PAGE CLOAK IS TRUE
			if( scheme.pagecloak === false ){ pi.sheet = scheme.sheet; }
			
			console.log(pi);
		}
	};
	const _pi = new config.update("default", {
	
	} );
} )();