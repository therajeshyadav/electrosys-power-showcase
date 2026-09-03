import type { LucideIcon } from "lucide-react";
import {
  BatteryCharging,
  Headphones,
  PlugZap,
  Replace,
  ShieldCheck,
  Wrench,
  Lightbulb,
} from "lucide-react";
import installation from "@/assets/service-installation.jpg";
import battery from "@/assets/service-battery.jpg";
import maintenance from "@/assets/service-maintenance.jpg";
import support from "@/assets/service-support.jpg";

export type Service = {
  slug: string;
  name: string;
  short: string;
  description: string;
  image: string;
  icon: LucideIcon;
  points: string[];
};

export const services: Service[] = [
  {
    slug: "ups-installation",
    name: "UPS Installation",
    short: "Specification, supply and commissioning of UPS systems sized to your load.",
    description:
      "We plan and install uninterruptible power supply systems for offices, industrial sites and critical facilities — from single-phase rack units to three-phase installations. Placeholder copy pending final client information.",
    image: installation,
    icon: PlugZap,
    points: [
      "Site survey and load assessment",
      "System specification and sizing",
      "Installation and commissioning",
      "Handover documentation",
    ],
  },
  {
    slug: "ups-maintenance",
    name: "UPS Maintenance",
    short: "Scheduled servicing that keeps protection systems in a known-good state.",
    description:
      "Planned service visits, functional testing and reporting so your UPS estate stays dependable through its working life. Placeholder copy pending final client information.",
    image: maintenance,
    icon: Wrench,
    points: [
      "Scheduled service visits",
      "Functional and load testing",
      "Firmware and settings review",
      "Written condition reports",
    ],
  },
  {
    slug: "battery-services",
    name: "Battery Services",
    short: "Testing, monitoring and condition reporting for industrial battery banks.",
    description:
      "Battery strings age quietly. We test, measure and report so weak cells are identified before they affect autonomy. Placeholder copy pending final client information.",
    image: battery,
    icon: BatteryCharging,
    points: [
      "Impedance and voltage testing",
      "String condition reporting",
      "Autonomy verification",
      "Safe handling and disposal",
    ],
  },
  {
    slug: "battery-replacement",
    name: "Battery Replacement",
    short: "Like-for-like or upgraded battery replacement with minimal downtime.",
    description:
      "Supply and replacement of end-of-life batteries from trusted manufacturers, planned around your operating hours. Placeholder copy pending final client information.",
    image: battery,
    icon: Replace,
    points: [
      "Supply from partner manufacturers",
      "Planned out-of-hours changeover",
      "Post-replacement testing",
      "Recycling of removed units",
    ],
  },
  {
    slug: "technical-support",
    name: "Technical Support",
    short: "Direct access to engineers who know your installation.",
    description:
      "Responsive support for faults, alarms and configuration questions from people familiar with your equipment. Placeholder copy pending final client information.",
    image: support,
    icon: Headphones,
    points: [
      "Fault diagnosis and callouts",
      "Alarm and event interpretation",
      "Configuration assistance",
      "Spares and parts guidance",
    ],
  },
  {
    slug: "preventive-maintenance",
    name: "Preventive Maintenance",
    short: "Structured maintenance programmes that reduce unplanned interruptions.",
    description:
      "Agreed maintenance schedules built around your site, with inspection routines and clear records. Placeholder copy pending final client information.",
    image: maintenance,
    icon: ShieldCheck,
    points: [
      "Tailored maintenance schedule",
      "Inspection and cleaning routines",
      "Component wear tracking",
      "Recommendations and priorities",
    ],
  },
  {
    slug: "power-solution-support",
    name: "Power Solution Support",
    short: "Independent guidance on the right power protection for your site.",
    description:
      "Support and guidance on topology, redundancy, autonomy and product selection before you commit to a system. Placeholder copy pending final client information.",
    image: installation,
    icon: Lightbulb,
    points: [
      "Requirement and risk review",
      "Topology and redundancy options",
      "Product and brand selection",
      "Budget and phasing guidance",
    ],
  },
];
