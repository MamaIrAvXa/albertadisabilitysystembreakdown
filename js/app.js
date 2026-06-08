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
  { num: "09b", title: "Intergenerational Family Report", desc: "How AISH and ADAP failures cascade across generations within a disabled family — what the parent carries, what the child inherits, and what the system never accounts for.", file: "9b_Intergenerational_Family_Report.pdf" },
  { num: "09c", title: "Intergenerational Contradiction Report", desc: "Companion to 09b. The government's stated position on intergenerational disability versus the documented record.", file: "9c_Intergenerational_Contradiction_Report.pdf" },
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
// To mark something as a new release, add a `released: "YYYY-MM-DD"` field.
// Items with a release date in the last 7 days will show up in the "Just Dropped" section.
// After 7 days they roll off Just Dropped automatically and stay in the main library.
const DOCUMENTS = [
  // ─── May 2026 ADAP Release (forensic + plain-language) ───
  { cat: "may2026", title: "What Dropped This Week — May 12, 2026 ADAP Release", desc: "Information analysis of the May 12, 2026 ADAP-to-AISH final regulations. Documents the 50,000/30,000 split, the locked-in $1,740 base benefit, the 88% cohabitation reduction, and the contestable claims on the public record.", file: "/pdfs/may-2026-adap/ADSB_What_Dropped_This_Week_May2026.pdf", released: "2026-05-20" },
  { cat: "may2026", title: "What Dropped This Week — Plain Language Edition", desc: "Plain-language companion to What Dropped This Week. Explains the May 12, 2026 ADAP regulations and what they mean for AISH recipients in accessible language.", file: "/pdfs/may-2026-adap/ADSB_What_Dropped_This_Week_PlainLanguage_May2026.pdf", released: "2026-05-20" },
  { cat: "may2026", title: "The Engagement Page Record — A Forensic Timeline", desc: "Primary-source forensic analysis of nine Wayback Machine snapshots of the alberta.ca ADAP engagement page from August 2025 through April 2026. Documents the active-to-retrospective rewrite, the survey-date discrepancy, and the noarchive blackout.", file: "/pdfs/may-2026-adap/ADSB_Engagement_Page_Record_May2026.pdf", released: "2026-05-20" },
  { cat: "may2026", title: "The Engagement Page Record — Plain Language Edition", desc: "Plain-language companion to the forensic timeline. What the engagement page used to say, what it says today, and what changed without public notice.", file: "/pdfs/may-2026-adap/ADSB_Engagement_Page_Record_PlainLanguage_May2026.pdf", released: "2026-05-20" },

  // Compilations
  { cat: "compilations", title: "Complete Report Series Compilation", desc: "All 19 ADSB reports in a single PDF.", file: "/pdfs/adsb-report-series/0_Complete_Report_Series_Compilation.pdf" },
  { cat: "compilations", title: "Building Up — Alberta Accessibility and Inclusion Blueprint (Complete)", desc: "The full proposed legislative framework for Alberta accessibility and inclusion legislation. Three Parts. Technical legal drafting.", file: "/pdfs/building-up/0_Building_Up_May2026.pdf" },
  { cat: "compilations", title: "The Cage Doesn't End — Complete Compilation", desc: "All four parts of The Cage Doesn't End in a single PDF — the full structural argument and source record.", file: "/pdfs/cage-doesnt-end/0_Cage_Doesnt_End_Compilation_May2026.pdf" },
  { cat: "compilations", title: "Indigenous Disability Alberta — Complete Collection", desc: "All 17 sections in one document. The full Indigenous Disability series, 191 pages.", file: "/pdfs/indigenous-sections/0_Indigenous_Disability_Alberta_COMPLETE_Collection.pdf" },
  { cat: "compilations", title: "Systematic Exclusion Alberta — Complete Collection", desc: "All 15 sections in one document. The full Systematic Exclusion series, 211 pages.", file: "/pdfs/systematic-exclusion-sections/0_Systematic_Exclusion_Alberta_COMPLETE_Collection.pdf" },
  { cat: "compilations", title: "Compound Failure Brief — Complete", desc: "The full synthesis brief tying all four pillars together.", file: "/pdfs/compound-failure/0_Compound_Failure_Brief_COMPLETE.pdf" },
  { cat: "compilations", title: "Information Asymmetry Report", desc: "What disabled Albertans are being asked to decide without the information they need to decide it.", file: "/pdfs/information-asymmetry/0_Information_Asymmetry_Report.pdf" },

  // From Greatness to Betrayal — Alberta's Public Fall from Grace, 1979–2026
  { cat: "greatness", title: "From Greatness to Betrayal — Complete Edition", desc: "The full 47-year cross-party record of Alberta disability policy across nine government eras: Lougheed (foundations), Getty, Klein, Stelmach, Late PC (Redford/Hancock/Prentice), Notley, Kenney, Smith, and the synthesis. Nine phases, nine governments, one documented record. Every claim anchored to primary sources — Hansard, government records, contemporaneous reporting, and peer-reviewed academic research. The standard applied equally to PC, NDP, and UCP governments alike: what each inherited, what each changed, what Albertans lost and gained as a result.", file: "/pdfs/adsb-from-greatness-to-betrayal/ADSB_From_Greatness_to_Betrayal_Complete_May2026.pdf", released: "2026-05-26" },
  { cat: "greatness", title: "Phase 1 — Tribute, Methodology, and the Lougheed Era (1971–1985)", desc: "Opens with a tribute to Peter Lougheed, the premier who founded the assured-income-for-the-severely-handicapped program in 1979 and who spent the last decade of his life publicly criticising the trajectory his successors set. Establishes the methodology applied equally to every era that follows, presents the comparative summary 1971–2026, and documents the Lougheed era in full.", file: "/pdfs/adsb-from-greatness-to-betrayal/ADSB_From_Greatness_to_Betrayal_Phase1.pdf" },
  { cat: "greatness", title: "Phases 1 & 2 Combined — Foundations through the Getty Era (1971–1992)", desc: "A combined-file option covering Phase 1 (Tribute, methodology, Lougheed) and Phase 2 (Getty era) in a single PDF for readers who want the foundation period and the first successor era together.", file: "/pdfs/adsb-from-greatness-to-betrayal/ADSB_From_Greatness_to_Betrayal_Phase1_TributeAndLougheed.pdf" },
  { cat: "greatness", title: "Phase 2 — The Getty Era (1985–1992)", desc: "The first successor government. What the Getty era inherited from Lougheed, what it preserved, and where the trajectory began to shift. Bibliography of Phase Two sources included.", file: "/pdfs/adsb-from-greatness-to-betrayal/ADSB_From_Greatness_to_Betrayal_Phase2_GettyEra.pdf" },
  { cat: "greatness", title: "Phase 3 — The Klein Era (1992–2006)", desc: "Fourteen years of fiscal restructuring and the October 2004 election in which AISH itself became a contested issue. The era in which the post-foundation pattern hardened. Bibliography of Phase Three sources included.", file: "/pdfs/adsb-from-greatness-to-betrayal/ADSB_From_Greatness_to_Betrayal_Phase3_KleinEra.pdf" },
  { cat: "greatness", title: "Phase 4 — The Stelmach Era (2006–2011)", desc: "What the Stelmach government established, what it took or reduced, and how the disability framework was positioned by the end of his term. Bibliography of Phase Four sources included.", file: "/pdfs/adsb-from-greatness-to-betrayal/ADSB_From_Greatness_to_Betrayal_Phase4_StelmachEra.pdf" },
  { cat: "greatness", title: "Phase 5 — The Late PC Period (Redford, Hancock, Prentice)", desc: "The final years of unbroken Progressive Conservative government — three premiers in rapid succession and the policy environment they left for the 2015 election. Bibliography of Phase Five sources included.", file: "/pdfs/adsb-from-greatness-to-betrayal/ADSB_From_Greatness_to_Betrayal_Phase5_LatePCPeriod.pdf" },
  { cat: "greatness", title: "Phase 6 — The Notley Era (2015–2019)", desc: "The single-term NDP government. What was inherited from the late PC period, what was changed, what was maintained, and what the disability community gained or did not gain. Standard applied equally. Bibliography of Phase Six sources included.", file: "/pdfs/adsb-from-greatness-to-betrayal/ADSB_From_Greatness_to_Betrayal_Phase6_NotleyEra.pdf" },
  { cat: "greatness", title: "Phase 7 — The Kenney Era (2019–2022)", desc: "The first UCP government. The de-indexation decision, the AISH freeze, and the policy trajectory toward ADAP. Bibliography of Phase Seven sources included.", file: "/pdfs/adsb-from-greatness-to-betrayal/ADSB_From_Greatness_to_Betrayal_Phase7_KenneyEra.pdf" },
  { cat: "greatness", title: "Phase 8 — The Smith Era (2022–2026)", desc: "Current government. Bill 12, the Citizens Appeal Panel elimination, the cabinet shuffle of May 21, 2026, and the AISH-to-ADAP transition taking effect July 1, 2026. The era this campaign is documenting in real time. Bibliography of Phase Eight sources included.", file: "/pdfs/adsb-from-greatness-to-betrayal/ADSB_From_Greatness_to_Betrayal_Phase8_SmithEra.pdf" },
  { cat: "greatness", title: "Phase 9 — Synthesis (1971–2026)", desc: "The cross-comparative analysis drawing trends across all eight eras and stating the document's thesis in full. The 47-year arc, the cross-party patterns, and what the documented record establishes about disability policy in Alberta.", file: "/pdfs/adsb-from-greatness-to-betrayal/ADSB_From_Greatness_to_Betrayal_Phase9_Synthesis.pdf", released: "2026-05-26" },

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
  { cat: "plain", title: "Your Right to Appeal — Plain Language", desc: "Plain-language explanation of the right to appeal an AISH decision: what counts as an appealable decision, the 30-day deadline, and how to file before the window closes.", file: "/pdfs/plain-language/Your_Right_to_Appeal_PlainLanguage_June2026.pdf", released: "2026-06-03" },
  { cat: "plain", title: "Appeal vs. Reassessment — A Guide", desc: "Plain-language guide to the two routes: appealing a decision versus requesting a reassessment to stay on AISH — which one fits your situation, and the clock on each.", file: "/pdfs/plain-language/Appeal_vs_Reassessment_Guide_June2026.pdf", released: "2026-06-03" },

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
  { cat: "briefs", title: "Easier for Whom? The Alberta.ca Account", desc: "The alberta.ca account requirement and what it costs disabled Albertans trying to file an ATIA personal information request. Filed institutionally May 2026.", file: "/pdfs/sourced-briefs/ADSB_Easier_For_Whom_AlbertaCa_Account_May2026.pdf" },
  { cat: "briefs", title: "Promised Supports, Shifted Responsibility", desc: "ADAP expects recipients to work — but the supports that make work possible (transportation, childcare, mental-health help, delivered through the $185M WorkFirst Alberta program) are described everywhere as supports that “can be provided,” never as guaranteed entitlements, with childcare capacity that does not yet exist. A firm work obligation set against discretionary supports. Sourced, with practical advice: request transportation supports and DRES by name and get every commitment recorded in writing on your file.", file: "/pdfs/sourced-briefs/ADSB_Promised_Supports_Shifted_Responsibility.pdf", released: "2026-06-06" },

  // New ADSB docs
  { cat: "may2026", title: "Who Made the Determination?", desc: "A letter changed your AISH status. The government says no decision was made. Both cannot be true — and either answer is a problem. Administrative-law analysis of the AISH-to-ADAP placement letters. The fork: either a determination was made (then who, under what authority, and how is it appealed?), or no determination was made (in which case the program status of roughly 79,290 disabled Albertans was altered without one). Includes the specific written question every recipient is entitled to put to the office that issued their letter.", file: "/pdfs/may-2026-adap/ADSB_Who_Made_The_Determination_May2026.pdf", released: "2026-05-30" },
  { cat: "may2026", title: "ADAP Is Welfare-to-Work for Disabled Albertans", desc: "Structural analysis of the architecture under ADAP's language. Strip away the framing and what remains is the importation of Alberta's existing welfare-to-work system — the Income Support employability tiers (Expected to Work / Barriers to Full Employment) — onto disability income. Maps Income Support's conditional-payment mechanism onto ADAP's service-navigator apparatus, documents the contradiction at the centre (AISH eligibility is defined as inability to work; ADAP is built around employment activation), and explains why \"they'll change the criteria\" is structurally true, not just anecdotally.", file: "/pdfs/may-2026-adap/ADSB_ADAP_Welfare_to_Work_May2026.pdf", released: "2026-05-30" },
  { cat: "may2026", title: "Cut From the Top — ADAP and Canada's 2025 Disability-Poverty Record", desc: "Tests the government's \"among the highest in the country\" claim against the Disability Poverty Report Card 2025 (Campaign 2000 + Disability Without Poverty, drawing on Statistics Canada and Maytree). AISH was actually the highest provincial disability income in Canada ($1,978/month all-in) and one of only two programs that lifted a single recipient clear of deep poverty. ADAP's permanent $1,740 sits below the deep-poverty line in both Calgary and Edmonton. Alberta is moving roughly 50,000 recipients off the highest disability income in the country, onto a rate the country's own poverty measure places in deep poverty.", file: "/pdfs/may-2026-adap/ADSB_Cut_From_The_Top_May2026.pdf", released: "2026-05-30" },
  { cat: "may2026", title: "The Government Said PDD Was Exempt. Then It Wasn't.", desc: "A documented breach of the May 12, 2026 ADAP placement criteria. The first auto-retention category named in the government's fact sheet was Persons with Developmental Disabilities (PDD) — approximately 30,000 Albertans expected to remain on AISH. Within fifteen days, three PDD-eligible Albertans documented being transitioned to ADAP anyway. One photographed the placement letter. A second was told by AISH staff they were getting \"a lot of calls about this.\" A third documented a live phone call (viewed ~1,700 times in 37 minutes) in which staff denied that the published exemption exists at all. The breach is operational, documented, and ongoing.", file: "/pdfs/may-2026-adap/ADSB_PDD_Was_Exempt_Then_It_Wasnt_May2026.pdf", released: "2026-05-28" },
  { cat: "new", title: "73 Reviews a Day", desc: "What it would take to actually re-review 79,290 cases by July 1, 2026 — and what it doesn't take.", file: "/pdfs/new-adsb-docs/ADSB_73_Reviews_A_Day_April2026.pdf" },
  { cat: "may2026", title: "Do You Know Your New Minister? — Nathan Neudorf", desc: "Documented public record of Nathan Neudorf, sworn in as Minister of Assisted Living and Social Services on May 21, 2026 — 41 days before mandatory ADAP transition. Eight pages, fully sourced to The Narwhal, CBC News, Lethbridge Herald, Elections Alberta, and the Minister's own published statements. Companion to the April 2026 Jason Nixon background file (Report 01). Five incidents documented: the AESO renewables pause attribution, the Pembina report dismissals, the 40% land restriction, the inactive recall campaign, and the May 9 ADAP op-ed.", file: "/pdfs/may-2026-adap/ADSB_Do_You_Know_Minister_Neudorf.pdf", released: "2026-05-22" },
  { cat: "may2026", title: "Do You Know Your Minister? — Jason Nixon (Updated)", desc: "May 2026 standalone update on Jason Nixon, promoted to President of Treasury Board and Minister of Finance on May 21, 2026 — 41 days before the ADAP transition he designed. Companion to the new Neudorf background file. The original April 2026 Report 01 stays on the record as Nixon's ALSS-era documentation; this is the post-shuffle update.", file: "/pdfs/may-2026-adap/ADSB_Do_You_Know_Minister_Nixon.pdf", released: "2026-05-23" },
  { cat: "may2026", title: "Neudorf — Print-Ready Poster (PDF)", desc: "Single-page print-ready PDF of the Minister Neudorf accountability poster. Five incidents on one page, sourced. Designed for bulletin boards, kitchen tables, and printers. The PNG thumbnail of this poster appears in the Flyers section above.", file: "/pdfs/may-2026-adap/ADSB_Do_You_Know_Neudorf_Flyer.pdf", released: "2026-05-23" },
  { cat: "may2026", title: "Nixon — Print-Ready Poster (PDF)", desc: "Single-page print-ready PDF of the Minister Nixon accountability poster, updated for the cabinet shuffle. The PNG thumbnail appears in the Flyers section above.", file: "/pdfs/may-2026-adap/ADSB_Do_You_Know_Nixon_Flyer.pdf", released: "2026-05-23" },
  { cat: "may2026", title: "Income Crossover Analysis — Revised Edition (May 2026)", desc: "Revised on the government's own published numbers. Incorporates the May 12, 2026 ADAP Fact Sheet, adds the 88% cohabitation rule household-income analysis (up to $14,611/year loss for two-recipient households once the CDB clawback is layered on), and confirms the April 2026 modelling against the government's now-published rules. Cohabitation analysis contributed by Jon Auger (Rising Contributor).", file: "/pdfs/new-adsb-docs/ADSB_Income_Crossover_Analysis_RevisedMay2026.pdf", released: "2026-05-21" },
  { cat: "may2026", title: "What's On The Shelf — Income, Exposure, and the Disability Community's Food Supply", desc: "A documentation piece extending the campaign's structural analysis to the food supply. The argument is narrow and sourced: AISH and ADAP income levels force consumption patterns that concentrate exposure to documented contaminants — heavy metals in rice and rice-based products, synthetic dyes regulated more strictly in comparable jurisdictions, additives associated with neurodevelopmental and behavioural effects — in the disability cohort the income framework defines. Not a piece about food choices. A piece about how disability income policy structurally allocates exposure burden to the population it serves. The shelf is what is on the shelf. The question of who lives on what the shelf contains is a question of income, not of choice.", file: "/pdfs/may-2026-adap/Whats_On_The_Shelf_May2026.pdf", released: "2026-05-28" },
  { cat: "may2026", title: "The Access Gap — The $200 Trap", desc: "How Alberta deducts $200 a month for the federal Canada Disability Benefit — including from people who never receive it — while removing the caseworkers who used to help them reach it. The DTC gateway needs a physician's signature in a province where 650,000 people have no family doctor, with unregulated fees as high as $700; the $200 penalty applies before any benefit is approved, and even if it is denied; and the government's fee 'help' is a loan the recipient repays. Third in the Access Gap series, companion to Penalized for Non-Ability.", file: "/pdfs/may-2026-adap/Access_Gap_The_200_Trap_May2026.pdf" },
  { cat: "may2026", title: "Appeal or Reassess? Know Which One You Need", desc: "Plain-language guide to two routes with two different clocks. Reassessment is the no-deadline route to keep AISH; appeal is the 30-day route to challenge a decision — and the right to contest the move as an AISH decision closes July 2, 2026. Explains how to read your letter to tell which one your situation needs, and what to do before the window shuts.", file: "/pdfs/may-2026-adap/Appeal_or_Reassess_PlainLanguage_June2026.pdf" },
  { cat: "may2026", title: "Designed Based on Input?", desc: "Government-facing evidentiary brief setting the claim that ADAP was 'thoughtfully designed based on input from Albertans with disabilities' beside the public record of that consultation — an engagement page rewritten into an archive within a week of closing, its survey end date quietly changed, frozen on 'results under review' for 206 days through the legislative period it was said to inform, then blocked from independent archiving. On May 12, 2026 the regulation, the input claim, and the transition letters all landed on one day.", file: "/pdfs/may-2026-adap/ADSB_Designed_Based_On_Input_June2026.pdf" },
  { cat: "may2026", title: "The Heritage Fund — A Record of Choices", desc: "Fiscal analysis from the government's own numbers: in the same years it cut, clawed back, and restructured disability income, Alberta deposited billions into the Heritage Savings Trust Fund, kept the rule retaining every dollar it earns, built a Crown corporation to govern it, and reaffirmed a $250 billion by 2050 target it says holds with no new deposits — while moving 79,290 disabled Albertans onto a lower benefit. Not an argument to raid the Fund; a record of priorities.", file: "/pdfs/may-2026-adap/ADSB_Heritage_Fund_Choices_June2026.pdf" },
  { cat: "may2026", title: "Paid to Govern, Paid to Survive", desc: "What Alberta pays the people who govern, set beside what it provides the disabled Albertans it governs. The same statute — Bill 12 — added a $6,000/year allowance for eight MLAs effective June 1, 2026 and cut roughly 79,000 disabled Albertans by $200/month effective July 1, with no right to appeal the move. The pay gap, the rent math, the 54-day legislative year, an 89% jump in administration cost to deliver a smaller benefit, and the government’s own travel-and-expense disclosure — all sourced.", file: "/pdfs/may-2026-adap/ADSB_Paid_To_Govern_Paid_To_Survive.pdf", released: "2026-06-03" },
  { cat: "new", title: "Income Crossover Analysis — Original Edition (April 2026)", desc: "The predecessor document. Written before the government published full ADAP rules, this is the original modelling — Model A and Model B — that the May 2026 revision builds on. Kept on the record for the methodology and the audit trail: the math was done with the data available, and when the May 12, 2026 fact sheet was published, the anchor figures held.", file: "/pdfs/new-adsb-docs/ADSB_Income_Crossover_Analysis_April2026.pdf" },
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
  { cat: "wda", title: "What Disability Actually Means — Plain Language", desc: "Plain-language companion to the 36-page reference document. 18 pages, illustrated. Built on the closing argument: it takes one accident, one diagnosis. Disability does not discriminate.", file: "/pdfs/what-disability-actually-means/What_Disability_Actually_Means_Plain_Language.pdf", extra: 'Individual illustrations also available in <a href="#flyers">Flyers</a> — free for protest signs, social posts, personal use.' },

  // Building Up — Alberta Accessibility and Inclusion Blueprint
  { cat: "building", title: "Building Up — One-Page Introduction", desc: "Plain-language entry point. What Building Up is, what it asks for, why it reads the way it does. One page. Read this first.", file: "/pdfs/building-up/ADSB_BuildingUp_OnePage_Introduction_May2026.pdf" },
  { cat: "building", title: "Building Up — What This Would Mean for Me", desc: "Plain-language companion. Eight everyday scenarios — episodic, fluctuating, invisible, intersecting — translated from the legislative framework into what it could mean in lived experience. Not a paraphrase. A parallel resource.", file: "/pdfs/building-up/ADSB_BuildingUp_What_This_Means_For_Me_May2026.pdf" },
  { cat: "building", title: "Part 1 — Section 1.1", desc: "Foundational definitions and scope of the proposed legislation.", file: "/pdfs/building-up/Building_Up_Part1_Section1.1.pdf" },
  { cat: "building", title: "Part 1 — Section 1.2", desc: "Substantive equality framework.", file: "/pdfs/building-up/Building_Up_Part1_Section1.2.pdf" },
  { cat: "building", title: "Part 1 — Section 1.3", desc: "Social model of disability — the shift from medical-model gatekeeping.", file: "/pdfs/building-up/Building_Up_Part1_Section1.3.pdf" },
  { cat: "building", title: "Part 1 — Section 1.3a", desc: "Section 1.3 amendment — extended treatment of social-model framing.", file: "/pdfs/building-up/Building_Up_Part1_Section1.3a.pdf" },
  { cat: "building", title: "Part 1 — Section 1.4", desc: "AISH eligibility framework, severity-and-permanence threshold, and the gap.", file: "/pdfs/building-up/Building_Up_Part1_Section1.4.pdf" },
  { cat: "building", title: "Part 1 — Section 1.5", desc: "Mental health disability and episodic conditions under the proposed framework.", file: "/pdfs/building-up/Building_Up_Part1_Section1.5.pdf" },
  { cat: "building", title: "Part 1 — Section 1.6", desc: "Invisible disability and the operational implications of recognition.", file: "/pdfs/building-up/Building_Up_Part1_Section1.6.pdf" },
  { cat: "building", title: "Part 1 — Section 1.7", desc: "Intersecting identities and how disability operates across them.", file: "/pdfs/building-up/Building_Up_Part1_Section1.7.pdf" },
  { cat: "building", title: "Part 1 — Section 1.8", desc: "International human rights framework — UN CRPD operational integration.", file: "/pdfs/building-up/Building_Up_Part1_Section1.8.pdf" },
  { cat: "building", title: "Part 1 — Section 1.9", desc: "Federal accessibility framework — Accessible Canada Act and provincial alignment.", file: "/pdfs/building-up/Building_Up_Part1_Section1.9.pdf" },
  { cat: "building", title: "Part 1 — Section 1.10", desc: "Constitutional foundations — Charter Section 15 and substantive equality.", file: "/pdfs/building-up/Building_Up_Part1_Section1.10.pdf" },
  { cat: "building", title: "Part 1 — Source Index", desc: "All sources cited in Part 1, organized by section.", file: "/pdfs/building-up/Building_Up_Part1_SourceIndex.pdf" },
  { cat: "building", title: "Part 2 — Section 2.1", desc: "Categorical-program architecture vs. substantive-standards architecture.", file: "/pdfs/building-up/Building_Up_Part2_Section2.1.pdf" },
  { cat: "building", title: "Part 2 — Section 2.2", desc: "AISH operational analysis — what the program does and does not deliver.", file: "/pdfs/building-up/Building_Up_Part2_Section2.2.pdf" },
  { cat: "building", title: "Part 2 — Section 2.3", desc: "PDD operational analysis — eligibility framework and access barriers.", file: "/pdfs/building-up/Building_Up_Part2_Section2.3.pdf" },
  { cat: "building", title: "Part 2 — Section 2.4", desc: "FSCD operational analysis — children's services and the family burden.", file: "/pdfs/building-up/Building_Up_Part2_Section2.4.pdf" },
  { cat: "building", title: "Part 2 — Section 2.5", desc: "ADAP operational analysis — the July 2026 transition framework.", file: "/pdfs/building-up/Building_Up_Part2_Section2.5.pdf" },
  { cat: "building", title: "Part 2 — Section 2.6", desc: "Health benefits and prescription coverage operational gaps.", file: "/pdfs/building-up/Building_Up_Part2_Section2.6.pdf" },
  { cat: "building", title: "Part 2 — Section 2.7", desc: "Education and accessibility — inclusive education operational framework.", file: "/pdfs/building-up/Building_Up_Part2_Section2.7.pdf" },
  { cat: "building", title: "Part 2 — Section 2.7a", desc: "Section 2.7 amendment — extended treatment of inclusive education.", file: "/pdfs/building-up/Building_Up_Part2_Section2.7a.pdf" },
  { cat: "building", title: "Part 2 — Section 2.8", desc: "The substantive-standards architecture — what the proposed legislation operates within.", file: "/pdfs/building-up/Building_Up_Part2_Section2.8.pdf" },
  { cat: "building", title: "Part 2 — Source Index", desc: "All sources cited in Part 2, organized by section.", file: "/pdfs/building-up/Building_Up_Part2_SourceIndex.pdf" },
  { cat: "building", title: "Part 3 — Section 3.1", desc: "The substantive-equality principle in proposed legislative form.", file: "/pdfs/building-up/Building_Up_Part3_Section3.1.pdf" },
  { cat: "building", title: "Part 3 — Section 3.2", desc: "The definition of disability — operational provisions.", file: "/pdfs/building-up/Building_Up_Part3_Section3.2.pdf" },
  { cat: "building", title: "Part 3 — Section 3.3", desc: "The definition of barrier — operational provisions.", file: "/pdfs/building-up/Building_Up_Part3_Section3.3.pdf" },
  { cat: "building", title: "Part 3 — Section 3.4", desc: "The accessibility and inclusion duty — operational provisions.", file: "/pdfs/building-up/Building_Up_Part3_Section3.4.pdf" },
  { cat: "building", title: "Part 3 — Section 3.4 (Component 9)", desc: "Section 3.4 component nine — extended treatment of duty implementation.", file: "/pdfs/building-up/Building_Up_Part3_Section3.4_Component9.pdf" },
  { cat: "building", title: "Part 3 — Section 3.5", desc: "Consultation and engagement framework — operational provisions.", file: "/pdfs/building-up/Building_Up_Part3_Section3.5.pdf" },
  { cat: "building", title: "Part 3 — Section 3.6", desc: "Indigenous-disability provisions — Treaty 6, Treaty 7, Treaty 8, Métis Settlements.", file: "/pdfs/building-up/Building_Up_Part3_Section3.6.pdf" },
  { cat: "building", title: "Part 3 — Section 3.6 (Amendment)", desc: "Section 3.6 amendment — extended Indigenous-disability provisions.", file: "/pdfs/building-up/Building_Up_Part3_Section3.6_Amendment.pdf" },
  { cat: "building", title: "Part 3 — Section 3.7", desc: "Intersectional identity provisions — 2SLGBTQ+, racialized, newcomer disability.", file: "/pdfs/building-up/Building_Up_Part3_Section3.7.pdf" },
  { cat: "building", title: "Part 3 — Section 3.8", desc: "Enforcement and remedies — operational provisions.", file: "/pdfs/building-up/Building_Up_Part3_Section3.8.pdf" },
  { cat: "building", title: "Part 3 — Section 3.9", desc: "Implementation and transition provisions.", file: "/pdfs/building-up/Building_Up_Part3_Section3.9.pdf" },
  { cat: "building", title: "Part 3 — Section 3.10", desc: "Review, oversight, and accountability provisions.", file: "/pdfs/building-up/Building_Up_Part3_Section3.10.pdf" },
  { cat: "building", title: "Part 3 — Source Index", desc: "All sources cited in Part 3, organized by section.", file: "/pdfs/building-up/Building_Up_Part3_SourceIndex.pdf" },

  // The Cage Doesn't End
  { cat: "cage", title: "The Cage Doesn't End — Plain Language Guide", desc: "Plain-language version of the full series. Illustrated. 21 illustrations.", file: "/pdfs/cage-doesnt-end/ADSB_Cage_Doesnt_End_Plain_Language_Guide_May2026.pdf" },
  { cat: "cage", title: "Section 1.1", desc: "Opening — the structural cage and what it actually is.", file: "/pdfs/cage-doesnt-end/Cage_Doesnt_End_Section_1.1.pdf" },
  { cat: "cage", title: "Section 1.2", desc: "How the cage was built — administrative architecture.", file: "/pdfs/cage-doesnt-end/Cage_Doesnt_End_Section_1.2.pdf" },
  { cat: "cage", title: "Section 1.3", desc: "Income inadequacy as the first wall.", file: "/pdfs/cage-doesnt-end/Cage_Doesnt_End_Section_1.3.pdf" },
  { cat: "cage", title: "Section 1.4", desc: "Healthcare access as the second wall.", file: "/pdfs/cage-doesnt-end/Cage_Doesnt_End_Section_1.4.pdf" },
  { cat: "cage", title: "Section 1.5", desc: "Housing instability as the third wall.", file: "/pdfs/cage-doesnt-end/Cage_Doesnt_End_Section_1.5.pdf" },
  { cat: "cage", title: "Section 1.6", desc: "How the walls reinforce each other.", file: "/pdfs/cage-doesnt-end/Cage_Doesnt_End_Section_1.6.pdf" },
  { cat: "cage", title: "Section 2.1", desc: "Employment — the gate that's not actually open.", file: "/pdfs/cage-doesnt-end/Cage_Doesnt_End_Section_2.1.pdf" },
  { cat: "cage", title: "Section 2.2", desc: "Education and training — what the path actually requires.", file: "/pdfs/cage-doesnt-end/Cage_Doesnt_End_Section_2.2.pdf" },
  { cat: "cage", title: "Section 2.3", desc: "Transportation — the unspoken precondition.", file: "/pdfs/cage-doesnt-end/Cage_Doesnt_End_Section_2.3.pdf" },
  { cat: "cage", title: "Section 2.4", desc: "Caregiving and family burden as the displaced cost.", file: "/pdfs/cage-doesnt-end/Cage_Doesnt_End_Section_2.4.pdf" },
  { cat: "cage", title: "Section 2.5", desc: "Mental health and the compounding burden.", file: "/pdfs/cage-doesnt-end/Cage_Doesnt_End_Section_2.5.pdf" },
  { cat: "cage", title: "Section 2.6", desc: "Social isolation as a documented health outcome.", file: "/pdfs/cage-doesnt-end/Cage_Doesnt_End_Section_2.6.pdf" },
  { cat: "cage", title: "Section 2.7", desc: "Justice system contact and disability.", file: "/pdfs/cage-doesnt-end/Cage_Doesnt_End_Section_2.7.pdf" },
  { cat: "cage", title: "Section 2.8", desc: "End-of-life pressure and MAID under economic constraint.", file: "/pdfs/cage-doesnt-end/Cage_Doesnt_End_Section_2.8.pdf" },
  { cat: "cage", title: "Section 2.9", desc: "What the second tier of the cage costs in human terms.", file: "/pdfs/cage-doesnt-end/Cage_Doesnt_End_Section_2.9.pdf" },
  { cat: "cage", title: "Section 3.1", desc: "Intergenerational transmission — how the cage extends to the next generation.", file: "/pdfs/cage-doesnt-end/Cage_Doesnt_End_Section_3.1.pdf" },
  { cat: "cage", title: "Section 3.2", desc: "Children of disabled parents — documented outcomes.", file: "/pdfs/cage-doesnt-end/Cage_Doesnt_End_Section_3.2.pdf" },
  { cat: "cage", title: "Section 3.3", desc: "Disabled children of disabled parents — compounded barriers.", file: "/pdfs/cage-doesnt-end/Cage_Doesnt_End_Section_3.3.pdf" },
  { cat: "cage", title: "Section 3.4", desc: "What the data shows about the trajectory.", file: "/pdfs/cage-doesnt-end/Cage_Doesnt_End_Section_3.4.pdf" },
  { cat: "cage", title: "Section 4.1", desc: "What it would take to end the cage — structural change.", file: "/pdfs/cage-doesnt-end/Cage_Doesnt_End_Section_4.1.pdf" },
  { cat: "cage", title: "Section 4.2", desc: "Closing — the cage doesn't end on its own.", file: "/pdfs/cage-doesnt-end/Cage_Doesnt_End_Section_4.2.pdf" },
  { cat: "cage", title: "Source Index", desc: "All sources cited across the series, organized by section.", file: "/pdfs/cage-doesnt-end/Cage_Doesnt_End_Source_Index.pdf" },

  // Separation Risk Analysis
  { cat: "separation", title: "Separation Risk Analysis", desc: "If Alberta Separates: What Would Be Lost. A documentary analysis of sovereignty, foreign influence, and the stakes for the disability community. Grounded in publicly documented facts — APP-Trump meetings, $500B credit request, the April 2026 voter list breach, and what the disability community would lose under a constitutional reset. Connects to House of Commons petition e-7340.", file: "/pdfs/separation-risk/ADSB_Separation_Risk_Analysis_May2026.pdf" },
  { cat: "consent", title: "Consent Was Never the Point — Final Edition (June 2026)", desc: "The full historical analysis tracing Alberta's eugenic inheritance — from the 1928 Sexual Sterilization Act forward — to the institutional rebuild underway in Canadian disability policy today (1928–present). 97 pages; the canonical, complete edition.", file: "/pdfs/modern-day-eugenics/Consent_Was_Never_the_Point_FINAL_June2026.pdf" },
  { cat: "consent", title: "Consent Was Never the Point — Plain Language Guide", desc: "Plain-language companion to the series — the same history and argument in accessible language.", file: "/pdfs/modern-day-eugenics/Consent_Was_Never_the_Point_Plain_Language_Guide.pdf" },
  { cat: "consent", title: "Consent Was Never the Point — Addendum: The Architecture Returns", desc: "Addendum extending the analysis to the present-day disability-policy architecture.", file: "/pdfs/modern-day-eugenics/Consent_Was_Never_the_Point_ADDENDUM_The_Architecture_Returns_May2026.pdf" },
  { cat: "consent", title: "Consent Was Never the Point — Complete Edition (May 2026)", desc: "The complete May 2026 edition of the series, preserved as the prior full version.", file: "/pdfs/modern-day-eugenics/consent-was-never-the-point/Consent_Was_Never_the_Point_Complete_May2026.pdf" },
  { cat: "consent", title: "Consent Was Never the Point — Chapter 1", desc: "Chapter 1 of the series.", file: "/pdfs/modern-day-eugenics/consent-was-never-the-point/Consent_Was_Never_the_Point_Ch1_May2026.pdf" },
  { cat: "consent", title: "Consent Was Never the Point — Chapters 1–2", desc: "Cumulative build of the series covering chapters 1 through 2.", file: "/pdfs/modern-day-eugenics/consent-was-never-the-point/Consent_Was_Never_the_Point_Ch1-2_May2026.pdf" },
  { cat: "consent", title: "Consent Was Never the Point — Chapters 1–3", desc: "Cumulative build of the series covering chapters 1 through 3.", file: "/pdfs/modern-day-eugenics/consent-was-never-the-point/Consent_Was_Never_the_Point_Ch1-3_May2026.pdf" },
  { cat: "consent", title: "Consent Was Never the Point — Chapters 1–4", desc: "Cumulative build of the series covering chapters 1 through 4.", file: "/pdfs/modern-day-eugenics/consent-was-never-the-point/Consent_Was_Never_the_Point_Ch1-4_May2026.pdf" },
  { cat: "consent", title: "Consent Was Never the Point — Chapters 1–5", desc: "Cumulative build of the series covering chapters 1 through 5.", file: "/pdfs/modern-day-eugenics/consent-was-never-the-point/Consent_Was_Never_the_Point_Ch1-5_May2026.pdf" },
  { cat: "consent", title: "Consent Was Never the Point — Chapters 1–6", desc: "Cumulative build of the series covering chapters 1 through 6.", file: "/pdfs/modern-day-eugenics/consent-was-never-the-point/Consent_Was_Never_the_Point_Ch1-6_May2026.pdf" },
  { cat: "consent", title: "Consent Was Never the Point — Chapters 1–7", desc: "Cumulative build of the series covering chapters 1 through 7.", file: "/pdfs/modern-day-eugenics/consent-was-never-the-point/Consent_Was_Never_the_Point_Ch1-7_May2026.pdf" },
  { cat: "consent", title: "Consent Was Never the Point — Chapter II (standalone)", desc: "Chapter II of the series, as a standalone document.", file: "/pdfs/modern-day-eugenics/consent-was-never-the-point/Consent_Chapter_II_Standalone_May2026.pdf" },
  { cat: "consent", title: "Consent Was Never the Point — Chapter III (standalone)", desc: "Chapter III of the series, as a standalone document.", file: "/pdfs/modern-day-eugenics/consent-was-never-the-point/Consent_Chapter_III_Standalone_May2026.pdf" },
  { cat: "consent", title: "Consent Was Never the Point — Chapter IV (standalone)", desc: "Chapter IV of the series, as a standalone document.", file: "/pdfs/modern-day-eugenics/consent-was-never-the-point/Consent_Chapter_IV_Standalone_May2026.pdf" },
  { cat: "consent", title: "Consent Was Never the Point — Chapter V (standalone)", desc: "Chapter V of the series, as a standalone document.", file: "/pdfs/modern-day-eugenics/consent-was-never-the-point/Consent_Chapter_V_Standalone_May2026.pdf" },
  { cat: "consent", title: "Consent Was Never the Point — Chapter VI (standalone)", desc: "Chapter VI of the series, as a standalone document.", file: "/pdfs/modern-day-eugenics/consent-was-never-the-point/Consent_Chapter_VI_Standalone_May2026.pdf" },
  { cat: "consent", title: "Consent Was Never the Point — Chapter VII (standalone)", desc: "Chapter VII of the series, as a standalone document.", file: "/pdfs/modern-day-eugenics/consent-was-never-the-point/Consent_Chapter_VII_Standalone_May2026.pdf" },
  { cat: "consent", title: "Consent Was Never the Point — Bibliography & Sources", desc: "Standalone bibliography and full source list for the series.", file: "/pdfs/modern-day-eugenics/consent-was-never-the-point/Consent_Bibliography_Standalone_May2026.pdf" },
];

