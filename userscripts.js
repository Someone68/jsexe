/// script_execution.js
/// alias jseval.js
/// world ISOLATED
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
/// alias fblite.js
/// world ISOLATED
window.addEventListener("keyup", (event) => {
	if (event.ctrlKey && event.altKey && event.key === "]") {
		let firebug = document.createElement("script");
		firebug.setAttribute(
			"src",
			"https://ubo-userscripts.pages.dev/firebug-lite-debug.js"
		);
		document.body.appendChild(firebug);
		function startfirebug() {
			if (window.Firebug) {
				window.Firebug.ConsolePanel();
			} else {
				setTimeout(startfirebug);
			}
		}
		startfirebug();
		void firebug;
	}
});

/// eruda_devtools.js
/// alias eruda.js
/// world ISOLATED
window.addEventListener("keyup", (event) => {
	if (event.ctrlKey && event.altKey && event.key === "e") {
		let erudascript = document.createElement("script");
		erudascript.src = "https://ubo-userscripts.pages.dev/eruda.js";
		document.body.append(erudascript);
		erudascript.onload = function () {
			if (eruda || window.eruda) {
				window.eruda.init();
			} else {
				erudascript.onload();
			}
		};
	}
});

/// history_flood.js
/// alias hflood.js
/// world ISOLATED
window.addEventListener("keyup", (event) => {
	if (event.ctrlKey && event.altKey && event.key === "f") {
		let num = prompt("History flood amount:");
		done = false;
		x = window.location.href;
		for (var i = 1; i <= num; i++) {
			history.pushState(0, 0, x + `#${i}`);
			if (i == num) {
				done = true;
			}
		}
		if (done === true) {
			alert(
				"History flood successful! " +
					window.location.href +
					" now appears in your history " +
					num +
					(num == 1 ? " time." : " times.")
			);
		}
	}
});

/// cloak_page.js
/// alias cpage.js
/// world ISOLATED
window.addEventListener("keyup", (event) => {
	if (event.ctrlKey && event.altKey && event.key === "c") {
		let url = prompt("Cloak URL:");
		let win = window.open();
		let iframe = win.document.createElement("iframe");
		iframe.style =
			"position:fixed;width:100vw;height:100vh;top:0px;left:0px;right:0px;bottom:0px;z-index:2147483647;background-color:white;border:none;";
		iframe.src = url;
		win.document.body.appendChild(iframe);
	}
});
