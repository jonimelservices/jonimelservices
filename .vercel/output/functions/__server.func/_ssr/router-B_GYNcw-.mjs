import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as createRootRoute, d as useRouterState, g as createFileRoute, h as lazyRouteComponent, l as Scripts, m as Outlet, p as createRouter, u as HeadContent, v as Link, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as require_jsx_runtime, r as Slot } from "../_libs/@radix-ui/react-label+[...].mjs";
import { n as TriangleAlert, o as Menu, t as X } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { a as string, i as object, n as literal, o as union, r as number } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-B_GYNcw-.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 bg-bg px-6 text-center text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-primary",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-lg font-medium tracking-tight",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-muted",
				children: error.message || "An unexpected error occurred. Try reloading the page."
			})
		]
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium tracking-tight transition-[opacity,transform,background-color,color,box-shadow] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-50 active:not-disabled:scale-[0.96]", {
	variants: {
		variant: {
			primary: "bg-primary text-primary-fg hover:bg-forest-deep",
			secondary: "bg-surface text-fg shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]",
			ghost: "bg-transparent text-fg hover:bg-fg/5",
			inverse: "bg-primary-fg text-primary hover:bg-surface"
		},
		size: {
			sm: "h-10 rounded-sm px-4 text-sm",
			md: "h-11 rounded-md px-5 text-sm",
			lg: "h-12 rounded-md px-6 text-base"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		ref,
		...props
	});
});
Button.displayName = "Button";
function Container({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("mx-auto w-full max-w-6xl px-5 sm:px-8", className),
		children
	});
}
function NotFound() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
		className: "flex min-h-[60vh] flex-col items-start justify-center py-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-medium tracking-wide text-primary",
				children: "404"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-4xl font-medium tracking-tight text-fg",
				children: "Page not found."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-md text-muted",
				children: "That page doesn't exist. Head back home or get in touch."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-wrap gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						children: "Home"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "secondary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						children: "Contact"
					})
				})]
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	if (typeof window === "undefined") return () => {};
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	const parentOrigin = resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		if (envelope.data.type === "hello") {
			if (!HelloSchema.safeParse(event.data).success) return;
			announce();
			return;
		}
		if (envelope.data.type === "navigate") {
			const parsed = NavigateSchema.safeParse(event.data);
			if (!parsed.success) return;
			navigate(parsed.data.path);
			queueMicrotask(reportLocation);
			return;
		}
		if (envelope.data.type === "history") {
			const parsed = HistorySchema.safeParse(event.data);
			if (!parsed.success) return;
			if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
			window.history.go(parsed.data.delta);
		}
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
function Logo({ className, size = "header" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/",
		className: cn("group inline-flex shrink-0 items-center rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40", className),
		"aria-label": "Jonimel Services, home",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: "/images/logo.png",
			alt: "Jonimel Services",
			width: 855,
			height: 297,
			className: cn("w-auto outline-none", size === "footer" ? "h-logo-footer max-w-full sm:h-logo-footer-lg" : "h-10 max-w-[min(100%,11.5rem)] sm:h-11")
		})
	});
}
var site = {
	name: "Jonimel Services",
	shortName: "J",
	tagline: "Expert consultancy services in Florida",
	description: "Tailored consultancy for the Florida market — business planning, operational excellence, and financial modeling that connect strategy to execution.",
	market: "Florida"
};
var nav = [
	{
		to: "/business-plans",
		label: "Planning & Strategy"
	},
	{
		to: "/operational-excellence",
		label: "Operational Excellence"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
var home = {
	eyebrow: "Expert consultancy · Florida",
	headline: "An integrated approach to growth.",
	lede: "We connect high-level strategy to the daily execution required for scalable success.",
	heroCaption: "Miami waterfront · strategy sessions"
};
var services = [{
	to: "/business-plans",
	title: "Business Planning & Strategy",
	summary: "Bespoke business plans, pitch decks, and financial models to secure investment and fuel growth.",
	image: "/images/planning.jpg",
	imageAlt: "Business plan, financial charts, and fountain pen on a walnut desk"
}, {
	to: "/operational-excellence",
	title: "Operational Excellence",
	summary: "Tailored standard operating procedures, process improvement, and performance systems for sustained growth.",
	image: "/images/operations.jpg",
	imageAlt: "Organized operations studio with binders, process board, and KPI dashboard"
}];
var process = {
	title: "Our 3-step path to results",
	lede: "A simple, powerful process designed for clarity and impact.",
	steps: [
		{
			n: "01",
			title: "Discover & Analyze",
			body: "A deep dive into your business, market, and goals — a complete picture of the challenges and opportunities in front of you."
		},
		{
			n: "02",
			title: "Strategize & Plan",
			body: "A clear, data-driven strategic plan and the operational blueprint needed to hit your objectives with precision."
		},
		{
			n: "03",
			title: "Implement & Scale",
			body: "Execute the plan, build efficient processes, and put robust systems in place for long-term growth."
		}
	]
};
var testimonials = [{
	quote: "The business plan was instrumental in securing our E2 Visa. The process was thorough, and the financial projections gave us incredible clarity on our path forward.",
	name: "Franco A.",
	role: "CEO, Discovery Pet USA",
	place: "Florida"
}, {
	quote: "Implementing the new SOPs transformed our daily operations. We've reduced errors and our team is more efficient than ever. It was the key to unlocking our ability to scale.",
	name: "Fernando Y.",
	role: "CEO, Buddies Bakery",
	place: "Florida"
}];
var planning = {
	eyebrow: "Business Planning & Strategy",
	headline: "Let's build your winning strategy.",
	lede: "We don't just write plans. We craft strategic roadmaps that win over investors, secure funding, and guide your growth.",
	blocks: [
		{
			title: "Business plan development",
			body: "Comprehensive 30–50 page business plans, written for the audience that will actually read them — investors, lenders, and immigration officers.",
			items: [
				"Immigration visa business plans",
				"Investor business plans",
				"Teaser business plans",
				"SBA business plans",
				"Specialized business plans"
			]
		},
		{
			title: "Financial modeling",
			body: "Sophisticated, dynamic models that quantify your vision and validate the business case — including sensitivity analysis for any scenario.",
			items: [
				"5-year financial projections",
				"Scenario analysis",
				"Sensitivity testing",
				"Return on investment and business valuation"
			]
		},
		{
			title: "Pitch deck creation",
			body: "We distill a complex plan into a 12–15 slide deck: problem, solution, market, and team — a clear, persuasive narrative with professional design.",
			items: [
				"Investor-ready 12–15 slide decks",
				"Graphic design and storytelling",
				"Core story: problem, solution, market, team"
			]
		}
	]
};
var operations = {
	eyebrow: "Operational Excellence",
	headline: "Scale without the strain.",
	lede: "Standardize how work gets done, remove friction, and manage performance with numbers instead of guesswork.",
	blocks: [
		{
			title: "Standard operating procedures",
			body: "Step-by-step guides for core functions — designed to standardize workflows, reduce errors, and scale the team. Tailored to your industry, including labor shortages and regulatory shifts, so the business still runs during high-turnover periods. Includes comprehensive employee handbooks that go beyond the basics.",
			items: [
				"Core-function SOP playbooks",
				"Industry-specific best practices",
				"Employee handbooks"
			]
		},
		{
			title: "Business process improvement",
			body: "We find the bottlenecks, then redesign the work: eliminate waste, automate where it pays, and leave a leaner, more agile operation. Includes business coaching for efficiency, productivity, and problem-solving.",
			items: [
				"Workflow friction analysis",
				"Process redesign and automation",
				"Business coaching"
			]
		},
		{
			title: "Performance management",
			body: "Move from guesswork to data-informed management. We pinpoint the KPIs that actually drive the business and build straightforward dashboards for real-time operational insight — and a culture of accountability.",
			items: [
				"KPI selection and cascading",
				"Simple real-time dashboards",
				"Accountability systems"
			]
		}
	]
};
var contact = {
	eyebrow: "Contact",
	headline: "Get in touch.",
	lede: "Tell us where the business is today and where it needs to go. We'll map the next step.",
	asides: [{
		title: "Where we work",
		body: "Tailored consultancy for the Florida market — planning, operations, and finance under one roof."
	}, {
		title: "What to include",
		body: "A short note on the stage of the business, the decision you're facing (funding, visa, scale, ops), and any deadline."
	}]
};
var cta = {
	title: "Ready to connect strategy to execution?",
	body: "Whether you need a plan that wins capital or systems that let the team scale — start with a conversation.",
	action: "Get in touch"
};
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "mt-auto border-t border-border bg-bg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			className: "flex flex-col gap-10 py-12 sm:py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 sm:grid-cols-2 lg:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { size: "footer" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm leading-relaxed text-muted",
							children: site.description
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-[0.14em] text-subtle",
						children: "Pages"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-4 flex flex-col gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "text-sm text-fg hover:text-primary",
							children: "Home"
						}) }), nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							className: "text-sm text-fg hover:text-primary",
							children: item.label
						}) }, item.to))]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium uppercase tracking-[0.14em] text-subtle",
							children: "Market"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm text-fg",
							children: site.market
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: "Business planning, operational excellence, and financial modeling."
						})
					] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-2 border-t border-border pt-6 text-xs text-subtle sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ",
					site.name,
					". All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Strategy connected to execution." })]
			})]
		})
	});
}
function SiteHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	(0, import_react.useEffect)(() => {
		setOpen(false);
	}, [pathname]);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-50 border-b border-border bg-bg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			className: "flex h-16 items-center justify-between gap-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden items-center gap-1 lg:flex",
					"aria-label": "Primary",
					children: [nav.slice(0, 2).map((item) => {
						const active = pathname === item.to;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							className: cn("rounded-sm px-3 py-2 text-sm tracking-tight transition-colors duration-150", active ? "font-medium text-primary" : "text-muted hover:text-fg"),
							children: item.label
						}, item.to);
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "sm",
						className: "ml-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							children: "Contact"
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "relative flex size-11 items-center justify-center rounded-sm text-fg lg:hidden",
					"aria-expanded": open,
					"aria-controls": "mobile-nav",
					"aria-label": open ? "Close menu" : "Open menu",
					onClick: () => setOpen((v) => !v),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "relative size-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: cn("absolute inset-0 size-5 transition-[opacity,transform,filter] duration-200", open ? "scale-[0.25] opacity-0 blur-[4px]" : "scale-100 opacity-100") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: cn("absolute inset-0 size-5 transition-[opacity,transform,filter] duration-200", open ? "scale-100 opacity-100" : "scale-[0.25] opacity-0 blur-[4px]") })]
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			id: "mobile-nav",
			hidden: !open,
			className: cn("border-t border-border bg-bg lg:hidden", open ? "block" : "hidden"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, {
				className: "flex flex-col gap-1 py-4",
				children: nav.map((item) => {
					const active = pathname === item.to;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						className: cn("flex min-h-11 items-center rounded-md px-3 text-base", active ? "bg-fg/5 font-medium text-primary" : "text-muted"),
						children: item.label
					}, item.to);
				})
			})
		})]
	});
}
function SiteShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh flex-col bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#content",
				className: "sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-sm focus:bg-primary focus:px-3 focus:py-2 focus:text-sm focus:text-primary-fg",
				children: "Skip to content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				id: "content",
				className: "flex-1",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
