# UPLB Personnel System: How It Supports HR Day to Day

This plan covers what the UPLB Personnel System does for the HR office, how it fits into a normal working day, and how to get the most out of it. It is written for HR staff and HR management, not for developers.

---

## 1. What the system is for

The Personnel System is the single place where UPLB keeps its employee records: who works here, in which office, under what appointment, and with what documents on file.

It replaces three things HR used to juggle:

- **Spreadsheets** for the running list of employees
- **Paper forms** for the Personal Data Sheet (PDS), appointments, clearances and contracts
- **Back-and-forth messages** with offices to answer "who is in your office?" and "has this employee been cleared?"

Records are entered once and reused everywhere: the employee list, printed forms, org charts, reports, and the other UPLB systems (Timekeeping and Performance).

---

## 2. Who uses it

| User | Where they log in | What they do |
|---|---|---|
| **HR staff** | Admin panel | Maintain records, process appointments, contracts and clearances, run reports |
| **System administrators** | Admin panel | Everything HR does, plus user accounts, roles and system settings |
| **Employees** | Employee portal (UP Mail login) | View and update their own PDS, request clearance, check leave credits, see their office's org chart, complete their IPCR |
| **Clearing officers / approvers** | Employee portal | Approve or return clearance requests assigned to them |
| **Timekeepers** | Employee portal (also reachable from TKS) | Update records of the staff they handle; see a log of changes made to their staff |

Because employees can see and update their own information, HR spends less time encoding and answering walk-in requests for basic information.

---

## 3. A typical HR day

### Morning: check the Dashboard (5 minutes)

The admin Dashboard shows what needs attention today:

- **Appointments expiring within 60 days**: who needs renewal paperwork started now, not on the last week
- **Contracts expiring within 60 days**: COS/ICS contracts coming up for renewal, with funding source and status
- **Clearance status**: how many clearances are pending versus approved
- **Records completeness**: how complete the employee records are, so gaps get fixed before they are needed
- **Workforce summary**: total employees, regular and non-regular counts, male and female counts, headcount by office and by appointment type
- **Birthdays today**: for office greetings

**Habit to build:** start each day from the two "expiring within 60 days" lists. They are the early warning for lapsed appointments and contracts.

### During the day: handle requests as they come

| When someone asks… | Go to… | What the system does for you |
|---|---|---|
| "Can I get a list of all faculty in CAS with their positions?" | **Employee List** | Filter, sort by several columns, switch between saved views (Appointment, Personal Info, Physical, Government IDs, Contact), and export to Excel/CSV with only the columns you need |
| "Please update my address / civil status / education." | **Employees** → the person's record | Edit the PDS in tabs. Most employees can do this themselves in the portal. |
| "We need a copy of this employee's PDS." | **Employees** → PDS | Generates the PDS PDF in the current CSC format |
| "We need the Work Experience Sheet." | **Employees** → Work Experience | Generates the WES PDF, with all entries or just the ones you pick |
| "Process this new appointment / promotion." | **Appointments** | Records the appointment, fills in the monthly salary from the Salary Grade Step table, and prints the CSC Form 33-A and the faculty appointment letters (Original, Promotion/Salary Increase, Tenure) |
| "This COS/ICS contract needs renewal." | **Contracts** | Shows the required-document checklist for the case (original, renewal or replacement; internal or external funding) and flags what is still missing |
| "Has this employee been cleared?" | **Clearances** | Shows every approver, who has signed off, who is pending, and produces the clearance PDF once approved |
| "Who is in this office, and who heads it?" | **Org Chart** | Draws the office with its head, its people grouped by Faculty, Administrative and REPS, and its sub-offices; exports to PDF or PNG |
| "How many promotions or transfers happened this year?" | **Personnel Movements** | Lists each employee's promotions, transfers and reclassifications, filterable by date range |
| "Who changed this record, and when?" | **Activity Logs** | Shows every create, update and delete with the user and time, including a filter for changes made by timekeepers |

### End of day: nothing to reconcile

Each change is saved to the central record and logged as it is made. There is no master spreadsheet to update at the end of the day and no second system to re-encode into.

---

## 4. Core HR processes, step by step

### 4.1 Employee records and the PDS

1. Basic identity (name, UP Mail) comes in automatically from the University's central directory (UDR). HR does not re-type it.
2. HR or the employee fills in the rest of the PDS: family background, education, civil service eligibility, work experience, trainings, references and government IDs.
3. Sensitive numbers (GSIS, Pag-IBIG, PhilHealth, SSS, TIN, employee number) are stored encrypted.
4. The PDS and WES PDFs are generated on demand from the record and always reflect the latest data.
5. If the same person appears twice (common after old imports), HR can **merge the duplicates** into one record, with a dry-run preview before anything changes.

### 4.2 Appointments

1. Create the appointment under the employee: office, designation, category, type, salary grade and step.
2. The monthly salary is looked up from the Salary Grade Step table, so it does not have to be computed by hand.
3. Print the CSC Form 33-A (page 1 is pre-filled; page 2 is completed by hand after printing) and the matching faculty notice letter.
4. The new appointment appears right away in the Employee List, the Org Chart, and the Timekeeping and Performance systems.

