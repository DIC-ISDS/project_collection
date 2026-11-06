# UHIS in Day-to-Day Work

**For:** University Health Service (UHS) staff and unit heads, and the university offices that depend on UHS (registrar, colleges, HR).
**Status, November 2026:** out-patient visits, medical certificates, the patient portal and semester clearance are built and are being prepared for go-live. Laboratory, pharmacy, appointments, dental, ER and in-patient care come in later phases ([section 9](#9-what-comes-next)).

This document explains what the University Hospital Information System (UHIS) changes in each person's working day, and the steps to start using it.

## Contents

1. [What UHIS is](#1-what-uhis-is)
2. [What changes](#2-what-changes)
3. [A day at the clinic, role by role](#3-a-day-at-the-clinic-role-by-role)
4. [Clearance season, start to finish](#4-clearance-season-start-to-finish)
5. [Students and employees: the portal](#5-students-and-employees-the-portal)
6. [Checking that a certificate is genuine](#6-checking-that-a-certificate-is-genuine)
7. [Safeguards built in](#7-safeguards-built-in)
8. [Rollout plan](#8-rollout-plan)
9. [What comes next](#9-what-comes-next)
10. [How we'll know it's helping](#10-how-well-know-its-helping)
11. [Terms used](#11-terms-used)

---

## 1. What UHIS is

UHIS replaces paper charts, handwritten certificates and hand-counted tallies with one system that every UHS unit shares. Each member of the university community has **one record**, whichever clinic they visit.

| Part | Who uses it | What for |
| :-- | :-- | :-- |
| **Clinic workspace** | Physicians, nurses, records staff, the clearance team, at each facility | Daily patient work: visits, certificates, clearance |
| **Patient portal** | Students and employees, signing in with UP Mail | Their own certificates, clearance and visit history, from a phone or computer |
| **Admin workspace** | System administrators, the Data Protection Officer, auditors | Setup, settings, staff accounts, audit trails |
| **Verification page** | Anyone, no login | Checking a certificate by scanning its QR code |

## 2. What changes

| Today, on paper | With UHIS |
| :-- | :-- |
| Long lines at the start of every semester for medical clearance | Students get a date by college, answer the health history online before they come, and move through stations by scanning the QR on their ID |
| Certificates are handwritten and easy to forge | Every certificate is a PDF with a control number and a QR code that anyone can check |
| A patient's history is spread across folders | One record per person, with a timeline of visits, certificates and clearance |
| Staff copy the same patient details onto every form | Details are entered once and filled in everywhere |
| Students return to the clinic to pick up or ask about a certificate | They track it and download it from the portal |
| Clearance and certificate reports are counted by hand | Dashboards and exports are always current |

## 3. A day at the clinic, role by role

### Records officer and front desk

- **Find a patient in seconds.** Search by name, hospital number or student/employee number. The search tolerates misspellings.
- **Register a new patient.** The hospital number is assigned automatically. The patient's privacy consent is recorded, a photo can be taken with the webcam, and an ID card with a QR code can be printed.
- **Catch duplicates.** The system flags records that look like the same person (similar name, same birthday). The records officer reviews them and merges the pair; the visits, certificates and clearance of both move to the surviving record, and the merge is logged.
- **Start a visit.** Choose the service, note the chief complaint, and mark a priority patient (PWD, senior, pregnant, emergency).
- **Handle certificate requests.** Requests that students send from the portal arrive in a queue. Records can return a request with a reason or pass it on to a physician.
- **Release and print certificates.** Reprints are stamped "REPRINT – Original issued on …" automatically and counted. A whole clearance batch can be printed at once.
- **Record fees, if UHS charges them.** When fees are switched on for a certificate type, the fee and OR number are recorded before release.

*What it saves:* hunting for folders, rewriting patient details, and answering "is my certificate ready?" at the window or by phone.

### Nurse (triage)

- **One worklist per service** shows who is waiting, in triage, waiting for the physician, and in consultation. Priority patients come first, then by arrival time. It refreshes by itself.
- **Enter vital signs.** BMI is computed automatically. Set the triage level and confirm the chief complaint.
- **Allergies and chronic conditions** are on the patient's record, visible before the physician sees the patient.
- When triage is done, the patient appears on the physician's list without anyone carrying a chart.

### Physician

- **Open the next patient** from the worklist. Vitals and chief complaint are already there; past visits, allergies, conditions and immunizations are on the patient's timeline.
- **Write the consultation note** in SOAP format. Search ICD-10 by code or by words, and record a primary diagnosis and any secondary ones. Attach forms such as the physical exam.
- **Sign** by re-entering a password or a signing PIN. A signed visit is locked; a later correction is added as a signed addendum and the original stays as it was.
- **Issue a certificate from the visit in three clicks** after choosing the type. Patient details, dates and findings are filled in. On absence excuses, the diagnosis is hidden unless the patient agrees to show it.
- **The system checks the rules for you:** an active PRC licence and a current-year PTR must be on file, and the covered dates cannot start more than a set number of days before the visit (3 by default; administrators can change it).
- **Review portal requests:** approve, return or deny, with a reason the patient can read.
- **Validate outside medical certificates** that students upload, and issue a UHS validation certificate.
- **Final clearance review** and a **co-sign list** for certificate types that need two signatures.

*What it saves:* writing certificates by hand, copying patient data, and students coming back just to collect a paper.

### Station staff during clearance

- Scan the QR on the student's ID card (or search by name) and see **only the items for that station**.
- If the network drops for a moment, the page keeps trying and shows "Not saved yet — retrying" until the entry is saved. Nothing is entered twice.

### Clearance coordinator

Sets up and runs the season. See [section 4](#4-clearance-season-start-to-finish).

### Facility administrator

- Switches each module on or off for the facility, so units can start one at a time.
- Gives staff their roles at the facility. A person can be a physician at one clinic and an administrator at another.
- Maintains the facility's services, clearance stations, logo and letterhead.

### System administrators (DIC)

- **Certificate types and templates**, with a live preview. Wording can change without programmers, and a new template version never changes certificates already issued.
- **Form builder**, so UHS can digitize its own paper forms: health history, physical exam, screening questionnaires.
- **Settings for the rules UHS decides:** backdating limit, PIN rules, how long download links last, portal options, clearance defaults, holidays and class suspensions, academic terms, numbering formats and email wording.
- **Staff accounts and system roles.** Accounts are deactivated, never deleted, because the audit trail points at them. To help with a support question, a super administrator can view the system as a staff member would see it; this is view-only, needs a stated reason, and is logged.

### Data Protection Officer and auditors

- **Change log:** who changed what, and when, with export.
- **Record access log:** who opened which patient's record. Reads are logged, not only changes.
- **Restricted forms** such as mental-health screening are hidden from everyone without that specific permission, system administrators included, and every view of them is logged.

## 4. Clearance season, start to finish

This is the busiest time of the UHS year.

**Before the semester (clearance coordinator)**

1. Create the clearance period for the academic term and choose who it covers: for example freshmen and transferees, or particular colleges, programs or year levels.
2. Build the checklist: health history questionnaire, physical exam, laboratory tests, chest X-ray, dental, immunization review, and optionally a mental-health screening. Mark which items accept outside results and how recent they must be (for example, an X-ray within 6 months). The previous period's checklist can be copied as a starting point.
3. Import the registrar's enrolled list.
4. Set batches per college or program, each with a date window and a daily capacity. The system gives each student a date, skipping holidays and class suspensions.
5. For the second semester, results that are still valid for the academic year carry over, so students don't repeat them.

**Before clinic day (student, in the portal)**

- Sees a clearance card with the assigned date and a checklist showing each item's status.
- Answers the health history and screening questionnaires online.
- Uploads outside results where allowed; staff accept them or reject them with a reason.
- Moves to another open date within their window, if UHS allows it.

**Clinic day (stations and physician)**

1. The student goes through the stations the facility has set up (by default vitals → lab → X-ray → dental → physician). Each station scans the ID and completes its own item.
2. The physician reviews completed records and sets the result: *Cleared*, *Cleared with remarks*, *Deferred*, *Referred* or *Not cleared*.
3. *Cleared* issues the clearance certificate automatically. The student is notified and downloads it.

**During the season (clearance coordinator)**

- A dashboard shows completion by college, program and year level, pending items, station throughput per hour, and students scheduled versus seen today.
- Send reminders to students whose clearance is incomplete.
- Export the list of cleared students, with control numbers, for the registrar.

## 5. Students and employees: the portal

| Feature | What the patient can do |
| :-- | :-- |
| Sign-in | Use their UP Mail account |
| Privacy notice | Accept it on first sign-in, and again when it changes |
| Profile | Update contact details and emergency contacts |
| My certificates | Request one for a visit they had, or upload an outside certificate for validation; track its status; download the PDF |
| My visits | See a list of their visits (clinical notes are not shown) |
| My clearance | Checklist, questionnaires, uploads, assigned date |
| Inbox | Notices when a request changes status, a certificate is ready, or clearance needs attention |
| Who opened my record | A list of staff who viewed their record (if UHS turns it on) |
| Language and phone | English or Filipino; can be added to a phone's home screen like an app |

## 6. Checking that a certificate is genuine

Faculty, the registrar, HR or an outside office can scan the QR code on a certificate or type its code on the verification page. No login is needed.

- **They see:** whether it is *Valid*, *Revoked*, *Superseded*, *Expired* or *Not found*; the certificate type; control number; the patient's name, partly masked; dates; facility; and physician.
- **They never see** the diagnosis.
- When a certificate is corrected, the old one shows *Superseded*, so an outdated or altered copy is caught.

## 7. Safeguards built in

Health information is sensitive personal information under the Data Privacy Act of 2012 (RA 10173). UHIS is built so that the safe way is the normal way of working.

- **Signed means final.** Signed visits and issued certificates cannot be edited. Corrections are signed addenda, or a certificate is revoked and reissued.
- **Nothing clinical is deleted.** Duplicate patients are merged, not deleted. Allergies, conditions and immunizations are corrected, not removed.
- **Signing asks for a password or PIN again**, so an unattended computer cannot sign.
- **Every view is logged**, as well as every change.
- **Facilities are kept apart.** Staff see visits and certificates only from the facilities they work in. The patient record itself is shared, so a patient has one history.
- **Clinical text is encrypted** and kept out of the change log.
- **Uploads are scanned for viruses.** A file that can't be scanned is refused.
- **Download links expire** after a few minutes and work only for the person they were made for.
- **Nothing is sent to outside services from the browser.** Avatars and fonts are served by UHIS itself.

## 8. Rollout plan

### 8.1 What's ready and what isn't

| Ready | Not yet (later phases) |
| :-- | :-- |
| Patient registry, duplicate merging, ID cards | Laboratory and imaging modules |
| Out-patient visits, triage, SOAP notes, signing | Appointments, queue boards, kiosk, SMS reminders |
| Medical certificates with QR verification | Pharmacy and e-prescriptions |
| Patient portal | Dental charting, employee annual exams, sick-leave link to HR |
| Semester clearance with stations and dashboard | ER, in-patient care, billing |

Until the laboratory and dental modules arrive, clearance lab, X-ray and dental results are entered through forms at each station. Until the AMIS/SAIS connection is granted, students come from the registrar's CSV list.

### 8.2 Before the first real patient record

These come from the go-live steps in [UHIS_Phase2_Plan.md](UHIS_Phase2_Plan.md) §10.2. Owners are suggestions to confirm.

| Step | Suggested owner |
| :-- | :-- |
| Privacy impact assessment signed off | Data Protection Officer |
| Records retention period confirmed | Records Office and DPO |
| Hosting decision; production storage and virus scanning in place | DIC and university administration |
| UP Mail sign-in working in production | DIC |
| Security test of the verification page, portal, uploads and download links | DIC |
| Load test at clearance peak: 500+ portal users at once and 1,000+ clearance visits a day | DIC |
| Production backups with a successful restore drill | DIC |
| Accessibility check of the portal and verification page with a screen reader | DIC |
| Physicians' PRC and PTR details, signature images and signing PINs collected | UHS |
| This season's clearance checklist per population | UHS |
| Certificate wording reviewed; Filipino translations reviewed | UHS |
| Station hardware: QR scanners, printers, one device per station | UHS and DIC |
| A paper fallback for when the system is unavailable | UHS |

### 8.3 Suggested sequence

1. **Set up.** Facility profile and letterhead, staff accounts and roles, certificate templates, and the UHS paper forms rebuilt in the form builder.
2. **Train each role** on the test system with sample data. Short hands-on sessions work best; each role should leave able to do the tasks below.

   | Role | Should be able to |
   | :-- | :-- |
   | Front desk and records | Search, register, merge duplicates, start a visit, handle requests, release and reprint certificates |
   | Nurses | Use the worklist, enter vitals and triage |
   | Physicians | Write and sign a note, add an addendum, issue, revoke and reissue a certificate, review requests, do final clearance review |
   | Clearance team and station staff | Set up a period and batches, run a station, read the dashboard, send reminders |
   | Administrators and DPO | Change settings, edit a template, read the change and access logs |

3. **Go live with visits and absence certificates first.** They help right away and don't depend on clearance. Start at one facility or a small group, with paper forms on hand.
4. **Pilot clearance with a small cohort**, such as one college, before a full start-of-semester rush.
5. **Run the full clearance season.**
6. **Review after the season.** Collect staff and student feedback and adjust settings (capacities, checklists, wording) before the next one.

## 9. What comes next

| Phase | Adds | How it helps day to day |
| :-- | :-- | :-- |
| **3 — Out-patient depth** | Laboratory and imaging; appointments, queue boards and a self check-in kiosk with SMS reminders; pharmacy and e-prescriptions; employee annual exams and sick-leave certificates sent to HR; dental charting; referrals; clearance status sent to the registrar | Lab results flow into clearance without retyping; patients book ahead and wait less; the pharmacy is warned before stock runs out or expires; HR receives sick-leave certificates directly |
| **4 — Emergency and in-patient** | ER, admissions, a live bed board, physician orders, medication administration record, nursing notes, discharge, confinement certificate | One timeline from ER to discharge; wards see bed status live; confinement certificates fill in their own dates |
| **5 — Finance and scale** | Billing by patient category, PhilHealth data, satellite clinics or another campus, digital (PKI) signatures, configurable dashboards | Charges follow coverage rules automatically; new clinics join the same system and patient index |

## 10. How we'll know it's helping

Measure these during the pilot, against the paper process, and again after each season:

- Time a student spends at the clinic on clearance day
- Students cleared per day per facility (the system is designed for hundreds a day per facility)
- Share of students who answered the health history before clinic day
- Time from consultation to the certificate in the student's hands
- Visits and calls just to collect or ask about a certificate
- Certificate verifications, and how many came back *Revoked* or *Not found*
- Staff hours spent preparing clearance and certificate reports
- Staff and student feedback

## 11. Terms used

| Term | Meaning |
| :-- | :-- |
| SOAP | Subjective, Objective, Assessment, Plan: the usual format of a consultation note |
| ICD-10 | The international list of diagnosis codes |
| Addendum | A signed note added to a locked visit to correct or add to it |
| MC-CLR, MC-ILL, MC-VAL | Clearance certificate, illness/absence certificate, validation of an outside certificate |
| PRC / PTR | A physician's licence number / Professional Tax Receipt, both printed on certificates |
| Facility | A UHS clinic or unit using UHIS; each has its own staff, visits and numbering |
| DPO | Data Protection Officer |