// ─── Data: Audio recordings (5 series, organized by report header) ───
// Songs can also carry a `released: "YYYY-MM-DD"` per item for the Just Dropped section.
// Any item can also carry a `youtube: "<11-char-id>"` field — when present, the renderer
// embeds the YouTube video above the native audio player.
const AUDIO_SERIES = [
  {
    id: "songs",
    title: "Songs for the Movement",
    blurb: "Songs written by the campaign for the movement. Lyrics original; music AI-generated. These are not report read-alouds — these are the soundtrack of the steps. Watch the video or play the audio.",
    folder: "songs-for-the-movement",
    items: [
      { num: "01", title: "Kitchen Table Map", file: "Kitchen_Table_Map.mp3", youtube: "7TfSoRxDbrg", released: "2026-05-20" },
      { num: "02", title: "Paperwork on the Steps", file: "Paperwork_on_the_Steps.mp3", youtube: "OZ0OygouKzs", released: "2026-05-20" },
      { num: "03", title: "We Don't Stop", file: "We_Don_t_Stop.mp3", youtube: "CKUrdQHEgrI", released: "2026-05-20" },
      { num: "04", title: "Raise the Banner", file: "Raise_the_Banner.mp3", released: "2026-05-22" },
      { num: "05", title: "Still-Here March", file: "Still-Here_March.mp3", released: "2026-05-22" },
      { num: "06", title: "UCP — Still Here", file: "UCP_Still_Here.mp3", released: "2026-05-22" },
      { num: "07", title: "Can You Hear Us?", file: "CAN_YOU_HEAR_US.mp3", released: "2026-05-22" }
    ]
  },
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
      { num: "07", title: "Caseworker, Appeal Rights & Human Rights", file: "07_ADSB_Audio_Caseworker_Appeal_Rights_HumanRights.mp3" },
      { num: "07b", title: "Appeal Overturn", file: "07b_ADSB_Audio_Appeal_Overturn.mp3" },
      { num: "07c", title: "Charter Mobility Rights", file: "07c_ADSB_Audio_Charter_Mobility_Rights.mp3" },
      { num: "08", title: "Healthcare Worker Shortage", file: "08_ADSB_Audio_Healthcare_Worker_Shortage.mp3" },
      { num: "09", title: "Three Years and Counting — FSCD/PDD", file: "09_ADSB_Audio_Three_Years_and_Counting_FSCD_PDD_Crisis.mp3" },
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
  { label: "Remembrance", img: "785386ff-48b7-485d-8140-3302e6c3a4f7.png" },
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
  { label: "Minister Neudorf", img: "neudorf_flyer.png" },
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
  { label: "Neudorf — New Portfolio. Same Game.", img: "neudorf_new_portfolio.jpg", path: "comics" },
  { label: "Neudorf — Trust the Process", img: "neudorf_aish_to_adap.jpg", path: "comics" },
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
  { label: "Community Hall", img: "image_f668ace4.jpg", path: "comics" },

  // Impact flyers — live in /pdfs/flyers/impact/. _dejavu variants use the DejaVu typeface for accessibility.
  { label: "Impact — Part 1", img: "impact_part1.png", path: "impact" },
  { label: "Impact — Part 1 (DejaVu)", img: "impact_part1_dejavu.png", path: "impact" },
  { label: "Impact — Part 2", img: "impact_part2.png", path: "impact" },
  { label: "Impact — Part 2 (DejaVu)", img: "impact_part2_dejavu.png", path: "impact" }
];

