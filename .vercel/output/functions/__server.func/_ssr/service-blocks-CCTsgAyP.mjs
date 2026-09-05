import { i as require_jsx_runtime } from "../_libs/@radix-ui/react-label+[...].mjs";
import { u as Container } from "./router-B_GYNcw-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/service-blocks-CCTsgAyP.js
var import_jsx_runtime = require_jsx_runtime();
function ServiceBlocks({ blocks }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "pb-16 sm:pb-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "grid gap-4 lg:grid-cols-3",
			children: blocks.map((block, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex flex-col rounded-xl bg-surface p-6 shadow-[var(--shadow-border)] sm:p-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-sm tabular-nums text-primary",
						children: String(i + 1).padStart(2, "0")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 font-display text-2xl font-medium tracking-tight text-fg",
						children: block.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-muted",
						children: block.body
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 flex flex-col gap-2.5",
						children: block.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-2.5 text-sm text-fg",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1.5 size-1.5 shrink-0 rounded-full bg-primary",
								"aria-hidden": true
							}), item]
						}, item))
					})
				]
			}, block.title))
		}) })
	});
}
//#endregion
export { ServiceBlocks as t };
