/**
 * Technologies named in the reference documents, grouped for display.
 * `usedIn` records which project document mentions each one.
 */
export interface TechGroup {
  title: string;
  description: string;
  items: { name: string; usedIn: string[] }[];
}

export const technologies: TechGroup[] = [
  {
    title: 'Application frameworks',
    description: 'The web stack behind our admin panels, portals and editors.',
    items: [
      { name: 'PHP', usedIn: ['ECMS'] },
      { name: 'Laravel 12', usedIn: ['ECMS'] },
      { name: 'Filament 5', usedIn: ['ECMS'] },
      { name: 'Blade', usedIn: ['ECMS'] },
      { name: 'JavaScript (ES modules)', usedIn: ['ECMS'] },
      { name: 'Tailwind CSS 4', usedIn: ['ECMS'] },
      { name: 'Vite', usedIn: ['ECMS'] },
      { name: 'Fabric.js', usedIn: ['ECMS'] },
      { name: 'Flutter', usedIn: ['AMP'] },
    ],
  },
  {
    title: 'Data and infrastructure',
    description: 'Services that move, cache, store and process data reliably.',
    items: [
      { name: 'Apache Kafka', usedIn: ['AMP'] },
      { name: 'Redis', usedIn: ['AMP'] },
      { name: 'S3 storage', usedIn: ['AMP'] },
      { name: 'Background job queues', usedIn: ['ECMS'] },
      { name: 'Web push notifications', usedIn: ['AMP', 'TKS'] },
      { name: 'Biometric device import', usedIn: ['TKS'] },
      { name: 'RFID', usedIn: ['TKS', 'ECMS'] },
    ],
  },
  {
    title: 'Identity and integration',
    description: 'Sign-in and data connections with existing university services.',
    items: [
      { name: 'UP Portal SSO', usedIn: ['AMP'] },
      { name: 'UP Mail sign-in', usedIn: ['AMP', 'UHIS', 'Personnel System'] },
      { name: 'Google sign-in', usedIn: ['TKS', 'ECMS'] },
      { name: 'Google Calendar', usedIn: ['TKS'] },
      { name: 'University Directory (UDR)', usedIn: ['Personnel System'] },
      { name: 'HR system data sharing', usedIn: ['AMP', 'TKS'] },
      { name: 'Performance (IPCR) app', usedIn: ['Personnel System', 'TKS'] },
    ],
  },
  {
    title: 'Documents and verification',
    description: 'Official documents that are generated and can be verified.',
    items: [
      { name: 'PDF generation', usedIn: ['AMP', 'UHIS', 'Personnel System', 'ECMS'] },
      { name: 'QR code verification', usedIn: ['AMP', 'UHIS', 'TKS', 'ECMS'] },
      { name: 'Digital document signing', usedIn: ['TKS'] },
      { name: 'Audit trails', usedIn: ['AMP', 'UHIS', 'Personnel System', 'TKS', 'ECMS'] },
      { name: 'Field-level encryption', usedIn: ['UHIS', 'Personnel System'] },
    ],
  },
];
