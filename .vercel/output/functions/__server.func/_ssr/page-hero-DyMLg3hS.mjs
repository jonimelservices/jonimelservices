import { i as require_jsx_runtime } from "../_libs/@radix-ui/react-label+[...].mjs";
import { u as Container } from "./router-B_GYNcw-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/page-hero-DyMLg3hS.js
var import_jsx_runtime = require_jsx_runtime();
function PageHero({ eyebrow, title, lede }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "pt-12 pb-8 sm:pt-20 sm:pb-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-medium tracking-wide text-primary",
				children: eyebrow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 max-w-3xl font-display text-4xl font-medium tracking-tight text-fg sm:text-5xl lg:text-6xl",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 max-w-2xl text-lg leading-relaxed text-muted",
				children: lede
			})
		] })
	});
}
//#endregion
export { PageHero as t };
