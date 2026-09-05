import { Link } from "@tanstack/react-router";
import { useCopy } from "@/lib/locale";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  size = "header",
}: {
  className?: string;
  size?: "header" | "footer";
}) {
  const { href } = useCopy();
  return (
    <Link
      to={href("/") as never}
      className={cn(
        "group inline-flex shrink-0 items-center rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40",
        className,
      )}
      aria-label="Jonimel Services, home"
    >
      <img
        src="/images/logo.png"
        alt="Jonimel Services"
        width={855}
        height={297}
        className={cn(
          "w-auto outline-none",
          size === "footer"
            ? "h-logo-footer max-w-full sm:h-logo-footer-lg"
            : "h-10 max-w-[min(100%,11.5rem)] sm:h-11",
        )}
      />
    </Link>
  );
}
