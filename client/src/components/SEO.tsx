import { useEffect } from "react";

interface SEOProps {
  title: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
  jsonLd?: Record<string, any> | Record<string, any>[];
}

export default function SEO({
  title,
  description = "NATIONAL STEEL & ALLOYS - Leading Importer, Stockist, Supplier & Exporter of Stainless Steel, Carbon Steel, Alloy Steel, Aluminium, Copper & Fasteners in Mumbai, India. All India Express Delivery & MTC 3.1 Certification.",
  keywords = "NATIONAL STEEL & ALLOYS, Stainless Steel Supplier Mumbai, Alloy Steel Stockist, Carbon Steel Pipes, Stainless Steel Plates, SS 304, SS 316, EN19, Hardox, Fasteners, Champak Sain, Steel Supplier India, All India Delivery",
  ogImage = "/assets/logo-removebg-preview.png",
  ogType = "website",
  canonicalUrl,
  jsonLd,
}: SEOProps) {
  useEffect(() => {
    // Set document title
    document.title = title;

    // Helper to set/update meta tags
    const setMetaTag = (selector: string, attrName: string, attrValue: string, content: string) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attrName, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // Helper to set/update link tags
    const setLinkTag = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`);
      if (!element) {
        element = document.createElement("link");
        element.setAttribute("rel", rel);
        document.head.appendChild(element);
      }
      element.setAttribute("href", href);
    };

    // Standard Meta Tags
    setMetaTag('meta[name="description"]', "name", "description", description);
    setMetaTag('meta[name="keywords"]', "name", "keywords", keywords);

    // Open Graph / Facebook
    setMetaTag('meta[property="og:title"]', "property", "og:title", title);
    setMetaTag('meta[property="og:description"]', "property", "og:description", description);
    setMetaTag('meta[property="og:image"]', "property", "og:image", ogImage.startsWith("http") ? ogImage : window.location.origin + ogImage);
    setMetaTag('meta[property="og:type"]', "property", "og:type", ogType);
    setMetaTag('meta[property="og:url"]', "property", "og:url", canonicalUrl || window.location.href);
    setMetaTag('meta[property="og:site_name"]', "property", "og:site_name", "NATIONAL STEEL & ALLOYS");

    // Twitter Card
    setMetaTag('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
    setMetaTag('meta[name="twitter:title"]', "name", "twitter:title", title);
    setMetaTag('meta[name="twitter:description"]', "name", "twitter:description", description);
    setMetaTag('meta[name="twitter:image"]', "name", "twitter:image", ogImage.startsWith("http") ? ogImage : window.location.origin + ogImage);

    // Canonical Link Tag
    if (canonicalUrl || window.location.href) {
      setLinkTag("canonical", canonicalUrl || window.location.href);
    }

    // Dynamic JSON-LD Schema injection for rich snippets
    const scriptId = "dynamic-seo-jsonld";
    let scriptElem = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (jsonLd) {
      if (!scriptElem) {
        scriptElem = document.createElement("script");
        scriptElem.id = scriptId;
        scriptElem.type = "application/ld+json";
        document.head.appendChild(scriptElem);
      }
      scriptElem.textContent = JSON.stringify(jsonLd);
    } else if (scriptElem) {
      scriptElem.remove();
    }
  }, [title, description, keywords, ogImage, ogType, canonicalUrl, jsonLd]);

  return null;
}
