import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import type { StoredUtmParams } from "@/lib/types/clarity";
import { setTag } from "@/clarity/observability";

const STORAGE_KEY = "clarity_utms";
const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

type UtmKey = (typeof UTM_KEYS)[number];

const readStoredUtms = (): StoredUtmParams => {
  try {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (!stored) {
      return {};
    }

    return JSON.parse(stored) as StoredUtmParams;
  } catch {
    return {};
  }
};

const writeStoredUtms = (params: StoredUtmParams): void => {
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(params));
};

const getSearchUtms = (search: string): StoredUtmParams => {
  const query = new URLSearchParams(search);
  const utms: StoredUtmParams = {};

  UTM_KEYS.forEach((key) => {
    const value = query.get(key);
    if (value) {
      utms[key] = value;
    }
  });

  return utms;
};

export const UtmCollector = (): JSX.Element | null => {
  const { search } = useLocation();

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const stored = readStoredUtms();
    const incoming = getSearchUtms(search);
    const merged = { ...stored, ...incoming };

    const hasUpdates = UTM_KEYS.some(
      (key) => stored[key as UtmKey] !== merged[key as UtmKey],
    );

    if (hasUpdates) {
      writeStoredUtms(merged);
    }

    UTM_KEYS.forEach((key) => {
      const value = merged[key];
      if (value) {
        setTag(key, value);
      }
    });
  }, [search]);

  return null;
};
