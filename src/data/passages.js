export const PASSAGES = {
  A1: {
    label: 'A1', type: 'A', bold: false,
    title: 'Notice: Update to Office Equipment Procurement Procedures',
    sub: 'Internal notice requiring multi-step causal inference',
    source: 'Meridian Group, Administrative Services',
    scaffold: 'causal',
    body: `<p>To: All Staff<br>From: Patricia Lund, Head of Administrative Services<br>Date: September 12<br>Re: Office Equipment Procurement</p>
<p>Effective October 1, all requests to purchase office equipment valued at more than $300 must be submitted through the new <span class="kw">centralized procurement portal</span> and approved by both the department supervisor and the <span class="kw">Facilities Management team</span> before any order is placed. Purchases made without following this procedure will not be reimbursed.</p>
<p>This change follows an internal audit finding that <span class="kw">unauthorized equipment purchases</span> increased by 27% last year, resulting in duplicate items, incompatible hardware, and storage shortfalls. The total annual equipment budget for each department remains unchanged.</p>
<p>Training sessions on using the new portal will be held every Tuesday in Room 4B throughout October. Registration is available through the intranet under <span class="hl">Staff Development &gt; Training Calendar<span class="hl-tip">Access the registration page via the company intranet</span></span>.</p>`,
    causal: [
      { n: '01', t: 'Unauthorized purchases rose 27% → budget was spent on duplicate and incompatible items, leaving some departments short of usable equipment.' },
      { n: '02', t: 'Dual-approval now required → purchases that previously took one day now require coordination between two parties before any order can proceed.' },
      { n: '03', t: 'Budget unchanged despite new controls → departments must plan purchases further in advance and justify each item before the portal approval window closes.' }
    ],
    q: [
      { id: 'A1Q1', stem: '1. What is the main reason given for the new procurement procedure?',
        opts: ['A|An external supplier requested a centralized ordering system.', 'B|Unauthorized equipment purchases increased and caused operational problems.', 'C|The Facilities Management team will be reduced in size from October.', 'D|Staff training on equipment use had been neglected in recent years.'],
        ans: 'B', exp: 'The notice states that unauthorized purchases increased by 27%, leading to duplicate items, incompatible hardware, and storage problems. This is the stated reason. Answer: <strong>B</strong>.' },
      { id: 'A1Q2', stem: '2. What can be inferred about a staff member who buys a $350 printer in October without using the portal?',
        opts: ['A|The purchase will be approved retroactively if a justification is submitted within 30 days.', 'B|The staff member will not be reimbursed for the purchase.', 'C|The order will be cancelled by the Facilities Management team automatically.', 'D|The staff member must attend a mandatory training session as a consequence.'],
        ans: 'B', exp: 'The notice states that purchases made without following the new procedure "will not be reimbursed." A $350 printer exceeds the $300 threshold. Answer: <strong>B</strong>.' }
    ]
  },

  A2: {
    label: 'A2', type: 'A', bold: true,
    title: 'Memorandum: Changes to Staff Parking Allocation',
    sub: 'Internal communication requiring multi-step causal reasoning',
    source: 'Cranfield Solutions, Facilities Department',
    scaffold: 'causal',
    body: `<p>To: All Employees<br>From: Daniel Park, Facilities Manager<br>Date: February 7<br>Re: Staff Parking Changes</p>
<p>Beginning March 1, the number of <span class="kw">reserved parking spaces</span> available to general staff will be reduced from 120 to 80. Priority allocation will be given to employees with documented <span class="kw">mobility or medical requirements</span>, followed by those with the longest continuous service records.</p>
<p>This reduction is a result of an agreement with the neighboring building management to convert the eastern section of the parking lot into a <span class="kw">shared loading zone</span>, which will remain in use from 7 a.m. to 6 p.m. on weekdays. The change is expected to affect approximately 40 employees who currently hold reserved spaces.</p>
<p>Employees who will lose their reserved spaces will be contacted individually by the end of February and offered alternative <span class="hl">park-and-ride arrangements<span class="hl-tip">Subsidized transport scheme connecting nearby parking to the office</span></span> at reduced cost.</p>`,
    causal: [
      { n: '01', t: 'Eastern lot converted to loading zone → usable staff parking spaces reduced from 120 to 80, a net loss of 40 spaces.' },
      { n: '02', t: 'Priority given to medical/mobility needs then seniority → staff without these criteria are most likely to lose reserved spaces, regardless of current usage.' },
      { n: '03', t: '~40 staff affected → those employees face a longer or more costly commute unless they accept the park-and-ride alternative being offered.' }
    ],
    q: [
      { id: 'A2Q1', stem: '1. Why is the number of <span class="kw">reserved parking spaces</span> being <span class="kw">reduced</span>?',
        opts: ['A|The company plans to reduce its total number of employees by March.', 'B|Part of the parking lot will be converted into a <span class="kw">shared loading zone</span>.', 'C|The neighboring building has requested exclusive use of the parking facilities.', 'D|A new public transport route now serves the area around the office.'],
        ans: 'B', exp: 'The memo indicates the change is tied to arrangements involving the neighboring building, leading to reduced reserved spaces. Answer: <strong>B</strong>.' },
      { id: 'A2Q2', stem: '2. <span class="kw">Which employees</span> are most likely to retain their reserved parking spaces under the new policy?',
        opts: ['A|Employees who currently commute the greatest distance to the office.', 'B|Employees who use their vehicles most frequently for business purposes.', 'C|Employees with documented <span class="kw">mobility or medical requirements</span> or the longest service records.', 'D|Employees who register their preference before the end of February.'],
        ans: 'C', exp: 'The memo states priority goes to employees with "documented mobility or medical requirements," followed by those with the longest continuous service records. Answer: <strong>C</strong>.' }
    ]
  },

  B1: {
    label: 'B1', type: 'B', bold: false,
    title: 'Workplace Design Review: Two Perspectives on Office Layout',
    sub: 'Conflicting internal recommendations on the same organizational question',
    source: 'Alderton Partners, Office Strategy Review',
    scaffold: 'conflict',
    intro: `<p>The following two position papers were submitted to the Strategy Committee in response to a proposal to redesign the company&rsquo;s main office floor. Both were written by senior managers with access to the same internal usage data.</p>`,
    tension: 'Both positions are supported by the same internal data. They disagree not on the facts, but on which outcome — focus and output, or communication and culture — the office design should prioritize.',
    posA: {
      label: 'Position A', sub: 'Maintain open-plan layout',
      text: `<p>Director of Operations, R. Castellano:</p>
<p>Our current open-plan layout has measurably improved <span class="kw">cross-team visibility</span> and reduced the time required to resolve day-to-day coordination issues. Desk utilization data shows that <span class="kw">75% of workstations</span> are occupied during core hours, indicating that staff actively choose to work in the shared space. Converting to private offices would fragment communication and slow down the informal decision-making that currently keeps projects moving.</p>`
    },
    posB: {
      label: 'Position B', sub: 'Shift to private office model',
      text: `<p>Director of Product, S. Nguyen:</p>
<p>Our most recent employee survey shows that <span class="kw">62% of staff</span> report difficulty concentrating in the current open-plan environment, and <span class="kw">deep work sessions</span> lasting more than 90 minutes have declined by 31% over two years. Productivity gains from informal coordination are offset by the cumulative cost of <span class="kw">interrupted focus</span>. Private offices would allow staff to self-manage their attention more effectively.</p>`
    },
    q: [
      { id: 'B1Q1', stem: '1. What is the core disagreement between the two directors?',
        opts: ['A|Whether the open-plan layout increases or decreases total desk utilization.', 'B|Whether office design should prioritize communication ease or individual concentration.', 'C|Whether the renovation budget is sufficient to convert the floor to private offices.', 'D|Whether employees were consulted before the original open-plan design was adopted.'],
        ans: 'B', exp: 'Castellano values the communication and coordination benefits of open-plan. Nguyen argues these are outweighed by the concentration costs. The disagreement is about which outcome the design should serve. Answer: <strong>B</strong>.' },
      { id: 'B1Q2', stem: "2. What does Nguyen imply about Castellano's desk utilization data?",
        opts: ['A|The data was collected during an unusually busy period and is not representative.', 'B|High desk occupancy does not indicate that staff are working productively at those desks.', 'C|Utilization figures have been misreported and the actual rate is lower than 75%.', 'D|Desk occupancy rates are the most reliable indicator of office design effectiveness.'],
        ans: 'B', exp: 'Nguyen does not dispute the 75% occupancy figure. Instead, she argues that productivity during those hours is impaired by interruptions — presence at a desk is not the same as effective work. Answer: <strong>B</strong>.' }
    ]
  },

  B2: {
    label: 'B2', type: 'B', bold: true,
    title: 'HR Policy Debate: Flexible Hours vs. Core Hours',
    sub: 'Conflicting internal recommendations on working hour arrangements',
    source: 'Tanaka &amp; Webb Consulting, HR Strategy Division',
    scaffold: 'conflict',
    intro: `<p>Two senior HR managers submitted the following recommendations after reviewing the company&rsquo;s current flexible working hours policy. Both had access to the same staff survey results and productivity records before writing their responses.</p>`,
    tension: 'Both positions draw on the same survey data. The disagreement is about whether individual flexibility or team predictability should be the primary goal of the working hours policy.',
    posA: {
      label: 'Position A', sub: 'Expand flexible hours',
      text: `<p>HR Manager, C. Bloom:</p>
<p>Staff survey results show that <span class="kw">flexible start times</span> are the most valued workplace benefit, cited by 68% of respondents. Departments that already operate under flexible arrangements report <span class="kw">lower absenteeism rates</span> — down 22% compared to departments under fixed hours. Restricting flexibility would signal a lack of trust in employees and risk losing high performers to competitors who offer more autonomy.</p>`
    },
    posB: {
      label: 'Position B', sub: 'Restore core hours',
      text: `<p>HR Manager, T. Adeyemi:</p>
<p>While flexible hours reduce absenteeism, our data shows that <span class="kw">cross-team meetings</span> are taking significantly longer to schedule, with average lead time up from 1.2 to 3.6 days over the past year. <span class="kw">Client-facing teams</span> have flagged repeated service delays caused by key staff being unavailable during standard business hours. The efficiency gains from flexibility are being consumed by coordination overhead that falls disproportionately on team leaders.</p>`
    },
    q: [
      { id: 'B2Q1', stem: '1. What is the <span class="kw">primary disagreement</span> between Bloom and Adeyemi?',
        opts: ['A|Whether the current <span class="kw">flexible start times</span> policy has been implemented correctly across all departments.', 'B|Whether individual scheduling autonomy or team-level coordination predictability should take priority.', 'C|Whether <span class="kw">lower absenteeism rates</span> or meeting efficiency is the more reliable measure of employee productivity.', 'D|Whether the HR department has the authority to change working hour policy unilaterally.'],
        ans: 'B', exp: "Bloom emphasizes the individual benefits (satisfaction, lower absenteeism) of flexibility. Adeyemi argues flexibility creates coordination costs that affect team performance. The disagreement is about which value — individual or collective — the policy should serve. Answer: <strong>B</strong>." },
      { id: 'B2Q2', stem: "2. What does Adeyemi imply about Bloom's <span class=\"kw\">absenteeism data</span>?",
        opts: ["A|The reduction in absenteeism is a temporary effect that will disappear within six months.", 'B|<span class="kw">Lower absenteeism rates</span> do not offset the overhead that <span class="kw">cross-team meetings</span> and <span class="kw">client-facing teams</span> face under flexible hours.', 'C|Absenteeism in departments with fixed hours has also declined, making the comparison unreliable.', 'D|The survey used to measure absenteeism asked questions that were biased toward flexible arrangements.'],
        ans: 'B', exp: 'Adeyemi does not dispute that absenteeism fell. She argues that flexibility creates coordination overhead — longer scheduling lead times and service delays — that cancels out those individual gains at the team level. Answer: <strong>B</strong>.' }
    ]
  },

  C1: {
    label: 'C1', type: 'C', bold: false,
    title: 'Reading on Screens Is Always Harder Than Reading on Paper',
    sub: 'A common assumption examined against current research findings',
    source: 'Digital Literacy Review, Issue 8',
    scaffold: 'refutation',
    intro: `<p>Many educators and office workers assume that reading long documents on screen is inherently more tiring and less effective than reading printed copies. This assumption is widely used to justify printing costs and paper-based workflows.</p>`,
    myth: {
      label: 'Common Belief', sub: 'Widely assumed',
      text: 'Reading on a screen is always more fatiguing and less effective than reading on paper. Information read from a screen is less well retained, harder to navigate, and more likely to cause eye strain. For serious reading tasks, printed materials are always preferable.'
    },
    fact: {
      label: 'Research Finding', sub: 'Evidence-based',
      text: `Research comparing screen and paper reading has produced <span class="kw">mixed results</span> that depend heavily on the reading task, screen quality, and individual habits. Studies by Mangen et al. (2013) found that comprehension differences between screen and paper were significant for <span class="hl">linear narrative texts<span class="hl-tip">Texts read from start to finish without navigation, such as short stories or reports</span></span> but negligible for <span class="kw">reference materials</span> that readers scan rather than read sequentially. Modern <span class="kw">high-resolution displays</span> have largely eliminated the eye-strain differences observed in older studies.`
    },
    evidence: 'Source: Mangen, Walgermo &amp; Brønnick (2013), Reading Research Quarterly — comprehension gaps were task-dependent, not a fixed property of the reading medium.',
    closing: `<p>The persistence of the paper-is-better assumption may reflect <span class="kw">familiarity bias</span> rather than evidence. Readers who have spent more time with printed materials tend to rate screen reading as less comfortable regardless of their measured comprehension. As digital reading habits develop, these <span class="kw">subjective preference gaps</span> narrow significantly, even when objective comprehension scores remain equivalent.</p>`,
    q: [
      { id: 'C1Q1', stem: '1. What does the research suggest about reading on screens compared to paper?',
        opts: ['A|Screen reading is consistently more tiring and should be avoided for all serious tasks.', 'B|Differences between screen and paper reading depend on the type of task and quality of the display.', 'C|Paper is superior for reference materials but screens are better for narrative texts.', 'D|Screen reading always produces lower comprehension scores than paper reading.'],
        ans: 'B', exp: 'The passage states that research results "depend heavily on the reading task, screen quality, and individual habits." Comprehension differences were significant for narrative texts but negligible for reference materials. Answer: <strong>B</strong>.' },
      { id: 'C1Q2', stem: '2. Why does the author suggest the paper-is-better belief persists?',
        opts: ['A|Because older research studies have been more widely cited than newer findings.', 'B|Because readers who are more familiar with print rate screen reading as less comfortable, regardless of actual performance.', 'C|Because high-resolution screens were only developed after most research on this topic was completed.', 'D|Because eye strain from screens has been proven to reduce retention over the long term.'],
        ans: 'B', exp: 'The passage states the belief "may reflect familiarity bias — readers who have spent more time with printed materials tend to rate screen reading as less comfortable regardless of their measured comprehension." Answer: <strong>B</strong>.' }
    ]
  },

  C2: {
    label: 'C2', type: 'C', bold: true,
    title: 'Handwriting Notes Is Always More Effective Than Typing Them',
    sub: 'A widespread study-skills belief examined against current research',
    source: 'Workplace Learning Quarterly, Vol. 9',
    scaffold: 'refutation',
    intro: `<p>It is widely advised in educational and professional training contexts that participants should take notes by hand rather than on a laptop. This recommendation is often presented as a settled finding of learning science.</p>`,
    myth: {
      label: 'Common Belief', sub: 'Widely advised',
      text: 'Handwritten notes are always more effective for learning than typed notes. Writing by hand forces summarization and deeper processing, while typing encourages verbatim transcription without understanding. Laptops should therefore be banned from classrooms and training sessions.'
    },
    fact: {
      label: 'Research Finding', sub: 'Evidence-based',
      text: `The research basis for this claim is narrower than commonly assumed. Mueller &amp; Oppenheimer (2014), frequently cited as proof, found an advantage for handwriting specifically in <span class="kw">conceptual question performance</span> when participants transcribed lectures verbatim. However, when participants were trained to <span class="hl">take selective notes on laptops<span class="hl-tip">Summarizing key points rather than transcribing everything said</span></span>, the performance gap was substantially reduced. The effect depends on <span class="kw">note-taking strategy</span>, not the medium itself.`
    },
    evidence: 'Source: Mueller &amp; Oppenheimer (2014), Psychological Science — the handwriting advantage diminished when laptop users adopted selective rather than verbatim note-taking.',
    closing: `<p>The recommendation to ban laptops may therefore address a <span class="kw">behavioral problem</span> — verbatim transcription — rather than an intrinsic property of the tool. Training participants in <span class="kw">active summarization strategies</span> may be more effective than restricting the medium, particularly in professional settings where participants already manage large volumes of written information daily.</p>`,
    q: [
      { id: 'C2Q1', stem: '1. According to the passage, what does the Mueller & Oppenheimer study actually show?',
        opts: ['A|Handwriting is always more effective than typing for all types of learning tasks.', 'B|Typed notes produced better performance than handwritten notes in <span class="kw">conceptual question performance</span>.', 'C|The handwriting advantage applies mainly when laptop users type verbatim rather than using a selective <span class="kw">note-taking strategy</span>.', 'D|Banning laptops from training sessions is the most effective way to improve comprehension.'],
        ans: 'C', exp: 'The passage states the handwriting advantage appeared when participants "transcribed lectures verbatim." When laptop users took selective notes, the performance gap was "substantially reduced." The effect depends on strategy, not medium. Answer: <strong>C</strong>.' },
      { id: 'C2Q2', stem: '2. What does the author suggest is a more productive response to the verbatim-transcription <span class="kw">behavioral problem</span>?',
        opts: ['A|Requiring all participants to submit handwritten notes after each session for review.', 'B|Training participants in <span class="kw">active summarization strategies</span> rather than banning laptops.', 'C|Reducing the amount of information covered in each training session to make transcription manageable.', 'D|Replacing laptop note-taking with a standardized printed template that limits available space.'],
        ans: 'B', exp: 'The final paragraph states that "training participants in active summarization strategies may be more effective than restricting the medium." Answer: <strong>B</strong>.' }
    ]
  }
};
