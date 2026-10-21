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
  tagline: string;
  intro: string;
  whyMattersTitle: string;
  whyMattersText: string;
  suiteIntro: string;
  suiteItems: { name: string; desc: string }[];
  reviewTitle: string;
  reviewSubtitle: string;
  reviewChecklist: string[];
  ctaButtonText: string;
  image: string;
  icon: LucideIcon;
  col1Title: string;
  col1Body: string;
  col2Title: string;
  col2Body: string;
  actionTitle: string;
  actionIntro: string;
  actionDescription: string;
  metrics: { label: string; percent: number }[];
  // Backwards compatibility fields
  description: string;
  overview: string;
  points: string[];
  deliverables: { title: string; desc: string }[];
};

export const services: Service[] = [
  {
    slug: "ups-installation",
    name: "UPS Installation & Commissioning",
    short: "Specification, supply and turnkey commissioning sized to your mission-critical load.",
    tagline: "Avoid Assumptions. Engineer with Precision.",
    intro:
      "Proper installation is the foundation of a reliable UPS (Uninterruptible Power Supply) system. At Electrosys, we don't just place equipment and turn the switch on — we assess whether the system is sized, balanced, and integrated to perform flawlessly under real-world mains failures. Our engineering-led installation services are designed to eliminate hidden harmonics, phase imbalances, and load drop risks before your facility goes live.",
    whyMattersTitle: "Why Professional Installation Matters:",
    whyMattersText:
      "A UPS system is only as dependable as its initial electrical commissioning. Many commercial and industrial facilities suffer preventable downtime due to undersized neutral cabling, incorrect static bypass configuration, or improper battery string connection. Our installation and commissioning protocols give you verified, documented assurance of operational continuity.",
    suiteIntro:
      "UPS system installation and electrical commissioning are essential for ensuring personnel safety, load protection, and compliance with statutory electrical safety standards. We carry out a comprehensive suite of installation and testing services, including:",
    suiteItems: [
      {
        name: "System Performance Tests",
        desc: "Simulate utility mains failure to confirm correct inverter operation under full connected load.",
      },
      {
        name: "Battery Discharge Testing",
        desc: "Validate autonomy runtime and identify weak battery blocks before live cutover.",
      },
      {
        name: "Thermal Imaging",
        desc: "Detect heat-related issues such as loose terminations, busbar hotspots, or overloaded breakers.",
      },
      {
        name: "Ohmic & Harmonic Testing",
        desc: "Measure total harmonic distortion (THDi) and internal battery string resistance.",
      },
    ],
    reviewTitle: "Risk Assessment & Site Preparation",
    reviewSubtitle: "Evaluate your facility's power infrastructure prior to cutover.",
    reviewChecklist: [
      "General Information & Single Line Diagram Review",
      "Hazard Identification & Fault Level Calculation",
      "Risk Evaluation & Autonomy Sizing",
      "Engineering Recommendations & Cable Sizing",
      "Emergency Preparedness & Black Start Procedures",
      "Post-Commissioning Monitoring & Review",
    ],
    ctaButtonText: "REQUEST AN INSTALLATION SURVEY",
    col1Title: "Protection Planning",
    col1Body:
      "Through methodical site surveying and load profiling, you ensure your new UPS estate is matched to present demands and future expansion — eliminating costly emergency upgrades. If you are accountable for facility uptime, visual verification is insufficient. Our commissioning reports align with national safety standards and OEM guidelines, giving you a traceable audit trail essential for insurance and compliance.",
    col2Title: "The Full Solution.",
    col2Body:
      "In addition to turnkey UPS hardware supply and physical positioning, Electrosys provides switchgear modification, external maintenance bypass panels, load bank testing, and battery room ventilation guidance. Our full-capacity load bank testing validates system autonomy under 100% load without risking your live critical IT or production loads.",
    actionTitle: "Don't Wait for a Power Failure to Test Your System.",
    actionIntro:
      "Unexpected power outages and utility surges occur without warning. Professional commissioning prevents early infant mortality in semiconductors and avoids expensive downtime for your operations.",
    actionDescription:
      "Our certified engineers operate across India, offering scheduled out-of-hours installations to suit your business operating window. Every project is logged, tested, and handed over with complete technical documentation. Get in touch with Electrosys to schedule your site assessment.",
    metrics: [
      { label: "Client Satisfaction", percent: 100 },
      { label: "Product Knowledge", percent: 100 },
      { label: "Expert Support", percent: 100 },
    ],
    image: installation,
    icon: PlugZap,
    description:
      "We plan, size, and install uninterruptible power supply systems for commercial offices, data centres, healthcare facilities, and heavy industrial sites — ranging from single-phase rack-mount units to large-scale three-phase paralleled systems.",
    overview:
      "A successful UPS installation begins long before hardware arrives on-site. Our engineering team conducts thorough electrical load profiling, harmonic analysis, and cable routing assessments to ensure seamless commissioning without power interruptions.",
    points: [
      "Site survey and harmonic load assessment",
      "System specification, topology sizing & autonomy calculations",
      "LV switchgear, bypass panel & cabling installation",
      "Commissioning, full-load bank testing & handover documentation",
    ],
    deliverables: [
      {
        title: "Site & Load Survey",
        desc: "Measurement of actual inrush currents, power factors, and phase balance before recommending equipment.",
      },
      {
        title: "Turnkey Installation",
        desc: "Certified electrical installation adhering strictly to national safety codes and manufacturer standards.",
      },
      {
        title: "Load Bank Testing",
        desc: "Full-capacity load bank testing to verify thermal behavior, inverter stability, and battery runtime prior to live cutover.",
      },
      {
        title: "Handover & Training",
        desc: "Comprehensive operations manual, single-line diagrams, and on-site staff operational training.",
      },
    ],
  },
  {
    slug: "ups-maintenance",
    name: "UPS Maintenance & Servicing",
    short:
      "Scheduled servicing that keeps protection systems in a verified, known-good operating state.",
    tagline: "Avoid Assumptions. Service with Certainty.",
    intro:
      "Routine servicing is the cornerstone of uninterrupted uptime. At Electrosys, we don't simply perform superficial visual inspections — we stress-test internal components, DC capacitor health, and cooling subsystems under working conditions. Our preventive UPS maintenance protocols identify thermal hot spots, component drift, and impending inverter failures before they disrupt operations.",
    whyMattersTitle: "Why Preventive Maintenance Matters:",
    whyMattersText:
      "A UPS system is only as good as its last verified service inspection. Internal electrolytic capacitors dry out, cooling fans degrade, and electrical connections loosen due to thermal cycling. Routine preventive servicing transforms unpredictable breakdowns into planned, budgetable component refreshes.",
    suiteIntro:
      "Scheduled UPS maintenance and diagnostic inspections are vital for business continuity and regulatory compliance. Electrosys delivers a complete suite of functional and preventative services, including:",
    suiteItems: [
      {
        name: "System Performance Tests",
        desc: "Simulate utility mains failure to confirm correct inverter operation under full load.",
      },
      {
        name: "Battery Discharge Testing",
        desc: "Validate runtime and identify failing UPS battery cells before mains failure occurs.",
      },
      {
        name: "Thermal Imaging",
        desc: "Detect heat-related issues such as loose connections or overloaded internal components.",
      },
      {
        name: "Ohmic & Impedance Testing",
        desc: "Measure internal resistance and conductance to accurately assess string health.",
      },
    ],
    reviewTitle: "Maintenance Audit & Condition Review",
    reviewSubtitle: "Evaluate your installed power protection assets against operational risk.",
    reviewChecklist: [
      "Equipment History & Operational Run Hours Log",
      "Hazard Identification & Loose Termination Scans",
      "Risk Evaluation & Autonomy Deterioration Tracking",
      "Engineering Recommendations & Component Replacement Plan",
      "Emergency Preparedness & Static Bypass Verification",
      "Monitoring, Telemetry & Firmware Status Review",
    ],
    ctaButtonText: "REQUEST A MAINTENANCE AUDIT",
    col1Title: "Protection Planning",
    col1Body:
      "Regular planned maintenance guarantees that your UPS will cleanly support critical loads during mains disturbances, shielding you from exorbitant emergency repair bills. Our standardized inspection reports align with statutory safety requirements and OEM servicing schedules, giving facility managers documented due diligence for business continuity audits and insurance underwriting.",
    col2Title: "The Full Solution.",
    col2Body:
      "Beyond routine quarterly and bi-annual servicing, Electrosys provides 24/7 emergency dispatch, genuine OEM spare parts replacement, and standalone load bank testing. Our preventive maintenance contracts (AMC) provide comprehensive component coverage so you never face surprise capital expenses during a breakdown.",
    actionTitle: "Don't Wait for a UPS Fault to Take Action.",
    actionIntro:
      "Many UPS failures occur without warning. Regular testing helps prevent downtime, data loss, and disruption to critical operations. By identifying early-stage degradation, you can avoid costly emergency callouts or complete system failure.",
    actionDescription:
      "Our technicians operate across India, offering flexible scheduling and out-of-hours testing to suit your operational demands. Every visit is logged, reported, and reviewed to ensure full transparency and traceability. Get in touch with Electrosys to book a UPS system test or arrange a risk assessment. We'll ensure your backup power is more than just a ticked box — it's ready when you need it.",
    metrics: [
      { label: "Client Satisfaction", percent: 100 },
      { label: "Product Knowledge", percent: 100 },
      { label: "Expert Support", percent: 100 },
    ],
    image: maintenance,
    icon: Wrench,
    description:
      "Planned service visits, functional component testing, thermal imaging, and reporting so your UPS estate stays dependable throughout its working operational life.",
    overview:
      "Even the highest quality UPS hardware degrades over time due to thermal stress, component aging, and dust accumulation. Our preventive maintenance agreements eliminate hidden failure modes before utility power fails.",
    points: [
      "Scheduled comprehensive service visits",
      "DC bus capacitor & fan health diagnostics",
      "Thermal infrared scanning of electrical terminations",
      "Firmware updates, calibration & detailed written condition reports",
    ],
    deliverables: [
      {
        title: "Infrared Thermography",
        desc: "Detection of hot spots, loose connections, and imbalanced loads across internal busbars and circuit breakers.",
      },
      {
        title: "Component Health Tracking",
        desc: "Inspection and proactive replacement scheduling for life-limited items like electrolytic capacitors and DC cooling fans.",
      },
      {
        title: "Calibration & Diagnostics",
        desc: "Verification of voltage references, static bypass transfer speed, and battery float charging precision.",
      },
      {
        title: "Written Audit Reports",
        desc: "Actionable engineering reports outlining current operating health, recommendations, and spare parts status.",
      },
    ],
  },
  {
    slug: "battery-services",
    name: "UPS & Battery Risk Assessments",
    short: "Testing, impedance monitoring, and condition reporting for industrial battery banks.",
    tagline: "Avoid Assumptions. Test with Certainty.",
    intro:
      "Routine testing is the foundation of a reliable UPS (Uninterruptible Power Supply) system. At Electrosys, we don't just check if your equipment switches on — we assess whether it's fit for purpose under real-world conditions. Our UPS system risk assessment services are designed to identify hidden faults, weak points, and potential failure risks before they threaten your business.",
    whyMattersTitle: "Why “Testing” Matters:",
    whyMattersText:
      "A UPS system is only as good as its last successful check. Many facilities rely on assumptions that their backup power will work when needed, but without proper testing, there's no real evidence. Our testing and risk assessments give you clear, actionable data on the actual condition of your UPS and batteries.",
    suiteIntro:
      "UPS System and Battery Risk Assessments are essential for ensuring electrical safety, continuity of operations, and compliance with health, safety, and environmental regulations. We carry out a full suite of functional and load testing services, including:",
    suiteItems: [
      {
        name: "System Performance Tests",
        desc: "Simulate mains failure to confirm correct operation under load.",
      },
      {
        name: "Battery Discharge Testing",
        desc: "Validate runtime and identify failing UPS batteries.",
      },
      {
        name: "Thermal Imaging",
        desc: "Detect heat-related issues such as loose connections or overloaded components.",
      },
      {
        name: "Ohmic Testing",
        desc: "Measure internal resistance to assess battery health.",
      },
    ],
    reviewTitle: "Risk Assessment & Compliance Review",
    reviewSubtitle: "Evaluate your UPS system against operational risk.",
    reviewChecklist: [
      "General Information",
      "Hazard Identification",
      "Risk Evaluation",
      "Recommendations",
      "Emergency Preparedness",
      "Monitoring & Review",
    ],
    ctaButtonText: "REQUEST A UPS OR BATTERY TEST",
    col1Title: "Protection Planning",
    col1Body:
      "Through regular assessments you can ensure your UPS system will function when you most need it, protecting you from unnecessary costs. If you're responsible for compliance, you need more than a visual check. Our assessments align with regulatory expectations, including statutory safety & industry standards. We help you demonstrate due diligence and build a traceable maintenance history — essential for audits, insurance, and business continuity planning.",
    col2Title: "The Full Solution.",
    col2Body:
      "In addition to our standard UPS risk assessment, we also provide UPS Maintenance, installations and removals along with UPS battery testing. Our load bank testing services provide information on a battery's autonomy and how your UPS batteries will perform under load without the risk to your critical equipment.",
    actionTitle: "Don't Wait for a UPS Fault to Take Action.",
    actionIntro:
      "Many UPS failures occur without warning. Regular testing helps prevent downtime, data loss, and disruption to critical operations. By identifying early-stage degradation, you can avoid costly emergency callouts or complete system failure.",
    actionDescription:
      "Our technicians operate across India, offering flexible scheduling and out-of-hours testing to suit your operational demands. Every visit is logged, reported, and reviewed to ensure full transparency and traceability. Get in touch with Electrosys to book a UPS system test or arrange a risk assessment. We'll ensure your backup power is more than just a ticked box — it's ready when you need it.",
    metrics: [
      { label: "Client Satisfaction", percent: 100 },
      { label: "Product Knowledge", percent: 100 },
      { label: "Expert Support", percent: 100 },
    ],
    image: battery,
    icon: BatteryCharging,
    description:
      "Battery strings age silently. We test internal impedance, string voltage, and float currents so deteriorating cells are identified and isolated before they compromise system autonomy.",
    overview:
      "The battery string is the single most vulnerable link in any standby power system. One faulty cell can bring down an entire high-voltage string. Our advanced impedance and conductance analysis guarantees predictable autonomy when an outage strikes.",
    points: [
      "Internal cell impedance & conductance testing",
      "Individual cell and overall string voltage analysis",
      "Thermal runaway inspection & torque auditing",
      "Safe handling, environmental disposal & recycling certificates",
    ],
    deliverables: [
      {
        title: "Cell-by-Cell Impedance Test",
        desc: "Testing internal ohmic values using calibrated diagnostic testers to detect drying or sulfation early.",
      },
      {
        title: "String Autonomy Verification",
        desc: "Calculating actual runtime capacity against current critical connected load demands.",
      },
      {
        title: "Torque & Connection Check",
        desc: "Re-torquing inter-tier cable and busbar connections to prevent resistive heating and fire hazards.",
      },
      {
        title: "Condition Trend Reporting",
        desc: "Historical performance tracking to forecast end-of-life timing accurately.",
      },
    ],
  },
  {
    slug: "battery-replacement",
    name: "Battery Replacement & Upgrades",
    short:
      "Like-for-like or upgraded battery replacement with minimal downtime and safe recycling.",
    tagline: "Avoid Assumptions. Upgrade with Confidence.",
    intro:
      "When industrial battery banks age past their reliable lifecycle, waiting for an outage to reveal cell failure is a catastrophic gamble. At Electrosys, we manage complete battery bank replacements using matched, fresh-stock cells from world-class manufacturers. Our certified engineers execute hot-swap or scheduled cutovers to guarantee uninterrupted business operations.",
    whyMattersTitle: "Why Timely Replacement Matters:",
    whyMattersText:
      "A failing battery cell inside a high-voltage string produces excess heat, risk of thermal runaway, and abrupt string collapse under load. Scheduled battery replacement restores full designed autonomy and protects expensive UPS internal rectifiers from sustained DC overcharging.",
    suiteIntro:
      "Industrial battery replacement requires rigorous safety compliance, precision torque assembly, and compliant recycling. Electrosys carries out complete replacement services, including:",
    suiteItems: [
      {
        name: "Pre-Installation String Audit",
        desc: "Verify DC breaker ratings, rack dimensions, and ambient ventilation suitability.",
      },
      {
        name: "Hot-Swap / Zero-Downtime Changeover",
        desc: "Parallel string transfers designed to keep your critical IT load fully online.",
      },
      {
        name: "Torque Auditing & Cable Replacements",
        desc: "All connections torqued to OEM specifications with anti-corrosion protection.",
      },
      {
        name: "Post-Installation Baseline Testing",
        desc: "Conductance, impedance, and float voltage benchmarks logged for long-term tracking.",
      },
    ],
    reviewTitle: "Battery Health & Lifecycle Assessment",
    reviewSubtitle: "Evaluate battery runtime and end-of-life timing.",
    reviewChecklist: [
      "OEM Cell Date Code & Manufacturing Traceability",
      "Inter-tier Cable Sizing & Mechanical Rack Integrity",
      "Environmental Room Temperature & Float Charge Calibration",
      "Battery Autonomy Calculation Under Peak Connected Load",
      "Hazmat Compliant Packaging & Transport Protocols",
      "Government-Approved Battery Recycling Documentation",
    ],
    ctaButtonText: "REQUEST A BATTERY REPLACEMENT QUOTE",
    col1Title: "Protection Planning",
    col1Body:
      "Proactive battery replacement eliminates surprise catastrophic drops during power outages. By planning string changeovers based on measured impedance data rather than guessing, you optimize capital expenditure and maintain guaranteed backup runtime for emergency generators and server rooms.",
    col2Title: "The Full Solution.",
    col2Body:
      "Electrosys supplies authentic battery blocks directly from premier manufacturers including Yuasa, Exide, FIAMM, Rocket, Amarón, and CSB. We provide end-to-end logistics, rack assembly, cable fabrication, commissioning, and certified lead-acid recycling in full compliance with environmental guidelines.",
    actionTitle: "Don't Wait for Battery Swelling to Take Action.",
    actionIntro:
      "Industrial VRLA batteries typically reach end-of-life between 3 to 5 years. Waiting until cells vent or swell creates severe fire risks and immediate downtime.",
    actionDescription:
      "Our power technicians operate nationwide, coordinating turnkey battery string swaps outside business hours. Every replacement includes full string balancing, charger calibration, and disposal certificates. Speak with our team today.",
    metrics: [
      { label: "Client Satisfaction", percent: 100 },
      { label: "Product Knowledge", percent: 100 },
      { label: "Expert Support", percent: 100 },
    ],
    image: battery,
    icon: Replace,
    description:
      "Supply, installation, and commissioning of new VRLA, AGM, or Lithium-ion battery strings from leading global manufacturers, scheduled around your operating hours.",
    overview:
      "When industrial battery strings reach their recommended service lifespan (typically 3–5 years for standard VRLA and 7–10 years for long-life series), our certified engineers manage complete replacement without interrupting your critical ongoing loads.",
    points: [
      "OEM supply from partner manufacturers (Yuasa, FIAMM, CSB, EnerSys)",
      "Planned out-of-hours & zero-downtime hot-swap changeover",
      "Post-replacement string balancing & charge verification",
      "Govt-approved eco-friendly recycling & disposal documentation",
    ],
    deliverables: [
      {
        title: "Matched String Supply",
        desc: "Fresh, factory-dated battery blocks with identical internal resistance characteristics for optimal string life.",
      },
      {
        title: "Hot-Swap Execution",
        desc: "Carefully planned temporary DC connections or bypass procedures to ensure zero interruption during changeover.",
      },
      {
        title: "Post-Installation Testing",
        desc: "Float voltage balancing, charge acceptance testing, and baseline impedance recording for future comparisons.",
      },
      {
        title: "Compliant Recycling",
        desc: "Safe transportation and recycling of spent lead-acid blocks in accordance with hazardous waste management guidelines.",
      },
    ],
  },
  {
    slug: "technical-support",
    name: "Technical Support & Emergency Callouts",
    short: "Direct 24/7 access to power engineers who know your equipment topology.",
    tagline: "Avoid Assumptions. Resolve with Urgency.",
    intro:
      "When an unexpected UPS alarm sounds, or a static bypass switch trips under severe electrical transients, you need immediate technical authority on the line. At Electrosys, you are connected directly to experienced senior power engineers rather than a generic call centre. We troubleshoot telemetry alarms, dispatch emergency field units, and safely restore your backup protection.",
    whyMattersTitle: "Why Dedicated Support Matters:",
    whyMattersText:
      "A power anomaly can cause internal semiconductor failures or trapped inverter faults that leave critical loads unprotected on raw mains. Direct access to engineers who have your site diagrams and topology records reduces Mean Time To Repair (MTTR) from hours to minutes.",
    suiteIntro:
      "Rapid response technical support is critical to safeguarding data centres, continuous manufacturing, and healthcare infrastructure. Electrosys delivers comprehensive support services, including:",
    suiteItems: [
      {
        name: "24/7 Rapid Emergency Dispatch",
        desc: "Guaranteed on-site response times backed by contracted Service Level Agreements (SLAs).",
      },
      {
        name: "Remote Telemetry & Alarm Diagnostics",
        desc: "Direct analysis of event logs, wave captures, and inverter alarm codes.",
      },
      {
        name: "In-Field Component Rectification",
        desc: "On-site replacement of faulty PCBs, IGBT modules, cooling fans, and contactors.",
      },
      {
        name: "Comprehensive Root Cause Analysis (RCA)",
        desc: "Forensic written report explaining why the electrical anomaly occurred and how to prevent recurrence.",
      },
    ],
    reviewTitle: "Site Topology & Emergency Preparedness",
    reviewSubtitle: "Evaluate your site escalation workflows before an emergency strikes.",
    reviewChecklist: [
      "Single Line Diagram (SLD) & Isolation Procedure Review",
      "Bypass Switchgear Operational Verification",
      "Critical Alarm Escalation & Contact Rosters",
      "Local Spare Parts Kit Inventory Audit",
      "Disaster Recovery & Black Start Drills",
      "Incident Reporting & Insurance Audit Documentation",
    ],
    ctaButtonText: "CONNECT WITH TECHNICAL SUPPORT",
    col1Title: "Protection Planning",
    col1Body:
      "Having an active technical support framework ensures your facilities team never panics during a power trip. With pre-agreed escalation procedures and engineer access, you protect mission-critical workloads and prevent costly operational halts.",
    col2Title: "The Full Solution.",
    col2Body:
      "Electrosys provides complete emergency response coverage across India, supported by localized spare parts depots and emergency loaner units. Whether you require remote telephone guidance during an erratic utility event or an immediate midnight site dispatch, our team is equipped to restore full protection.",
    actionTitle: "Don't Wait for an Outage to Test Your Response Plan.",
    actionIntro:
      "When utility power fails and a UPS faults simultaneously, every second counts. Establishing a verified technical support SLA ensures immediate recovery.",
    actionDescription:
      "Our field teams operate round-the-clock nationwide. We deliver verified service logs, transparent diagnostic findings, and lasting engineering solutions. Contact Electrosys to establish your support agreement.",
    metrics: [
      { label: "Client Satisfaction", percent: 100 },
      { label: "Product Knowledge", percent: 100 },
      { label: "Expert Support", percent: 100 },
    ],
    image: support,
    icon: Headphones,
    description:
      "Responsive emergency technical support for alarms, inverter trips, phase faults, and configuration issues from engineers thoroughly familiar with your site history.",
    overview:
      "When unexpected power alarms or system bypass events occur, you need immediate access to qualified power engineers who understand your exact topology rather than an offshore call centre.",
    points: [
      "24/7 emergency response & rapid on-site dispatch",
      "Alarm log diagnostics & root-cause failure analysis",
      "Immediate bypass support & fault rectification",
      "Original spare parts stock & circuit board replacement",
    ],
    deliverables: [
      {
        title: "Direct Engineer Access",
        desc: "Immediate telephone and remote telemetry assistance from certified senior power engineers.",
      },
      {
        title: "Rapid Emergency Callout",
        desc: "Pan-India service availability with guaranteed response times tailored to mission-critical SLAs.",
      },
      {
        title: "Root Cause Analysis (RCA)",
        desc: "In-depth forensic reporting on input mains surges, load anomalies, or internal component events.",
      },
      {
        title: "Emergency Rental & Spares",
        desc: "Access to backup loaner units and genuine spare parts for rapid turnaround.",
      },
    ],
  },
  {
    slug: "preventive-maintenance",
    name: "Annual Maintenance Contracts (AMC)",
    short: "Structured maintenance programmes that minimize unplanned power interruptions.",
    tagline: "Avoid Assumptions. Protect with Structured AMC.",
    intro:
      "An Annual Maintenance Contract (AMC) with Electrosys is an investment in 99.99% operational continuity. Rather than waiting for critical alarms or sudden failures, our structured service contracts provide regular inspections, environmental cleaning, electrical calibration, and priority emergency response around the clock.",
    whyMattersTitle: "Why a Structured AMC Matters:",
    whyMattersText:
      "Power protection systems operate silently in backgrounds of dust, temperature fluctuations, and utility surges. Without systematic contracted maintenance, small electrical issues escalate into catastrophic downtime. An AMC delivers predictable operating expenses, priority SLA response, and prolonged hardware lifespan.",
    suiteIntro:
      "Tailored to your site's criticality and operating budget, Electrosys AMC programmes deliver comprehensive engineering care, including:",
    suiteItems: [
      {
        name: "Quarterly / Bi-Annual Servicing Visits",
        desc: "Scheduled comprehensive maintenance conducted during off-peak or weekend windows.",
      },
      {
        name: "Priority 24/7 Emergency Response",
        desc: "Guaranteed rapid callout response with zero dispatch delays for contracted clients.",
      },
      {
        name: "Full Thermal & Electrical Diagnostics",
        desc: "Infrared thermography, DC capacitor ripple tests, and inverter calibration.",
      },
      {
        name: "Comprehensive Spares & Labor Coverage",
        desc: "Options for all-inclusive component replacement (Comprehensive AMC) or labor-inclusive contracts.",
      },
    ],
    reviewTitle: "AMC SLA & Compliance Audit",
    reviewSubtitle: "Evaluate your service agreement against facility risk profiles.",
    reviewChecklist: [
      "Preventive Maintenance Schedule & Visit Calendaring",
      "Guaranteed Emergency Response Times (2hr / 4hr SLA)",
      "Spare Parts Availability Guarantee & Stock Reserving",
      "Load Bank & Battery Autonomy Testing Intervals",
      "Environmental & Cleaning Standards Compliance",
      "Annual Executive Health Report & Asset Valuation",
    ],
    ctaButtonText: "REQUEST AN AMC QUOTE",
    col1Title: "Protection Planning",
    col1Body:
      "Structured AMC agreements safeguard your business against sudden catastrophic capital expenditure. By scheduling periodic inspections and proactive component replacements, your facility stays compliant with statutory electrical safety mandates, manufacturer warranties, and insurance stipulations.",
    col2Title: "The Full Solution.",
    col2Body:
      "Electrosys manages multi-vendor UPS fleets across single and multi-site portfolios. From 1 kVA rack units to 800 kVA parallel data centre installations, our certified technicians ensure every component is tested and documented to provide uninterrupted power security.",
    actionTitle: "Don't Wait for an Expired Warranty to Protect Your Site.",
    actionIntro:
      "When OEM warranties expire, unmaintained systems rapidly become liabilities. A tailored Electrosys AMC provides seamless, guaranteed coverage.",
    actionDescription:
      "Serving over 3,000 active installations across India, Electrosys provides dependable maintenance backed by 30+ years of technical leadership. Contact us today to receive a customized maintenance proposal.",
    metrics: [
      { label: "Client Satisfaction", percent: 100 },
      { label: "Product Knowledge", percent: 100 },
      { label: "Expert Support", percent: 100 },
    ],
    image: maintenance,
    icon: ShieldCheck,
    description:
      "Agreed Annual Maintenance Contracts (AMC) structured around your site's operational criticality, with systematic inspection schedules, cleaning routines, and priority emergency response.",
    overview:
      "Preventive maintenance is the cornerstone of 99.99% uptime. Our structured AMC contracts are tailored to your budget and site risk profile, covering routine servicing, emergency callouts, and spare parts support.",
    points: [
      "Customizable AMC contracts (Comprehensive & Non-Comprehensive)",
      "Periodic scheduled inspection & cleaning routines",
      "Priority 24/7 callout guarantee for contracted clients",
      "Annual load test and resilience review",
    ],
    deliverables: [
      {
        title: "Tailored Maintenance Schedules",
        desc: "Quarterly or bi-annual service visits arranged outside your peak business hours.",
      },
      {
        title: "Environmental & Dust Removal",
        desc: "Internal vacuuming, air filter replacement, and moisture checks to prevent flashovers and short circuits.",
      },
      {
        title: "Static Switch Functional Test",
        desc: "Simulated power failure drills to confirm flawless transfer to bypass and inverter recovery.",
      },
      {
        title: "Predictable Cost Management",
        desc: "Fixed annual service pricing eliminating sudden unexpected breakdown expenditure.",
      },
    ],
  },
  {
    slug: "power-solution-support",
    name: "Power Audits & System Architecture",
    short: "Independent engineering consultancy on UPS topology, redundancy, and power quality.",
    tagline: "Avoid Assumptions. Design with Clarity.",
    intro:
      "Selecting the wrong power protection topology or under-specifying battery autonomy can lock your organisation into inefficient power consumption, frequent breaker trips, or catastrophic downtime. At Electrosys, our consulting engineers provide independent, vendor-neutral analysis of power quality, harmonics, and redundancy configurations prior to capital expenditure.",
    whyMattersTitle: "Why Expert Power Auditing Matters:",
    whyMattersText:
      "Modern loads — such as high-density servers, medical imaging scanners, and regenerative elevator drives — present complex non-linear electrical stresses. A dedicated power quality audit diagnoses voltage sags, harmonics, and phase imbalances, allowing you to specify the exact right capacity without overspending.",
    suiteIntro:
      "Our power audit and system architecture consulting covers the full spectrum of electrical engineering evaluation, including:",
    suiteItems: [
      {
        name: "Harmonic & Power Quality Audits",
        desc: "Logging mains voltage transients, harmonic distortion (THDv / THDi), and power factor.",
      },
      {
        name: "Redundancy Architecture Design",
        desc: "Engineering N+1, 2N, or distributed redundant architectures for tier-certified facilities.",
      },
      {
        name: "Regenerative Load Solutions",
        desc: "Specialized braking resistors and absorbers for elevator, crane, and motor loads.",
      },
      {
        name: "Total Cost of Ownership (TCO) Sizing",
        desc: "Lifecycle efficiency modeling comparing transformer-based versus modular transformerless topologies.",
      },
    ],
    reviewTitle: "Architecture & Power Quality Review",
    reviewSubtitle: "Evaluate your facility's power quality against operational risk.",
    reviewChecklist: [
      "Power Quality Logging & Transient Disturbance Analysis",
      "Phase Load Balancing & Neutral Sizing Verification",
      "Fault Current Withstand & Discrimination Modeling",
      "Modular vs Standalone Lifecycle Cost Comparison",
      "Energy Efficiency & Heat Dissipation Calculation",
      "Independent Vendor-Neutral Specification Dossier",
    ],
    ctaButtonText: "REQUEST A POWER QUALITY AUDIT",
    col1Title: "Protection Planning",
    col1Body:
      "Accurate power planning ensures your facility operates safely, efficiently, and with ample headroom for organizational growth. By identifying harmonic pollution and power factor penalties early, our audits reduce utility electricity charges and prolong the working life of all connected electrical equipment.",
    col2Title: "The Full Solution.",
    col2Body:
      "Electrosys bridges the gap between electrical consulting and real-world deployment. Once your power audit is complete, we provide turnkey implementation — including harmonic active filters, isolation transformers, automatic transfer switches (ATS), and engineered UPS installations.",
    actionTitle: "Don't Wait for High Utility Bills or Equipment Trips.",
    actionIntro:
      "Harmonic distortion and poor power factor cause silent overheating in transformers and unprompted circuit breaker trips across your facility.",
    actionDescription:
      "Our senior power consultants operate across India, equipped with Class-A power quality analyzers. We deliver detailed forensic analysis and actionable engineering guidance. Contact Electrosys today to schedule your audit.",
    metrics: [
      { label: "Client Satisfaction", percent: 100 },
      { label: "Product Knowledge", percent: 100 },
      { label: "Expert Support", percent: 100 },
    ],
    image: installation,
    icon: Lightbulb,
    description:
      "Technical consultancy on system topology, N+1 / 2N redundancy, energy efficiency, regenerative loads, and equipment selection before capital expenditure.",
    overview:
      "Choosing the wrong UPS topology or undersizing battery autonomy can lead to catastrophic outages or ballooning energy costs. We provide vendor-neutral engineering advice tailored to your facility's real-world demands.",
    points: [
      "Power quality audit & electrical harmonic analysis",
      "Redundancy architecture design (N+1, 2N, distributed redundant)",
      "Regenerative load & lift power handling solutions",
      "Energy efficiency optimization & Total Cost of Ownership (TCO) analysis",
    ],
    deliverables: [
      {
        title: "Comprehensive Power Audit",
        desc: "Logging mains voltage sags, swells, transients, and frequency stability with high-precision power analyzers.",
      },
      {
        title: "Topology Recommendation",
        desc: "Impartial advice on modular vs. standalone, transformer-based vs. transformerless architectures.",
      },
      {
        title: "Regenerative Solutions",
        desc: "Specialized braking resistors and regenerative absorbers for elevator and hoist installations.",
      },
      {
        title: "TCO & Phasing Strategy",
        desc: "Budget forecasting and modular scaling plans aligned with your 5–10 year operational growth.",
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function relatedServices(slug: string, count = 3) {
  return services.filter((s) => s.slug !== slug).slice(0, count);
}
