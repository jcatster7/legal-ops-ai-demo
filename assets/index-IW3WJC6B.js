(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`legal-ops-demo-unlocked`,t=`04ec0a364e718d02ddcc0c889ed889f98dacc9458eaa09b7ff6e5ad850494081`,n=[{key:`beginner`,level:`Beginner`,title:`Contract & Correspondence First-Pass Assistant`,subtitle:`A no-code Claude Project loaded with the contract playbook and correspondence templates.`,target:`Contract review, routine correspondence, confidential judgment under supervision`,matterLabel:`Matter`,matterValue:`Vendor services agreement`,intakeLabel:`Request`,intakeValue:`Review a 6-page vendor agreement and draft a routine follow-up asking for the missing insurance certificate.`,reviewGate:`Ready for legal assistant review, then attorney approval`,risk:`Medium`,confidence:88,operatorSteps:[`Paste agreement into the protected workspace`,`Run clause check against the approved playbook`,`Generate correspondence draft with attorney approval gate`],resultTitle:`First-pass review`,resultSummary:`The assistant completed the mechanical clause scan and separated standard language from items needing judgment.`,findings:[`Confidentiality clause matches the standard mutual language.`,`Indemnity is off-playbook because vendor added one-way defense costs.`,`Renewal section is missing a 30-day non-renewal notice window.`,`Draft follow-up asks for the certificate of insurance and flags indemnity for counsel.`],sourceLinks:[`Contract playbook v4.2`,`Vendor agreement pages 2-5`,`Routine vendor correspondence template`],auditTrail:[`09:14 intake created by legal assistant`,`09:15 playbook comparison completed`,`09:17 draft saved; external send disabled`],metrics:[{label:`Manual time avoided`,value:`35 min`},{label:`Attorney decisions preserved`,value:`2`},{label:`External sends`,value:`0`}],approvalCopy:`Submit for attorney review`},{key:`medium`,level:`Medium`,title:`Escalation Triage & Response Drafting`,subtitle:`A lightweight intake flow for complaints, regulatory inquiries, and social response routing.`,target:`Escalated client matters, regulatory inquiries, social media response`,matterLabel:`Inbound item`,matterValue:`Repeat client complaint mentioning a state regulator`,intakeLabel:`Message`,intakeValue:`Customer says they already complained twice, names the state regulator, and asks for a written response by Friday.`,reviewGate:`Auto-draft suppressed; routed directly to GC`,risk:`High`,confidence:94,operatorSteps:[`Capture message from shared inbox or form`,`Classify legal risk and policy relevance`,`Route high-risk items with a research-ready summary`],resultTitle:`Triage packet`,resultSummary:`The system recognized regulator language and repeat-contact history, then avoided sending an automated reply.`,findings:[`Risk elevated because the message names a regulator and repeats prior unresolved complaints.`,`Suggested owner is GC with client service copied for factual background.`,`Summary includes timeline, prior touchpoints, policy section, and open questions.`,`Low-risk response drafting is disabled for this item.`],sourceLinks:[`Complaint handling policy section 3`,`Shared inbox thread`,`Client service ticket history`],auditTrail:[`10:32 complaint received from shared inbox`,`10:32 high-risk classifier triggered`,`10:33 GC routing packet generated`],metrics:[{label:`Triage latency`,value:`54 sec`},{label:`Risk flags found`,value:`3`},{label:`Auto replies blocked`,value:`1`}],approvalCopy:`Open GC review packet`},{key:`advanced`,level:`Advanced`,title:`Grounded Research & Evidence Compilation`,subtitle:`A retrieval-based assistant that builds source-linked research memos and matter binders.`,target:`Legal research, case law identification, evidence compilation for hearings`,matterLabel:`Fact pattern`,matterValue:`Hearing preparation for a disputed service cancellation`,intakeLabel:`Research question`,intakeValue:`Identify the governing cancellation notice standard and assemble a timeline from emails, tickets, and signed documents.`,reviewGate:`Citations must verify before memo export`,risk:`Medium`,confidence:91,operatorSteps:[`Search internal policy and matter archive`,`Query verified legal sources for authority`,`Compile binder with linked evidence and citation checks`],resultTitle:`Grounded memo preview`,resultSummary:`Every authority and evidence item stays linked to its source, with unsupported citations blocked from the memo.`,findings:[`Issue statement drafted from the verified matter facts.`,`Three authorities returned with clickable source links and jurisdiction notes.`,`Timeline assembled from signed agreement, cancellation email, and service tickets.`,`One unsupported citation candidate was blocked from export.`],sourceLinks:[`Matter archive #CXL-1842`,`Internal cancellation policy`,`Verified statute and case-law source`],auditTrail:[`14:06 fact pattern submitted`,`14:08 source retrieval completed`,`14:10 memo preview locked pending citation review`],metrics:[{label:`Sources linked`,value:`12`},{label:`Unsupported cites`,value:`0`},{label:`Binder pages`,value:`18`}],approvalCopy:`Export attorney memo`}],r=document.querySelector(`#app`);if(!r)throw Error(`App root not found`);var i=r;i.innerHTML=`
  <main>
    <section class="hero" aria-labelledby="page-title">
      <div class="hero__content">
        <p class="eyebrow">correctanswergenerator.com</p>
        <h1 id="page-title">Legal ops demos a GC can trust before lunch.</h1>
        <p>
          Three legal assistant automations that reduce repetitive work while keeping
          confidential data, citations, and external responses under human control.
        </p>
        <div class="hero__actions" aria-label="Primary actions">
          <a class="button button--primary" href="#demo-builder">Open demo console</a>
          <a class="button button--ghost" href="#operating-rules">Show safeguards</a>
        </div>
      </div>

      <aside class="briefing" aria-label="Demo briefing">
        <div class="briefing__header">
          <span>Live pitch path</span>
          <strong>4 minutes</strong>
        </div>
        <ol>
          <li>Start with data boundaries.</li>
          <li>Run a contract or complaint through the console.</li>
          <li>Show what gets blocked, escalated, and logged.</li>
        </ol>
      </aside>
    </section>

    <section class="rules" id="operating-rules" aria-label="Operating rules">
      <article>
        <span>01</span>
        <h2>Enterprise data only</h2>
        <p>Client and employee information stays in approved workspaces, never personal AI accounts.</p>
      </article>
      <article>
        <span>02</span>
        <h2>Verified sources</h2>
        <p>Research output cannot cite a case, policy, or matter document unless the source link is present.</p>
      </article>
      <article>
        <span>03</span>
        <h2>Human approval</h2>
        <p>AI prepares first drafts and packets; attorneys approve judgment calls and external communications.</p>
      </article>
    </section>

    <section class="workspace" id="demo-builder" aria-labelledby="workspace-title">
      <div class="workspace__intro">
        <p class="eyebrow">Click-through console</p>
        <h2 id="workspace-title">Choose the automation level and walk through the work.</h2>
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
          <h2 id="access-title">Legal ops AI console</h2>
          <p>Enter the interview demo password to continue.</p>
          <label>
            <span>Password</span>
            <input class="access-password" type="password" autocomplete="current-password" autofocus />
          </label>
          <button class="button button--primary" type="submit">Unlock demo</button>
          <p class="access-error" role="alert" aria-live="polite"></p>
        </form>
      </section>
    `);let n=i.querySelector(`.access-gate`),r=i.querySelector(`.access-card`),a=i.querySelector(`.access-password`),o=i.querySelector(`.access-error`);r?.addEventListener(`submit`,async r=>{if(r.preventDefault(),!(!a||!o||!n)){if(await c(a.value)!==t){o.textContent=`Password not recognized.`,a.select();return}sessionStorage.setItem(e,`true`),i.classList.remove(`is-locked`),n.remove()}})}function f(e){return e.toLowerCase()}function p(e){let t=n.find(t=>t.key===e)??n[0];o.forEach(e=>{let n=e.dataset.demo===t.key;e.classList.toggle(`is-active`,n),e.setAttribute(`aria-selected`,String(n)),e.setAttribute(`tabindex`,n?`0`:`-1`)}),s.setAttribute(`aria-labelledby`,`tab-${t.key}`),s.innerHTML=`
    <div class="console__top">
      <section class="intake" aria-label="${t.level} intake">
        <div>
          <p class="level">${t.level}</p>
          <h3>${t.title}</h3>
          <p>${t.subtitle}</p>
        </div>

        <label>
          <span>${t.matterLabel}</span>
          <input type="text" value="${t.matterValue}" readonly />
        </label>

        <label>
          <span>${t.intakeLabel}</span>
          <textarea readonly>${t.intakeValue}</textarea>
        </label>

        <div class="target">
          <span>Posting fit</span>
          <strong>${t.target}</strong>
        </div>
      </section>

      <section class="run-panel" aria-label="Workflow controls">
        <div class="status-card">
          <span class="risk risk--${f(t.risk)}">${t.risk} risk</span>
          <strong>${t.confidence}% grounded</strong>
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

        <button class="button button--primary approval-button" type="button" data-approval="${t.key}">
          ${t.approvalCopy}
        </button>
        <p class="approval-status" role="status" aria-live="polite">
          Awaiting human approval before anything leaves the workspace.
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
          <span>Generated output</span>
          <strong>${t.resultTitle}</strong>
        </div>
        <p>${t.resultSummary}</p>
        <ul>
          ${t.findings.map(e=>`<li>${e}</li>`).join(``)}
        </ul>
      </article>

      <article class="output-card">
        <div class="card-heading">
          <span>Verified sources</span>
          <strong>No source, no cite</strong>
        </div>
        <ul class="source-list">
          ${t.sourceLinks.map(e=>`<li>${e}</li>`).join(``)}
        </ul>
      </article>

      <article class="output-card">
        <div class="card-heading">
          <span>Audit trail</span>
          <strong>Reviewable by design</strong>
        </div>
        <ul class="audit-list">
          ${t.auditTrail.map(e=>`<li>${e}</li>`).join(``)}
        </ul>
      </article>
    </div>
  `;let r=s.querySelector(`.approval-button`),i=s.querySelector(`.approval-status`);r?.addEventListener(`click`,()=>{i&&(i.textContent=`${t.approvalCopy} opened. External send remains blocked until attorney sign-off.`)})}o.forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.demo;t&&p(t)}),e.addEventListener(`keydown`,t=>{let n=o.indexOf(e),r=o.length-1,i;if(t.key===`ArrowRight`&&(i=n===r?0:n+1),t.key===`ArrowLeft`&&(i=n===0?r:n-1),t.key===`Home`&&(i=0),t.key===`End`&&(i=r),i===void 0)return;t.preventDefault();let a=o[i],s=a.dataset.demo;s&&(a.focus(),p(s))})}),p(`beginner`),d();