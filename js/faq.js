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
        a: `Alberta split its disability income support into two programs. On July 2, a large share of AISH clients were moved to the new Alberta Disability Assistance Program (ADAP). If you were one of them, you did not have to do anything for the move itself — the government identified and notified people who met the automatic-approval criteria before July 2026, and no action was needed.

One thing we want to be straight about. The figure "roughly 46,000 to 50,000 people" has been repeated in a lot of places, including here. We have gone looking for it three times now and cannot trace it to any government document, so we have taken it out rather than keep passing it along. The 26,800 figure you may also see is from the employment contracts — an estimate of referrals over three years, not a count of who moved in July. _(automatic-approval process confirmed against the ADAP fact sheet, August 2026; transitioned headcount not confirmed against any primary source)_`
      },
      {
        q: `If I was moved to ADAP, should my payment be different right now?`,
        a: `No — not right now. If you were moved, a $200-a-month transition top-up fills the gap, so your total should stay the same through to December 31, 2027.

Be careful with the date here, because a wrong one is circulating. The drop arrives with the **January 2028** payment, not January 2027. If someone has told you your money falls next winter, they are a year out.

Brand-new applicants — people who were never on AISH and apply for the first time after the switch — start at the lower amount with no top-up. If your money *did* change and you were moved, that is worth a written question to the program; it should not have. _(top-up and its December 31, 2027 end date confirmed against the ADAP page and fact sheet, August 2026)_`
      },
      {
        q: `If I stay on AISH but choose to move to ADAP later, do I keep the $200 transition top-up?`,
        a: `Yes — good news, and this is confirmed straight from the government's own policy manual. If you were on AISH (or approved for AISH) before July 2, 2026, you can move to ADAP later and you are **not** treated like a brand-new applicant — you keep the $200 top-up through to December 2027. The manual actually spells out two bonuses worth knowing:

- If you and your partner both get AISH or ADAP, the $200 top-up is **not** cut down to 88% the way the base living allowance is — you keep the full $200.
- The usual $5,000 non-exempt asset limit that applies to most personal benefits is **waived** for the transition benefit — you can hold more than $5,000 and still receive it.

As a general habit with any benefit, ask the program to note your top-up in writing. One caution on those two bonuses: we confirmed both against the policy manual in July 2026 and have not been able to re-open it since. If your own deposit does not match, ask for a written breakdown rather than assuming. _(confirmed against the DIA Policy Manual in July 2026; not re-verified since)_`
      }
    ]
  },
  {
    cat: "Money — living allowance, transition benefit, rebates, clawbacks",
    items: [
      {
        q: `My partner and I both get AISH or ADAP — when and why does our money drop?`,
        a: `When two adults in the same home both get AISH or ADAP, each of you moves to 88 percent of the individual maximum — about 88 cents on the dollar each. It means two disabled people who live together receive less than two disabled people who live apart. On the amounts: 88% of the $1,940 AISH maximum works out to **$1,707.20** each, and 88% of the $1,740 ADAP maximum to **$1,531.20** each. Treat those as our arithmetic, not official figures — the government publishes the 88% rule and it publishes the maximums, but it does not publish couple dollar amounts anywhere we can find.

One thing to watch if you were moved from AISH. We confirmed against the policy manual in July 2026 that the $200 transition top-up is **not** cut to 88% the way the base rate is, but we have not been able to re-open the manual since. If that still holds, your amount will be higher than the figure above. Ask in writing for a breakdown of how your own amount was calculated.

Timing matters here so you watch the right deposit: ADAP's base rate itself began July 2, 2026, but the **88% couple reduction specifically starts the August 2026 benefit period**, and August payments usually land in the last days of July. So watch your late-July deposit, and if it is not what you expect, ask in writing for a breakdown. _(88% couple rule effective August 2026 benefit period, per the government's ADAP page and fact sheet)_`
      },
      {
        q: `Are the child benefit amounts changing, and to what?`,
        a: `Yes. The child benefit rates under AISH and ADAP were recalibrated starting the August 2026 benefit period. The monthly amounts are: $300 for the first child, $117 for the second, $88 for the third, $59 for the fourth, and $30 for each additional child. The government says this raises child benefits for about 7,000 families, though not every household changes the same way — so if you get money for children, check your late-July deposit and ask for a breakdown if it looks off. _(figures per the government's ADAP page and fact sheet, effective August 2026 benefit period)_`
      },
      {
        q: `Does the $100 Alberta energy rebate count against my AISH or ADAP?`,
        a: `No — this one is good news. The one-time $100 Alberta Energy Rebate is non-taxable and, in the government's own words, "will not affect other government benefits" — so it does not reduce AISH, ADAP, or Income Support. If you are on AISH, ADAP, Income Support, or the Alberta Seniors Benefit, you are **automatically enrolled** and do not have to apply. (People who start on these programs after July 1, 2026 need to apply through the online portal.) Take it with no worry. _(confirmed on the government's Alberta Energy Rebate page)_`
      },
      {
        q: `My partner gets a pension — how much of it counts against my benefits?`,
        a: `Less than it used to, and this is one of the few recent changes that went the right way. As of July 2026, the first **$1,200 a month** of a spouse or cohabiting partner's pension income is fully exempt, and **25 percent of whatever is left** is exempt as well. Only the remainder is counted.

Pension income here means things like CPP Disability, Employment Insurance and Workers' Compensation paid to your partner — not their wages from a job.

Be careful not to mix this up with employment income. There are figures circulating for how much a partner can *earn* from work before it affects your benefits, and we have not been able to trace those to any government document. This pension exemption we can. _(confirmed on the government's ADAP fact sheet, August 2026)_`
      },
      {
        q: `Do I have to apply for the Canada Disability Benefit if Alberta just takes it back?`,
        a: `Yes — apply anyway, and report the outcome. The Canada Disability Benefit (CDB) pays up to about $204 a month (the federal maximum is $204.20 for July 2026 to June 2027). Alberta counts the CDB as income, which reduces your provincial benefit, so most people here see little or no net gain from it. But applying is not optional: the AISH/ADAP rules require you to apply for the CDB and the Disability Tax Credit and to tell the program the outcome. Alberta has already reduced provincial benefits for people who did not have a CDB decision in time — clients without a CDB decision by February 28, 2026 had $200 taken off their benefits starting in April 2026. Applying and reporting is what protects you from that reduction. _(CDB amount per canada.ca; apply-and-report requirement and the $200 reduction per the government's "Apply for federal disability supports" page)_`
      },
      {
        q: `I need to send disability tax credit papers to CRA — has that changed?`,
        a: `Yes. The old online way to upload disability tax credit (DTC) documents to CRA has changed. If you need to send DTC papers, ask CRA or your doctor's office for the current method before you file anything. Note too that to apply for the CDB you must first be approved for the DTC, which means filing your taxes and having a medical practitioner complete the medical part of the form. _(as of July 2026)_`
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
        a: `It is one application in two parts. Part A is yours — the part you fill out about yourself, your income, and your living details (the form is called the DS2444A). Part B is the medical report your doctor or nurse practitioner fills out about your condition and how it affects you (the DS2444B). Both parts go in together — one application, two halves. If filling them out feels like a lot, bring your questions to the group and we will take them apart one piece at a time.`
      }
    ]
  },
  {
    cat: "Appeals — what can and cannot be appealed",
    items: [
      {
        q: `Can I appeal a benefit cut under the new employment rules?`,
        a: `Yes. (This corrects something said earlier in the week.) A benefit cut under the employment provision — section 15(4) — is **not** on the list of decisions that are exempt from appeal. On the published regulation, that kind of cut **is** appealable. If your benefit is reduced under the new employment rules, you have the right to appeal it. _(corrected and confirmed as of July 14, 2026)_`
      },
      {
        q: `What cannot be appealed?`,
        a: `A few things are barred. The move from AISH to ADAP itself cannot be appealed. Certain specific denials may also be exempt from appeal — so ask before assuming, rather than treating any denial as final. (We are still confirming the exact current exemption list against the published regulation, so we do not want to state which specific denials are exempt until that is nailed down.) The medical determination is likewise described as final, and we are still confirming exactly how that works. When in doubt about whether a decision can be appealed, ask — do not assume it cannot, and reach out to the group for help.`
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
        a: `Check this one carefully — do not assume. Alberta Aids to Daily Living (AADL) has clients pay a 25% cost-share (up to $500 per family per benefit year), and low-income Albertans can be exempt. On the government's current AADL cost-share page, the programs whose clients are exempt by name include Income Support and **AISH — but ADAP is not listed.** That may be an oversight the page has not caught up on, but as written, being on ADAP does not automatically make you cost-share exempt the way being on AISH does. You may still qualify for exemption through the low-income income thresholds or through Alberta Adult Health Benefits. Before a big equipment bill lands, confirm your cost-share status with AADL in writing. _(confirmed on the government's AADL cost-sharing page; ADAP not named among exempt programs)_`
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
        a: `There are published figures for some situations, and gaps we will not guess at.

- **On AISH**, with or without dependents: **$350** a month is exempt, and anything above that comes off dollar for dollar.
- **On ADAP, single**: **$700** a month is fully exempt.
- **On ADAP**, you can earn up to **$45,240** a year in employment income and still receive some financial benefit. The government calls this the highest such limit in Canada.

Above $700, ADAP earnings are deducted on a sliding scale the government describes as starting at less than a cent per dollar and increasing sharply as you approach $45,000 a year. It has not published that schedule, so nobody can tell you what your deduction will be at a given wage.

For a cohabiting partner's employment income, and for clients with dependents, there are several figures circulating and they do not agree with each other. Some come from advocacy analysis of the program as it was originally proposed rather than from the government. We are not repeating a number we cannot source. Ask in writing what exemption applies to your file and what instrument sets it.

One hard rule underneath all of this: report every pay on time. If income is not reported on time, the exemptions may not apply at all — not reduced, do not apply. We are still checking which instrument sets that, so treat it as a reason to report on time rather than a penalty we can quote to you. _(AISH $350 per Your Guide to Disability Income Assistance, July 2026 edition; ADAP $700 and $45,240 per the government's ADAP page and fact sheet, August 2026)_`
      },
      {
        q: `Can they cut my ADAP benefit if my health forces me to reduce my work hours?`,
        a: `If your benefit is cut because your health affects your work, that kind of cut — the employment one under section 15(4) — is appealable, so you do not have to accept it without a fight. You can also put your limits in writing ahead of time and request accommodation, so the barrier is on record before any cut happens. Bring it to the group and we will help you word it. _(as of July 2026)_`
      }
    ]
  },
  {
    cat: "Spotting misinformation",
    items: [
      {
        q: `I saw an official-looking post with AISH/ADAP numbers — can I trust it?`,
        a: `Be careful. Some of what is circulating out there, including some very official-sounding posts, is AI-generated and mixes real facts with invented numbers. If a number matters to your life, get it from an actual document, or ask in the group. Our whole strength is that everything we put out traces back to a real regulation.`
      }
    ]
  }
];
