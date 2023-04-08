// @ts-ignore
self.addEventListener("install", (evt) => {
	console.log("serviceWorker has been installed", evt);
});
self.addEventListener("activate", (evt) => {
	console.log("serviceWorker is active", evt);
});
self.addEventListener("fetch", () => {
	// console.log("fetch event", evt);
});
