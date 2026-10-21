/**
 * ELECTROSYS site configuration.
 */
export const site = {
  name: "Electrosys",
  legalName: "Electrosys Power Solutions",
  tagline: "30 Years of Excellence in Electrical Safety & Power Resilience.",
  description:
    "Electrosys provides engineered UPS systems, battery solutions, installation, and lifecycle maintenance across India with 30+ years of proven resilience.",

  phone: "+91 79778 61434",
  whatsappNumber: "919769696021",
  whatsappDisplay: "+91 97696 96021",
  email: "sales@electrosys.in",
  address: {
    line1: "Jai Industrial Estate, Plot No. TS-6",
    line2: "Near State Bank of India, MIDC, Dombivli East",
    city: "Dombivli, Maharashtra",
    postcode: "421203",
    country: "India",
  },
  hours: "Monday – Saturday, 09:00 – 18:00",

  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.4878!2d73.1088139!3d19.2126915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be79597b224f599%3A0xd0586cdeb53847eb!2sJai%20Industrial%20Estate!5e0!3m2!1sen!2sin!4v1710000000000",
  mapDirectUrl: "https://maps.app.goo.gl/kbjaQdRJDoqUbCfo8",
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
