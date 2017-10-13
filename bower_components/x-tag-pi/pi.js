/* ***** CUSTOM ELEMENT XTAG COMPENENTS
  ** TAG LIBRARY NAME: PI-[NAME]
  ** DEPENDENCIES: PHYSICSJS, CYTOSCAPE
 */
( function() {
	// JASMINE
	const xjasmine = {
		name: "xjasmine",
		mixin: ( base ) => class extends base {
			set 'isXTAG::attr'(val) {
				describe("X-Tag's setup should", function() {
					it("import its globals into the environment", function() {
						expect(xtag).toBeDefined();
						expect(XTagElement).toBeDefined();
					} ); 
				} );
			}
			set 'isExtension::attr'(val) {
				describe("XTagElement.extension() should", function(){

					it("bring in extension attributes.", function(){ 
						
					} );

					it("bring in extension psuedos.", function(){
						
					} );

					it("bring in extension templates.", function(){
						
					} );
				} );
			}
		}
	};
 
	// X-JASMINE
	var _jt = 0;
	const _xjasmine = xtag.create( "pi-extension", class extends XTagElement.extensions(xjasmine) { 
		constructor() {
			super();
			var _loadJasmine = window.setInterval( function(){
				if(document.getElementsByClassName("jasmine_html-reporter")) { 
					window.clearInterval(_loadJasmine);
					document.getElementsByClassName("jasmine_html-reporter")[0].appendChild(document.getElementById("jasmine-test"));
				}
				else if(_jt === 25){
					window.clearInterval(_loadJasmine);
				}
				else{
					_jt++;
				}
			}, 100 );
			this.isXTAG = true;
			this.render('piextension');
		}
		'piextension::template'(){
			return `<pi-local type="database/json" id="pi-local">
					</pi-local>
					<pi-prompt type="conditions/screen">
						<pi-video><h1>VIDEO LOADING ERROR</h1></pi-video>
						<pi-dashboard><button>Submit</button></pi-dashboard>
					</pi-prompt>`;
		}
		'piextstyle::template'(){
			return `<style type="text/css" id="pi-style1">
						
					</style>`;
		}
	} );
} );