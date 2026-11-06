# UPLB ECMS: Application Purpose and Plan

Prepared: November 6, 2026  
Scope: Description of the existing UPLB-only prototype and a proposed plan for evaluating and adopting it.

## 1. Application overview

UPLB ECMS (Event and Certificate Management System) is a web application that brings event participation and certificate management into one place. It supports event discovery, registration, attendance tracking, evaluation, certificate design, issuance, download, and authenticated verification.

The application connects the work of administrators, event managers, and participants. Organizers manage activities and participation records, while participants follow their progress and access their own certificates through a personal workspace.

It is currently a UPLB-only prototype. Its intended institutional use does not establish official endorsement or permission to use institutional branding and signatures.

## 2. Purpose

The purpose of UPLB ECMS is to make event and certificate administration easier to manage, easier to follow, and more accountable.

Instead of treating registration lists, attendance records, evaluations, certificate designs, and issued files as separate tasks, the application links them into a documented workflow. This helps organizers determine who is eligible for a certificate and helps participants understand what they need to complete.

Its main objectives are to:

- Reduce repeated data entry through reusable designs, recipient imports, and dynamic certificate fields.
- Keep registration, attendance, evaluation, and certificate records connected.
- Give participants a clear place to track participation and retrieve certificates.
- Support consistent certificate designs and controlled issuance.
- Maintain certificate history and provide a way to check certificate status.
- Restrict management actions and personal records according to account permissions.

## 3. Problems the application addresses

These are the operational problems the app is designed to address; improvements should be measured during a pilot rather than assumed.

| Problem | How the app helps |
| --- | --- |
| Participant information is spread across separate lists and files. | Related event, registration, attendance, evaluation, and certificate records are managed within the same system. |
| Organizers repeatedly prepare similar certificates. | Reusable templates and dynamic fields support individual and bulk generation. |
| Registration is mistaken for attendance. | Registration and check-in are separate steps, with recorded participation methods. |
| Participants need to ask organizers about their progress. | Personal participation and request views show status, feedback, and next steps. |
| Certificate requests are difficult to track. | Requests retain their review status and feedback, with safeguards against duplicate pending or approved requests. |
| Certificate authenticity and current status are difficult to confirm. | Unique numbers, random verification codes, and QR/code verification support status checks by authorized signed-in users. |
| Later design changes could obscure what was originally issued. | Issued certificates retain their template snapshot, final data, and generated files. |

## 4. Users and their benefits

| User group | Main activities | Practical benefit |
| --- | --- | --- |
| Participants and employees | Discover events, register, check participation progress, complete evaluations, and download personal certificates. | A single place to follow their participation and access completed certificates. |
| Event managers and authorized organizers | Create events, manage registration capacity, confirm attendance, review requests, and monitor certificate generation. | Less coordination across separate tools and clearer oversight of event completion. |
| Administrators | Manage accounts, roles, permissions, shared resources, certificate operations, and audit history. | Central oversight with controlled access to institutional records and workflows. |
| Authorized certificate verifiers | Sign in and check a certificate using its QR code or verification code. | Access to the recorded certificate status and limited identifying details. |

Actual access depends on the permissions assigned to each account. Custom roles can also be configured.

## 5. Main application features

### Event management and registration

Organizers create activities with schedules, descriptions, participation options, registration availability, certificate designs, and signers. Public events appear in a searchable directory; private activities use organizer-shared links. Online and onsite participation can have separate capacity limits.

### Attendance and evaluation

Registration reserves a place but does not confirm attendance. Organizers can check in individual participants or groups. Eligible online participants can use the scheduled online check-in flow, and an enabled creator-operated kiosk supports onsite attendance. Reusable evaluation forms collect feedback after an activity.

### Certificate design

The certificate editor supports editable copies of starter designs, blank layouts, text, images, dynamic fields, alignment, layers, and other layout controls. Version history, review, comments, and save-conflict recovery help staff maintain shared designs.

### Certificate issuance and delivery

The application supports reviewed certificate requests, automatic issuance after eligible evaluation submissions, and authorized manual or bulk issuance. Generation runs in background queues and produces PNG and PDF files. Staff can monitor progress and retry failed generation; participants can retrieve completed certificates from their personal workspace.

### Verification and record protection

Certificates have unique numbers and verification codes. Authorized users can check recorded status, including issued, processing, expired, and revoked states. Private file access, permissions, audit history, and preserved issued-document snapshots support controlled record handling.

