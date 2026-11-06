/**
 * Organization details. Source: information supplied by ISDS (November 2026).
 * Do not add contact channels, links or claims that ISDS has not provided.
 */
export const site = {
  name: "Information Systems Development and Database Section",
  shortName: "ISDS",
  department: "Digital Innovation Center",
  departmentShort: "DIC",
  institution: "University of the Philippines Los Baños",
  institutionShort: "UPLB",
  tagline: "Building Smarter Systems for a More Connected University.",
  description:
    "We design and develop reliable, efficient, and user-friendly information systems that streamline university operations, improve data management, and support digital innovation at the University of the Philippines Los Baños.",
  about: [
    "The Information Systems Development and Database Section (ISDS) is a unit under the Digital Innovation Center (DIC) of the University of the Philippines Los Baños (UPLB).",
    "We design, develop, and maintain the information systems and databases behind university operations, so that offices can move routine work off paper and spreadsheets.",
    "We build systems that work reliably, keep data secure, and are easy for staff to use. Our goal is simpler administrative processes, better-managed data, and offices that run more efficiently.",
  ],
  approach:
    "We work with the offices that use our systems to deliver practical tools that fit how they work, streamline workflows, and give decision-makers the information they need.",
  mission:
    "To develop innovative, efficient, and sustainable information systems that improve institutional processes, strengthen data management, and support the university’s digital transformation initiatives.",
  vision:
    "To be a trusted technology development team that delivers practical, innovative, and sustainable digital solutions supporting a more efficient, connected, and data-driven university.",
  contact: {
    leadName: "Abril Moldez",
    leadRole: "Project Leader",
    email: "rb.aamoldez@gmail.com",
    address: [
      "Information Systems Development and Database Section (ISDS)",
      "Digital Innovation Center (DIC)",
      "University of the Philippines Los Baños (UPLB)",
    ],
  },
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
] as const;

export const mailto = (subject = "Project inquiry") =>
  `mailto:${site.contact.email}?subject=${encodeURIComponent(subject)}`;
