import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as require_jsx_runtime } from "../_libs/@radix-ui/react-label+[...].mjs";
import { l as ArrowRight } from "../_libs/lucide-react.mjs";
import { d as Button, r as cta, u as Container } from "./router-B_GYNcw-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cta-band-BFnTfe9B.js
var import_jsx_runtime = require_jsx_runtime();
function CtaBand() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-primary text-primary-fg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			className: "flex flex-col items-start gap-6 py-14 sm:py-16 lg:flex-row lg:items-end lg:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl font-medium tracking-tight sm:text-4xl",
					children: cta.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-primary-fg/75",
					children: cta.body
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				variant: "inverse",
				size: "lg",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/contact",
					children: [cta.action, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
				})
			})]
		})
	});
}
//#endregion
export { CtaBand as t };
