/* ─────────────────────────────────────────────
   The Alberta Disability System Breakdown
   Site logic: render manifests, filter, nav
   ───────────────────────────────────────────── */

// ─── Data: Reports (ADSB Report Series, individual) ───
const REPORTS = [
  { num: "01", title: "Do You Know Your Minister Nixon?", desc: "Public-record profile of the minister responsible for the AISH-to-ADAP transition.", file: "1_Do_You_Know_Your_Minister_Nixon.pdf" },
  { num: "02", title: "Do You Know Your Premier Smith?", desc: "Public-record profile of the premier whose government is implementing the transition.", file: "2_Do_You_Know_Your_Premier_Smith.pdf" },
  { num: "03", title: "Financial Reality Report", desc: "What AISH actually pays. What ADAP says it will pay. The arithmetic, the poverty line, the gap.", file: "3_Financial_Reality_Report.pdf" },
  { num: "04", title: "Health Benefits Erosion Report", desc: "What AHCIP and AISH benefits actually cover — and don't. Mental health, therapy, and the wait-time problem.", file: "4_Health_Benefits_Erosion_Report.pdf" },
  { num: "05", title: "Alberta Housing Crisis Report", desc: "What rent costs, what AISH/ADAP pays, and what happens when those numbers can't meet.", file: "5_Alberta_Housing_Crisis_Report.pdf" },
  { num: "05b", title: "Payment Instability Report", desc: "What happens when a single missed deposit cascades through rent, utilities, food, and prescriptions.", file: "5b_Payment_Instability_Report.pdf" },
  { num: "06", title: "Access Barrier Report", desc: "Every step a recipient takes to access AISH — paperwork, phone trees, identification, transportation, literacy — adds another barrier.", file: "6_Access_Barrier_Report.pdf" },
  { num: "07", title: "Caseworker, Appeal Rights & Human Rights", desc: "What Bill 12 changed. What's left of the appeal process. What the Alberta Human Rights Commission can still do.", file: "7_Caseworker_Appeal_Rights_HumanRights.pdf" },
  { num: "07b", title: "Appeal Overturn Report", desc: "Documented cases of caseworker decisions being overturned on appeal — and what removing that mechanism means.", file: "7b_Appeal_Overturn_Report.pdf" },
  { num: "07c", title: "Charter Mobility Rights Report", desc: "Section 6 of the Charter and what it means when a province's disability income is non-portable.", file: "7c_Charter_Mobility_Rights_Report.pdf" },
  { num: "08", title: "Healthcare Worker Shortage Report", desc: "650,000 Albertans without a family doctor — including most AISH recipients. What that compounds.", file: "8_Healthcare_Worker_Shortage_Report.pdf" },
  { num: "09", title: "ADSB Employment Reality Report", desc: "What ADAP's 'employment first' framing assumes — and what disabled Albertans are actually being asked to do.", file: "9_ADSB_Employment_Reality_Report.pdf" },
  { num: "09a", title: "Three Years and Counting — FSCD/PDD Crisis", desc: "The same families being moved off AISH have children waiting three years for FSCD/PDD services. A simultaneous failure.", file: "9_Three_Years_and_Counting_FSCD_PDD_Crisis_Report.pdf" },
  { num: "10", title: "Taxpayer & Heritage Fund Report", desc: "Where Alberta's money has gone, where it hasn't, and what the Heritage Fund deposit pause means in 2026.", file: "10_Taxpayer_and_Heritage_Fund_Report.pdf" },
  { num: "10a", title: "Follow the Money Report", desc: "The grant trail, the contracts, and the question of where Alberta's disability-system spending actually lands.", file: "10a_Follow_The_Money_Report.pdf" },
  { num: "10b", title: "The Plot Thickens Report", desc: "Follow-up findings to the original financial trail. New documents, new questions.", file: "10b_The_Plot_Thickens_Report.pdf" },
  { num: "11", title: "Human Cost Report", desc: "What the documented outcomes are when disability income, healthcare access, and appeal rights all fail at once.", file: "11_Human_Cost_Report.pdf" },
  { num: "12", title: "Prior Finding Report", desc: "79,290 government-approved disability findings being reversed without new evidence, without explanation, without appeal.", file: "12_Prior_Finding_Report.pdf" },
  { num: "12b", title: "ASSURED. — Statement Report", desc: "A standalone statement piece on the meaning of the word 'assured' inside a program designed to remove that assurance.", file: "12bAssured_Statement_Report.pdf" },
  { num: "13", title: "Employment Reality Report", desc: "ADAP assumes employment is the destination. The labour market data says otherwise.", file: "13_Employment_Reality_Report.pdf" },
  { num: "13b", title: "Employment Assumption — Who Are the Workshops For?", desc: "If 'workshops' are the answer, what was the question? Plain examination of the workshop assumption inside ADAP.", file: "13b_Employment_Assumption_Who_Are_The_Workshops_For_Report.pdf" },
  { num: "13c", title: "The Workshops Question — ADAP", desc: "Companion to 13b. What the workshops actually are, who runs them, who they serve, and who they don't.", file: "13c_The_Workshops_Question_ADAP_Report.pdf" },
  { num: "13d", title: "Government's Case Against Itself", desc: "The contradictions the Government of Alberta has already published — held against itself.", file: "13dGovernments_Case_Against_Itself_Report.pdf" },
  { num: "14", title: "Addendum — FSCD/PDD Closures", desc: "Addendum documenting the quiet closure of FSCD and PDD intake streams.", file: "14_Addendum_FSCD_PDD_Closures.pdf" },
  { num: "15", title: "Addendum — Government Job Postings", desc: "Postings that contradict the labour market story being told to ADAP recipients.", file: "15_Addendum_Government_Job_Postings.pdf" },
  { num: "16", title: "Addendum — Coalition & UN CRPD", desc: "Coalition coverage and the UN Convention on the Rights of Persons with Disabilities — Canada ratified 2010.", file: "16_Addendum_Coalition_and_UN_CRPD.pdf" },
  { num: "17", title: "Campaign and Action Kit", desc: "How to use this campaign in your community. Practical, sourced, ready-to-distribute.", file: "17_Campaign_and_Action_Kit.pdf" },
  { num: "18", title: "Media Pitch Sheet", desc: "Three story angles for journalists. Sourced statistics. Direct quotes. A press packet.", file: "18_Media_Pitch_Sheet.pdf" },
  { num: "19", title: "Practical Action Guide", desc: "Step-by-step actions for individuals — from one phone call to a full impact statement.", file: "19_Practical_Action_Guide.pdf" }
];

