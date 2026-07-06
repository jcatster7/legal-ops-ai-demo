(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`legal-ops-demo-unlocked`,t=`04ec0a364e718d02ddcc0c889ed889f98dacc9458eaa09b7ff6e5ad850494081`,n=[{key:`beginner`,level:`Beginner`,title:`Contract and Letter Helper`,subtitle:`Paste in a contract. The tool points out what looks normal, what is missing, and what a lawyer should review.`,target:`Review routine contracts and draft simple letters for lawyer approval`,matterLabel:`Matter`,matterValue:`Vendor contract`,intakeLabel:`Request`,intakeValue:`Check this 6-page vendor contract and draft a short note asking for the missing insurance certificate.`,reviewGate:`Ready for staff review, then attorney approval`,risk:`Medium`,confidence:88,operatorSteps:[`Put the contract into the private workspace`,`Compare it with the office checklist`,`Prepare a short draft letter for attorney approval`],resultTitle:`First look`,resultSummary:`The tool did the first read and separated ordinary items from items that need a lawyer's judgment.`,findings:[`The confidentiality section looks standard.`,`The indemnity section looks different from the office checklist.`,`The renewal section is missing a 30-day notice deadline.`,`The draft note asks for the insurance certificate and flags indemnity for the attorney.`],sourceLinks:[`Office contract checklist`,`Vendor agreement pages 2-5`,`Standard vendor letter`],auditTrail:[`09:14 request opened by legal assistant`,`09:15 checklist review completed`,`09:17 draft saved; sending is still blocked`],metrics:[{label:`Time saved`,value:`35 min`},{label:`Items for lawyer`,value:`2`},{label:`Messages sent`,value:`0`}],approvalCopy:`Send to attorney`,scenarioOptions:[{name:`Lead vendor missing compliance terms`,matter:`Lead generation vendor agreement`,intake:`Review the new lead vendor agreement for TCPA consent language, consumer-finance compliance duties, audit rights, and termination triggers.`,target:`Vendor contracts, lead generation, marketing arrangements, and third-party risk`},{name:`Debt resolution enrollment script`,matter:`Consumer enrollment call script`,intake:`Check whether the script clearly explains program limits, fees, cancellation rights, and that results are not guaranteed.`,target:`Consumer disclosures, enrollment practices, call center operations, and fee practices`},{name:`Spanish disclosure first pass`,matter:`Bilingual client disclosure packet`,intake:`Compare the Spanish disclosure packet to the English version and flag missing fee, settlement, cancellation, or complaint language.`,target:`Bilingual consumer communications and disclosure control`},{name:`Settlement letter template`,matter:`Creditor settlement letter`,intake:`Draft a routine settlement confirmation letter from approved template language and flag any nonstandard consumer promise for counsel review.`,target:`Settlement-related documents and routine correspondence`},{name:`Payment processor contract`,matter:`Payment processing addendum`,intake:`Review processor terms for data handling, chargeback rights, fee changes, consumer authorization records, and audit cooperation.`,target:`Payment processing, vendor agreements, data privacy, and enterprise risk`},{name:`Marketing claims checklist`,matter:`Debt relief landing page copy`,intake:`Check the landing page for savings claims, time-to-results claims, urgency language, testimonials, and missing qualifying disclosures.`,target:`Debt relief marketing, advertising review, UDAAP risk, and consumer fairness`},{name:`Client success email`,matter:`Client status update email`,intake:`Draft a plain-English status email explaining next steps without promising a settlement outcome or minimizing consumer obligations.`,target:`Consumer communications, client success support, and attorney-approved templates`},{name:`Technology contract privacy pass`,matter:`CRM technology contract`,intake:`Flag provisions on client data, subcontractors, breach notice, data deletion, service levels, and regulatory cooperation.`,target:`Technology contracts, data privacy, and third-party service provider relationships`},{name:`Training memo from policy`,matter:`Call center compliance reminder`,intake:`Turn the approved policy into a short training memo on prohibited promises, complaint escalation, and documentation requirements.`,target:`Cross-functional training, operations controls, and legal discipline in business processes`},{name:`Fee disclosure check`,matter:`Program fee disclosure`,intake:`Compare the disclosure against the current checklist and flag unclear timing, amount, refund, cancellation, or authorization language.`,target:`Fee practices, consumer disclosures, and debt resolution legal strategy`},{name:`Vendor renewal review`,matter:`Renewal for call monitoring vendor`,intake:`Check renewal terms for auto-renewal notice, price changes, confidentiality, data rights, and audit support for examinations.`,target:`Vendor renewals, technology contracts, and scalable governance`},{name:`Outside counsel intake letter`,matter:`Outside counsel assignment`,intake:`Draft an engagement intake note summarizing matter scope, budget guardrails, records needed, and reporting cadence.`,target:`Outside counsel management, legal spend, and high-priority matters`},{name:`Executive approval packet`,matter:`New consumer-facing terms`,intake:`Prepare a first-pass executive packet listing business owner, legal risk, required approvals, source documents, and open questions.`,target:`Governance protocols, executive decision-making, and consumer-facing terms`},{name:`Complaint acknowledgment template`,matter:`Complaint acknowledgment letter`,intake:`Draft an acknowledgment that confirms receipt, preserves investigation posture, avoids admission, and routes legal review.`,target:`Complaint handling, consumer communications, and defensible remediation`},{name:`Affiliate marketing addendum`,matter:`Affiliate marketing agreement`,intake:`Review the addendum for prohibited claims, approval rights, record retention, consumer consent proof, and termination rights.`,target:`Marketing arrangements, lead generation, compliance controls, and reputation risk`},{name:`Call recording consent checklist`,matter:`Call recording notice language`,intake:`Check whether the notice and script cover recording consent, monitoring, opt-out handling, and state-law escalation needs.`,target:`Call center operations, telemarketing, consumer protection, and state requirements`},{name:`Data deletion vendor letter`,matter:`Vendor data deletion request`,intake:`Draft a vendor letter requiring deletion confirmation, retained-record exceptions, and a named contact for audit support.`,target:`Data privacy, third-party service providers, and compliance documentation`},{name:`Collections communication review`,matter:`Creditor communication template`,intake:`Review template language for consumer authorization, debt collection sensitivity, prohibited pressure, and escalation language.`,target:`Debt collection principles, consumer communications, and operational controls`},{name:`Board update shell`,matter:`Quarterly legal risk update`,intake:`Create a structured board update shell covering regulatory activity, complaints, litigation, vendors, policy changes, and decisions needed.`,target:`Corporate governance, executive communication, and enterprise legal leadership`},{name:`Audit request tracker`,matter:`Internal compliance audit request`,intake:`Turn audit requests into a tracker with owner, source document, due date, legal sensitivity, and response status.`,target:`Audits, accountability, legal frameworks, and cross-functional controls`},{name:`Consumer terms comparison`,matter:`Updated consumer terms`,intake:`Compare updated terms to the prior version and flag fee, cancellation, dispute, data, and communications changes for counsel.`,target:`Consumer-facing terms, strategic commercial support, and risk tolerance`},{name:`CEO briefing note`,matter:`New state licensing question`,intake:`Draft a one-page CEO briefing note summarizing business question, state issue, operational impact, and counsel decision needed.`,target:`CEO advisory support, regulatory strategy, and executive clarity`},{name:`Policy exception request`,matter:`Sales team exception request`,intake:`Prepare an exception review note identifying requested deviation, consumer impact, legal concern, approval path, and recordkeeping need.`,target:`Governance discipline, sales operations, and consumer fairness`}]},{key:`medium`,level:`Medium`,title:`Complaint Sorting Helper`,subtitle:`When a complaint comes in, the tool helps decide whether it is routine or needs the attorney right away.`,target:`Sort complaints, government questions, and sensitive customer messages`,matterLabel:`Incoming message`,matterValue:`Repeat client complaint mentioning a state regulator`,intakeLabel:`Message`,intakeValue:`Customer says they already complained twice, names the state regulator, and asks for a written response by Friday.`,reviewGate:`No automatic reply; sent to the attorney`,risk:`High`,confidence:94,operatorSteps:[`Bring in the message from the shared inbox`,`Look for words that make it legally sensitive`,`Send the attorney a short summary and the original message`],resultTitle:`Attorney summary`,resultSummary:`The tool saw that this was not a normal customer-service issue and stopped any automatic reply.`,findings:[`The message names a regulator and says this is a repeat complaint.`,`The attorney should handle the response.`,`The summary includes the timeline, prior messages, the policy, and open questions.`,`The tool does not draft a reply for this high-risk item.`],sourceLinks:[`Complaint policy`,`Shared inbox thread`,`Customer-service history`],auditTrail:[`10:32 complaint received from shared inbox`,`10:32 marked as high risk`,`10:33 attorney summary prepared`],metrics:[{label:`Sorting time`,value:`54 sec`},{label:`Warning signs`,value:`3`},{label:`Replies blocked`,value:`1`}],approvalCopy:`Open attorney summary`,scenarioOptions:[{name:`State regulator named`,matter:`Repeat complaint mentioning state regulator`,intake:`Customer says they complained twice, names a state regulator, and demands a written response by Friday.`,target:`High-risk complaint handling, regulatory escalation, and attorney summary`},{name:`Attorney demand letter`,matter:`Consumer attorney letter`,intake:`An attorney representing a client alleges misleading enrollment promises and requests the file, recordings, and fee history.`,target:`Disputes, litigation risk, outside counsel routing, and evidence preservation`},{name:`BBB public complaint`,matter:`Public BBB complaint`,intake:`Consumer says fees were charged before settlement and posts screenshots of enrollment messages in a public complaint.`,target:`Reputation risk, fee-practice escalation, and controlled response drafting`},{name:`Social post going viral`,matter:`Viral social media claim`,intake:`A client says the company ruined their credit, tags reporters, and asks other consumers to join a complaint campaign.`,target:`Social response routing, reputation risk, and consumer protection review`},{name:`Possible UDAAP language`,matter:`Misleading savings allegation`,intake:`Consumer says the sales representative guaranteed a 50 percent reduction and told them to stop answering creditor calls.`,target:`UDAAP risk, enrollment practice review, and call recording retrieval`},{name:`Telemarketing consent dispute`,matter:`Do-not-call complaint`,intake:`Prospect claims they never consented to calls, asked twice to stop, and received another enrollment pitch yesterday.`,target:`Telemarketing, TCPA-style consent records, and call center controls`},{name:`State AG inquiry`,matter:`State attorney general intake`,intake:`State AG staff requests complaint history, marketing materials, scripts, refund policy, and contact for a voluntary response.`,target:`Regulatory inquiry triage, executive routing, and response governance`},{name:`Subpoena received`,matter:`Civil subpoena intake`,intake:`Subpoena seeks consumer files, advertising records, payment data, and communications with a lead vendor for a two-year period.`,target:`Subpoena intake, legal hold, outside counsel review, and production controls`},{name:`Regulatory exam request`,matter:`Exam document request`,intake:`Exam team asks for policies, complaint logs, call monitoring results, fee disclosures, and vendor oversight records.`,target:`Regulatory examination support, audit trail, and executive status reporting`},{name:`Payment complaint spike`,matter:`Cluster of payment complaints`,intake:`Five clients complain about unexpected drafts after cancellation requests; operations says processor file timing may be involved.`,target:`Payment processing risk, remediation triage, and cross-functional escalation`},{name:`Spanish-speaking client issue`,matter:`Spanish disclosure complaint`,intake:`Client says the Spanish explanation did not match the English enrollment terms and they did not understand the fee timing.`,target:`Bilingual complaint handling, disclosure review, and consumer fairness`},{name:`Former employee allegation`,matter:`Whistleblower-style message`,intake:`Former employee claims sales managers encouraged reps to avoid documenting cancellation questions during enrollment calls.`,target:`Investigation intake, employment sensitivity, compliance controls, and executive routing`},{name:`Lead source complaint`,matter:`Bad lead source allegation`,intake:`Consumer says an affiliate promised government-backed debt forgiveness before transferring the call to the enrollment team.`,target:`Lead generation oversight, marketing claims, and vendor remediation`},{name:`Military consumer concern`,matter:`Servicemember complaint`,intake:`Active-duty consumer says payment timing and settlement promises created hardship while they were deployed.`,target:`Sensitive consumer complaint routing, fairness, and legal review`},{name:`Elder consumer escalation`,matter:`Senior client complaint`,intake:`Adult child claims an elderly parent enrolled without understanding fees, cancellation rights, or creditor consequences.`,target:`Vulnerable consumer escalation, documentation review, and remediation decisioning`},{name:`Cancellation deadline dispute`,matter:`Cancellation request conflict`,intake:`Client says they canceled before the deadline but still received fee notices and collection-style follow-up messages.`,target:`Cancellation practices, consumer communications, and fee dispute handling`},{name:`Data privacy complaint`,matter:`Consumer data access request`,intake:`Consumer asks for all data held about them and complains that a vendor contacted them after opt-out.`,target:`Data privacy, third-party vendor issue, and consumer request routing`},{name:`Call center script deviation`,matter:`Quality review escalation`,intake:`QA flags a call where a representative skipped the fee explanation and told the consumer the program was risk free.`,target:`Call center compliance, training controls, and corrective action planning`},{name:`Refund demand`,matter:`Refund demand after no settlement`,intake:`Client demands full refund, says no debts were settled, and threatens to file complaints with multiple agencies.`,target:`Refund dispute, complaint severity, and legal review before response`},{name:`Executive inbox escalation`,matter:`CEO forwarded complaint`,intake:`CEO receives a complaint alleging deceptive marketing, pressure sales tactics, and refusal to cancel.`,target:`Executive communication, legal triage, and consistent response governance`},{name:`Audit finding follow-up`,matter:`Compliance audit finding`,intake:`Audit team finds missing consent evidence for a batch of outbound calls and asks legal whether outreach should pause.`,target:`Audit response, telemarketing controls, and risk-tolerance decision`},{name:`Media inquiry`,matter:`Reporter inquiry`,intake:`Reporter asks for comment on consumer complaints about debt settlement fees and lead generator claims.`,target:`Reputation risk, public response control, and executive alignment`},{name:`Outside counsel litigation update`,matter:`Litigation status update`,intake:`Outside counsel sends a new motion deadline and asks for consumer communications, enrollment recordings, and settlement notes.`,target:`Litigation coordination, outside counsel management, and evidence collection`}]},{key:`advanced`,level:`Advanced`,title:`Research and Evidence Helper`,subtitle:`The tool gathers the documents, builds a timeline, and shows the source for every legal point.`,target:`Prepare research notes and evidence binders for hearings`,matterLabel:`Situation`,matterValue:`Hearing preparation for a disputed service cancellation`,intakeLabel:`Research question`,intakeValue:`Identify the governing cancellation notice standard and assemble a timeline from emails, tickets, and signed documents.`,reviewGate:`No source, no legal reference`,risk:`Medium`,confidence:91,operatorSteps:[`Search the office policy and matter file`,`Look up the legal source`,`Build a binder with links back to each document`],resultTitle:`Research note`,resultSummary:`Every legal point and document stays tied to a source the attorney can click and check.`,findings:[`The issue statement is based on the facts in the matter file.`,`Three legal sources are listed with links.`,`The timeline uses the signed agreement, cancellation email, and service tickets.`,`One legal reference was left out because the tool could not verify it.`],sourceLinks:[`Matter file #CXL-1842`,`Office cancellation policy`,`Statute and case-law source`],auditTrail:[`14:06 facts entered`,`14:08 sources found`,`14:10 note locked until attorney review`],metrics:[{label:`Sources linked`,value:`12`},{label:`Unchecked references`,value:`0`},{label:`Binder pages`,value:`18`}],approvalCopy:`Prepare attorney note`,scenarioOptions:[{name:`Regulatory exam binder`,matter:`Consumer finance exam preparation`,intake:`Assemble source-linked materials for complaint handling, marketing approval, fee disclosures, vendor oversight, and call monitoring.`,target:`Regulatory examinations, audits, executive reporting, and source-backed evidence`},{name:`State AG response record`,matter:`State attorney general inquiry`,intake:`Build a chronology and response packet from consumer file, scripts, disclosures, complaint notes, refund records, and policy sources.`,target:`State AG inquiries, response governance, and defensible remediation`},{name:`CID document map`,matter:`Civil investigative demand`,intake:`Create a document map for marketing claims, lead sources, call recordings, consumer complaints, vendor contracts, and retention gaps.`,target:`Investigations, CIDs, subpoena response, and evidence compilation`},{name:`UDAAP risk memo`,matter:`Savings-claim legal research`,intake:`Research source-backed guidance on debt relief savings claims and connect it to current landing page, script, and complaint evidence.`,target:`Consumer protection frameworks, UDAAP risk, and executive legal strategy`},{name:`Telemarketing control review`,matter:`Outbound calling compliance`,intake:`Compile consent records, opt-out logs, call timestamps, vendor lead source data, and relevant telemarketing obligations.`,target:`Telemarketing, call center operations, consent evidence, and state requirements`},{name:`Fee practice research packet`,matter:`Debt resolution fee timing`,intake:`Prepare a research memo and evidence packet on fee timing, settlement milestones, cancellation history, and consumer disclosures.`,target:`Fee practices, debt relief regulation, and consumer disclosure governance`},{name:`Vendor oversight audit`,matter:`Lead vendor compliance audit`,intake:`Assemble contract terms, approved copy, consumer consent proof, complaint links, audit rights, and remediation history.`,target:`Third-party service provider oversight, lead generation, and marketing controls`},{name:`Litigation chronology`,matter:`Consumer lawsuit timeline`,intake:`Create a timeline from enrollment call, disclosures, payment history, cancellation request, complaint messages, and counsel letters.`,target:`Litigation support, evidence binder, outside counsel coordination, and legal spend`},{name:`Complaint trend analysis`,matter:`Quarterly complaint governance`,intake:`Group complaint records by issue type, product stage, vendor source, language, state, remediation, and executive action needed.`,target:`Enterprise risk management, complaint governance, and leadership accountability`},{name:`Marketing enforcement scan`,matter:`Debt relief advertising enforcement`,intake:`Research recent enforcement themes and compare them to current claims, disclaimers, testimonials, and affiliate scripts.`,target:`Regulatory developments, marketing risk, and proactive legal posture`},{name:`Board-level risk dashboard`,matter:`Executive legal dashboard`,intake:`Build source-backed dashboard inputs for complaints, exams, lawsuits, vendors, policies, remediation plans, and open decisions.`,target:`Governance priorities, senior leadership reporting, and corporate stewardship`},{name:`Corrective action evidence`,matter:`CAP tracking packet`,intake:`Compile corrective action plan evidence: owner, control change, training proof, QA results, policy updates, and closure support.`,target:`Corrective action planning, audits, regulatory response, and accountability`},{name:`State expansion research`,matter:`New state operations review`,intake:`Research state consumer-finance requirements, licensing questions, disclosure issues, complaint routing, and operational limits.`,target:`Growth strategy, state regulatory requirements, and risk tolerance`},{name:`Payment processor incident`,matter:`Unexpected draft incident`,intake:`Assemble payment files, cancellation records, consumer notices, processor contract terms, complaint cluster, and remediation options.`,target:`Payment processing, consumer remediation, vendor accountability, and legal risk`},{name:`Data privacy incident file`,matter:`Vendor data exposure review`,intake:`Compile facts, impacted consumers, vendor contract duties, notification obligations, data deletion proof, and executive decision points.`,target:`Data privacy, vendor management, investigations, and executive communication`},{name:`Spanish-language control audit`,matter:`Bilingual disclosure consistency`,intake:`Compare English and Spanish materials, call scripts, training records, complaint notes, and remediation history.`,target:`Bilingual consumer fairness, disclosure controls, and operational risk`},{name:`Call monitoring evidence set`,matter:`Sales call QA investigation`,intake:`Pull call recordings, QA notes, script version, rep training, supervisor notes, and consumer outcome into a review binder.`,target:`Call center operations, investigations, training, and compliance controls`},{name:`Policy change impact memo`,matter:`New complaint escalation policy`,intake:`Prepare a memo linking regulatory expectations, current process gaps, training needs, system changes, and leadership approvals.`,target:`Legal frameworks, scalable growth, and cross-functional implementation`},{name:`Subpoena privilege review`,matter:`Production review set`,intake:`Create a review map separating responsive records, privileged material, privacy-sensitive data, retention gaps, and outside counsel questions.`,target:`Subpoenas, investigations, privilege review, and production governance`},{name:`Refund remediation model`,matter:`Potential fee remediation`,intake:`Identify affected consumers, source evidence, fee amounts, cancellation dates, complaint severity, and proposed remediation categories.`,target:`Remediation strategy, enterprise risk, and consumer fairness`},{name:`Vendor termination file`,matter:`Terminating bad lead source`,intake:`Compile contract rights, bad claims, complaint examples, consent gaps, notices, and replacement-risk issues for counsel.`,target:`Vendor termination, lead generation controls, and reputation risk`},{name:`Executive decision memo`,matter:`Pause disputed marketing campaign`,intake:`Build a decision memo with campaign claims, complaint evidence, risk level, revenue impact, safer alternatives, and approval path.`,target:`CEO advisory role, legal strategy, business judgment, and risk tolerance`},{name:`Hearing evidence binder`,matter:`Consumer dispute hearing`,intake:`Assemble signed agreement, disclosures, call recording index, payment history, cancellation notices, complaint thread, and legal source notes.`,target:`Evidence compilation, hearings, legal research, and attorney-ready packets`}]}],r=document.querySelector(`#app`);if(!r)throw Error(`App root not found`);var i=r;i.innerHTML=`
  <main>
    <section class="hero" aria-labelledby="page-title">
      <div class="hero__content">
        <p class="eyebrow">correctanswergenerator.com</p>
        <h1 id="page-title">Simple AI help for a legal office.</h1>
        <p>
          Three plain examples: review a contract, sort a serious complaint, and gather
          research. The AI helps prepare the work. The attorney still decides.
        </p>
        <div class="hero__actions" aria-label="Primary actions">
          <a class="button button--primary" href="#demo-builder">Open examples</a>
          <a class="button button--ghost" href="#operating-rules">Show safety rules</a>
        </div>
      </div>

      <aside class="briefing" aria-label="Demo briefing">
        <div class="briefing__header">
          <span>How to explain it</span>
          <strong>4 minutes</strong>
        </div>
        <ol>
          <li>Start with privacy and attorney control.</li>
          <li>Open one example and read it like a normal file.</li>
          <li>Show what the tool prepares, blocks, and saves for review.</li>
        </ol>
      </aside>
    </section>

    <section class="rules" id="operating-rules" aria-label="Operating rules">
      <article>
        <span>01</span>
        <h2>Private work only</h2>
        <p>Client and employee information stays in approved office tools, not personal AI accounts.</p>
      </article>
      <article>
        <span>02</span>
        <h2>Show the source</h2>
        <p>The tool cannot use a case, policy, or document unless the attorney can see where it came from.</p>
      </article>
      <article>
        <span>03</span>
        <h2>Attorney approves</h2>
        <p>The tool prepares drafts and summaries. The attorney approves judgment calls and outside messages.</p>
      </article>
    </section>

    <section class="workspace" id="demo-builder" aria-labelledby="workspace-title">
      <div class="workspace__intro">
        <p class="eyebrow">Three examples</p>
        <h2 id="workspace-title">Pick the office task you want to show.</h2>
      </div>

      <div class="demo-tabs" role="tablist" aria-label="Demo levels">
        ${n.map((e,t)=>`
              <button
                class="demo-tab${t===0?` is-active`:``}"
                type="button"
                role="tab"
                aria-selected="${t===0}"
                aria-controls="demo-panel"
                data-demo="${e.key}"
                id="tab-${e.key}"
                tabindex="${t===0?`0`:`-1`}"
              >
                <span>${e.level}</span>
                <strong>${e.title}</strong>
              </button>
            `).join(``)}
      </div>

      <div class="console" id="demo-panel" role="tabpanel" aria-live="polite" aria-labelledby="tab-beginner"></div>
    </section>
  </main>
`;var a=document.querySelector(`#demo-panel`),o=Array.from(document.querySelectorAll(`.demo-tab`));if(!a)throw Error(`Demo panel not found`);var s=a;async function c(e){if(!globalThis.crypto?.subtle)return u(e);let t=new TextEncoder().encode(e),n=await crypto.subtle.digest(`SHA-256`,t);return Array.from(new Uint8Array(n)).map(e=>e.toString(16).padStart(2,`0`)).join(``)}function l(e,t){return e>>>t|e<<32-t}function u(e){let t=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],n=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],r=Array.from(new TextEncoder().encode(e)),i=r.length*8,a=Array(64).fill(0);for(r.push(128);r.length%64!=56;)r.push(0);let o=Math.floor(i/4294967296),s=i>>>0;for(let e=24;e>=0;e-=8)r.push(o>>>e&255);for(let e=24;e>=0;e-=8)r.push(s>>>e&255);for(let e=0;e<r.length;e+=64){for(let t=0;t<16;t+=1){let n=e+t*4;a[t]=(r[n]<<24|r[n+1]<<16|r[n+2]<<8|r[n+3])>>>0}for(let e=16;e<64;e+=1){let t=l(a[e-15],7)^l(a[e-15],18)^a[e-15]>>>3,n=l(a[e-2],17)^l(a[e-2],19)^a[e-2]>>>10;a[e]=a[e-16]+t+a[e-7]+n>>>0}let[i,o,s,c,u,d,f,p]=n;for(let e=0;e<64;e+=1){let n=l(u,6)^l(u,11)^l(u,25),r=u&d^~u&f,m=p+n+r+t[e]+a[e]>>>0,h=(l(i,2)^l(i,13)^l(i,22))+(i&o^i&s^o&s)>>>0;p=f,f=d,d=u,u=c+m>>>0,c=s,s=o,o=i,i=m+h>>>0}n[0]=n[0]+i>>>0,n[1]=n[1]+o>>>0,n[2]=n[2]+s>>>0,n[3]=n[3]+c>>>0,n[4]=n[4]+u>>>0,n[5]=n[5]+d>>>0,n[6]=n[6]+f>>>0,n[7]=n[7]+p>>>0}return n.map(e=>e.toString(16).padStart(8,`0`)).join(``)}function d(){if(sessionStorage.getItem(e)===`true`)return;i.classList.add(`is-locked`),i.insertAdjacentHTML(`afterbegin`,`
      <section class="access-gate" aria-labelledby="access-title">
        <form class="access-card">
          <p class="eyebrow">Private demo</p>
          <h2 id="access-title">Simple legal AI demo</h2>
          <p>Enter the interview demo password to continue.</p>
          <label>
            <span>Password</span>
            <input class="access-password" type="password" autocomplete="current-password" autofocus />
          </label>
          <button class="button button--primary" type="submit">Unlock demo</button>
          <p class="access-error" role="alert" aria-live="polite"></p>
        </form>
      </section>
    `);let n=i.querySelector(`.access-gate`),r=i.querySelector(`.access-card`),a=i.querySelector(`.access-password`),o=i.querySelector(`.access-error`);r?.addEventListener(`submit`,async r=>{if(r.preventDefault(),!(!a||!o||!n)){if(await c(a.value)!==t){o.textContent=`Password not recognized.`,a.select();return}sessionStorage.setItem(e,`true`),i.classList.remove(`is-locked`),n.remove()}})}function f(e){return e.toLowerCase()}function p(e,t){let n=e.trim().replace(/\s+/g,` `);return n?n.length>94?`${n.slice(0,91)}...`:n:t}function m(e){return e.key===`beginner`?`First-pass contract packet refreshed from the fields above: checklist notes, missing-item request, and lawyer review items are ready.`:e.key===`medium`?`Complaint triage refreshed from the fields above: risk flags are separated from routine support issues, and outside reply stays blocked.`:`Research packet refreshed from the fields above: fact question, source check, and evidence binder request are ready for attorney review.`}function h(e,t,n,r){let i=p(t,e.matterValue),a=p(n,e.intakeValue),o=p(r,e.target);return e.key===`beginner`?[`Matter checked: ${i}.`,`Request captured: ${a}.`,`Draft letter is prepared, but sending remains blocked until attorney approval.`,`Posting fit: ${o}.`]:e.key===`medium`?[`Inbound item checked: ${i}.`,`Risk language reviewed from message: ${a}.`,`Automatic reply remains blocked because the item needs legal review.`,`Posting fit: ${o}.`]:[`Research matter framed: ${i}.`,`Question and binder request captured from: ${a}.`,`No legal reference is allowed into the packet unless it has a clickable source.`,`Posting fit: ${o}.`]}function g(e){let t=new Intl.DateTimeFormat(`en-US`,{hour:`2-digit`,minute:`2-digit`}).format(new Date);return e.key===`beginner`?[`${t} fields edited on-screen`,`${t} checklist packet refreshed`,`${t} draft saved; attorney approval still required`]:e.key===`medium`?[`${t} message triaged from edited fields`,`${t} high-risk summary refreshed`,`${t} outside reply blocked until attorney review`]:[`${t} research question refreshed`,`${t} evidence binder request prepared`,`${t} source check required before attorney use`]}function _(e,t){e&&e.replaceChildren(...t.map(e=>{let t=document.createElement(`li`);return t.textContent=e,t}))}function v(e){return e.key===`beginner`?`Attorney Review Packet - Contract and Correspondence`:e.key===`medium`?`Attorney Review Packet - Complaint Escalation`:`Attorney Review Packet - Research and Evidence`}function y(e){return e.key===`beginner`?`Recommended next step: attorney reviews the flagged contract terms and approves any outside correspondence.`:e.key===`medium`?`Recommended next step: attorney controls the response; no automatic outside reply is sent.`:`Recommended next step: attorney verifies sources before relying on any legal reference or evidence binder.`}function b(e,t,n,r,i){return[v(e),``,`Matter: ${p(t,e.matterValue)}`,`Risk: ${e.risk}`,`Posting fit: ${p(r,e.target)}`,``,`Intake`,p(n,e.intakeValue),``,`Prepared Work`,...i.map(e=>`- ${e}`),``,`Sources To Check`,...e.sourceLinks.map(e=>`- ${e}`),``,`Attorney Gate`,y(e)].join(`
`)}function x(e){return e.replace(/[^\x20-\x7e\n]/g,``).replace(/[\\()]/g,e=>`\\${e}`)}function S(e,t=88){let n=e.trim().split(/\s+/).filter(Boolean),r=[],i=``;return n.forEach(e=>{let n=i?`${i} ${e}`:e;if(n.length>t&&i){r.push(i),i=e;return}i=n}),i&&r.push(i),r.length?r:[``]}function C(e){let t=[`BT`,`/F1 16 Tf`,`72 742 Td`,`16 TL`,...e.split(`
`).flatMap(e=>e.trim()?S(e):[``]).slice(0,48).map((e,t)=>{let n=`${t===1?`/F1 10 Tf `:``}(${x(e)}) Tj`;return t===0?n:`T* ${n}`}),`ET`].join(`
`),n=[`<< /Type /Catalog /Pages 2 0 R >>`,`<< /Type /Pages /Kids [3 0 R] /Count 1 >>`,`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>`,`<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>`,`<< /Length ${t.length} >>\nstream\n${t}\nendstream`],r=[0],i=`%PDF-1.4
`;n.forEach((e,t)=>{r.push(i.length),i+=`${t+1} 0 obj\n${e}\nendobj\n`});let a=i.length;return i+=`xref\n0 ${n.length+1}\n`,i+=`0000000000 65535 f 
`,r.slice(1).forEach(e=>{i+=`${String(e).padStart(10,`0`)} 00000 n \n`}),i+=`trailer\n<< /Size ${n.length+1} /Root 1 0 R >>\nstartxref\n${a}\n%%EOF`,i}function w(e){return`data:application/pdf;base64,${btoa(C(e))}`}function T(e,t,n){e&&(e.href=w(n),e.download=t)}function E(e){let t=n.find(t=>t.key===e)??n[0];o.forEach(e=>{let n=e.dataset.demo===t.key;e.classList.toggle(`is-active`,n),e.setAttribute(`aria-selected`,String(n)),e.setAttribute(`tabindex`,n?`0`:`-1`)}),s.setAttribute(`aria-labelledby`,`tab-${t.key}`),s.innerHTML=`
    <div class="console__top">
      <section class="intake" aria-label="${t.level} intake">
        <div>
          <p class="level">${t.level}</p>
          <h3>${t.title}</h3>
          <p>${t.subtitle}</p>
        </div>

        <label class="scenario-picker">
          <span>Scenario library (${t.scenarioOptions.length})</span>
          <select class="scenario-select">
            <option value="">Use current sample</option>
            ${t.scenarioOptions.map((e,t)=>`
                  <option value="${t}">${e.name}</option>
                `).join(``)}
          </select>
        </label>

        <label>
          <span>${t.matterLabel}</span>
          <input class="matter-field" type="text" value="${t.matterValue}" />
        </label>

        <label>
          <span>${t.intakeLabel}</span>
          <textarea class="intake-field">${t.intakeValue}</textarea>
        </label>
        <p class="field-note">Use the sample text or replace it with a real contract, complaint, or fact pattern.</p>

        <label class="target">
          <span>Posting fit</span>
          <textarea class="target-field">${t.target}</textarea>
        </label>
      </section>

      <section class="run-panel" aria-label="What the tool does">
        <div class="status-card">
          <span class="risk risk--${f(t.risk)}">${t.risk} risk</span>
          <strong>${t.confidence}% checked</strong>
          <p>${t.reviewGate}</p>
        </div>

        <div class="steps">
          ${t.operatorSteps.map((e,t)=>`
                <div class="step">
                  <span>${t+1}</span>
                  <p>${e}</p>
                </div>
              `).join(``)}
        </div>

        <button class="button button--secondary run-button" type="button">
          Run helper on these fields
        </button>
        <p class="run-status" role="status" aria-live="polite">
          Edit the fields, then run the helper to refresh the work packet.
        </p>

        <div class="packet-actions" aria-label="Attorney packet actions">
          <button class="button button--primary packet-preview-button" type="button">
            Open attorney packet
          </button>
          <button class="button button--secondary print-packet-button" type="button">
            Print / save PDF
          </button>
          <a class="button button--secondary download-packet-button" href="#" download="${t.key}-attorney-review-packet.pdf">
            Download PDF
          </a>
        </div>
        <p class="packet-status" role="status" aria-live="polite">
          No attorney packet generated yet.
        </p>

        <button class="button button--primary approval-button" type="button" data-approval="${t.key}">
          ${t.approvalCopy}
        </button>
        <p class="approval-status" role="status" aria-live="polite">
          Waiting for attorney approval before anything leaves the office.
        </p>
      </section>
    </div>

    <div class="metrics" aria-label="Demo metrics">
      ${t.metrics.map(e=>`
            <div>
              <span>${e.label}</span>
              <strong>${e.value}</strong>
            </div>
          `).join(``)}
    </div>

    <div class="console__bottom">
      <article class="output-card output-card--wide">
        <div class="card-heading">
          <span>Prepared work</span>
          <strong>${t.resultTitle}</strong>
        </div>
        <p class="result-summary">${t.resultSummary}</p>
        <ul class="findings-list">
          ${t.findings.map(e=>`<li>${e}</li>`).join(``)}
        </ul>
      </article>

      <article class="output-card">
        <div class="card-heading">
          <span>Sources</span>
          <strong>No source, no legal reference</strong>
        </div>
        <ul class="source-list">
          ${t.sourceLinks.map(e=>`<li>${e}</li>`).join(``)}
        </ul>
      </article>

      <article class="output-card">
        <div class="card-heading">
          <span>Saved record</span>
          <strong>Easy to review</strong>
        </div>
        <ul class="audit-list">
          ${t.auditTrail.map(e=>`<li>${e}</li>`).join(``)}
        </ul>
      </article>
    </div>

    <section class="attorney-packet" aria-labelledby="packet-heading">
      <div class="packet-paper">
        <div class="packet-header">
          <div>
            <p class="eyebrow">End product</p>
            <h3 id="packet-heading">${v(t)}</h3>
          </div>
          <span class="packet-stamp">Attorney review required</span>
        </div>

        <dl class="packet-grid">
          <div>
            <dt>Matter</dt>
            <dd class="packet-matter">${t.matterValue}</dd>
          </div>
          <div>
            <dt>Risk</dt>
            <dd>${t.risk}</dd>
          </div>
          <div>
            <dt>Prepared by</dt>
            <dd>AI assistant draft for legal review</dd>
          </div>
        </dl>

        <section class="packet-section">
          <h4>Intake Summary</h4>
          <p class="packet-intake">${t.intakeValue}</p>
        </section>

        <section class="packet-section">
          <h4>Attorney Review Items</h4>
          <ul class="packet-findings">
            ${t.findings.map(e=>`<li>${e}</li>`).join(``)}
          </ul>
        </section>

        <section class="packet-section">
          <h4>Sources To Check</h4>
          <ul class="packet-sources">
            ${t.sourceLinks.map(e=>`<li>${e}</li>`).join(``)}
          </ul>
        </section>

        <section class="packet-section packet-section--decision">
          <h4>Attorney Gate</h4>
          <p class="packet-decision">${y(t)}</p>
        </section>
      </div>
    </section>
  `;let r=s.querySelector(`.scenario-select`),i=s.querySelector(`.matter-field`),a=s.querySelector(`.intake-field`),c=s.querySelector(`.target-field`),l=s.querySelector(`.run-button`),u=s.querySelector(`.run-status`),d=s.querySelector(`.packet-preview-button`),x=s.querySelector(`.print-packet-button`),S=s.querySelector(`.download-packet-button`),C=s.querySelector(`.packet-status`),w=s.querySelector(`.attorney-packet`),E=s.querySelector(`.packet-matter`),D=s.querySelector(`.packet-intake`),O=s.querySelector(`.packet-findings`),k=s.querySelector(`.packet-sources`),A=s.querySelector(`.packet-decision`),j=s.querySelector(`.result-summary`),M=s.querySelector(`.findings-list`),N=s.querySelector(`.audit-list`),P=s.querySelector(`.approval-button`),F=s.querySelector(`.approval-status`),I=b(t,t.matterValue,t.intakeValue,t.target,t.findings);T(S,`${t.key}-attorney-review-packet.pdf`,I);let L=(e=!1)=>{let n=i?.value??``,r=a?.value??``,o=c?.value??``,s=h(t,n,r,o);E&&(E.textContent=p(n,t.matterValue)),D&&(D.textContent=p(r,t.intakeValue)),_(O,s),_(k,t.sourceLinks),A&&(A.textContent=y(t)),I=b(t,n,r,o,s),T(S,`${t.key}-attorney-review-packet.pdf`,I),C&&(C.textContent=`Attorney review packet generated. Download PDF creates the file for this stage.`),e&&w?.scrollIntoView({behavior:`smooth`,block:`start`})};r?.addEventListener(`change`,()=>{let e=Number(r.value),n=t.scenarioOptions[e];!n||!i||!a||!c||(i.value=n.matter,a.value=n.intake,c.value=n.target,u&&(u.textContent=`Scenario loaded. Run the helper to refresh the work packet.`),C&&(C.textContent=`Scenario loaded. Open the attorney packet to generate the end product.`),F&&(F.textContent=`Waiting for attorney approval before anything leaves the office.`))}),l?.addEventListener(`click`,()=>{let e=i?.value??``,n=a?.value??``,r=c?.value??``,o=h(t,e,n,r);j&&(j.textContent=m(t)),_(M,o),_(N,g(t)),L(),u&&(u.textContent=`Work packet refreshed from the fields on this screen.`),F&&(F.textContent=`Packet refreshed. Attorney approval is still required before anything leaves the office.`)}),d?.addEventListener(`click`,()=>{L(!0)}),x?.addEventListener(`click`,()=>{L(),window.print()}),S?.addEventListener(`click`,()=>{L()}),P?.addEventListener(`click`,()=>{F&&(F.textContent=`${t.approvalCopy} opened. Nothing is sent outside the office until the attorney signs off.`)})}o.forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.demo;t&&E(t)}),e.addEventListener(`keydown`,t=>{let n=o.indexOf(e),r=o.length-1,i;if(t.key===`ArrowRight`&&(i=n===r?0:n+1),t.key===`ArrowLeft`&&(i=n===0?r:n-1),t.key===`Home`&&(i=0),t.key===`End`&&(i=r),i===void 0)return;t.preventDefault();let a=o[i],s=a.dataset.demo;s&&(a.focus(),E(s))})}),E(`beginner`),d();