## 6. Typical user journey

1. **Prepare the activity.** An organizer sets the schedule, participation options, capacity, evaluation form, certificate design, and signer.
2. **Discover and register.** A participant opens the event details or shared registration link, signs in when required, and chooses an available participation method.
3. **Attend and check in.** Attendance is recorded through the applicable organizer, online, or kiosk workflow.
4. **Complete the requirements.** After the activity ends, an eligible participant submits the evaluation. Eligible evaluation submissions can trigger automatic certificate issuance; ordinary certificate requests follow the review workflow.
5. **Review when required.** An authorized reviewer approves or rejects a request. Rejection includes feedback, and reviewers cannot approve their own requests.
6. **Generate and retrieve.** A background worker generates the certificate files. The participant downloads the completed certificate once it is available.
7. **Verify when needed.** An authorized signed-in user checks the QR code or verification code to view the recorded status.

Standalone manual issuance also supports certificates for courses, recognition, and other achievements without requiring the full event participation journey.

## 7. Proposed adoption plan

The core features described above already exist. The following phases are proposed evaluation and rollout activities, rather than a claim that deployment or institutional approval is complete.

| Phase | Planned activities | Completion criteria |
| --- | --- | --- |
| 1. Confirm requirements | Agree on intended users, permissions, eligibility rules, authorized branding, and pilot scope. | A documented workflow and named owners for administration and event operations. |
| 2. Prepare the environment | Configure accounts, approved templates, storage, mail, background workers, scheduler, and backups. | A sample certificate completes generation and authorized download; configured email delivery and backup restoration are checked. |
| 3. Run a controlled pilot | Use an isolated test environment and fictional accounts to exercise registration, attendance, evaluation, automatic issuance, reviewed requests, and verification. | Each workflow completes with the expected access restrictions and certificate status. |
| 4. Evaluate usability and reliability | Gather participant and organizer feedback; check mobile use, keyboard access, themes, failed-job recovery, and record accuracy. | Findings are documented and blocking issues are resolved before broader use. |
| 5. Introduce approved use | Onboard authorized organizers, provide written instructions, and assign operational support. | Users understand their responsibilities and staff can monitor and recover certificate processing. |
| 6. Maintain and improve | Monitor processing, review permissions, test restores, and prioritize improvements from actual usage. | Recurring operational reviews and an evidence-based improvement backlog. |

## 8. Measures of success

Establish a baseline and agree on targets before the pilot. Useful measures include:

- Staff time spent preparing and issuing certificates per event.
- Time between eligibility or approval and certificate availability.
- Percentage of generation jobs completed successfully without manual recovery.
- Number of certificate corrections and duplicate-related support issues.
- Percentage of eligible participants who retrieve their certificates successfully.
- Participant and organizer feedback on clarity and ease of use.
- Results of access-control checks and backup restoration exercises.

The expected outcome is less administrative effort and clearer participant progress. The pilot should determine whether those benefits are achieved.

## 9. Scope and operating requirements

- Private workspaces, certificate files, and verification require the applicable account access; verification is not an unrestricted public lookup.
- Background workers and a working browser renderer are required to complete certificate generation. Scheduled tasks support reminders and maintenance.
- Email delivery, Google sign-in, storage, HR synchronization, and RFID integrations depend on their own configured services and access.
- Registration, attendance, evaluation, review, and certificate generation remain distinct steps with their own requirements.
- Walkthrough video updates are paused under the current owner direction. Existing archived media and freshness baselines must remain intact until recreation is explicitly requested.

## 10. Technical foundation and references

The existing application uses Laravel 12, Filament 5, PHP, Blade, JavaScript ES modules, Tailwind CSS 4, Vite, and a Fabric.js certificate editor. This plan builds on that architecture.

- [Application README](../README.md): setup, supported features, access rules, and workflows.
- [Documentation map](README.md): current feature notes and implementation reviews.
- [Automatic certificate completion](AUTOMATIC-CERTIFICATES.md): automatic issuance, background generation, and recovery.
- [Certificate operations](CERTIFICATE-OPERATIONS.md): batch processing and exports.
- [Evaluation forms](EVALUATION-FORMS.md): reusable forms and response handling.
- [Server setup](SERVER-SETUP.md): deployment and service requirements.
