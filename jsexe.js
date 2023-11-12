/// script_execution.js
window.addEventListener("keyup", (event) => {
	if (event.ctrlKey && event.altKey && event.key === "]") {
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
	if (event.ctrlKey && event.altKey && event.key === "i") {
		var firebug = document.createElement("script");
		firebug.setAttribute("src", "firebug-lite-dev.js");
		document.body.appendChild(firebug);
		(function () {
			if (window.firebug.version) {
				firebug.init();
			} else {
				setTimeout(arguments.callee);
			}
		})();
		void firebug;
	}
});
