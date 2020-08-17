setImmediate(function(){
	console.log("[+] Starting our hooker");

	Java.perform(function(){
		var system = Java.use("java.lang.System");
		system.exit.overload("int").implementation = function(var0){
			console.log("[+] Exit called");
		};
	});
});