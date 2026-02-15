import type { ClarityRouteConfig } from "@/lib/types/clarity";

declare global {
  interface Window {
    clarity?: (...args: unknown[]) => void;
    __clarityRouteConfig?: Partial<ClarityRouteConfig>;
  }
}

const hasClarity = (): boolean =>
  typeof window !== "undefined" && typeof window.clarity === "function";

export const safeClarity = (...args: unknown[]): void => {
  if (hasClarity()) {
    window.clarity?.(...args);
  }
};

export const setTag = (key: string, value: string): void => {
  if (!key || !value) {
    return;
  }

  safeClarity("set", key, value);
};

export const trackEvent = (name: string): void => {
  if (!name) {
    return;
  }

  safeClarity("event", name);
};

export const setConsentGranted = (): void => {
  safeClarity("consentv2", {
    ad_Storage: "granted",
    analytics_Storage: "granted",
  });
};
