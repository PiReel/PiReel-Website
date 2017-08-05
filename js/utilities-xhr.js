//***** [Author Ship Notes] *****
( function(){
var xhrUtil = xtag.mixins.requests = {
	methods:
		{
		// ********** [jLink] **********
		jLink: function(href)
			{
			var xhr = new XMLHttpRequest();

			xhr.open("GET",href,true);

			xhr.send();

			return xhr;
			},

		// ********** [jReady] **********
		jReady: function(xhr, _func)
		  {
		  console.log("Starting interval 'xhrCheck'.");
		  var _doc = this.setMimeType(jx.fireRequests[this.id].type, xhr);
		  var el = this,
			xhrCheck = window.setInterval( function(){
			  if (xhr.readyState === 4 && xhr.status === 200)
				{
				window.clearInterval(xhrCheck);
				_doc = xhr.response;
				console.log("Creating the document.");
				//_doc = el.setMimeType(jx.fireRequests[el.id].type, xhr);
				_doc = _func(_doc);
				}
			  }, 200 );
			return _doc;
		  },
		// ********** [type] **********
		type: function(url_string,obj)
		  {
		  var stg = "";
		  for(var i=url_string.length-1; i >= 0; i--){
			if(url_string[i] === "."){
			  console.log("Type file was assigned: " + stg);
			  obj.type = stg;
			  return stg;
			  }
			else if(/[a-z]/i.test(url_string[i])){
			  stg = url_string[i] + stg;
			  }
			}
		  return stg;
		  },
		// ********** [createMimeType] **********
		setMimeType: function(_type, _xhr){
			var _doc = null;
			if(_type==="json"){
				_xhr.responseType = _type;
				_doc =  _xhr.response;
			}
			else if(_type==="xml"||_type==="svg"||_type==="html"){
				_xhr.responseType = "document";
				_doc = _xhr.response;
			}
			return _doc;
			}
		},

	accessors:
		{
		dataHref:
			{
			attribute:
				{
				validate: function(val)
					{
						console.log("%c Validating data-href attribute.","color:skyblue;");
						
					var param = val.replace(/url\(/,"");
						
						param = param.replace(/\)/,"");
						
						console.log("%c Validated to " + param, "color:skyblue;");
					return param;
					}
				},
			set: function(val){
			var el = this, _type = this.getAttribute("type");

			  console.log("%c Setting fireRequest object.","color:limegreen");

			  if(!jx.fireRequests[el.id])
				{
				jx.fireRequests[this.id] = {}; 
				jx.fireRequests[this.id].dataHREF = val;
  			    this.type(val,jx.fireRequests[this.id]);
				jx.fireRequests.length += 1; 
				}
			  else
				{
				console.log("%c A fireRequest object already exists for " + el.id, "color:limegreen")
				}


			  console.log("%c Creating XHR constructor.", "color:limegreen;")

			  jx.fireRequests[el.id].xhr = this.jLink( val );

			  console.log("Setting the ready response.");
			  jx.fire[el.id].reqDoc = this.jReady(jx.fireRequests[el.id].xhr,function(doc){
				  return doc;
				  });

				},
			get: function(){
				return this.getAttribute("data-href");
				}
			}
		},

	/* *****[lifecycel]***** */
	lifecycle:
		{
		created: function(){
			
			}
		}
	};

} )();