// ─── Just Dropped: collect everything released in the last 7 days ───
// One source of truth: each manifest item can carry a `released: "YYYY-MM-DD"` field.
// This collector reads across DOCUMENTS, REPORTS, AUDIO_SERIES items, and MINISTERIAL,
// surfaces anything inside the window, and lets it roll off automatically when stale.
// To change the window length, edit JUST_DROPPED_DAYS.
const JUST_DROPPED_DAYS = 7;

// Fillable Take Action forms we want to surface in "Just Dropped".
// They are hardcoded as cards in the Take Action section; add one here with a
// `released` date when it should also appear in the new-release feed.
const ACTION_FORMS = [
  { title: "Letter to the Minister", desc: "A letter anyone can send to the Minister responsible for AISH and ADAP, making the human-rights case against being moved to ADAP with no new individual assessment and no independent appeal. Fill in your own story; copy your MLA, the Opposition critic, and local media.", file: "/pdfs/fillable/Fillable_Letter_to_the_Minister_AISH_to_ADAP_June2026.pdf", released: "2026-06-06" },
  { title: "CDB $200 Deduction Correction Letter", desc: "File-correction letter for when the $200 Canada Disability Benefit amount was deducted but does not match the CDB status you reported.", file: "/pdfs/fillable/Fillable_CDB_200_Deduction_Correction_Letter.pdf", released: "2026-06-05" },
  { title: "AISH Appeal Letter", desc: "A formal Notice of Appeal letter for an AISH decision \u2014 fillable, or ready to print and sign.", file: "/pdfs/fillable/AISH_Appeal_Letter_Fillable_June2026.pdf", released: "2026-06-03" },
  { title: "Exemption Category Correction Request", desc: "For people in an automatic AISH-retention category (PDD, palliative/terminal, continuing care, or 60+) who received an ADAP letter anyway \u2014 a request to correct the error, not an appeal.", file: "/pdfs/fillable/ADSB_Exemption_Category_Correction_Request.pdf", released: "2026-06-03" },
];

