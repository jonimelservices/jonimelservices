import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as require_jsx_runtime } from "../_libs/@radix-ui/react-label+[...].mjs";
import { a as Search, i as Star, l as ArrowRight, r as TrendingUp, s as Compass } from "../_libs/lucide-react.mjs";
import { c as services, d as Button, f as cn, i as home, l as testimonials, s as process, u as Container } from "./router-B_GYNcw-.mjs";
import { t as CtaBand } from "./cta-band-BFnTfe9B.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DtuxoSv0.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var icons = [
	Search,
	Compass,
	TrendingUp
];
function ProcessPath() {
	const [active, setActive] = (0, import_react.useState)(0);
	const [pinned, setPinned] = (0, import_react.useState)(false);
	const [paused, setPaused] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (paused || pinned) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		const id = window.setInterval(() => {
			setActive((n) => (n + 1) % process.steps.length);
		}, 4200);
		return () => window.clearInterval(id);
	}, [paused, pinned]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "process",
		className: "relative overflow-hidden border-y border-border py-16 sm:py-24",
		onMouseEnter: () => setPaused(true),
		onMouseLeave: () => setPaused(false),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "pointer-events-none absolute inset-0",
			"aria-hidden": true,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "path-orb path-orb-a" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "path-orb path-orb-b" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "path-orb path-orb-c" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "path-ring" })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			className: "relative",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl font-medium tracking-tight sm:text-4xl",
					children: process.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-xl text-muted",
					children: process.lede
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto mt-12 max-w-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-4 right-4 left-4 h-px bg-border" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute top-4 left-4 h-px bg-primary",
							style: {
								width: `calc((100% - 2rem) * ${active / 2})`,
								transition: "width var(--motion-slow) var(--ease-smooth-out)"
							}
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "path-bead absolute top-4 size-2.5 rounded-full bg-primary",
							style: {
								left: `calc(1rem + (100% - 2rem) * ${active / 2})`,
								transition: "left var(--motion-slow) var(--ease-smooth-out)"
							}
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative flex justify-between",
							children: process.steps.map((step, i) => {
								const on = i === active;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									"aria-current": on ? "step" : void 0,
									"aria-label": `Step ${step.n}: ${step.title}`,
									onClick: () => {
										setActive(i);
										setPinned(true);
									},
									onMouseEnter: () => setActive(i),
									className: "flex flex-col items-center",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: cn("relative flex size-8 items-center justify-center rounded-full text-xs font-medium tabular-nums", "transition-[background-color,color,box-shadow,transform] duration-200", on ? "bg-primary text-primary-fg shadow-[var(--shadow-border-hover)]" : "bg-surface text-muted shadow-[var(--shadow-border)]"),
										children: [on ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "path-node-ping",
											"aria-hidden": true
										}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "relative",
											children: step.n.replace(/^0/, "")
										})]
									})
								}, step.n);
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-10 grid gap-4 sm:grid-cols-3 sm:gap-5",
					children: process.steps.map((step, i) => {
						const Icon = icons[i];
						const on = i === active;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => {
								setActive(i);
								setPinned(true);
							},
							onMouseEnter: () => setActive(i),
							className: cn("group relative flex h-full w-full flex-col overflow-hidden rounded-xl p-6 text-left sm:p-7", "transition-[transform,box-shadow,background-color] duration-200 ease-[var(--ease-out)]", on ? "z-10 -translate-y-1 bg-surface shadow-[var(--shadow-border-hover)]" : "bg-bg shadow-[var(--shadow-border)] hover:-translate-y-1"),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("flex size-11 items-center justify-center rounded-md", "transition-[background-color,color] duration-200", on ? "bg-primary text-primary-fg" : "bg-primary/10 text-primary"),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
										className: cn("size-5", on && i === 0 && "path-icon-scan", on && i === 1 && "path-icon-spin", on && i === 2 && "path-icon-rise"),
										strokeWidth: 1.75
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 font-display text-sm tabular-nums text-primary",
									children: step.n
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-1 font-display text-xl font-medium tracking-tight",
									children: step.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-muted",
									children: step.body
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-6 flex gap-1.5",
									"aria-hidden": true,
									children: process.steps.map((_, d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: cn("size-1.5 rounded-full bg-primary/20", on && "path-dot"),
										style: on ? { animationDelay: `${d * 180}ms` } : void 0
									}, d))
								})
							]
						}) }, step.n);
					})
				})
			]
		})]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "pt-12 pb-10 sm:pt-20 sm:pb-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-medium tracking-wide text-primary",
					children: home.eyebrow
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 max-w-4xl font-display text-4xl font-medium tracking-tight text-fg sm:text-6xl lg:text-7xl",
					children: home.headline
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-xl text-lg leading-relaxed text-muted",
					children: home.lede
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "lg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#services",
							children: ["Explore services", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "secondary",
						size: "lg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							children: "Get in touch"
						})
					})]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, {
				className: "mt-12 sm:mt-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/hero.jpg",
					alt: "Sunlit Miami waterfront conference room overlooking palms and the bay",
					className: "aspect-video w-full rounded-xl object-cover",
					width: 1792,
					height: 1008
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
					className: "mt-3 text-sm text-subtle",
					children: home.heroCaption
				})] })
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "services",
			className: "py-16 sm:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl font-medium tracking-tight sm:text-4xl",
					children: "Two practices. One path to scale."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-sm text-sm text-muted",
					children: "Strategy that wins capital. Operations that keep the gains."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-5 lg:grid-cols-2",
				children: services.map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: service.to,
					className: "group flex flex-col overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)] transition-[box-shadow,transform] duration-200 ease-out hover:shadow-[var(--shadow-border-hover)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: service.image,
						alt: service.imageAlt,
						className: "aspect-photo w-full object-cover",
						width: 1728,
						height: 1152,
						loading: "lazy"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-1 flex-col p-6 sm:p-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl font-medium tracking-tight",
								children: service.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 flex-1 text-sm leading-relaxed text-muted",
								children: service.summary
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary",
								children: ["View service", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 transition-transform duration-150 group-hover:translate-x-0.5" })]
							})
						]
					})]
				}, service.to))
			})] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProcessPath, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-16 sm:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl font-medium tracking-tight sm:text-4xl",
				children: "Results, in their words."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-5 lg:grid-cols-2",
				children: testimonials.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: "flex flex-col rounded-xl bg-surface p-6 shadow-[var(--shadow-border)] sm:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex gap-0.5 text-primary",
							"aria-label": "5 out of 5 stars",
							children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-4 fill-primary" }, i))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
							className: "mt-5 flex-1 font-display text-xl font-medium leading-snug tracking-tight text-fg",
							children: [
								"“",
								t.quote,
								"”"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
							className: "mt-6 text-sm text-muted",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium text-fg",
									children: t.name
								}),
								" · ",
								t.role,
								", ",
								t.place
							]
						})
					]
				}, t.name))
			})] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {})
	] });
}
//#endregion
export { Home as component };
