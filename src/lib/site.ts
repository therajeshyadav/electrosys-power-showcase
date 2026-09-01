/**
 * ELECTROSYS site configuration.
 *
 * Replace the placeholder values below with the client's confirmed details.
 * Everything here is used across the header, footer, contact page and the
 * floating WhatsApp / Call buttons.
 */
export const site = {
  name: "Electrosys",
  legalName: "Electrosys Power Solutions",
  tagline: "Reliable power solutions for business and industry.",
  description:
    "Electrosys supplies, installs and maintains UPS systems, industrial batteries and power solutions for business and industrial requirements.",

  /** TODO: replace with the client's phone number in international format. */
  phone: "+00 000 000 0000",
  /** Digits only, international format, no + or spaces. TODO: replace. */
  whatsappNumber: "000000000000",
  /** TODO: replace with the client's business email. */
  email: "enquiries@electrosys.example",
  /** TODO: replace with the client's registered business address. */
  address: {
    line1: "Business address line 1",
    line2: "Business address line 2",
    city: "City",
    postcode: "Postcode",
    country: "Country",
  },
  hours: "Monday – Friday, 09:00 – 18:00",

  /**
   * Google Maps embed URL. Replace the query with the client's address once
   * confirmed — no API key required for the standard embed.
   */
  mapEmbedUrl:
    "https://www.google.com/maps?q=industrial+park&output=embed",

  /**
   * Contact form endpoint (e.g. Formspree, Web3Forms, Getform).
   * Leave empty to fall back to the visitor's email client.
   */
  formEndpoint: "",

  social: {
    linkedin: "",
    facebook: "",
    instagram: "",
  },
} as const;

export const addressLines = [
  site.address.line1,
  site.address.line2,
  `${site.address.city} ${site.address.postcode}`,
  site.address.country,
].filter(Boolean);

export const telHref = `tel:${site.phone.replace(/[^+\d]/g, "")}`;
export const mailHref = `mailto:${site.email}`;

export const defaultWhatsAppMessage =
  "Hello Electrosys, I would like to know more about your products and power solutions.";

export function whatsappHref(message: string = defaultWhatsAppMessage) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function productWhatsAppHref(productName: string) {
  return whatsappHref(
    `Hello Electrosys, I am interested in ${productName}. Please share more details.`,
  );
}