// ─── Data: Documents (full library beyond the report series) ───
const DOCUMENTS = [
  // Compilations
  { cat: "compilations", title: "Complete Report Series Compilation", desc: "All 19 ADSB reports in a single PDF.", file: "/pdfs/adsb-report-series/0_Complete_Report_Series_Compilation.pdf" },
  { cat: "compilations", title: "Indigenous Disability Alberta — Complete Collection", desc: "All 17 sections in one document. The full Indigenous Disability series, 191 pages.", file: "/pdfs/indigenous-sections/0_Indigenous_Disability_Alberta_COMPLETE_Collection.pdf" },
  { cat: "compilations", title: "Systematic Exclusion Alberta — Complete Collection", desc: "All 15 sections in one document. The full Systematic Exclusion series, 211 pages.", file: "/pdfs/systematic-exclusion-sections/0_Systematic_Exclusion_Alberta_COMPLETE_Collection.pdf" },
  { cat: "compilations", title: "Compound Failure Brief — Complete", desc: "The full synthesis brief tying all four pillars together.", file: "/pdfs/compound-failure/0_Compound_Failure_Brief_COMPLETE.pdf" },
  { cat: "compilations", title: "Information Asymmetry Report", desc: "What disabled Albertans are being asked to decide without the information they need to decide it.", file: "/pdfs/information-asymmetry/0_Information_Asymmetry_Report.pdf" },

  // Indigenous sections (individual)
  { cat: "indigenous", title: "Preface — Indigenous Disability", desc: "Why this series exists and what its scope is.", file: "/pdfs/indigenous-sections/1_Indigenous_Disability_Alberta_PREFACE.pdf" },
  { cat: "indigenous", title: "Section 2 — Mortality Gap", desc: "The documented mortality gap between Indigenous and non-Indigenous Albertans.", file: "/pdfs/indigenous-sections/2_Indigenous_Disability_Alberta_SECTION_2_Mortality_Gap.pdf" },
  { cat: "indigenous", title: "Section 3 — Jurisdictional Fracture", desc: "When federal-provincial boundaries become a barrier to care.", file: "/pdfs/indigenous-sections/3_Indigenous_Disability_Alberta_SECTION_3_Jurisdictional_Fracture.pdf" },
  { cat: "indigenous", title: "Section 4 — Housing", desc: "Housing conditions on reserve and the disability cost of inadequate shelter.", file: "/pdfs/indigenous-sections/4_Indigenous_Disability_Alberta_SECTION_4_Housing.pdf" },
  { cat: "indigenous", title: "Section 5 — Contaminated Land", desc: "Industrial contamination, environmental health, and the legacy disability burden.", file: "/pdfs/indigenous-sections/5_Indigenous_Disability_Alberta_SECTION_5_Contaminated_Land.pdf" },
  { cat: "indigenous", title: "Section 6 — Water", desc: "Boil-water advisories, infrastructure, and the chronic disease cost.", file: "/pdfs/indigenous-sections/6_Indigenous_Disability_Alberta_SECTION_6_Water.pdf" },
  { cat: "indigenous", title: "Section 7 — Healthcare", desc: "Indigenous-specific healthcare access barriers and what closes them further.", file: "/pdfs/indigenous-sections/7_Indigenous_Disability_Alberta_SECTION_7_Healthcare.pdf" },
  { cat: "indigenous", title: "Section 8 — Jordan's Principle", desc: "What Jordan's Principle is, who it covers, and what it cannot reach.", file: "/pdfs/indigenous-sections/8_Indigenous_Disability_Alberta_SECTION_8_JordansPrinciple.pdf" },
  { cat: "indigenous", title: "Section 9 — Child Welfare", desc: "Indigenous children in care and the disability outcomes that follow.", file: "/pdfs/indigenous-sections/9_Indigenous_Disability_Alberta_SECTION_9_ChildWelfare.pdf" },
  { cat: "indigenous", title: "Section 10 — Justice", desc: "Indigenous Albertans, the justice system, and disability-related outcomes.", file: "/pdfs/indigenous-sections/10_Indigenous_Disability_Alberta_SECTION_10_Justice.pdf" },
  { cat: "indigenous", title: "Section 11 — MMIWG2S", desc: "Missing and Murdered Indigenous Women, Girls & Two-Spirit people — and the disability dimension.", file: "/pdfs/indigenous-sections/11_Indigenous_Disability_Alberta_SECTION_11_MMIWG2S.pdf" },
  { cat: "indigenous", title: "Section 12 — UNDRIP", desc: "United Nations Declaration on the Rights of Indigenous Peoples and Alberta's compliance posture.", file: "/pdfs/indigenous-sections/12_Indigenous_Disability_Alberta_SECTION_12_UNDRIP.pdf" },
  { cat: "indigenous", title: "Section 13 — Sovereignty", desc: "Self-determination, jurisdiction, and the disability service question.", file: "/pdfs/indigenous-sections/13_Indigenous_Disability_Alberta_SECTION_13_Sovereignty.pdf" },
  { cat: "indigenous", title: "Section 14 — TRC Health Calls to Action", desc: "Where Alberta sits relative to the Truth and Reconciliation Commission's health-related Calls to Action.", file: "/pdfs/indigenous-sections/14_Indigenous_Disability_Alberta_SECTION_14_TRC_Health.pdf" },
  { cat: "indigenous", title: "Section 15 — July 1 Synthesis", desc: "What the AISH-to-ADAP transition looks like through the Indigenous lens.", file: "/pdfs/indigenous-sections/15_Indigenous_Disability_Alberta_SECTION_15_July1_Synthesis.pdf" },
  { cat: "indigenous", title: "Section 16 — Closing", desc: "What the series concludes — and what it asks of the reader.", file: "/pdfs/indigenous-sections/16_Indigenous_Disability_Alberta_SECTION_16_Closing.pdf" },
  { cat: "indigenous", title: "Section 17 — Federal/Provincial Clawback", desc: "How federal benefits get clawed back by Alberta — and the Indigenous-specific impact.", file: "/pdfs/indigenous-sections/17_Indigenous_Disability_Alberta_SECTION_17_Federal_Provincial_Clawback.pdf" },

  // Systematic Exclusion sections
  { cat: "systematic", title: "Preface — Systematic Exclusion", desc: "Frame and scope of the Systematic Exclusion series.", file: "/pdfs/systematic-exclusion-sections/1_Systematic_Exclusion_PREFACE.pdf" },
  { cat: "systematic", title: "Section 1 — Financial Reality", desc: "The income arithmetic at the centre of the transition.", file: "/pdfs/systematic-exclusion-sections/2_Systematic_Exclusion_SECTION_1_Financial_Reality_Report.pdf" },
  { cat: "systematic", title: "Section 2 — Health Benefits Erosion", desc: "What's covered, what's not, and what disabled Albertans pay out of pocket.", file: "/pdfs/systematic-exclusion-sections/3_Systematic_Exclusion_SECTION_2_Health_Benefits_Erosion_Report.pdf" },
  { cat: "systematic", title: "Section 3 — Housing Crisis", desc: "Rent vs. AISH/ADAP. The math doesn't reconcile.", file: "/pdfs/systematic-exclusion-sections/4_Systematic_Exclusion_SECTION_3_Alberta_Housing_Crisis_Report.pdf" },
  { cat: "systematic", title: "Section 4 — Access Barriers", desc: "Every administrative barrier between an Albertan and the program they qualify for.", file: "/pdfs/systematic-exclusion-sections/5_Systematic_Exclusion_SECTION_4_Access_Barrier_Report.pdf" },
  { cat: "systematic", title: "Section 5 — Caseworker, Appeal Rights & Human Rights", desc: "What changed under Bill 12 and what's left.", file: "/pdfs/systematic-exclusion-sections/6_Systematic_Exclusion_SECTION_5_Caseworker_Appeal_Rights_HumanRights.pdf" },
  { cat: "systematic", title: "Section 6 — Healthcare Worker Shortage", desc: "650,000 without a family doctor and what that compounds.", file: "/pdfs/systematic-exclusion-sections/7_Systematic_Exclusion_SECTION_6_Healthcare_Worker_Shortage_Report.pdf" },
  { cat: "systematic", title: "Section 7 — FSCD/PDD Crisis", desc: "Three-year waitlists for the same families.", file: "/pdfs/systematic-exclusion-sections/8_Systematic_Exclusion_SECTION_7_FSCD_PDD_Crisis_Report.pdf" },
  { cat: "systematic", title: "Section 8 — This Is a Choice", desc: "The framing argument — these outcomes are not natural, they are chosen.", file: "/pdfs/systematic-exclusion-sections/9_Systematic_Exclusion_SECTION_8_This_Is_A_Choice.pdf" },
  { cat: "systematic", title: "Section 9 — Human Cost", desc: "The aggregate documented outcomes when the systems fail at once.", file: "/pdfs/systematic-exclusion-sections/10_Systematic_Exclusion_SECTION_9_Human_Cost_Report.pdf" },
  { cat: "systematic", title: "Section 10 — Prior Findings", desc: "79,290 reversed findings without new evidence.", file: "/pdfs/systematic-exclusion-sections/11_Systematic_Exclusion_SECTION_10_Prior_Findings_Report.pdf" },
  { cat: "systematic", title: "Section 11 — Employment Reality", desc: "What employment actually looks like for ADAP-targeted recipients.", file: "/pdfs/systematic-exclusion-sections/12_Systematic_Exclusion_SECTION_11_Employment_Reality_Report.pdf" },
  { cat: "systematic", title: "Section 12 — Campaign Action Kit", desc: "How to use this material in your community.", file: "/pdfs/systematic-exclusion-sections/13_Systematic_Exclusion_SECTION_12_Campaign_Action_Kit.pdf" },
  { cat: "systematic", title: "Section 13 — Media Pitch", desc: "Story angles for journalists.", file: "/pdfs/systematic-exclusion-sections/14_Systematic_Exclusion_SECTION_13_Media_Pitch.pdf" },
  { cat: "systematic", title: "Section 14 — Practical Action Guide", desc: "Concrete steps for individuals.", file: "/pdfs/systematic-exclusion-sections/15_Systematic_Exclusion_SECTION_14_Practical_Action_Guide.pdf" },
  { cat: "systematic", title: "Section 15 — Analysis", desc: "Closing analysis tying the series together.", file: "/pdfs/systematic-exclusion-sections/16_Systematic_Exclusion_SECTION_15_Analysis.pdf" },

  // Compound Failure
  { cat: "compound", title: "Compound Failure — Introduction", desc: "How the four-pillar argument is structured.", file: "/pdfs/compound-failure/1_Compound_Failure_Introduction_Section.pdf" },
  { cat: "compound", title: "Compound Failure — Pillar I", desc: "Income failure (AISH-to-ADAP).", file: "/pdfs/compound-failure/2_Compound_Failure_Pillar_I.pdf" },
  { cat: "compound", title: "Compound Failure — Pillar II", desc: "Health failure (coverage erosion, wait times).", file: "/pdfs/compound-failure/3_Compound_Failure_Pillar_II_FINAL.pdf" },
  { cat: "compound", title: "Compound Failure — Pillar III", desc: "Children's services failure (FSCD/PDD).", file: "/pdfs/compound-failure/4_Compound_Failure_Pillar_III_FINAL.pdf" },
  { cat: "compound", title: "Compound Failure — Section V", desc: "Rights failure (appeals, caseworkers).", file: "/pdfs/compound-failure/5_Compound_Failure_Section_V_FINAL.pdf" },
  { cat: "compound", title: "Compound Failure — Section VI", desc: "Synthesis and conclusion.", file: "/pdfs/compound-failure/6_Compound_Failure_Section_VI_FINAL.pdf" },

  // Plain language
  { cat: "plain", title: "AISH Plain Language Guide (v2, 18 pages)", desc: "The most accessible plain-language entry point. Designed for low-literacy and cognitive-access readers.", file: "/pdfs/plain-language/AISH_Plain_Language_Guide_v2_18pages.pdf" },
  { cat: "plain", title: "AISH Accessible Plain Language", desc: "Companion plain-language version focused on accessibility framing.", file: "/pdfs/plain-language/AISH_Accessible_Plain_Language_2026.pdf" },
  { cat: "plain", title: "Compound Failure — Plain Language", desc: "Plain-language version of the full Compound Failure brief.", file: "/pdfs/plain-language/Compound_Failure_Plain_Language_Guide.pdf" },
  { cat: "plain", title: "Indigenous Disability — Plain Language", desc: "Plain-language version of the Indigenous Disability Alberta series.", file: "/pdfs/plain-language/Indigenous_Disability_Plain_Language_Guide.pdf" },
  { cat: "plain", title: "Charter of Rights — Plain Language", desc: "What the Charter of Rights and Freedoms says, in plain language.", file: "/pdfs/plain-language/Charter_of_Rights_Plain_Language_Guide_2026.pdf" },
  { cat: "plain", title: "Employment Assumption — Plain Language", desc: "Plain-language version of the employment-first critique.", file: "/pdfs/plain-language/Employment_Assumption_Plain_Language_2026.pdf" },
  { cat: "plain", title: "AISH Taxpayer Truth — Plain Language", desc: "Plain-language version of the taxpayer / Heritage Fund analysis.", file: "/pdfs/plain-language/AISH_Taxpayer_Truth_PlainLanguage_2026.pdf" },
  { cat: "plain", title: "Information Asymmetry — Plain Language Companion", desc: "Plain-language companion to the Information Asymmetry Report.", file: "/pdfs/information-asymmetry/1_Information_Asymmetry_Plain_Language_Companion.pdf" },

  // Legal
  { cat: "legal", title: "Charter Constitutional Analysis", desc: "Charter analysis of the AISH-to-ADAP transition prepared in legal-style format.", file: "/pdfs/legalese/ADSB_Charter_Constitutional_Analysis_Legal.pdf" },
  { cat: "legal", title: "Employment Assumption — Policy & Legal", desc: "Policy and legal analysis of the employment-first framing inside ADAP.", file: "/pdfs/legalese/ADSB_Employment_Assumption_Policy_Legal.pdf" },
  { cat: "legal", title: "ADAP Data Analysis", desc: "Data analysis of the ADAP program — what the numbers say vs. what the program literature says.", file: "/pdfs/legalese/ADAP_DATA_Analysis_.pdf" },
  { cat: "legal", title: "Sorochan Heritage Fund Analysis", desc: "Heritage Fund analysis prepared by Gavin Sorochan, integrated into the campaign record.", file: "/pdfs/legalese/ADSB_Sorochan_Heritage_Fund_Analysis.pdf" },
  { cat: "legal", title: "Sorochan-Knibbs Collaborative Synthesis", desc: "Co-authored synthesis document covering the federal jurisdiction argument and structural disability income portability.", file: "/pdfs/legalese/Sorochan_Knibbs_Collaborative_Synthesis.pdf" },

  // Sourced briefs
  { cat: "briefs", title: "AISH Media Pitch 2026", desc: "Standalone media pitch document. Three story angles, sourced statistics, contact line.", file: "/pdfs/sourced-briefs/AISH_Media_Pitch_2026.pdf" },
  { cat: "briefs", title: "AISH Campaign Kit 2026", desc: "Standalone campaign-kit version. Email templates, rollout timeline, distribution playbook.", file: "/pdfs/sourced-briefs/AISH_Campaign_Kit_2026.pdf" },
  { cat: "briefs", title: "Intergenerational Contradiction Report", desc: "How disability supports being cut today produce the next generation's outcomes — sourced.", file: "/pdfs/sourced-briefs/AISH_Intergenerational_Contradiction_Report_2026.pdf" },
  { cat: "briefs", title: "Fiscal Hypocrisy — Sourced Addendum", desc: "Government's own fiscal claims, held against its own published figures.", file: "/pdfs/sourced-briefs/Fiscal_Hypocrisy_Addendum_SOURCED.pdf" },
  { cat: "briefs", title: "Job Postings Addendum (April 6, 2026)", desc: "Government job postings that contradict the labour market story being told to ADAP recipients.", file: "/pdfs/sourced-briefs/JobPostings_Addendum_April6_2026.pdf" },
  { cat: "briefs", title: "Alberta Daycare Barriers — Research Analysis", desc: "Analysis of daycare access barriers and how they intersect with disability income and FSCD/PDD service gaps.", file: "/pdfs/sourced-briefs/Alberta_Daycare_Barriers_Research_Analysis.pdf" },
  { cat: "briefs", title: "Consultation Gap Rebuttal", desc: "Direct rebuttal of the government's consultation claim — what consultation actually happened, and what didn't.", file: "/pdfs/consultation-gap-rebuttal/Consultation_Gap_Rebuttal_April2026.pdf" },

  // New ADSB docs
  { cat: "new", title: "73 Reviews a Day", desc: "What it would take to actually re-review 79,290 cases by July 1, 2026 — and what it doesn't take.", file: "/pdfs/new-adsb-docs/ADSB_73_Reviews_A_Day_April2026.pdf" },
  { cat: "new", title: "Income Crossover Analysis", desc: "Where ADAP income meets and crosses AISH income — and where it doesn't.", file: "/pdfs/new-adsb-docs/ADSB_Income_Crossover_Analysis_April2026.pdf" },
  { cat: "new", title: "Structural Cage — Expanded", desc: "The expanded version of the structural-cage argument, with the federal-jurisdiction extension.", file: "/pdfs/new-adsb-docs/ADSB_Structural_Cage_Expanded_April2026.pdf" },
  { cat: "new", title: "The Core Findings — Point Form", desc: "Every key finding from the campaign in one quick-reference point-form document.", file: "/pdfs/new-adsb-docs/ADSB_The_Core_Findings_Point_Form.pdf" },
  { cat: "new", title: "Financial Analysis — Community Edition", desc: "Community-facing version of the financial analysis. Plain-language format.", file: "/pdfs/new-adsb-docs/ADSB_Financial_Analysis_Community_Version_April2026.pdf" },
  { cat: "new", title: "Health Benefits Erosion — Community Edition", desc: "Community-facing version of the health benefits erosion analysis.", file: "/pdfs/new-adsb-docs/ADSB_Health_Benefits_Erosion_Community_Edition_April2026.pdf" },
  { cat: "new", title: "Practical Action Guide — Community Edition", desc: "Community-facing version of the practical action guide.", file: "/pdfs/new-adsb-docs/ADSB_Practical_Action_Guide_Community_Edition_April2026.pdf" },

  // Information asymmetry
  { cat: "info", title: "Information Asymmetry — Report", desc: "What disabled Albertans are being asked to decide without the information they need to decide it. Information asymmetry as the modern form of paternalism.", file: "/pdfs/information-asymmetry/0_Information_Asymmetry_Report.pdf" },
  { cat: "info", title: "Information Asymmetry — Plain Language", desc: "Plain-language companion document.", file: "/pdfs/information-asymmetry/1_Information_Asymmetry_Plain_Language_Companion.pdf" },

  // The Access Gap (companion pair to Information Asymmetry)
  { cat: "access", title: "The Access Gap — Penalized for Non-Ability", desc: "Long-form evidentiary report. How federal and Alberta government systems are structurally inaccessible to the disability community they were built to serve — and what happens when the people most affected cannot navigate the very forms that determine whether their income continues. Companion to the Information Asymmetry Report: that one covers the information gap, this one covers the access gap.", file: "/pdfs/access-gap/Access_Gap_Penalized_for_NonAbility.pdf" },
  { cat: "access", title: "The Access Gap — Plain Language", desc: "Plain-language companion to the long-form Access Gap report. 12 pages, illustrated. Designed for low-literacy and cognitive-access readers, and for anyone who supports a person navigating these systems.", file: "/pdfs/access-gap/Access_Gap_Plain_Language.pdf", extra: 'Individual illustrations also available in <a href="#flyers">Flyers</a> — free for protest signs, social posts, personal use.' },
  { cat: "wda", title: "What Disability Actually Means", desc: "Reference-grade public education document on what cognitive, mental, physical, intellectual, congenital, and acquired disabilities actually are — what they look like, what they hinder, who they affect — and what AISH and the wider Alberta disability system does and does not provide for the 79,290 Albertans who depend on it. 36 pages, fully sourced.", file: "/pdfs/what-disability-actually-means/What_Disability_Actually_Means.pdf" },
  { cat: "wda", title: "What Disability Actually Means — Plain Language", desc: "Plain-language companion to the 36-page reference document. 18 pages, illustrated. Built on the closing argument: it takes one accident, one diagnosis. Disability does not discriminate.", file: "/pdfs/what-disability-actually-means/What_Disability_Actually_Means_Plain_Language.pdf", extra: 'Individual illustrations also available in <a href="#flyers">Flyers</a> — free for protest signs, social posts, personal use.' }
];

