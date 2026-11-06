/**
 * Curated project content.
 *
 * Every statement here is drawn from the reference documents in ../docs
 * (AMP_OVERVIEW_AND_SPMO_IMPACT.md, UHIS_Day_to_Day_Plan.md,
 * HR-DAY-TO-DAY-PLAN.md, ECMS.md). Those files are development input only and
 * are not part of the built site.
 *
 * Rules when editing:
 * - Do not add results, metrics, users, testimonials or links that are not
 *   documented. The "measures" lists are proposed indicators, not outcomes.
 * - Leave an optional field out rather than filling it with guesses; the
 *   detail page hides sections that have no content.
 */
import {
  Activity,
  CalendarClock,
  ChartLine,
  Clock,
  FolderArchive,
  House,
  Signature,
  SlidersHorizontal,
  Timer,
  UserRoundCheck,
  BadgeCheck,
  Bell,
  BuildingComplex,
  Calculator,
  CalendarDays,
  ClipboardCheck,
  ClipboardList,
  FileCheckCorner,
  FileText,
  GitMerge,
  RotateCcwClock,
  IdCard,
  Layers,
  LayoutDashboard,
  Network,
  PenTool,
  QrCode,
  Repeat,
  ScanLine,
  Search,
  ShieldCheck,
  Smartphone,
  Stethoscope,
  UserCheck,
  Users,
  Workflow,
  Boxes,
  HeartPulse,
  Award,
} from '@lucide/astro';

export type Icon = typeof Activity;

export type StatusTone = 'live' | 'ready' | 'pilot' | 'planned';

export interface Project {
  slug: string;
  acronym: string;
  /** Name used in compact lists and nav */
  shortName: string;
  name: string;
  /** Who the system is built for; reads after "Built for" */
  partner: string;
  domain: string;
  icon: Icon;
  status: { label: string; tone: StatusTone };
  /** One-line value statement */
  tagline: string;
  /** 2–3 sentence summary for cards and page intros */
  summary: string;
  /** Short problem statement used on cards */
  problem: string;
  highlights: string[];
  overview: string[];
  audience: { title: string; description: string }[];
  challenge: { intro: string; shifts: { before: string; after: string }[] };
  approach: { intro: string; title: string; steps: { title: string; description: string }[] };
  features: { icon: Icon; title: string; description: string }[];
  safeguards?: { intro: string; items: string[] };
  stack?: { label: string; items: string[] };
  integrations?: { label: string; items: string[] };
  progress: { intro: string; items: { label: string; state: string; tone: StatusTone }[] };
  measures?: { intro: string; items: string[] };
  note?: string;
}

