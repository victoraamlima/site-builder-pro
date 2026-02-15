import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackEvent } from "@/clarity/observability";

const INTERACTIVE_SELECTOR = "a,button,[role='button'],[data-cta]";

const shouldIgnore = (element: HTMLElement | null): boolean => {
  if (!element) {
    return true;
  }

  return Boolean(element.closest("[data-track='false']"));
};

const slugify = (value: string): string =>
  value
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-_]/g, "")
    .slice(0, 60);

const bestLabel = (element: HTMLElement): string => {
  const cta = element.getAttribute("data-cta");
  if (cta) {
    return `cta:${cta}`;
  }

  const aria = element.getAttribute("aria-label");
  if (aria) {
    return `aria:${slugify(aria)}`;
  }

  const id = element.getAttribute("id");
  if (id) {
    return `id:${slugify(id)}`;
  }

  const name = element.getAttribute("name");
  if (name) {
    return `name:${slugify(name)}`;
  }

  const text = element.textContent?.trim() ?? "";
  if (text) {
    return `text:${slugify(text)}`;
  }

  return "unknown";
};

const trackInteraction = (pathname: string, element: HTMLElement): void => {
  const label = bestLabel(element);
  trackEvent(`click:${pathname}:${label}`);
};

export const ClickTracker = (): JSX.Element | null => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const handleClick = (event: MouseEvent): void => {
      const target = event.target as HTMLElement | null;
      const element = target?.closest(INTERACTIVE_SELECTOR) as HTMLElement | null;

      if (!element || shouldIgnore(element)) {
        return;
      }

      trackInteraction(pathname, element);
    };

    const handleKeydown = (event: KeyboardEvent): void => {
      if (event.key !== "Enter" && event.key !== " ") {
        return;
      }

      const target = event.target as HTMLElement | null;
      const element = target?.closest(INTERACTIVE_SELECTOR) as HTMLElement | null;

      if (!element || shouldIgnore(element)) {
        return;
      }

      trackInteraction(pathname, element);
    };

    document.addEventListener("click", handleClick, true);
    document.addEventListener("keydown", handleKeydown, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
      document.removeEventListener("keydown", handleKeydown, true);
    };
  }, [pathname]);

  return null;
};