// ─── Data: Audio recordings (5 series, organized by report header) ───
const AUDIO_SERIES = [
  {
    id: "adsb",
    title: "ADSB Original Report Series",
    blurb: "The 19-report April 2026 campaign series, read in full. Start with the Intro, end with the Outro.",
    folder: "adsb-report-series",
    items: [
      { num: "00", title: "Series Intro", file: "00_ADSB_Audio_00_Intro.mp3" },
      { num: "01", title: "Do You Know Your Minister Nixon?", file: "01_ADSB_Audio_Do_You_Know_Your_Minister_Nixon.mp3" },
      { num: "02", title: "Do You Know Your Premier Smith?", file: "02_ADSB_Audio_Do_You_Know_Your_Premier_Smith.mp3" },
      { num: "03", title: "Financial Reality", file: "03_ADSB_Audio_Financial_Reality.mp3" },
      { num: "04", title: "Health Benefits Erosion", file: "04_ADSB_Audio_Health_Benefits_Erosion.mp3" },
      { num: "05", title: "Alberta Housing Crisis", file: "05_ADSB_Audio_Alberta_Housing_Crisis.mp3" },
      { num: "05b", title: "Payment Instability", file: "05b_ADSB_Audio_Payment_Instability.mp3" },
      { num: "06", title: "Access Barrier", file: "06_ADSB_Audio_Access_Barrier.mp3" },
      { num: "07", title: "Caseworker, Appeal Rights & Human Rights", file: "07_ADSB_Audio_Caseworker_Appeal_Rights.mp3" },
      { num: "07b", title: "Appeal Overturn", file: "07b_ADSB_Audio_Appeal_Overturn.mp3" },
      { num: "07c", title: "Charter Mobility Rights", file: "07c_ADSB_Audio_Charter_Mobility_Rights.mp3" },
      { num: "08", title: "Healthcare Worker Shortage", file: "08_ADSB_Audio_Healthcare_Worker_Shortage.mp3" },
      { num: "09", title: "Three Years and Counting — FSCD/PDD", file: "09_ADSB_Audio_Three_Years_and_Counting.mp3" },
      { num: "09a", title: "ADSB Employment Reality", file: "09a_ADSB_Audio_ADSB_Employment_Reality.mp3" },
      { num: "09c", title: "Intergenerational Family", file: "09c_ADSB_Audio_Intergenerational_Family.mp3" },
      { num: "09d", title: "Intergenerational Contradiction", file: "09d_ADSB_Audio_Intergenerational_Contradiction.mp3" },
      { num: "10", title: "Taxpayer & Heritage Fund", file: "10_ADSB_Audio_Taxpayer_and_Heritage_Fund.mp3" },
      { num: "10a", title: "Follow the Money", file: "10a_ADSB_Audio_Follow_The_Money.mp3" },
      { num: "10b", title: "The Plot Thickens", file: "10b_ADSB_Audio_The_Plot_Thickens.mp3" },
      { num: "11", title: "Human Cost", file: "11_ADSB_Audio_Human_Cost.mp3" },
      { num: "12", title: "Prior Finding", file: "12_ADSB_Audio_Prior_Finding.mp3" },
      { num: "12b", title: "ASSURED. — Statement", file: "12b_ADSB_Audio_Assured_Statement.mp3" },
      { num: "13", title: "Employment Reality — Government Postings", file: "13_ADSB_Audio_employment_Reality_Government_Postings.mp3" },
      { num: "13b", title: "Employment Assumption — Workshops", file: "13b_ADSB_Audio_Employment_Assumption.mp3" },
      { num: "13c", title: "The Workshops Question — ADAP", file: "13c_ADSB_Audio_The_Workshops_Question.mp3" },
      { num: "13d", title: "Government's Case Against Itself", file: "13d_ADSB_Audio_Governments_Case_Against_Itself.mp3" },
      { num: "14", title: "Addendum — FSCD/PDD Closures", file: "14_ADSB_Audio_Addendum_FSCD_PDD_Closures.mp3" },
      { num: "15", title: "Addendum — Government Job Postings", file: "15_ADSB_Audio_Addendum_Government_Postings.mp3" },
      { num: "16", title: "Addendum — Coalition & UN CRPD", file: "16_ADSB_Audio_Addendum_Coalition_and_UN.mp3" },
      { num: "17", title: "Campaign and Action Kit", file: "17_ADSB_Audio_Campaign_and_Action_Kit.mp3" },
      { num: "18", title: "Media Pitch Sheet", file: "18_ADSB_Audio_Media_Pitch_Sheet.mp3" },
      { num: "19", title: "Practical Action Guide", file: "19_ADSB_Audio_Practical_Action_Guide.mp3" },
      { num: "20", title: "Series Outro", file: "20_ADSB_Audio_00_Outro.mp3" }
    ]
  },
  {
    id: "indigenous",
    title: "Indigenous Disability Alberta Series",
    blurb: "The 17-section Indigenous Disability series, plus PREFACE and series bookends. Section 17 is split into Parts 1 and 2 due to length.",
    folder: "indigenous-series",
    items: [
      { num: "00", title: "Series Intro", file: "0_Indigenous_Disability_Alberta_Series_Intro.mp3" },
      { num: "01", title: "PREFACE", file: "1_Indigenous_Disability_Alberta_PREFACE.mp3" },
      { num: "02", title: "Section 1 — Historical Context", file: "2_Indigenous_Disability_Alberta_SECTION_1_Historical_Context.mp3" },
      { num: "03", title: "Section 2 — Mortality Gap", file: "3_Indigenous_Disability_Alberta_SECTION_2_Mortality_Gap.mp3" },
      { num: "04", title: "Section 3 — Jurisdictional Fracture", file: "4_Indigenous_Disability_Alberta_SECTION_3_Jurisdictional_Fracture.mp3" },
      { num: "05", title: "Section 4 — Housing", file: "5_Indigenous_Disability_Alberta_SECTION_4_Housing.mp3" },
      { num: "06", title: "Section 5 — Contaminated Land", file: "6_Indigenous_Disability_Alberta_SECTION_5_Contaminated_Land.mp3" },
      { num: "07", title: "Section 6 — Water", file: "7_Indigenous_Disability_Alberta_SECTION_6_Water.mp3" },
      { num: "08", title: "Section 7 — Healthcare", file: "8_Indigenous_Disability_Alberta_SECTION_7_Healthcare.mp3" },
      { num: "09", title: "Section 8 — Jordan's Principle", file: "9_Indigenous_Disability_Alberta_SECTION_8_JordansPrinciple.mp3" },
      { num: "10", title: "Section 9 — Child Welfare", file: "10_Indigenous_Disability_Alberta_SECTION_9_ChildWelfare.mp3" },
      { num: "11", title: "Section 10 — Justice", file: "11_Indigenous_Disability_Alberta_SECTION_10_Justice.mp3" },
      { num: "12", title: "Section 11 — MMIWG2S", file: "12_Indigenous_Disability_Alberta_SECTION_11_MMIWG2S.mp3" },
      { num: "13", title: "Section 12 — UNDRIP", file: "13_Indigenous_Disability_Alberta_SECTION_12_UNDRIP.mp3" },
      { num: "14", title: "Section 13 — Sovereignty", file: "14_Indigenous_Disability_Alberta_SECTION_13_Sovereignty.mp3" },
      { num: "15", title: "Section 14 — TRC Health Calls to Action", file: "15_Indigenous_Disability_Alberta_SECTION_14_TRC_Health.mp3" },
      { num: "16", title: "Section 15 — July 1 Synthesis", file: "16_Indigenous_Disability_Alberta_SECTION_15_July1_Synthesis.mp3" },
      { num: "17", title: "Section 16 — Closing", file: "17_Indigenous_Disability_Alberta_SECTION_16_Closing.mp3" },
      { num: "18a", title: "Section 17 Part 1 — Federal/Provincial Clawback (Instances 1–3)", file: "18a_Indigenous_Disability_Alberta_SECTION_17_Federal_Provincial_Clawback_Part1.mp3" },
      { num: "18b", title: "Section 17 Part 2 — Federal/Provincial Clawback (VISP + Unified)", file: "18b_Indigenous_Disability_Alberta_SECTION_17_Federal_Provincial_Clawback_Part2.mp3" },
      { num: "19", title: "Series Outro", file: "19_Indigenous_Disability_Alberta_Series_Outro.mp3" }
    ]
  },
  {
    id: "infoasym",
    title: "Information Asymmetry Report",
    blurb: "The 49-page report on information asymmetry as the modern form of paternalism. Read in eight parts following the source's natural section structure.",
    folder: "information-asymmetry",
    items: [
      { num: "01", title: "Part 1 of 8 — Introduction + Argument in Brief", file: "0_Information_Asymmetry_Report_Part1_of_8.mp3" },
      { num: "02", title: "Part 2 of 8 — Stage One: Reproductive & Prenatal", file: "0_Information_Asymmetry_Report_Part2_of_8.mp3" },
      { num: "03", title: "Part 3 of 8 — Stage Two: Early Childhood", file: "0_Information_Asymmetry_Report_Part3_of_8.mp3" },
      { num: "04", title: "Part 4 of 8 — Stage Three A: Adult Diagnosis", file: "0_Information_Asymmetry_Report_Part4_of_8.mp3" },
      { num: "05", title: "Part 5 of 8 — Stage Three B: Exemption Framework + TFW Contradiction", file: "0_Information_Asymmetry_Report_Part5_of_8.mp3" },
      { num: "06", title: "Part 6 of 8 — Stage Four: Environmental & Occupational", file: "0_Information_Asymmetry_Report_Part6_of_8.mp3" },
      { num: "07", title: "Part 7 of 8 — Stage Five: Succession + MAID Framing", file: "0_Information_Asymmetry_Report_Part7_of_8.mp3" },
      { num: "08", title: "Part 8 of 8 — What Is Owed: Constitutional & Treaty Argument", file: "0_Information_Asymmetry_Report_Part8_of_8.mp3" }
    ]
  },
  {
    id: "compound",
    title: "Compound Failure Document",
    blurb: "The synthesis brief tying the four-pillar argument together. Eight parts.",
    folder: "compound-failure",
    items: [
      { num: "00", title: "Compound Failure — Intro", file: "00_Compound_Failure_Intro.mp3" },
      { num: "01", title: "Compound Failure — Part 1", file: "1_Compound_Failure_Part_1.mp3" },
      { num: "02", title: "Compound Failure — Part 2", file: "2_Compound_Failure_Part_2.mp3" },
      { num: "03", title: "Compound Failure — Part 3", file: "3_Compound_Failure_Part_3.mp3" },
      { num: "04", title: "Compound Failure — Part 4", file: "4_Compound_Failure_Part_4.mp3" },
      { num: "05", title: "Compound Failure — Part 5", file: "5_Compound_Failure_Part_5.mp3" },
      { num: "06", title: "Compound Failure — Part 6", file: "6_Compound_Failure_Part_6.mp3" },
      { num: "07", title: "Compound Failure — Part 7", file: "7_Compound_Failure_Part_7.mp3" }
    ]
  },
  {
    id: "consultation",
    title: "Consultation Gap Rebuttal",
    blurb: "Direct rebuttal of the government's consultation claim. What consultation actually happened, and what didn't.",
    folder: "consultation-gap-rebuttal",
    items: [
      { num: "00", title: "Intro", file: "0_Consultation_Gap_Intro.mp3" },
      { num: "01", title: "Rebuttal", file: "1_Consultation_Gap_Rebuttal.mp3" },
      { num: "02", title: "Outro", file: "2_Consultation_Gap_Outro.mp3" }
    ]
  }
];

