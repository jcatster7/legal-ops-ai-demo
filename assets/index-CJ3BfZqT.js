(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`legal-ops-demo-unlocked`,t=`04ec0a364e718d02ddcc0c889ed889f98dacc9458eaa09b7ff6e5ad850494081`,n=[{key:`beginner`,level:`Beginner`,title:`Contract and Letter Helper`,subtitle:`Paste in a contract. The tool points out what looks normal, what is missing, and what a lawyer should review.`,target:`Review routine contracts and draft simple letters for lawyer approval`,matterLabel:`Matter`,matterValue:`Vendor contract`,intakeLabel:`Request`,intakeValue:`Check this 6-page vendor contract and draft a short note asking for the missing insurance certificate.`,reviewGate:`Ready for staff review, then attorney approval`,risk:`Medium`,confidence:88,operatorSteps:[`Put the contract into the private workspace`,`Compare it with the office checklist`,`Prepare a short draft letter for attorney approval`],resultTitle:`First look`,resultSummary:`The tool did the first read and separated ordinary items from items that need a lawyer's judgment.`,findings:[`The confidentiality section looks standard.`,`The indemnity section looks different from the office checklist.`,`The renewal section is missing a 30-day notice deadline.`,`The draft note asks for the insurance certificate and flags indemnity for the attorney.`],sourceLinks:[`Office contract checklist`,`Vendor agreement pages 2-5`,`Standard vendor letter`],auditTrail:[`09:14 request opened by legal assistant`,`09:15 checklist review completed`,`09:17 draft saved; sending is still blocked`],metrics:[{label:`Time saved`,value:`35 min`},{label:`Items for lawyer`,value:`2`},{label:`Messages sent`,value:`0`}],approvalCopy:`Send to attorney`},{key:`medium`,level:`Medium`,title:`Complaint Sorting Helper`,subtitle:`When a complaint comes in, the tool helps decide whether it is routine or needs the attorney right away.`,target:`Sort complaints, government questions, and sensitive customer messages`,matterLabel:`Incoming message`,matterValue:`Repeat client complaint mentioning a state regulator`,intakeLabel:`Message`,intakeValue:`Customer says they already complained twice, names the state regulator, and asks for a written response by Friday.`,reviewGate:`No automatic reply; sent to the attorney`,risk:`High`,confidence:94,operatorSteps:[`Bring in the message from the shared inbox`,`Look for words that make it legally sensitive`,`Send the attorney a short summary and the original message`],resultTitle:`Attorney summary`,resultSummary:`The tool saw that this was not a normal customer-service issue and stopped any automatic reply.`,findings:[`The message names a regulator and says this is a repeat complaint.`,`The attorney should handle the response.`,`The summary includes the timeline, prior messages, the policy, and open questions.`,`The tool does not draft a reply for this high-risk item.`],sourceLinks:[`Complaint policy`,`Shared inbox thread`,`Customer-service history`],auditTrail:[`10:32 complaint received from shared inbox`,`10:32 marked as high risk`,`10:33 attorney summary prepared`],metrics:[{label:`Sorting time`,value:`54 sec`},{label:`Warning signs`,value:`3`},{label:`Replies blocked`,value:`1`}],approvalCopy:`Open attorney summary`},{key:`advanced`,level:`Advanced`,title:`Research and Evidence Helper`,subtitle:`The tool gathers the documents, builds a timeline, and shows the source for every legal point.`,target:`Prepare research notes and evidence binders for hearings`,matterLabel:`Situation`,matterValue:`Hearing preparation for a disputed service cancellation`,intakeLabel:`Research question`,intakeValue:`Identify the governing cancellation notice standard and assemble a timeline from emails, tickets, and signed documents.`,reviewGate:`No source, no legal reference`,risk:`Medium`,confidence:91,operatorSteps:[`Search the office policy and matter file`,`Look up the legal source`,`Build a binder with links back to each document`],resultTitle:`Research note`,resultSummary:`Every legal point and document stays tied to a source the attorney can click and check.`,findings:[`The issue statement is based on the facts in the matter file.`,`Three legal sources are listed with links.`,`The timeline uses the signed agreement, cancellation email, and service tickets.`,`One legal reference was left out because the tool could not verify it.`],sourceLinks:[`Matter file #CXL-1842`,`Office cancellation policy`,`Statute and case-law source`],auditTrail:[`14:06 facts entered`,`14:08 sources found`,`14:10 note locked until attorney review`],metrics:[{label:`Sources linked`,value:`12`},{label:`Unchecked references`,value:`0`},{label:`Binder pages`,value:`18`}],approvalCopy:`Prepare attorney note`}],r=document.querySelector(`#app`);if(!r)throw Error(`App root not found`);var i=r;i.innerHTML=`
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
    `);let n=i.querySelector(`.access-gate`),r=i.querySelector(`.access-card`),a=i.querySelector(`.access-password`),o=i.querySelector(`.access-error`);r?.addEventListener(`submit`,async r=>{if(r.preventDefault(),!(!a||!o||!n)){if(await c(a.value)!==t){o.textContent=`Password not recognized.`,a.select();return}sessionStorage.setItem(e,`true`),i.classList.remove(`is-locked`),n.remove()}})}function f(e){return e.toLowerCase()}function p(e,t){let n=e.trim().replace(/\s+/g,` `);return n?n.length>94?`${n.slice(0,91)}...`:n:t}function m(e){return e.key===`beginner`?`First-pass contract packet refreshed from the fields above: checklist notes, missing-item request, and lawyer review items are ready.`:e.key===`medium`?`Complaint triage refreshed from the fields above: risk flags are separated from routine support issues, and outside reply stays blocked.`:`Research packet refreshed from the fields above: fact question, source check, and evidence binder request are ready for attorney review.`}function h(e,t,n,r){let i=p(t,e.matterValue),a=p(n,e.intakeValue),o=p(r,e.target);return e.key===`beginner`?[`Matter checked: ${i}.`,`Request captured: ${a}.`,`Draft letter is prepared, but sending remains blocked until attorney approval.`,`Posting fit: ${o}.`]:e.key===`medium`?[`Inbound item checked: ${i}.`,`Risk language reviewed from message: ${a}.`,`Automatic reply remains blocked because the item needs legal review.`,`Posting fit: ${o}.`]:[`Research matter framed: ${i}.`,`Question and binder request captured from: ${a}.`,`No legal reference is allowed into the packet unless it has a clickable source.`,`Posting fit: ${o}.`]}function g(e){let t=new Intl.DateTimeFormat(`en-US`,{hour:`2-digit`,minute:`2-digit`}).format(new Date);return e.key===`beginner`?[`${t} fields edited on-screen`,`${t} checklist packet refreshed`,`${t} draft saved; attorney approval still required`]:e.key===`medium`?[`${t} message triaged from edited fields`,`${t} high-risk summary refreshed`,`${t} outside reply blocked until attorney review`]:[`${t} research question refreshed`,`${t} evidence binder request prepared`,`${t} source check required before attorney use`]}function _(e,t){e&&e.replaceChildren(...t.map(e=>{let t=document.createElement(`li`);return t.textContent=e,t}))}function v(e){let t=n.find(t=>t.key===e)??n[0];o.forEach(e=>{let n=e.dataset.demo===t.key;e.classList.toggle(`is-active`,n),e.setAttribute(`aria-selected`,String(n)),e.setAttribute(`tabindex`,n?`0`:`-1`)}),s.setAttribute(`aria-labelledby`,`tab-${t.key}`),s.innerHTML=`
    <div class="console__top">
      <section class="intake" aria-label="${t.level} intake">
        <div>
          <p class="level">${t.level}</p>
          <h3>${t.title}</h3>
          <p>${t.subtitle}</p>
        </div>

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
  `;let r=s.querySelector(`.matter-field`),i=s.querySelector(`.intake-field`),a=s.querySelector(`.target-field`),c=s.querySelector(`.run-button`),l=s.querySelector(`.run-status`),u=s.querySelector(`.result-summary`),d=s.querySelector(`.findings-list`),p=s.querySelector(`.audit-list`),v=s.querySelector(`.approval-button`),y=s.querySelector(`.approval-status`);c?.addEventListener(`click`,()=>{let e=r?.value??``,n=i?.value??``,o=a?.value??``;u&&(u.textContent=m(t)),_(d,h(t,e,n,o)),_(p,g(t)),l&&(l.textContent=`Work packet refreshed from the fields on this screen.`),y&&(y.textContent=`Packet refreshed. Attorney approval is still required before anything leaves the office.`)}),v?.addEventListener(`click`,()=>{y&&(y.textContent=`${t.approvalCopy} opened. Nothing is sent outside the office until the attorney signs off.`)})}o.forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.demo;t&&v(t)}),e.addEventListener(`keydown`,t=>{let n=o.indexOf(e),r=o.length-1,i;if(t.key===`ArrowRight`&&(i=n===r?0:n+1),t.key===`ArrowLeft`&&(i=n===0?r:n-1),t.key===`Home`&&(i=0),t.key===`End`&&(i=r),i===void 0)return;t.preventDefault();let a=o[i],s=a.dataset.demo;s&&(a.focus(),v(s))})}),v(`beginner`),d();