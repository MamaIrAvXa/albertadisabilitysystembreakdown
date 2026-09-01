/* ───────────────────────────────────────────────────────────────
   Frequently Asked Questions — mirrors the Facebook group Q&A.
   Plain-language answers to the questions people keep asking.

   TO EDIT: each category is { cat: "...", items: [ ... ] }.
   Each question is { q: `question`, a: `answer` }.
   In an answer: blank lines separate paragraphs; a line that starts
   with "- " is a bullet; **text** is bold; *text* or _text_ is italic.
   Add a new question by copying one { q, a } block into a category.
   ─────────────────────────────────────────────────────────────── */
const FAQ = [
  {
    cat: "The AISH → ADAP transition",
    items: [
      {
        q: `What happened on July 2, 2026?`,
        a: `Alberta split its disability income support into two programs. On July 2, a large share of AISH clients were moved to the new Alberta Disability Assistance Program (ADAP). If you were one of them, you did not have to do anything for the move itself — the government notified every AISH recipient in mid-May with a letter specific to their situation, telling them whether they were staying on AISH, moving to ADAP, or affected by a rule change. (The automatic-approval criteria you may have read about — severe and profound developmental disability or PDD eligibility, palliative or terminal conditions, living in continuing care, or being 60 or older — are the criteria for **staying on AISH**, not for being moved.)

One thing we want to be straight about. The figure "roughly 46,000 to 50,000 people" has been repeated in a lot of places, including here. We have gone looking for it four times now and cannot trace it to any government document, so we have taken it out rather than keep passing it along. The 26,800 figure you may also see is from the employment contracts — an estimate of referrals over three years, not a count of who moved in July. _(May notification and the automatic-approval criteria confirmed against the ADAP fact sheet, August 2026; transitioned headcount not confirmed against any primary source)_`
      },
      {
        q: `If I was moved to ADAP, should my payment be different right now?`,
        a: `No — not right now. If you were moved, a $200-a-month transition top-up fills the gap, so your total should stay the same through to December 31, 2027.

Be careful with the date here, because a wrong one is circulating. The drop arrives with the **January 2028** payment, not January 2027. If someone has told you your money falls next winter, they are a year out.

One timing detail so you are watching the right deposit: AISH and ADAP pay **4 business days before the first of the month**. So the January 2028 payment is the one that lands in the last days of December 2027 — that is the deposit where the top-up stops, not a January one.

Brand-new applicants — people who were never on AISH and apply for the first time after the switch — start at the lower amount with no top-up. If your money *did* change and you were moved, that is worth a written question to the program; it should not have. _(top-up and its December 31, 2027 end date confirmed against the ADAP page and fact sheet; payment timing confirmed against the government's AISH and ADAP payment details page, August 2026)_`
      },
      {
        q: `If I stay on AISH but choose to move to ADAP later, do I keep the $200 transition top-up?`,
        a: `Yes — good news, and this is confirmed straight from the government's own policy manual. If you were on AISH (or approved for AISH) before July 2, 2026, you can move to ADAP later and you are **not** treated like a brand-new applicant — you keep the $200 top-up through to December 2027. The manual spells out two bonuses worth knowing:

- If you and your partner both get AISH or ADAP, the $200 top-up is **not** cut down to 88% the way the base living allowance is — you keep the full $200.
- The usual $5,000 non-exempt asset limit that applies to most personal benefits is **waived** for the transition benefit — you can hold more than $5,000 and still receive it.

Two limits in the same policy that nobody mentions out loud. If you receive the **modified** living allowance — the reduced rate for people living in a facility — you are not eligible for the transition benefit. And if you come off ADAP and are approved again later, the top-up does **not** come back. So if you are thinking about a change that might interrupt your eligibility, ask in writing what it does to your top-up before you do it.

As a general habit with any benefit, ask the program to note your top-up in writing. If your own deposit does not match, ask for a written breakdown rather than assuming. _(all four points confirmed against the DIA Policy Manual, Transition Benefits, August 2026)_`
      }
    ]
  },
  {
    cat: "Money — living allowance, transition benefit, rebates, clawbacks",
    items: [
      {
        q: `My partner and I both get AISH or ADAP — when and why does our money drop?`,
        a: `When two adults in the same home both get AISH or ADAP, each of you moves to 88 percent of the individual maximum — about 88 cents on the dollar each. It means two disabled people who live together receive less than two disabled people who live apart.

We can now give you the government's own numbers rather than our arithmetic. The policy manual prints a table: an **AISH** client with a partner on AISH or ADAP receives **$1,708**, and an **ADAP** client with a partner on AISH or ADAP receives **$1,532**. (Straight 88% of the maximums works out to $1,707.20 and $1,531.20 — the manual rounds up to the whole dollar. If your deposit shows the cents version, that is why. Either figure is close enough that a gap of more than a dollar is worth asking about.)

Good news on one point, and this is confirmed in the manual: the $200 transition top-up is **not** cut to 88% the way the base rate is. If you were moved from AISH, your amount is the couple rate **plus** the full $200.

Timing matters here so you watch the right deposit: ADAP's base rate itself began July 2, 2026, but the **88% couple reduction specifically starts the August 2026 benefit period**, and payments land 4 business days before the first of the month. So watch that late-July deposit, and if it is not what you expect, ask in writing for a breakdown of how your own amount was calculated. _(couple amounts and the top-up exception confirmed against the DIA Policy Manual, Monthly Living Allowance and Transition Benefits; 88% start date per the government's ADAP page and fact sheet, August 2026)_`
      },
      {
        q: `Are the child benefit amounts changing, and to what?`,
        a: `Yes. The child benefit rates under AISH and ADAP were recalibrated starting the August 2026 benefit period. The monthly amounts are: $300 for the first child, $117 for the second, $88 for the third, $59 for the fourth, and $30 for each additional child. The government says this raises child benefits for about 7,000 families, though not every household changes the same way — so if you get money for children, check your late-July deposit and ask for a breakdown if it looks off. _(figures per the government's ADAP page and fact sheet, effective August 2026 benefit period)_`
      },
      {
        q: `Does the $100 Alberta energy rebate count against my AISH or ADAP?`,
        a: `No — this one is good news. The one-time $100 Alberta Energy Rebate is non-taxable and, in the government's own words, "will not affect other government benefits" — so it does not reduce AISH, ADAP, or Income Support. If you are on AISH, ADAP, Income Support, or the Alberta Seniors Benefit, you are **automatically enrolled** and do not have to apply. Take it with no worry.

One deadline to watch, because it is close. People who started on these programs **after July 1, 2026** are not auto-enrolled and have to apply through the online portal — and **applications close September 30, 2026**. If that is you, do not leave it. You will need an Alberta.ca Account that has been verified, and if you cannot get to a computer, an Alberta Supports centre will help you do it there.

One more thing: the government has warned about scam texts pretending to be this rebate. It will never send you money by text. Do not click a link in a text message to apply. _(confirmed on the government's Alberta Energy Rebate page, August 2026)_`
      },
      {
        q: `My partner gets a pension — how much of it counts against my benefits?`,
        a: `Less than it used to, and this is one of the few recent changes that went the right way. As of July 2026, the first **$1,200 a month** of a spouse or cohabiting partner's pension income is fully exempt, and **25 percent of whatever is left** is exempt as well. Only the remainder is counted.

Pension income here means things like the Canada Disability Benefit, CPP and CPP Disability, Employment Insurance and Workers' Compensation paid to your partner — not their wages from a job.

Wages are a separate rule, and we can now point you at it. Your partner's **employment** income has its own exemption of **$1,500 a month**, published in the government's earnings table. See the earnings question further down for the full table. _(pension exemption confirmed on the government's ADAP fact sheet; the $1,500 partner employment exemption per the ADAP page earnings table and the DIA Policy Manual, August 2026)_`
      },
      {
        q: `Do I have to apply for the Canada Disability Benefit if Alberta just takes it back?`,
        a: `Yes — apply anyway, and report the outcome. The Canada Disability Benefit (CDB) maximum is **$204.20 a month** for July 2026 through June 2027. It re-indexes every July, so the number moves.

Watch for this: Alberta's own "Apply for federal disability supports" page still says the CDB pays "up to $200 per month." That is last year's rate. If a worker quotes you $200, the federal page is the one to go by.

Alberta counts the CDB as income and deducts it dollar for dollar, so for most people there is no net gain from it at all — the federal increase to $204.20 does not reach you. Keep that separate from the $200 below, which is a penalty for not applying, not the ordinary deduction. But applying is not optional: the AISH/ADAP rules require you and your partner to apply for the CDB and the Disability Tax Credit and to tell the program the outcome. Alberta has already reduced provincial benefits for people who did not have a CDB decision in time — clients without a CDB decision by February 28, 2026 had $200 taken off their benefits starting in April 2026. Applying and reporting is what protects you from that reduction. _(CDB maximum per canada.ca, August 2026; apply-and-report requirement and the $200 reduction per the government's "Apply for federal disability supports" page)_`
      },
      {
        q: `I need to send disability tax credit papers to CRA — has that changed?`,
        a: `Yes. The old online way to upload disability tax credit (DTC) documents to CRA has changed. If you need to send DTC papers, ask CRA or your doctor's office for the current method before you file anything. To apply for the CDB you must first be approved for the DTC, which means filing your taxes and having a medical practitioner complete the medical part of the form.

Here is the part people miss. Your doctor can charge you for filling in that medical section, and **AISH and ADAP will cover that cost** for eligible clients. Bring an invoice or a written cost estimate from the medical professional to your worker; the program issues it as a supplemental benefit and you pay the practitioner. Be ready for the catch: you are required to repay the program once the federal government reimburses you for the fee. If the up-front cost is what is stopping you from applying, say so to your worker — that is the exact situation this is for.

One more, if you were turned down before: if you were denied the DTC **before 2025**, you are required to reapply, because the federal government broadened the eligibility criteria in 2025. An old "no" is not a current no. _(confirmed on the government's "Apply for federal disability supports" page, August 2026; CRA upload method not re-confirmed this month — ask CRA directly)_`
      }
    ]
  },
  {
    cat: "Getting back to AISH — reassessment and the medical report",
    items: [
      {
        q: `I was moved to ADAP but I cannot work — how do I get back to AISH?`,
        a: `The way back is a reassessment. It is not automatic — you have to ask. The government covers one medical assessment for people who were moved, but ask in writing whether it is fully covered and whether you would ever have to repay it. If your condition means you cannot work at all, this is the path, and you do not have to do it alone.`
      },
      {
        q: `Is there a deadline to move back to AISH?`,
        a: `No. There is no clock on it — that door has no deadline. You apply when your medical picture supports it, and the clearer and fresher your medical evidence is, the stronger your case.`
      },
      {
        q: `What does the AISH application look like?`,
        a: `It is one application in two parts. Part A is yours — the part you fill out about yourself, your income, and your living details (the form is called the DS2444A). Part B is the medical report your doctor or nurse practitioner fills out about your condition and how it affects you (the DS2444B). Both parts go in together — one application, two halves. If filling them out feels like a lot, bring your questions to this community and we will take them apart one piece at a time.`
      }
    ]
  },
  {
    cat: "Appeals — what can and cannot be appealed",
    items: [
      {
        q: `Can I appeal a benefit cut under the new employment rules?`,
        a: `Yes. A benefit cut under the employment provision — section 15(4) — is **not** on the list of decisions that are exempt from appeal. On the published regulation, that kind of cut **is** appealable. If your benefit is reduced under the new employment rules, you have the right to appeal it — in writing, within 30 days of being told.

We have now read the exempt list ourselves, word for word. Of the eleven exempt items, exactly one is a decision to refuse, suspend, vary or discontinue a benefit: a cut for not claiming or assigning a federal benefit like CPP or Old Age Security. The employment cut is not there. If anyone tells you otherwise, ask them in writing which instrument makes it non-appealable. _(read from the Applications and Appeals (Ministerial) Regulation, section 6, as replaced by AR 87/2026 — Alberta Gazette Part II, May 15, 2026, pages 236 to 238)_`
      },
      {
        q: `What cannot be appealed?`,
        a: `We can now answer this properly, because we have read the current exempt list in the regulation rather than a four-year-old copy of it.

Two big ones are barred outright:

- **The move from AISH to ADAP itself.** It happened automatically, so there was never a decision to appeal.
- **The AISH Medical Review Panel's finding that you are not medically eligible for AISH.** That one is final.

The regulation also shuts out nine narrower things, mostly about money already paid: whether to let you off repaying a benefit, how a debt gets collected, a demand to repay a personal benefit, deducting a debt out of your benefit, spreading your income over a different period, a finding that you refused a transfer out of hospital, two specific exemption decisions, and the decision **to grant** a personal benefit.

Now the part worth your attention. That list is narrow, and a great deal is **not** on it — including the employment-related cut under section 15(4). The program's own policy manual carries one loose line saying cuts for not meeting client responsibilities "are not appealable," which is broader than the regulation supports. So if you are told a decision cannot be appealed, do not take it as final: ask, in writing, **which instrument makes this decision exempt from appeal**. Get the answer in writing. And whatever else you do, file within **30 days** — the deadline runs whether or not anyone argues about it. Bring it to this community and we will help you word it. _(exempt list read from the Applications and Appeals (Ministerial) Regulation, section 6, as replaced by AR 87/2026 — Alberta Gazette Part II, May 15, 2026, pages 236 to 238; transition and medical-panel bars also confirmed on the government's ADAP appeal page, August 2026)_`
      }
    ]
  },
  {
    cat: "Your rights — accommodations and communication",
    items: [
      {
        q: `Can I ask AISH or ADAP to communicate with me in a way that works for my disability?`,
        a: `Yes, and it is not you being difficult. If long, dense letters are hard for you, you can ask them to call. If you do better in writing, ask for that. If you need a support person on a call, or need to take things one piece at a time, you can ask. Put your request in writing, keep their answer, and keep a record. This is accessibility — the system is supposed to adapt to you, not the other way around.`
      },
      {
        q: `Is asking for an accommodation asking for special treatment?`,
        a: `No. AISH and ADAP exist to serve disabled people — we are the reason these programs exist. Asking for the process to be accessible to you is how it is supposed to work, not a favour you are begging for. Do not talk yourself out of asking. Ask, in writing, clearly, and keep the answer.`
      }
    ]
  },
  {
    cat: "Special benefits and equipment",
    items: [
      {
        q: `If I am on ADAP, do I still get medical equipment cost-free through AADL?`,
        a: `This one moved, and it moved the right way. Alberta Aids to Daily Living (AADL) has clients pay a 25% cost-share, up to $500 per family per benefit year (July 1 to June 30). When we last checked, the AADL cost-share page named Income Support and AISH among the programs whose clients can be exempt — and left ADAP off. **ADAP is now on that page**, in both places it should be.

Read the wording carefully, though, because it is not a promise. The page says clients on those programs "may contact AADL directly to determine eligibility for cost-share exemption" — so it is a door, not an automatic exemption. Contact AADL and get your status confirmed in writing before a big equipment bill lands.

If that route does not work for you, there are others. You may qualify on income alone: the thresholds are taxable income of $20,970 or less for a single person, $33,240 for a family with no children, or $39,250 for a family with children. There is a temporary exemption if your finances have just changed or you have extraordinary disability-related expenses. And if you are refused and paying would cause you hardship, you can appeal your cost-share status with AADL's own notice of appeal form. Respiratory benefits have no cost-share at all. _(confirmed on the government's AADL cost-sharing page, updated August 2026)_`
      }
    ]
  },
  {
    cat: "The employment side — the contractors and the action plan",
    items: [
      {
        q: `Who runs the ADAP employment side now?`,
        a: `The people who assess you and build your ADAP job plan work for two large private contractors hired by the province — one Australian-owned, one UK-affiliated (AKG Canada in the north, Serco Canada in the south). That is who decides your employment plan now, not your old AISH caseworker. Keep a record of every meeting and everything they ask of you.`
      },
      {
        q: `Is the ADAP action plan optional?`,
        a: `No. On ADAP, the individual action plan is a condition of your benefits, and a case manager helps build it around employment goals. The risk is walking in with nothing prepared and having a plan set on you that does not match your real life. Prepare first: put into your own words what you can and cannot reliably do, where your limits are, and what accommodations you need, so the plan reflects you rather than an assumption about you.`
      },
      {
        q: `What if my disability means I cannot take part in the employment programming at all?`,
        a: `You can send a formal written notice to ADAP saying so and requesting accommodation in writing. Here is why it is worth doing: if they accommodate you, you get the exemption you need; if they refuse or go silent, you now hold written proof that they required participation and would not address the barrier that makes it impossible. Either way, the record lands on your side.`
      },
      {
        q: `How much can I earn before it affects my AISH or ADAP?`,
        a: `The government has now published the whole table, so we can give you all four figures instead of three. This is how much you can earn each month before it touches your benefits:

- **AISH**, single or parent: **$350**
- **ADAP**, single: **$700**
- **ADAP**, with one or more dependent children: **$1,100**
- **A cohabiting partner** of an AISH or ADAP client: **$1,500**

On AISH, anything above $350 comes off dollar for dollar. On ADAP, earnings above your threshold are deducted on a sliding scale, and you can earn up to **$45,240** a year and still receive some benefit — the government calls this the highest such limit in Canada.

Here is what is still missing, and we will not guess at it. The government describes the sliding scale as starting at less than a cent per dollar and increasing sharply as you approach $45,000 a year, but **it has never published the schedule**. So nobody — not us, not a worker reading off a screen — can tell you what your deduction will be at a given wage. The government's benefit estimator will give you a figure for your own situation; that is the closest thing to an answer that exists right now.

One hard rule underneath all of this: **report every pay on time**. The policy manual is blunt — if income has not been reported in a timely manner, or has been misrepresented, "these exemptions are not applied." Not reduced. Not applied. That is the single most expensive mistake available to you, and it is entirely avoidable.

A note on how partners are counted: if you and your partner are both on AISH or ADAP, your income is assessed separately on each file and you do not report each other's earnings. If your partner is not on the program, you each get your own fully exempt amount, they cannot be shared, and whatever is left over from both of you is added together for the partial exemption. _(AISH $350, ADAP $700, ADAP parent $1,100 and cohabiting partner $1,500 per the government's ADAP page earnings table and the ADAP fact sheet; reporting rule and partner treatment per the DIA Policy Manual, Employment and Self-Employment Income, August 2026. These are published government policy — the ministerial order that sets them has still not been published)_`
      },
      {
        q: `Can they cut my ADAP benefit if my health forces me to reduce my work hours?`,
        a: `If your benefit is cut because your health affects your work, that kind of cut — the employment one under section 15(4) — is appealable, so you do not have to accept it without a fight. File in writing within 30 days.

Better still, get ahead of it. Put your limits in writing before anything happens and request accommodation, so the barrier is on record before any cut is made. The policy manual is on your side here: it says the program should first work with you to identify and address barriers, and that supportive approaches come before compliance measures. Quote that back at them. Bring it to this community and we will help you word it. _(appealability read from the Applications and Appeals (Ministerial) Regulation, section 6, as replaced by AR 87/2026; barriers-first language from the DIA Policy Manual, Employment Supports, August 2026)_`
      }
    ]
  },
  {
    cat: "Spotting misinformation",
    items: [
      {
        q: `I saw an official-looking post with AISH/ADAP numbers — can I trust it?`,
        a: `Be careful. Some of what is circulating out there, including some very official-sounding posts, is AI-generated and mixes real facts with invented numbers. If a number matters to your life, get it from an actual document, or ask here. Our whole strength is that everything we put out traces back to a real regulation.`
      }
    ]
  }
];
