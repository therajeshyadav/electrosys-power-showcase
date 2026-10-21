import {
  ShieldCheck,
  Zap,
  Server,
  Activity,
  Layers,
  Cpu,
  RefreshCw,
  Award,
  Settings,
  Flame,
  Radio,
  BatteryCharging,
} from "lucide-react";

export const companyStats = [
  {
    value: "30+",
    label: "Years Experience",
    sublabel: "In electrical safety & power resilience",
  },
  {
    value: "3k+",
    label: "UPS Systems Installed",
    sublabel: "Under active lifecycle support",
  },
  {
    value: "Pan-India",
    label: "Service Network",
    sublabel: "In-house consultancy, design & engineering",
  },
  {
    value: "99.99%",
    label: "Uptime Focus",
    sublabel: "High-dependency environment support",
  },
];

export const whyTrustPoints = [
  {
    title: "30 Years’ Experience",
    body: "Over three decades of specialized engineering leadership in electrical safety and power resilience.",
  },
  {
    title: "3k+ Systems Installed",
    body: "More than 3,000 UPS systems actively installed, monitored, and maintained under complete lifecycle support.",
  },
  {
    title: "Pan India-Wide Support",
    body: "Nationwide in-house consultancy, design, engineering, and rapid on-site service support.",
  },
  {
    title: "High-Dependency Expertise",
    body: "Proven performance in highly regulated, mission-critical environments where downtime is not an option.",
  },
  {
    title: "Tailored UPS Solutions",
    body: "Systems precisely sized and configured around site constraints, operational loads, and autonomy needs.",
  },
  {
    title: "Long-Term Partnership",
    body: "Focused on proactive lifecycle care, preventive servicing, and predictable long-term uptime.",
  },
];

export const mainUpsBenefits = [
  {
    title: "Provides Battery Backup",
    description:
      "Instantaneous, seamless power transfer during mains failure to prevent downtime and keep operations running.",
    icon: BatteryCharging,
  },
  {
    title: "Safeguards Valuable Data",
    description:
      "Prevents database corruption, server crashes, and unsaved file loss during abrupt utility outages.",
    icon: Server,
  },
  {
    title: "Keeps Equipment Online",
    description:
      "Ensures continuous operation of critical IT, medical, industrial, and communication hardware.",
    icon: Activity,
  },
  {
    title: "Protects from Surges & Spikes",
    description:
      "Filters harmful transient voltages, lightning spikes, and electrical noise from reaching sensitive loads.",
    icon: ShieldCheck,
  },
  {
    title: "Offers Clean & Stable Power",
    description:
      "Delivers pure, regulated sine wave output with constant voltage and frequency stabilization.",
    icon: Zap,
  },
];

export const engineeredPackages = [
  {
    title: "Pure Lead & High Temperature Batteries",
    description:
      "Tolerant battery solutions engineered for demanding industrial ambient conditions.",
    icon: Flame,
  },
  {
    title: "Regenerative Load Systems",
    description:
      "Specialized UPS configurations designed to safely cater for regenerative loads like lifts & elevators.",
    icon: RefreshCw,
  },
  {
    title: "Galvanic Isolation Transformers",
    description:
      "Traditional transformer-based solutions providing true electrical isolation and noise rejection.",
    icon: Layers,
  },
  {
    title: "External Isolation Transformers",
    description:
      "For neutral reference, voltage step-up/step-down, and extended galvanic protection.",
    icon: Zap,
  },
  {
    title: "PCB Conformal Coating & Filters",
    description:
      "Protective coating and air filter options for dusty, humid, or corrosive environments.",
    icon: Cpu,
  },
  {
    title: "Bypass Panels, ATS, STS & LV Switchgear",
    description:
      "Seamless static transfer switches, automatic changeovers, and synchronized bypass systems.",
    icon: Settings,
  },
  {
    title: "Battery Cell Management & Monitoring",
    description: "Continuous impedance, voltage, and temperature monitoring per individual cell.",
    icon: Activity,
  },
  {
    title: "SNMP & MODBUS Communication Protocols",
    description:
      "Smart remote telemetry and BMS integration for real-time monitoring and alert notification.",
    icon: Radio,
  },
  {
    title: "Customizable Maintenance Agreements",
    description:
      "Tailored AMC contracts structured around your specific application, site criticality, and budget.",
    icon: Award,
  },
];

export const upsFaqs = [
  {
    question: "What Is a UPS?",
    answer:
      "UPS, which stands for Uninterruptible Power Supply, provides power for equipment to safely shut down during a power outage. It works like a back-up power source, which converts utility power from AC to DC and provides DC current to the battery for storage. When utility power fails, power stored in the battery is discharged to supply the connected equipment. The uninterruptible power supply guards your equipment and protects against unexpected power outages that could cause serious business disruption or data loss.",
  },
  {
    question: "What does Online UPS mean?",
    answer:
      "Online UPS (Double Conversion UPS) guarantees your equipment continuous, zero-interruption power. It constantly converts AC power to DC and back to pure AC sine wave, completely isolating connected loads and solving power problems such as black-outs, voltage sags, power drops, and surges. If your UPS is paired with adequate battery capacity, it keeps running seamlessly until mains power is restored. We offer customized solutions with backup time ranging from minutes to hours.",
  },
  {
    question: "How long does an uninterrupted power supply last?",
    answer:
      "UPS backup duration depends on the connected load power (kW) and the battery capacity (VAH) configured with the system. As an engineered solution provider, Electrosys sizes and supplies custom battery banks to deliver runtime anywhere from a few minutes up to multiple hours. For custom load sizing and battery calculations, contact our technical team at sales@electrosys.in.",
  },
];
