import {
  contactEmail,
  fallbackSiteUrl,
  siteName,
} from "@/content/surent-capital/site-content";

type BreadcrumbItem = {
  name: string;
  pathname?: string;
  path?: string;
};

export function getSchemaSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL ?? fallbackSiteUrl;
}

export function organizationSchema() {
  const siteUrl = getSchemaSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url: siteUrl,
    email: contactEmail,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "deal intake",
      email: contactEmail,
      availableLanguage: "English",
    },
  };
}

export function websiteSchema() {
  const siteUrl = getSchemaSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: siteUrl,
  };
}

export function webpageSchema(
  nameOrOptions:
    | string
    | { path: string; name: string; description: string; type?: string },
  description?: string,
  pathname?: string,
  type = "WebPage",
) {
  const siteUrl = getSchemaSiteUrl();
  const config =
    typeof nameOrOptions === "string"
      ? {
          name: nameOrOptions,
          description: description ?? "",
          pathname: pathname ?? "/",
          type,
        }
      : {
          name: nameOrOptions.name,
          description: nameOrOptions.description,
          pathname: nameOrOptions.path,
          type: nameOrOptions.type ?? "WebPage",
        };

  return {
    "@context": "https://schema.org",
    "@type": config.type,
    name: config.name,
    description: config.description,
    url: new URL(config.pathname, siteUrl).toString(),
    isPartOf: {
      "@type": "WebSite",
      name: siteName,
      url: siteUrl,
    },
  };
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  const siteUrl = getSchemaSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.pathname ?? item.path ?? "/", siteUrl).toString(),
    })),
  };
}

export function personSchema() {
  const siteUrl = getSchemaSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Robert World II",
    jobTitle: "Chief Executive Officer",
    image: new URL("/images/surent/robert-world-ii-headshot.jpg", siteUrl).toString(),
    worksFor: {
      "@type": "Organization",
      name: siteName,
      url: siteUrl,
    },
  };
}

export function contactPageSchema() {
  const siteUrl = getSchemaSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Submit A Deal",
    description:
      "Direct sponsor deal submission page for structured real estate capital opportunities.",
    url: new URL("/contact", siteUrl).toString(),
    mainEntity: organizationSchema(),
  };
}
