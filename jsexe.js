/// script_execution.js
let focusedclipboardwritetext = false;
window.addEventListener("keyup", (event) => {
	if (event.ctrlKey && event.altKey && event.key === "]") {
		focusedclipboardwritetext = false;
		let command = prompt("Evaluate Command:");
		try {
			let evaledCommand = eval(command);
			alert(evaledCommand);
		} catch (err) {
			alert(err);
		}
	}
});