### 4.3 COS / ICS contracts

1. Choose the funding source (internal or external) and employee type (original, renewal or replacement).
2. The system shows the exact documents required for that combination, for example the request letter, ATH form, NDA, TTBDO certificate, birth certificate, PMRF, PDS, org chart, accomplishment report and TOR.
3. Tick documents off as they arrive. The contract shows as incomplete until everything is in.
4. Contracts are marked **expired** automatically once their end date passes, and appear on the Dashboard 60 days before that.

### 4.4 Clearance

1. The employee files the clearance request from the portal and states the reason.
2. The system routes it to every required approver and clearing officer.
3. Each approver signs off from their own portal. Where one of several officers in a group can approve, the first approval counts for the whole group.
4. When all approvals are in, the clearance is marked approved and the clearance PDF is generated.

HR's role shifts from chasing signatures to monitoring the Clearances list for requests that have stalled.

### 4.5 Performance (IPCR)

- HR sets up **Rating Periods** and **Support Functions**.
- Employees and supervisors complete IPCR targets and ratings in the portal, with pending IPCRs shown on their dashboard.
- HR can see the status of every IPCR from the admin panel.

### 4.6 Leave credits

Employees see their vacation and sick leave balances on their portal dashboard. The balances come from the Timekeeping System (TKS), which is the official source, so the Personnel System never shows a different figure from TKS.

---

## 5. How the system cuts down HR workload

| Before | With the system |
|---|---|
| Re-typing the same employee details on every form | Enter once; every form and PDF is generated from the record |
| Keeping a running list in a spreadsheet that goes stale | The Employee List is always current and exports on demand |
| Finding out about an expiring appointment after it lapsed | 60-day warning on the Dashboard |
| Checking contract requirements against a memo each time | The checklist is built into each contract |
| Walking clearance forms from office to office | Approvers sign off online; HR watches progress |
| Encoding employee updates from paper | Employees update their own PDS |
| Calling offices to ask who works there | Org Chart for any office, exportable |
| "Who changed this?" with no answer | Full activity log of who changed what, and when |
| Updating Timekeeping and Performance separately | Changes flow to both systems automatically |

---

## 6. Recommended routines

### Daily
- [ ] Open the Dashboard and review both "expiring within 60 days" lists
- [ ] Check the Clearances list for requests pending too long
- [ ] Process new appointments and contracts as paperwork arrives

### Weekly
- [ ] Review the Records Completeness widget and follow up on incomplete records
- [ ] Look at the Activity Log's timekeeper changes for anything that needs HR review
- [ ] Post announcements for employees (Settings → Announcement) when needed

### Monthly / per period
- [ ] Export the Employee List for management or CSC reporting
- [ ] Run the Personnel Movements report for promotions and transfers
- [ ] Open or close IPCR rating periods on schedule
- [ ] Check Usage Analytics to see whether offices and employees are actually using the portal

---

## 7. Things HR should know

These are the current limits that affect daily work:

1. **Names and UP Mail addresses come from the central directory (UDR).** A misspelled name has to be corrected there, or it will revert on the next sync. HR-owned details (civil status, government IDs and so on) are edited here as usual.
2. **Leave balances are owned by TKS.** If an employee's leave credits look wrong, the correction is made in TKS, not here.
3. **The fixed list of clearance approvers is set by IT.** When an approver retires, transfers or changes role, tell the system administrators so the list can be updated. Otherwise new clearances will wait on someone who is no longer there.
4. **Some employee numbers are placeholders.** Several hundred older records share a placeholder employee number (000000000). Search by name or UP Mail for those employees until their real numbers are filled in.
5. **Saving an appointment, office or designation also updates TKS and the Performance system.** Double-check before saving, especially on bulk imports.

---

## 8. Adoption plan

| Phase | Goal | Activities | How we know it worked |
|---|---|---|---|
| **1. Clean the data** | Records HR can trust | Merge duplicate employees, fill missing employee numbers, close the gaps shown by Records Completeness, counter-check the Employee List against the official running list | Records Completeness trending up; no duplicate names in the Employee List |
| **2. Train HR staff** | Everyone in HR uses the system as their first stop | Walk through each process in Section 4; use the built-in guided tours on the main screens | HR stops keeping side spreadsheets |
| **3. Open self-service to employees** | Employees maintain their own PDS and file their own clearances | Announce through the portal and offices; brief timekeepers and clearing officers | More PDS updates and clearance requests filed through the portal, visible in Usage Analytics |
| **4. Run it as routine** | The system is how HR works day to day | Follow the routines in Section 6; review usage monthly | No lapsed appointments or contracts; clearances finish without chasing |

---

## 9. Getting help

- **How-to questions:** use the guided tour on each screen, or ask a senior HR staff member
- **Wrong data from UDR or TKS:** raise it with the owner of that system (see Section 7)
- **Access, roles, approver changes or errors:** contact the system administrators (ISDS)
