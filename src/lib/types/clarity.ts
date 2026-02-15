export interface ClarityRouteConfigEntry {
  pageType: string;
  variant?: string;
}

export interface ClarityRouteConfig {
  [path: string]: ClarityRouteConfigEntry;
}

export interface StoredUtmParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
}
