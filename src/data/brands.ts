import upsImage from "@/assets/product-ups.jpg";
import batteryImage from "@/assets/product-battery.jpg";

export type BrandProduct = {
  name: string;
  description: string;
  image: string;
  specs: { label: string; value: string }[];
};

export type Brand = {
  slug: string;
  name: string;
  wordmark: string;
  category: string;
  tagline: string;
  description: string;
  partnership: string;
  solutions: { title: string; body: string }[];
  products: BrandProduct[];
};

export const brands: Brand[] = [
  {
    slug: "vertiv-ups",
    name: "Vertiv UPS",
    wordmark: "VERTIV",
    category: "UPS Systems",
    tagline: "Critical power protection for data and industrial environments.",
    description:
      "Vertiv UPS systems cover single-phase rack installations through to large three-phase configurations for critical facilities. Placeholder description pending confirmed brand copy.",
    partnership:
      "Electrosys supplies, installs and supports Vertiv UPS systems as part of our power protection portfolio. Partnership details to be confirmed with the client.",
    solutions: [
      { title: "Data & IT rooms", body: "Rack and tower systems for server rooms and comms cabinets." },
      { title: "Industrial process", body: "Three-phase protection for continuous production environments." },
      { title: "Scalable capacity", body: "Modular configurations that grow with the connected load." },
    ],
    products: [
      {
        name: "Vertiv Rack-Mount UPS",
        description:
          "Online double-conversion rack UPS for server rooms and network cabinets. Placeholder product copy.",
        image: upsImage,
        specs: [
          { label: "Topology", value: "Online double conversion" },
          { label: "Form factor", value: "Rack-mount" },
          { label: "Phase", value: "Single phase" },
          { label: "Application", value: "IT & comms" },
        ],
      },
      {
        name: "Vertiv Three-Phase UPS",
        description:
          "Floor-standing three-phase UPS for larger critical loads and industrial installations. Placeholder product copy.",
        image: upsImage,
        specs: [
          { label: "Topology", value: "Online double conversion" },
          { label: "Form factor", value: "Floor standing" },
          { label: "Phase", value: "Three phase" },
          { label: "Application", value: "Facility level" },
        ],
      },
    ],
  },
  {
    slug: "riello-ups",
    name: "Riello UPS",
    wordmark: "RIELLO",
    category: "UPS Systems",
    tagline: "Efficient uninterruptible power for business continuity.",
    description:
      "Riello UPS offers a broad range of uninterruptible power supplies for commercial and industrial applications. Placeholder description pending confirmed brand copy.",
    partnership:
      "Electrosys works with Riello UPS products across supply, installation and ongoing maintenance. Partnership details to be confirmed with the client.",
    solutions: [
      { title: "Commercial buildings", body: "Protection for office IT, security and building systems." },
      { title: "High efficiency", body: "Operating modes designed to reduce running losses." },
      { title: "Service ready", body: "Configurations that support planned maintenance access." },
    ],
    products: [
      {
        name: "Riello Online UPS",
        description:
          "Online UPS designed for continuous protection of sensitive equipment. Placeholder product copy.",
        image: upsImage,
        specs: [
          { label: "Topology", value: "Online double conversion" },
          { label: "Form factor", value: "Tower / rack convertible" },
          { label: "Phase", value: "Single phase" },
          { label: "Application", value: "Commercial IT" },
        ],
      },
    ],
  },
  {
    slug: "yuasa",
    name: "Yuasa",
    wordmark: "YUASA",
    category: "Industrial Batteries",
    tagline: "Dependable stored energy for standby applications.",
    description:
      "Yuasa manufactures sealed lead-acid batteries widely used in UPS, standby and industrial applications. Placeholder description pending confirmed brand copy.",
    partnership:
      "Electrosys supplies and replaces Yuasa batteries as part of our battery services. Partnership details to be confirmed with the client.",
    solutions: [
      { title: "UPS standby", body: "Battery strings matched to UPS autonomy requirements." },
      { title: "Life planning", body: "Replacement scheduling based on measured condition." },
      { title: "Safe handling", body: "Compliant transport, installation and recycling." },
    ],
    products: [
      {
        name: "Yuasa VRLA Battery",
        description:
          "Valve-regulated lead-acid battery block for standby and UPS duty. Placeholder product copy.",
        image: batteryImage,
        specs: [
          { label: "Chemistry", value: "VRLA / AGM" },
          { label: "Duty", value: "Standby" },
          { label: "Mounting", value: "Rack or cabinet" },
          { label: "Application", value: "UPS battery strings" },
        ],
      },
    ],
  },
  {
    slug: "fiamm",
    name: "FIAMM",
    wordmark: "FIAMM",
    category: "Industrial Batteries",
    tagline: "Industrial battery technology for demanding installations.",
    description:
      "FIAMM produces industrial batteries used in telecoms, UPS and energy storage applications. Placeholder description pending confirmed brand copy.",
    partnership:
      "Electrosys sources FIAMM batteries for replacement programmes and new installations. Partnership details to be confirmed with the client.",
    solutions: [
      { title: "Telecom & UPS", body: "Battery blocks suited to long standby cycles." },
      { title: "Condition testing", body: "Periodic testing to verify string health." },
      { title: "Planned renewal", body: "Phased replacement to avoid unplanned downtime." },
    ],
    products: [
      {
        name: "FIAMM Standby Battery",
        description:
          "Sealed industrial battery for standby power installations. Placeholder product copy.",
        image: batteryImage,
        specs: [
          { label: "Chemistry", value: "Lead-acid" },
          { label: "Duty", value: "Standby / float" },
          { label: "Mounting", value: "Rack or tier stand" },
          { label: "Application", value: "UPS & telecom" },
        ],
      },
    ],
  },
  {
    slug: "franklin-electric",
    name: "Franklin Electric",
    wordmark: "FRANKLIN",
    category: "Power Systems",
    tagline: "Engineered systems for water and power applications.",
    description:
      "Franklin Electric manufactures motors, drives and control systems used across water and industrial applications. Placeholder description pending confirmed brand copy.",
    partnership:
      "Electrosys supplies Franklin Electric equipment alongside our power solution services. Partnership details to be confirmed with the client.",
    solutions: [
      { title: "Motors & drives", body: "Equipment selection matched to the duty profile." },
      { title: "Control systems", body: "Protection and control for pumping installations." },
      { title: "Support", body: "Assistance with commissioning and spares." },
    ],
    products: [
      {
        name: "Franklin Electric Control System",
        description:
          "Control and protection equipment for motor and pumping applications. Placeholder product copy.",
        image: upsImage,
        specs: [
          { label: "Type", value: "Control & protection" },
          { label: "Mounting", value: "Panel" },
          { label: "Application", value: "Water & industrial" },
          { label: "Support", value: "Supply and commissioning" },
        ],
      },
    ],
  },
];

export function getBrand(slug: string) {
  return brands.find((b) => b.slug === slug);
}

export function relatedBrands(slug: string, count = 3) {
  return brands.filter((b) => b.slug !== slug).slice(0, count);
}