// ─── Data: Provincial Refugee briefs ───
const PROVINCES = [
  { num: "01", name: "British Columbia", file: "1_Fillable_Disability_Refugee_British_Columbia.pdf" },
  { num: "02", name: "Saskatchewan", file: "2_Fillable_Disability_Refugee_Saskatchewan.pdf" },
  { num: "03", name: "Northwest Territories", file: "3_Fillable_Disability_Refugee_Northwest_Territories.pdf" },
  { num: "04", name: "Manitoba", file: "4_Fillable_Disability_Refugee_Manitoba.pdf" },
  { num: "05", name: "Ontario", file: "5_Fillable_Disability_Refugee_Ontario.pdf" },
  { num: "06", name: "Quebec", file: "6_Fillable_Disability_Refugee_Quebec.pdf" },
  { num: "07", name: "New Brunswick", file: "7_Fillable_Disability_Refugee_New_Brunswick.pdf" },
  { num: "08", name: "Nova Scotia", file: "8_Fillable_Disability_Refugee_Nova_Scotia.pdf" },
  { num: "09", name: "Prince Edward Island", file: "9_Fillable_Disability_Refugee_Prince_Edward_Island.pdf" },
  { num: "10", name: "Newfoundland & Labrador", file: "10_Fillable_Disability_Refugee_Newfoundland_and_Labrador.pdf" }
];

