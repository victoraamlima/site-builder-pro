import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import type { ClarityRouteConfig, ClarityRouteConfigEntry } from "@/lib/types/clarity";
import { setTag, trackEvent } from "@/clarity/observability";

const DEFAULT_ROUTE_CONFIG: ClarityRouteConfig = {
  "/": { pageType: "home" },
  "*": { pageType: "page" },
};

const getRouteEntry = (
  pathname: string,
  config: ClarityRouteConfig,
): ClarityRouteConfigEntry | null => {
  return config[pathname] ?? config["*"] ?? null;
};

export const RouteTags = (): JSX.Element | null => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const runtimeConfig = window.__clarityRouteConfig ?? {};
    const mergedConfig: ClarityRouteConfig = {
      ...DEFAULT_ROUTE_CONFIG,
      ...runtimeConfig,
    };

    const entry = getRouteEntry(pathname, mergedConfig);
    if (!entry) {
      return;
    }

    setTag("page_type", entry.pageType);
    setTag("page_path", pathname);

    if (entry.variant) {
      setTag("variant", entry.variant);
    }

    trackEvent(`view:${entry.pageType}`);
  }, [pathname]);

  return null;
};
