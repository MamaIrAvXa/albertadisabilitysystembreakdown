/* ───────────────────────────────────────────────────────────────
   SEND THE LEGAL PACKAGE — recipient list + category-tailored cover
   letter for the Legal Package section. Self-contained; renders into
   #lps-cats / #lps-recipient if present.

   TO EDIT a recipient: change a row in LPS_R below. Give it email:"..."
   to make the provider buttons auto-fill, or url:"..." for a
   website-only contact (buttons grey out, person copies + looks up).
   Emails are used verbatim — verify against each org's site before a
   real send, as the distribution list itself advises.
   ─────────────────────────────────────────────────────────────── */
(function () {
  var ASKS = {
    legal:    "to review these materials and advise on, or take carriage of, a Charter challenge on behalf of affected Albertans",
    advocacy: "to add your organization's voice, to help route this to counsel, and to connect affected members willing to be part of the record",
    political:"to act on this \u2014 to press for a halt to the transition, individual reassessments for those already moved, and the restoration of independent appeal rights",
    oversight:"to open an investigation into the administrative fairness of the AISH-to-ADAP transition and the removal of independent appeal",
    un:       "to receive this as a formal submission, and to consider requesting interim measures and information from Canada under the Convention",
    medical:  "to corroborate, from your members' clinical experience, the distress and harm this transition is causing patients",
    media:    "to cover this story and hold the documented record up to public scrutiny"
  };
  var REQ = { legal:"legal assistance", advocacy:"your organization's voice", political:"political action",
    oversight:"an investigation", un:"a formal submission", medical:"corroboration", media:"coverage" };
  var CATS = [
    ["legal","Legal"],["advocacy","Advocacy"],["political","Political"],
    ["oversight","Oversight"],["un","UN / International"],["medical","Medical"],["media","Media"]
  ];
  var R = {
    legal:[
      {n:"Public Interest Law Clinic (PILC), U Calgary",w:"Runs public-interest / Charter litigation in Alberta.",email:"sfluker@ucalgary.ca"},
      {n:"ARCH Disability Law Centre",w:"Canada's leading disability-rights legal clinic (Charter / CRPD expertise).",email:"general@arch.clcj.ca"},
      {n:"Alberta Civil Liberties Research Centre (ACLRC)",w:"Rights research and advocacy, U of C.",email:"aclrc@ucalgary.ca"},
      {n:"Council of Canadians with Disabilities (CCD)",w:"National body with a long Charter-litigation record.",email:"ccd@ccdonline.ca"},
      {n:"Canadian Civil Liberties Association (CCLA)",w:"National Charter litigation and intervention.",email:"administration@ccla.org"},
      {n:"Legal Aid Alberta",w:"Possible coverage or referral. Phone: 1-866-845-3425.",email:"LSC@legalaid.ab.ca"},
      {n:"Pro Bono Law Alberta",w:"Matches public-interest matters with counsel.",email:"info@pbla.ca"},
      {n:"Edmonton Community Legal Centre",w:"Front-line clinic; intake and referral.",email:"intake@eclc.ca"},
      {n:"Calgary Legal Guidance",w:"Front-line clinic; intake and referral.",email:"clg@clg.ab.ca"}
    ],
    advocacy:[
      {n:"Inclusion Alberta",w:"Developmental-disability advocacy; ADAP-facts campaign.",email:"mail@inclusionalberta.org"},
      {n:"Voice of Albertans with Disabilities (VAD)",w:"",email:"vad@vadsociety.ca"},
      {n:"Disability Action Hall",w:"",email:"actionhall@calgaryscope.org"},
      {n:"Friends of Medicare",w:"Active AISH/ADAP campaign.",url:"https://www.friendsofmedicare.org/contact"},
      {n:"Gateway Association",w:"",email:"info@gatewayassociation.ca"},
      {n:"Canadian Mental Health Association \u2014 Alberta",w:"",email:"alberta@cmha.ab.ca"},
      {n:"Disability Without Poverty (national)",w:"",email:"hello@disabilitywithoutpoverty.ca"},
      {n:"Premier's Council on the Status of Persons with Disabilities (AB)",w:"",email:"pcspd@gov.ab.ca"}
    ],
    political:[
      {n:"Marie Renaud, MLA (St. Albert)",w:"Opposition critic; longstanding AISH advocate.",email:"St.Albert@assembly.ab.ca"},
      {n:"Hon. Nathan Neudorf, Minister of Assisted Living and Social Services",w:"The responsible ministry.",email:"alss.minister@gov.ab.ca"},
      {n:"Premier Danielle Smith",w:"Head of government; already responded publicly to Bruce Johnson's death.",email:"premier@gov.ab.ca"},
      {n:"Your own MLA",w:"You have constituent standing with your own MLA.",url:"https://www.assembly.ab.ca/members/members-of-the-legislative-assembly"},
      {n:"MP Michael Cooper (St. Albert\u2014Edmonton)",w:"Your federal representative, on the CDB clawback angle.",email:"michael.cooper@parl.gc.ca"},
      {n:"Federal disability portfolio \u2014 Hon. Patty Hajdu",w:"Minister of Jobs and Families; the Canada Disability Benefit clawback angle.",email:"media@hrsdc-rhdcc.gc.ca"},
      {n:"Official Opposition (Alberta NDP) caucus",w:"Amplification.",email:"NDPCaucus.Media@assembly.ab.ca"}
    ],
    oversight:[
      {n:"Alberta Ombudsman",w:"Administrative fairness of AISH/ADAP decisions. Phone: 1-888-455-2756.",email:"info@ombudsman.ab.ca"},
      {n:"Alberta Human Rights Commission",w:"File the Human Rights Complaint (Document 3) here. Phone: 1-780-427-7661.",email:"AHRC.Registrar@gov.ab.ca"},
      {n:"Auditor General of Alberta",w:"Value-for-money and contractor oversight.",url:"https://www.oag.ab.ca"},
      {n:"Alberta Information & Privacy Commissioner",w:"If automated data-matching / assessment is used.",email:"generalinfo@oipc.ab.ca"}
    ],
    un:[
      {n:"UN Committee on the Rights of Persons with Disabilities \u2014 Petitions & Inquiries",w:"Individual communication under the Optional Protocol (Canada ratified 2018); requires exhaustion of domestic remedies. Confirm the current intake before sending.",email:"petitions@ohchr.org"},
      {n:"UN Special Rapporteur on the rights of persons with disabilities",w:"Country attention; can write to Canada; no exhaustion required. Submit via the OHCHR Special Procedures portal.",url:"https://spsubmission.ohchr.org"},
      {n:"UN Special Rapporteur on extreme poverty and human rights",w:"The poverty / social-protection angle.",email:"srextremepoverty@ohchr.org"},
      {n:"UN Special Rapporteur on the right to health",w:"The health-impact / right-to-life angle.",email:"srhealth@ohchr.org"}
    ],
    medical:[
      {n:"Alberta Medical Association (AMA)",w:"Already on record about the transition.",email:"amamail@albertadoctors.org"},
      {n:"AMA Section of Family Medicine",w:"The section that has spoken publicly.",email:"section.services@albertadoctors.org"}
    ],
    media:[
      {n:"CBC Edmonton / Calgary",w:"",email:"newsedmonton@cbc.ca"},
      {n:"CTV News Edmonton / Calgary",w:"Covered Bruce Johnson.",email:"edmontonnewstips@bell.ca"},
      {n:"Global News Edmonton / Calgary",w:"Covered Bruce Johnson.",email:"edmonton@globalnews.ca"},
      {n:"Edmonton Journal / Calgary Herald",w:"Letters to the editor (Postmedia).",email:"letters@edmontonjournal.com"},
      {n:"The Tyee",w:"Investigative (national).",email:"editor@thetyee.ca"},
      {n:"The Sprawl (Calgary)",w:"Investigative (Calgary).",email:"hello@sprawlcalgary.com"},
      {n:"Disability News Service (UK)",w:"For the UK-parallel angle.",email:"john@disabilitynewsservice.com"},
      {n:"APTN News",w:"The Indigenous-community impact angle.",email:"news@aptn.ca"}
    ]
  };

  var curCat = "legal";

  function esc(s){ return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"); }

  function bodyFor(cat){
    return "Dear [Recipient],\n\n" +
"I am writing to bring you a documented and, I believe, legally actionable concern about the Government of Alberta's transition of disability income support from the Assured Income for the Severely Handicapped (AISH) program to the Alberta Disability Assistance Program (ADAP), which took effect July 2, 2026.\n\n" +
"What happened. On July 2, 2026, the Government automatically moved tens of thousands of people \u2014 from a caseload of approximately 79,290 already medically determined unable to work \u2014 onto the lower-paying, work-conditioned ADAP, without any individual reassessment. The change reverses the onus so that people already found unable to work must reapply and undergo a fresh medical assessment to keep their benefit; cuts monthly income by $200 (cushioned only by a temporary $200/month transition benefit payable from August 2026 to December 2027); and removes the independent right of appeal from the medical-eligibility (AISH-vs-ADAP placement) determination, which is made by the AISH Medical Review Panel and is final and not appealable. The employment-conditionality apparatus has been outsourced to multinational contractors \u2014 AKG Canada ($47M) and Serco Canada ($51M).\n\n" +
"Why this is not speculative. This design closely replicates the United Kingdom's work-capability and conditionality regime, which was found by a UN inquiry to have caused \u201cgrave or systematic violations\u201d of the Convention on the Rights of Persons with Disabilities (2016); was linked by coroners to individual deaths, including a finding that a \u201cfit for work\u201d assessment was the \u201ctrigger\u201d for a person's suicide; coincided, on the Government's own data, with 2,650 people dying after being assessed \u201cfit for work\u201d (December 2011 to February 2014); and was independently associated in peer-reviewed research with an estimated additional 590 suicides. Comparable systems in Australia (the Robodebt Royal Commission found an analogous automated, onus-reversing scheme \u201cneither fair nor legal\u201d) and the United States (the Arkansas Medicaid work-requirement natural experiment stripped coverage from 18,000+ eligible people with no employment gain) confirm the pattern.\n\n" +
"The harm has already begun in Alberta. On June 8, 2026, Bruce Johnson, 57, of Empress, Alberta, is believed to have died by suicide, leaving a written message attributing his deterioration to this transition and to his fear of being forced into employment activity despite a disabling condition. Alberta's own physicians, through the Alberta Medical Association, have publicly documented the distress the change is causing.\n\n" +
"What I am providing. Enclosed are four documents prepared to support legal, human-rights, and international action: (1) a Charter Challenge (draft Originating Application, ss. 7 and 15); (2) a submission to the United Nations on violations of the Convention on the Rights of Persons with Disabilities; (3) a complaint to the Alberta Human Rights Commission (services / duty to accommodate); and (4) a Comparative Evidence of Harm dossier \u2014 the cited evidentiary spine, drawn from the UK, Australia, New Zealand and the United States.\n\n" +
"What I am asking of you. I am asking you " + ASKS[cat] + ". I am ready to provide affidavits, correspondence, and further documentation, and to connect you with affected individuals and physicians willing to speak.\n\n" +
"People already found too disabled to work are being defaulted onto a lesser program and made to prove their incapacity again, with no independent appeal and with a documented, foreseeable risk to life. We were told to wait until there was proof of harm. There is proof of harm. I am asking for your help before there is more.\n\n" +
"Thank you for your time and attention.\n\n" +
"Sincerely,\n[Your name]\n[Title / role \u2014 e.g., advocate / family member / affected recipient]\n\n" +
"Enclosures: (1) Charter Challenge; (2) UN CRPD Submission; (3) Alberta Human Rights Complaint; (4) Comparative Evidence of Harm Dossier.";
  }

  function renderCats(){
    var el = document.getElementById("lps-cats");
    if (!el) return;
    el.innerHTML = CATS.map(function(c){
      return '<button type="button" class="lps-cat' + (c[0]===curCat?' active':'') + '" data-cat="' + c[0] + '">' + esc(c[1]) + '</button>';
    }).join("");
    Array.prototype.forEach.call(el.querySelectorAll(".lps-cat"), function(b){
      b.addEventListener("click", function(){ pickCat(b.getAttribute("data-cat")); });
    });
  }
  function pickCat(cat){
    curCat = cat; renderCats();
    var sel = document.getElementById("lps-recipient");
    sel.innerHTML = R[cat].map(function(r,i){ return '<option value="' + i + '">' + esc(r.n) + '</option>'; }).join("");
    document.getElementById("lps-subject").value = "Urgent: the AISH-to-ADAP transition and the foreseeable, now realized, harm to disabled Albertans \u2014 request for " + REQ[cat];
    document.getElementById("lps-body").value = bodyFor(cat);
    pickRecipient();
  }
  function pickRecipient(){
    var r = R[curCat][document.getElementById("lps-recipient").value];
    var toEl = document.getElementById("lps-to"), note = document.getElementById("lps-site-note");
    var hasEmail = !!r.email;
    document.getElementById("lps-why").textContent = r.w || "";
    ["gmail","outlook","yahoo","default"].forEach(function(p){ document.getElementById("lps-p-" + p).disabled = !hasEmail; });
    if (hasEmail){ toEl.value = r.email; note.style.display = "none"; }
    else {
      toEl.value = "";
      note.style.display = "block";
      note.innerHTML = 'No public direct email. Copy the letter, then find the current contact on their site: <a href="' + esc(r.url) + '" target="_blank" rel="noopener">' + esc(r.url.replace(/^https?:\/\//,"")) + ' \u2192</a>';
    }
  }
  function composeUrl(p,to,subject,body){
    var t=encodeURIComponent(to||""),s=encodeURIComponent(subject||""),b=encodeURIComponent(body||"");
    switch(p){
      case "gmail":   return "https://mail.google.com/mail/?view=cm&fs=1&to="+t+"&su="+s+"&body="+b;
      case "outlook": return "https://outlook.live.com/mail/0/deeplink/compose?to="+t+"&subject="+s+"&body="+b;
      case "yahoo":   return "https://compose.mail.yahoo.com/?to="+t+"&subject="+s+"&body="+b;
      default:        return "mailto:"+t+"?subject="+s+"&body="+b;
    }
  }
  function sendVia(p){
    var to=document.getElementById("lps-to").value, subject=document.getElementById("lps-subject").value, body=document.getElementById("lps-body").value;
    try{ if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(body); }catch(e){}
    var url=composeUrl(p,to,subject,body);
    if(p==="default"){ window.location.href=url; } else { window.open(url,"_blank","noopener"); }
    document.getElementById("lps-toast").textContent = "Opened your email \u2014 now attach the four PDFs before sending. The letter is also copied to your clipboard.";
  }
  function copyBody(){
    var ta=document.getElementById("lps-body"), btn=document.getElementById("lps-copy");
    var done=function(){ btn.textContent="\u2713 Copied"; btn.classList.add("copied"); setTimeout(function(){ btn.textContent="Copy the cover letter"; btn.classList.remove("copied"); },2200); };
    if(navigator.clipboard && navigator.clipboard.writeText){ navigator.clipboard.writeText(ta.value).then(done).catch(function(){ ta.focus(); ta.select(); try{document.execCommand("copy");done();}catch(e){} }); }
    else { ta.focus(); ta.select(); try{document.execCommand("copy");done();}catch(e){} }
  }

  function init(){
    if (!document.getElementById("lps-cats")) return;
    document.getElementById("lps-recipient").addEventListener("change", pickRecipient);
    document.getElementById("lps-copy").addEventListener("click", copyBody);
    ["gmail","outlook","yahoo","default"].forEach(function(p){
      document.getElementById("lps-p-" + p).addEventListener("click", function(){ sendVia(p); });
    });
    pickCat("legal");
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
