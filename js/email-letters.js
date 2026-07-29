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
    toHint: "Send it to your own regional AISH and ADAP office: North zone <b>northzoneaish@gov.ab.ca</b> \u00b7 Central region <b>AISH.centralregion@gov.ab.ca</b>. Not sure which is yours? Send it to the one nearest you and say in the email that you are unsure which office holds your file.",
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
    toHint: "Send to the office that holds your file: Edmonton and area <b>aishedmonton@gov.ab.ca</b> (780-415-6300) \u00b7 Calgary and area <b>calgaryaish@gov.ab.ca</b> \u00b7 new applications <b>ApplyDIA@gov.ab.ca</b> (587-759-6810). Not sure which? Ring Alberta Supports on <b>1-877-644-9992</b>, ask for the email address for written correspondence about your file, and ask them to email you while you are still on the line so you have it in writing. Always use the return address printed on any letter you have received.",
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
