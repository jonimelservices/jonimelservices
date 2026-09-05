import { i as require_jsx_runtime } from "../_libs/@radix-ui/react-label+[...].mjs";
import { a as operations, u as Container } from "./router-B_GYNcw-.mjs";
import { t as CtaBand } from "./cta-band-BFnTfe9B.mjs";
import { t as PageHero } from "./page-hero-DyMLg3hS.mjs";
import { t as ServiceBlocks } from "./service-blocks-CCTsgAyP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/operational-excellence-D_bjPlKX.js
var import_jsx_runtime = require_jsx_runtime();
function OperationsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: operations.eyebrow,
			title: operations.headline,
			lede: operations.lede
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, {
			className: "pb-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/operations.jpg",
				alt: "Organized operations studio with binders, process board, and KPI dashboard",
				className: "aspect-wide w-full rounded-xl object-cover object-center",
				width: 1728,
				height: 1152
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceBlocks, { blocks: operations.blocks }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {})
	] });
}
//#endregion
export { OperationsPage as component };
