setImmediate(function(){
	console.log("[+] Starting our hooker");

	Java.perform(function(){
		var system = Java.use("java.lang.System");
		system.exit.overload("int").implementation = function(var0){
			console.log("[+] Exit called");
		};

		var enc = Java.use("sg.vantagepoint.a.a");
		enc.a.overload("[B", "[B").implementation = function(var0,var1){

			var ret = this.a.overload("[B","[B").call(this,var0,var1);
			var flag = "";
			for(var i=0; i<ret.length; i++){
				flag += String.fromCharCode(ret[i]);
			}
			console.log("[+] Decrypt String: "+flag);
			return ret;
		};
	});
});
