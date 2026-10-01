/**
 * DAC Auto — Business Constants
 * -----------------------------------------------
 * TEMP: All copy marked [COPY] should be reviewed/replaced with
 *       final marketing copy from the client.
 * -----------------------------------------------
 */

export const BUSINESS = {
  name: "Dekker Auto Clinic",
  shortName: "DAC Auto",
  email: "sales@dautoclinic.com",
  emailLink: "mailto:sales@dautoclinic.com",
  tagline: "All In One Auto-Care!", // TEMP: confirm with brand guide
  whatsapp: "+254 777 223 010",
  whatsappLink: "https://wa.me/254777223010",
  instagram: "dac.auto.ke",
  instagramLink: "https://instagram.com/dac.auto.ke",
  address: "Mai Mahiu Rd, Langata, Mbagathi, Nairobi Area, Kenya 00100",
  locations: ["Lang'ata", "Upperhill"],
  googleMapsLink:
    "https://maps.google.com/?q=Mai+Mahiu+Rd,Langata,Nairobi,Kenya",
  googleMapsEmbed:
    "https://maps.google.com/maps?q=Mai+Mahiu+Rd+Langata+Nairobi+Kenya&output=embed&iwloc=&z=15",
} as const;

/** Per-branch contact details — used on Contact, home Location section, and Footer. */
export const BRANCHES = [
  {
    name: "Lang'ata",
    address: BUSINESS.address,
    email: "sales@dautoclinic.com",
  },
  {
    name: "Upperhill",
    address: "Upperhill, Nairobi", // TEMP: add full Upperhill street address
    email: "sales@dautoclinic.com",
  },
] as const;

export const SERVICES = [
  {
    id: "paint-accident-repairs",
    title: "Accident & Body Repairs",
    shortDesc:
      "From dents and damaged panels to collision repairs. Careful restoration, down to the last detail.",
    description:
      "Every repair begins with an assessment of the damage. We discuss the work required, prepare a quotation and agree the scope before repairs begin. Our panel beating and body repair services restore damaged exterior panels and bring your vehicle back into shape.",
    icon: "paint",
    href: "/services#paint-accident-repairs",
  },
  {
    id: "paint-refinishing",
    title: "Paint & Refinishing",
    shortDesc:
      "A fresh finish. A seamless colour. Paintwork that brings your car’s character back to life.",
    description:
      "From a scratched panel to a full exterior respray, preparation makes the difference. We assess the existing finish, discuss colour and refinishing options, and take care of surface preparation and paint application.",
    icon: "paint",
    href: "/services#paint-refinishing",
  },
  {
    id: "car-wash-detailing",
    title: "Detailing & Paint Care",
    shortDesc:
      "The finishing touch, inside and out. Thoughtful detailing for a car you love coming back to.",
    description:
      "Give your vehicle the attention it deserves with exterior polishing, paint care and interior detailing. We help you choose the right treatment for the condition of your car, whether after body repairs or as a standalone refresh.",
    icon: "wash",
    href: "/services#car-wash-detailing",
  },
  {
    id: "customisation-tuning",
    title: "Custom Finishes & Styling",
    shortDesc:
      "Your car, with a personal signature. Explore colour changes, wraps and exterior styling.",
    description:
      "Make the exterior your own with custom finishes, colour changes and styling. Tell us what you have in mind and we will discuss the options, materials and work needed for your vehicle.",
    icon: "tune",
    href: "/services#customisation-tuning",
  },
] as const;

/** Approved proof points — do not add unverified figures here. */
export const STATS = [
  { value: "3,000+", label: "Cars Serviced Annually" },
  { value: "95%", label: "Customer Satisfaction" },
  { value: "2", label: "Nairobi Locations" },
] as const;

/** Site-wide FAQ — also rendered as FAQPage structured data on the home page. */
export const SITE_FAQS = [
  {
    question: "Which areas of Nairobi does DAC Auto serve?",
    answer:
      "We operate from Lang'ata and Upperhill, and regularly serve customers from across greater Nairobi.",
  },
  {
    question: "How do I book a bodywork assessment?",
    answer:
      "Email sales@dautoclinic.com with your vehicle make, model and a description of the damage. Include photographs if available so our team can help arrange an assessment.",
  },
  {
    question: "Can DAC Auto help with an insurance repair claim?",
    answer:
      "Yes — we can prepare repair quotes and documentation for your insurer. We always recommend confirming your policy's specific requirements with your insurance provider first.",
  },
  {
    question: "How do I get a price for my vehicle?",
    answer:
      "Pricing depends on your vehicle and the work required. Email your vehicle details and the work required to sales@dautoclinic.com. Our team will advise on an assessment and quotation.",
  },
] as const;

export const WHY_US = [
  {
    title: "Experienced Technicians", // [COPY]
    desc: "Our team brings years of hands-on expertise across all major vehicle makes and models.", // [COPY]
    icon: "tech",
  },
  {
    title: "Fast Turnaround", // [COPY]
    desc: "We respect your time. Most services are completed same-day or next-day.", // [COPY]
    icon: "speed",
  },
  {
    title: "Premium Quality", // [COPY]
    desc: "We use only quality materials and follow best-practice finishing techniques on every job.", // [COPY]
    icon: "quality",
  },
  {
    title: "Transparent Pricing", // [COPY]
    desc: "No hidden costs. We give you a clear quote before any work starts — you're always in control.", // [COPY]
    icon: "price",
  },
  {
    title: "Two Convenient Locations", // [COPY]
    desc: "Serving Nairobi from Lang'ata and Upperhill — easy to reach from anywhere in the city.", // [COPY]
    icon: "location",
  },
  {
    title: "Book via WhatsApp", // [COPY]
    desc: "The fastest way to book is through WhatsApp — get a quote and schedule in minutes.", // [COPY]
    icon: "whatsapp",
  },
] as const;