function withinWindow(dateStr) {
  if (!dateStr) return false;
  const released = new Date(dateStr + "T00:00:00");
  if (isNaN(released.getTime())) return false;
  const ageMs = Date.now() - released.getTime();
  const windowMs = JUST_DROPPED_DAYS * 24 * 60 * 60 * 1000;
  return ageMs >= 0 && ageMs <= windowMs;
}

function formatReleaseDate(dateStr) {
  const d = new Date(dateStr + "T00:00:00");
  if (isNaN(d.getTime())) return dateStr;
  return d.toLocaleDateString("en-CA", { year: "numeric", month: "short", day: "numeric" });
}

function collectJustDropped() {
  const items = [];

  // Documents
  DOCUMENTS.forEach(d => {
    if (withinWindow(d.released)) {
      items.push({
        kind: "Document",
        title: d.title,
        desc: d.desc,
        href: encodePath(d.file),
        released: d.released,
        category: categoryLabel(d.cat)
      });
    }
  });

  // Reports (live in /pdfs/adsb-report-series/)
  REPORTS.forEach(r => {
    if (withinWindow(r.released)) {
      items.push({
        kind: "Report",
        title: r.title,
        desc: r.desc,
        href: `/pdfs/adsb-report-series/${encodeURIComponent(r.file)}`,
        released: r.released,
        category: `Report ${r.num}`
      });
    }
  });

  // Audio (per-item)
  AUDIO_SERIES.forEach(series => {
    series.items.forEach(item => {
      if (withinWindow(item.released)) {
        items.push({
          kind: "Audio",
          title: item.title,
          desc: series.title,
          href: `/audio/${series.folder}/${encodeURIComponent(item.file)}`,
          released: item.released,
          category: series.title
        });
      }
    });
  });

  // Ministerial
  MINISTERIAL.forEach(m => {
    if (withinWindow(m.released)) {
      items.push({
        kind: "Ministerial",
        title: m.title,
        desc: m.desc,
        href: `/pdfs/ministerial-correspondence/${encodeURIComponent(m.file)}`,
        released: m.released,
        category: m.type
      });
    }
  });

  // Take Action forms (fillables surfaced via ACTION_FORMS)
  ACTION_FORMS.forEach(f => {
    if (withinWindow(f.released)) {
      items.push({
        kind: "Form",
        title: f.title,
        desc: f.desc,
        href: encodePath(f.file),
        released: f.released,
        category: "Take Action"
      });
    }
  });

  // Newest first
  items.sort((a, b) => b.released.localeCompare(a.released));
  return items;
}