export const projects: Project[] = [
  {
    slug: 'asset-management-portal',
    shortName: 'AMP',
    acronym: 'AMP',
    name: 'UPLB Asset Management Portal',
    partner: 'the Supply and Property Management Office (SPMO)',
    domain: 'Property and accountability',
    icon: Boxes,
    status: { label: 'Core modules live', tone: 'live' },
    tagline: 'One shared record for every item of university property, from delivery to disposal.',
    summary:
      'AMP tracks every government-owned item through its whole life: delivery, property numbering, issuance, transfer, inventory, repair and disposal. The SPMO, Administrative Officers and partner offices all work from the same record.',
    problem:
      'Property records were spread across spreadsheets, hand-typed COA forms and paper routing.',
    highlights: ['Automatic property numbering', 'COA forms as PDFs', 'Live custody records'],
    overview: [
      'The Asset Management Portal is UPLB’s online system for government property. Each item is followed from the moment it is delivered: it receives a property number, is issued to an accountable officer, and can later be transferred, counted, repaired, reported lost or disposed of.',
      'For the Supply and Property Management Office, AMP replaces separate spreadsheets, typed forms and paper routing with one shared record. Administrative Officers, end users, Accounting and audit offices all see the same information.',
    ],
    audience: [
      {
        title: 'SPMO staff and administrators',
        description:
          'Approve acquisitions, manage numbering, issue and transfer property, run inventory, process disposals and produce COA reports.',
      },
      {
        title: 'Administrative Officers',
        description:
          'Register their office’s deliveries, upload supporting documents, generate PAR/ICS and track the items their office holds.',
      },
      {
        title: 'Accountable officers and end users',
        description:
          'See the items under their name, confirm the items they still hold and respond to transfers.',
      },
      {
        title: 'Accounting, COA and Internal Audit',
        description:
          'Draw depreciation schedules, close packs and COA reports from the same data the SPMO uses.',
      },
    ],
    challenge: {
      intro:
        'Property accountability depended on logbooks, typed forms and follow-up calls. Each step was re-encoded by hand, which made errors and delays likely.',
      shifts: [
        {
          before: 'Property and PAR/ICS numbers assigned by hand from logbooks, leading to duplicates and gaps',
          after: 'Numbers generated automatically, in sequence, with no collisions',
        },
        {
          before: 'COA forms typed in Word or Excel and re-encoded for each form',
          after: 'Forms produced as PDFs from data already in the system',
        },
        {
          before: '“Who has this item?” answered by searching folders and calling offices',
          after: 'A live custody record for every item and every person',
        },
        {
          before: 'Paper count sheets, then encoding, then reconciliation',
          after: 'Inventory campaigns whose count sheets produce the COA reports directly',
        },
        {
          before: 'Missing documents chased through calls, emails and visits',
          after: 'Automatic reminders and web push notifications to the responsible office',
        },
        {
          before: 'Year-end and audit reports took weeks of consolidating office files',
          after: 'Reports generated on demand from the report centre',
        },
      ],
    },
    approach: {
      title: 'The property lifecycle',
      intro:
        'AMP models the full lifecycle of an item, so each stage builds on the record created by the stage before it.',
      steps: [
        {
          title: 'Acquisition',
          description:
            'Administrative Officers register delivered items with their account code, cost, supplier, fund source and location. Large batches can be entered in one step.',
        },
        {
          title: 'Registry and numbering',
          description:
            'Once required documents are uploaded, the SPMO approves the acquisition and official numbers are assigned in COA format.',
        },
        {
          title: 'PAR / ICS issuance',
          description:
            'Items above the capitalization threshold receive a PAR; items below it receive an ICS. The threshold is set once in Accounting Settings.',
        },
        {
          title: 'Custody and transfer',
          description:
            'Each item has a named holder. Transfers move custody only after approval and produce a numbered Property Transfer Report.',
        },
        {
          title: 'Physical inventory',
          description:
            'The SPMO opens a campaign, offices fill in the count sheet online, and the COA inventory reports follow from the counts.',
        },
        {
          title: 'Repair, loss and disposal',
          description:
            'Inspections, loss reports and disposals are recorded. Only an approved disposal removes an item from the books.',
        },
      ],
    },
    features: [
      {
        icon: FileText,
        title: 'COA forms from one dataset',
        description:
          'PAR, ICS, PTR, IIRUP, RPCPPE, RPCSP, WMR, RLSDDP and ICF are all generated from the same records, so the forms stay consistent with each other.',
      },
      {
        icon: Layers,
        title: 'Collision-free numbering',
        description:
          'The database generates property and PAR/ICS numbers in sequence, so numbers can no longer collide or be skipped.',
      },
      {
        icon: UserCheck,
        title: 'Custody you can look up',
        description:
          'Search by property number, serial or person to see who holds an item, since when, and under which document.',
      },
      {
        icon: Repeat,
        title: 'PAR renewal tracking',
        description:
          'Due and overdue PARs are flagged against the COA three-year renewal requirement.',
      },
      {
        icon: Calculator,
        title: 'Depreciation and close pack',
        description:
          'Straight-line depreciation and an accounting close pack give Accounting the working papers it needs to reconcile with eNGAS.',
      },
      {
        icon: Bell,
        title: 'Reminders that close themselves',
        description:
          'The SPMO can flag a stalled acquisition. The office gets a push notification, and the reminder clears once the documents are uploaded.',
      },
      {
        icon: QrCode,
        title: 'QR verification',
        description:
          'Anyone holding a printed PAR or ICS can scan its QR code on a public page to check that the document is genuine.',
      },
      {
        icon: LayoutDashboard,
        title: 'Dashboards and maps',
        description:
          'See asset distribution by account and by office, PAR/ICS totals, and where items are located on a map.',
      },
      {
        icon: GitMerge,
        title: 'Careful legacy migration',
        description:
          'Old spreadsheets are staged, matched and reviewed before they are committed, and end users confirm the legacy items they hold.',
      },
    ],
    safeguards: {
      intro: 'Accountability and access control are built into the system.',
      items: [
        'Each office sees only its own property; the SPMO sees all of it.',
        'Sign-in uses the UP Portal (SSO) or UP Mail, so there are no separate passwords to manage.',
        'Every record keeps an audit trail of who changed what, and when.',
        'Compliance rules are enforced by the system: the PAR/ICS threshold, three-year PAR renewal, disposal by condition, and no depreciation on ICS items.',
      ],
    },
    integrations: {
      label: 'Platform and integrations',
      items: [
        'HR data feed via Apache Kafka',
        'UP Portal single sign-on',
        'Redis caching',
        'S3 file storage',
        'Web push notifications',
        'PDF generation',
        'Flutter mobile app (pilot)',
      ],
    },
    progress: {
      intro:
        'Modules still in testing are behind feature flags. Each one can be released to all offices by changing a single setting, with no new deployment, so the SPMO can pilot with selected offices first.',
      items: [
        { label: 'Acquisition, registry, numbering, PAR/ICS, documents and reminders', state: 'Live', tone: 'live' },
        { label: 'Item custody, transfers, PAR renewal and cross-office projects', state: 'Live', tone: 'live' },
        { label: 'Depreciation, UACS chart, Portal SSO and public QR verification', state: 'Live', tone: 'live' },
        { label: 'Registry import staging and old-assets migration desk', state: 'Live, being refined', tone: 'live' },
        { label: 'COA/GAM module: disposal, inventory, loss, repair and close reports', state: 'Built, in testing', tone: 'pilot' },
        { label: 'Mobile app: scan-to-count, “I still have this”, transfers on the go', state: 'Pilot', tone: 'pilot' },
      ],
    },
    measures: {
      intro: 'Proposed indicators. Baselines are to be recorded before the full rollout.',
      items: [
        'Days from delivery to an approved PAR/ICS',
        'Share of equipment with a named accountable officer (target: 100%)',
        'Share of PARs past their renewal date',
        'Physical inventory cycle time, from campaign start to final report',
        'Property-related COA audit observations',
      ],
    },
    note: 'Procurement and eNGAS journal posting are outside AMP’s scope. AMP produces the records those processes reconcile against.',
  },
  {
    slug: 'university-hospital-information-system',
    shortName: 'UHIS',
    acronym: 'UHIS',
    name: 'University Hospital Information System',
    partner: 'the University Health Service (UHS)',
    domain: 'Health services',
    icon: HeartPulse,
    status: { label: 'Preparing for go-live', tone: 'ready' },
    tagline: 'One health record per person, verifiable certificates, and a faster semester clearance.',
    summary:
      'UHIS replaces paper charts, handwritten certificates and hand-counted tallies with one system shared by every UHS unit. Students and employees track certificates and clearance from a portal, and anyone can check a certificate with its QR code.',
    problem:
      'Paper charts, handwritten certificates and long clearance lines at the start of every semester.',
    highlights: ['One record per patient', 'QR-verifiable certificates', 'Online semester clearance'],
    overview: [
      'The University Hospital Information System gives every member of the university community one health record, whichever UHS clinic they visit. Staff record visits, triage, consultations and certificates in a shared clinic workspace.',
      'Students and employees use a patient portal to request and download certificates, complete clearance requirements and see their visit history. Administrators, the Data Protection Officer and auditors manage settings and review access logs in a separate admin workspace.',
    ],
    audience: [
      {
        title: 'Clinic staff',
        description:
          'Records officers, nurses, physicians, station staff and clearance coordinators handle daily patient work and the clearance season.',
      },
      {
        title: 'Students and employees',
        description:
          'Sign in with UP Mail to request certificates, complete clearance and view their own visit history from a phone or computer.',
      },
      {
        title: 'Administrators, DPO and auditors',
        description:
          'Configure templates, forms and rules, manage staff accounts, and review change and access logs.',
      },
      {
        title: 'Offices that rely on UHS',
        description:
          'The registrar, colleges, HR and outside offices can check a certificate’s status without logging in.',
      },
    ],
    challenge: {
      intro:
        'UHS ran on paper. Patient histories were spread across folders, certificates were written by hand, and each semester began with long clearance lines.',
      shifts: [
        {
          before: 'Long lines at the start of every semester for medical clearance',
          after: 'Scheduled dates by college, health history answered online, and stations that scan the student’s ID',
        },
        {
          before: 'Handwritten certificates that are easy to forge',
          after: 'PDF certificates with a control number and a QR code anyone can check',
        },
        {
          before: 'A patient’s history spread across folders',
          after: 'One record per person, with a timeline of visits, certificates and clearance',
        },
        {
          before: 'The same patient details copied onto every form',
          after: 'Details entered once and filled in everywhere',
        },
        {
          before: 'Return trips to the clinic to ask about or collect a certificate',
          after: 'Certificates tracked and downloaded from the portal',
        },
        {
          before: 'Clearance and certificate reports counted by hand',
          after: 'Dashboards and exports that are always current',
        },
      ],
    },
    approach: {
      title: 'A clinic visit, end to end',
      intro:
        'Each role picks up where the last one left off, without anyone carrying a chart between rooms.',
      steps: [
        {
          title: 'Find or register',
          description:
            'The front desk searches by name or number, even with misspellings. New patients get a hospital number automatically, and their privacy consent is recorded.',
        },
        {
          title: 'Triage',
          description:
            'Nurses work from a self-refreshing worklist with priority patients first. They enter vital signs, and BMI is computed automatically.',
        },
        {
          title: 'Consultation',
          description:
            'Physicians see vitals, allergies and past visits up front, write SOAP notes and search ICD-10 diagnoses by code or by words.',
        },
        {
          title: 'Sign and lock',
          description:
            'Signing requires the physician’s password or PIN again. A signed visit is locked, and later corrections are added as signed addenda.',
        },
        {
          title: 'Issue certificate',
          description:
            'A certificate is issued from the visit in three clicks, with patient details and dates filled in. License and backdating rules are checked automatically.',
        },
        {
          title: 'Verify anywhere',
          description:
            'The registrar, HR or an outside office scans the QR code to confirm the certificate’s status. The diagnosis is never shown.',
        },
      ],
    },
    features: [
      {
        icon: Search,
        title: 'One record per person',
        description:
          'A tolerant search finds patients quickly, and likely duplicates are flagged for a logged merge that keeps every visit and certificate.',
      },
      {
        icon: Stethoscope,
        title: 'Worklists and consultation notes',
        description:
          'Each service has a live worklist, from triage to consultation, with structured SOAP notes and ICD-10 diagnosis search.',
      },
      {
        icon: FileCheckCorner,
        title: 'Certificates in three clicks',
        description:
          'Certificates are generated from the visit. Reprints are stamped and counted, and absence excuses hide the diagnosis unless the patient agrees to show it.',
      },
      {
        icon: ClipboardList,
        title: 'Semester clearance',
        description:
          'Coordinators set checklists and batches by college. The system assigns dates around holidays, and stations complete their own items by scanning the student’s ID.',
      },
      {
        icon: LayoutDashboard,
        title: 'Clearance dashboard',
        description:
          'Track completion by college and program, pending items, station throughput, and students scheduled versus seen today.',
      },
      {
        icon: Smartphone,
        title: 'Patient portal',
        description:
          'Students and employees sign in with UP Mail, in English or Filipino, and can add the portal to their phone’s home screen like an app.',
      },
      {
        icon: QrCode,
        title: 'Public QR verification',
        description:
          'Anyone can confirm whether a certificate is valid, revoked, superseded or expired, so altered or outdated copies are caught.',
      },
      {
        icon: PenTool,
        title: 'Templates and form builder',
        description:
          'Administrators can change certificate wording and rebuild UHS paper forms without programmers. A new template never changes certificates already issued.',
      },
      {
        icon: Network,
        title: 'Built for multiple facilities',
        description:
          'Each facility switches on modules one at a time and assigns its own staff roles, while the patient record stays shared.',
      },
    ],
    safeguards: {
      intro:
        'Health information is sensitive personal information under the Data Privacy Act of 2012 (RA 10173). UHIS is designed so the secure way of working is the default.',
      items: [
        'Signed visits and issued certificates cannot be edited; corrections are signed addenda or reissues.',
        'Nothing clinical is deleted: duplicates are merged, and allergies and conditions are corrected, not removed.',
        'Every view of a record is logged, as well as every change.',
        'Restricted forms, such as mental-health screening, are hidden from anyone without that specific permission, including administrators.',
        'Clinical text is encrypted, uploads are scanned for viruses, and download links expire after a few minutes.',
        'Fonts and avatars are served by UHIS itself, so nothing is sent from the browser to outside services.',
      ],
    },
    integrations: {
      label: 'Platform and integrations',
      items: [
        'UP Mail sign-in',
        'PDF certificates with QR codes',
        'Registrar enrolment list import',
        'Installable mobile-friendly portal',
        'Encrypted clinical text',
        'Upload virus scanning',
      ],
    },
    progress: {
      intro:
        'The first phase is built and is being prepared for go-live. Before the first real patient record, the go-live checklist covers a privacy impact assessment, security and load testing, a backup restore drill and an accessibility check.',
      items: [
        { label: 'Patient registry, duplicate merging and ID cards', state: 'Built', tone: 'ready' },
        { label: 'Out-patient visits, triage, SOAP notes and signing', state: 'Built', tone: 'ready' },
        { label: 'Medical certificates with QR verification', state: 'Built', tone: 'ready' },
        { label: 'Patient portal', state: 'Built', tone: 'ready' },
        { label: 'Semester clearance with stations and dashboard', state: 'Built', tone: 'ready' },
        { label: 'Laboratory, pharmacy, appointments and dental', state: 'Next phase', tone: 'planned' },
        { label: 'Emergency, in-patient care and billing', state: 'Later phases', tone: 'planned' },
      ],
    },
    measures: {
      intro: 'Planned to be measured during the pilot, compared with the paper process, and after each season.',
      items: [
        'Time a student spends at the clinic on clearance day',
        'Students cleared per day per facility',
        'Time from consultation to a certificate in the student’s hands',
        'Visits and calls made just to collect or ask about a certificate',
        'Staff hours spent preparing clearance and certificate reports',
      ],
    },
  },
  {
    slug: 'personnel-system',
    shortName: 'Personnel System',
    acronym: 'PS',
    name: 'UPLB Personnel System',
    partner: 'the UPLB Human Resources office',
    domain: 'Human resources',
    icon: IdCard,
    status: { label: 'Rolling out', tone: 'ready' },
    tagline: 'The single place for UPLB’s employee records, with paperwork generated from the record.',
    summary:
      'The Personnel System keeps UPLB’s employee records in one place: who works where, under what appointment, with which documents on file. Records are entered once and reused in forms, org charts, reports, and the Timekeeping and Performance systems.',
    problem:
      'Running spreadsheets, paper forms, and messages back and forth with offices to answer basic questions.',
    highlights: ['60-day expiry warnings', 'Online clearance routing', 'Self-service PDS updates'],
    overview: [
      'The UPLB Personnel System is where the university keeps its employee records: who works here, in which office, under what appointment, and with what documents on file.',
      'It replaces the spreadsheets, paper forms and back-and-forth messages HR used to juggle. Employees maintain their own Personal Data Sheet through a portal, and changes reach the Timekeeping and Performance systems automatically.',
    ],
    audience: [
      {
        title: 'HR staff',
        description:
          'Maintain records, process appointments, contracts and clearances, and run reports from the admin panel.',
      },
      {
        title: 'Employees',
        description:
          'View and update their own PDS, request clearance, check leave credits, see their office’s org chart and complete their IPCR.',
      },
      {
        title: 'Clearing officers and approvers',
        description: 'Approve or return the clearance requests assigned to them from their own portal.',
      },
      {
        title: 'Timekeepers',
        description:
          'Update the records of the staff they handle, with a log of every change made to those records.',
      },
    ],
    challenge: {
      intro:
        'HR worked from spreadsheets and paper forms, and spent time on messages with offices to answer questions like “who is in your office?” and “has this employee been cleared?”.',
      shifts: [
        {
          before: 'Re-typing the same employee details on every form',
          after: 'Details entered once, with every form and PDF generated from the record',
        },
        {
          before: 'A running spreadsheet that goes stale',
          after: 'An employee list that is always current and exports on demand',
        },
        {
          before: 'Finding out about an expiring appointment after it lapsed',
          after: 'A 60-day warning on the dashboard',
        },
        {
          before: 'Walking clearance forms from office to office',
          after: 'Approvers sign off online while HR monitors progress',
        },
        {
          before: 'Encoding employee updates from paper',
          after: 'Employees update their own Personal Data Sheet',
        },
        {
          before: 'Updating Timekeeping and Performance separately',
          after: 'Changes flow to both systems automatically',
        },
      ],
    },
    approach: {
      title: 'From record to paperwork',
      intro:
        'Each employee record is built once and reused for every downstream document and connected system.',
      steps: [
        {
          title: 'Identity from the directory',
          description:
            'Names and UP Mail addresses arrive from the university’s central directory (UDR), so HR does not re-type them.',
        },
        {
          title: 'Personal Data Sheet',
          description:
            'HR or the employee completes education, eligibility, work experience and trainings. Government ID numbers are stored encrypted.',
        },
        {
          title: 'Appointment',
          description:
            'HR records the office, designation and salary grade. The monthly salary is looked up from the Salary Grade Step table.',
        },
        {
          title: 'Forms on demand',
          description:
            'The PDS, Work Experience Sheet, CSC Form 33-A and faculty appointment letters are generated from the current record.',
        },
        {
          title: 'Connected systems',
          description:
            'Saved appointments, offices and designations update the Timekeeping and Performance systems automatically.',
        },
      ],
    },
    features: [
      {
        icon: LayoutDashboard,
        title: 'Early-warning dashboard',
        description:
          'Appointments and contracts expiring within 60 days, pending clearances, records completeness and workforce counts, all on one screen.',
      },
      {
        icon: Users,
        title: 'Flexible employee list',
        description:
          'Filter, sort, switch between saved views, and export to Excel or CSV with only the columns you need.',
      },
      {
        icon: FileText,
        title: 'PDS and WES in CSC format',
        description:
          'Personal Data Sheets and Work Experience Sheets are generated as PDFs from the record, always reflecting the latest data.',
      },
      {
        icon: ClipboardCheck,
        title: 'Contract checklists',
        description:
          'Each COS/ICS contract shows the exact documents required for its case and flags what is still missing.',
      },
      {
        icon: Workflow,
        title: 'Online clearance',
        description:
          'Requests are routed to every required approver. HR sees who has signed off and who is pending, and the clearance PDF is generated on approval.',
      },
      {
        icon: BuildingComplex,
        title: 'Org charts on demand',
        description:
          'Draw any office with its head, its people by category and its sub-offices, then export to PDF or PNG.',
      },
      {
        icon: Activity,
        title: 'Performance (IPCR)',
        description:
          'HR sets rating periods; employees and supervisors complete targets and ratings in the portal.',
      },
      {
        icon: RotateCcwClock,
        title: 'Full activity log',
        description:
          'Every create, update and delete is recorded with the user and time, including changes made by timekeepers.',
      },
      {
        icon: GitMerge,
        title: 'Safe duplicate merging',
        description:
          'Duplicate employee records can be merged into one, with a dry-run preview before anything changes.',
      },
    ],
    integrations: {
      label: 'Connected systems',
      items: [
        'University Directory (UDR)',
        'Timekeeping System (TKS)',
        'Performance system',
        'UP Mail sign-in',
        'Encrypted government ID numbers',
      ],
    },
    progress: {
      intro:
        'Adoption follows four phases, each with a clear signal that it worked.',
      items: [
        { label: 'Clean the data: merge duplicates and close records gaps', state: 'Phase 1', tone: 'planned' },
        { label: 'Train HR staff to use the system as their first stop', state: 'Phase 2', tone: 'planned' },
        { label: 'Open self-service PDS and clearance to employees', state: 'Phase 3', tone: 'planned' },
        { label: 'Run it as the everyday HR routine', state: 'Phase 4', tone: 'planned' },
      ],
    },
    measures: {
      intro: 'Signals the adoption plan uses to confirm each phase worked.',
      items: [
        'Records completeness trending up, with no duplicate names',
        'HR no longer keeping side spreadsheets',
        'More PDS updates and clearance requests filed through the portal',
        'No lapsed appointments or contracts; clearances finish without chasing',
      ],
    },
  },
  {
    slug: 'timekeeping-system',
    shortName: 'TKS',
    acronym: 'TKS',
    name: 'UPLB Timekeeping System',
    partner: 'UPLB personnel, timekeepers, signatories and HR',
    domain: 'Attendance and leave',
    icon: Clock,
    status: { label: 'In use', tone: 'live' },
    tagline: 'Attendance, Daily Time Records and leave online, with DTRs anyone can verify.',
    summary:
      'TKS replaces paper logbooks, hand-typed Daily Time Records and paper leave routing with one online system. Employees see their own attendance and leave credits at any time, timekeepers generate DTRs in bulk, and HR gets accurate data across the university.',
    problem:
      'Logbooks and bundy cards transcribed by hand every kinsena, typed DTRs, and leave forms walked from desk to desk.',
    highlights: ['Several ways to time in', 'Automatic DTRs', 'Online leave routing'],
    overview: [
      'The UPLB Timekeeping System is the university’s online system for attendance, Daily Time Records (DTRs), leave, Certificates of Service (COS) and travel requests.',
      'Time-ins are recorded the moment they happen and combined into one record per person. DTRs, leave balances and approvals come from that record, so employees, timekeepers, signatories and HR all work from the same figures.',
    ],
    audience: [
      {
        title: 'Employees',
        description:
          'Time in and out, see today’s attendance and remaining leave credits, file leave online and track what changed in their records.',
      },
      {
        title: 'Timekeepers',
        description:
          'See who in their sections is present, generate DTRs for a whole section at once, and record corrections with a reason.',
      },
      {
        title: 'Signatories and supervisors',
        description:
          'Find every leave application and COS waiting for them in one list, and sign them digitally inside the system.',
      },
      {
        title: 'HR',
        description:
          'Monitor attendance across UPLB, keep leave balances in line with HRDO’s records, and manage timekeeping rules in one place.',
      },
    ],
    challenge: {
      intro:
        'Timekeeping relied on paper logbooks, hand-typed records and forms carried between offices, with no reliable way to check a printed DTR or trace a correction.',
      shifts: [
        {
          before: 'Paper logbooks and bundy cards, transcribed by hand every kinsena',
          after: 'Time-ins recorded as they happen, by browser, kiosk, biometric device or ID card',
        },
        {
          before: 'DTRs typed up manually at the end of each period',
          after: 'DTRs generated automatically in CS Form No. 48 format, singly or for a whole office',
        },
        {
          before: 'Leave forms walked from desk to desk for signatures',
          after: 'Leave filed online and routed to each signatory, with a notification at every step',
        },
        {
          before: 'Leave credits known only by asking HR',
          after: 'Balances visible to employees at any time, matching HRDO’s own leave records',
        },
        {
          before: 'No way to tell whether a printed DTR was altered',
          after: 'Every DTR carries a QR code that anyone can scan to confirm it is genuine',
        },
        {
          before: 'Corrections made quietly, with no trail',
          after: 'Every change logged, and visible to the employee it affects',
        },
      ],
    },
    approach: {
      title: 'From time-in to verified DTR',
      intro: 'Attendance from every source becomes one record, computed by the same rules for everyone.',
      steps: [
        {
          title: 'Time in',
          description:
            'Employees time in from a browser on an approved campus network, at a kiosk, on a biometric device, or with an RFID card, depending on what their office allows.',
        },
        {
          title: 'Merge punches',
          description:
            'Biometric punches are imported, matched to the right person, and combined with web and kiosk punches into a single record.',
        },
        {
          title: 'Apply schedules',
          description:
            'Regular, flexible and shift schedules are supported. Holidays and filed travel appear on the DTR automatically.',
        },
        {
          title: 'Compute',
          description:
            'Undertime, tardiness, absences and leave deductions follow the same rules for everyone, using each person’s actual schedule.',
        },
        {
          title: 'Generate DTRs',
          description:
            'DTRs are produced in CS Form No. 48 format, one at a time or for a whole section as a single ZIP download.',
        },
        {
          title: 'Verify',
          description:
            'Anyone, including offices outside UPLB, can scan a DTR’s QR code or enter its verification code to confirm it is genuine and unaltered.',
        },
      ],
    },
    features: [
      {
        icon: House,
        title: 'Everything on the home page',
        description:
          'Today’s punches, a live preview of the current DTR, remaining leave credits, items awaiting the employee’s signature and, if connected, today’s Google Calendar events.',
      },
      {
        icon: CalendarClock,
        title: 'Leave filed in minutes',
        description:
          'The system checks eligibility and available credits, routes the application to the right signatories and notifies the employee as it moves.',
      },
      {
        icon: Timer,
        title: 'Schedules that fit',
        description:
          'Temporary overrides are supported. If an employee’s punches keep matching a different shift, TKS suggests it, and the change can be requested with one tap.',
      },
      {
        icon: UserRoundCheck,
        title: 'Section presence',
        description:
          'Timekeepers see who is in, on leave, on travel or not yet clocked in, for today or any earlier date.',
      },
      {
        icon: FolderArchive,
        title: 'Bulk DTR generation',
        description:
          'Generate DTRs for a whole section at the end of the period and download them as one ZIP instead of preparing each by hand.',
      },
      {
        icon: Signature,
        title: 'Digital signing',
        description:
          'A “Needs your action” list collects every leave application and COS awaiting a signatory, and documents are signed within the system.',
      },
      {
        icon: ChartLine,
        title: 'University-wide dashboards',
        description:
          'HR sees office attendance summaries, on-time rate trends, punctuality, pending leave requests and upcoming holidays.',
      },
      {
        icon: ClipboardCheck,
        title: 'Leave records that match HRDO',
        description:
          'HRDO’s leave workbook is imported directly, with checks that flag overlapping dates or unknown leave codes.',
      },
      {
        icon: SlidersHorizontal,
        title: 'Policy changes with a preview',
        description:
          'HR can adjust how leave credits are earned and deducted, and preview the effect on balances before saving.',
      },
    ],
    safeguards: {
      intro: 'TKS makes attendance records traceable, private between offices, and verifiable outside the system.',
      items: [
        'Personnel sign in with their UP Google account, so there is no separate password to manage.',
        'Every create, edit and delete on important records is logged for HR to review.',
        'Timekeeper corrections record who made them and why, which protects the timekeeper as much as the employee.',
        'When HR enables it, employees see a read-only list of every change others made to their records.',
        'Timekeepers see only the offices and sections assigned to them.',
        'DTRs can be locked once certified, and each one carries a QR code and verification code.',
      ],
    },
    integrations: {
      label: 'Platform and integrations',
      items: [
        'UP Google account sign-in',
        'Biometric devices',
        'RFID ID cards',
        'Kiosk time-in',
        'UPLB HR system',
        'UPLB Performance (IPCR) app',
        'Google Calendar',
        'Phone and browser notifications',
        'QR code verification',
      ],
    },
    progress: {
      intro:
        'TKS has been in active development since June 2024 and is updated frequently based on feedback from personnel, timekeepers and HR.',
      items: [
        { label: 'Attendance, time-in methods and section presence', state: 'Available', tone: 'live' },
        { label: 'DTR generation with QR verification', state: 'Available', tone: 'live' },
        { label: 'Online leave and COS signing', state: 'Available', tone: 'live' },
        { label: 'Data sharing with the HR system and IPCR app', state: 'Connected', tone: 'live' },
        { label: 'Travel requests: filed online; printed form still signed by hand', state: 'Partly online', tone: 'pilot' },
        { label: 'Certified DTR summaries sent to payroll', state: 'In progress', tone: 'pilot' },
        { label: 'Online travel approval', state: 'Planned', tone: 'planned' },
      ],
    },
  },
  {
    slug: 'event-and-certificate-management-system',
    shortName: 'ECMS',
    acronym: 'ECMS',
    name: 'Event and Certificate Management System',
    partner: 'event organizers and participants',
    domain: 'Events and certification',
    icon: Award,
    status: { label: 'Prototype', tone: 'pilot' },
    tagline: 'Registration, attendance, evaluation and certificates in one connected workflow.',
    summary:
      'ECMS brings event participation and certificate management into one place. It covers discovery, registration, attendance, evaluation, certificate design, issuance and verification. Organizers know who is eligible for a certificate, and participants know what they still need to complete.',
    problem:
      'Registration lists, attendance records, evaluations and certificate files handled as separate tasks.',
    highlights: ['Certificate editor', 'Automatic issuance', 'Verification codes'],
    overview: [
      'The Event and Certificate Management System connects the work of administrators, event managers and participants. Organizers manage activities and participation records, while participants follow their progress and retrieve their own certificates from a personal workspace.',
      'Instead of treating registration, attendance, evaluation and certificates as separate tasks, ECMS links them into one documented workflow that is easier to manage, easier to follow, and more accountable.',
    ],
    audience: [
      {
        title: 'Participants and employees',
        description:
          'Discover events, register, track participation, complete evaluations and download their certificates.',
      },
      {
        title: 'Event managers and organizers',
        description:
          'Create events, manage capacity, confirm attendance, review requests and monitor certificate generation.',
      },
      {
        title: 'Administrators',
        description:
          'Manage accounts, roles, permissions, shared resources, certificate operations and audit history.',
      },
      {
        title: 'Authorized verifiers',
        description:
          'Sign in and check a certificate’s recorded status using its QR code or verification code.',
      },
    ],
    challenge: {
      intro:
        'Event administration often relies on separate lists and files. ECMS was designed to address these operational problems; the improvements are to be measured in a pilot.',
      shifts: [
        {
          before: 'Participant information spread across separate lists and files',
          after: 'Event, registration, attendance, evaluation and certificate records managed together',
        },
        {
          before: 'Organizers repeatedly preparing similar certificates',
          after: 'Reusable templates and dynamic fields for individual and bulk generation',
        },
        {
          before: 'Registration mistaken for attendance',
          after: 'Separate registration and check-in steps, with recorded participation methods',
        },
        {
          before: 'Participants asking organizers about their progress',
          after: 'Personal views showing status, feedback and next steps',
        },
        {
          before: 'Certificate authenticity difficult to confirm',
          after: 'Unique numbers, random verification codes and QR checks for authorized users',
        },
        {
          before: 'Later design changes obscuring what was originally issued',
          after: 'Issued certificates keep their template snapshot, final data and files',
        },
      ],
    },
    approach: {
      title: 'The participant journey',
      intro: 'Each step has its own requirements, and every step is recorded.',
      steps: [
        {
          title: 'Prepare',
          description:
            'Organizers set the schedule, participation options, capacity, evaluation form, certificate design and signer.',
        },
        {
          title: 'Register',
          description:
            'Participants find a public event or open a shared link, then choose an available online or onsite slot.',
        },
        {
          title: 'Check in',
          description:
            'Attendance is confirmed by the organizer, through scheduled online check-in, or at an onsite kiosk.',
        },
        {
          title: 'Evaluate',
          description:
            'After the activity, eligible participants submit the evaluation. This can trigger automatic certificate issuance.',
        },
        {
          title: 'Generate',
          description:
            'Background workers produce PNG and PDF certificates. Staff monitor progress and retry any failures.',
        },
        {
          title: 'Verify',
          description:
            'An authorized, signed-in user checks the QR or verification code to view the certificate’s recorded status.',
        },
      ],
    },
    features: [
      {
        icon: CalendarDays,
        title: 'Events and registration',
        description:
          'A searchable directory of public events, private events shared by link, and separate capacity limits for online and onsite participation.',
      },
      {
        icon: ScanLine,
        title: 'Attendance check-in',
        description:
          'Check in individuals or groups, use scheduled online check-in, or run an onsite kiosk.',
      },
      {
        icon: ClipboardList,
        title: 'Reusable evaluations',
        description: 'Evaluation forms can be reused across activities to collect feedback after each event.',
      },
      {
        icon: PenTool,
        title: 'Certificate editor',
        description:
          'Design with text, images, dynamic fields, alignment and layers. Version history, comments and save-conflict recovery support shared designs.',
      },
      {
        icon: BadgeCheck,
        title: 'Flexible issuance',
        description:
          'Reviewed requests, automatic issuance after evaluation, and authorized manual or bulk issuance. Reviewers cannot approve their own requests.',
      },
      {
        icon: ShieldCheck,
        title: 'Verification and record protection',
        description:
          'Certificates carry unique numbers and verification codes. Issued, processing, expired and revoked states are tracked, with audit history and private file access.',
      },
    ],
    stack: {
      label: 'Technology stack',
      items: ['Laravel 12', 'Filament 5', 'PHP', 'Blade', 'JavaScript (ES modules)', 'Tailwind CSS 4', 'Vite', 'Fabric.js'],
    },
    integrations: {
      label: 'Integrations',
      items: ['Google sign-in', 'Email delivery', 'HR synchronization', 'RFID', 'Background job queues'],
    },
    progress: {
      intro:
        'The core features exist today. The adoption phases below are proposed: deployment and institutional approval are not yet complete.',
      items: [
        { label: 'Event, attendance, evaluation and certificate workflows', state: 'Built', tone: 'ready' },
        { label: 'Confirm requirements, users and authorized branding', state: 'Proposed', tone: 'planned' },
        { label: 'Prepare environment and run a controlled pilot', state: 'Proposed', tone: 'planned' },
        { label: 'Evaluate usability and reliability, then introduce approved use', state: 'Proposed', tone: 'planned' },
      ],
    },
    measures: {
      intro: 'Baselines and targets are to be agreed before the pilot.',
      items: [
        'Staff time spent preparing and issuing certificates per event',
        'Time between eligibility or approval and certificate availability',
        'Share of generation jobs completed without manual recovery',
        'Share of eligible participants who retrieve their certificates',
        'Participant and organizer feedback on clarity and ease of use',
      ],
    },
    note: 'ECMS is currently a UPLB-only prototype. Its intended institutional use does not imply official endorsement or permission to use institutional branding and signatures.',
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

/** Facts that can be stated as numbers, each traceable to a reference document. */
export const highlights = [
  { value: '5', label: 'University systems', detail: 'Built across property, health, HR, timekeeping and events' },
  { value: '9', label: 'COA forms automated', detail: 'Generated by AMP from one set of records' },
  { value: '60-day', label: 'Expiry warnings', detail: 'For HR appointments and contracts' },
  { value: '3-click', label: 'Medical certificates', detail: 'Issued straight from a UHIS clinic visit' },
] as const;

/** Documented milestones only. */
export const milestones = [
  {
    project: 'AMP',
    icon: Boxes,
    title: 'Core property lifecycle live',
    description:
      'Acquisition, registry, numbering, PAR/ICS, custody, transfers, depreciation, SSO and public QR verification are live for the SPMO.',
  },
  {
    project: 'UHIS',
    icon: HeartPulse,
    title: 'First phase built',
    description:
      'Out-patient visits, medical certificates, the patient portal and semester clearance are built and being prepared for go-live.',
  },
  {
    project: 'Personnel System',
    icon: IdCard,
    title: 'Connected HR records',
    description:
      'Employee records feed the Timekeeping and Performance systems, and identities sync from the university directory.',
  },
  {
    project: 'TKS',
    icon: Clock,
    title: 'Timekeeping online',
    description:
      'Attendance, DTRs, leave and COS signing run online, with work underway to send certified DTR summaries to payroll.',
  },
  {
    project: 'ECMS',
    icon: Award,
    title: 'Working prototype',
    description:
      'The full path from event registration to certificate verification is in place, ready for a proposed pilot.',
  },
] as const;

