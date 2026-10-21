import upsImage from "@/assets/product-ups.jpg";
import batteryImage from "@/assets/product-battery.jpg";

export type BrandProduct = {
  name: string;
  description: string;
  image: string;
  capacity?: string;
  specs: { label: string; value: string }[];
};

export type Brand = {
  slug: string;
  name: string;
  shortName: string;
  category: "UPS Systems" | "Industrial Batteries";
  tagline: string;
  description: string;
  partnershipTitle: string;
  partnershipBody: string;
  partnershipPoints: string[];
  solutions: string[];
  products: BrandProduct[];
};

export const brands: Brand[] = [
  // --- UPS SYSTEMS (8 Brands) ---
  {
    slug: "vertiv-ups",
    name: "Vertiv UPS",
    shortName: "Vertiv",
    category: "UPS Systems",
    tagline: "Reliable Backup Power for Critical IT Systems",
    description:
      "Vertiv offers advanced UPS technologies designed to ensure continuous power and optimal performance for vital IT infrastructure, from small network closets to large-scale data centres. Their comprehensive solutions help enhance system uptime and provide robust protection for servers, storage, and networking equipment. Vertiv's UPS products are engineered for reliability, efficiency, and easy integration across diverse IT environments.",
    partnershipTitle: "Electrosys & Vertiv Partnership",
    partnershipBody:
      "At Electrosys, we supply, install, and support Vertiv's complete range of UPS systems. With in-depth technical knowledge and hands-on experience, our team is well-equipped to recommend tailored solutions that meet specific client requirements. Vertiv is recognised for its excellence in the following areas:",
    partnershipPoints: [
      "High-performance power systems for mission-critical applications",
      "Intelligent thermal management solutions",
      "Customisable IT racks and enclosures",
      "Advanced monitoring and control platforms",
    ],
    solutions: [
      "Critical Power",
      "Thermal Management",
      "Racks & Enclosures",
      "Monitoring & Management",
    ],
    products: [
      {
        name: "Liebert® GXT5",
        description:
          "The Liebert® GXT5 from Vertiv is a high-efficiency, online double-conversion UPS designed to safeguard sensitive electronics from power disturbances. This versatile system is ideal for both edge and core network applications, offering flexible deployment in rack or tower configurations. With the ability to extend battery life through optional external battery cabinets and enhanced remote monitoring capabilities, the GXT5 is a dependable solution for ensuring continuous power in mission-critical environments.",
        image: upsImage,
        capacity: "Capacity range: 750 VA – 20 kVA",
        specs: [
          { label: "Topology", value: "Online double conversion" },
          { label: "Form factor", value: "Rack / Tower convertible" },
          { label: "Phase", value: "Single phase / Three phase input" },
          { label: "Power Factor", value: "Unity (1.0 PF)" },
        ],
      },
      {
        name: "Liebert® EXS 3-Phase UPS",
        description:
          "Integrated high-density three-phase power protection with internal batteries and compact footprint, providing unmatched reliability for medical and industrial processing.",
        image: upsImage,
        capacity: "Capacity range: 10 kVA – 80 kVA",
        specs: [
          { label: "Topology", value: "Transformer-free Online" },
          { label: "Efficiency", value: "Up to 96.2% in double conversion" },
          { label: "Phase", value: "3 Phase In / 3 Phase Out" },
          { label: "Application", value: "Facility & Data Centre" },
        ],
      },
    ],
  },
  {
    slug: "riello-ups",
    name: "Riello UPS",
    shortName: "Riello",
    category: "UPS Systems",
    tagline: "Efficient Uninterruptible Power for Continuous Business Resilience",
    description:
      "Riello UPS provides state-of-the-art power protection designed for energy efficiency, smart grid resilience, and versatile commercial application.",
    partnershipTitle: "Electrosys & Riello UPS Partnership",
    partnershipBody:
      "Electrosys supplies, integrates, and maintains the full suite of Riello UPS installations across India, delivering custom backup runtimes and responsive service support.",
    partnershipPoints: [
      "Smart active eco-operating modes",
      "High power density with modular scalability",
      "Advanced battery care and temperature compensation",
      "Comprehensive warranty and factory-backed support",
    ],
    solutions: [
      "Data Centres & Server Rooms",
      "Commercial Offices & Building Management",
      "Industrial & Manufacturing Continuity",
      "Emergency Power & Lighting",
    ],
    products: [
      {
        name: "Riello Sentinel Dual (SDU)",
        description:
          "High power density online double-conversion UPS for critical network servers, telecom hardware, and medical facilities.",
        image: upsImage,
        capacity: "Capacity range: 4 kVA – 10 kVA",
        specs: [
          { label: "Topology", value: "Online double conversion" },
          { label: "Form Factor", value: "Rack / Tower convertible" },
          { label: "Output PF", value: "1.0 Power Factor" },
        ],
      },
    ],
  },
  {
    slug: "apc-ups",
    name: "APC by Schneider Electric",
    shortName: "APC",
    category: "UPS Systems",
    tagline: "Industry-Standard Power Protection & Edge Computing Infrastructure",
    description:
      "APC by Schneider Electric is a global standard for IT room, edge computing, and data infrastructure power protection and smart remote management.",
    partnershipTitle: "Electrosys & APC Partnership",
    partnershipBody:
      "We engineer APC Smart-UPS and Symmetra architectures with precision sizing, battery modules, and EcoStruxure remote monitoring.",
    partnershipPoints: [
      "Smart-UPS on-line double conversion",
      "EcoStruxure cloud-connected fleet management",
      "Hot-swappable user-replaceable battery cartridges",
      "Pre-tested power distribution units and rack integration",
    ],
    solutions: [
      "Edge Computing & Micro Data Centres",
      "Enterprise Server Rooms",
      "Network Distribution Closets",
      "Industrial Control Rooms",
    ],
    products: [
      {
        name: "APC Smart-UPS On-Line SRT",
        description:
          "High density, true double-conversion on-line power protection for servers, voice/data networks, and medical labs.",
        image: upsImage,
        capacity: "Capacity range: 1 kVA – 20 kVA",
        specs: [
          { label: "Topology", value: "Double Conversion On-Line" },
          { label: "Management", value: "Embedded Network Management Card" },
          { label: "Battery", value: "Scalable runtime with external packs" },
        ],
      },
    ],
  },
  {
    slug: "eaton-ups",
    name: "Eaton",
    shortName: "Eaton",
    category: "UPS Systems",
    tagline: "Powering Business Worldwide with Intelligent Power Management",
    description:
      "Eaton delivers leading power management solutions that increase energy efficiency, enhance reliability, and protect against power disruptions.",
    partnershipTitle: "Electrosys & Eaton Partnership",
    partnershipBody:
      "We design and deploy Eaton 93PM, 9395, and 9SX ranges with full integration, harmonic mitigation, and AMC servicing.",
    partnershipPoints: [
      "Energy Saver System (ESS) technology with 99% efficiency",
      "HotSync patented load sharing without communication wiring",
      "Advanced Battery Management (ABM) extending cell life by 50%",
      "Cybersecurity-certified network cards",
    ],
    solutions: [
      "Cloud & Colocation Data Centers",
      "Industrial Automation & Robotics",
      "Healthcare Power & Imaging",
      "Financial Institutions",
    ],
    products: [
      {
        name: "Eaton 9SX / 9PX Double Conversion UPS",
        description:
          "High performance online double-conversion UPS with advanced LCD interface and Energy Star compliance.",
        image: upsImage,
        capacity: "Capacity range: 1 kVA – 22 kVA",
        specs: [
          { label: "Efficiency", value: "Up to 95% in online mode" },
          { label: "Battery", value: "ABM technology" },
        ],
      },
    ],
  },
  {
    slug: "socomec-ups",
    name: "Socomec",
    shortName: "Socomec",
    category: "UPS Systems",
    tagline: "Innovative Power Solutions & High-Availability Switching",
    description:
      "Socomec is a European specialist in low voltage electrical networks, static transfer switches, and high-availability modular UPS systems.",
    partnershipTitle: "Electrosys & Socomec Partnership",
    partnershipBody:
      "Electrosys integrates Socomec UPS systems, STS static switches, and energy measurement devices across enterprise facilities.",
    partnershipPoints: [
      "MODULYS modular 3-phase UPS with zero downtime upgrade",
      "Statys high-speed static transfer switches",
      "DIRIS smart power monitoring integration",
      "Certified performance for critical healthcare & transport",
    ],
    solutions: [
      "Hospitals & Healthcare Facilities",
      "Data Centers & Cloud Infrastructure",
      "Airport & Rail Transportation Hubs",
      "Industrial & Pharmaceutical Clean Rooms",
    ],
    products: [
      {
        name: "Socomec MODULYS GP 3-Phase UPS",
        description:
          "Fully redundant, scalable modular online UPS designed for zero-risk maintenance and seamless power growth.",
        image: upsImage,
        capacity: "Capacity range: 25 kVA – 600 kVA",
        specs: [
          { label: "Architecture", value: "True Modular 3-Phase" },
          { label: "Redundancy", value: "N+1 / N+X hot-swap" },
        ],
      },
    ],
  },
  {
    slug: "delta-ups",
    name: "Delta",
    shortName: "Delta",
    category: "UPS Systems",
    tagline: "Intelligent, Modular & High-Efficiency Power Solutions",
    description:
      "Delta Electronics is a global leader in power and thermal management solutions, offering high-performance Amplon, Ultron, and Modulon UPS systems with leading electrical efficiency and modular scalability.",
    partnershipTitle: "Electrosys & Delta Partnership",
    partnershipBody:
      "Electrosys configures, deploys, and services Delta's entire family of single-phase and three-phase UPS systems for data centers, telecommunications, and industrial automation.",
    partnershipPoints: [
      "High AC-AC efficiency up to 96% and ECO mode up to 99%",
      "Modulon three-phase modular architecture with hot-swappable power modules",
      "Advanced DSP control and high input power factor (>0.99)",
      "Built-in maintenance bypass and intelligent battery management",
    ],
    solutions: [
      "Mission-Critical Data Centers",
      "Industrial Automation & Robotics",
      "Telecom & Edge Facilities",
      "Healthcare & Diagnostics",
    ],
    products: [
      {
        name: "Delta Ultron HPH / DPS Series 3-Phase UPS",
        description:
          "High-efficiency online double-conversion UPS delivering reliable power protection and low total cost of ownership for commercial and industrial facilities.",
        image: upsImage,
        capacity: "Capacity range: 20 kVA – 500 kVA",
        specs: [
          { label: "Topology", value: "Online Double Conversion" },
          { label: "Efficiency", value: "Up to 96% AC-AC" },
        ],
      },
    ],
  },
  {
    slug: "hitachi-ups",
    name: "Hitachi",
    shortName: "Hitachi",
    category: "UPS Systems",
    tagline: "Pioneering Industrial Power Electronics & Critical UPS Systems",
    description:
      "Hitachi Hi-Rel Power Electronics brings decades of engineering excellence in industrial and enterprise UPS systems, manufactured to rigorous Japanese quality standards.",
    partnershipTitle: "Electrosys & Hitachi Partnership",
    partnershipBody:
      "We supply, commission, and maintain Hitachi's industrial-grade i4 and enterprise i6 UPS series for heavy manufacturing, power utilities, and mission-critical enterprise hubs.",
    partnershipPoints: [
      "Robust transformer-based and transformerless industrial architectures",
      "High fault-clearing capability for rugged industrial grid environments",
      "Advanced digital signal processors (DSP) with IGBT PWM technology",
      "Extensive diagnostics, harmonic control, and SCADA connectivity",
    ],
    solutions: [
      "Heavy Manufacturing & Steel",
      "Oil, Gas & Petrochemical Plants",
      "Banking & Enterprise Data Hubs",
      "Process Automation",
    ],
    products: [
      {
        name: "Hitachi i6 Series Online UPS",
        description:
          "Enterprise grade high-availability online double conversion UPS engineered for maximum reliability in mission-critical applications.",
        image: upsImage,
        capacity: "Capacity range: 10 kVA – 400 kVA",
        specs: [
          { label: "Technology", value: "IGBT PWM with DSP Control" },
          { label: "Overload Capability", value: "150% for 1 minute" },
        ],
      },
    ],
  },

  // --- INDUSTRIAL BATTERY BRANDS ---
  {
    slug: "fiamm",
    name: "FIAMM",
    shortName: "FIAMM",
    category: "Industrial Batteries",
    tagline: "Your World, Our Energy — Industrial Battery Systems",
    description:
      "FIAMM Energy Technology is a global manufacturer of reserve power batteries, VRLA AGM, and Gel batteries engineered for standby reliability.",
    partnershipTitle: "Electrosys & FIAMM Partnership",
    partnershipBody:
      "Electrosys supplies, tests, installs, and recycles authentic FIAMM industrial battery strings for UPS, telecom, and utility networks.",
    partnershipPoints: [
      "FLB and FGL high rate discharge series",
      "Long design life with flame retardant casings",
      "Deep discharge recovery capability",
      "Full compliance with international battery standards",
    ],
    solutions: [
      "UPS Standby Power Banks",
      "Telecom Transmission Towers",
      "Substation DC Systems",
      "Emergency Lighting & Safety Systems",
    ],
    products: [
      {
        name: "FIAMM FLB High Rate VRLA Battery",
        description:
          "Valve-regulated lead-acid battery engineered specifically for high rate discharge UPS applications with compact footprint.",
        image: batteryImage,
        capacity: "Capacity: 12V 26Ah – 200Ah",
        specs: [
          { label: "Technology", value: "AGM VRLA" },
          { label: "Design Life", value: "10-12 Years Eurobat" },
        ],
      },
    ],
  },
  {
    slug: "csb-battery",
    name: "CSB Battery",
    shortName: "CSB",
    category: "Industrial Batteries",
    tagline: "Leading Manufacturer of High-Rate UPS Standby Batteries",
    description:
      "CSB Energy Technology is a world-renowned specialist in high-rate discharge VRLA batteries engineered specifically for modern UPS applications.",
    partnershipTitle: "Electrosys & CSB Battery Partnership",
    partnershipBody:
      "Electrosys supplies authentic CSB HRL and UPS series batteries, providing rigorous impedance verification and lifecycle replacement.",
    partnershipPoints: [
      "Optimized for high-wattage power output in short duration discharge",
      "High energy density reducing cabinet footprint",
      "ISO 9001 and ISO 14001 certified production",
      "Extended service life under controlled float conditions",
    ],
    solutions: [
      "High-Density UPS Systems",
      "Financial Data Centers",
      "Medical Diagnostics & Imaging",
      "Telecommunication Hubs",
    ],
    products: [
      {
        name: "CSB HRL High Rate Long Life Series",
        description:
          "Specially designed for high efficient discharge application with 20% higher energy density than standard batteries.",
        image: batteryImage,
        capacity: "Capacity: 12V High Rate Watts/Cell",
        specs: [
          { label: "Design Life", value: "10 Years Standby" },
          { label: "Technology", value: "Absorbent Glass Mat (AGM)" },
        ],
      },
    ],
  },
  {
    slug: "narada",
    name: "MP Narada",
    shortName: "Narada",
    category: "Industrial Batteries",
    tagline: "Advanced Lithium & Lead Carbon Energy Storage Solutions",
    description:
      "Narada is an international pioneer in stored energy solutions, specializing in high-performance VRLA, Lead Carbon, and Lithium-ion battery systems.",
    partnershipTitle: "Electrosys & Narada Partnership",
    partnershipBody:
      "Electrosys supplies Narada high-rate VRLA and advanced Lithium-ion battery racks with integrated BMS telemetry for modern UPS systems.",
    partnershipPoints: [
      "Advanced Lead-Carbon and Lithium Iron Phosphate (LiFePO4) chemistries",
      "High cycle life and rapid recharge capability",
      "Front access terminals for streamlined maintenance",
      "Wide operating temperature range tolerance",
    ],
    solutions: [
      "Modern Edge & Core Data Centers",
      "Telecom Towers & Micro-grid Sites",
      "Renewable Energy & Battery Storage",
      "Industrial Heavy Process Standby",
    ],
    products: [
      {
        name: "Narada High Rate UPS Series",
        description:
          "Advanced VRLA battery modules offering exceptional high-current discharge efficiency and compact spatial design.",
        image: batteryImage,
        capacity: "Capacity: 12V 50Ah – 200Ah",
        specs: [
          { label: "Terminal", value: "Front Access / Top Terminal" },
          { label: "Technology", value: "VRLA Lead-Acid" },
        ],
      },
    ],
  },
  {
    slug: "rblti",
    name: "RBLTI",
    shortName: "RBLTI",
    category: "Industrial Batteries",
    tagline: "Industrial Battery & Stored Energy Solutions",
    description:
      "RBLTI provides specialized industrial battery cells and heavy-duty standby power solutions designed for rigorous operating demands.",
    partnershipTitle: "Electrosys & RBLTI Partnership",
    partnershipBody:
      "We integrate RBLTI battery banks into commercial, industrial, and infrastructure power protection schemes with full lifecycle testing.",
    partnershipPoints: [
      "Engineered for deep resilience and cyclical endurance",
      "Heavy-duty plate construction",
      "Optimized for high-vibration and industrial ambient profiles",
      "Comprehensive warranty support",
    ],
    solutions: [
      "Industrial Plant Controls",
      "Utility & Switchgear Standby",
      "Emergency Power Systems",
      "Commercial UPS Installations",
    ],
    products: [
      {
        name: "RBLTI Industrial Standby Battery",
        description:
          "Robust lead-acid and AGM battery blocks built for dependable standby power across commercial and industrial environments.",
        image: batteryImage,
        capacity: "Capacity tailored to site requirements",
        specs: [
          { label: "Duty", value: "Continuous Float Standby" },
          { label: "Mounting", value: "Cabinet / Tier Stand" },
        ],
      },
    ],
  },
  {
    slug: "franklin-electric",
    name: "Franklin Electric",
    shortName: "Franklin Electric",
    category: "Industrial Batteries",
    tagline: "Grid Solutions & Battery Monitoring Intelligence",
    description:
      "Franklin Electric Grid Solutions manufactures industry-leading battery monitoring, testing, and intelligence systems for critical power infrastructure.",
    partnershipTitle: "Electrosys & Franklin Electric Partnership",
    partnershipBody:
      "Electrosys installs Franklin Electric cell management systems and handheld testers to ensure predictive battery health monitoring.",
    partnershipPoints: [
      "Cellwatch continuous battery monitoring systems",
      "Handheld conductance testers and diagnostic meters",
      "Early detection of failing individual cells",
      "Automated alarm notifications and data logging",
    ],
    solutions: [
      "Continuous Battery Health Monitoring",
      "Data Center Battery Room Compliance",
      "Utility Substation DC Monitoring",
      "Preventive Maintenance Telemetry",
    ],
    products: [
      {
        name: "Franklin Electric Battery Monitoring System",
        description:
          "Automated on-line battery monitoring solution delivering real-time internal resistance, voltage, and temperature data per cell.",
        image: batteryImage,
        capacity: "Modular monitoring for 12V to 480V DC banks",
        specs: [
          { label: "Measurement", value: "Impedance, Voltage, Temperature" },
          { label: "Connectivity", value: "MODBUS, SNMP, Ethernet" },
        ],
      },
    ],
  },
  {
    slug: "amaron-quanta",
    name: "Amaron Quanta",
    shortName: "Amaron",
    category: "Industrial Batteries",
    tagline: "The Benchmark for Industrial VRLA UPS Batteries in India",
    description:
      "Manufactured by Amara Raja Batteries with advanced technology from Johnson Controls, Amaron Quanta is India's leading standby VRLA battery for enterprise UPS systems.",
    partnershipTitle: "Electrosys & Amaron Quanta Partnership",
    partnershipBody:
      "Electrosys supplies factory-fresh Amaron Quanta 12V VRLA battery banks with complete impedance testing, custom battery racks, and pan-India replacement programs.",
    partnershipPoints: [
      "Patented heavy-duty Radgrid alloy technology for superior corrosion resistance",
      "Specialized Instacharge paste formulation for rapid recovery from deep discharge",
      "Explosion-resistant self-resealing safety valve design",
      "Proven performance in high-ambient temperature Indian operating conditions",
    ],
    solutions: [
      "Enterprise UPS Backup Banks",
      "Data Centers & IT Hubs",
      "Banking & ATM Infrastructure",
      "Emergency Lighting & Power",
    ],
    products: [
      {
        name: "Amaron Quanta 12V Industrial VRLA Series",
        description:
          "High-rate, long-life sealed maintenance-free lead acid battery engineered with Radgrid technology for uninterrupted UPS runtime.",
        image: batteryImage,
        capacity: "Capacity: 12V 7Ah – 200Ah",
        specs: [
          { label: "Technology", value: "Radgrid AGM VRLA" },
          { label: "Design Life", value: "High Float Life" },
        ],
      },
    ],
  },
  {
    slug: "exide-battery",
    name: "Exide Powersafe",
    shortName: "Exide",
    category: "Industrial Batteries",
    tagline: "India's Trusted Pioneer in Sealed Maintenance-Free Power Storage",
    description:
      "Exide Powersafe NXT is India's premier sealed maintenance-free lead-acid battery range, engineered for demanding deep-cyclic and standby float applications in mission-critical facilities.",
    partnershipTitle: "Electrosys & Exide Partnership",
    partnershipBody:
      "We deliver turnkey Exide Powersafe NXT battery installations, routine impedance audits, interlink torque audits, and eco-certified battery recycling.",
    partnershipPoints: [
      "Deep discharge recovery capability with robust thick-plate lead alloy",
      "Sealed maintenance-free AGM technology with zero electrolyte top-up",
      "Flame retardant PP-CP container options complying with UL standards",
      "Nationwide manufacturing and warranty support backbones",
    ],
    solutions: [
      "Continuous UPS Standby",
      "Process Automation Plants",
      "Hospitals & Healthcare Equipment",
      "Telecommunication Networks",
    ],
    products: [
      {
        name: "Exide Powersafe NXT Plus Series",
        description:
          "Sealed maintenance-free VRLA battery featuring deep discharge capability and enhanced reliability for corporate and industrial power systems.",
        image: batteryImage,
        capacity: "Capacity: 12V 26Ah – 200Ah",
        specs: [
          { label: "Technology", value: "AGM VRLA Deep Cycle" },
          { label: "Container", value: "Flame Retardant Option" },
        ],
      },
    ],
  },
  {
    slug: "rocket-battery",
    name: "Rocket Battery",
    shortName: "Rocket",
    category: "Industrial Batteries",
    tagline: "High-Rate Discharge Sealed VRLA Batteries for UPS Applications",
    description:
      "Manufactured by Sebang Global Battery, Rocket batteries are globally recognized for top-tier reliability, high-density plate construction, and durable standby service in critical environments.",
    partnershipTitle: "Electrosys & Rocket Battery Partnership",
    partnershipBody:
      "Electrosys provisions authentic Rocket ES and ESC series VRLA batteries with factory warranty, string balancing, and preventive maintenance across India.",
    partnershipPoints: [
      "Optimized high-rate discharge performance for short-duration UPS runtimes",
      "Gas recombination efficiency exceeding 99%",
      "Heavy-duty lead-calcium-tin grids for minimal self-discharge",
      "Multi-positional operation with leak-proof construction",
    ],
    solutions: [
      "Data Center UPS Systems",
      "High-Density Server Rooms",
      "Security & Surveillance Systems",
      "Railway Signaling",
    ],
    products: [
      {
        name: "Rocket ES / ESC High-Rate VRLA Series",
        description:
          "Premier valve regulated lead acid battery designed for high energy discharge density and extended service life in critical UPS racks.",
        image: batteryImage,
        capacity: "Capacity: 12V 18Ah – 200Ah",
        specs: [
          { label: "Technology", value: "High-Rate VRLA AGM" },
          { label: "Self Discharge", value: "<3% per month" },
        ],
      },
    ],
  },
  {
    slug: "panasonic-battery",
    name: "Panasonic",
    shortName: "Panasonic",
    category: "Industrial Batteries",
    tagline: "Precision Japanese Engineering in Valve-Regulated Lead-Acid",
    description:
      "Panasonic Industrial VRLA batteries are celebrated worldwide for exceptional build quality, long standby life, and dependable discharge characteristics under critical load conditions.",
    partnershipTitle: "Electrosys & Panasonic Partnership",
    partnershipBody:
      "We provide genuine Panasonic LC series VRLA battery strings for mission-critical medical systems, aerospace, precision test labs, and emergency power systems.",
    partnershipPoints: [
      "Exceptional charge acceptance and high energy density",
      "Synthetic fiber separators with high acid retention",
      "UL94-HB and UL94 V-0 flame-retardant case options",
      "Extremely low self-discharge rate (<3% per month)",
    ],
    solutions: [
      "Critical Medical Equipment",
      "Precision Laboratory Instrumentation",
      "High-Reliability UPS Systems",
      "Emergency Power Systems",
    ],
    products: [
      {
        name: "Panasonic LC-P Series Industrial VRLA",
        description:
          "Japanese engineered long-life standby battery with flame retardant resin casing, specifically built for maximum UPS reliability.",
        image: batteryImage,
        capacity: "Capacity: 12V 24Ah – 200Ah",
        specs: [
          { label: "Technology", value: "Flame Retardant VRLA" },
          { label: "Origin", value: "Panasonic Quality Standard" },
        ],
      },
    ],
  },
  {
    slug: "hbl-battery",
    name: "HBL Power Systems",
    shortName: "HBL",
    category: "Industrial Batteries",
    tagline: "Engineered Battery Solutions for Defense, Telecom & Industrial UPS",
    description:
      "HBL Power Systems is a premier Indian manufacturer of specialized industrial batteries, including high-integrity VRLA, Tubular Gel, and Nickel-Cadmium systems for extreme environments.",
    partnershipTitle: "Electrosys & HBL Partnership",
    partnershipBody:
      "Electrosys engineers and integrates HBL VRLA and specialized battery systems for power utilities, railway traction, substations, and enterprise UPS facilities.",
    partnershipPoints: [
      "Heavy-duty industrial grid alloys engineered for demanding tropical climates",
      "High thermal stability and resistance to thermal runaway",
      "Compliant with rigorous RDSO, IEEE, and IEC performance standards",
      "Proven longevity in continuous utility and industrial applications",
    ],
    solutions: [
      "Power Substations & Utilities",
      "Industrial UPS & Switchgear",
      "Railway Traction & Signaling",
      "Telecom Exchanges",
    ],
    products: [
      {
        name: "HBL Triumph HP Series VRLA",
        description:
          "Heavy-duty valve regulated lead acid battery offering superior high-rate discharge efficiency and rugged durability in challenging grid conditions.",
        image: batteryImage,
        capacity: "Capacity: 12V 28Ah – 200Ah",
        specs: [
          { label: "Technology", value: "Heavy Duty High-Rate AGM" },
          { label: "Compliance", value: "RDSO / IEEE Compliant" },
        ],
      },
    ],
  },
];

export function getBrand(slug: string) {
  return brands.find((b) => b.slug === slug);
}

export function relatedBrands(slug: string, count = 5) {
  return brands.filter((b) => b.slug !== slug).slice(0, count);
}