var styles_default = "/assets/styles-BgR6uY9d.css";
var APP_NAME = site.name;
var Route$4 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: site.description
			},
			{
				name: "theme-color",
				content: "#2f86c4"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Source+Sans+3:ital,wght@0,400;0,500;0,600;1,400&display=swap"
			}
		]
	}),
	component: RootDocument
});
function RootDocument() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "bg-bg text-fg font-sans min-h-dvh",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
			]
		})]
	});
}
var $$splitComponentImporter$3 = () => import("./routes-DtuxoSv0.mjs");
var Route$3 = createFileRoute("/")({
	head: () => ({ meta: [{ title: `Expert Consultancy Services in Florida | ${site.name}` }, {
		name: "description",
		content: site.description
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./business-plans-BFDDlfZq.mjs");
var Route$2 = createFileRoute("/business-plans")({
	head: () => ({ meta: [{ title: `Business Planning & Strategy | ${site.name}` }, {
		name: "description",
		content: "Immigration, investor, teaser, SBA, and specialized business plans — plus financial models and 12–15 slide pitch decks."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./contact-DBKta_95.mjs");
var Route$1 = createFileRoute("/contact")({
	head: () => ({ meta: [{ title: `Contact | ${site.name}` }, {
		name: "description",
		content: "Contact Jonimel Services for business planning, financial modeling, and operational excellence in Florida."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./operational-excellence-D_bjPlKX.mjs");
var Route = createFileRoute("/operational-excellence")({
	head: () => ({ meta: [{ title: `Operational Excellence | ${site.name}` }, {
		name: "description",
		content: "SOPs, employee handbooks, process improvement, KPIs, and performance dashboards so Florida businesses can scale without the strain."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$3.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$4
	}),
	BusinessPlansRoute: Route$2.update({
		id: "/business-plans",
		path: "/business-plans",
		getParentRoute: () => Route$4
	}),
	ContactRoute: Route$1.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$4
	}),
	OperationalExcellenceRoute: Route.update({
		id: "/operational-excellence",
		path: "/operational-excellence",
		getParentRoute: () => Route$4
	})
};
var routeTree = Route$4._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent,
		defaultNotFoundComponent: NotFound
	});
}
//#endregion
export { operations as a, services as c, Button as d, cn as f, home as i, testimonials as l, contact as n, planning as o, cta as r, process as s, router_exports as t, Container as u };
