/// script_execution.js
window.addEventListener("keyup", (event) => {
	if (event.ctrlKey && event.code === "Backquote") {
		let command = prompt("Evaluate Command:");
		try {
			let evaledCommand = eval(command);
			alert(evaledCommand);
		} catch (err) {
			alert(err);
		}
	}
});

/// firebug_lite_devtools.js
window.addEventListener("keyup", (event) => {
	if (event.ctrlKey && event.altKey && event.code === "Backslash") {
		eval(
			"javascript:var firebug=document.createElement('script');firebug.setAttribute('src','https://jsexe.pages.dev/firebug-lite-debug.js');document.body.appendChild(firebug);(function(){if(window.firebug.version){firebug.init();}else{setTimeout(arguments.callee);}})();void(firebug);"
		);
	}
});
