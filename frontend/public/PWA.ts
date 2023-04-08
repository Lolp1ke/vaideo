// @ts-ignore
if ("serviceWorker" in navigator) {
	navigator.serviceWorker
		.register("/sw.ts")
		.then((reg) => console.log("serviceWorker registered", reg))
		.catch((err) => console.log("serviceWorker not registered", err));
}
