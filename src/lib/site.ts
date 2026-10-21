/**
 * ELECTROSYS site configuration.
 */
export const site = {
  name: "Electrosys",
  legalName: "Electrosys Power Solutions",
  tagline: "30 Years of Excellence in Electrical Safety & Power Resilience.",
  description:
    "Electrosys provides engineered UPS systems, battery solutions, installation, and lifecycle maintenance across India with 30+ years of proven resilience.",

  phone: "+91 00000 00000",
  whatsappNumber: "910000000000",
  email: "sales@electrosys.in",
  address: {
    line1: "Industrial Area",
    line2: "Commercial Hub",
    city: "Mumbai / Pan-India",
    postcode: "",
    country: "India",
  },
  hours: "Monday – Saturday, 09:00 – 18:00",

  mapEmbedUrl: "https://www.google.com/maps?q=Mumbai&output=embed",
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
  site.address.city,
  site.address.country,
].filter(Boolean);

export const telHref = `tel:${site.phone.replace(/[^+\d]/g, "")}`;
export const mailHref = `mailto:${site.email}`;

export const defaultWhatsAppMessage =
  "Hello Electrosys, I would like to know more about your UPS systems and power solutions.";

export function whatsappHref(message: string = defaultWhatsAppMessage) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function productWhatsAppHref(productName: string) {
  return whatsappHref(
    `Hello Electrosys, I am interested in ${productName}. Please share more details.`,
  );
}

export function serviceWhatsAppHref(serviceName: string) {
  return whatsappHref(
    `Hello Electrosys, I would like to enquire about your ${serviceName} service. Please share more details.`,
  );
}
