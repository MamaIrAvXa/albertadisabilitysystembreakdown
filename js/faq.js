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

There is one wrinkle at the other end worth checking. The government's own two sources do not quite line up: the ADAP page says clients who moved in July 2026 receive the top-up, while the policy manual dates the benefit "from August 2026 to December 2027." If you moved in July and your July deposit looked light, that is worth a written question — do not assume it was correct.

Brand-new applicants — people who were never on AISH and apply for the first time after the switch — start at the lower amount with no top-up. If your money *did* change and you were moved, that is worth a written question to the program; it should not have. _(top-up and its December 31, 2027 end date confirmed against the ADAP page and fact sheet; the August 2026 start and the payment window per the DIA Policy Manual, Transition Benefit; payment timing per the government's AISH and ADAP payment details page, September 2026)_`
      },
      {
        q: `If I stay on AISH but choose to move to ADAP later, do I keep the $200 transition top-up?`,
        a: `Yes — good news, and this is confirmed straight from the government's own policy manual. If you were on AISH (or approved for AISH) before July 2, 2026, you can move to ADAP later and you are **not** treated like a brand-new applicant — you keep the $200 top-up through to December 2027. The manual spells out two bonuses worth knowing:

- If you and your partner both get AISH or ADAP, the $200 top-up is **not** cut down to 88% the way the base living allowance is — you keep the full $200.
- The usual $5,000 non-exempt asset limit that applies to most personal benefits is **waived** for the transition benefit — you can hold more than $5,000 and still receive it.

Two limits in the same policy that nobody mentions out loud. If you receive the **modified** living allowance — the reduced rate for people living in a facility — you are not eligible for the transition benefit. And if you come off ADAP and are approved again later, the top-up does **not** come back. So if you are thinking about a change that might interrupt your eligibility, ask in writing what it does to your top-up before you do it.

As a general habit with any benefit, ask the program to note your top-up in writing. If your own deposit does not match, ask for a written breakdown rather than assuming. _(all four points confirmed against the DIA Policy Manual, Transition Benefits, August 2026)_

**Update, October 5, 2026:** the 88 percent couple reduction mentioned in the first bullet was repealed on October 1, 2026. See the update on the couples answer above.`
      }
    ]
  },
  {
    cat: "Money — living allowance, transition benefit, rebates, clawbacks",
    items: [
      {
        q: `Does the October 1 change help single people, or couples where only one partner is on AISH or ADAP?`,
        a: `No. The order does one thing: it removes the 88 percent rate for couples where **both** partners are on AISH or ADAP, and says the difference is owed for the months it was paid.

It does not change:
- the living allowance for a single person
- how a working partner's wages are counted
- the employment income exemptions
- the Canada Disability Benefit deduction

If one of those is what is cutting your payment, this order does not touch it. Each has its own answer on this page. _(Order in Council 342/2026, filed as Alberta Regulation 244/2026, October 1, 2026)_`
      },
      {
        q: `Do I have to apply to get the couples back pay?`,
        a: `No. The regulation says the director "must pay" the difference to anyone who was paid at the 88 percent amount. It does not say you have to apply, and the money is owed whether you ask or not.

What the regulation does not give is a date. So we made a request letter you can send if you want a record: the **Request for Payment of Underpaid Living Allowance**. It is not an application. It asks three things in writing: when and how you will be paid, the month-by-month calculation, and notice before anything is deducted. Each partner sends their own, to the office that holds their file.

If you would rather wait and see, that is a fair choice. Keep your payment statements from August on either way. _(section 20(1.1) of the AISH General Regulation, added by Alberta Regulation 244/2026, October 1, 2026)_`
      },
      {
        q: `Is there other help with costs this fall, besides the energy rebate?`,
        a: `One thing, and it applies to everyone, not just people on AISH or ADAP: Alberta's fuel-tax relief started again on **October 1, 2026**. The province is suspending the full provincial fuel tax, which the government says saves families **13 cents a litre** on gasoline and diesel, through the end of the year. You do not have to apply for it — it is taken off at the pump.

Keep it separate from the $100 energy rebate, which is a one-time payment with its own deadline (see the rebate answer above). _(per the Treasury Board and Finance news release of September 30, 2026 and the government's Alberta Energy Rebate page, October 2026)_`
      },
      {
        q: `Once my Canada Disability Benefit is approved, how much does Alberta deduct?`,
        a: `We do not have a clean answer for you yet, and we would rather say that plainly than guess.

The $200 penalty you may have read about is for **not applying** or **not confirming** your application's outcome \u2014 it is not automatically what gets deducted once your CDB is approved and on file. Once it is on file, the expectation is that Alberta deducts your real CDB amount, dollar for dollar.

But we have seen statements from two different members this month that do not agree with each other. One shows a CDB deduction that matches their real federal payment. Another shows a flat $200 deducted against a confirmed CDB of a smaller amount. We do not know yet which one is the rule and which one is a mistake.

Until this is sorted out: compare your CDB deposit against the CDB line on your AISH or ADAP statement. If the deducted amount does not match your real federal payment, ask in writing why \u2014 and bring the answer to us so we can compare notes. _(the $200 non-application penalty confirmed on the government's ALSS Canada Disability Benefit and Disability Tax Credit fact sheet for AISH recipients, dated April 2026; the discrepancy is drawn from member account statements, not a government source, and is not yet resolved)_`
      },
      {
        q: `My partner and I both get AISH or ADAP — when and why does our money drop?`,
        a: `When two adults in the same home both get AISH or ADAP, each of you moves to 88 percent of the individual maximum — about 88 cents on the dollar each. It means two disabled people who live together receive less than two disabled people who live apart.

We can now give you the government's own numbers rather than our arithmetic. The policy manual prints a table: an **AISH** client with a partner on AISH or ADAP receives **$1,708**, and an **ADAP** client with a partner on AISH or ADAP receives **$1,532**. (Straight 88% of the maximums works out to $1,707.20 and $1,531.20 — the manual rounds up to the whole dollar. If your deposit shows the cents version, that is why. Either figure is close enough that a gap of more than a dollar is worth asking about.)

Good news on one point, and this is confirmed in the manual: the $200 transition top-up is **not** cut to 88% the way the base rate is. If you were moved from AISH, your amount is the couple rate **plus** the full $200.

Mark your calendar for one thing. Every one of these numbers changes on **January 1, 2027**. AISH and ADAP rates are adjusted each January 1 by the Alberta escalator — the lesser of 2% or the Alberta cost-of-living figure. So if you are reading this in 2027, check the current rate before you rely on $1,708 or $1,532.

Timing matters here so you watch the right deposit: ADAP's base rate itself began July 2, 2026, but the **88% couple reduction specifically starts the August 2026 benefit period**, and payments land 4 business days before the first of the month. So watch that late-July deposit, and if it is not what you expect, ask in writing for a breakdown of how your own amount was calculated. _(couple amounts and the top-up exception confirmed against the DIA Policy Manual, Monthly Living Allowance and Transition Benefits; annual January 1 adjustment per the DIA Policy Manual, Benefit Rate Adjustments; 88% start date per the government's ADAP page and fact sheet, September 2026)_

**Update, October 5, 2026:** everything above was the rule when we wrote it, and it has now changed. On **October 1, 2026** the government made **Order in Council 342/2026 (Alberta Regulation 244/2026)**. It **repeals section 8(4)** of the AISH General Regulation, the section that set the 88 percent rate for couples. It also adds section 20(1.1): if you were paid at the 88 percent amount, the director is treated as having decided you were **underpaid for each month** you were paid that way, and the director "must pay" the **difference between what you were paid and the full living allowance** ($1,940 for AISH, $1,740 for ADAP). By our arithmetic, not a government figure, that is about $232 a month for each partner on AISH and about $208 a month for each partner on ADAP. The lower rate began with the August 2026 payment.

**You do not have to apply.** The regulation puts the duty on the government. But the order does **not** say when the difference will be paid, how it will be paid, or whether anything can be deducted from it first. The regulation lets a director take money you owe the government out of an underpayment (section 20(2)), and that decision cannot be appealed. Whether that will be used here is not known. As of October 5, the government had announced nothing, and its ADAP page and policy manual still described the 88 percent rule.

Keep every payment statement from August on. If you would like a dated record that you asked, use the **Request for Payment of Underpaid Living Allowance** in our forms section. It quotes the regulation, asks for a month-by-month calculation, and asks for notice before anything is deducted. Each partner sends their own.

This change is only for couples where **both** partners are on AISH or ADAP. It does not change payments for single people, the rules for a partner's wages, or the Canada Disability Benefit deduction.

**If Google or an AI tool tells you the 88 percent rule still stands:** it is reading the government's online copy of the regulation, which had not been updated as of October 5. The change is in the order itself, on page 2. _(Order in Council 342/2026, filed as Alberta Regulation 244/2026 on October 1, 2026, amending AR 96/2026, read at the Alberta King's Printer, October 5, 2026; section 20(2) and its exemption from appeal per AR 96/2026 s.20(2) and AR 89/2007 s.6(i); the August start per the government's ADAP page)_
**Update, October 5, 2026:** the deadline above has moved. On September 30, 2026 the government extended it, and **applications now close October 31, 2026**. The same release says receiving the rebate "will not affect eligibility or benefit amounts under AISH, ADAP, Income Support, Alberta Seniors Benefit or federal seniors' programs" — the government's own statement, which we have not seen tested. If you were on AISH, ADAP, Income Support or the Alberta Seniors Benefit before July 1, you were enrolled automatically. If you came onto one of those programs after July 1, you have to apply yourself through the province's portal. Anyone else can apply if they were 18 or older on July 1, 2026, live in Alberta, filed a 2025 tax return, and have a household income of $225,000 or less. _(extension per the Treasury Board and Finance news release of September 30, 2026 and the Alberta Energy Rebate page, October 5, 2026)_`
      },
      {
        q: `My partner gets a pension — how much of it counts against my benefits?`,
        a: `Less than it used to, and this is one of the few recent changes that went the right way. As of July 2026, the first **$1,200 a month** of a spouse or cohabiting partner's pension income is fully exempt, and **25 percent of whatever is left** is exempt as well. Only the remainder is counted.

Pension income here means things like the Canada Disability Benefit, CPP and CPP Disability, Employment Insurance and Workers' Compensation paid to your partner — not their wages from a job.

A small piece of good news buried in the policy: that $1,200 is not frozen. The manual says it is adjusted every year in line with the core benefit adjustments, so it rises with the rates each January 1.

Wages are a separate rule, and we can now point you at it. Your partner's **employment** income has its own exemption of **$1,500 a month**, published in the government's earnings table. See the earnings question further down for the full table. _(pension exemption and its annual adjustment confirmed on the DIA Policy Manual, Pension Income, and the ADAP fact sheet; the $1,500 partner employment exemption per the ADAP page earnings table and the DIA Policy Manual, September 2026)_`
      },
      {
        q: `Do I have to apply for the Canada Disability Benefit if Alberta just takes it back?`,
        a: `Yes — apply anyway, and report the outcome. The Canada Disability Benefit (CDB) maximum is **$204.20 a month** for July 2026 through June 2027. It re-indexes every July, so the number moves.

Watch for this: Alberta's own "Apply for federal disability supports" page still says the CDB pays "up to $200 per month." That is last year's rate. If a worker quotes you $200, the federal page is the one to go by.

Alberta counts the monthly CDB as income and deducts it dollar for dollar, so for most people there is no net gain from it at all — the federal increase to $204.20 does not reach you. Keep that separate from the $200 below, which is a penalty for not applying, not the ordinary deduction.

But there is one piece of clear good news, and we have checked it in the policy itself. The federal government's **$150 supplement**, paid to help cover the cost of the DTC medical form, is **not** deducted. Alberta's rule counts CDB money except money "not paid for the purpose of offsetting a person's cost of applying for a disability tax credit" — which is precisely what the $150 is. You keep it. See the separate question below for the timing.

Applying is not optional: the AISH/ADAP rules require you and your partner to apply for the CDB and the Disability Tax Credit and to tell the program the outcome. Alberta has already reduced provincial benefits for people who did not have a CDB decision in time — clients without a CDB decision by February 28, 2026 had $200 taken off their benefits starting in April 2026. Applying and reporting is what protects you from that reduction. _(CDB maximum and the supplement per canada.ca, September 2026; the exemption for DTC-cost money per the DIA Policy Manual, Pension Income; apply-and-report requirement and the $200 reduction per the government's "Apply for federal disability supports" page)_`
      },
      {
        q: `I need to send disability tax credit papers to CRA — has that changed?`,
        a: `Yes. The old online way to upload disability tax credit (DTC) documents to CRA has changed. If you need to send DTC papers, ask CRA or your doctor's office for the current method before you file anything. To apply for the CDB you must first be approved for the DTC, which means filing your taxes and having a medical practitioner complete the medical part of the form.

Here is the part people miss. Your doctor can charge you for filling in that medical section, and **AISH and ADAP will cover that cost** for eligible clients. Bring an invoice or a written cost estimate from the medical professional to your worker; the program issues it as a supplemental benefit and you pay the practitioner. Be ready for the catch: you are required to repay the program once the federal government reimburses you for the fee. If the up-front cost is what is stopping you from applying, say so to your worker — that is the exact situation this is for.

One more, if you were turned down before: if you were denied the DTC **before 2025**, you are required to reapply, because the federal government broadened the eligibility criteria in 2025. An old "no" is not a current no. _(confirmed on the government's "Apply for federal disability supports" page, August 2026; CRA upload method not re-confirmed this month — ask CRA directly)_`
      },
      {
        q: `There is a $150 federal payment — is it real, when does it come, and will Alberta take it?`,
        a: `It is real, you do not have to apply for it, and Alberta should not deduct it. That is good news, with two cautions at the end you should read before you count the money as yours.

The federal government has added a **$150 supplement** to the Canada Disability Benefit, to help cover what a doctor charges for filling in the medical part of the Disability Tax Credit form. The rule change took legal effect on **September 1, 2026**, and the first payments went out on **September 17, 2026**.

Two things people are getting wrong about it.

**On whether it comes only once.** The government's own wording pulls both ways, so we will give you both halves rather than pick one. Its news release calls this "a one-time supplemental payment of $150." The same release, and the canada.ca payment page, also say you are eligible for $150 **for each approved Disability Tax Credit certificate** that qualifies you for the benefit — and the second payment phase expressly includes people approved for a **new** certificate. So: one payment per approved certificate, rather than one payment per person forever. We will not tell you it repeats on a schedule, because no government source says that.

**On when yours arrives.** There are two phases, and only the first has a date.

- **September 17, 2026** — if you received a Canada Disability Benefit payment at any point between July 2025 and June 2026.
- **Winter 2027** — if you became eligible for a payment any time since July 2026, or you were approved for a new Disability Tax Credit certificate. The government has named no month. If you see "February 2027" or "March 2027" circulating — including from us, in an earlier version of this answer — that date is in no government source.

Who gets it: anyone with an approved Disability Tax Credit certificate that entitles them to a monthly Canada Disability Benefit payment. That includes people whose payment is **$20 or less a month** and arrives as a single lump sum for a whole payment period. If you received a payment at any point before September 2026 you are still eligible, even if you no longer receive one. **There is nothing to apply for**, and a letter should arrive with information about the payment. One exclusion is stated plainly: the supplement is **not payable for anyone who died before September 2026**.

Now the part that matters most here. Alberta counts your monthly Canada Disability Benefit as income and deducts it dollar for dollar — but the rule has a carve-out written into it. Alberta counts that money *except* money "not paid for the purpose of offsetting a person's cost of applying for a disability tax credit." That is precisely what this $150 is. So it should not be deducted, and it should not reduce your AISH or ADAP.

As always: check your statement. If $150 shows up as income against you, that looks wrong to us — ask in writing for a breakdown and point at the pension income policy. Bring it here and we will help you word it.

Two cautions before you count it as yours.

**First**, if AISH covered the cost of your Disability Tax Credit medical assessment, the government says that money is issued to you to pay the doctor, and that you will be required to repay the full amount once the federal government reimburses you. That makes it an advance, not a grant. What nobody has yet answered is whether the federal $150 then goes to repaying Alberta or stays with you. We are asking. In the meantime, if you are offered help with an assessment fee, ask in writing whether it is repayable and how, and keep the answer. Keep this separate from the covered medical report for a reassessment, which is a different thing and is not described as repayable.

**Second**, Alberta's own "Apply for federal disability supports" page has not caught up. It still calls the $150 an announced *intention* to pay "by March 2027," and it still says the benefit pays "up to $200 per month." Both lines were written before the September rules took effect, and both are wrong now. If a worker reads either one off a screen, the federal pages are the ones to go by. _(the supplement, its September 1, 2026 legal effect, the per-certificate rule, the $20-or-less lump sum, the death exclusion and the no-application rule per canada.ca, About the Canada Disability Benefit program and How much you could receive; the September 17, 2026 date and the two payment phases per the federal news release of September 10, 2026 and the Service Canada benefits payment dates calendar; the exemption from Alberta's deduction per the DIA Policy Manual, Pension Income; Alberta's two stale figures read on the "Apply for federal disability supports" page — all confirmed September 2026)_

**Update, October 5, 2026:** we have now read the rule itself, so we can say it plainly rather than "should not." Section 1(1)(e)(i) of Schedule 1 to the AISH General Regulation counts a Canada Disability Benefit only if it is "not paid for the purpose of offsetting a person's cost of applying for a disability tax credit." The $150 is exactly that, so it is **not counted as income** on AISH or ADAP. If it shows up as income on your statement, ask in writing why. _(AR 96/2026, Schedule 1, section 1(1)(e)(i), read at the Alberta King's Printer)_`
      },
      {
        q: `I heard my child benefits will start counting toward my rent — is that true?`,
        a: `Yes, and we have now read the instrument rather than the reporting, so we can tell you exactly what it does.

The rule is **Alberta Regulation 180/2026**, the Social Housing Accommodation Amendment Regulation, made by **Ministerial Order 2026-018** on June 29, filed July 9, published in the Gazette on July 31, 2026, and in force **January 1, 2027**.

What it does is wider than the announcement suggested. It lets the Minister count any income **not included in line 15000 of your Notice of Assessment** — the total income line — when your rent is worked out. Child benefits are not reported on line 15000. That phrase reaches exactly the money that does not appear on a tax return, and it has no other obvious purpose.

Notice what it does **not** do. It names no benefit at all. So the decision to count a specific one does not have to be filed, published or indexed anywhere, and there is no second rule to watch for. Once this is in force, the counting can begin with nothing further made public.

The practical effect: rent in social housing is 30 percent of household income, so as a rough guide about **$30 a month more rent for every $100 counted**. The announced dates are January 1, 2027 for the Rent Assistance Benefit and January 1, 2028 for all community housing.

Two other things came in the same regulation, on the same date. Government-sponsored refugees and people with a pending refugee or immigration claim are no longer named as an eligible group for community housing. And a minimum rent floor was set, so basic rent cannot go below a prescribed minimum, which limits reductions some seniors previously received.

Nothing changes on your rent today, and none of this reaches you until your own annual review. What you can do now: if you are in community housing or on the Rent Assistance Benefit and you get child benefits, ask your housing provider **in writing** what your rent will be on January 1, 2027 and on what basis, and keep the answer. The first sign that child benefits are being counted will not be a new law. It will be a rent notice. _(AR 180/2026 made by Ministerial Order 2026-018, amending AR 244/1994; The Alberta Gazette, Part II, July 31, 2026; verified against the King's Printer, August 2026)_`
      }
    ]
  },
  {
    cat: "Getting back to AISH — reassessment and the medical report",
    items: [
      {
        q: `I was moved to ADAP but I cannot work — how do I get back to AISH?`,
        a: `The way back is a reassessment. It is not automatic — you have to ask. The government now says plainly that it covers the cost of **one** medical assessment for people who were moved to ADAP and later choose to be assessed for AISH, and that this support **is not time-limited** — it is there whenever you decide to use it.

Ask for it in writing anyway, and keep the answer. Not because we doubt the policy, but because a written record of what you were promised is what protects you if a worker tells you something different later. If your condition means you cannot work at all, this is the path, and you do not have to do it alone. _(one covered medical assessment and the "not time-limited" wording confirmed on the government's ADAP page, ADAP fact sheet and ADAP appeal page, September 2026)_`
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

We have now read both regulations side by side, word for word. Section 15(4) is the provision that lets a director cut an ADAP benefit if they believe you refused, reduced or ended reasonable employment, or would not take part in an employment support. The exempt list has eleven items. Exactly one of them is a decision to refuse, suspend, vary or discontinue a benefit — and it is a cut under section 15(1)(b)(i), for failing to claim or assign a federal benefit like CPP or Old Age Security. Section 15(4) is not on the list anywhere.

If anyone tells you otherwise, ask them in writing which instrument makes it non-appealable. _(read from the Applications and Appeals (Ministerial) Regulation, AR 89/2007, section 6, as amended by AR 87/2026 — consolidated text current as of July 2, 2026, Alberta King's Printer; section 15(4) read from the Assured Income for the Severely Handicapped General Regulation, AR 96/2026)_`
      },
      {
        q: `What cannot be appealed?`,
        a: `We can now answer this properly, because we have read the current exempt list in the regulation rather than a four-year-old copy of it.

Two big ones are barred outright:

- **The move from AISH to ADAP itself.** It happened automatically, so there was never a decision to appeal.
- **The AISH Medical Review Panel's finding that you are not medically eligible for AISH.** That one is final.

The regulation also shuts out nine narrower things, mostly about money already paid: whether to let you off repaying a benefit, how a debt gets collected, a demand to repay a personal benefit, deducting a debt out of your benefit, spreading your income over a different period, a finding that you refused a transfer out of hospital, two specific exemption decisions, and the decision **to grant** a personal benefit.

Here is a distinction worth holding onto, because it is where people get talked out of appealing. Two different things can put a decision out of reach, and they are not the same. Some decisions are on the regulation's exempt list. Others are simply not the Director's to make — they belong to the Minister, and an appeal panel cannot touch a Minister's decision at all. There is a third limit too: a panel has no power to rule on whether a decision is constitutional. So "you cannot appeal that" can mean three quite different things, and only one of them is the exempt list.

That is why the question to ask is always the same. If you are told a decision cannot be appealed, do not take it as final: ask, in writing, **which instrument makes this decision exempt from appeal**. Get the answer in writing. A great deal is **not** barred — including the employment-related cut under section 15(4). And whatever else you do, file within **30 days**. Bring it to this community and we will help you word it. _(exempt list read from the Applications and Appeals (Ministerial) Regulation, AR 89/2007, section 6, as amended by AR 87/2026 — consolidated text current as of July 2, 2026, Alberta King's Printer; the three limits on the panel's reach per the DIA Policy Manual, Limits to the Appeal Panel's Authority; transition and medical-panel bars also confirmed on the government's ADAP appeal page, September 2026)_`
      },
      {
        q: `I have new medical evidence — should I send it in or file my appeal first?`,
        a: `Send it in first. This is the trap in the whole appeal system, and almost nobody is told about it.

The moment your Notice of Appeal is filed, two doors shut at once. The program stops considering new information about the decision you are appealing. And the appeal panel is barred by the regulation from looking at **anything** the program did not already have when it made the decision. So if your fresh report from your specialist arrives after you file, the panel is not allowed to read it — no matter how much it would have changed the outcome.

So the order matters:

- **First**, give the program every piece of new information you have — the new report, the changed diagnosis, the corrected financial detail. Tell them in writing if something is coming and you are still waiting on it.
- **Then**, if the answer is still wrong, file your appeal.

If you have already filed and then something new comes in, you are not stuck — but you may have to **withdraw** the appeal so the program can look at the new material and make a fresh decision. Contact the Appeals Secretariat right away if that is your situation, and ask them in writing what withdrawing does to your timeline before you do it.

Here is the clock nobody mentions, and it is the one that can close your file. If you were denied, you have **12 months from the date you were notified of that decision** to give the program additional information supporting your application or showing your situation has changed. After 12 months, sending more information is no longer enough — you have to submit a whole new Disability Income Assistance application and begin again. And the policy says plainly that this same 12-month limit applies to you if you **withdrew your appeal** so the program could review new material. Withdrawing is a real option and often the right one, but it does not stop that clock. Work out what date you are counting from before you choose.

And if the 30 days is the thing standing in your way: you can ask for more time. Put the reason on the Notice of Appeal form — it is form AAS13358 — or write to the Appeals Secretariat, saying when you got the decision, when you learned about the 30 days, and why you could not file in time. It is decided by the Minister's delegate at the Appeals Secretariat and you get the answer in writing. Do not treat it as a reason to relax — ask early, and file as soon as you can. Bring it here and we will help you word either one. _(the bar on new information from the Applications and Appeals (Ministerial) Regulation, AR 89/2007, section 5(1.1), current to July 2, 2026 — carried forward from an earlier review, not re-opened this run; the 12-month limit and its application to withdrawn appeals from the DIA Policy Manual, Limits to the Appeal Panel's Authority; the withdraw route, the AAS13358 form and the time extension from the government's ADAP appeal page and the DIA Policy Manual, Appealing a Decision, September 2026)_`
      }
    ]
  },
  {
    cat: "Your rights — accommodations and communication",
    items: [
      {
        q: `My payment was put on hold and nobody told me why. What do I do?`,
        a: `Put it in writing the same day. Email the office that holds your file and ask three things: why the payment is on hold, exactly what they need from you, and the date it will be released. An email is a record. A phone call is not.

If they say a report or document is missing and you already sent it, forward your original email so the date and the attachments show, and say so plainly.

If the hold means you cannot cover rent, food or medication, say that in the email in plain words, and call the Income Support Contact Centre.

Keep a list: the date of each hold, who you dealt with, and what they said caused it. If it happens more than once, that list is what turns a mistake into a pattern. Your MLA's constituency office can also send a request straight to the ministry, whichever party they belong to.

If a payment arrives late or short, you are still owed the full amount. The regulation says that where a director determines a client was underpaid, the director must pay it. _(AR 96/2026, section 20(1))_`
      },
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
        q: `I heard a new rule on October 1 means my health coverage has to be billed somewhere else first \u2014 does that affect my AISH or ADAP health benefits?`,
        a: `No \u2014 good news, though we want to be upfront that we are relying on industry reporting for this one, not the law itself.

Starting **October 1, 2026**, a change means two *other* government health programs \u2014 Coverage for Seniors, and Non-Group Coverage \u2014 become the "payer of last resort" behind a private plan (an employer's, a spouse's, or a personal one). If you have one of those two programs and separately have private coverage, the private plan gets billed first.

**AISH and ADAP health benefits are not one of the two named programs.** As far as we can find, this change does not touch your AISH or ADAP health coverage at all.

One caution: we have not read the actual legislation for this \u2014 everything above comes from insurance-industry summaries, not a government page we opened ourselves. If you are on AISH or ADAP and get a bill you weren't expecting after October 1, ask your worker in writing whether this rule applies to you, and bring the answer to us. _(reported by Alberta Blue Cross and insurance-industry sources; not independently confirmed against the Health Statutes Amendment Act, 2025 (No. 2) or its regulations)_

**Update, October 5, 2026:** the October 1, 2026 date above has now passed, so the change is meant to be in effect. Nothing we have found says it reaches AISH or ADAP health benefits, but we still have not read the legislation itself. If you have received a bill you were not expecting since October 1, ask your worker in writing whether this rule applies to you.`
      },
      {
        q: `If I am on ADAP, do I still get medical equipment cost-free through AADL?`,
        a: `This one moved, and it moved the right way — but AISH and ADAP are not in the same position, and the difference is worth knowing before a big equipment bill lands.

Alberta Aids to Daily Living (AADL) has clients pay a 25% cost-share, up to $500 per family per benefit year (July 1 to June 30). Respiratory benefits carry no cost-share at all.

**If you are on AISH**, the government's own AISH page now says it without hedging: you do not have to pay the cost-share amount for AADL-approved items.

**If you are on ADAP**, ADAP is now named on the AADL cost-sharing page, in both places it should be — that is the change, and it is a real one. But read the wording, because it is not the same promise. The page says clients on these programs "may contact AADL directly to determine eligibility for cost-share exemption." That is a door, not an automatic exemption, and there is no flat statement anywhere that ADAP clients do not pay. Contact AADL and get your status confirmed **in writing** before you commit to an item.

The exempt-programs list has also grown, from three programs to five. It now names Income Support, AISH, ADAP, the **Alberta Adult Health Benefit** and Children and Family Services (for minors in foster care). The Alberta Adult Health Benefit is worth noticing: it is where AISH clients land if their earnings take them off the program, so this door does not close the moment your monthly benefit does.

If that route does not work for you, there are others. You may qualify on income alone — taxable income (line 26000 of your most recent return) of $20,970 or less for a single person, $33,240 for a family with no children, or $39,250 for a family with children. There is a temporary exemption if your finances have just changed or you have extraordinary disability-related expenses. And if you are refused and paying would cause you hardship, you can appeal your cost-share status with AADL's own notice of appeal form.

Three situations close the door on a cost-share exemption altogether, and they are easy to miss. You cannot apply if you are a new or returning resident from outside Canada who has not yet lived in Alberta for 12 consecutive months, if you are exempt from paying income tax for religious, charitable or communal reasons, or if you are a foreign student temporarily residing in Canada. _(the cost-share, the five named programs, the income thresholds, the temporary exemption, the notice of appeal form and the three exclusions confirmed on the government's AADL cost-sharing page; the flat AISH statement confirmed on the government's "What you get with AISH" page — both read September 2026)_`
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

One hard rule underneath all of this: **report every pay on time**. The policy manual is blunt — if income has not been reported in a timely manner, or has been **willfully** misrepresented, "these exemptions are not applied." Not reduced. Not applied. That is the single most expensive mistake available to you, and it is entirely avoidable. Note the word *willfully*: a plain mistake you own and correct is not the same thing as hiding income, so if you got something wrong, tell them and fix it rather than saying nothing.

A note on how partners are counted: if you and your partner are both on AISH or ADAP, your income is assessed separately on each file and you do not report each other's earnings. If your partner is not on the program, you each get your own fully exempt amount, they cannot be shared, and whatever is left over from both of you is added together for the partial exemption. _(AISH $350, ADAP $700, ADAP parent $1,100 and cohabiting partner $1,500 per the government's ADAP page earnings table and the ADAP fact sheet; reporting rule and partner treatment per the DIA Policy Manual, Employment and Self-Employment Income, September 2026. These are published government policy — the ministerial order that sets them has still not been published, and the figures are subject to the annual January 1 adjustment)_

_(Update, October 5, 2026: the regulation says these amounts rise automatically whenever the minimum wage rises, rounded up to the next dollar — AR 96/2026, Schedule 1, section 4(3) — rather than on a fixed January 1 date.)_`
      },
      {
        q: `Can they cut my ADAP benefit if my health forces me to reduce my work hours?`,
        a: `If your benefit is cut because your health affects your work, that kind of cut — the employment one under section 15(4) — is appealable, so you do not have to accept it without a fight. File in writing within 30 days.

Read the wording, because it matters to you specifically. The provision reaches someone who "refused to seek or accept or has reduced or terminated" their reasonable employment. Cutting your hours is named in there. But it turns on what the director *thinks* you did — and a reduction forced on you by your health is not a refusal. That is the argument, and it is a good one.

Better still, get ahead of it. Put your limits in writing before anything happens and request accommodation, so the barrier is on record before any cut is made. The policy manual is on your side here: it says the program should first work with you to identify and address barriers, and that supportive approaches come before compliance measures. Quote that back at them. Bring it to this community and we will help you word it. _(section 15(4) read from the Assured Income for the Severely Handicapped General Regulation, AR 96/2026; appealability from the Applications and Appeals (Ministerial) Regulation, AR 89/2007, section 6, as amended by AR 87/2026, current to July 2, 2026; barriers-first language from the DIA Policy Manual, Employment Supports — carried forward from an earlier review, not re-confirmed this run)_`
      },
      {
        q: `If I earn too much and lose my benefits, do I lose my health coverage too?`,
        a: `No — and this is worth knowing before you turn down a shift out of fear.

If your earnings rise to the point where you no longer qualify for the monthly living allowance, your health coverage does not simply stop. The policy manual sets out where you land:

- If you were on **AISH** and your employment, self-employment or CPP-Disability income takes you off the program, you are enrolled in the **Alberta Adult Health Benefit** and keep the same coverage you had. That benefit year runs October 1 to September 30 and is renewed annually — so keep an eye on the renewal.
- If you were on **ADAP** and your earnings take you off, you may receive **Enduring Health Benefits**.
- The ADAP page also says plainly that Albertans on ADAP keep their health benefits regardless of employment income.

There is a second safety net underneath that one. If your earnings later drop back down, AISH and ADAP can be **reinstated within two years** without starting from scratch. The manual calls this rapid reinstatement.

One caution, because it is not all good news. The manual also says an AISH client whose employment income causes a significant and prolonged reduction in their AISH benefit **may be moved to ADAP**. So earning more can change which program you are on, not only how much you receive. If a job is likely to push you near that line, ask in writing what it does to your program before you commit — and get the answer in writing. _(AAHB, Enduring Health Benefits, rapid reinstatement and the move-to-ADAP caution per the DIA Policy Manual, Employment and Self-Employment Income and Pension Income; the health-benefits-regardless-of-income statement per the government's ADAP page, September 2026)_`
      }
    ]
  },
  {
    cat: "Spotting misinformation",
    items: [
      {
        q: `Google or an AI tool told me the 88 percent couples rule is still in place. Who is right?`,
        a: `The order is. Search engines and AI tools summarize what has already been published online, and as of October 5, 2026 almost nothing online had caught up. The government's online copy of the regulation still showed the old text and was marked "Current as of May 12, 2026." The government's policy manual and ADAP page still described the 88 percent rule. There had been no news release.

The change can be read in one place: Order in Council 342/2026 on the Alberta King's Printer site. It is two pages. On page 2, look for "by repealing subsection (4)" and "the director must pay."

A good rule for any of this: when a summary and the document disagree, go with the document. That goes for our summaries too, which is why we name the source every time. _(Order in Council 342/2026, Alberta King's Printer; King's Printer consolidation of AR 96/2026 as shown October 5, 2026)_`
      },
      {
        q: `I saw an official-looking post with AISH/ADAP numbers — can I trust it?`,
        a: `Be careful. Some of what is circulating out there, including some very official-sounding posts, is AI-generated and mixes real facts with invented numbers. If a number matters to your life, get it from the source document, or ask here. Our whole strength is that everything we put out traces back to a real regulation.`
      }
    ]
  },
  {
    cat: "Getting into FSCD",
    stream: "Children / FSCD",
    items: [
      {
        q: `Do I need a diagnosis before I apply to FSCD?`,
        a: `**No.** This is the single most missed line in the whole manual, and waiting for a diagnosis costs families months they do not get back.

The manual says medical documentation must confirm the child **"has a disability or is awaiting a diagnosis."** If your child is on an assessment waitlist, you can apply now. The two waits then run at the same time instead of back to back.

If your child is waiting on a diagnosis, what you send is information about the provisional diagnosis, condition or impairment that indicates the child may have a disability. That is the whole bar. _(confirmed against the FSCD policy manual, section 4.1, archived copy of 16 September 2026)_`
      },
      {
        q: `I applied and then heard nothing. Is there a deadline on me?`,
        a: `Yes, and it is the one that quietly closes files.

**If your supporting documents do not arrive within 90 calendar days of your application, the file is closed.** And if you send documents without an application attached, they are destroyed after 90 days — not held, not matched up later. Destroyed.

So put a date in your phone for 80 days after you apply. If anything is still outstanding, chase it in writing before the clock runs out. _(confirmed against the FSCD policy manual, section 6.1, archived 16 September 2026 — the manual's own words are "the file will be closed" and "will be destroyed after 90 calendar days")_`
      },
      {
        q: `My file was closed. Do I have to start all over again?`,
        a: `Probably not, and this saves people a great deal of work.

**If your file has been closed for less than 180 days, you do not need to submit a new application.** You contact the FSCD caseworker named in your decision letter and ask to have it reopened.

Past 180 days it is a fresh application. So if you are somewhere in that window, do not wait — the difference between day 179 and day 181 is an entire application. _(confirmed against the FSCD policy manual, sections 6.1 and 6.14, archived 16 September 2026)_`
      },
      {
        q: `Will FSCD pay for the assessment or the doctor's letter it is asking me for?`,
        a: `No, and the manual is blunt about it: **"The FSCD program is not responsible for costs associated with obtaining medical letters or assessment reports."** The same goes for clinical and medical assessments.

Before you pay for anything new, go through the paperwork you already have. A specialist letter, a discharge summary, an existing assessment — if it names the condition, who diagnosed it and when, it may already do the job.

Worth knowing alongside this: parents are also responsible for the costs of psychological testing under the counselling benefit. _(all three confirmed against the FSCD policy manual, sections 4.1 and 7.2, archived 16 September 2026)_`
      }
    ]
  },
  {
    cat: "While you are waiting",
    stream: "Children / FSCD",
    items: [
      {
        q: `How long is the wait, really?`,
        a: `Longer than anyone tells you at the start. From the largest survey done on this — **746 families across 81 of Alberta's 87 electoral districts**, October and November 2024:

- The **eligibility decision alone** averaged 7 and a half months
- **Total wait to full services**: roughly 21 months

And the part that is not a waiting problem at all: **79% of families who had Family Support Services and needed Child-Focused Services were never told how to access it.** Seventy-three per cent never received an explanation of it. That is not a queue. That is a door nobody mentioned.

If you have an FSS agreement and nobody has ever explained Child-Focused Services to you, ask about it by name. _(confirmed against Inclusion Alberta, "Too Little, Too Late," January 2025 — sample at p. 2, staged waits at pp. 6–7, the 79% at p. 2 and the 73% at p. 10)_`
      },
      {
        q: `Is there anything my child can get right now, while we wait?`,
        a: `Yes, and you do not need FSCD or a diagnosis for it.

**Pediatric Community Rehabilitation** gives occupational therapy, physiotherapy, speech language pathology, social work and dietitian services, and **you can book without a doctor's referral** — AHS's own words are "Patients may call a clinic directly to book an appointment without a doctor referral."

Two things to know before you call, because they get left out when this gets passed around. It runs **0 to 18**, but from 6 to 18 there is an added requirement of a significant change in your child's condition, injury, surgery or illness — so it is not open-ended for older kids. And **it is not entirely free**: AHS says "You may have to pay other fees for materials or supplies used for treatment."

Also worth starting now, because it takes a while and unlocks other things: the **Disability Tax Credit**, which opens the Child Disability Benefit and the RDSP. _(the referral wording, age range and fees confirmed against the AHS Pediatric Community Rehabilitation service page, read 28 September 2026)_`
      },
      {
        q: `Do I have to apply to other programs before FSCD will fund something?`,
        a: `Yes — and this catches people, because the requirement is stricter than it sounds.

Before FSCD funds something another program might cover, you have to show the other support was **fully used** or **formally denied** — and that you went through that program's own appeal or review process first. A denial letter on its own is not always enough if you did not appeal it.

So the practical habit is: apply everywhere, keep every denial letter, and appeal the denials even when you expect to lose. Those letters are what unlock FSCD. _(confirmed against the FSCD policy manual, section 5.3, and the FSCD Regulation AR 140/2004 s.6(2))_`
      }
    ]
  },
  {
    cat: "What FSCD pays for",
    stream: "Children / FSCD",
    items: [
      {
        q: `How much respite can I get?`,
        a: `Up to **240 hours a year** under family support respite, described in the manual as "based on, but not limited to 20 hours a month."

Here is the part most people never hear: **240 is not the ceiling on everything.** If your child has an individually assessed need beyond that, child-focused respite can be provided **over and above** the 240. The manual says so directly. So if you have been told 240 is the maximum, full stop, that is only true of the first kind.

What FSCD does not do is find you the person. It funds the hours; the search is yours. _(both halves confirmed against the FSCD policy manual, sections 7.5 and 8.2, archived 16 September 2026)_`
      },
      {
        q: `Can I be paid to look after my own child?`,
        a: `No. A parent or guardian cannot be paid to provide FSCD services to their own child. Extended family can be, in some circumstances.

This is one of the most common and most painful misunderstandings in these groups, and it is worth saying gently when it comes up, because people hear it as an accusation rather than a rule. _(confirmed against the FSCD Regulation AR 140/2004 s.2.1)_`
      },
      {
        q: `Can FSCD fund a tutor, or an aide to help with schoolwork?`,
        a: `Not through aide supports. The manual rules it out by name: **"Aide supports are not intended for the purpose of tutoring, academic support, assistance in a school program or lunchtime supervision at school."**

That is an express exclusion, not an oversight. Reading and literacy support for a coded student is the school authority's job through the IPP — so before you pay privately, ask the school two questions: what does the IPP say for literacy, and what funding does my child's code generate for this school. _(confirmed against the FSCD policy manual, aide supports section, archived 16 September 2026)_`
      },
      {
        q: `What does FSCD pay per hour for a therapist or a respite worker?`,
        a: `Nobody in the group can tell you, and it turns out that is not because nobody has looked.

**The rate is not published.** It is not in the policy manual. And it is not in the internal operational procedures either — those leave it as a literal blank for the caseworker to fill in. The respite clause reads *"not to exceed $ (rate) per"*. The travel clause reads *"a rate of $ (rate per hour)"*. Across all 176 pages there are **549 fill-in placeholders and 13 dollar figures in total**, six of which are fines for privacy offences.

So when a provider quotes you a price and says FSCD covers it to here and you pay the rest, **there is no published figure you can check that against.** What you can do is ask the provider in writing, before the first session, whether they bill FSCD directly at the FSCD rate and whether any balance comes to you. Get it in writing, keep it, and bring it to the group — comparing several families' answers is currently the only way anyone can see the rate at all. _(confirmed against the FSCD Internal Operational Procedures targeted extract of 27 January 2025 and the full policy manual text; the manual was searched for rate schedule, maximum rate, approved rate and cost difference, with no hits)_`
      }
    ]
  },
  {
    cat: "When FSCD says no",
    stream: "Children / FSCD",
    items: [
      {
        q: `They said no. What are my options?`,
        a: `Three, and they are not the same thing:

- **Concern resolution** — talk to the caseworker and their manager. Informal, no form, no clock.
- **Review of an FSCD program decision** — internal, by managers who were not involved. **30 calendar days** to request.
- **Appeal** — an arm's-length committee appointed by the Minister. **45 calendar days** to file.

You can use all three. Read the next answer before you choose an order, because the order matters more than anything else on this page. _(confirmed against the FSCD policy manual, sections 10.1, 10.2 and 10.4, archived 16 September 2026)_`
      },
      {
        q: `If I ask for a review first, does that pause my 45 days to appeal?`,
        a: `**No. It does not.** Read that twice, because this is where people lose their appeal without ever being told they had one.

The manual says it outright: *"The 45 calendar day time limit for submission of a notice of appeal is not suspended when a parent or guardian requests a review of an FSCD program decision."*

So people request a review, wait politely for an answer, and discover the appeal window shut while they were waiting.

**File the notice of appeal first. Then ask for the review.** You can always withdraw the appeal if the review fixes it. You cannot reopen a window that has closed. _(confirmed against the FSCD policy manual, section 10.2, archived 16 September 2026)_`
      },
      {
        q: `Do my services stop while I appeal?`,
        a: `No. *"Other agreed upon FSCD services will continue to be provided while a parent or guardian is appealing a decision."*

And one more thing worth using: you have **a right to have an advocate or other support person present at the hearing.** Bring someone. Nobody should do this alone, and nobody has to. _(confirmed against the FSCD policy manual, section 10.4, archived 16 September 2026)_`
      },
      {
        q: `What if the problem is the process itself, not the decision?`,
        a: `The manual names two routes: a lawyer, for legal remedies — or the **Office of the Alberta Ombudsman**, which looks at whether a public body treated you fairly in how it decided, rather than at whether the decision was right.

The Ombudsman is free. _(confirmed against the FSCD policy manual, section 10.4, archived 16 September 2026)_`
      }
    ]
  },
  {
    cat: "School — coding, funding and what the school owes your child",
    stream: "Children / FSCD",
    items: [
      {
        q: `What is PUF, and how long does my child get it?`,
        a: `Program Unit Funding is early childhood funding for children with a severe disability or severe language delay.

**A maximum of three years, and the kindergarten year counts as one of them.** To get the full three, a child has to enter ECS at a minimum age of 2 years 8 months and be under 6.

Be careful with a figure that circulates: that public boards give two years and private schools give three. **The funding manual says three for both.** The two-year experience is real for many families, but it comes from when boards choose to open a placement, not from a rule. If a public board tells you that you only get two years of PUF, the funding manual does not say that. _(confirmed against the Funding Manual for School Authorities 2026/27, sections C2.7.1 and D2.4.1)_`
      },
      {
        q: `What is my child's code worth to the school?`,
        a: `For 2026/27, per student:

- Mild or moderate disability: **$12,975.71**
- Severe disability, base: **$8,403.28**
- Severe disabilities funding, on approval: **$19,979.34** on top

So a severe-coded student carries roughly **$28,382** in public money into that building.

Two caveats, said plainly. This money goes to the **authority**, not to your child — it is not an account with their name on it, and no school is obliged to spend that exact sum on that exact child. And knowing the number does not by itself get you an aide. What it does is change the conversation when a school says there is no money: there is a number, it is published, and you can say it out loud. _(confirmed against the Funding Manual for School Authorities 2026/27, rate tables, local copy in the archive)_`
      },
      {
        q: `If I move my child to home education or online schooling, does the disability funding follow them?`,
        a: `No, and this is the one that surprises people most.

Severe disabilities funding is **excluded** for home education and online students. Home education and shared responsibility students are also excluded from the enrolment count that drives the main grants.

This does not touch your FSCD at all — FSCD runs off your child's disability and your family's needs, not off where they are schooled. But the school-side money is a different pot, and it does not travel with the child when you take them out. Decide with that in front of you rather than after. _(confirmed against the Funding Manual for School Authorities 2026/27, sections C2.1 and D2.3)_`
      },
      {
        q: `The school says there is no money for an aide. Is that true?`,
        a: `We cannot tell you what is in any one school's budget, and we are not going to pretend otherwise.

What we can tell you is what the province puts in. See the coding answer above: a severe-coded student generates roughly $28,382, and the rates are published in a document anyone can download. The funding is not tagged to your child, so a school is not breaking a rule by spending it across a group of students.

What is worth asking for, in writing: what does my child's IPP say they need, what is in place today, and what is the gap. An IPP that names a support the child is not receiving is a far more useful document than any funding figure. _(funding rates confirmed against the Funding Manual for School Authorities 2026/27; no claim is made here about any individual school's budget)_`
      }
    ]
  },
  {
    cat: "Home educating a child with a disability",
    stream: "Children / FSCD",
    items: [
      {
        q: `Does home educating my child affect my FSCD?`,
        a: `No. FSCD eligibility runs off your child's disability and your family's assessed needs. Nothing in the FSCD Act or Regulation ties a benefit to school enrolment.

The school funding question is a separate one and the answer there is different — see the schooling answer above. _(the FSCD Act and AR 140/2004 were searched for any enrolment condition; none found)_`
      },
      {
        q: `Do I have to teach the whole Alberta curriculum?`,
        a: `No. The regulation says a parent **may** follow the Alberta Programs of Study — may, not must.

If you do not follow them, your program answers to **twenty lettered outcomes** instead, set out in a Schedule to the regulation and running from (a) through to (t), the last being that the student "have the desire and realize the need for lifelong learning." Twenty outcomes. That is the entire alternative.

One caution on a number you will hear in the group: people compare this to "1,400 outcomes" in the Programs of Study. That figure is an estimate used as a comparison — it is not a requirement and it is not language the regulation uses, so do not quote it as though it were. _(confirmed against AR 89/2019, section 3 and the Schedule)_`
      },
      {
        q: `Can my home education board help with a psycho-educational assessment?`,
        a: `There is a duty you can point at, and at least one family in these groups has already used it.

AR 89/2019 requires an associate board to **"advise parents… of the services and resources of the associate board or associate independent school that are available for use by the parents and students."**

That is an opening to ask what they have — it is not an entitlement, and boards differ enormously. Ask in writing, name the section, and ask what is available rather than whether they will pay. _(confirmed against AR 89/2019 s.5(d); amendment trail AR 89/2019 s5;145/2020;136/2025)_`
      }
    ]
  },
  {
    cat: "Turning 18 — the cliff",
    stream: "Children / FSCD",
    items: [
      {
        q: `When is transition planning supposed to start?`,
        a: `**At 16, for every youth — not on request.**

At 16 the Transition to Adulthood Plan replaces the Individualized Family Support Plan and is kept on the file. FSCD leads it, but it is meant to pull in adult programs, Education, Health and others so that supports are in place **when the youth turns 18**, not started then.

If your child is 16 and nobody has raised transition planning, ask for it by name. It is the expectation, not a favour. _(confirmed against the FSCD policy manual, sections 8.1 and 9.1, and the Essential Program Standards)_`
      },
      {
        q: `What happens when my child turns 18?`,
        a: `The FSCD file ends. In Alberta, 18 is legal adulthood, and the children's system stops there.

What comes next is the adult system — AISH or ADAP for income, PDD for disability services, and the guardianship and trusteeship questions if your child will need decisions made with or for them. **Those are covered in the AISH and ADAP sections of this FAQ**, and they are a different world with different rules, different appeal clocks and different money.

The single most useful thing you can do is start at 16 rather than 17 and a half. Adult programs have their own waits, and they do not begin the day the FSCD file closes. _(FSCD's end at 18 confirmed against the policy manual; the adult programs are covered elsewhere in this FAQ)_`
      }
    ]
  },
  {
    cat: "Spotting misinformation — the kids' side",
    stream: "Children / FSCD",
    items: [
      {
        q: `I saw a wait-time figure going around. Can I trust it?`,
        a: `Check where it came from before you repeat it, because a wrong number is the fastest way to lose an argument you should win.

Here is a live example. A well-run campaign site states that families in 2019 typically waited months and that many now wait **over four years**. The report that same page cites gives approximately **21 months** to full services, and its media release says "up to three years." Four years is longer than either, and no source is given for it.

We are not saying the four years is invented — it may come from a later source, or from what families are living through now. We are saying it is **not supported by the document sitting on the same page**, so it can be knocked down.

Use the staged numbers instead: 7 and a half months to an eligibility decision, roughly 21 months to full services, from a named survey of 746 families with page numbers attached. Those cannot be argued with. _(the discrepancy confirmed by comparing the campaign page against Inclusion Alberta's "Too Little, Too Late," January 2025, p. 7, and its media release of 20 January 2025)_`
      }
    ]
  }
];