// ─── Daily Accessible News ("Where Things Stand") ───
function dnFormatDate(d) {
  if (d.indexOf("-to-") !== -1) return "May 1\u201321, 2026";
  const parts = d.split("-").map(Number);
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  return months[parts[1]-1] + " " + parts[2] + ", " + parts[0];
}
function dnEscape(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function dnBodyToHtml(body) {
  const lines = body.split("\n");
  let html = "", para = [];
  const flush = () => { if (para.length) { html += "<p>" + dnEscape(para.join(" ")) + "</p>"; para = []; } };
  lines.forEach(line => {
    const t = line.trim();
    if (t === "") { flush(); }
    else if (t.indexOf("## ") === 0) { flush(); html += '<h4 class="dn-h">' + dnEscape(t.slice(3)) + "</h4>"; }
    else { para.push(t); }
  });
  flush();
  return html;
}
function renderDailyNews() {
  const wrap = document.getElementById("daily-news-feed");
  if (!wrap || typeof DAILY_NEWS === "undefined" || !DAILY_NEWS.length) return;
  const latest = DAILY_NEWS[0];
  const rest = DAILY_NEWS.slice(1);
  let html = `
    <article class="dn-post dn-latest">
      <p class="dn-date">${dnFormatDate(latest.date)} \u00b7 latest</p>
      <div class="dn-body">${dnBodyToHtml(latest.body)}</div>
    </article>`;
  if (rest.length) {
    html += `<h3 class="dn-archive-title">Earlier updates</h3>`;
    rest.forEach(p => {
      html += `
      <details class="dn-archive-item">
        <summary>${dnFormatDate(p.date)}</summary>
        <div class="dn-body">${dnBodyToHtml(p.body)}</div>
      </details>`;
    });
  }
  wrap.innerHTML = html;
}

function renderJustDropped() {
  const section = document.getElementById("just-dropped");
  const grid = document.getElementById("just-dropped-grid");
  const empty = document.getElementById("just-dropped-empty");
  const countLabel = document.getElementById("just-dropped-count");
  if (!section || !grid) return;

  const items = collectJustDropped();

  if (countLabel) {
    countLabel.textContent = items.length === 0
      ? "Nothing in the last 7 days"
      : items.length === 1
      ? "1 new item in the last 7 days"
      : `${items.length} new items in the last 7 days`;
  }

  if (items.length === 0) {
    grid.innerHTML = "";
    if (empty) empty.hidden = false;
    return;
  }
  if (empty) empty.hidden = true;

  grid.innerHTML = items.map(item => `
    <article class="card jd-card">
      <p class="card-num">
        <span class="jd-pill">New</span>
        ${item.kind} · ${item.category} · ${formatReleaseDate(item.released)}
      </p>
      <h3 class="card-title">${item.title}</h3>
      <p class="card-desc">${item.desc || ""}</p>
      <div class="card-actions">
        <a class="view" href="${item.href}" target="_blank" rel="noopener">${item.kind === "Audio" ? "Listen →" : "View →"}</a>
        <a download href="${item.href}">Download</a>
      </div>
    </article>
  `).join("");
}

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

const REFERENCE_LIBRARY = [
  { cat: "reg", title: "Alberta Gazette, Part II — May 15, 2026", desc: "Official Gazette issue, Part II.", file: "/pdfs/government-form-originals/regulations/alberta-gazette-part-ii-may-15-2026.pdf" },
  { cat: "reg", title: "Alberta Gazette, Part I — May 30, 2026", desc: "Official Gazette issue, Part I.", file: "/pdfs/government-form-originals/regulations/alberta-gazette-part-i-may-30-2026.pdf" },
  { cat: "reg", title: "Ministerial Order 2026-001 — Assisted Living and Social Services", desc: "The Ministerial Order expanding appeal exemptions (filed as A.R. 87/2026), in force July 2, 2026.", file: "/pdfs/government-form-originals/regulations/ministerial-order-2026-001-assisted-living-and.pdf" },
  { cat: "reg", title: "Alberta Gazette, Part II — 2026 cumulative index", desc: "Cumulative index of regulations published in 2026.", file: "/pdfs/government-form-originals/regulations/alberta-gazette-part-ii-2026-cumulative-index.pdf" },
  { cat: "reg", title: "AISH Act - Applications and Appeals Ministerial Regulation (AR 89-2007)", desc: "Consolidated regulation text on the public record.", file: "/pdfs/government-form-originals/regulations/aish-act-applications-and-appeals-ministerial.pdf" },
  { cat: "reg", title: "AISH Act - General Regulation (AR 91-2007)", desc: "Consolidated regulation text on the public record.", file: "/pdfs/government-form-originals/regulations/aish-act-general-regulation-ar-91-2007.pdf" },
  { cat: "reg", title: "AISH Act - General Regulation (AR 96-2026 in force 2026-07-02 extract)", desc: "Consolidated regulation text on the public record.", file: "/pdfs/government-form-originals/regulations/aish-act-general-regulation-ar-96-2026-in-force.pdf" },
  { cat: "reg", title: "Alberta King's Printer — publications page", desc: "The official source page for Alberta statutes and regulations.", file: "/pdfs/government-form-originals/regulations/alberta-kings-printer-publications-page.pdf" },
  { cat: "reg", title: "Assured Income for the Severely Handicapped Act (SA 2006 c A-45.1) (earlier consolidation)", desc: "Consolidated statute text on the public record.", file: "/pdfs/government-form-originals/regulations/assured-income-for-the-severely-handicapped-act.pdf" },
  { cat: "reg", title: "Assured Income for the Severely Handicapped Act (SA 2006 c A-45.1) (incl AR 96-2026 notes)", desc: "Consolidated statute text on the public record.", file: "/pdfs/government-form-originals/regulations/assured-income-for-the-severely-handicapped-act-2.pdf" },
  { cat: "reg", title: "Child Youth and Family Enhancement Act (RSA 2000 c C-12)", desc: "Consolidated statute text on the public record.", file: "/pdfs/government-form-originals/regulations/child-youth-and-family-enhancement-act-rsa-2000.pdf" },
  { cat: "reg", title: "Child Youth and Family Enhancement Act - Adoption Regulation (AR 187-2004)", desc: "Consolidated regulation text on the public record.", file: "/pdfs/government-form-originals/regulations/child-youth-and-family-enhancement-act-adoption.pdf" },
  { cat: "reg", title: "Child Youth and Family Enhancement Act - Court Rules and Forms Regulation (AR 39-2002)", desc: "Consolidated regulation text on the public record.", file: "/pdfs/government-form-originals/regulations/child-youth-and-family-enhancement-act-court.pdf" },
  { cat: "reg", title: "Child Youth and Family Enhancement Act - Enhancement Regulation (AR 160-2004)", desc: "Consolidated regulation text on the public record.", file: "/pdfs/government-form-originals/regulations/child-youth-and-family-enhancement-act.pdf" },
  { cat: "reg", title: "Child Youth and Family Enhancement Act - Publication Ban Regulation (AR 207-2014)", desc: "Consolidated regulation text on the public record.", file: "/pdfs/government-form-originals/regulations/child-youth-and-family-enhancement-act-2.pdf" },
  { cat: "reg", title: "Child Youth and Family Enhancement Act - Residential Facilities Licensing Regulation (AR 161-2004)", desc: "Consolidated regulation text on the public record.", file: "/pdfs/government-form-originals/regulations/child-youth-and-family-enhancement-act-3.pdf" },
  { cat: "reg", title: "Child Youth and Family Enhancement Act - Resource Rebate Regulation (AR 47-2006)", desc: "Consolidated regulation text on the public record.", file: "/pdfs/government-form-originals/regulations/child-youth-and-family-enhancement-act-resource.pdf" },
  { cat: "reg", title: "Continuing Care Act (SA 2022 c C-26.7)", desc: "Consolidated statute text on the public record.", file: "/pdfs/government-form-originals/regulations/continuing-care-act-sa-2022-c-c-26-7.pdf" },
  { cat: "reg", title: "Continuing Care Act - Ministerial Regulation (AR 44-2024)", desc: "Consolidated regulation text on the public record.", file: "/pdfs/government-form-originals/regulations/continuing-care-act-ministerial-regulation-ar.pdf" },
  { cat: "reg", title: "Continuing Care Act - Regulation (AR 21-2024)", desc: "Consolidated regulation text on the public record.", file: "/pdfs/government-form-originals/regulations/continuing-care-act-regulation-ar-21-2024.pdf" },
  { cat: "reg", title: "Convention on the Rights of Persons with Disabilities (CRPD)", desc: "UN convention text, via the Division for Inclusive Social Development.", file: "/pdfs/government-form-originals/regulations/convention-on-the-rights-of-persons-with.pdf" },
  { cat: "reg", title: "Early Learning and Child Care Act (SA 2007 c E-0.1)", desc: "Consolidated statute text on the public record.", file: "/pdfs/government-form-originals/regulations/early-learning-and-child-care-act-sa-2007-c-e-0.pdf" },
  { cat: "reg", title: "Early Learning and Child Care Act - Regulation (AR 143-2008)", desc: "Consolidated regulation text on the public record.", file: "/pdfs/government-form-originals/regulations/early-learning-and-child-care-act-regulation-ar.pdf" },
  { cat: "reg", title: "Family Support for Children with Disabilities Act (SA 2003 c F-5.3)", desc: "Consolidated statute text on the public record.", file: "/pdfs/government-form-originals/regulations/family-support-for-children-with-disabilities.pdf" },
  { cat: "reg", title: "Family Support for Children with Disabilities Act - Regulation (AR 140-2004)", desc: "Consolidated regulation text on the public record.", file: "/pdfs/government-form-originals/regulations/family-support-for-children-with-disabilities-2.pdf" },
  { cat: "reg", title: "Income and Employment Supports Act (SA 2003 c I-0.5)", desc: "Consolidated statute text on the public record.", file: "/pdfs/government-form-originals/regulations/income-and-employment-supports-act-sa-2003-c-i.pdf" },
  { cat: "reg", title: "Income and Employment Supports Act - Child and Adult Support Services Regulation (AR 61-2004)", desc: "Consolidated regulation text on the public record.", file: "/pdfs/government-form-originals/regulations/income-and-employment-supports-act-child-and.pdf" },
  { cat: "reg", title: "Income and Employment Supports Act - Disability-Related Employment Supports and Services Regulation (AR 117-2011)", desc: "Consolidated regulation text on the public record.", file: "/pdfs/government-form-originals/regulations/income-and-employment-supports-act-disability.pdf" },
  { cat: "reg", title: "Income and Employment Supports Act - Recovery Regulation (AR 43-2010)", desc: "Consolidated regulation text on the public record.", file: "/pdfs/government-form-originals/regulations/income-and-employment-supports-act-recovery.pdf" },
  { cat: "reg", title: "Income and Employment Supports Act - Support Agreement Regulation (AR 155-2005)", desc: "Consolidated regulation text on the public record.", file: "/pdfs/government-form-originals/regulations/income-and-employment-supports-act-support.pdf" },
  { cat: "reg", title: "Income and Employment Supports Act - Training Provider Regulation (AR 186-2011)", desc: "Consolidated regulation text on the public record.", file: "/pdfs/government-form-originals/regulations/income-and-employment-supports-act-training.pdf" },
  { cat: "reg", title: "Mental Health Services Protection Act (SA 2018 c M-13.2)", desc: "Consolidated statute text on the public record.", file: "/pdfs/government-form-originals/regulations/mental-health-services-protection-act-sa-2018-c.pdf" },
  { cat: "reg", title: "Mental Health Services Protection Act - Protection Regulation (AR 114-2021)", desc: "Consolidated regulation text on the public record.", file: "/pdfs/government-form-originals/regulations/mental-health-services-protection-act.pdf" },
  { cat: "reg", title: "Persons with Developmental Disabilities Services Act — statute text", desc: "Consolidated statute text (filename P09P5 — confirm citation).", file: "/pdfs/government-form-originals/regulations/persons-with-developmental-disabilities.pdf" },
  { cat: "reg", title: "PDD Services Act - Developmental Disabilities Regulation (AR 230-2013)", desc: "Consolidated regulation text on the public record.", file: "/pdfs/government-form-originals/regulations/pdd-services-act-developmental-disabilities.pdf" },
  { cat: "reg", title: "PDD Services Act - PDD Services Regulation (AR 228-2013)", desc: "Consolidated regulation text on the public record.", file: "/pdfs/government-form-originals/regulations/pdd-services-act-pdd-services-regulation-ar-228.pdf" },
  { cat: "reg", title: "Protection for Persons in Care Act (SA 2009 c P-29.1)", desc: "Consolidated statute text on the public record.", file: "/pdfs/government-form-originals/regulations/protection-for-persons-in-care-act-sa-2009-c-p.pdf" },
  { cat: "reg", title: "Protection for Persons in Care Act - Ministerial Regulation (AR 104-2010)", desc: "Consolidated regulation text on the public record.", file: "/pdfs/government-form-originals/regulations/protection-for-persons-in-care-act-ministerial.pdf" },
  { cat: "reg", title: "Protection for Persons in Care Act - Protection Regulation (AR 97-2010)", desc: "Consolidated regulation text on the public record.", file: "/pdfs/government-form-originals/regulations/protection-for-persons-in-care-act-protection.pdf" },
  { cat: "reg", title: "Public Health Act - Aids to Daily Living and Extended Health Benefits Regulation (AR 236-1985)", desc: "Consolidated regulation text on the public record.", file: "/pdfs/government-form-originals/regulations/public-health-act-aids-to-daily-living-and.pdf" },
  { cat: "reg", title: "Public Sector Compensation Transparency Act (SA 2015 c P-40.5)", desc: "Consolidated statute text on the public record.", file: "/pdfs/government-form-originals/regulations/public-sector-compensation-transparency-act-sa.pdf" },
  { cat: "reg", title: "Public Sector Compensation Transparency Act - Dissolved Public Sector Bodies Regulation (AR 113-2017)", desc: "Consolidated regulation text on the public record.", file: "/pdfs/government-form-originals/regulations/public-sector-compensation-transparency-act.pdf" },
  { cat: "reg", title: "Public Sector Compensation Transparency Act - General Regulation (AR 52-2016)", desc: "Consolidated regulation text on the public record.", file: "/pdfs/government-form-originals/regulations/public-sector-compensation-transparency-act-2.pdf" },
  { cat: "reg", title: "Assured Income for the Severely Handicapped Act — CanLII consolidation", desc: "Consolidated AISH Act text, CanLII.", file: "/pdfs/government-form-originals/regulations/assured-income-for-the-severely-handicapped-act-3.pdf" },
  { cat: "reg", title: "Seniors Benefit Act - General Regulation (AR 213-1994)", desc: "Consolidated regulation text on the public record.", file: "/pdfs/government-form-originals/regulations/seniors-benefit-act-general-regulation-ar-213.pdf" },
  { cat: "reg", title: "CRPD — Optional Protocol (English)", desc: "Optional Protocol to the UN Convention on the Rights of Persons with Disabilities.", file: "/pdfs/government-form-originals/regulations/crpd-optional-protocol-english.pdf" },
  { cat: "manual", title: "Supporting Safe and Inclusive Lives — PDD Consultation 2016 (plain language)", desc: "Plain-language report from the 2016 PDD safety-standards consultation.", file: "/pdfs/government-form-originals/government-manuals/supporting-safe-and-inclusive-lives-pdd.pdf" },
  { cat: "manual", title: "AISH Policy Manual", desc: "The full AISH program policy manual.", file: "/pdfs/government-form-originals/government-manuals/aish-policy-manual.pdf" },
  { cat: "manual", title: "PDD Family Guide and Checklist (C2N2)", desc: "Family-facing guide and checklist for the PDD program.", file: "/pdfs/government-form-originals/government-manuals/pdd-family-guide-and-checklist-c2n2.pdf" },
  { cat: "manual", title: "ADAP Fact Sheet (May 12, 2026)", desc: "Government of Alberta fact sheet on the Alberta Disability Assistance Program.", file: "/pdfs/government-form-originals/government-manuals/adap-fact-sheet-may-12-2026.pdf" },
  { cat: "manual", title: "Transforming Disability Income Assistance — Discussion Guide", desc: "The August 2025 ADAP consultation discussion guide.", file: "/pdfs/government-form-originals/government-manuals/transforming-disability-income-assistance.pdf" },
  { cat: "manual", title: "Your Guide to AISH (September 2025)", desc: "Government of Alberta recipient guide to AISH.", file: "/pdfs/government-form-originals/government-manuals/your-guide-to-aish-september-2025.pdf" },
  { cat: "manual", title: "FSCD Policy and Procedures Manual (October 2023)", desc: "Family Support for Children with Disabilities program manual.", file: "/pdfs/government-form-originals/government-manuals/fscd-policy-and-procedures-manual-october-2023.pdf" },
  { cat: "manual", title: "Your Guide to AISH (May 2025)", desc: "Earlier edition of the recipient guide to AISH.", file: "/pdfs/government-form-originals/government-manuals/your-guide-to-aish-may-2025.pdf" },
  { cat: "manual", title: "Transforming Disability Income Assistance — Discussion Guide (small print)", desc: "Small-print edition of the ADAP discussion guide.", file: "/pdfs/government-form-originals/government-manuals/transforming-disability-income-assistance-2.pdf" },
  { cat: "form", title: "AISH Appeal Form (AAS13358)", desc: "Government of Alberta appeal form for AISH recipients — the official form used to formally appeal an AISH decision.", file: "/pdfs/government-form-originals/government-forms/aish-appeal-form-aas13358.pdf" },
  { cat: "form", title: "Access to Information Request Form (ATIA)", desc: "Alberta freedom-of-information request form.", file: "/pdfs/government-form-originals/government-forms/access-to-information-request-form-atia.pdf" },
  { cat: "form", title: "Appeals Secretariat Authorization Form", desc: "Government of Alberta form authorizing a representative to act on your behalf in an AISH appeal.", file: "/pdfs/government-form-originals/government-forms/alss-appeals-secretariat-authorization-form.pdf" },
  { cat: "form", title: "Appeal Time Extension Request Worksheet", desc: "Government of Alberta worksheet for requesting more time to file an AISH appeal.", file: "/pdfs/government-form-originals/government-forms/alss-time-extension-request-worksheet.pdf" },
  { cat: "infopage", title: "About the Citizen's Appeal Panel (Alberta.ca)", desc: "Government info page on the appeal panel.", file: "/pdfs/government-form-originals/info-pages/about-the-citizens-appeal-panel-alberta-ca.pdf" },
  { cat: "infopage", title: "Alberta Disability Assistance Program (Alberta.ca)", desc: "Government program page for ADAP.", file: "/pdfs/government-form-originals/info-pages/alberta-disability-assistance-program-alberta-ca.pdf" },
  { cat: "infopage", title: "Citizen's Appeal Panel (Alberta.ca)", desc: "Government info page on the appeal panel.", file: "/pdfs/government-form-originals/info-pages/citizens-appeal-panel-alberta-ca.pdf" },
  { cat: "infopage", title: "Empowering Albertans with Disabilities (Alberta.ca)", desc: "Government communications page.", file: "/pdfs/government-form-originals/info-pages/empowering-albertans-with-disabilities-alberta.pdf" },
  { cat: "infopage", title: "Expanding Support for Albertans with Disabilities (Alberta.ca)", desc: "Government communications page.", file: "/pdfs/government-form-originals/info-pages/expanding-support-for-albertans-with.pdf" },
  { cat: "infopage", title: "The Tribunal Process (Alberta Human Rights Commission)", desc: "Info page on the human-rights tribunal process.", file: "/pdfs/government-form-originals/info-pages/the-tribunal-process-alberta-human-rights.pdf" },
  { cat: "infopage", title: "Citizen's Appeal Panel — Compensation Disclosure (CSV)", desc: "Public-sector compensation disclosure data for the appeal panel (CSV download).", file: "/pdfs/government-form-originals/info-pages/citizens-appeal-panel-compensation-disclosure.csv" },
  { cat: "extreport", title: "Disability Poverty Report Card 2025", desc: "Campaign 2000 and Disability Without Poverty, drawing on Statistics Canada and Maytree.", file: "/pdfs/government-form-originals/external-reports/disability-poverty-report-card-2025.pdf" },
  { cat: "extreport", title: "Disability Poverty Report Card 2024", desc: "Prior-year national disability-poverty report card.", file: "/pdfs/government-form-originals/external-reports/disability-poverty-report-card-2024.pdf" },
  { cat: "extreport", title: "Auditor General report — CPP Disability", desc: "Federal Auditor General report on the CPP Disability program.", file: "/pdfs/government-form-originals/external-reports/auditor-general-report-cpp-disability.pdf" },
  { cat: "extreport", title: "OAPD Strategic Plan 2025-2027", desc: "Office of the Advocate for Persons with Disabilities strategic plan.", file: "/pdfs/government-form-originals/external-reports/oapd-strategic-plan-2025-2027.pdf" },
  { cat: "extreport", title: "Compassionate Intervention: A Path to Recovery — Alberta Recovery Model (Apr 2025)", desc: "Government of Alberta Mental Health and Addiction report setting out the recovery-oriented model behind the Compassionate Intervention framework. Companion to Bill 53, the Compassionate Intervention Act.", file: "/pdfs/government-form-originals/external-reports/mha-alberta-recovery-model-compassionate-intervention-path-to-recovery-2025-04.pdf" },
  { cat: "extreport", title: "Disability Workforce Strategy — Full Data Package (Martin)", desc: "Full supporting data package for a disability and workforce-strategy analysis.", file: "/pdfs/government-form-originals/external-reports/Martin_Disability_Workforce_Strategy_Full_Data_Package.pdf" },
  { cat: "legislature", title: "Bill 53 — Compassionate Intervention Act", desc: "Text of Bill 53, the Compassionate Intervention Act, introduced by the Minister of Mental Health and Addiction (31st Legislature, 1st Session).", file: "/pdfs/government-form-originals/legislature/20230530_bill-053.pdf" },
  { cat: "legislature", title: "Alberta Hansard — April 15, 2025 (afternoon sitting)", desc: "Official transcript of Assembly proceedings, 31st Legislature, 1st Session.", file: "/pdfs/government-form-originals/legislature/20250415_1330_01_han.pdf" },
  { cat: "legislature", title: "Alberta Hansard — April 29, 2025 (evening sitting)", desc: "Official transcript of Assembly proceedings, 31st Legislature, 1st Session.", file: "/pdfs/government-form-originals/legislature/20250429_1930_01_han.pdf" },
  { cat: "legislature", title: "Alberta Hansard — May 1, 2025 (afternoon sitting)", desc: "Official transcript of Assembly proceedings, 31st Legislature, 1st Session.", file: "/pdfs/government-form-originals/legislature/20250501_1330_01_han.pdf" },
  { cat: "legislature", title: "Alberta Hansard — May 6, 2025 (afternoon sitting)", desc: "Official transcript of Assembly proceedings, 31st Legislature, 1st Session.", file: "/pdfs/government-form-originals/legislature/20250506_1330_01_han.pdf" },
  { cat: "legislature", title: "Alberta Hansard — May 7, 2025 (evening sitting)", desc: "Official transcript of Assembly proceedings, 31st Legislature, 1st Session.", file: "/pdfs/government-form-originals/legislature/20250507_1930_01_han.pdf" },
  { cat: "legislature", title: "Alberta Hansard — May 13, 2025 (evening sitting)", desc: "Official transcript of Assembly proceedings, 31st Legislature, 1st Session.", file: "/pdfs/government-form-originals/legislature/20250513_1930_01_han.pdf" },
  { cat: "finstmt", title: "Consolidated Financial Statements 2017-2018", desc: "Audited financial statements on the public record.", file: "/pdfs/government-form-originals/financial-statements/consolidated-financial-statements-2017-2018.pdf" },
  { cat: "finstmt", title: "Audited Financial Statements 2019-2020", desc: "Audited financial statements on the public record.", file: "/pdfs/government-form-originals/financial-statements/audited-financial-statements-2019-2020.pdf" },
  { cat: "finstmt", title: "The Mustard Seed Society — Financial Statements (to March 31, 2021)", desc: "Signed audited financial statements.", file: "/pdfs/government-form-originals/financial-statements/the-mustard-seed-society-financial-statements.pdf" },
  { cat: "finstmt", title: "The Mustard Seed Society — Financial Statements (to March 31, 2022)", desc: "Signed audited financial statements.", file: "/pdfs/government-form-originals/financial-statements/the-mustard-seed-society-financial-statements-2.pdf" },
  { cat: "finstmt", title: "The Mustard Seed Society — Financial Statements (to March 31, 2023)", desc: "Signed audited financial statements.", file: "/pdfs/government-form-originals/financial-statements/the-mustard-seed-society-financial-statements-3.pdf" },
  { cat: "finstmt", title: "The Mustard Seed Society — Financial Statements (to March 31, 2024)", desc: "Signed audited financial statements.", file: "/pdfs/government-form-originals/financial-statements/the-mustard-seed-society-financial-statements-4.pdf" },
  { cat: "finstmt", title: "The Mustard Seed Society — Financial Statements (to March 31, 2025)", desc: "Signed audited financial statements.", file: "/pdfs/government-form-originals/financial-statements/the-mustard-seed-society-financial-statements-5.pdf" },
  { cat: "finstmt", title: "Audited Financial Statements (signed)", desc: "Audited financial statements on the public record.", file: "/pdfs/government-form-originals/financial-statements/audited-financial-statements-signed.pdf" },
  { cat: "finstmt", title: "Audited Financial Statements 2018-2019", desc: "Audited financial statements on the public record.", file: "/pdfs/government-form-originals/financial-statements/audited-financial-statements-2018-2019.pdf" },
  { cat: "finstmt", title: "Government of Alberta — Travel & Expense Disclosure (full dataset, CSV)", desc: "The province’s own published travel and expense disclosure — the source data behind “Paid to Govern, Paid to Survive” (CSV download).", file: "/pdfs/government-form-originals/financial-statements/goa_expenses.csv" },
  { cat: "finstmt", title: "Government of Alberta — Travel & Expense Disclosure (extract, CSV)", desc: "A smaller extract of the Government of Alberta travel and expense disclosure dataset (CSV download).", file: "/pdfs/government-form-originals/financial-statements/goa-expenses-extract.csv" },
  { cat: "news", title: "Backgrounder: Supporting Canadians with Disabilities — Canada Disability Benefit (Canada.ca)", desc: "Federal backgrounder on the Canada Disability Benefit.", file: "/pdfs/government-form-originals/news-articles/backgrounder-supporting-canadians-with.pdf" },
  { cat: "news", title: "Disabled Albertans to receive AISH eligibility letters (Red Deer Advocate)", desc: "Press coverage of the AISH-to-ADAP transition letters.", file: "/pdfs/government-form-originals/news-articles/disabled-albertans-to-receive-aish-eligibility.pdf" },
  { cat: "news", title: "Motion passed to request paused ADAP implementation", desc: "Press coverage of a municipal motion on ADAP.", file: "/pdfs/government-form-originals/news-articles/motion-passed-to-request-paused-adap.pdf" },
  { cat: "news", title: "St. Albert to discuss asking province to pause ADAP (St. Albert News)", desc: "Press coverage of the St. Albert council motion.", file: "/pdfs/government-form-originals/news-articles/st-albert-to-discuss-asking-province-to-pause.pdf" },
  { cat: "advocacy", title: "Inclusion Alberta media release — ADAP could deepen poverty", desc: "Inclusion Alberta's media release on ADAP.", file: "/pdfs/government-form-originals/advocacy/inclusion-alberta-media-release-adap-could.pdf" },
  { cat: "engagement", title: "ADAP Engagement Page — Forensic Capture Set", desc: "The 14-snapshot Internet Archive capture set of the Government of Alberta ADAP engagement page (August 2025 to April 2026) underlying “Designed Based on Input?” — documenting the page’s rewrite, the changed survey end date, the 206-day freeze, and its removal from archiving.", file: "/pdfs/government-form-originals/adap-engagement/adap-engagement.pdf" },
];

// ─── Render: Reference Library (filterable) ───
function renderReference(filter = "all") {
  const grid = document.getElementById("reference-grid");
  if (!grid) return;
  const items = filter === "all" ? REFERENCE_LIBRARY : REFERENCE_LIBRARY.filter(d => d.cat === filter);
  grid.innerHTML = items.map(d => `
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
    may2026: "May 2026 ADAP",
    greatness: "From Greatness to Betrayal",
    building: "Building Up",
    cage: "The Cage Doesn't End",
    separation: "Separation Risk",
    indigenous: "Indigenous Disability",
    systematic: "Systematic Exclusion",
    compound: "Compound Failure",
    plain: "Plain Language",
    legal: "Legal Analysis",
    briefs: "Sourced Brief",
    new: "New ADSB Doc",
    info: "Information Asymmetry",
    access: "Access Gap",
    reg: "Regulations & Legislation",
    manual: "Government Manual",
    form: "Government Form",
    infopage: "Info Page",
    extreport: "External Report", consent: "Consent Was Never the Point", legislature: "Hansard & Bills",
    finstmt: "Financial Statement",
    news: "News Coverage",
    advocacy: "Advocacy",
    engagement: "Engagement Record"
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
          const videoBlock = item.youtube ? `
              <div class="audio-video">
                <iframe
                  src="https://www.youtube.com/embed/${item.youtube}"
                  title="${item.title} — music video"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                  loading="lazy"></iframe>
              </div>
          ` : "";
          return `
            <li class="audio-row${item.youtube ? " audio-row-video" : ""}">
              <div class="audio-meta-line">
                <span class="audio-num">${item.num}</span>
                <span class="audio-title">${item.title}</span>
              </div>
              ${videoBlock}
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
  document.querySelectorAll(".filter-bar").forEach(bar => {
    const chips = bar.querySelectorAll(".chip");
    const target = bar.dataset.target || "documents";
    chips.forEach(chip => {
      chip.addEventListener("click", () => {
        chips.forEach(c => c.classList.remove("active"));
        chip.classList.add("active");
        if (target === "reference") {
          renderReference(chip.dataset.filter);
        } else {
          renderDocs(chip.dataset.filter);
        }
        chip.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      });
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
// ─── Search across the library (titles + descriptions) ───
let _searchIndex = null;
function buildSearchIndex() {
  const idx = [];
  REPORTS.forEach(r => idx.push({
    label: "Report " + r.num, title: r.title, desc: r.desc,
    href: "/pdfs/adsb-report-series/" + encodeURIComponent(r.file)
  }));
  DOCUMENTS.forEach(d => idx.push({
    label: categoryLabel(d.cat), title: d.title, desc: d.desc, href: encodePath(d.file)
  }));
  REFERENCE_LIBRARY.forEach(d => idx.push({
    label: categoryLabel(d.cat), title: d.title, desc: d.desc, href: encodePath(d.file)
  }));
  MINISTERIAL.forEach(m => idx.push({
    label: "Ministerial · " + m.type, title: m.title, desc: m.desc,
    href: "/pdfs/ministerial-correspondence/" + encodeURIComponent(m.file)
  }));
  return idx;
}
function searchIndex() {
  if (!_searchIndex) _searchIndex = buildSearchIndex();
  return _searchIndex;
}
function renderSearch(q) {
  const grid = document.getElementById("search-grid");
  if (!grid) return;
  const count = document.getElementById("search-count");
  const empty = document.getElementById("search-empty");
  const query = (q || "").trim().toLowerCase();
  if (query.length < 2) {
    grid.innerHTML = "";
    if (count) count.textContent = "";
    if (empty) empty.hidden = true;
    return;
  }
  const tokens = query.split(/\s+/);
  const results = searchIndex().filter(it => {
    const hay = (it.title + " " + it.desc + " " + it.label).toLowerCase();
    return tokens.every(t => hay.includes(t));
  });
  if (count) count.textContent = results.length + (results.length === 1 ? " match" : " matches");
  if (empty) empty.hidden = results.length !== 0;
  grid.innerHTML = results.map(it => `
    <article class="card">
      <p class="card-num">${it.label}</p>
      <h3 class="card-title">${it.title}</h3>
      <p class="card-desc">${it.desc}</p>
      <div class="card-actions">
        <a class="view" href="${it.href}" target="_blank" rel="noopener">View →</a>
        <a download href="${it.href}">Download</a>
      </div>
    </article>
  `).join("");
}
function bindSearch() {
  const input = document.getElementById("search-input");
  if (!input) return;
  input.addEventListener("input", e => renderSearch(e.target.value));
}

document.addEventListener("DOMContentLoaded", () => {
  renderJustDropped();
  renderDailyNews();
  renderFlyers();
  renderReports();
  renderDocs("all");
  renderReference("all");
  renderProvinces();
  renderMinisterial();
  renderAudio();
  bindFilterChips();
  bindNavToggle();
  bindScrollSpy();
  bindSearch();
});
