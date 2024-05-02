import { defineMiddleware } from "milkio";

/**
 * (ECAMPLE) Http IO Console Log
 * Print logs when receiving requests and making responses.
 * Note: The log function provided by Milkio is not used here, but directly printed on the console.
 */
export const httpIOConsoleLog = defineMiddleware({
	afterHttpRequest: async (headers, detail) => {
		console.log(`🍋 Request In: ${detail.fullurl.toString()}`);
	},
	beforeHttpResponse: async (headers, detail) => {
		console.log(`🍋 Response Out: ${detail.fullurl.toString()}`);
	},
	httpNotFound: async (detail) => {
		console.log("adsasdsadasd", detail.fullurl.pathname);
		detail.response.body = Bun.file("./package.json");
	},
});
