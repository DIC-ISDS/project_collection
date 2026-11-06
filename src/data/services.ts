/**
 * Services as listed by ISDS. "evidence" links each service to project work
 * documented in the reference files, so claims stay grounded.
 */
import { AppWindow, Database, Workflow, Cable, Wrench, Lightbulb } from '@lucide/astro';

export const services = [
  {
    icon: AppWindow,
    title: 'Information Systems Development',
    description:
      'Custom web applications built around how a university office actually works, from intake forms to official reports.',
    evidence: 'Asset management, health services, HR, timekeeping and event systems',
  },
  {
    icon: Database,
    title: 'Database Design and Management',
    description:
      'Structured, reliable databases that keep one trustworthy record per item, patient or employee, with full change history.',
    evidence: 'Database-generated property numbering, one health record per person',
  },
  {
    icon: Workflow,
    title: 'Process Automation',
    description:
      'Systems that take over repetitive steps such as re-encoding, form typing and follow-up calls, so staff can focus on review and decisions.',
    evidence: 'Automatic COA forms, bulk DTR generation, automatic certificate issuance',
  },
  {
    icon: Cable,
    title: 'Systems Integration',
    description:
      'Connecting applications and services so information entered in one place reaches every system that needs it.',
    evidence: 'HR data shared with AMP, TKS and the Performance app; biometric punches merged into TKS',
  },
  {
    icon: Wrench,
    title: 'System Maintenance and Enhancement',
    description:
      'Ongoing improvement of live systems to keep them functional, fast and easy to use, with features released gradually when offices are ready.',
    evidence: 'Feature-flagged AMP rollouts; TKS updated frequently since June 2024 based on user feedback',
  },
  {
    icon: Lightbulb,
    title: 'Technical Innovation',
    description:
      'Applying modern technologies to new institutional needs, from QR-verifiable documents to mobile field tools.',
    evidence: 'QR verification, AMP mobile inventory pilot, browser-based certificate editor',
  },
] as const;