// ─── Data: Ministerial Correspondence ───
const MINISTERIAL = [
  {
    date: "April 28, 2026",
    title: "Ministerial Response Analysis — Addendum",
    desc: "Three-part analysis of Minister Nixon's April 28 response: what was newly revealed, what was confirmed in writing, what was avoided. Sourced to the response letter directly.",
    file: "Ministerial_Response_Analysis_April28_2026.pdf",
    type: "Analysis"
  },
  {
    date: "April 28, 2026",
    title: "Letter from Minister Nixon (redacted)",
    desc: "Original Ministerial response on letterhead from the Honourable Jason Nixon, Minister of Assisted Living and Social Services, copied to the Premier. Personal information redacted.",
    file: "Nixon_Response_April28_2026_REDACTED.pdf",
    type: "Source document"
  }
];

// ─── Data: Featured flyers (subset of /pdfs/flyers/posters/) ───
const FLYERS = [
  { label: "Caseworker Rights", img: "caseworker_flyer.png" },
  { label: "Access Barriers", img: "barrier_flyer.png" },
  { label: "Health Benefits", img: "flyer_health_benefits.png" },
  { label: "Healthcare Workers", img: "flyer_healthcare_worker.png" },
  { label: "Housing Crisis", img: "housing_flyer.png" },
  { label: "Human Cost", img: "flyer_human_cost.png" },
  { label: "Prior Finding", img: "flyer_prior_finding.png" },
  { label: "Employment", img: "flyer_employment.png" },
  { label: "Follow the Money", img: "flyer_follow_money.png" },
  { label: "Taxpayer", img: "flyer_taxpayer.png" },
  { label: "FSCD / PDD", img: "flyer_fscd_pdd.png" },
  { label: "Campaign", img: "flyer_campaign.png" },
  { label: "Leadership Accountability", img: "Leadership_Accountability_Flyer.png" },
  { label: "Minister Nixon", img: "nixon_flyer.png" },
  { label: "Premier Smith", img: "smith_flyer.png" },
  { label: "DTC Loan, Not a Grant", img: "Flyer_DTC_Loan_Not_Grant.png" },
  { label: "ATIA Personal File", img: "ATIA_Form_Announcement_Flyer.png" },

  // Access Gap illustrations (May 2026) — live in /pdfs/flyers/comics/
  { label: "Access Gap — Cover", img: "Image 1 May 2, 2026, 08_35_36 PM.png", path: "comics" },
  { label: "What Access Means", img: "Image 2 May 2, 2026, 08_37_32 PM.png", path: "comics" },
  { label: "Tax Filing Trap", img: "Image 3 May 2, 2026, 08_38_59 PM.png", path: "comics" },
  { label: "Form Trap (T2201)", img: "Image 4 May 2, 2026, 08_40_21 PM.png", path: "comics" },
  { label: "Willful Non-Compliance", img: "Image 5 May 2, 2026, 08_41_56 PM.png", path: "comics" },
  { label: "Reading Levels", img: "Image 6 May 2, 2026, 08_43_40 PM.png", path: "comics" },
  { label: "The Five Excuses", img: "Image 7 May 2, 2026, 08_45_55 PM.png", path: "comics" },
  { label: "Attrition as Policy", img: "Image 8 May 2, 2026, 08_50_26 PM.png", path: "comics" },
  { label: "Three Laws", img: "Image 9 May 2, 2026, 08_53_12 PM.png", path: "comics" },
  { label: "What Accessible Looks Like", img: "Image 10 May 2, 2026, 08_55_41 PM.png", path: "comics" },
  { label: "We Build the Record", img: "Image 11 May 2, 2026, 09_06_21 PM.png", path: "comics" },
  { label: "We Stand Together", img: "Image 12 May 2, 2026, 09_07_23 PM.png", path: "comics" },

  // What Disability Actually Means — illustrations (May 2026)
  { label: "What Disability Means — Cover", img: "image_f62730fc.png", path: "comics" },
  { label: "What Disability Means — Cover (variant)", img: "Image 1 May 3, 2026, 02_43_12 AM.png", path: "comics" },
  { label: "What Disability Means — One Accident", img: "image_496ff693.png", path: "comics" },
  { label: "What Disability Means — Who Is On AISH", img: "Image 3 May 3, 2026, 02_46_33 AM.png", path: "comics" },
  { label: "What Disability Means — Cognitive Disability", img: "Image 4 May 3, 2026, 02_48_58 AM.png", path: "comics" },
  { label: "What Disability Means — Mental Illness", img: "Image 5 May 3, 2026, 02_50_10 AM.png", path: "comics" },
  { label: "What Disability Means — Physical Disability", img: "Image 6 May 3, 2026, 02_51_14 AM.png", path: "comics" },
  { label: "What Disability Means — Intellectual & Developmental", img: "Image 7 May 3, 2026, 02_52_22 AM.png", path: "comics" },
  { label: "What Disability Means — Congenital", img: "Image 8 May 3, 2026, 02_53_31 AM.png", path: "comics" },
  { label: "What Disability Means — One Event", img: "Image 9 May 3, 2026, 02_54_26 AM.png", path: "comics" },
  { label: "What Disability Means — Multiple Conditions", img: "Image 10 May 3, 2026, 02_55_47 AM.png", path: "comics" },
  { label: "What Disability Means — Visible & Invisible", img: "Image 11 May 3, 2026, 02_56_49 AM.png", path: "comics" },
  { label: "What Disability Means — What AISH Is", img: "Image 12 May 3, 2026, 02_59_00 AM.png", path: "comics" },
  { label: "What Disability Means — What ADAP Does", img: "Image 13 May 3, 2026, 03_00_41 AM.png", path: "comics" },
  { label: "What Disability Means — Structural Contradiction", img: "Image 14 May 3, 2026, 03_02_00 AM.png", path: "comics" },
  { label: "What Disability Means — What You Can Do", img: "Image 15 May 3, 2026, 03_03_20 AM.png", path: "comics" },
  { label: "What Disability Means — Manifesto", img: "Image 16 May 3, 2026, 03_04_23 AM.png", path: "comics" },

  // Additional comics — AI-generated illustrations (campaign archive)
  { label: "AISH Access Barrier", img: "AISH_Access_Barrier.jpg", path: "comics" },
  { label: "Canadian Cycle", img: "667409808_1575319973579544_3786217956361830580_n.jpg", path: "comics" },
  { label: "Assured", img: "AISH_Assured_Flyer.jpg", path: "comics" },
  { label: "Political Paralysis", img: "AISH_Caseworker_Appeal_Rights_HumanRights.jpg", path: "comics" },
  { label: "Rural Healthcare Access", img: "ChatGPT_Image_Apr_23,_2026,_10_19_23_PM.jpg", path: "comics" },
  { label: "Jordan's Principle", img: "ChatGPT_Image_Apr_23,_2026,_10_20_20_PM.jpg", path: "comics" },
  { label: "Case File", img: "ChatGPT_Image_Apr_23,_2026,_10_21_10_PM.jpg", path: "comics" },
  { label: "Tribunal Hearing", img: "ChatGPT_Image_Apr_23,_2026,_10_22_10_PM.jpg", path: "comics" },
  { label: "Red Dress — MMIWG2S", img: "ChatGPT_Image_Apr_23,_2026,_10_23_00_PM.jpg", path: "comics" },
  { label: "UNDRIP", img: "ChatGPT_Image_Apr_23,_2026,_10_23_54_PM.jpg", path: "comics" },
  { label: "Indigenous Council", img: "ChatGPT_Image_Apr_23,_2026,_10_25_04_PM.jpg", path: "comics" },
  { label: "TRC Calls to Action", img: "ChatGPT_Image_Apr_23,_2026,_10_26_01_PM.jpg", path: "comics" },
  { label: "July 1, 2026", img: "ChatGPT_Image_Apr_23,_2026,_10_43_11_PM.jpg", path: "comics" },
  { label: "Path Through Loss", img: "ChatGPT_Image_Apr_23,_2026,_10_46_54_PM.jpg", path: "comics" },
  { label: "CDB Clawback", img: "ChatGPT_Image_Apr_23,_2026,_10_48_12_PM.jpg", path: "comics" },
  { label: "Sterilization Records — 1928–1972", img: "ChatGPT_Image_Apr_26,_2026,_06_36_35_PM.jpg", path: "comics" },
  { label: "Information at Birth", img: "ChatGPT_Image_Apr_26,_2026,_06_38_39_PM.jpg", path: "comics" },
  { label: "Prenatal Diagnosis", img: "ChatGPT_Image_Apr_26,_2026,_06_40_43_PM.jpg", path: "comics" },
  { label: "Early Intervention Window Closing", img: "ChatGPT_Image_Apr_26,_2026,_06_42_34_PM.jpg", path: "comics" },
  { label: "Same File, Different Door", img: "ChatGPT_Image_Apr_26,_2026,_06_44_40_PM.jpg", path: "comics" },
  { label: "Reclassified Employable", img: "ChatGPT_Image_Apr_26,_2026,_06_45_56_PM.jpg", path: "comics" },
  { label: "Environmental Hazards", img: "ChatGPT_Image_Apr_26,_2026,_06_49_49_PM.jpg", path: "comics" },
  { label: "Application Burden", img: "ChatGPT_Image_Apr_26,_2026,_06_51_53_PM.jpg", path: "comics" },
  { label: "The Choice", img: "ChatGPT_Image_Apr_26,_2026,_06_53_18_PM.jpg", path: "comics" },
  { label: "Obligations the Province Accepted", img: "ChatGPT_Image_Apr_26,_2026,_06_54_32_PM.jpg", path: "comics" },
  { label: "The Naming", img: "ChatGPT_Image_Apr_26,_2026,_06_56_03_PM.jpg", path: "comics" },
  { label: "Nixon — AISH to ADAP Transfer", img: "Nixon.jpg", path: "comics" },
  { label: "Boil Water Advisory — Day 4,387", img: "image-17743700-0cef-4788-bf79-7a49825cda31.jpg", path: "comics" },
  { label: "Reserve Boundary", img: "image-b97253df-5939-47d4-9d21-c81dc3bd0fa1.jpg", path: "comics" },
  { label: "Crumbling Staircases", img: "image_17c7a66.jpg", path: "comics" },
  { label: "The Law Protects You", img: "image_1c771669.jpg", path: "comics" },
  { label: "The Unending Hold", img: "image_1f73883f.jpg", path: "comics" },
  { label: "System Gears", img: "image_23ddd50a.jpg", path: "comics" },
  { label: "Layers of Policy", img: "image_25005b72.jpg", path: "comics" },
  { label: "Closed Doors — FSCD/PDD", img: "image_27787e80.jpg", path: "comics" },
  { label: "Assured Promise Crumbling", img: "image_32bb6bc0.jpg", path: "comics" },
  { label: "Mental Health Wait — 6–18 Months", img: "image_3329b7f0.jpg", path: "comics" },
  { label: "RDSP", img: "image_4771b2ee.jpg", path: "comics" },
  { label: "Cost vs AISH", img: "image_487572de.jpg", path: "comics" },
  { label: "The Record", img: "image_4a9e9ab0.jpg", path: "comics" },
  { label: "Heritage Fund Imbalance", img: "image_4e276cce.jpg", path: "comics" },
  { label: "Stranded Between Jurisdictions", img: "image_5eda8ba9.jpg", path: "comics" },
  { label: "Town Hall", img: "image_624a842f.jpg", path: "comics" },
  { label: "Falling Through the Net", img: "image_630a5976.jpg", path: "comics" },
  { label: "System in Need of Navigation", img: "image_6447dfda.jpg", path: "comics" },
  { label: "$200 in Real Life", img: "image_67a4528d.jpg", path: "comics" },
  { label: "Application Burden — Late Night", img: "image_6a951449.jpg", path: "comics" },
  { label: "Housing Reality", img: "image_6fabf0d9.jpg", path: "comics" },
  { label: "The Cliff — Bill 12 / ADAP Timeline", img: "image_75ec6658.jpg", path: "comics" },
  { label: "Heritage Vault vs Disability Support", img: "image_7abaa3f9.jpg", path: "comics" },
  { label: "ADAP Door — Crumbling Floor", img: "image_863c100.jpg", path: "comics" },
  { label: "The Money Is There", img: "image_8ba69427.jpg", path: "comics" },
  { label: "Proposed Cuts", img: "image_97b320d8.jpg", path: "comics" },
  { label: "650,000 Without a Doctor", img: "image_99613912.jpg", path: "comics" },
  { label: "Treaty Lands", img: "image_9ebf0ed3.jpg", path: "comics" },
  { label: "An Educated Public", img: "image_9ff446ce.jpg", path: "comics" },
  { label: "79,000 Families", img: "image_a77ac83a.jpg", path: "comics" },
  { label: "Law Says vs What's Happening", img: "image_ac1aeed4.jpg", path: "comics" },
  { label: "The Math Is Not Possible", img: "image_b19a76bb.jpg", path: "comics" },
  { label: "Life Expectancy Gap", img: "image_b6105209.jpg", path: "comics" },
  { label: "Economic Pyramid", img: "image_bc40692.jpg", path: "comics" },
  { label: "The Math Doesn't Work", img: "image_c048a1c3.jpg", path: "comics" },
  { label: "Refugee Crisis", img: "image_c3e453c3.jpg", path: "comics" },
  { label: "Political Paralysis — Truth Trials", img: "image_cf575801.jpg", path: "comics" },
  { label: "What You Can Do", img: "image_cfba5ff5.jpg", path: "comics" },
  { label: "The Paperwork Cave", img: "image_d1ccce6d.jpg", path: "comics" },
  { label: "Your Prior Finding Means Nothing", img: "image_d2670a96.jpg", path: "comics" },
  { label: "Power of Documentation", img: "image_d5d6321c.jpg", path: "comics" },
  { label: "Documentation Compared", img: "image_e5ec5911.jpg", path: "comics" },
  { label: "Just Climb", img: "image_ec0be382.jpg", path: "comics" },
  { label: "My Story Is Evidence", img: "image_f01eb275.jpg", path: "comics" },
  { label: "Community Hall", img: "image_f668ace4.jpg", path: "comics" }
];

