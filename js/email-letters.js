/* ───────────────────────────────────────────────────────────────
   EMAIL A LETTER — data for the send-by-email tool.
   Each letter opens the person's email pre-filled (To / Cc / Subject /
   Body) and also copies the full letter to their clipboard as a safety
   net for long letters. The PDF stays available too.

   TO EDIT a letter: change the fields below. Plain text only in `body`
   (it lands in an email). Use [square brackets] for anything the person
   fills in. Subjects marked "// draft" are placeholders — change freely.

   TO ADD a letter: copy one { } block. Set `to` to a real address, or
   leave it "" for letters where the person supplies the recipient
   (use `toHint` to point them to a find-your-MLA link).
   ─────────────────────────────────────────────────────────────── */
const EMAIL_LETTERS = [
  {
    id: "payment-not-received",
    title: "Payment did not arrive \u2014 urgent",
    blurb: "For anyone whose payment did not arrive. Send it today, even if you have already phoned \u2014 a phone call leaves no record, an email does. It asks your office to confirm in writing whether your payment was issued and when, requests a response within one business day, and asks to be assessed for an emergency benefit in the meantime. The email in your sent folder becomes dated proof of the day you reported it.",
    to: "",
    toHint: "There are no office-specific inboxes. Every AISH and ADAP office routes to one of four zone inboxes: North and Edmonton <b>northzoneaish@gov.ab.ca</b> \u00b7 Calgary <b>calgaryaish@gov.ab.ca</b> \u00b7 Central <b>aish.centralregion@gov.ab.ca</b> \u00b7 South <b>southaish@gov.ab.ca</b>. Not sure which is yours? Send it to the zone nearest you and say in the email that you are unsure which office holds your file.",
    cc: "alss.minister@gov.ab.ca, St.Albert@assembly.ab.ca",
    ccHint: "Copying the Minister for Assisted Living and Social Services puts your case on the record above the call centre. <b>St.Albert@assembly.ab.ca</b> is the constituency office of Marie Renaud, MLA for St. Albert \u2014 if you live elsewhere, replace it with your own MLA, found at contact.assembly.ab.ca. A constituency office can act for you, but only for its own constituents.",
    subject: "URGENT \u2014 Benefit payment not received \u2014 [YOUR FULL NAME], file [YOUR FILE NUMBER]",
    note: "Keep the email in your sent folder \u2014 do not delete it. If this goes on, that email is the proof of the date you reported it. And if you are short for food, shelter or medication right now, do not wait on them: the 24-hour emergency income line is 1-866-644-5135. It does not close, and using it is not a mark against you.",
    body:
`To whom it may concern,

This is urgent. I have not received my monthly benefit payment and I have no other income.

My name is [FULL NAME]. My file number is [FILE NUMBER] and my date of birth is [DATE OF BIRTH]. I receive [AISH or ADAP].

My payment was due on July 28, 2026. As of [TODAY'S DATE] no deposit has appeared in my account. I have checked my bank account and confirmed nothing has been received. [If you have tried to phone, add: I have attempted to reach the contact centre by telephone on [DATE(S)] and was unable to speak to anyone.]

I am requesting the following, urgently and in writing:

1. Confirmation of whether my payment was issued, and on what date.
2. If it was issued, the method and the account it was sent to.
3. If it was not issued, the reason, and the date I will receive it.
4. Confirmation of what is being done to correct this and when I can expect the funds.

I am asking for a response within one business day. Without this payment I am unable to cover [rent / food / medication / utilities \u2014 delete what does not apply]. This is not a matter that can wait for a routine response time.

I am also requesting to be assessed for an emergency benefit to cover essential needs until this payment is received.

Please confirm receipt of this email and place a copy on my file.

[FULL NAME]
[PHONE NUMBER]
[EMAIL ADDRESS]
[MAILING ADDRESS]
Date sent: [DATE]`
  },
  {
    id: "employment-barriers-notice",
    title: "Barriers to Employment Participation \u2014 formal notice",
    blurb: "For ADAP clients. Puts your barriers to employment programming on the record in writing and requests accommodation and answers \u2014 including the travel benefit that exists in the regulation and that nobody is told about. This is not a refusal to participate, and it says so in those words. It works either way: if they accommodate you, you get what you need; if they refuse or go silent, you hold a dated record that the barriers were put to them and not addressed.",
    to: "",
    cc: "alss.minister@gov.ab.ca",
    toHint: "There are no office-specific inboxes. Send it to the zone that covers you: North and Edmonton <b>northzoneaish@gov.ab.ca</b> \u00b7 Calgary <b>calgaryaish@gov.ab.ca</b> \u00b7 Central <b>aish.centralregion@gov.ab.ca</b> \u00b7 South <b>southaish@gov.ab.ca</b> \u00b7 new applications <b>ApplyDIA@gov.ab.ca</b> (587-759-6810). Only these inboxes are monitored, so if you have written to an office address and had nothing back, check which address you used and resend. Not sure which zone? Ring Alberta Supports on <b>1-877-644-9992</b>, ask for the email address for written correspondence about your file, and ask them to email you while you are still on the line so you have it in writing. Always use the return address printed on any letter you have received.",
    ccHint: "The Minister is pre-filled. Add your own MLA too \u2014 find yours at contact.assembly.ab.ca.",
    subject: "Formal Notice \u2014 Barriers to Employment Participation and Request for Accommodation",
    pdf: "/pdfs/fillable/Fillable_Employment_Barriers_Notice_July2026.pdf",
    note: "After you send it: screenshot the sent email showing date, time, subject line and address, and save any automatic reply \u2014 that is your proof of receipt. If you get no answer by the date you set, reply to your own sent email asking for an update, so the whole thread stays together. If your benefit is reduced or stopped over attendance before anyone has answered this notice, keep the dates and tell the campaign.",
    body:
`Full legal name: [your full legal name]
File number (if known): [your file number]
Date of this notice: [today's date]
City or town: [your city or town]

I am writing to give formal notice of documented barriers that affect my ability to take part in employment programming, and to request accommodation and written answers.

This is not a refusal to participate.

MY BARRIERS
[Delete any that do not apply to you. One documented barrier is enough to ask for accommodation \u2014 you do not need all of them.]
- I do not have access to a car.
- I cannot use public transit because of a documented disability.
- I cannot afford taxi, rideshare or private transport.
- I cannot walk the distance required to reach transit or a venue.
- My condition is episodic and prevents reliable attendance.
- I have caregiving obligations requiring direct supervision.
- Telephone contact is itself a barrier for me.
- I have children or dependants with complex needs and no safe alternative care.
- My support worker hours are intermittent and come without advance notice.
- My medical appointments conflict with the programming schedule.
- I am given no advance notice of scheduling, so I cannot arrange care.
- A mental health condition prevents attendance in groups or public settings.
- I follow active medical protocols and must be able to respond to emergencies.

IN MY OWN WORDS
[Say what happens when you try, and what you need in order to take part. You do not have to be formal.

Two things worth including if they apply to you: if you have already asked for something and been refused, say so, with the date \u2014 a refusal already on record is stronger than a difficulty described in general. And if you are reapplying for AISH, say so.]

I am requesting the following, in writing.

1. What is required of me. Section 15(4) of AR 96/2026 allows a benefit to be refused, suspended, varied or discontinued where a person has refused or neglected to participate in an employment support. Neither reasonable employment nor employment support is defined in that regulation. Please state what specifically is required of me, how I will be told, and by when.

2. A travel benefit. Schedule 3, section 1(1)(d) of AR 96/2026 provides a travel benefit for a client eligible under section 3.02 of the Act who requires access to a training or employment program supporting their efforts to obtain employment. I am requesting that benefit, and confirmation of what it covers.

3. Accommodation of the barriers above. Please confirm what accommodations will be provided in respect of each barrier I have identified.

4. Written contact. I am requesting that contact about employment participation be made in writing rather than by telephone, as an accommodation of my disability. Please confirm this has been noted on my file.

5. The consequences of non-attendance. Please confirm whether non-attendance arising from the barriers documented above would result in any reduction or discontinuation of my benefit, and if so, what the review or appeal route is.

6. Confirmation of receipt. Please confirm in writing that this notice has been received and placed on my file.

I am requesting a written response no later than [choose your own date \u2014 two to three weeks from today is reasonable. A date you have chosen is a date you can point to later].

[your full legal name]
[your email address]
[your phone number]

Regulation references are to AR 96/2026 as in force July 2, 2026.`
  },
  {
    id: "call-confirmation",
    title: "Confirm what you said on an employment call",
    blurb: "After any call about ADAP employment services, put your barriers in writing the same day so they land on your file. Phone notes are theirs; a dated email is yours. It asks them to confirm the barriers are recorded and to say what support is available for each \u2014 and it heads off a call being written up as you refusing to participate.",
    to: "",
    toHint: "Send it to the navigator or worker you spoke with \u2014 easiest is to reply to their own email. If you do not have one, send it to your regional AISH and ADAP office and ask them to route it to the person on your file, and to confirm receipt.",
    subject: "Confirmation of our call, [date] | [your name] | File #[number]",
    note: "After you send it, watch for two things. First: did they confirm the barriers are recorded on your file, not just a 'thanks for letting me know'? If not, ask again. Second: did every barrier get answered, or did some go unmentioned? If any were skipped, reply on the same thread: 'I am following up on my email of [date]. Please confirm in writing that [barrier] and [barrier] have been recorded on my file, and what supports are available for each, as these were not addressed in your reply.' Keep the email in your sent folder; it is your dated proof.",
    body:
`Thank you for our call on [date] at approximately [time].

For the completeness of my file, I would like to put in writing the barriers to employment I identified during that call:

- [barrier \u2014 for example, transportation]
- [barrier \u2014 for example, childcare]
- [medical or physical barriers, in your own words]

Please confirm in writing that these barriers have been recorded on my file.

Please advise what supports are available for each of the barriers listed above.

I would also ask that a copy of this email be placed on my file.

[Include this paragraph only if it applies: During our call a referral was discussed to [name of provider]. I have previously accessed this provider and it did not address the barriers listed above. I am asking that this not be recorded as a referral, and I am requesting an alternative.]

Please respond in writing.

[Your name]
[Your file number]`
  },
  {
    id: "benefit-breakdown-aug2026",
    title: "Show me the calculation \u2014 August 2026 benefit breakdown",
    blurb: "For couples where both partners receive AISH or ADAP. Asks the program, in writing, to show how your August payment was worked out \u2014 the base rate, whether the 88% cohabiting-partner rule was applied, whether the transition benefit is in there and in what order, every deduction itemized, and what authority sets the amount and end date. It is not a dispute. It is a request to be shown the arithmetic.",
    to: "",
    cc: "",
    toHint: "Send this to your own assigned worker or your regional Alberta Supports office \u2014 that is where your file lives. If you do not have a direct address, the general program inbox is adap@gov.ab.ca, and Alberta Supports is 1-877-644-9992.",
    ccHint: "Optional. Some people copy themselves so they have a timestamped record of what was sent.",
    subject: "Request for a written breakdown of my benefit calculation \u2014 August 2026 benefit period",
    note: "Each partner must send their own request. Your partner's file is separate and they cannot release information about it to you without their authorization. Keep a copy and the date you sent it.",
    body:
`To: Alberta Supports / AISH / Alberta Disability Assistance Program
Attention: My assigned worker or the Regional Office
Office / Region: [office or region]

RE: Request for a written breakdown of my benefit calculation for the August 2026 benefit period

Name: [your full name]
AISH / ADAP File Number: [your file number]
Program I am currently on (AISH or ADAP): [AISH or ADAP]
Mailing Address: [your mailing address]
Contact Phone: [your phone]
Contact Email: [your email]

Dear Sir or Madam,

I am writing to request a written breakdown of how my monthly benefit was calculated for the August 2026 benefit period. I understand this benefit was deposited in late July 2026, as benefits are issued in the month preceding the benefit period to which they apply.

I share a residence with a cohabiting partner. I am asking for this breakdown so that I can plan my household expenses and so that any error in the calculation can be identified and corrected promptly. I am not disputing any decision at this time \u2014 I am asking to be shown the calculation.

Please provide the following in writing.

1. Base rate. The base monthly living allowance rate applied to me, and confirmation of whether that rate is the amount set out in section 8(2) or section 8(3) of the Assured Income for the Severely Handicapped General Regulation, AR 96/2026.

2. Cohabiting partner rate. Whether section 8(4) of AR 96/2026 \u2014 the provision setting the living allowance at 88% of the applicable base rate where a client and their cohabiting partner are each an eligible client \u2014 has been applied to my living allowance benefit. Please confirm the resulting monthly amount.

3. Transition benefit \u2014 inclusion and amount. Whether a transition benefit under section 13 of Schedule 3 of AR 96/2026 forms part of my monthly benefit. If it does, please state the monthly amount of that transition benefit for the August 2026 benefit period.

4. Order of calculation. Whether the transition benefit amount was determined before or after the application of section 8(4), and the total monthly amount resulting from that sequence. If the transition benefit is calculated as a top-up to a fixed monthly figure, please state that figure.

5. Deductions. Each amount deducted from my benefit under section 11(1) of AR 96/2026, itemized separately, together with the Schedule 1 provision relied upon for each deduction. This includes any amount deducted in respect of the Canada Disability Benefit. I note that section 11(1) applies to the living allowance benefit, the child benefit, and a personal benefit provided under section 13 of Schedule 3. Please confirm which of my benefit components each deduction was applied against.

6. Duration and authority. The date on which my transition benefit is scheduled to end, and the ministerial determination, policy instrument or published document that establishes both the amount of the transition benefit and that end date. I note that section 12(3) of AR 96/2026 provides that the amount of a personal benefit is the amount determined by the Minister, and that neither the amount nor the end date appears in the regulation itself.

7. Total. Written confirmation of my total monthly benefit for the August 2026 benefit period, after all deductions.

I understand that my cohabiting partner's file is separate from mine and that information about their benefit cannot be released to me without their authorization. My partner is submitting their own request in respect of their own file, and this letter should not be read as a request for information about anyone other than myself.

Please confirm receipt of this request and advise me of the date by which I can expect a written response. If any part of this request cannot be answered, please state which part and the reason, so that I can direct that question to the appropriate office.

I am keeping a copy of this letter and the date it was sent.

Thank you for your assistance.

Yours sincerely,
[your printed name]
AISH / ADAP File Number: [your file number]
Date: [today's date]

Regulation references are to AR 96/2026 as in force July 2, 2026.`
  },
  {
    id: "privacy-misdirected-files",
    title: "Somebody else's file arrived instead of yours \u2014 the misdirected disclosure letter",
    blurb: "Albertans who asked for their own AISH or ADAP file have received, in place of it, the complete file of another person \u2014 in one account more than 500 pages of another individual's medical, financial and identifying information. In more than one account the recipient was told by staff to shred the records, and that was the whole of the response: no confirmation that the person whose file it was had been told, and no confirmation the incident was reported. This letter asks the Minister for the figures, because only the ministry holds the authoritative count, and asks for two actions. Send it whether or not it happened to you \u2014 the seven questions are answerable either way.",
    to: "alss.minister@gov.ab.ca",
    cc: "premier@gov.ab.ca, generalinfo@oipc.ab.ca",
    toHint: "Goes to the Minister of Assisted Living and Social Services.",
    ccHint: "Copied to the Premier's office and, as a matter of record, to the Office of the Information and Privacy Commissioner. Add your own MLA as well \u2014 find yours at <b>contact.assembly.ab.ca</b>. If you are in St. Albert, that is <b>St.Albert@assembly.ab.ca</b>.",
    subject: "Repeated disclosure of AISH/ADAP personal files to the wrong recipients \u2014 request for figures and independent review of the access-to-information release process",
    note: "IF THIS HAPPENED TO YOU, TWO THINGS BEFORE YOU SEND. Do not put the other person's name, file number, medical details or any identifying information in this email, or in anything you send us \u2014 they have already had their privacy breached once and it should not happen twice. Describe what arrived in general terms only. And you have your own right to complain directly to the Information and Privacy Commissioner about it, free and without a lawyer, at oipc.ab.ca. On the shredding: this letter does not tell you to keep or to destroy anything. What it says is that instructing a member of the public to shred misdirected records does not discharge the ministry's obligations, because it destroys the evidence of the disclosure and leaves the person whose file it was unaware it ever happened. Ask the ministry in writing what you should do with the records and keep their answer. Whatever comes back, send it to us.",
    body:
`Minister,

I am writing about a pattern of misdirected disclosures in your ministry's handling of access-to-information requests for AISH and ADAP files.

Albertans with disabilities who requested their own file have received, in place of it, the complete file of another person. In one account, the package ran to more than 500 pages and contained another individual's medical, financial and identifying information. That is not an isolated report: there are multiple separate accounts of the same failure since the ADAP transition took effect on July 2, 2026, including accounts in which more than one third party's information arrived in a single release, and accounts in which the disclosure came by email.

[IF THIS HAPPENED TO YOU, ADD ONE OR TWO SENTENCES HERE. WHAT DATE THE PACKAGE ARRIVED, HOW IT CAME, AND THAT IT CONTAINED ANOTHER PERSON'S RECORDS. DO NOT INCLUDE THAT PERSON'S NAME OR ANY OF THEIR DETAILS. IF IT DID NOT HAPPEN TO YOU, DELETE THIS PARAGRAPH.]

I want to be precise about what these are. They are accounts given by the people who received the records. They are not, on their own, a finding. Your ministry holds the authoritative count. That is why this letter asks for it rather than asserting it.

What concerns me most is not the error itself, which any large release process can make once. It is what happened next.

In more than one account, the recipient was instructed by ministry staff to shred the other person's records, and that was the whole of the response. No confirmation that the person whose file it was had been told. No confirmation that the incident was reported. In at least one of those accounts the recipient contacted their MLA and was again told to shred the papers.

Instructing a member of the public to destroy misdirected records does two things. It destroys the evidence of the disclosure, and it leaves the person whose information was released unaware that it was released. It does not discharge the ministry's obligations.

Section 10(2) of the Protection of Privacy Act requires a public body to notify affected individuals, the Information and Privacy Commissioner, and the Minister following the loss of, unauthorized access to, or unauthorized disclosure of personal information in its custody or under its control, where a reasonable person would consider that there exists a real risk of significant harm. The unsolicited release of a complete disability file \u2014 medical history, income details, identifiers \u2014 to a stranger is not a clerical matter. It is the category of disclosure the section exists to capture.

So my first question is a simple one, and only your office can answer it.

I request a written response to the following:

1. Since July 2, 2026, how many privacy incidents has your ministry recorded in which records belonging to one AISH or ADAP client were released to a different individual, whether by mail, email, or in person?

2. In how many of those incidents was the Information and Privacy Commissioner notified?

3. In how many of those incidents were you, as Minister, notified under section 10(2)?

4. In how many of those incidents was the person whose information was disclosed notified that their file had been released to someone else?

5. In how many incidents was the recipient asked or instructed to destroy or shred the records, and under what authority is that instruction given?

6. What verification step exists before an access-to-information release package leaves your ministry \u2014 specifically, is any release reviewed by a second person against the requester's identity before dispatch?

7. Given the volume of requests generated by the AISH-to-ADAP transition, what change in staffing, training, or process accompanied the increase, and when?

I also ask for two actions.

First, that every recipient who was told to shred misdirected records be contacted, and that every individual whose file was released to another person be notified directly, whether or not the records were destroyed. A person cannot protect themselves from a disclosure nobody told them about.

Second, that the access-to-information release process for AISH and ADAP files be placed under independent review, and that bulk release be paused until a verification step is confirmed in writing. Albertans on disability benefits are being asked to trust this ministry with everything about themselves. That trust is not optional for them. They cannot take their file elsewhere.

I am copying the Information and Privacy Commissioner as a matter of record. Individuals affected retain their own right to complain to that office.

I would appreciate a written response within 30 days.

Regards,

[FULL NAME]
[YOUR CITY OR TOWN], Alberta
[EMAIL ADDRESS OR PHONE NUMBER]
Date sent: [DATE]`
  },
  {
    id: "minister-fourteen-questions",
    title: "Fourteen questions to the Minister \u2014 what is the rule, and where can I read it",
    blurb: "Fourteen questions on the administration of ADAP and AISH, each one about a rule clients are being asked to comply with that cannot be found in published form, or a point on which people have been given conflicting answers. Covers the Calgary office statement about employment income, third-party rent payments, participation while a reassessment is pending, in-person attendance and accommodation, what a reassessment requires and who pays for it, what is disclosed to employment contractors and what they report back, the assessment tool, income reporting deadlines, undated health cards, retroactive CDB lump sums, PDD supports, and the two unpublished Ministerial orders. Every question names the section it rests on, and asks the department to name the section its answer rests on.",
    to: "alss.minister@gov.ab.ca",
    toHint: "Goes to the Minister of Assisted Living and Social Services. This is long on purpose, but you are not expected to send all of it \u2014 keep the questions that touch your own situation, delete the rest, and renumber if you like. A short letter that gets sent beats a complete one that sits in drafts.",
    cc: "",
    ccHint: "Copy your own MLA \u2014 find yours at <b>contact.assembly.ab.ca</b>. It has to be the MLA for the constituency you live in; a constituency office can only act for its own constituents. If you are in St. Albert, that is <b>St.Albert@assembly.ab.ca</b>.",
    subject: "Written questions on the administration of ADAP and AISH \u2014 request for a written response",
    note: "The ask underneath all fourteen is the same one: what is the rule, and where can the person it applies to read it. That is why each question names an authority and asks the department to name its own. Question 1 is time-sensitive and the letter says so \u2014 other people may be relying on the same information right now. If you send this, send us whatever comes back. Where several people ask the same question and get different answers, the difference is itself the finding. And if a reply says something that contradicts what is published, keep it: a written answer you can hold up later is worth more than a phone call that agrees with you.",
    body:
`Minister,

I am one of the Albertans affected by the transition from the Assured Income for the Severely Handicapped program to the Alberta Disability Assistance Program.

The questions below concern rules that clients are being asked to comply with and that I have been unable to locate in published form, or points on which clients have received conflicting information from the department. I am not asking for an interpretation of any individual file. I am asking, in each case, what the rule is and where it is published.

What I am requesting: a written response to each numbered question, identifying for each answer the section of the Act, the regulation, the Ministerial order or the published policy document that the answer rests on. Where an answer rests on an unpublished document, please say so and provide the document. Where the department's position is that a question falls outside its responsibility, please say which body it falls to.

Where a question below rests on a mistaken reading of the law on my part, I would welcome the correction.

THE QUESTIONS

1. THE AUGUST 18 STATEMENT AT THE CALGARY OFFICE
On August 18, 2026, a client attending a Calgary office was told by staff that a client who has long-term disability income or employment income satisfies the ADAP employment requirement with a single telephone call and is not required to participate further.

Is that statement correct? If it is correct, where is it published, and what income level or income type triggers it? If it is not correct, what steps will the department take to ensure clients who were given that information are not later found to have failed to meet a requirement they were told did not apply to them?
Authority: AR 96/2026 s.15(4) and s.16(a).

2. PAYMENT OF BENEFITS TO A THIRD PARTY FOR ACCOMMODATION
Section 12.7(1) of the Act provides that where a director was paying a third party all or part of a benefit immediately before the section came into force, the director may continue to do so. Section 12.7(3) uses the same permissive language for a financial administrator appointed by a director.

The provision is permissive on its face. On what basis does a director decide to continue or to discontinue such an arrangement, is a client's request to end it determinative, and what is the process and the timeline for a client who wants the arrangement to stop?
Authority: Assured Income for the Severely Handicapped Act, s.12.7(1) and s.12.7(3), in force July 2, 2026.

3. EMPLOYMENT PARTICIPATION WHILE A REASSESSMENT IS PENDING
A client who has transitioned to ADAP and has applied to be assessed for AISH may wait several months for that assessment to conclude.

During that period, is the client expected to meet ADAP employment participation requirements? Where is the answer published? If participation is expected, what happens to a client whose medical condition is the subject of the pending assessment and who cannot participate for the same reason the assessment was requested?
Authority: AR 96/2026 s.15(4); ADAP fact sheet, July 23, 2026, transition approach.

4. WHAT EMPLOYMENT PARTICIPATION REQUIRES
Please provide the department's statement of what a client on ADAP is required to do to meet the employment participation requirement, and the published location of that statement.

If the requirement is set out only in internal policy or in an agreement with a service provider rather than in a public document, please confirm that, and provide the internal document.
Authority: AR 96/2026 s.15(4); Act s.12.1(a).

5. IN-PERSON ATTENDANCE AND ACCOMMODATION
Where a client is directed to attend an appointment in person, what is the process for requesting an accommodation, who decides the request, on what criteria, and is the decision recorded in the client's file?

Is a client who is unable to attend in person and whose accommodation request is refused at risk of a reduction under section 15(4)?
Authority: AR 96/2026 s.15(4); Alberta Human Rights Act, s.4.

6. WHAT A REASSESSMENT FOR AISH REQUIRES
Does a client on ADAP seeking assessment for AISH file a complete new application, or a new medical report only?

Please confirm in writing that the department covers the cost of one medical assessment for a client who transitioned to ADAP in July 2026 and later seeks AISH, and state whether that cost is a grant or a repayable advance recovered from future benefits. The July 23, 2026 fact sheet says the government will cover the cost. It does not say whether the client repays it.
Authority: ADAP fact sheet, July 23, 2026, transition approach; AR 96/2026 s.3(1)(a).

7. CLIENT INFORMATION DISCLOSED TO EMPLOYMENT SERVICE PROVIDERS
What categories of client information are disclosed by the department to contracted employment service providers, under what statutory authority, and on what basis is the scope of that disclosure limited?

Is medical information among the categories disclosed? Can a client obtain a written list of what was disclosed about them and to whom, and by what route?
Authority: Act s.12.1(c); Alberta's public-sector access and privacy legislation.

8. WHAT SERVICE PROVIDERS REPORT BACK TO THE DEPARTMENT
What is a contracted employment service provider required to report to the department about a client, on what schedule, and in what form?

Is a provider's report capable of triggering a reduction under section 15(4), and if so, is the client given the report and an opportunity to respond before a decision is made?
Authority: AR 96/2026 s.15(4); Act s.12.1(c).

9. THE EMPLOYMENT ASSESSMENT TOOL
Please name the assessment tool or instrument used to determine a client's employment capacity or to set employment expectations, identify its publisher, and state whether it has been validated for use with a population of people with severe disabilities.

Is the completed assessment provided to the client?
Authority: AR 96/2026 s.3(1)(a); ADAP fact sheet, July 23, 2026, medical eligibility.

10. INCOME REPORTING DEADLINES AND WHAT FOLLOWS A LATE REPORT
What is the deadline for a client to report income for a benefit period, and where is that deadline published?

What is the consequence of reporting one day late? Is any exemption, extension or disability-related allowance available where a client's disability is the reason the report was late, and if so, who decides it and on what criteria?
Authority: AR 96/2026 Schedule 1 s.5 and s.6; AR 96/2026 s.16(a).

11. UNDATED HEALTH BENEFIT CARDS
Clients have received health benefit cards carrying no expiry date. What does an undated card indicate about the status of the client's registration, is the card valid for presentation to a pharmacy or provider, and what should a client do if a provider declines it?
Authority: AR 96/2026 s.13; Schedule 2.

12. RETROACTIVE CANADA DISABILITY BENEFIT LUMP SUMS
The Canada Disability Benefit is counted as income under Schedule 1 s.1(1)(e). Where a client receives a retroactive lump sum covering earlier months, is the lump sum applied to the month of receipt or prorated over the months to which it relates?

If it is applied to the month of receipt, does the client incur an overpayment for a period during which the department had already deducted an amount on account of the same benefit?
Authority: AR 96/2026 Schedule 1 s.1(1)(e) and Schedule 1 s.6(5).

13. PERSONS WITH DEVELOPMENTAL DISABILITIES SUPPORTS AND INCOME PROGRAM
Does a client's eligibility for, or level of, PDD supports depend in any way on whether the client receives AISH or ADAP?

If a client transitions between the two programs, is any PDD assessment, service plan or funding level reopened, reviewed or changed as a consequence?
Authority: Persons with Developmental Disabilities Services Act; ADAP fact sheet, July 23, 2026, automatic AISH retention criteria.

14. THE TWO UNPUBLISHED MINISTERIAL ORDERS
Schedule 1 s.4(2) of AR 96/2026 provides that the Minister may by order determine the employment and self-employment income amounts a director must deduct, and the method for determining additional amounts. I have not been able to locate that order in published form.

Separately, AR 89/2007 s.6(e), as replaced by AR 87/2026, exempts from appeal a decision under AR 96/2026 s.3(1)(a) as to whether a person has a severe disability that permanently prevents employment, unless the Minister has specified that decision under s.10(2)(e) of the Act as a type an appeal panel may hear. I have not been able to locate any such specification.

Please provide both instruments, or confirm that no specification under s.10(2)(e) has been made. If no specification has been made, please confirm that a determination that a person is not permanently prevented from working carries no right of appeal.
Authority: AR 96/2026 Schedule 1 s.4(2); AR 89/2007 s.6(e) as replaced by AR 87/2026 s.4; Act s.10(2)(e).

RESPONSE

I would be grateful for a written response within 30 calendar days. If the department needs longer for any question, an interim response identifying which questions will take longer, and by when, would be appreciated.

Question 1 concerns information given to a client at a departmental office, and other clients may be relying on the same information now. I ask that it be answered first if the remainder must wait.

Sincerely,

[FULL NAME]
[YOUR CITY OR TOWN], Alberta
[EMAIL ADDRESS OR PHONE NUMBER]
Date sent: [DATE]`
  },
  {
    id: "health-card-coverage-ahcip",
    title: "Health coverage \u2014 ask Alberta Health to confirm your status in writing",
    blurb: "For anyone told at a desk that their coverage is not active, or anyone holding one of the older paper cards with no expiry date printed on it. Cards issued since July 2, 2026 carry an expiry date, and where a personal health number sits on a driver's licence the registration runs on the licence date. Nothing published says what an undated older card is \u2014 not that it is invalid, and nobody has said that either. Question 2 in this letter is the one that matters beyond your own file: if enough people ask it in writing, one of the answers that comes back can be shared with everybody.",
    to: "",
    toHint: "This one is <b>post or phone, not email</b>. Alberta Health will not take health information by email. Print it and send to <b>Alberta Health Care Insurance Plan, PO Box 1360 Station Main, Edmonton, Alberta T5J 2N3</b>, or ring <b>780-427-1432</b> (dial 310-0000 first for toll free in Alberta), 8:15 am to 4:30 pm weekdays. If you phone, ask them to send the answer in writing as well, and note the date you asked.",
    cc: "",
    subject: "Re: Confirmation of coverage status",
    note: "Do NOT type your personal health number into this letter. Give it by phone or in person only, or add it by hand to the printed copy after you print it. Three things are settled and worth holding on to: your personal health number is yours for life and is never reissued to anyone else; what can lapse is your registration, which is a separate thing from your number; and emergency care is never refused, though you can still be billed for it if your registration has lapsed. If you were also charged, send the second letter to the clinic at the same time \u2014 that one asks them to hold the account while this question is answered. Whatever comes back, send it to us. Nobody has a written answer about undated cards yet, and one member getting one helps everybody.",
    body:
`Alberta Health Care Insurance Plan
PO Box 1360 Station Main
Edmonton, Alberta T5J 2N3

Re: Confirmation of coverage status

I am writing to ask for written confirmation of my Alberta Health Care Insurance Plan coverage status.

On [DATE IT HAPPENED] I attended [NAME OF THE CLINIC OR LAB] and was told [WHAT YOU WERE TOLD]. I hold an Alberta Personal Health Card that does not have an expiry date printed on it. My photo identification is current.

Please confirm in writing:

1. Whether my coverage is currently active.

2. Whether a health card issued before July 2, 2026 that carries no printed expiry date remains valid.

3. If it does not, what I must do to restore or maintain coverage, and by when.

4. Whether I will be reimbursed for [AMOUNT YOU WERE CHARGED], which I was charged on the date above.

I would be grateful for a written reply. Thank you.

[FULL NAME]
[MAILING ADDRESS]
[PHONE NUMBER AND EMAIL]
Date sent: [DATE]`
  },
  {
    id: "health-card-billing-hold",
    title: "Health coverage \u2014 ask a clinic to hold a bill while your status is confirmed",
    blurb: "Send this if you were charged because your coverage could not be confirmed. It asks for the account to be held without collection activity while Alberta Health answers the real question, rather than demanding a refund. That is deliberate: a hold is something a billing clerk can grant on the spot, and a refund usually is not. It gets you out of collections while the real question is being answered somewhere else.",
    to: "",
    toHint: "This goes to the billing or accounts contact at the clinic, lab, pharmacy or hospital that charged you. Use the address or email printed on the invoice. If there is only a phone number, ring and ask where to send it in writing.",
    cc: "",
    subject: "Re: Account for services on [DATE IT HAPPENED]",
    note: "Keep it short and do not blame the staff. The clinic followed what its system told it \u2014 the problem is upstream of them, and a letter that says so gets a better result than one that does not. Send this at the same time as the letter to Alberta Health, because this one buys you time while that one answers the question. Before you leave any appointment where this happens, write down the date and time, the name of the place, the name of the person you spoke to, exactly what you were told, and whether you were billed and how much. Do it while you are still in the car park \u2014 you will not remember it accurately by the evening, and if this goes anywhere it is the detail that carries it.",
    body:
`Re: Account for services on [DATE IT HAPPENED]

I attended on [DATE IT HAPPENED] and was charged [AMOUNT YOU WERE CHARGED] on the basis that my Alberta Health Care Insurance Plan coverage could not be confirmed.

I hold an Alberta Personal Health Card that carries no printed expiry date, and my photo identification is current. I have written to Alberta Health to confirm my coverage status and I have asked for a written reply.

I am asking you to hold this account without collection activity until Alberta Health confirms my status. If my coverage is confirmed as active for that date, I ask that the charge be reversed and the amount refunded.

Please confirm in writing that the account is on hold. Thank you for your help.

[FULL NAME]
[MAILING ADDRESS]
[PHONE NUMBER AND EMAIL]
Date sent: [DATE]`
  },
  {
    id: "atia-followup",
    title: "Your file request came back late, narrow, or with parts missing",
    blurb: "This is not the form for making a request \u2014 use this when you already asked for your own AISH or ADAP file and the response arrived late, covered a narrower period than you asked for, or came back with pages blank and no reason given. Three lettered sections; keep the ones that match your situation and delete the rest. Every section number is from the Access to Information Act in force June 11, 2025 \u2014 not the old FOIP numbers, which are repealed and let them answer nothing.",
    to: "",
    toHint: "Send it the same way you sent your request, to the same office \u2014 that is the central access to information office, not your AISH or ADAP office. Use the return address on the response letter you received. Keep a copy and note the date you sent it.",
    cc: "",
    subject: "Access request follow-up \u2014 [YOUR REFERENCE NUMBER]",
    note: "READ THIS FIRST, BECAUSE THERE MAY BE A DEADLINE. If you received a response you are unhappy with, you have 60 business days from the day you were notified to ask the Information and Privacy Commissioner for a review (section 59(2)(a)). Business days, so weekends and holidays do not count. If you received nothing at all, that counts as a refusal (section 13(2)) and the 60 day limit does not apply to you (section 59(3)) \u2014 nothing is closing behind you. Sending this letter does NOT pause the clock. The letter and the review are separate things, so if you are running low on time, file the review and send this as well. You can withdraw a review if they fix the problem; you cannot get the window back. The review is free, you do not need a lawyer, and the form is at oipc.ab.ca under Information Access Review \u2014 ask them for accommodation if the form itself is a barrier, they have a policy for it. On the tone: this letter is short, cold and numbered on purpose. A letter carrying feeling gets read as a complaint about a person and routed away from your question. Keep the anger out of the letter so the letter works. That is not the same as the anger being unwarranted. And if your concern is that they did not search properly, the Commissioner expects you to raise it with the department first and wait 30 business days \u2014 sending this starts that running.",
    body:
`I am writing about my access request for my own personal information, reference [YOUR REFERENCE NUMBER], and about the response dated [DATE ON THEIR LETTER]. I am asking for the following, in writing.

[KEEP THE SECTIONS BELOW THAT APPLY TO YOU AND DELETE THE REST. IF MORE THAN ONE APPLIES, KEEP THEM ALL AND SEND ONE LETTER.]

SECTION A \u2014 LATE, OR NO RESPONSE AT ALL

1. Under section 13(1) of the Access to Information Act, a public body must make every reasonable effort to respond within 30 business days after a complete request. I submitted my request on [DATE YOU SUBMITTED]. As of today I have received [WHAT YOU HAVE RECEIVED SO FAR].

2. Under section 12(1), the public body must make every reasonable effort to assist me and to respond openly, accurately and completely.

3. If the time for responding was extended, section 16(5) requires that I be told the reason, when a response can be expected, and that I may ask for a review of the extension. [WHAT YOU WERE TOLD ABOUT ANY EXTENSION, IF ANYTHING.]

Please provide, in writing, (a) the decision on my request, or the date I will receive it, and (b) if the time was extended, the reason and the new expected date under section 16(5).

I note that under section 13(2) a failure to respond in time is treated as a refusal.

SECTION B \u2014 THEY SEARCHED A NARROWER PERIOD THAN I ASKED FOR

4. My request asked for records covering [THE TIMEFRAME YOU ASKED FOR]. The response states that the search covered [THE TIMEFRAME THEIR LETTER STATES], which is narrower than what I asked for.

5. Under section 12(1) of the Access to Information Act, the public body must make every reasonable effort to assist me and to respond openly, accurately and completely. Section 7(3) permits a public body to ask me for more detail where a request is unclear. I was not asked for more detail before the search was narrowed.

Please provide, in writing, (a) the provision of the Act relied on to search a timeframe narrower than the one I requested, or confirmation that the full timeframe I requested will now be searched, and (b) if you consider my request unclear, the further detail you require under section 7(3).

SECTION C \u2014 BLANK PAGES, REMOVALS WITH NO REASON, OR MISSING RECORDS

6. Under section 14(1)(c)(i) of the Access to Information Act, where access to a record or part of a record is refused, I must be told the reasons and the provision of the Act on which the refusal is based. The response contains pages that are entirely blank, or from which content has been removed, with no provision cited. The affected pages are [YOUR PAGE NUMBERS].

7. Under section 6(2), where information is severed, I have a right of access to the remainder of the record.

8. The response does not appear to include [THE RECORDS YOU EXPECTED BUT DID NOT RECEIVE]. Under sections 4(1) and 6(1) the right of access reaches all records in the public body's custody or control, including my own personal information.

Please provide, in writing, (a) for each blank or removed portion, the specific provision of the Act relied on, as required by section 14(1)(c)(i), (b) confirmation of whether the records named above were located, and if withheld, the provision relied on, and (c) if any records could not be located, a description of the search conducted, consistent with the duty to assist under section 12(1).

CLOSING

I ask for a written reply by [YOUR REPLY DATE \u2014 ALLOW ABOUT 10 BUSINESS DAYS]. If I do not receive one, or if the provisions relied on are not supplied, I will ask the Information and Privacy Commissioner to review this under section 58(1).

[FULL NAME]
[CONTACT DETAILS FOR THEIR REPLY]
Date sent: [DATE]`
  },
  {
    id: "adap-employment-participation",
    title: "ADAP employment participation \u2014 what is actually required, in writing",
    blurb: "Clients are being told at Alberta Supports offices that an ADAP client with employment income or long term disability income satisfies the employment participation requirement by taking a single phone call and saying they already have income. That rule is not in the policy manual, the program guide, AR 96/2026, or on any Government of Alberta webpage. Meanwhile the manual says plainly that AISH clients are not required to seek or accept employment or make use of an employment support \u2014 and no equivalent exemption is published for ADAP clients. This letter asks five specific questions and asks for the answer in writing.",
    to: "",
    zonePicker: true,
    cc: "alss.minister@gov.ab.ca",
    toHint: "AISH and ADAP offices have merged, so pick your zone above and it will fill this in. Copied to the Minister. Add your own MLA to the copy line as well \u2014 find yours at <b>contact.assembly.ab.ca</b>. A constituency office can only act for its own constituents, so it has to be your MLA, not someone else's.",
    ccHint: "Copying the Minister for Assisted Living and Social Services puts the discrepancy on the record above the office giving the verbal answers.",
    subject: "Request for written clarification: ADAP employment participation requirements",
    note: "Question 5 is the one that matters most, and it is why this is worth sending even if none of it applies to you directly. If there is no published exemption, then people have transferred to ADAP on the strength of something a worker said, and that question asks in writing whether those people will be contacted. Keep the reply. If you are told something different on the phone afterwards, you will have the written version to hold it against. Send us whatever comes back \u2014 if several of us ask the same five questions and the answers do not match each other, that is itself the finding.",
    body:
`To the Alberta Disability Assistance Program,

I am writing to request written clarification about the employment participation requirements under ADAP. I am asking because the information being given verbally at Alberta Supports offices does not match what is published in your own policy manual, and people are making decisions about their income based on the difference.

WHAT YOUR MANUAL SAYS

The Disability Income Assistance Policy Manual, under Maintaining Eligibility, states that it is the responsibility of ADAP clients to seek and accept reasonable employment, to not reduce or terminate reasonable employment, and to participate in or make use of an employment support.

The same page states that AISH clients are not required by the program to make use of an employment support or seek or accept employment.

That exemption is written for AISH clients. I can find no published exemption of any kind for ADAP clients.

WHAT CLIENTS ARE BEING TOLD

Clients are being told at Alberta Supports offices that an ADAP client who has employment income or long term disability income satisfies the employment participation requirement by taking a single telephone call, stating that they already have income, and that no further participation is required.

I cannot locate that rule in the policy manual, the program guide, the Assured Income for the Severely Handicapped General Regulation, or on any Government of Alberta webpage.

MY QUESTIONS

1. Is there any exemption from the employment participation responsibility for ADAP clients who have employment income or long term disability income? If there is, where is it published?

2. Section 15(4) of AR 96/2026 permits a director to act where a client has refused to seek or accept reasonable employment, or has refused or neglected to participate in or make use of an employment support. Does having employment income satisfy the second of those, and if so, where is that stated?

3. Long term disability income is not employment income. Does a client receiving LTD income carry the same employment participation responsibility as any other ADAP client?

4. What participation is expected of an ADAP client, how is it communicated, and where is it published so that a client can read it before agreeing to anything?

5. If there is no published exemption, what steps are being taken to correct the information being given verbally at offices, and will clients who transferred to ADAP on the strength of that information be contacted?

WHAT I AM ASKING FOR

A written reply. Not a phone call. I need something I can keep and refer to, because I am being asked to make a decision about my income based on information that is not written down anywhere I can find it.

Thank you for your time.

[FULL NAME]
[YOUR CITY OR TOWN], Alberta
Date sent: [DATE]`
  },
  {
    id: "disclosure-mla",
    title: "Disclosure at an employment assessment \u2014 raise it with your MLA",
    blurb: "For anyone who has been asked to hand a diagnosis and medical history to AKG or Serco during an ADAP employment assessment. This raises it with your MLA as a pattern affecting constituents, not just one file, and asks them to put three specific questions to the Minister in writing. Works whether you are writing about your own assessment or raising it on behalf of disabled people in your community.",
    to: "",
    toHint: "Find your own MLA at <b>contact.assembly.ab.ca</b>. This has to go to the MLA for the constituency you live in \u2014 a constituency office can only act for its own constituents. If you are a constituent, say so in the first line; it matters.",
    cc: "alss.minister@gov.ab.ca",
    ccHint: "Copying the Minister for Assisted Living and Social Services puts the concern on the record directly as well as through your MLA.",
    subject: "Constituent concern \u2014 disabled Albertans being asked to disclose medical information to ADAP employment contractors",
    note: "Your MLA will usually need your written consent before they can ask the department anything about your own file, so expect a consent form to come back \u2014 ask for it on the first contact if you want to move quickly. Two things make this letter land: say in the first line that you live in the constituency, and keep any account of your own experience factual and short. The three numbered questions are the part that does the work, because they are answerable and specific. Send us whatever comes back \u2014 if several MLAs ask the same three questions and the answers differ, that tells us something none of us can see alone.",
    body:
`Dear [MLA NAME],

My name is [FULL NAME] and I live in [TOWN], in your constituency. [CHOOSE ONE AND DELETE THE OTHERS: I receive ADAP. / I am writing on behalf of a family member who receives ADAP. / I am raising a concern on behalf of disabled people in our community.]

I am writing about the employment assessments that ADAP recipients are being sent to, run by private contractors (AKG in the north, Serco in the south). I have a specific concern about them, and I am asking for your help.

People who were already found eligible for disability benefits are being asked, during these employment assessments, to disclose their diagnosis and medical history to the contractor. In at least one documented case, the person was told the medical part was voluntary, and then the assessment kept asking for the diagnosis anyway until the person had to refuse.

This concerns me for a few reasons. The contractor does not decide eligibility \u2014 that was already decided by a government adjudicator before the person ever reached them. So it is not clear why an employment contractor needs a person's diagnosis at all. And being told something is voluntary and then pressed for it anyway is not a fair process for people who are, by definition, in a vulnerable position.

[OPTIONAL, IF THIS HAPPENED TO YOU: In my own case, [DESCRIBE BRIEFLY AND FACTUALLY WHAT HAPPENED, ONE OR TWO SENTENCES].]

I am asking you to:

1. Ask the Minister of Assisted Living and Social Services, in writing, what medical information ADAP recipients are required to disclose to employment contractors, and under what authority.

2. Ask whether declining to disclose a diagnosis to a contractor can affect a person's benefits.

3. Ask what information the contractors receive from the department, and what they send back.

Two documents setting out the concern and the relevant law in detail are published at albertadisabilitysystembreakdown.netlify.app \u2014 a plain-language guide and a full rights map with every provision quoted from the primary instrument.

I would be grateful for a written response, and for your help getting clear answers from the department.

Thank you for your time.

[FULL NAME]
[MAILING ADDRESS, SO THEY CAN CONFIRM YOU ARE A CONSTITUENT]
[PHONE NUMBER OR EMAIL]
Date sent: [DATE]`
  },
  {
    id: "disclosure-lawyer",
    title: "Disclosure at an employment assessment \u2014 asking a lawyer for advice",
    blurb: "An intake message, not a legal argument. It describes what happened to you and asks whether a lawyer can advise or refer you. Good places to start: your local legal aid or community legal clinic, a lawyer who does administrative or human rights law, or a disability advocacy organisation that can refer you. Your job here is to say clearly what happened; working out the legal questions is theirs.",
    to: "",
    toHint: "There is no single address for this one \u2014 it goes to whichever clinic, lawyer or advocacy organisation you are approaching. Legal Aid Alberta and community legal clinics are the usual starting points, and many offer a free or low-cost first consultation.",
    cc: "",
    subject: "Requesting advice \u2014 ADAP employment assessment and medical disclosure",
    note: "Keep it to the facts: what happened, when, and what you were told. You do not need to argue the law, and a lawyer will generally prefer that you did not \u2014 they will work out what the legal questions are from a clear account. Fill in every bracketed line with your own details and delete the ones that do not apply, so it reads as yours rather than as a template. The cost line at the end is there on purpose; say it plainly, because many clinics work on exactly that basis.",
    body:
`Dear [LAWYER OR CLINIC NAME],

My name is [FULL NAME] and I live in [TOWN], Alberta. I am asking whether you are able to advise me, or refer me to someone who can, about a situation involving my disability benefits.

I receive ADAP (Alberta Disability Assistance Program). As part of that program I was sent to an employment assessment run by a private contractor [NAME THE CONTRACTOR IF YOU KNOW IT]. During that assessment I was asked to disclose my diagnosis and medical history to the contractor.

Here is what happened, as clearly as I can put it:

- [WHEN THE ASSESSMENT WAS, AND HOW MANY SESSIONS]

- [WHAT YOU WERE TOLD ABOUT WHETHER THE MEDICAL QUESTIONS WERE VOLUNTARY]

- [WHAT YOU WERE ASKED TO SHARE]

- [WHETHER YOU SHARED IT, DECLINED, OR FELT PRESSURED]

- [ANYTHING YOU WERE TOLD ABOUT CONSEQUENCES FOR YOUR BENEFITS]

My understanding is that my eligibility for disability benefits was already decided by a government adjudicator before I was sent to this contractor, so I do not understand why an employment contractor needs my diagnosis. I am concerned about my privacy and about whether declining to share could affect my benefits.

There are two documents setting out the issue and the relevant Alberta and federal law, published at albertadisabilitysystembreakdown.netlify.app, which I can send you. I am not asking you to rely on those, only offering them as background.

My questions are:

1. Am I required to disclose my diagnosis to this contractor?

2. Can my benefits be affected if I decline?

3. Is there anything wrong with how my information was collected, and do I have any recourse?

Please let me know whether you are able to help, whether you offer a free or low-cost consultation, and what you would need from me. I am on a disability income, so cost is a real factor for me.

Thank you.

[FULL NAME]
[PHONE NUMBER OR EMAIL]
Date sent: [DATE]`
  },
  {
    id: "appeal-status-update",
    title: "Appeal status update \u2014 where does my appeal sit",
    blurb: "For anyone who has filed a notice of appeal and heard nothing. The appeal process has named stages: your notice goes in, the program reviews the file, a senior representative may ring to see whether it can be settled without a hearing, and if it cannot you receive a Review of Decision setting out their reasons. Only then does the Secretariat schedule a hearing, and the appeal package goes out at least a week before it. Ask where your file is generally and you will get a general answer. This letter asks which of five specific things has happened, so they have to tell you.",
    to: "alss.appeals@gov.ab.ca",
    toHint: "Email <b>alss.appeals@gov.ab.ca</b>, or fax <b>780-422-1088</b>. If you would rather speak to someone, the phone line is <b>780-427-2709</b> \u2014 but send the written one either way, so there is a record.",
    subject: "Request for status update on appeal \u2014 [YOUR FULL NAME], file [YOUR FILE NUMBER]",
    note: "Question 5 is there on purpose, and we would rather you knew why. The regulation says the move from AISH to ADAP is not itself appealable \u2014 section 12.8 \u2014 so there is a chance the answer that comes back is about jurisdiction rather than a hearing date. We are not telling you that is what will happen. We are telling you it is on the table, and it is better to have that in writing in August than to sit waiting until November for a hearing that was never going to be scheduled. If that is the answer that comes back, it is not the end of anything: reassessment has no deadline attached to it, and that road stays open no matter what the panel says about this one. Send it, and send us what comes back. If several of us get the same reply, that tells us something none of us can see alone.",
    body:
`To whom it may concern,

My name is [FULL NAME]. My file number is [FILE NUMBER]. I submitted a notice of appeal on [DATE SUBMITTED] by [EMAIL / FAX / MAIL / IN PERSON].

I am writing to ask for a written update on where my appeal currently sits. Specifically:

1. Has my notice of appeal been received and registered, and what is my appeal file number.

2. Has the program completed its review, and has a senior program representative been assigned to contact me.

3. Has a Review of Decision been issued, and if so, when was it sent and to what address.

4. Has a hearing date been set, and if not, when do you expect one to be scheduled.

5. Has any question been raised about whether my appeal falls within the panel's jurisdiction, and if so, what is that question and when will it be decided.

Please reply in writing. If any of the above has already been sent to me, please resend it, as I have not received it.

[FULL NAME]
[MAILING ADDRESS]
[PHONE NUMBER]
[EMAIL ADDRESS]
Date sent: [DATE]`
  },
  {
    id: "written-questions-department",
    title: "Written questions to the department \u2014 medical report, DTC cost, $150 supplemental, appeal panel",
    blurb: "The open questions the community has not been able to get answered, put to the department in writing. Five parts: the federal $150 supplemental and whether it is excluded from income; the Disability Tax Credit assessment cost and the repayable advance; the DIA Medical Report and who pays the examination component; whether the Medical Appeal Panel has actually been constituted; and whether reinstatement reaches people transferred on July 2. Every question asks for the policy manual section the answer rests on, because a verbal answer cannot be relied on later when a decision is reviewed. This is long on purpose. You are not expected to send all of it \u2014 delete every part that does not apply to you and send the rest.",
    to: "",
    zonePicker: true,
    cc: "alss.minister@gov.ab.ca",
    toHint: "AISH and ADAP offices have merged, so pick your zone above and it will fill this in. Copied to <b>alss.minister@gov.ab.ca</b>. Keep your sent copy and any automatic reply \u2014 that is your proof of the date.",
    subject: "Written questions \u2014 DIA Medical Report, DTC assessment cost, Canada Disability Benefit supplemental payment, Medical Appeal Panel",
    note: "This is the long version. Almost nobody needs all five parts. Pick the ones that touch your own situation, delete the rest, and renumber if you like \u2014 a short letter that gets sent beats a complete one that sits in drafts. The thirty day line at the end matters: if they do not answer within thirty business days that counts as a refusal, and you can ask the Information and Privacy Commissioner to review it, free, at oipc.ab.ca. And if several of us send the same questions and get different answers back, that tells us something none of us can see alone. Send us what comes back.",
    body:
`Dear Sir or Madam,

I am one of the Albertans affected by the transition from the Assured Income for the Severely Handicapped program to the Alberta Disability Assistance Program.

The questions below concern amounts of money recipients are being asked to pay or repay, and whether an appeal route is currently operational. I am asking in writing so that the answer can be relied on. I would be grateful for a written response and, where an answer rests on policy, the manual section that states it. Verbal answers cannot be relied on by a recipient when a decision is later reviewed.

PART A \u2014 THE FEDERAL SUPPLEMENTAL PAYMENT OF $150

The Government of Canada begins paying a supplemental amount of $150 to Canada Disability Benefit recipients in September 2026, with further phases from February 2027. Its stated purpose is to offset the cost of applying for the Disability Tax Credit.

Schedule 1, section 1(1)(e)(i) of AR 96/2026 excludes from income a Canada Disability Benefit payment made for the purpose of offsetting a person's cost of applying for a disability tax credit under section 118.3(1) of the Income Tax Act (Canada).

A1. Will the $150 supplemental payment be identified separately from a recipient's regular Canada Disability Benefit payment when income is reported and assessed, so that the exclusion at Schedule 1 section 1(1)(e)(i) is applied?

A2. If a report shows a single combined figure for a month in which the supplemental payment arrives, what process ensures the supplemental portion is excluded rather than counted?

A3. What should a recipient do, and what documentation should they retain, if the supplemental payment is counted as income in error?

PART B \u2014 THE DISABILITY TAX CREDIT ASSESSMENT COST AND THE REPAYABLE ADVANCE

I understand from the Minister's correspondence that where the province covers the cost of a Disability Tax Credit assessment for a person moving from AISH to ADAP, that coverage is provided as a repayable advance. I am aware of a recipient who paid $400 for a Disability Tax Credit application to be completed, received that amount as an advance, and had it recovered in full across two subsequent payments.

B1. Where a client received the Disability Tax Credit assessment cost as a repayable advance, and subsequently receives the federal $150 supplemental payment for that same cost, is the advance recovered, and if so by what mechanism and under which provision?

B2. Is the amount advanced capped, and if so at what amount and under what authority? Where a practitioner charges more than the covered amount, who bears the difference?

B3. What is the position of clients who paid their own Disability Tax Credit assessment costs before provincial coverage was made available? Is any reimbursement or credit available to them, and if not, is that outcome intended?

B4. A Program Delivery Supervisor confirmed in writing on August 7, 2026 that the process for requesting the covered assessment has not been finalized. What is the current status of that process, when will it be finalized, and what should a client who requires an assessment now be advised to do in the interim?

PART C \u2014 THE DISABILITY INCOME ASSISTANCE MEDICAL REPORT

I understand that form 1587 (Rev. 2026-07), "Confirmation of Payment Disability Assistance Medical Report," issued by a regional Disability Income Assistance Coordinator, states that the Government of Alberta will pay the health professional completing the DIA Medical Report on a fee-for-service equivalent to the Alberta Health Schedule of Medical Benefits, Code 03.04A or equivalent specialty code, for the examination, plus the fee agreed with the Alberta Medical Association for report completion, and that the practitioner invoices the region directly.

C1. Is form 1587 the standard letter issued to all clients required to provide a DIA Medical Report, and is the payment mechanism it describes, the practitioner invoicing the department directly with no charge to the client, the standard mechanism province-wide?

C2. What amount does the examination component (Code 03.04A or equivalent specialty code) pay? I ask because this component appears to be where any gap arises between the amount covered and the amount a practitioner charges, and no figure for it appears in any published material I have been able to find.

C3. Where a practitioner charges a client directly rather than invoicing the department, what recourse does the client have?

C4. Are the DIA Medical Report and the AISH Medical Report the same instrument? If they are not, which fee schedule applies to each?

C5. Form 1587 names a physician or nurse practitioner as the health professional whose completion of the report will be paid for. Sections 3(2)(a)(i) and 4(2)(a)(i) of AR 96/2026 both accept relevant medical or psychological reports that diagnose and substantiate the existence and likely duration of an impairment. May a registered psychologist complete the DIA Medical Report? If not, will a psychologist's report be accepted as a report under sections 3(2)(a)(i) or 4(2)(a)(i), and will the province pay for it?

PART D \u2014 THE MEDICAL APPEAL PANEL

A recruitment posting for the Medical Appeal Panel (competition 875) opened on March 10, 2026 and closed on April 28, 2026, seeking a Chair, two Vice-Chairs and up to 30 members. As at August 8, 2026 the posted status remains "Approval in Progress." The AISH to ADAP transition took legal effect on July 2, 2026.

D1. Has the Medical Appeal Panel been constituted? If so, when were the Chair, Vice-Chairs and members appointed?

D2. If it has not been constituted, how are medical appeals filed on or after July 2, 2026 being handled, and what is being communicated to appellants about timelines?

D3. The posting requires experience as a health professional under the Health Professions Act for every position, and lists knowledge of disabilities and experience in the employment of persons with disabilities only as assets. Is there any requirement or provision for lived experience of disability among panel members?

PART E \u2014 REINSTATEMENT AND THE TRANSFER

E1. Does the transfer of a client from AISH to ADAP on July 2, 2026 constitute ceasing to meet an eligibility requirement for the purposes of section 2(2) of AR 89/2007?

E2. Where the discretionary waiver at section 2(2) applies, does it waive the requirement for a fresh application and a new medical report, or does it prioritize an application that must still be made in full?

I would be grateful for a response within thirty days. Where a question cannot be answered within that time, I would appreciate an acknowledgement identifying which questions remain outstanding and when an answer can be expected.

I intend to share any answer I receive with other recipients affected, accurately and in full, including any answer that is unwelcome. If any part of this letter has misdescribed a departmental position, I would welcome the correction.

Yours sincerely,

[FULL NAME]
[FILE NUMBER, IF YOU HAVE ONE]
[MAILING ADDRESS]
[PHONE NUMBER]
[EMAIL ADDRESS]
Date sent: [DATE]`
  },
  {
    id: "appeal-status-aish-ineligibility",
    title: "Appeal status \u2014 AISH ineligibility, appeal filed before 2 July 2026",
    blurb: "For anyone who appealed a decision that they were not eligible for AISH, filed that appeal before 2 July 2026, and has heard nothing since. This letter names section 12.5(1) of the Assured Income for the Severely Handicapped Act, which provides that an appeal against a director's determination under section 3 of the former Act, not decided before 2 July 2026, continues and must be dealt with under the former Act. Naming the provision is the point: it asks them to confirm which rules your appeal is being handled under, rather than leaving it to sit.",
    to: "alss.appeals@gov.ab.ca",
    toHint: "Email <b>alss.appeals@gov.ab.ca</b>, or fax <b>780-422-1088</b>. If you would rather speak to someone, the phone line is <b>780-427-2709</b> \u2014 but send the written one either way, so there is a record.",
    subject: "Request for status of appeal \u2014 [YOUR FULL NAME], file [YOUR FILE NUMBER]",
    note: "Use this version if your appeal was against a decision that you were not eligible for AISH. If your appeal was about the move to ADAP itself, use the other version instead \u2014 that one is worded for a different problem. Question 5 is the one that matters most here: it asks them to say in writing whether they are treating your appeal under section 12.5(1), and if not, under what provision. A general question gets a general answer. This one does not leave that room. Send it, and send us what comes back.",
    body:
`To the Appeals Secretariat,

My name is [FULL NAME]. My file number is [FILE NUMBER]. I submitted a notice of appeal on [DATE OF APPEAL], against the decision of [DATE OF DECISION] that I was not eligible for AISH.

I have received no acknowledgement, no correspondence and no hearing date, and I am writing to ask for a written update.

Section 12.5(1) of the Assured Income for the Severely Handicapped Act provides that where a person appealed a director's determination that they were not eligible under section 3 of the former Act, and the appeal was not decided before 2 July 2026, the appeal continues and must be dealt with in accordance with the former Act. My appeal falls within that provision.

Please confirm in writing:

1. Whether my notice of appeal was received and registered, and my appeal file number.

2. Whether the program has completed its review, and whether a senior representative has been assigned to contact me.

3. Whether a Review of Decision has been issued, and if so on what date and to what address.

4. Whether a hearing date has been set, and if not, when one is expected.

5. Whether my appeal is being dealt with under section 12.5(1), and if not, under what provision.

Please resend anything already sent, as I have received nothing.

[FULL NAME]
[MAILING ADDRESS]
[PHONE NUMBER]
[EMAIL ADDRESS]
Date sent: [DATE]`
  },
  {
    id: "appeal-status-adap-move",
    title: "Appeal status \u2014 appealed the move to ADAP",
    blurb: "For anyone who filed a notice of appeal before 2 July 2026, while still receiving AISH, and has heard nothing since. This version does not assume what your appeal is understood to be against, because that is one of the things it asks. It is written for the situation where an appeal may have been quietly set aside rather than decided.",
    to: "alss.appeals@gov.ab.ca",
    toHint: "Email <b>alss.appeals@gov.ab.ca</b>, or fax <b>780-422-1088</b>. If you would rather speak to someone, the phone line is <b>780-427-2709</b> \u2014 but send the written one either way, so there is a record.",
    subject: "Request for status of appeal \u2014 [YOUR FULL NAME], file [YOUR FILE NUMBER]",
    note: "Question 5 is the safety net, and it is why this letter is worth sending even if the answer is bad. If they tell you the appeal is not proceeding, that question has already asked them to treat your correspondence as a request for a determination of your AISH eligibility \u2014 or to tell you what you must do to make that request. So a refusal comes back with the next step attached rather than leaving you at the beginning again. And whatever the answer, reassessment for AISH has no deadline on it. That road stays open. Send it, and send us what comes back.",
    body:
`To the Appeals Secretariat,

My name is [FULL NAME]. My file number is [FILE NUMBER]. I submitted a notice of appeal on [DATE OF APPEAL], before 2 July 2026, at a time when I was receiving AISH.

I have received no acknowledgement, no correspondence and no hearing date. I am writing to ask for a written answer.

Please confirm:

1. Whether my notice of appeal was received and registered, and my appeal file number.

2. What decision the Secretariat understands my appeal to be against.

3. Whether the appeal is proceeding, and if so, at what stage it currently sits.

4. If the appeal is not proceeding, on what basis, under which provision, and whether that determination has been communicated to me in writing.

5. If the appeal is not proceeding, whether any part of my correspondence is being treated as a request for a determination of my eligibility for AISH, and if not, what I must do to make that request.

Please resend anything already sent, as I have received nothing.

[FULL NAME]
[MAILING ADDRESS]
[PHONE NUMBER]
[EMAIL ADDRESS]
Date sent: [DATE]`
  },
  {
    id: "neudorf-individual",
    title: "End / Reverse ADAP — Letter to Minister Neudorf",
    blurb: "The central letter. Sets the government's own May 12 fact-sheet numbers against its public messaging and puts five formal questions on the record. Goes to the Minister, copied to the Premier and your MLA.",
    to: "ALSS.Minister@gov.ab.ca",
    cc: "premier@gov.ab.ca",
    toHint: "Goes to the Minister of Assisted Living and Social Services (Nathan Neudorf).",
    ccHint: "Premier is pre-filled. Add your own MLA's email here too (find them at assembly.ab.ca).",
    subject: "AISH-to-ADAP: the questions your own fact sheet raises", // draft
    pdf: "/pdfs/fillable/Fillable_Neudorf_END_REVERSE_ADAP_Letter.pdf",
    note: "Where it goes: Minister Neudorf, copied to Premier Danielle Smith and your own MLA. Keep your sent email as proof.",
    body:
`Dear Minister Neudorf,

I am one of the approximately 79,290 Albertans affected by the AISH-to-ADAP transition you are responsible for delivering on July 2, 2026. The documented record on this transition does not match the public messaging your ministry has been distributing. This letter requires a response.

THE NUMBERS YOUR OWN FACT SHEET CONFIRMS
From the Government of Alberta's May 12, 2026 ADAP Fact Sheet:
- Base benefit: $1,940/month (former AISH) to $1,740/month (ADAP) = −$200/month
- Employment exemption: $1,072/month to $700/month = −$372/month
- Total income flexibility: $3,012/month to $2,440/month = −$572/month

Under ADAP, a single recipient loses $572 per month in income flexibility before benefit reductions begin — $6,864 per year, structurally removed from day one, before working a single hour. For two-recipient households, the new 88% cohabitation rule combined with the AISH-to-ADAP rate cut and the federal Canada Disability Benefit clawback produces documented losses approaching $14,611 per year per couple.

WHERE THE FISCAL FRAMING FALLS APART
Your government is presenting the $700 ADAP earnings exemption as "the highest employment income limit among comparable disability income assistance programs in Canada." That framing only works when the comparison is to the new reduced AISH exemption of $350. The true comparison is to the former AISH exemption of $1,072.
- $700 vs $350 (post-cut) = +$350 (appears generous)
- $700 vs $1,072 (former) = −$372 — a cut
No version of these changes leaves current AISH recipients with more income flexibility than they have today. The "highest in Canada" framing is constructed against a baseline your government just cut.

WHERE THE COST SAVINGS FALL APART
Your government is cutting $49 million from AISH while spending $22 million to administer the cut. Net saving: $27 million. The Heritage Fund grew $383 million in a single quarter (Q3 2025–26). The net saving from this entire restructuring equals 7% of one quarter of Heritage Fund growth.
Meanwhile:
- A person experiencing homelessness costs taxpayers $55,000/year
- A person in supportive housing costs $21,000/year
- The current AISH benefit is $23,280/year
- If just 1.3% of recipients lose housing as a result of ADAP, downstream costs exceed $31 million — wiping out the savings
This is not fiscal efficiency. It is cost transfer: from the disability income budget to the emergency shelter, healthcare, child welfare, and crisis services budgets. The same taxpayers pay both.

THE QUESTIONS YOUR GOVERNMENT HAS NOT ANSWERED
I am asking you, on the record, to provide:
1. The complete ADAP earnings clawback rate schedule — the percentage clawback applied at each $1,000 increment of monthly earnings between $700 and $3,770. Your May 12 fact sheet referenced this verbally but did not publish it.
2. The government's official estimate of the percentage of current AISH recipients medically capable of sustained employment at 26 or more hours per week. ADAP only produces superior income outcomes at near-full-time work. If the government does not have this estimate, why was a policy requiring near-full-time employment to break even designed without it?
3. The published policy rationale for the 88% cohabitation rule — specifically, the evidentiary basis for the 12% reduction as a measure of shared household expenses for two disability income recipients.
4. Documentation of how ADAP will protect recipients with episodic disabilities from income instability during documented symptom flares.
5. Clarification of whether recipients who cannot reach the crossover point will experience a permanent, structural income reduction as a direct result of this transition.

MY PERSONAL IMPACT
[Optional but powerful — up to about 2000 characters. Describe in your own words how ADAP will affect your household, your finances, your health, or your family. The more personal, the harder to dismiss. Skip this if you prefer.]

WHAT I AM ASKING YOU TO DO
- Reverse the ADAP transition, pending independent review with meaningful disability community participation
- Publish complete ADAP regulations including the full clawback schedule and income protection provisions
- Guarantee that no disabled Albertan will experience a reduction in total support due to transition, cohabitation status, or reassessment outcomes
- Restore the independent appeal rights that Bill 12 removed
- Engage directly with disabled Albertans through transparent public consultation

YOU WILL HEAR FROM ME AGAIN.
I am one of approximately 79,290 Albertans whose lives this transition will affect. The documented record is being kept. The campaign is sourced. The numbers are public. The questions are formal. The transition is now in force. I expect a response.

Sincerely,
[your name]`
  },
  {
    id: "neudorf-caregiver",
    title: "End / Reverse ADAP — Caregiver / Advocate Edition",
    blurb: "The same fight, in the voice of someone who provides care. For parents, spouses, adult children, friends, and support workers — no guardianship needed. Your standing comes from what you have witnessed.",
    to: "ALSS.Minister@gov.ab.ca",
    cc: "premier@gov.ab.ca",
    toHint: "Goes to the Minister of Assisted Living and Social Services (Nathan Neudorf).",
    ccHint: "Premier is pre-filled. Add your own MLA's email here too (find them at assembly.ab.ca).",
    subject: "AISH-to-ADAP: a caregiver's witness, on the record", // draft
    pdf: "/pdfs/fillable/Fillable_Neudorf_END_REVERSE_ADAP_Caregiver_Edition.pdf",
    note: "For anyone who provides care, assistance, or advocacy to a person on AISH. Goes to Minister Neudorf, copied to the Premier and your MLA.",
    body:
`Dear Minister Neudorf,

I am writing on behalf of someone I love who is one of the approximately 79,290 Albertans affected by the AISH-to-ADAP transition you are responsible for delivering on July 2, 2026. I am not writing instead of them — I am writing alongside them, because the documented record of this transition requires more than one voice, and because I have witnessed firsthand what your ministry has not.

WHAT I HAVE WITNESSED
The person I care about did not arrive on AISH casually. They were assessed under criteria your government wrote. They were approved because their disability was documented, severe, and permanent. I have seen what it took for them to qualify — the medical appointments, the documentation, the proof of incapacity, the years of trying alternatives before applying. Your ministry has files on the person I love. I have memories.
I have also seen what daily life on AISH truly looks like — not the abstract budget numbers, but the lived reality of choosing between groceries and prescriptions, the medical appointments that take three buses to reach, the forms that take weeks to complete because the cognitive load is too high to do in one sitting, the way a missed deadline cascades into weeks of crisis. AISH is not generous. It is barely survival.

WHAT YOUR FACT SHEET DOES NOT MEASURE
Your government's May 12, 2026 ADAP Fact Sheet establishes that single recipients will lose $572 per month in income flexibility before benefit reductions begin — $6,864 per year structurally removed from day one. For two-recipient households, the new 88% cohabitation rule combined with the AISH-to-ADAP cut and the federal Canada Disability Benefit clawback produces documented losses approaching $14,611 per year per couple.
Those are your government's own published numbers. What they do not measure is what happens around those numbers — the unpaid labour that absorbs the shortfall when income drops. That labour is mine. It is the labour of every caregiver, family member, friend, and advocate writing to you today.

THE INVISIBLE BUDGET LINE
When AISH is not enough, the gap does not vanish. It transfers to me, and to people like me. Statistics Canada values unpaid caregiver labour in this country at $97.1 billion per year. The economic value of caregiver labour supporting disabled adults in Alberta alone reaches into the billions. None of it appears in your ministry's budget. None of it is acknowledged in the ADAP framing. And none of it can scale up further to absorb the cuts you are about to make.
I am already at capacity. So is every other caregiver I know. When ADAP takes another $572 per month from the household I help support, that gap does not get absorbed by me — it gets absorbed by the emergency room, the food bank, the mental health crisis line, the shelter system, and ultimately by funeral costs. I have watched that pipeline build. I am writing to you because I do not want to watch what comes next.

THE COHABITATION PENALTY PUNISHES CARE
The 88% cohabitation rule announced May 12 actively penalizes people who live together to share costs and provide mutual care. It treats partnership as a benefit that must be paid back to the government, when in fact partnership is what allows two disabled adults to survive on amounts that would not sustain either of them alone. I ask you to explain the evidentiary basis for the 12% reduction — because nothing about shared housing reduces shared medical costs, shared transportation costs, or shared disability-related expenses by 12%. The rule is not a measure of shared expenses. It is a tax on love.

WHAT I AM ASKING YOU ON THE RECORD
As a witness to the impact your policy will have on a person I love and on countless Albertans like them, I am asking you, on the record, to provide:
1. The government's estimate of how much unpaid caregiver labour is currently absorbing the gap between AISH benefit levels and survival costs in Alberta. If no such estimate exists, why has a benefit reduction been designed without it?
2. The government's modelling of what happens to AISH recipients whose caregivers are at capacity and cannot absorb the post-ADAP shortfall. Where does that gap go?
3. The published policy rationale for the 88% cohabitation rule — specifically, the evidentiary basis for the 12% reduction figure.
4. The government's modelling of downstream costs to the emergency room, mental health system, shelter system, child welfare system, and crisis services budgets as a result of this transition. If no modelling exists, why not?
5. The complete ADAP earnings clawback rate schedule, which your May 12 fact sheet referenced verbally but did not publish.

WHAT I HAVE SEEN — IN MY OWN WORDS
[Up to about 2000 characters. Describe what you have witnessed. You do not need to name the person you care about. You do not need medical details. Describe what you have seen — what daily life looks like, what the system has done, what you have seen happen since July 2. The more specific and personal, the harder to dismiss.]

WHAT I AM ASKING YOU TO DO
- Reverse the ADAP transition, pending independent review with meaningful disability community and caregiver participation
- Publish complete ADAP regulations including the full clawback schedule and income protection provisions
- Guarantee that no disabled Albertan will experience a reduction in total support due to transition, cohabitation status, or reassessment outcomes
- Restore the independent appeal rights that Bill 12 removed
- Recognize the unpaid caregiver labour your ministry's budget currently relies on and stop transferring further cost to it

I AM A WITNESS. THE RECORD IS BEING KEPT.
I am one of countless Albertans who provides unpaid care, support, and advocacy to someone on AISH. My standing comes from what I have seen with my own eyes. The campaign is sourced. The numbers are public. The questions are formal. The transition took effect July 2, 2026. The person I love deserves more than the silence your ministry has offered to date. I expect a response.

Sincerely,
[your name]`
  },
  {
    id: "mla-mp-contact",
    title: "Contact your MLA / MP",
    blurb: "A ready-to-send letter to your own provincial and/or federal representative, with four concrete asks. Edit the bracketed parts to fit your situation.",
    to: "",
    cc: "",
    toHint: 'You add your MLA or MP here. <a href="https://www.assembly.ab.ca/members/members-of-the-legislative-assembly" target="_blank" rel="noopener">Find your MLA →</a>',
    ccHint: "Optional. You can also copy the Premier, the ADAP program (adap@gov.ab.ca), the Ombudsman, the Human Rights Commission, or the federal Disability Minister.",
    subject: "AISH-to-ADAP transition: a constituent asking for action", // draft
    pdf: "/pdfs/fillable/Fillable_MLA_MP_Contact_Letter.pdf",
    note: "Recipient is your own MLA and/or MP. The PDF carries a full riding-by-riding email directory if you need to look yours up.",
    body:
`Dear [MLA/MP Name],

My name is [YOUR NAME]. I am a constituent of [YOUR RIDING/CITY], and I am writing to you regarding the Government of Alberta's transition of 79,290 AISH recipients to the Alberta Disability Assistance Program (ADAP), in force since July 2, 2026.

I am an AISH recipient. I have been continuously eligible since [YOUR START DATE]. My disability is [YOUR DIAGNOSIS]. I am writing because this transition directly affects [describe your specific concern — housing, medications, caregiving, independence, finances, etc.].

I am asking you, as my elected representative, to take the following actions:

1. End and reverse the mandatory AISH-to-ADAP transition and return recipients to AISH, and publish eligibility criteria in plain language for all 79,290 recipients.
2. Restore independent appeal of the AISH-to-ADAP placement decision, removed by Bill 12 in December 2025. A government-appointed panel making final, un-appealable decisions about the income and legal status of disabled Albertans is not a neutral substitution.
3. Ensure every recipient already moved to ADAP receives an individual reassessment and written notification of the specific criteria applied.
4. Address the Canada Disability Benefit clawback. Alberta is the only province in Canada redirecting federal poverty-reduction funding to general revenue — approximately $190 million per year.

This transition took effect without published criteria, without independent appeal rights, and without sufficient time for meaningful response from nearly 80,000 Albertans with permanent disabilities.

I am requesting a written response from your office addressing each of the four points above. I have retained copies of all correspondence.

Respectfully,
[YOUR NAME]
[YOUR ADDRESS]
[YOUR EMAIL]
[YOUR PHONE]`
  },
  {
    id: "mla-s154",
    title: "MLA Letter — Episodic Disability (s.15(4))",
    blurb: "For anyone whose condition flares. Quotes AR 96/2026 s.15(4) verbatim and asks your MLA four specific questions about a power that penalises reduced employment with no exemption for illness.",
    to: "",
    cc: "",
    toHint: 'You add your MLA here. <a href="https://www.assembly.ab.ca/members/members-of-the-legislative-assembly" target="_blank" rel="noopener">Find your MLA and their email →</a>',
    ccHint: "",
    subject: "AR 96/2026 s.15(4) — my disability flares, and this regulation penalises that",
    pdf: "/pdfs/fillable/Fillable_MLA_Letter_s15-4_LetterOnly.pdf",
    note: "For your own MLA. If you're not sure who that is, the find-your-MLA link above looks them up by your address.",
    body:
`Dear [your MLA's name],

I am your constituent. I was moved from AISH to the Alberta Disability Assistance Program on July 2, 2026. Nobody assessed me. No one looked at my file. It happened by operation of law.

I am writing about section 15(4) of Alberta Regulation 96/2026, which provides:

"A director may refuse, suspend, vary or discontinue a benefit provided under section 3.02 of the Act… if, in the director's opinion, the applicant or client has (a) refused to seek or accept or has reduced or terminated the applicant's or client's reasonable employment, or (b) refused or neglected to participate in or make use of an employment support."

Section 3.02 is ADAP. This power does not apply to people who stayed on AISH. And section 16(a) requires me to notify a director when my employment ends.

My situation. I live with this condition, and it is episodic: [name your condition]

This is what a flare does to me:
[Up to about 2500 characters — take the room you need to describe a flare in your own words.]

Here is the bind the wording puts me in. When I flare, I must manage my employer under their rules — which may demand a doctor's note that a flare makes impossible to obtain. And separately, section 16(a) requires me to report to ADAP that my employment was reduced. That same report is the fact section 15(4) lets them cut me for. One collapse, two systems, and the second report is a report against myself.

The regulation does not distinguish between someone who will not work and someone who cannot. There is no exemption for illness anywhere in it. And "reasonable employment" is not defined. Because it is undefined, it takes its ordinary meaning — fair, practical, within the limits of reason. By that plain meaning, it is not reasonable to expect someone whose disability is episodic to hold employment their body periodically makes impossible, or to prove during a collapse why they could not work.

What I am asking you to do:
1. Raise section 15(4) with the Minister of Assisted Living and Social Services.
2. Ask what protection exists in law — not policy — for a person whose employment is reduced by illness rather than by choice.
3. Ask what "reasonable" means, since it is nowhere defined, and how a standard of reasonableness can fairly be applied to people whose disabilities are episodic.
4. Ask why this power applies to ADAP clients and not to AISH clients, when tens of thousands of us were moved between the two without ever being assessed.

I am not asking for special treatment. I am asking not to be punished for having the condition that qualified me in the first place.

Please reply in writing.

Sincerely,
[your name]
[your city or town]
[your email]`
  }
];
