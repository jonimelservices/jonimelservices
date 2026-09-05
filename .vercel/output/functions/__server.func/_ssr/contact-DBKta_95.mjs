import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { i as require_jsx_runtime, t as Root } from "../_libs/@radix-ui/react-label+[...].mjs";
import { c as Check } from "../_libs/lucide-react.mjs";
import { a as string, i as object, t as _enum } from "../_libs/zod.mjs";
import { d as Button, f as cn, n as contact, u as Container } from "./router-B_GYNcw-.mjs";
import { t as PageHero } from "./page-hero-DyMLg3hS.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-DBKta_95.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var fieldClass = "flex h-11 w-full rounded-md bg-surface px-3.5 text-base text-fg shadow-[var(--shadow-border)] transition-[box-shadow] duration-150 ease-out placeholder:text-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/35 focus-visible:shadow-[var(--shadow-border-hover)] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm";
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn(fieldClass, className),
		ref,
		...props
	});
});
Input.displayName = "Input";
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	className: cn("text-sm font-medium text-fg", className),
	...props
}));
Label.displayName = Root.displayName;
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn(fieldClass, "h-auto min-h-32 py-3 resize-y", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
var inquirySchema = object({
	name: string().trim().min(2, "Please enter your name."),
	email: string().trim().email("Enter a valid email."),
	company: string().trim().optional(),
	service: _enum([
		"planning",
		"operations",
		"both",
		"other"
	]),
	message: string().trim().min(12, "Tell us a bit more about what you need.")
});
function ContactForm() {
	const [errors, setErrors] = (0, import_react.useState)({});
	const [sent, setSent] = (0, import_react.useState)(false);
	function onSubmit(e) {
		e.preventDefault();
		const form = e.currentTarget;
		const data = Object.fromEntries(new FormData(form));
		const parsed = inquirySchema.safeParse(data);
		if (!parsed.success) {
			const next = {};
			for (const issue of parsed.error.issues) {
				const key = issue.path[0];
				if (typeof key === "string" && !next[key]) next[key] = issue.message;
			}
			setErrors(next);
			return;
		}
		setErrors({});
		setSent(true);
	}
	if (sent) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl bg-surface p-8 shadow-[var(--shadow-border)] sm:p-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "flex size-10 items-center justify-center rounded-md bg-primary text-primary-fg",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
					className: "size-5",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-5 font-display text-2xl font-medium tracking-tight",
				children: "Message sent."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted",
				children: "Thank you. We'll be in touch shortly."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "button",
				variant: "secondary",
				className: "mt-6",
				onClick: () => setSent(false),
				children: "Send another"
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		noValidate: true,
		className: "rounded-xl bg-surface p-6 shadow-[var(--shadow-border)] sm:p-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Name",
					htmlFor: "name",
					error: errors.name,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "name",
						name: "name",
						autoComplete: "name",
						required: true
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Email",
					htmlFor: "email",
					error: errors.email,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "email",
						name: "email",
						type: "email",
						autoComplete: "email",
						required: true
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Company",
					htmlFor: "company",
					error: errors.company,
					optional: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "company",
						name: "company",
						autoComplete: "organization"
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "How can we help?",
					htmlFor: "service",
					error: errors.service,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							id: "service",
							name: "service",
							defaultValue: "",
							className: cn(fieldClass, "appearance-none pr-10"),
							required: true,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "",
									disabled: true,
									children: "Select a service"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "planning",
									children: "Business Planning & Strategy"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "operations",
									children: "Operational Excellence"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "both",
									children: "Both"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "other",
									children: "Something else"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "pointer-events-none absolute inset-y-0 right-3 flex items-center text-subtle",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
								width: "16",
								height: "16",
								viewBox: "0 0 16 16",
								fill: "none",
								"aria-hidden": true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M4 6l4 4 4-4",
									stroke: "currentColor",
									strokeWidth: "1.5",
									strokeLinecap: "round",
									strokeLinejoin: "round"
								})
							})
						})]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Message",
					htmlFor: "message",
					error: errors.message,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						id: "message",
						name: "message",
						rows: 5,
						placeholder: "Stage of the business, the decision in front of you, any deadline."
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "submit",
				className: "mt-6 w-full sm:w-auto",
				size: "lg",
				children: "Send message"
			})
		]
	});
}
function Field({ label, htmlFor, error, optional, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
				htmlFor,
				children: [label, optional ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "ml-1.5 font-normal text-subtle",
					children: "optional"
				}) : null]
			}),
			children,
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-primary",
				role: "alert",
				children: error
			}) : null
		]
	});
}
function ContactPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "pb-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: contact.eyebrow,
			title: contact.headline,
			lede: contact.lede
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-8 lg:grid-cols-5 lg:gap-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lg:col-span-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactForm, {})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "flex flex-col gap-6 lg:col-span-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/florida.jpg",
					alt: "Quiet Florida estuary at late afternoon",
					className: "aspect-video w-full rounded-xl object-cover",
					width: 1792,
					height: 1008
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "flex flex-col gap-5",
					children: contact.asides.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-lg font-medium tracking-tight",
						children: item.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1.5 text-sm leading-relaxed text-muted",
						children: item.body
					})] }, item.title))
				})]
			})]
		}) })]
	});
}
//#endregion
export { ContactPage as component };
