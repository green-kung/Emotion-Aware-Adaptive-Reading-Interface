export const PASSAGES = {
  A1: {
    label: 'A1', type: 'A', bold: false,
    title: 'Why You Make Better Decisions at Some Times Than Others',
    sub: '', source: '',
    body: `<p>Most people assume that decision-making ability stays roughly the same throughout the day. Research suggests otherwise. The brain uses a limited amount of mental energy, and this energy is consumed each time a person makes a choice — even a small one.</p>
<p>As the day goes on and more decisions are made, the quality of later decisions tends to fall. This is why judges in studies gave more lenient rulings in the morning than later in the day, and why people are more likely to choose unhealthy food in the evening. Saving important decisions for times when mental energy is high may lead to better outcomes.</p>`,
    q: [
      { id: 'A1Q1',
        stem: '1. Based on the passage, why might a person choose unhealthy food more often in the evening than in the morning?',
        opts: [
          'A|People are hungrier in the evening because they have not eaten enough during the day.',
          'B|Healthy food is less available in the evening than in the morning.',
          'C|Mental energy has been used up through the day\'s decisions, making self-control harder.',
          'D|People feel more relaxed in the evening and pay less attention to their choices.',
        ],
        ans: 'C' },
      { id: 'A1Q2',
        stem: '2. A manager needs to make an important hiring decision. Based on the passage, what can be inferred about the best time to do this?',
        opts: [
          'A|Late in the afternoon, when the manager has had time to think carefully.',
          'B|In the evening, after all other tasks are completed.',
          'C|At a time earlier in the day, before mental energy has been reduced by other decisions.',
          'D|The time of day has no effect on the quality of important decisions.',
        ],
        ans: 'C' },
    ]
  },

  A2: {
    label: 'A2', type: 'A', bold: true,
    title: 'How Noise Affects the Way You Think',
    sub: '', source: '',
    body: `<p><span class="kw">Background noise</span> can affect thinking in ways most people do not expect. A small amount of noise — such as the <span class="kw">low hum</span> of a coffee shop — can actually <span class="kw">improve creative thinking</span>. This is because mild noise raises the level of mental activity just enough to encourage the brain to think in <span class="kw">broader, less direct ways</span>.</p>
<p>However, when noise becomes <span class="kw">too loud</span>, it forces the brain to use more energy <span class="kw">blocking it out</span>, leaving less energy for thinking. This is why very quiet environments help with tasks that need <span class="kw">focused attention</span>, while moderate noise may be better for tasks that need <span class="kw">new ideas</span>.</p>`,
    q: [
      { id: 'A2Q1',
        stem: '1. Based on the passage, what can be inferred about why a coffee shop might be a good place to brainstorm?',
        opts: [
          'A|Coffee shops are always quiet and free from interruptions.',
          'B|The <span class="kw">low level of noise</span> encourages <span class="kw">broader thinking</span> without overloading the brain.',
          'C|People feel more relaxed in social environments, which reduces stress.',
          'D|Coffee improves brain function and helps with <span class="kw">creative thinking</span>.',
        ],
        ans: 'B' },
      { id: 'A2Q2',
        stem: '2. What does the passage imply about the best environment for detailed, focused work?',
        opts: [
          'A|A place with <span class="kw">moderate noise</span> to keep the brain stimulated.',
          'B|A busy environment with many people talking nearby.',
          'C|A very <span class="kw">quiet environment</span> that does not require the brain to <span class="kw">block out</span> sound.',
          'D|An outdoor space with natural sounds in the background.',
        ],
        ans: 'C' },
    ]
  },

  B1: {
    label: 'B1', type: 'B', bold: false,
    title: 'Is Drinking Water Always Good for You?',
    sub: '', source: '',
    body: `<p>Water is essential for life. Every health guide recommends drinking enough water every day. Staying hydrated helps your organs work properly, keeps your skin healthy, and improves your energy levels. Most people have heard this advice since childhood and follow it without question.</p>
<p>However, research shows that drinking too much water in a short time can be dangerous. It can lower the level of sodium in the blood to a point where the brain and muscles stop working normally. Athletes who drink large amounts of water during long races have experienced this condition. In some cases, it has caused serious health problems. The body needs water — but the right amount matters more than people think.</p>`,
    q: [
      { id: 'B1Q1',
        stem: '1. The passage presents two ideas about drinking water. Which statement best describes the conflict between them?',
        opts: [
          'A|Water is good for the skin but bad for the muscles.',
          'B|Doctors recommend water, but athletes should avoid it.',
          'C|Water is necessary for health, but drinking too much can cause serious harm.',
          'D|Drinking water is only beneficial in the morning, not at other times.',
        ],
        ans: 'C' },
      { id: 'B1Q2',
        stem: '2. A person says: "I always drink as much water as possible because I think more is always better." What does the passage suggest about this belief?',
        opts: [
          'A|It is correct — drinking more water always leads to better health.',
          'B|It is dangerous — people should drink as little water as possible.',
          'C|It may not be accurate — the amount of water consumed matters significantly.',
          'D|The passage does not provide enough information to evaluate this belief.',
        ],
        ans: 'C' },
    ]
  },

  B2: {
    label: 'B2', type: 'B', bold: true,
    title: 'Does Getting More Sleep Always Make You Feel Better?',
    sub: '', source: '',
    body: `<p>Sleep is widely understood to be one of the most important things for <span class="kw">good health</span>. Doctors recommend that adults get <span class="kw">seven to nine hours</span> of sleep each night. People who sleep well tend to have better <span class="kw">memory</span>, <span class="kw">mood</span>, and <span class="kw">energy</span>. This advice is supported by a large amount of research and is repeated in almost every health guide.</p>
<p>Yet studies also show that people who <span class="kw">regularly sleep more than nine hours</span> a night report feeling <span class="kw">more tired</span>, not less. They also show higher rates of <span class="kw">low mood</span> and difficulty <span class="kw">concentrating</span>. Researchers are not yet sure whether <span class="kw">too much sleep</span> causes these problems or whether people sleep longer because they already have them. Either way, the relationship between sleep and feeling well is more <span class="kw">complicated</span> than it first appears.</p>`,
    q: [
      { id: 'B2Q1',
        stem: '1. The passage suggests that the relationship between sleep and health is best described as:',
        opts: [
          'A|Simple — more sleep always leads to better health.',
          'B|<span class="kw">Complicated</span> — sleeping too much may be linked to feeling <span class="kw">more tired</span> and <span class="kw">low mood</span>.',
          'C|Unimportant — the number of hours slept has little effect on daily life.',
          'D|Clear — people should sleep exactly <span class="kw">nine hours</span> every night for best results.',
        ],
        ans: 'B' },
      { id: 'B2Q2',
        stem: '2. A person says: "I always try to sleep as much as possible because more sleep means better health." What does the passage suggest about this belief?',
        opts: [
          'A|It is completely correct and supported by all research.',
          'B|It is wrong — people should sleep as little as possible.',
          'C|It may be <span class="kw">oversimplified</span> — sleeping <span class="kw">too much</span> can also be associated with negative outcomes.',
          'D|The passage does not discuss this topic.',
        ],
        ans: 'C' },
    ]
  },

  C1: {
    label: 'C1', type: 'C', bold: false,
    title: 'Do We Only Use Ten Percent of Our Brain?',
    sub: '', source: '',
    body: `<p>Many people believe that humans use only ten percent of their brain. This idea appears in advertisements, self-help books, and popular films. It suggests that most of the brain is inactive and that people have large amounts of unused mental potential.</p>
<p>This claim is not supported by science. Brain imaging studies show that nearly all parts of the brain are active at some point during the day. Even during sleep, multiple areas continue to function. Doctors also know that damage to any part of the brain — whether small or large — always results in some loss of ability. If ninety percent of the brain were truly unused, damage to those areas would have no effect at all. All available evidence shows that the brain is fully used, not partially.</p>`,
    q: [
      { id: 'C1Q1',
        stem: '1. Which of the following is the misconception that this passage argues against?',
        opts: [
          'A|The brain becomes less active as a person gets older.',
          'B|Humans use only ten percent of their brain.',
          'C|Brain damage always leads to permanent disability.',
          'D|Sleep is necessary for the brain to function properly.',
        ],
        ans: 'B' },
      { id: 'C1Q2',
        stem: '2. The author uses brain damage as evidence. What incorrect idea does this evidence help to disprove?',
        opts: [
          'A|That the brain works harder during sleep than when awake.',
          'B|That brain imaging technology is not accurate enough to measure activity.',
          'C|That ninety percent of the brain is unused and therefore unimportant.',
          'D|That mental ability can be improved through regular exercise.',
        ],
        ans: 'C' },
    ]
  },

  C2: {
    label: 'C2', type: 'C', bold: true,
    title: 'Does Sugar Make Children Hyperactive?',
    sub: '', source: '',
    body: `<p>Many parents and teachers believe that <span class="kw">sugar</span> makes children <span class="kw">hyperactive</span>. This idea is very widespread. When children behave in an energetic or difficult-to-control way after eating sweets, adults often point to <span class="kw">sugar</span> as the cause. The belief feels logical and is repeated so often that most people accept it without question.</p>
<p>However, <span class="kw">controlled studies</span> have tested this idea directly and found <span class="kw">no evidence</span> that it is true. In these experiments, children were given either <span class="kw">real sugar</span> or a <span class="kw">sugar-free substitute</span> that tasted the same. Neither the children nor the adults watching them knew which was which. The results were consistent: <span class="kw">sugar had no measurable effect</span> on the children's behavior. What actually changed was the <span class="kw">expectations</span> of the adults. Parents who believed their child had eaten sugar rated the child as <span class="kw">more active</span> — even when the child had not consumed any sugar at all.</p>`,
    q: [
      { id: 'C2Q1',
        stem: '1. Which of the following best describes the <span class="kw">misconception</span> this passage addresses?',
        opts: [
          'A|Children who eat sweets always become difficult to manage at school.',
          'B|<span class="kw">Sugar</span> directly causes children to become <span class="kw">hyperactive</span>.',
          'C|Parents are unable to judge their children\'s behavior accurately.',
          'D|<span class="kw">Controlled studies</span> are not a reliable way to test food-related claims.',
        ],
        ans: 'B' },
      { id: 'C2Q2',
        stem: '2. According to the passage, what actually explains why adults think <span class="kw">sugar</span> causes <span class="kw">hyperactivity</span>?',
        opts: [
          'A|Sugar increases heart rate, which leads to more <span class="kw">active behavior</span>.',
          'B|Children naturally behave differently after eating sweet food.',
          'C|The <span class="kw">expectations</span> of adults influence how they observe and judge children\'s <span class="kw">behavior</span>.',
          'D|The <span class="kw">sugar-free substitute</span> used in the studies contained hidden stimulants.',
        ],
        ans: 'C' },
    ]
  },
};