// ─── Render: Flyer grid ───
function renderFlyers() {
  const grid = document.getElementById("flyer-grid");
  if (!grid) return;
  grid.innerHTML = FLYERS.map(f => {
    const folder = f.path || "posters";
    const url = `/pdfs/flyers/${folder}/${encodeURIComponent(f.img)}`;
    return `
    <a class="flyer" href="${url}" target="_blank" rel="noopener" aria-label="${f.label} flyer">
      <img src="${url}" alt="${f.label} flyer" loading="lazy">
      <span class="flyer-label">${f.label}</span>
    </a>
  `;
  }).join("");
}

// ─── Render: Reports grid ───
function renderReports() {
  const grid = document.getElementById("reports-grid");
  if (!grid) return;
  grid.innerHTML = REPORTS.map(r => `
    <article class="card">
      <p class="card-num">Report ${r.num}</p>
      <h3 class="card-title">${r.title}</h3>
      <p class="card-desc">${r.desc}</p>
      <div class="card-actions">
        <a class="view" href="/pdfs/adsb-report-series/${encodeURIComponent(r.file)}" target="_blank" rel="noopener">View →</a>
        <a download href="/pdfs/adsb-report-series/${encodeURIComponent(r.file)}">Download</a>
      </div>
    </article>
  `).join("");
}

