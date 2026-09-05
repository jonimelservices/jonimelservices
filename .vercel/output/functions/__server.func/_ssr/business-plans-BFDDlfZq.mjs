import { i as require_jsx_runtime } from "../_libs/@radix-ui/react-label+[...].mjs";
import { o as planning, u as Container } from "./router-B_GYNcw-.mjs";
import { t as CtaBand } from "./cta-band-BFnTfe9B.mjs";
import { t as PageHero } from "./page-hero-DyMLg3hS.mjs";
import { t as ServiceBlocks } from "./service-blocks-CCTsgAyP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/business-plans-BFDDlfZq.js
var import_jsx_runtime = require_jsx_runtime();
function BusinessPlansPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: planning.eyebrow,
			title: planning.headline,
			lede: planning.lede
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, {
			className: "pb-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/planning.jpg",
				alt: "Business plan, financial charts, and fountain pen on a walnut desk",
				className: "aspect-wide w-full rounded-xl object-cover object-center",
				width: 1728,
				height: 1152
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceBlocks, { blocks: planning.blocks }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {})
	] });
}
//#endregion
export { BusinessPlansPage as component };
