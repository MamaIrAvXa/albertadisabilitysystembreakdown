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
  { cat: "info", title: "Information Asymmetry — Plain Language", desc: "Plain-language companion document.", file: "/pdfs/information-asymmetry/1_Information_Asymmetry_Plain_Language_Companion.pdf" }
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
  { label: "DTC Loan, Not a Grant", img: "Flyer_DTC_Loan_Not_Grant.png" }
];

// ─── Render: Flyer grid ───
function renderFlyers() {
  const grid = document.getElementById("flyer-grid");
  if (!grid) return;
  grid.innerHTML = FLYERS.map(f => `
    <a class="flyer" href="/pdfs/flyers/posters/${encodeURIComponent(f.img)}" target="_blank" rel="noopener" aria-label="${f.label} flyer">
      <img src="/pdfs/flyers/posters/${encodeURIComponent(f.img)}" alt="${f.label} flyer" loading="lazy">
      <span class="flyer-label">${f.label}</span>
    </a>
  `).join("");
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
    info: "Information Asymmetry"
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
  bindFilterChips();
  bindNavToggle();
  bindScrollSpy();
});