// ─── Render: Document library (filterable) ───
function renderDocs(filter = "all") {
  const grid = document.getElementById("doc-grid");
  if (!grid) return;
  const docs = filter === "all" ? DOCUMENTS : DOCUMENTS.filter(d => d.cat === filter);
  grid.innerHTML = docs.map(d => `
    <article class="card" data-cat="${d.cat}">
      <p class="card-num">${categoryLabel(d.cat)}</p>
      <h3 class="card-title">${d.title}</h3>
      <p class="card-desc">${d.desc}</p>
      <div class="card-actions">
        <a class="view" href="${encodePath(d.file)}" target="_blank" rel="noopener">View →</a>
        <a download href="${encodePath(d.file)}">Download</a>
      </div>
      ${d.extra ? `<p class="card-extra">${d.extra}</p>` : ""}
    </article>
  `).join("");
}

function encodePath(path) {
  return path.split("/").map((seg, i) => i === 0 ? seg : encodeURIComponent(seg)).join("/");
}

function categoryLabel(cat) {
  const map = {
    compilations: "Compilation",
    indigenous: "Indigenous Disability",
    systematic: "Systematic Exclusion",
    compound: "Compound Failure",
    plain: "Plain Language",
    legal: "Legal Analysis",
    briefs: "Sourced Brief",
    new: "New ADSB Doc",
    info: "Information Asymmetry",
    access: "Access Gap"
  };
  return map[cat] || cat;
}

// ─── Render: Provincial grid ───
function renderProvinces() {
  const grid = document.getElementById("prov-grid");
  if (!grid) return;
  grid.innerHTML = PROVINCES.map(p => `
    <a class="prov" href="/pdfs/fillable/${encodeURIComponent(p.file)}" target="_blank" rel="noopener">
      <span class="prov-name">${p.name}</span>
      <span class="prov-num">${p.num}</span>
    </a>
  `).join("");
}

// ─── Render: Ministerial Correspondence grid ───
function renderMinisterial() {
  const grid = document.getElementById("ministerial-grid");
  if (!grid) return;
  grid.innerHTML = MINISTERIAL.map(m => `
    <article class="card">
      <p class="card-num">${m.type} · ${m.date}</p>
      <h3 class="card-title">${m.title}</h3>
      <p class="card-desc">${m.desc}</p>
      <div class="card-actions">
        <a class="view" href="/pdfs/ministerial-correspondence/${encodeURIComponent(m.file)}" target="_blank" rel="noopener">View →</a>
        <a download href="/pdfs/ministerial-correspondence/${encodeURIComponent(m.file)}">Download</a>
      </div>
    </article>
  `).join("");
}

// ─── Render: Audio recordings (grouped by series) ───
function renderAudio() {
  const grid = document.getElementById("audio-grid");
  if (!grid) return;
  const baseUrl = window.location.origin;
  grid.innerHTML = AUDIO_SERIES.map(series => `
    <section class="audio-series" id="audio-${series.id}">
      <header class="audio-series-head">
        <h3 class="audio-series-title">${series.title}</h3>
        <p class="audio-series-blurb">${series.blurb}</p>
        <p class="audio-series-count"><span class="audio-count-pill">${series.items.length} recordings</span></p>
      </header>
      <ol class="audio-list">
        ${series.items.map(item => {
          const path = `/audio/${series.folder}/${encodeURIComponent(item.file)}`;
          const fullUrl = `${baseUrl}${path}`;
          return `
            <li class="audio-row">
              <div class="audio-meta-line">
                <span class="audio-num">${item.num}</span>
                <span class="audio-title">${item.title}</span>
              </div>
              <audio class="audio-player" controls preload="none" src="${path}">
                Your browser does not support the audio element. <a href="${path}">Download the file</a>.
              </audio>
              <div class="audio-actions">
                <a class="btn btn-ghost-sm audio-download" download href="${path}" aria-label="Download ${item.title}">Download</a>
                <button class="btn btn-ghost-sm audio-share" type="button" data-share-url="${fullUrl}" data-share-title="${item.title}" aria-label="Share ${item.title}">Share</button>
                <span class="audio-share-status" role="status" aria-live="polite"></span>
              </div>
            </li>
          `;
        }).join("")}
      </ol>
    </section>
  `).join("");
  bindAudioShare();
}

// ─── Audio share: Web Share API with copy-link fallback ───
function bindAudioShare() {
  document.querySelectorAll(".audio-share").forEach(btn => {
    btn.addEventListener("click", async () => {
      const url = btn.dataset.shareUrl;
      const title = btn.dataset.shareTitle;
      const status = btn.parentElement.querySelector(".audio-share-status");
      const showStatus = (msg) => {
        if (!status) return;
        status.textContent = msg;
        clearTimeout(btn._statusTimer);
        btn._statusTimer = setTimeout(() => { status.textContent = ""; }, 2400);
      };
      // Try Web Share API first (mobile + modern browsers)
      if (navigator.share) {
        try {
          await navigator.share({
            title: `The Alberta Disability System Breakdown — ${title}`,
            text: `${title} — audio recording from The Alberta Disability System Breakdown.`,
            url: url
          });
          return;
        } catch (err) {
          // User cancelled — silent return; fall through to copy only on real failure
          if (err && err.name === "AbortError") return;
        }
      }
      // Fallback: copy link to clipboard
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(url);
          showStatus("Link copied");
        } else {
          // Last-resort fallback: temporary textarea
          const ta = document.createElement("textarea");
          ta.value = url;
          ta.style.position = "fixed";
          ta.style.opacity = "0";
          document.body.appendChild(ta);
          ta.select();
          document.execCommand("copy");
          document.body.removeChild(ta);
          showStatus("Link copied");
        }
      } catch (e) {
        showStatus("Could not copy — long-press the Download link instead");
      }
    });
  });
}

// ─── Filter chip behaviour ───
function bindFilterChips() {
  const chips = document.querySelectorAll(".chip");
  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      chips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      renderDocs(chip.dataset.filter);
      // Smooth-scroll to keep chips visible
      chip.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    });
  });
}

// ─── Mobile nav toggle ───
function bindNavToggle() {
  const toggle = document.querySelector(".nav-toggle");
  if (!toggle) return;
  toggle.addEventListener("click", () => {
    const open = document.body.classList.toggle("nav-open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
  document.querySelectorAll(".primary-nav a").forEach(a => {
    a.addEventListener("click", () => {
      document.body.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

// ─── Active section highlight on scroll ───
function bindScrollSpy() {
  const navLinks = document.querySelectorAll(".primary-nav a");
  const sections = Array.from(navLinks)
    .map(a => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);

  if (!("IntersectionObserver" in window) || sections.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(a => {
          a.classList.toggle("current", a.getAttribute("href") === `#${id}`);
        });
      }
    });
  }, { rootMargin: "-40% 0px -55% 0px", threshold: 0 });

  sections.forEach(s => observer.observe(s));
}

// ─── Init ───
document.addEventListener("DOMContentLoaded", () => {
  renderFlyers();
  renderReports();
  renderDocs("all");
  renderProvinces();
  renderMinisterial();
  renderAudio();
  bindFilterChips();
  bindNavToggle();
  bindScrollSpy();
});
