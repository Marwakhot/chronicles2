strategic_treatment: {
      title: "The Long Game",
      date: "May-August 1986 - Hospital and Recovery",
      text: "You accept treatment and focus on recovery, understanding that long-term contribution requires survival. Three months of intensive treatment stabilize your condition.\n\nYou recover enough to return to work, but as an advisor rather than field worker. You have decades of contribution ahead if you're smart about protecting your health.",
      isEnding: true,
      outcome: "You lived to 69, managing your radiation exposure carefully while contributing for decades. You became the Soviet Union's, and later Ukraine's, chief nuclear safety advisor. You supervised all long-term Chernobyl operations. You advised on reactor safety nationwide. You helped decommission dangerous old reactors. You trained a generation of nuclear engineers in safety culture. When you retired at 65, you had influenced four decades of nuclear policy. At your retirement ceremony, the Ukrainian president said: 'Some heroes burn bright and fast. Aleksei Volkov chose to burn steady and long. His decades of service prevented countless accidents and trained the engineers who keep us safe today.' You died surrounded by three generations of family and friends. Your funeral was attended by government ministers and young engineers you had mentored. Your epitaph, written by former students: 'He survived to teach us. We are his living legacy.' Wisdom sometimes means knowing that living to teach is as heroic as dying dramatically."
    },

    system_liaison: {
      title: "The Bridge Builder",
      date: "April-December 1986 - Chernobyl Area",
      text: "You become the crucial link between government officials, scientists, and workers. You translate technical details for bureaucrats, explain political realities to engineers, and keep everyone coordinated.\n\nYour diplomatic skills make the response more effective. You prevent conflicts, facilitate decisions, and ensure resources reach where they're needed most.",
      isEnding: true,
      outcome: "You lived to 64, your moderate radiation exposure causing health problems but not immediately fatal illness. Your bridge-building role proved crucial to Chernobyl response success. You facilitated communication between groups that often distrusted each other. You translated scientific jargon for politicians and political necessities for scientists. You became so effective that you were appointed to coordinate all USSR nuclear safety efforts. When the Soviet Union collapsed, both Russia and Ukraine competed to hire you. You chose Ukraine and rebuilt their nuclear safety apparatus. At your funeral, a Russian official and Ukrainian official gave joint eulogy—unprecedented given tensions between the countries. They agreed: 'Volkov built bridges when others built walls. His legacy is cooperation.' That might not sound heroic, but in preventing future disasters, diplomacy was as important as any dramatic sacrifice. You proved that bureaucracy, done right, saves lives."
    },

    push_evacuations: {
      title: "The Evacuation Advocate",
      date: "May-June 1986 - Government Offices",
      text: "You constantly push authorities to expand evacuation zones as contamination mapping reveals wider danger. Officials resist—evacuations are expensive and embarrassing.\n\nBut you persist, using data, pressure, and moral arguments. Gradually, evacuation zones expand from 10 to 30 kilometers, then wider areas are designated for voluntary evacuation.\n\nYour advocacy saves thousands from living in contaminated areas.",
      isEnding: true,
      outcome: "You lived to 66, dying of radiation-related cancer. But your persistent advocacy expanded evacuations that saved thousands from long-term exposure. The 30-kilometer exclusion zone—you fought for that boundary. The voluntary evacuation zones beyond—your data-driven arguments convinced skeptical officials. An estimated 100,000 people avoided serious contamination because of zones you advocated for. You were both praised and criticized: 'Volkov forced expensive evacuations' versus 'Volkov saved children from cancer.' History vindicated you—cancer rates in areas you wanted evacuated (but weren't) proved tragically high. At your funeral, a woman brought her healthy adult daughter: 'We lived on the edge of the zone. He fought to evacuate us. The government refused. We left anyway because of his warnings. My daughter is healthy because he wouldn't stop pushing.' That interaction, repeated hundreds of times, defined your legacy: the man who wouldn't stop pushing until people were safe."
    },

    detained_hero: {
      title: "Prison and Vindication",
      date: "April 27-November 1986 - Detention",
      text: "You're detained for seven months for your outburst demanding evacuation. The charges are vague—disturbing public order, spreading panic.\n\nBut your detention becomes a cause célèbre. Scientists, other engineers, even some officials protest. International pressure mounts.\n\nIn November, during glasnost, you're released without trial. No apology, but your point was made—Pripyat was evacuated.",
      isEnding: true,
      outcome: "You lived to 68, your detention period and radiation exposure affecting your health but not destroying it. Your seven months in prison became legendary—the engineer imprisoned for demanding the evacuation that everyone now agreed was necessary. After release, you became an opposition figure and democracy activist. When the Soviet Union collapsed, you were elected to Ukraine's first parliament. You drafted Ukraine's nuclear safety legislation and environmental protection laws. You remained outspoken until your death, always pushing for transparency and accountability. At your state funeral, the president said: 'Aleksei Volkov spent seven months in prison for being right. He spent the rest of his life proving that courage matters more than compliance.' Your prison mugshot hangs in Ukraine's parliament—a reminder to legislators that truth-telling sometimes requires defying authority. You turned your detention from punishment into credibility, from silencing into amplification."
    },

    escape_detention: {
      title: "The Persistent Rebel",
      date: "April 27-1986 - In Motion",
      text: "You escape detention and spend months moving between safe houses, continuing to spread the truth about Chernobyl. You become a folk hero—the engineer who wouldn't be silenced.\n\nYour underground advocacy keeps pressure on authorities to improve response efforts. You're wanted by the KGB but protected by ordinary people who see you as a truth-teller.",
      choices: [
        {
          text: "Eventually negotiate surrender in exchange for policy changes",
          next: "negotiated_surrender",
          stats: { truth: 30, duty: 20 }
        },
        {
          text: "Continue underground work until the Soviet system collapses",
          next: "underground_until_end",
          stats: { truth: 35, survival: 15 }
        }
      ]
    },

    guilty_redemption: {
      title: "The Second Chance",
      date: "April 27-May 1986 - Chernobyl Area",
      text: "Wracked with guilt over evacuating your family while lying to others, you throw yourself into redemption. You work day and night coordinating evacuations, warning workers, documenting exposures.\n\nYou can't undo your hypocrisy, but you can try to make amends. You absorb significant radiation in the process, but your work saves lives.",
      isEnding: true,
      outcome: "You died at 58 of radiation-related cancer, but your redemptive work after your initial failure saved hundreds of lives. Your family survived and thrived—your children became doctors who treated Chernobyl victims, perhaps their own form of redemption. You documented your moral failure and redemption in a brutally honest memoir that became required reading in engineering ethics courses. You wrote: 'I protected my family while lying to others. That was wrong. I spent the rest of my life trying to make it right. I'm not sure I succeeded, but I tried.' That honesty resonated. You became a symbol of imperfect people trying to do better. At your funeral, your daughter said: 'He made a mistake, felt terrible about it, and spent his life making amends. That's more honest than pretending to be perfect.' Your gravestone: 'He failed, then he tried. The trying mattered.' Your legacy is that redemption is possible, that failure isn't final if you use it to become better."
    },

    continued_deception: {
      title: "Living the Lie",
      date: "1986-2010 - Ukraine",
      text: "You continue the deception, maintaining the lie that justified evacuating your family early while telling others to wait. You rise in the Soviet bureaucracy, rewarded for your 'calm' handling of the crisis.\n\nBut the lie eats at you. You drink to forget. Your marriage suffers. Your children grow distant when they learn what you did.",
      isEnding: true,
      outcome: "You lived to 67, dying of alcoholism rather than radiation. Your career was successful, your life empty. Your children attended your funeral but spoke coldly. Your son's eulogy was devastating: 'My father saved us. But he did it by betraying his principles and his neighbors. He gave us life but lost his soul. I don't know whether to thank him or despise him. Maybe both.' Your grave has few visitors. Your name is mentioned in histories of Chernobyl as an example of the moral compromises that worsened the disaster. You're a cautionary tale: success built on betrayal is hollow, survival purchased with others' suffering is poisoned. You lived long but never truly lived with yourself. Your epitaph, chosen by your embittered children: 'He survived.' Two words that contain volumes of judgment."
    },

    prosecution_hero: {
      title: "The Trial of Truth",
      date: "May-December 1986 - Soviet Court",
      text: "You're prosecuted for broadcasting unauthorized warnings. The trial becomes international news. You defend yourself by detailing the government's lies and minimization of the disaster.\n\nYour testimony in court reveals the full scope of official deception. The trial becomes an indictment of the system rather than you.\n\nUnder intense pressure, charges are dropped in December. You've won.",
      isEnding: true,
      outcome: "You lived to 71, your trial testimony becoming a pivotal moment in Soviet glasnost. Your court defense, broadcast internationally, exposed the Chernobyl cover-up to the world. Gorbachev later credited your trial as one factor pushing him toward greater transparency. You became a celebrated dissident, speaking worldwide about truth-telling and accountability. You advised post-Soviet governments on transparency laws. You wrote bestselling memoirs. You received honorary doctorates from universities across Europe. At your funeral, former Soviet officials who prosecuted you attended. One spoke: 'We tried him for telling the truth. History proved him right and us wrong. That trial helped end the Soviet Union. He won in ways we never imagined.' Your courtroom statement—'Truth cannot be prosecuted into silence'—is carved above Kiev's courthouse entrance. You proved that sometimes the right platform can amplify truth louder than authority can suppress it."
    },

    demand_accountability: {
      title: "The Accountability Crusader",
      date: "May-December 1986 - Soviet Courts",
      text: "You turn your prosecution into a prosecution of the Soviet system. In court, you methodically detail every failure, every lie, every decision that prioritized politics over safety.\n\nYour defense becomes an indictment of nuclear management under Soviet bureaucracy. International media covers every session. Scientists testify supporting your account.\n\nThe trial becomes a watershed moment for glasnost and accountability.",
      isEnding: true,
      outcome: "Charges against you were dropped after six months as your trial became embarrassing to the government. You lived to 69, your trial testimony fundamentally changing Soviet nuclear policy and contributing to political reforms. You became the face of scientific accountability over political convenience. You advised on the trials of plant officials, your testimony helping convict those truly responsible. You helped draft post-Soviet nuclear safety legislation across Eastern Europe. You consulted for the IAEA on accountability mechanisms. At your funeral, Mikhail Gorbachev sent a letter: 'Volkov's trial testimony showed me that glasnost couldn't be half-hearted. His demand for accountability helped change our nation.' Your trial transcripts are studied in law schools and government courses worldwide. You proved that even kangaroo courts can become platforms for truth if the defendant is brave enough and the moment is right. Your courage turned prosecution into vindication."
    },

    assist_pripyat_evacuation: {
      title: "The Pripyat Guardian",
      date: "April 27, 1986 - Pripyat",
      text: "You stay in Pripyat coordinating the evacuation. 50,000 people must be moved in hours. Buses arrive. Families pack quickly. Children cry. Elderly need help.\n\nYour organization ensures it happens efficiently and humanely. You're one of the last to leave, checking empty apartments to make sure no one is left behind.\n\nBy evening, Pripyat is a ghost town. You've helped evacuate an entire city without major casualties.",
      isEnding: true,
      outcome: "You lived to 63, the radiation exposure from staying in contaminated Pripyat causing cancer but not immediately killing you. Your coordination of the Pripyat evacuation became a textbook case in emergency management. 50,000 people evacuated in three hours with only minor injuries—that's extraordinary. You later wrote the definitive manual on nuclear emergency evacuation, used by countries worldwide. You consulted on emergency planning for nuclear facilities globally. You advised governments after Fukushima on evacuation protocols. At your funeral, former Pripyat residents came by the hundreds. They brought photos of their lives after evacuation—children, grandchildren, achievements. One said: 'He got us out alive and quickly. Everything we've had since—we owe to that day.' Your memorial plaque in evacuated Pripyat reads: 'In three hours, one man's organization saved a city. Aleksei Volkov, Guardian of Pripyat.' Urban planners and emergency managers still study your work. You proved that good crisis management saves lives as surely as dramatic heroism."
    },

    return_containment: {
      title: "The Containment Engineer",
      date: "April 27-September 1986 - Chernobyl",
      text: "You return to the plant and join the team designing the reactor containment. Your expertise in the plant's structure is crucial for planning the sarcophagus that will entomb the ruins.\n\nYou work for five months on the containment project, absorbing significant radiation but helping design the structure that will seal off the disaster for decades.",
      isEnding: true,
      outcome: "You lived to 60, dying of radiation-related cancer. But the sarcophagus you helped design contained Chernobyl's radioactive material for 30 years until a new safe confinement structure could be built. Your engineering calculations were precise—the structure held despite being built in extreme radiation conditions. You supervised liquidators constructing the sarcophagus, your safety protocols reducing casualties. After Chernobyl, you designed containment strategies for other nuclear incidents worldwide. You consulted on Fukushima's containment. You trained engineers in rapid emergency containment design. At your funeral, an engineer who worked under you spoke: 'Volkov designed a structure in months that would normally take years, in radiation that should have killed us all, and it held for three decades. That's engineering genius born of necessity.' Your containment designs are still referenced in nuclear emergency planning. The original Chernobyl sarcophagus stood as your monument—imperfect but functional, built in impossible conditions, and ultimately successful. You stopped the disaster from spreading further. That containment was your legacy."
    },

    workers_advocate: {
      title: "The Workers' Voice",
      date: "1986-2009 - Ukraine",
      text: "You dedicate yourself to fighting for liquidators' rights and workers' compensation. You organize unions, lobby government, document exposures, and fight bureaucracy.\n\nThousands of liquidators develop health problems. Many are denied benefits. You fight for each one, using your own experience as leverage.",
      isEnding: true,
      outcome: "You lived to 66, your own radiation exposure finally causing fatal cancer. But your decades of advocacy secured benefits, medical care, and recognition for hundreds of thousands of liquidators. The Liquidators' Union you founded continues today. You fought for compensation laws in Ukraine, Russia, and Belarus. You documented exposure levels that governments wanted to suppress. You organized medical care for liquidators across the former Soviet Union. At your funeral, liquidators from three countries attended. They carried a banner: 'Volkov fought for us when no one else would.' One liquidator spoke: 'We cleaned up Chernobyl. Volkov spent his life cleaning up how we were treated. He gave us voice and dignity.' Your foundation continues providing support to aging liquidators and their families. You proved that heroism isn't just confronting disasters—it's supporting those who did, fighting for them when the world forgets, ensuring their sacrifice is recognized and compensated. That sustained advocacy was its own form of courage."
    },

    illness_documentation: {
      title: "The Medical Pioneer",
      date: "1986-2008 - Medical Research",
      text: "You document your own illness in exhaustive detail, becoming a research subject and advocate for radiation medicine. Your detailed records of symptoms, progression, and treatment help doctors understand and treat radiation exposure better.\n\nYour case study is published in medical journals worldwide. Your willingness to be examined, studied, and documented advances radiation medicine significantly.",
      isEnding: true,
      outcome: "You lived to 65, your radiation exposure causing multiple cancers that you documented meticulously until your death. Your medical records became the foundation for understanding long-term, low-dose radiation effects. Your case study is taught in medical schools worldwide. You helped develop treatment protocols that saved lives in future radiation accidents. You participated in every research study, enduring countless tests because 'if my suffering helps one doctor treat one patient better, it's worth it.' Medical researchers attended your funeral in numbers usually reserved for colleagues. One oncologist said: 'Volkov's documentation of his own deterioration advanced radiation medicine by decades. He turned his dying into data that saves lives.' Your body was donated to science, your final contribution. Medical students still study 'the Volkov case.' You proved that even dying can be an act of service if you document it with scientific rigor and selfless purpose. Your suffering became the foundation for helping others suffer less."
    },

    technical_advisor: {
      title: "The Cleanup Architect",
      date: "1986-1990 - Chernobyl Exclusion Zone",
      text: "You become the chief technical advisor for the long-term cleanup operation. You design the liquidator rotation system, establish safety protocols, supervise decontamination efforts.\n\nYour technical knowledge shapes four years of cleanup work involving 600,000 people. Your safety systems reduce casualties significantly.",
      isEnding: true,
      outcome: "You lived to 62, the accumulated radiation exposure from years of cleanup work finally causing fatal cancer. But your safety protocols and rotation systems minimized liquidator casualties. Estimates suggest your safety measures prevented thousands of deaths from acute radiation exposure. You supervised construction of the sarcophagus, establishment of the exclusion zone, and initial decontamination efforts. After retiring from Chernobyl, you advised on nuclear facility decommissioning worldwide. You consulted on cleanup operations in Russia, UK, and US. At your funeral, the head of Ukraine's nuclear authority said: 'Six hundred thousand liquidators served at Chernobyl. Most survived because of Volkov's safety systems. He built the framework that made an impossible task merely extraordinarily difficult.' Your cleanup manual is still used at nuclear facilities globally. You turned chaos into system, disaster into managed crisis. Your legacy is measured in liquidators who lived long enough to see their grandchildren, all because you balanced urgency with safety."
    },

    safety_procedures: {
      title: "The Procedure Writer",
      date: "1986-2006 - Nuclear Safety Documentation",
      text: "You dedicate yourself to writing comprehensive safety procedures based on Chernobyl lessons. You document what went wrong, why it went wrong, and how to prevent it happening again.\n\nYour procedures are adopted internationally. They save lives at nuclear facilities worldwide by institutionalizing the lessons learned in blood at Chernobyl.",
      isEnding: true,
      outcome: "You lived to 63, dying of radiation-related cancer. But your safety documentation revolutionized nuclear procedures globally. The 'Volkov Protocols' became international standards for nuclear emergency response. Your procedures prevented incidents at facilities in France, US, Japan, and Korea—each time, operators credited your protocols with helping them catch problems before they became disasters. You received the Atoms for Peace Award, consulted for the IAEA, and advised governments worldwide. At your retirement, the director of the IAEA said: 'Volkov's procedures have prevented the next Chernobyl multiple times over. We'll never know all the disasters that didn't happen because someone followed his protocols.' Your manual is updated but never retired—it's still the foundation of nuclear safety procedures. You proved that properly documenting one disaster prevents many more. Your legacy isn't measured in lives saved once, but in lives saved repeatedly, everywhere, forever, because you wrote down what you learned."
    },

    brief_commission: {
      title: "The Commission's Key Witness",
      date: "April 27-May 1986 - Chernobyl Area",
      text: "You become the key technical witness for the government commission. Your firsthand testimony and technical expertise shape their understanding of the disaster.\n\nYou brief everyone from scientists to Politburo members. Your calm, factual testimony cuts through panic and misinformation. Your expertise guides the initial response strategy.",
      isEnding: true,
      outcome: "You lived to 67, your significant radiation exposure causing health problems but not immediately killing you. Your testimony to the commission shaped the entire Soviet and international response to Chernobyl. Your recommendations formed the basis for evacuation zones, containment strategy, and cleanup approach. You continued as a government advisor on nuclear safety for decades. You testified at the trial of plant officials. You consulted on post-Soviet nuclear safety reforms. You advised the IAEA on emergency response protocols. At your funeral, Mikhail Gorbachev sent a personal letter: 'Volkov's testimony gave us facts when we had only confusion. His expertise guided our response and probably saved thousands of lives. He was the right person in the right place at history's worst moment.' Your commission testimony is declassified and studied by crisis management experts worldwide. You proved that in chaotic crisis, calm expertise is worth more than dramatic action. Your legacy is measured in good decisions made because you provided accurate, honest information when it mattered most."
    },

    rest_and_recover: {
      title: "The Long-Term Player",
      date: "May-July 1986 - Recovery",
      text: "After 24 hours of relentless work, you accept that long-term contribution requires self-care. You take three months to recover from your radiation exposure and exhaustion.\n\nIt's difficult watching others work while you rest, but you understand strategic thinking. A recovered expert is more valuable than a burned-out martyr.",
      isEnding: true,
      outcome: "You lived to 70, the longest-lived of any significantly exposed Chernobyl responder. Your strategic decision to recover fully allowed you 34 years of contribution. You advised on Chernobyl response for decades. You trained thousands of nuclear safety experts. You consulted on every major nuclear incident for three decades. You wrote the definitive histories of the disaster. You testified at countless hearings. You shaped nuclear policy worldwide. At your 70th birthday celebration six months before your death, a young engineer said: 'Because you chose to rest in 1986, I had you as a teacher in 2005. Because you had you as a teacher, I'm now training the next generation. Your legacy multiplies.' At your funeral, former students came from 30 countries. The president of Ukraine said: 'Some heroes burn bright and die young. Aleksei Volkov chose to burn steady for 34 years. His was a different kind of heroism—the heroism of sustained contribution, of thinking long-term, of understanding that sometimes survival is strategic.' Your epitaph: 'He rested to serve longer.' That wisdom echoes."
    },

    work_until_collapse: {
      title: "The Ultimate Sacrifice",
      date: "April 26-May 5, 1986 - Chernobyl",
      text: "You work for ten days straight, ignoring radiation sickness symptoms—nausea, weakness, bleeding. You coordinate response efforts until you literally collapse at your desk.\n\nYou're evacuated to Moscow Hospital Number 6, having absorbed over 500 rem. The doctors are frank: you're dying.\n\nBut your ten days of work prevented further reactor failures, organized the initial evacuation, and established the framework for longer-term response.",
      isEnding: true,
      outcome: "You died on May 20, 1986, after 15 days in the hospital. But your ten days of relentless work accomplished what normally takes months. You prevented Reactors 1, 2, and 3 from failing—which would have made the disaster exponentially worse. You established evacuation procedures that saved thousands. You coordinated the initial liquidator deployments. You set up safety protocols that reduced cleanup casualties. You were posthumously awarded the Hero of the Soviet Union. At the Chernobyl memorial, your name is first on the list of workers who died from exposure. An engineer who worked under you wrote in his memoir: 'Volkov worked until his body simply stopped. His ten days of work saved months of trial and error. He knew he was dying and kept working. That's beyond heroism—that's transcendence.' Your sacrifice bought time and structure when both were desperately needed. You died accomplishing in days what lesser people couldn't accomplish in careers."
    },

    hospital_treatment: {
      title: "Survivor's Path",
      date: "May-August 1986 - Moscow Hospital Number 6",
      text: "You accept medical evacuation after absorbing 300 rem. Treatment is intensive and painful, but you survive. Your case becomes a medical study in successful treatment of severe radiation exposure.\n\nYou spend three months in the hospital, then months more recovering. But you live, and with life comes opportunity for continued service.",
      isEnding: true,
      outcome: "You lived to 58, dying of radiation-related cancer. But those 22 years mattered enormously. You became Ukraine's chief nuclear safety officer. You supervised long-term Chernobyl management. You advised on decommissioning the remaining reactors. You consulted internationally on nuclear safety. You trained a generation of Ukrainian nuclear engineers. You wrote extensively about Chernobyl lessons. You testified at multiple investigations and trials. At your funeral, your successor as chief safety officer said: 'Volkov could have died in May 1986. Instead, he accepted treatment, recovered, and gave us 22 years of expertise that shaped Ukrainian nuclear policy. Those 22 years prevented multiple potential accidents and improved safety across our entire nuclear sector.' Your gravestone reads: 'He accepted help so he could help others.' That wisdom—understanding when to accept support so you can provide it later—defined your legacy. You proved that surviving to serve is sometimes wiser than dying dramatically."
    },

    traitor_trial: {
      title: "The Traitor Who Saved Lives",
      date: "July-December 1986 - Soviet Court",
      text: "You're tried for revealing state secrets to foreign powers. The prosecution portrays you as a traitor who gave enemies ammunition against the Soviet Union.\n\nYour defense is simple: 'I told the truth to save lives. If that's treason, I'm guilty.'\n\nThe trial becomes international news. Pressure mounts on the Soviet government. In December, you're convicted but sentenced to time served and released.",
      isEnding: true,
      outcome: "You lived to 66, your treason conviction eventually overturned after the Soviet collapse. But you spent years as a pariah in your own country while being celebrated abroad. You lived in exile in the West for a time, then returned to Ukraine after independence. Your 'treason'—warning the world about Chernobyl—probably prevented panic that could have killed people in affected countries. Radiation experts credit your international warning with helping European countries implement quick protective measures. At your funeral, the Ukrainian president spoke: 'Volkov was convicted of treason for telling the truth. History shows he committed patriotism—he saved Soviet citizens by forcing Soviet leaders to act. Sometimes the greatest loyalty to your country is refusing to let it lie.' Your conviction was officially voided, and you were posthumously declared a Hero of Ukraine. Your trial transcripts are taught in ethics courses: when does duty to humanity supersede duty to state? You lived your answer to that question."
    },

    embassy_refuge: {
      title: "The Defector",
      date: "April 27, 1986 - Western Embassy",
      text: "You flee to a Western embassy after contacting international authorities about Chernobyl. After tense negotiations, you're allowed to leave the Soviet Union.\n\nYou live in exile but speak freely about Chernobyl. Your testimony, unfiltered by Soviet censorship, reveals the full scope of the disaster to the world.",
      isEnding: true,
      outcome: "You lived to 72 in exile, first in Germany, then the US. You never returned to the Soviet Union or Russia. Your exile testimony fundamentally shaped Western understanding of Chernobyl. You testified before the US Congress, European Parliament, and UN. You consulted on nuclear safety worldwide. You wrote bestselling books about Chernobyl and Soviet nuclear industry failures. But you never saw your homeland again. Your family was harassed by Soviet authorities. Your children eventually joined you in exile, but you'd caused them hardship. At your funeral in Washington, both US and Ukrainian officials attended (by then, Ukraine was independent and claimed you as a hero). Your son said: 'He chose truth over country, principle over family convenience. That cost us, but he was right. Sometimes being right costs everything.' You were buried in Arlington Cemetery—extraordinary honor for a Soviet defector. Your grave is visited by nuclear safety advocates worldwide. You proved that some truths are worth any price, even exile from everything you knew. Your sacrifice forced the world to confront Chernobyl's reality."
    },

    negotiated_surrender: {
      title: "The Deal",
      date: "September 1986 - Kiev",
      text: "After months underground, you negotiate surrender in exchange for policy changes—expanded evacuation zones, better liquidator protections, honest reporting of radiation levels.\n\nAuthorities accept to end the embarrassment of a fugitive engineer. You surrender, serve a token sentence, and are released to work as a safety consultant.",
      isEnding: true,
      outcome: "You lived to 64, your negotiated surrender allowing you to return to productive work while forcing government accountability. The policy changes you negotiated saved thousands of lives. Expanded evacuation zones moved families from contaminated areas. Improved liquidator protections reduced cleanup casualties. Honest radiation reporting helped medical treatment. You spent the rest of your life as an independent safety consultant, always pushing authorities toward transparency. At your funeral, a government minister admitted: 'Volkov held us hostage with truth. We hated him for it, but he was right. The policies he forced us to adopt saved lives and money. He understood that transparency is cheaper than coverups.' Your negotiated surrender became a case study in productive civil disobedience. You proved that sometimes rebels can accomplish more by coming to the table than staying in the streets, as long as they negotiate from strength and never compromise on principles. Your gravestone reads: 'He made them deal.' That transformation of defiance into policy was your genius."
    },

    underground_until_end: {
      title: "The Underground Voice",
      date: "1986-1991 - Soviet Underground",
      text: "You remain underground for five years, constantly moving, constantly speaking truth about Chernobyl. You become a legendary figure—the engineer who wouldn't be silenced.\n\nWhen the Soviet Union collapses in 1991, you emerge from hiding to a changed world. The KGB that hunted you no longer exists. Ukraine is independent.",
      isEnding: true,
      outcome: "You lived to 68, emerging from underground as a national hero in independent Ukraine. Your five years of underground truth-telling became legendary. You'd risked everything to keep Chernobyl in public consciousness when authorities wanted it forgotten. You were elected to Ukraine's first parliament. You drafted the nation's nuclear safety laws and environmental protections. You established Ukraine's nuclear regulatory agency. You became an international advocate for nuclear safety and transparency. At your state funeral, the president said: 'Volkov spent five years hunted like a criminal for telling the truth. When freedom came, he emerged not bitter but determined to build better systems. He turned his persecution into policy, his suffering into law.' Your underground writings are preserved in Ukraine's national archives. Your story is taught in schools as an example of civil courage. You proved that sometimes the ultimate act of patriotism is refusing to be silent, even when your government demands it. Your five years underground became the moral foundation for a nation learning to value truth over authority."
    },

    seek_asylum: {
      title: "The Asylum Seeker",
      date: "April 27, 1986 - Western Embassy",
      text: "With KGB agents pursuing you, you flee to a Western embassy seeking asylum. After tense negotiations, you're allowed to leave the USSR.\n\nIn the West, you become the face of Chernobyl truth-telling, your story of exposing the cover-up resonating internationally.",
      isEnding: true,
      outcome: "You lived to 74 in the United States. Your asylum and subsequent testimony fundamentally shaped Western understanding of Chernobyl and Soviet nuclear management. You testified before Congress, worked for the Nuclear Regulatory Commission, and consulted worldwide on nuclear safety. Your memoir became an international bestseller. You were celebrated in the West but denounced as a traitor in the Soviet Union. After Ukrainian independence, you were invited home and welcomed as a hero. You split your time between the US and Ukraine. At your funeral, ambassadors from both countries spoke. The Ukrainian ambassador said: 'He left because he loved truth more than comfort. He returned because he never stopped loving his homeland.' You were buried in Kiev with full honors. Your grave inscription, in English and Ukrainian: 'He spoke truth in two languages.' Your legacy is that courage sometimes requires leaving everything behind, but integrity eventually brings you home—if not physically, then morally. Your choice between truth and nation was impossible, but you chose truth and eventually got both."
    },

    arrested_martyr: {
      title: "The Martyr's Choice",
      date: "April 27-August 1986 - Prison and Trial",
      text: "You accept arrest, knowing your trial will be international news. You use the courtroom as a platform, methodically detailing the Chernobyl cover-up.\n\nYour testimony is broadcast internationally. Every day of your trial, you reveal more government lies. The prosecution can't silence you without proving your point.\n\nYou're convicted and sentenced to ten years, but international pressure is immense. After four months, you're quietly released during glasnost reforms.",
      isEnding: true,
      outcome: "You died at 62 of radiation-related cancer, but your trial testimony changed history. Your willingness to face prosecution rather than flee gave you a platform that defection never could. Your testimony was broadcast across Europe and influenced Gorbachev's glasnost policies. You were released after four months and spent the rest of your life as a celebrated truth-teller. You advised governments on nuclear safety, testified at international tribunals, and wrote extensively about accountability. At your funeral, Mikhail Gorbachev attended personally and said: 'Volkov chose martyrdom to force truth into sunlight. His courage showed that the old system of lies couldn't stand. He helped end the Soviet Union by refusing to be silenced.' Your trial transcripts are studied in law schools and political science courses worldwide. You proved that sometimes accepting punishment rather than fleeing gives your message more power than any escape could. Your martyrdom—though you survived it—forced a system to confront its lies."
    },

    accountability_trial: {
      title: "The Trial That Changed Everything",
      date: "May-December 1986 - Kiev Courthouse",
      text: "Your trial for unauthorized emergency broadcast becomes a public spectacle. You methodically present evidence of government cover-ups, delayed evacuations, and radiation exposure that could have been prevented.\n\nEach day of testimony reveals more official failures. The prosecution struggles—everything you say is true, documented, and internationally verified.\n\nBy December, the trial is dropped. The government can't convict you without admitting its own guilt.",
      isEnding: true,
      outcome: "You lived to 66, your trial becoming a watershed moment in Soviet glasnost. Your testimony led directly to reforms in nuclear safety, emergency response, and government accountability. You became a symbol of speaking truth to power. After the trial, you were appointed to various safety oversight bodies. You drafted Ukraine's nuclear safety legislation after independence. You consulted internationally on nuclear accountability. At your funeral, a former prosecutor from your trial spoke—stunning everyone: 'I was ordered to convict Volkov. But every day, he proved he was right and we were wrong. His trial taught me that law must serve truth, not power. He changed how I practiced law for 30 years after.' Your trial transcripts are required reading in nuclear engineering and public policy courses. You proved that sometimes the right trial, at the right moment, can change systems rather than just punish individuals. Your legacy isn't just what you said, but how saying it publicly forced accountability."
    },

    lead_technical_response: {
      title: "The Response Leader",
      date: "April 27-December 1986 - Chernobyl",
      text: "You lead the technical response team for eight months of intensive work. You coordinate hundreds of engineers, supervise containment construction, and manage the complex logistics of dealing with an open reactor core.\n\nYour leadership is crucial to the response's success. The sarcophagus is built, the other reactors are stabilized, and the cleanup begins to bring the situation under control.\n\nYou absorb significant radiation—over 200 rem—but your leadership saves countless lives.",
      isEnding: true,
      outcome: "You lived to 61, dying of radiation-related cancer. But your eight months of technical leadership shaped the entire Chernobyl response. Under your guidance, the sarcophagus was built in record time, preventing further contamination. The other reactors were safely shut down and secured. Cleanup operations began with proper safety protocols. You trained hundreds of engineers who continued the work for decades. After leaving Chernobyl, you advised on nuclear emergency response worldwide. You helped design international protocols for reactor accidents. You consulted on every major nuclear incident for 25 years. At your funeral, an engineer who worked under you said: 'Volkov took a situation of absolute chaos and brought order. His leadership in those eight months set the foundation for everything that followed. Every liquidator who survived the cleanup owes something to his safety protocols and organizational genius.' Your leadership manual is still used in nuclear emergency training. You proved that technical expertise combined with leadership ability can turn catastrophe into managed crisis."
    },

    accurate_documentation: {
      title: "The Historian",
      date: "April-December 1986 - Chernobyl Area",
      text: "You dedicate yourself to documenting the disaster with meticulous accuracy—what happened, when, why, who was responsible, what worked, what failed.\n\nYour documentation is exhaustive and honest, even when the truth is uncomfortable. You interview workers, photograph damage, collect data, and compile the most comprehensive record of the disaster.\n\nYour work becomes the definitive historical and technical record of Chernobyl.",
      isEnding: true,
      outcome: "You lived to 65, your documentation work becoming the foundation for all subsequent Chernobyl research. Your comprehensive record was used in trials, investigations, medical studies, and historical analyses. You compiled over 10,000 pages of documentation, including interviews with 800 workers and victims. Your archive is preserved in multiple locations and consulted by researchers worldwide. You received the UNESCO Archive Prize and numerous academic honors. At your funeral, a historian said: 'Without Volkov's documentation, Chernobyl would have been lost to propaganda, selective memory, and time. His meticulous record-keeping gave us truth when everyone else offered narrative.' Your archives revealed uncomfortable truths about failures at every level, which is why they're valuable—you documented reality, not propaganda. Your life's work ensured that future generations know exactly what happened at Chernobyl, preventing both oversimplification and mythologization. Your epitaph: 'He documented what others wanted forgotten.' That commitment to comprehensive truth-telling is your legacy."
    },

    public_trial: {
      title: "The Public Prosecution",
      date: "December 1986-March 1987 - Soviet Court",
      text: "After months underground, you surrender publicly and demand a trial. You use the courtroom to detail government failures and cover-ups.\n\nYour trial is covered internationally. Each session reveals more about the disaster and the official response. You're convicted but become a cause célèbre.\n\nYou serve eighteen months before being released during glasnost reforms.",
      isEnding: true,
      outcome: "You lived to 67, your public trial galvanizing reform movements and contributing to glasnost. Your courtroom testimony was more effective than your underground advocacy—the legal setting gave you a platform and legitimacy. After release, you became a prominent democracy activist and nuclear safety advocate. You were elected to the Soviet Congress of People's Deputies in 1989, where you pushed for transparency and accountability. After Ukrainian independence, you served in parliament and drafted key safety legislation. At your funeral, a fellow deputy said: 'Volkov understood that sometimes you have to surrender to win. His trial did more to expose Soviet failures than years of underground work could have.' Your trial testimony is preserved in archives and studied in political science courses. You proved that sometimes facing the system head-on, in its own courts, is more powerful than evading it. Your public trial forced accountability in ways that underground resistance never could."
    },

    western_exile: {
      title: "The Exile's Voice",
      date: "1986-2020 - Western Europe and US",
      text: "You flee to the West and spend the rest of your life speaking about Chernobyl. Unfiltered by Soviet censorship, your testimony reveals the full truth of the disaster and its cover-up.\n\nYou become an international advocate for nuclear safety and government transparency. You testify before parliaments, advise regulators, and write extensively.",
      isEnding: true,
      outcome: "You lived to 71 in exile, never returning to Soviet or Russian soil (though you visited independent Ukraine). Your Western exile allowed you to speak freely about Chernobyl without fear of prosecution. You testified before the European Parliament, US Congress, and UN. You consulted on nuclear safety for Western governments. You wrote bestselling books that shaped public understanding of Chernobyl. But exile had costs—you never saw some family members again, and some former colleagues called you a traitor. After Ukrainian independence, you were posthumously pardoned and declared a Hero of Ukraine. At your funeral in Washington, both US and Ukrainian officials spoke. Your daughter said: 'He paid for truth with exile. He never stopped believing that speaking honestly was worth more than comfort.' You were eventually buried in Kiev, your body returned home after death. Your gravestone bears an inscription in English and Ukrainian: 'He spoke from exile so his country could hear truth.' Your sacrifice—living as a stranger to remain honest—defined your legacy."
    },

    system_compliance: {
      title: "The Compliant Survivor",
      date: "1986-2015 - Kiev",
      text: "You work within the system, never publicly challenging official narratives about Chernobyl. You have a successful career in nuclear engineering, rising to senior positions.\n\nBut you know you compromised your principles for career stability. The truth you suppressed weighs on your conscience.",
      isEnding: true,
      outcome: "You died at 66 of natural causes—one of the few Chernobyl responders to die from something other than radiation. You had a successful career and comfortable life. Your children thrived. But you also knew you'd chosen compliance over conscience. After your death, your children found your personal journals—thousands of pages detailing what really happened at Chernobyl and your regret at never speaking publicly. They published them posthumously. The journals revealed uncomfortable truths and caused controversy. Some praised your decision to finally tell the truth, even after death. Others criticized you for staying silent when your voice could have made a difference. Your legacy is complicated—neither hero nor villain, but a person who chose pragmatism over principle and spent a lifetime wondering if that was the right choice. Your epitaph, written by your children from your journal: 'He knew the truth but chose silence. He regretted that choice but made it anyway.' That honest admission of moral complexity may be your most valuable legacy—a reminder that not everyone in disasters is a hero or coward. Most are ordinary people making difficult choices and living with the consequences."
    },

    defy_authority: {
      title: "The Defiant Truth-Teller",
      date: "April 27-May 1986 - Kiev",
      text: "You defy the order to stay silent and speak to both Soviet and Western journalists. You tell them everything—the disaster's scale, government lies, delayed evacuations.\n\nYou're arrested immediately, but the interviews are already broadcast. The world knows the truth, and it came from you.",
      isEnding: true,
      outcome: "You spent three years in prison before being released during glasnost. You lived to 64, dying of radiation-related cancer. But your defiant interviews fundamentally changed international response to Chernobyl. Your testimony forced the Soviet government to admit the disaster's scale. Your revelations prompted international aid and scientific cooperation. You were celebrated in the West and eventually vindicated at home after the Soviet collapse. You received numerous international awards for courage and truth-telling. At your funeral, a Western journalist who interviewed you in 1986 spoke: 'Volkov knew he'd be arrested. He gave the interview anyway. He said, "The world needs to know, and I'm the one who can tell them." That courage changed everything.' Your defiance became legendary—the engineer who chose truth over freedom and somehow got both eventually. Your grave is visited by journalists and activists worldwide. Your story is taught in journalism schools as an example of a source with moral courage. You proved that sometimes defiance is the only moral choice, and history vindicates the defiant."
    }
  };

  const currentSceneData = scenes[currentScene];

  if (!currentSceneData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-950 via-blue-900 to-black flex items-center justify-center">
        <div className="text-white text-center p-8">
          <AlertTriangle className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
          <p className="text-xl mb-4">Scene not found: {currentScene}</p>
          <button 
            onClick={onBack} 
            className="px-6 py-3 bg-blue-700 hover:bg-blue-600 rounded-lg transition-all"
          >
            Return to Timeline
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-blue-900 to-black relative overflow-hidden">
      {/* Decorative nuclear elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-9xl">⚛️</div>
        <div className="absolute bottom-10 right-10 text-9xl">☢️</div>
        <div className="absolute top-1/2 right-1/4 text-6xl">⚡</div>
      </div>

      {/* Stats Panel */}
      <div className="fixed top-4 right-4 bg-gray-900/90 backdrop-blur-sm border-2 border-blue-800/60 rounded-lg p-4 z-20 w-64">
        <h3 className="text-blue-400 font-serif font-bold mb-3 text-center">Your Character</h3>
        
        <div className="space-y-3">
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-blue-300 text-sm flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Sense of Duty
              </span>
              <span className="text-blue-200 text-sm font-bold">{stats.duty}%</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-blue-600 to-cyan-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${stats.duty}%` }}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-blue-300 text-sm flex items-center gap-2">
                <Heart className="w-4 h-4" />
                Will to Survive
              </span>
              <span className="text-blue-200 text-sm font-bold">{stats.survival}%</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-green-600 to-emerald-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${stats.survival}%` }}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-blue-300 text-sm flex items-center gap-2">
                <Radio className="w-4 h-4" />
                Commitment to Truth
              </span>
              <span className="text-blue-200 text-sm font-bold">{stats.truth}%</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-yellow-600 to-orange-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${stats.truth}%` }}
              />
            </div>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-blue-800/40">
          <p className="text-blue-400/70 text-xs text-center italic">
            Every second counts
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-8 max-w-4xl">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-blue-300 hover:text-blue-100 transition-colors mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Return to Timeline</span>
        </button>

        {/* Story Card */}
        <div className="bg-gray-900/80 backdrop-blur-sm border-2 border-blue-800/60 rounded-lg overflow-hidden shadow-2xl">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-900 to-gray-900 p-6 border-b-2 border-blue-800/60">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <Zap className="w-8 h-8 text-yellow-300" />
                <div>
                  <h2 className="text-3xl font-serif font-bold text-blue-300">
                    {currentSceneData.title}
                  </h2>
                  <p className="text-blue-400/80 text-sm italic">{currentSceneData.date}</p>
                </div>
              </div>
              {currentSceneData.isEnding && (
                <div className="flex items-center gap-2 bg-blue-700/30 px-3 py-1 rounded-full">
                  <AlertTriangle className="w-4 h-4 text-yellow-300" />
                  <span className="text-blue-300 text-sm font-bold">Ending</span>
                </div>
              )}
            </div>
          </div>

          {/* Story Text */}
          <div className="p-8">
            <div className="prose prose-invert max-w-none">
              {currentSceneData.text.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-blue-100 text-lg leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Ending Outcome */}
            {currentSceneData.isEnding && currentSceneData.outcome && (
              <div className="mt-8 p-6 bg-blue-900/20 border-2 border-blue-700/50 rounded-lg">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-blue-300 font-serif font-bold text-xl mb-2">Your Legacy</h3>
                    <p className="text-blue-200 leading-relaxed">
                      {currentSceneData.outcome}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Choices */}
            {!currentSceneData.isEnding && currentSceneData.choices && (
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-2 text-blue-400 font-bold">
                  <span className="text-lg">Choose your action:</span>
                </div>
                {currentSceneData.choices.map((choice, index) => (
                  <button
                    key={index}
                    onClick={() => makeChoice(choice.next, choice.text, choice.stats)}
                    className="w-full text-left p-5 bg-gradient-to-r from-gray-800/50 to-blue-950/30 hover:from-blue-900/40 hover:to-gray-900/40 border-2 border-blue-800/40 hover:border-blue-600 rounded-lg transition-all duration-300 group"
                  >
                    <p className="text-blue-200 group-hover:text-blue-100 leading-relaxed">
                      {choice.text}
                    </p>
                    {choice.stats && Object.keys(choice.stats).length > 0 && (
                      <div className="mt-2 flex flex-wrap gap-2">
                        {Object.entries(choice.stats).map(([stat, value]) => (
                          value !== 0 && (
                            <span 
                              key={stat}
                              className={`text-xs px-2 py-1 rounded-full ${
                                value > 0 
                                  ? 'bg-green-900/40 text-green-300' 
                                  : 'bg-red-900/40 text-red-300'
                              }`}
                            >
                              {stat.charAt(0).toUpperCase() + stat.slice(1)}: {value > 0 ? '+' : ''}{value}
                            </span>
                          )
                        ))}
                      </div>
                    )}
                  </button>
                ))}
              </div>
            )}

            {/* Ending Actions */}
            {currentSceneData.isEnding && (
              <div className="mt-8 flex gap-4">
                <button
                  onClick={() => {
                    setCurrentScene('intro');
                    setChoices([]);
                    setStats({ duty: 50, survival: 50, truth: 50 });
                  }}
                  className="flex-1 px-6 py-3 bg-blue-700 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all duration-300"
                >
                  Play Again
                </button>
                <button
                  onClick={onBack}
                  className="flex-1 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-all duration-300"
                >
                  Choose Different Timeline
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Choice History */}
        {choices.length > 0 && !currentSceneData.isEnding && (
          <div className="mt-6 bg-gray-900/60 backdrop-blur-sm border border-blue-800/40 rounded-lg p-4">
            <h3 className="text-blue-400 font-bold mb-3 text-sm">Your Decisions:</h3>
            <div className="space-y-2">
              {choices.map((choice, index) => (
                <div key={index} className="flex items-start gap-2">
                  <span className="text-blue-600 text-xs mt-1">▸</span>
                  <p className="text-blue-300/70 text-xs">{choice}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModernStory;import React, { useState } from 'react';
import { ArrowLeft, Zap, Heart, AlertTriangle, Shield, Radio } from 'lucide-react';

const ModernStory = ({ onBack }) => {
  const [currentScene, setCurrentScene] = useState('intro');
  const [choices, setChoices] = useState([]);
  const [stats, setStats] = useState({
    duty: 50,
    survival: 50,
    truth: 50
  });

  const updateStats = (statChanges) => {
    setStats(prev => ({
      duty: Math.max(0, Math.min(100, prev.duty + (statChanges.duty || 0))),
      survival: Math.max(0, Math.min(100, prev.survival + (statChanges.survival || 0))),
      truth: Math.max(0, Math.min(100, prev.truth + (statChanges.truth || 0)))
    }));
  };

  const makeChoice = (nextScene, choiceText, statChanges = {}) => {
    setChoices([...choices, choiceText]);
    updateStats(statChanges);
    setCurrentScene(nextScene);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scenes = {
    intro: {
      title: "Night Shift",
      date: "April 26, 1986, 1:23 AM - Chernobyl Nuclear Power Plant",
      text: "You are Aleksei Volkov, a nuclear engineer working the night shift at Reactor 4 of the Chernobyl Nuclear Power Plant. The spring air is cool as you walk through the facility, the hum of turbines a familiar lullaby.\n\nYour colleague Viktor rushes toward you, his face pale. 'Aleksei! The safety test—something's wrong. The power is dropping too fast. Deputy Chief Engineer Dyatlov is ordering us to continue anyway.'\n\nThrough the observation window, you can see the control room operators frantically adjusting controls. The reactor is becoming unstable during what should have been a routine safety test. Your dosimeter begins clicking faster than normal.\n\nYou have minutes, maybe seconds, to act. The decisions you make tonight will affect thousands of lives—including your own.",
      choices: [
        {
          text: "Rush to the control room and demand they abort the test immediately",
          next: "demand_abort",
          stats: { duty: 15, truth: 10, survival: -5 }
        },
        {
          text: "Call the shift supervisor and report the irregularities through proper channels",
          next: "proper_channels",
          stats: { duty: 10, survival: 5 }
        },
        {
          text: "Try to manually intervene with the reactor controls yourself",
          next: "manual_intervention",
          stats: { duty: 20, survival: -10 }
        },
        {
          text: "Evacuate the immediate area and sound the alarm",
          next: "sound_alarm",
          stats: { survival: 15, duty: -5, truth: 10 }
        }
      ]
    },

    demand_abort: {
      title: "Confrontation",
      date: "April 26, 1986, 1:23 AM - Control Room",
      text: "You burst into the control room. Deputy Chief Engineer Dyatlov spins around, his face red with anger. 'Get out, Volkov! This is a controlled test!'\n\n'The reactor is unstable!' you shout over the alarms. 'We need to abort NOW!'\n\nDyatlov steps toward you menacingly. 'Are you questioning my authority? I'll have you fired—'\n\nThe explosion cuts him off. A massive shockwave throws you against the wall. When you look up, the ceiling is gone. You can see stars through a hole where Reactor 4's roof used to be. A pillar of light—beautiful and terrible—shoots into the night sky.\n\nThe core is exposed. You're staring at an open nuclear reactor.",
      choices: [
        {
          text: "Help evacuate the control room personnel immediately",
          next: "evacuate_control",
          stats: { duty: 15, survival: 10 }
        },
        {
          text: "Try to assess the damage and report to Moscow",
          next: "assess_damage",
          stats: { truth: 15, duty: 10 }
        },
        {
          text: "Look for survivors in the destroyed reactor hall",
          next: "search_survivors",
          stats: { duty: 20, survival: -15 }
        }
      ]
    },

    proper_channels: {
      title: "Too Late",
      date: "April 26, 1986, 1:23 AM - Administrative Office",
      text: "You reach for the phone to call the shift supervisor. As you dial, you hear Viktor screaming from the control room. The phone explodes in your hand as the building shakes violently.\n\nThe blast wave shatters windows. You drop to the floor as glass rains down. When you stand, you see the night sky through what used to be solid concrete walls. The reactor building is gone—just a gaping hole spewing radioactive fire into the atmosphere.\n\nYour dosimeter is screaming. The radiation levels are off the scale. By following protocol, you've lost precious seconds. Now you must act.",
      choices: [
        {
          text: "Run to find survivors and help with evacuation",
          next: "help_evacuate",
          stats: { duty: 15, survival: 5 }
        },
        {
          text: "Get to a phone that works and alert Moscow immediately",
          next: "alert_moscow",
          stats: { truth: 20, duty: 10 }
        },
        {
          text: "Flee the facility to save yourself",
          next: "flee_facility",
          stats: { survival: 25, duty: -20 }
        }
      ]
    },

    manual_intervention: {
      title: "Heroic Failure",
      date: "April 26, 1986, 1:23 AM - Reactor Hall",
      text: "You sprint down to the reactor hall, your dosimeter already clicking furiously. The radiation levels are dangerously high, but you know the controls that might stabilize the reaction.\n\nAs you reach for the emergency shutdown, the reactor explodes. The force lifts you off your feet and throws you twenty meters. You land hard, your leg shattered.\n\nThrough the pain and smoke, you see the core exposed above you, glowing with an otherworldly blue light. Graphite blocks rain down around you. Your dosimeter has stopped working—you've exceeded its maximum reading.\n\nYou're trapped in the most radioactive place on Earth.",
      choices: [
        {
          text: "Crawl toward the exit despite your injuries",
          next: "crawl_to_safety",
          stats: { survival: 20, duty: -5 }
        },
        {
          text: "Call out for help and wait for rescue",
          next: "wait_rescue",
          stats: { survival: 10, duty: 5 }
        },
        {
          text: "Try to shut down nearby systems to prevent further damage",
          next: "shutdown_systems",
          stats: { duty: 25, survival: -20 }
        }
      ]
    },

    sound_alarm: {
      title: "The Warning",
      date: "April 26, 1986, 1:23 AM - Emergency Station",
      text: "You slam your hand on the facility-wide alarm. Klaxons blare throughout the complex. Workers start evacuating, confused but moving.\n\nThen the explosion hits. Even from the emergency station, the shockwave knocks you down. The lights flicker and die. Emergency lighting casts everything in red.\n\nYour early warning has given people precious seconds. You see workers streaming out of the building. But you also see Dyatlov and others still trapped near the control room.\n\nYour dosimeter shows dangerous levels, even here.",
      choices: [
        {
          text: "Continue evacuating workers—save as many as you can",
          next: "mass_evacuation",
          stats: { duty: 15, survival: 10 }
        },
        {
          text: "Go back for the people trapped near the explosion",
          next: "rescue_trapped",
          stats: { duty: 25, survival: -15 }
        },
        {
          text: "Get outside and assess the full scope of the disaster",
          next: "assess_outside",
          stats: { truth: 15, survival: 10 }
        }
      ]
    },

    evacuate_control: {
      title: "Chaos and Command",
      date: "April 26, 1986, 1:30 AM - Chernobyl Plant",
      text: "You help drag injured operators from the control room. Several are badly burned, others bleeding from flying debris. Your dosimeter is clicking like a Geiger counter in a nightmare.\n\nOutside, firefighters are arriving. You grab the fire chief. 'The reactor core is exposed! Your men need radiation protection!'\n\nHe looks at you, confused. 'We're here for a building fire. We weren't told about radiation.'\n\nYou watch in horror as firefighters in regular gear run toward the burning reactor building. They're running to their deaths and don't even know it.",
      choices: [
        {
          text: "Force the firefighters back and explain the radiation danger",
          next: "warn_firefighters",
          stats: { truth: 20, duty: 10 }
        },
        {
          text: "Help coordinate the evacuation of plant workers",
          next: "coordinate_evacuation",
          stats: { duty: 20, survival: 5 }
        },
        {
          text: "Find a vehicle and drive to Pripyat to warn the city",
          next: "warn_pripyat",
          stats: { truth: 15, duty: 10, survival: -5 }
        }
      ]
    },

    assess_damage: {
      title: "The Impossible Truth",
      date: "April 26, 1986, 1:35 AM - Outside Reactor 4",
      text: "You step outside and immediately wish you hadn't. The roof of Reactor 4 is completely gone. A pillar of ionized air glows blue-white, shooting radioactive particles into the atmosphere.\n\nYour dosimeter reads 3.6 roentgen. Then it stops working—you've exceeded its maximum range. The actual reading could be a hundred times higher.\n\nGraphite from the reactor core is scattered everywhere, each piece lethally radioactive. You see chunks glowing red-hot on the ground. Workers are picking them up with their bare hands, not understanding what they're touching.\n\nYou need to document this for Moscow, but staying here means absorbing a lethal dose.",
      choices: [
        {
          text: "Take photographs and measurements for an accurate report",
          next: "document_disaster",
          stats: { truth: 25, duty: 15, survival: -15 }
        },
        {
          text: "Stop workers from handling radioactive debris",
          next: "stop_workers",
          stats: { duty: 15, survival: 5 }
        },
        {
          text: "Drive to the nearest phone that works and call Moscow now",
          next: "emergency_call",
          stats: { truth: 20, survival: 10 }
        }
      ]
    },

    search_survivors: {
      title: "Into Hell",
      date: "April 26, 1986, 1:40 AM - Reactor Hall",
      text: "You enter what remains of the reactor building. The heat is overwhelming. Your shoes stick to melted asphalt. The air itself seems to glow.\n\nYou find Viktor. He's pinned under debris, badly burned but conscious. 'Aleksei... I can't feel my legs. Leave me.'\n\n'Never,' you say, pulling at the concrete.\n\nThen you see Operator Akimov and Toptunov deeper in the hall, trying to manually lower the control rods. They're already ghost men—they've absorbed fatal doses, but they keep working.\n\nYour dosimeter is dead. You're receiving a lethal dose with every second you stay here.",
      choices: [
        {
          text: "Save Viktor and get him out immediately",
          next: "save_viktor",
          stats: { duty: 20, survival: -10 }
        },
        {
          text: "Help Akimov and Toptunov with the control rods first",
          next: "help_operators",
          stats: { duty: 30, survival: -25 }
        },
        {
          text: "Leave now before the dose becomes certainly fatal",
          next: "abandon_search",
          stats: { survival: 15, duty: -20 }
        }
      ]
    },

    help_evacuate: {
      title: "The Exodus Begins",
      date: "April 26, 1986, 2:00 AM - Plant Grounds",
      text: "You coordinate the evacuation of workers. Buses arrive to take people to Pripyat hospital. Many are already showing signs of radiation sickness—nausea, vomiting, strange sunburn-like marks.\n\nA plant manager approaches you. 'Volkov, we need to minimize panic. Tell everyone it's under control. Just a small fire.'\n\nBut you know the truth. This isn't under control. The exposed reactor is pumping radiation into the air with every second. Pripyat is three kilometers away, and the wind is blowing toward the city. 50,000 people are sleeping, unaware.",
      choices: [
        {
          text: "Obey orders and downplay the disaster",
          next: "follow_orders",
          stats: { duty: 10, truth: -20, survival: 5 }
        },
        {
          text: "Tell workers the truth about the radiation danger",
          next: "tell_truth",
          stats: { truth: 25, duty: -5 }
        },
        {
          text: "Steal a vehicle and evacuate your own family from Pripyat",
          next: "save_family",
          stats: { survival: 20, duty: -15, truth: 5 }
        }
      ]
    },

    alert_moscow: {
      title: "The First Call",
      date: "April 26, 1986, 1:45 AM - Administration Building",
      text: "You find a working phone and dial Moscow. After several attempts, you reach the Ministry of Energy.\n\n'This is Engineer Volkov at Chernobyl. We've had a catastrophic failure. The reactor core is exposed. I repeat—the core is exposed.'\n\nSilence. Then: 'That's impossible. RBMK reactors cannot explode.'\n\n'I'm looking at it right now!' you shout. 'The building is destroyed. We need immediate evacuation of Pripyat and—'\n\nThe line goes dead. You don't know if they heard you or if they believe you. But you've done your duty to report the truth.",
      choices: [
        {
          text: "Keep trying to reach higher authorities",
          next: "persistent_calling",
          stats: { truth: 20, duty: 15 }
        },
        {
          text: "Drive to Kiev yourself to report in person",
          next: "drive_to_kiev",
          stats: { truth: 15, survival: 10 }
        },
        {
          text: "Focus on helping at the plant—you've done what you can",
          next: "return_to_plant",
          stats: { duty: 15, survival: 5 }
        }
      ]
    },

    flee_facility: {
      title: "The Coward's Escape",
      date: "April 26, 1986, 2:00 AM - Road to Kiev",
      text: "You run to your car and drive away from the plant as fast as you can. In your rearview mirror, you see the eerie glow above Reactor 4.\n\nYou make it to Kiev by dawn. You're safe, but the radio reports nothing about Chernobyl. The government is silent. You know thousands are being exposed to deadly radiation while you ran.\n\nYour dosimeter shows you absorbed a significant dose, but probably survivable. Unlike those you left behind.",
      choices: [
        {
          text: "Report what you saw to Kiev authorities",
          next: "report_to_kiev",
          stats: { truth: 20, duty: -5 }
        },
        {
          text: "Keep quiet to avoid being blamed or arrested",
          next: "stay_silent",
          stats: { survival: 15, truth: -20 }
        },
        {
          text: "Try to contact Western journalists",
          next: "contact_west",
          stats: { truth: 30, duty: -10 }
        }
      ]
    },

    crawl_to_safety: {
      title: "The Longest Journey",
      date: "April 26, 1986, 1:45 AM - Reactor Building",
      text: "You drag yourself across the floor, your broken leg screaming with each movement. The radiation burns your skin like invisible fire. You can taste metal—a sign of acute radiation exposure.\n\nIt takes twenty minutes to crawl fifty meters. When you finally collapse outside, rescuers find you. Your hair is already falling out.\n\nAt the hospital, doctors are overwhelmed. 'You've absorbed at least 400 rem,' the doctor says quietly. 'Possibly much more. We'll do everything we can.'\n\nYou survived, but at what cost?",
      choices: [
        {
          text: "Focus on recovery and tell doctors everything you know",
          next: "medical_witness",
          stats: { truth: 15, survival: 10 }
        },
        {
          text: "Demand to speak with authorities about the disaster",
          next: "hospital_testimony",
          stats: { truth: 20, duty: 10 }
        }
      ]
    },

    wait_rescue: {
      title: "The Wait",
      date: "April 26, 1986, 2:15 AM - Reactor Building",
      text: "You call out weakly. Minutes pass like hours. The radiation continues to cook your body from the inside.\n\nWhen rescuers finally find you, you're barely conscious. They carry you out, but the damage is done. You've absorbed over 1000 rem—a certainly fatal dose.\n\nIn the hospital, you're conscious long enough to tell them what happened. Then the radiation sickness takes hold. Your last contribution is your testimony.",
      isEnding: true,
      outcome: "You died twelve days later in Moscow's Hospital Number 6, one of the first victims of Chernobyl. Your testimony helped investigators understand what went wrong, but you paid the ultimate price for trying to help. Your sacrifice, like that of many others that night, was largely unrecognized for years. The Soviet system preferred heroes who didn't raise uncomfortable questions. But your family received your medals posthumously, and your story—eventually told—helped prevent future disasters. You died doing your duty, even when the system failed you."
    },

    shutdown_systems: {
      title: "Final Service",
      date: "April 26, 1986, 1:50 AM - Reactor Building",
      text: "Despite your broken leg and the impossible radiation, you drag yourself to the emergency cooling controls. If you can activate them, you might prevent the other three reactors from failing.\n\nYour hands shake as you work the controls. Blood drips from your nose—radiation sickness is already setting in. But the pumps activate. You've done it.\n\nYou never make it out. Rescuers find your body the next day, still at the controls. You absorbed over 2000 rem. But Reactors 1, 2, and 3 remain stable.",
      isEnding: true,
      outcome: "You died within hours, but your final act prevented a disaster that could have been ten times worse. If the other reactors had failed, half of Europe might have become uninhabitable. The Soviet government never acknowledged your heroism—your death was listed as an 'industrial accident.' But decades later, when the full truth emerged, you were recognized as one of the unsung heroes of Chernobyl. Your family erected a private memorial: 'He stayed when others ran, worked when dying, and saved thousands he would never meet.' The highest honor is that your story is now taught to every nuclear engineer—a reminder that duty sometimes demands everything."
    },

    mass_evacuation: {
      title: "The Shepherd",
      date: "April 26, 1986, 2:30 AM - Plant Grounds",
      text: "You organize the evacuation with military precision. Workers stream out in orderly lines. You're the last to leave, making sure no one is left behind in the immediate area.\n\nBy dawn, most workers are safe, though many have absorbed dangerous doses. Your own dosimeter shows 75 rem—enough to cause radiation sickness, but survivable with treatment.\n\nThe authorities arrive and put you in charge of initial response coordination. They value your firsthand knowledge, even if they don't want to hear the full truth of how bad it is.",
      choices: [
        {
          text: "Coordinate the response while concealing the worst details",
          next: "complicit_coordinator",
          stats: { duty: 15, truth: -15, survival: 10 }
        },
        {
          text: "Demand immediate evacuation of Pripyat",
          next: "demand_evacuation",
          stats: { truth: 20, duty: 15 }
        },
        {
          text: "Focus on preventing further reactor damage",
          next: "prevent_damage",
          stats: { duty: 25, survival: -5 }
        }
      ]
    },

    rescue_trapped: {
      title: "Back Into Hell",
      date: "April 26, 1986, 2:00 AM - Near Control Room",
      text: "You run back into the damaged building. The radiation is intense—your dosimeter maxes out immediately. You find three operators trapped by debris.\n\nIt takes thirty minutes to free them. Every second costs you years of life. Your skin is already reddening, your body absorbing a lethal dose.\n\nBut you get them out. All three survive because you went back.",
      choices: [
        {
          text: "Seek immediate medical treatment",
          next: "seek_treatment",
          stats: { survival: 15, duty: 10 }
        },
        {
          text: "Stay and continue helping despite your exposure",
          next: "continue_helping",
          stats: { duty: 25, survival: -20 }
        }
      ]
    },

    assess_outside: {
      title: "The Terrible Beauty",
      date: "April 26, 1986, 2:15 AM - Outside Reactor 4",
      text: "From outside, you witness something no one should see: an exposed nuclear reactor core, glowing with Cherenkov radiation, pumping death into the atmosphere.\n\nThe explosion has scattered reactor fuel across the facility. Each piece is lethally radioactive. You see the full scope of the disaster—this isn't just a plant accident. This is a catastrophe that could affect millions.\n\nYou take mental notes of everything, knowing this information is critical. But you're also absorbing radiation with every moment you stay.",
      choices: [
        {
          text: "Document everything and report to authorities",
          next: "full_documentation",
          stats: { truth: 25, duty: 15, survival: -10 }
        },
        {
          text: "Focus on immediate rescue efforts",
          next: "immediate_rescue",
          stats: { duty: 20, survival: 5 }
        },
        {
          text: "Drive to Pripyat to warn the residents personally",
          next: "personal_warning",
          stats: { truth: 20, duty: 10, survival: -5 }
        }
      ]
    },

    warn_firefighters: {
      title: "The Dangerous Truth",
      date: "April 26, 1986, 2:00 AM - Plant Grounds",
      text: "You grab the fire chief physically. 'Listen to me! That's not a normal fire. The reactor core is exposed. Your men need full radiation protection!'\n\nHe stares at you. 'We don't have radiation gear. We're firefighters.'\n\n'Then you need to pull back and wait for proper equipment!'\n\nBut firefighters are already on the roof, spraying water on burning graphite. They're heroic and doomed. Some turn back on your warning. Others ignore you and keep fighting the fire.\n\nYou've saved some lives, but not all.",
      choices: [
        {
          text: "Help evacuate firefighters who are willing to leave",
          next: "evacuate_firefighters",
          stats: { duty: 15, survival: 10 }
        },
        {
          text: "Stay and provide guidance to those who won't leave",
          next: "guide_firefighters",
          stats: { duty: 25, survival: -15 }
        },
        {
          text: "Focus on evacuating plant workers instead",
          next: "focus_workers",
          stats: { duty: 15, survival: 5 }
        }
      ]
    },

    coordinate_evacuation: {
      title: "Order from Chaos",
      date: "April 26, 1986, 3:00 AM - Plant Administration",
      text: "You take charge of evacuation coordination. Workers are sent to hospitals. Buses arrive. You organize it all with calm efficiency.\n\nBut officials keep telling you to downplay the danger. 'Don't cause panic,' they say. 'It's under control.'\n\nYou know it's not under control. You know Pripyat should be evacuated immediately. But if you insist too loudly, they'll remove you from coordination duty.",
      choices: [
        {
          text: "Work within the system while pushing for more action",
          next: "work_within_system",
          stats: { duty: 15, truth: 5, survival: 10 }
        },
        {
          text: "Publicly demand immediate city evacuation",
          next: "public_demand",
          stats: { truth: 25, duty: 10, survival: -5 }
        },
        {
          text: "Quietly evacuate your own family while coordinating official response",
          next: "secret_family_evacuation",
          stats: { survival: 15, duty: -10, truth: -5 }
        }
      ]
    },

    warn_pripyat: {
      title: "Racing Against Radiation",
      date: "April 26, 1986, 2:30 AM - Road to Pripyat",
      text: "You drive toward Pripyat, the city of 50,000 sleeping just three kilometers from the burning reactor. The night is eerily beautiful—you can see the glow of ionized air reflecting off clouds.\n\nIn Pripyat, people are sleeping. Some early risers are starting their day. No one knows they're being irradiated. The radiation plume is drifting directly over the city.\n\nYou need to warn them, but how? And will anyone believe you?",
      choices: [
        {
          text: "Go door-to-door in apartment buildings warning residents",
          next: "door_to_door",
          stats: { truth: 20, duty: 15, survival: -10 }
        },
        {
          text: "Try to reach the city's emergency broadcast system",
          next: "emergency_broadcast",
          stats: { truth: 25, duty: 15 }
        },
        {
          text: "Alert the city hospital and officials first",
          next: "alert_officials",
          stats: { truth: 15, duty: 10, survival: 5 }
        }
      ]
    },

    document_disaster: {
      title: "The Record Keeper",
      date: "April 26, 1986, 3:00 AM - Disaster Site",
      text: "You photograph everything with a camera from the administration building. The destroyed reactor. The scattered graphite. The exposed core. Each photo absorbs you with massive doses of radiation, but you need this evidence.\n\nYou take measurements where your instruments still work. You document exactly what happened and when. This data could save lives and prevent future accidents—if it's believed.\n\nBy the time you finish, you've absorbed over 300 rem. Fatal doses of radiation, but your documentation is complete.",
      choices: [
        {
          text: "Deliver the evidence directly to Moscow authorities",
          next: "deliver_to_moscow",
          stats: { truth: 30, duty: 15, survival: -15 }
        },
        {
          text: "Hide copies in case the government suppresses your report",
          next: "hide_evidence",
          stats: { truth: 25, survival: 5 }
        }
      ]
    },

    stop_workers: {
      title: "Saving the Ignorant",
      date: "April 26, 1986, 2:45 AM - Plant Grounds",
      text: "You run to workers picking up graphite blocks with their bare hands. 'Stop! That's reactor fuel! Each piece is lethal!'\n\nSome listen. Others think you're hysterical. One worker dismisses you: 'It's just graphite. It's barely warm.'\n\n'It's killing you!' you shout. 'Right now, as you hold it!'\n\nYou manage to prevent some exposures, but not all. And each moment you spend in this contaminated area adds to your own dose.",
      choices: [
        {
          text: "Continue warning workers despite the danger",
          next: "persistent_warning",
          stats: { duty: 20, survival: -10 }
        },
        {
          text: "Get official support to cordon off the contaminated areas",
          next: "cordon_area",
          stats: { duty: 15, survival: 5 }
        }
      ]
    },

    emergency_call: {
      title: "The Truth Teller",
      date: "April 26, 1986, 2:00 AM - Outside the Plant",
      text: "You drive to the nearest working phone and call every authority you can reach. Most don't believe you. Some hang up. But a few listen.\n\nFinally, you reach someone at the Central Committee. 'The core is exposed,' you repeat. 'We need immediate evacuation of Pripyat and surrounding areas. The radiation plume—'\n\n'Comrade, calm yourself,' the voice says. 'We'll send investigators. But we cannot cause panic with unverified reports.'\n\nUnverified. You're looking at the glowing ruins of a nuclear reactor, and they want verification.",
      choices: [
        {
          text: "Keep calling until someone takes action",
          next: "persistent_calls",
          stats: { truth: 25, duty: 15 }
        },
        {
          text: "Return to the plant to help directly",
          next: "return_to_help",
          stats: { duty: 20, survival: -5 }
        },
        {
          text: "Try to reach international authorities",
          next: "international_call",
          stats: { truth: 30, duty: -10 }
        }
      ]
    },

    save_viktor: {
      title: "Brother's Keeper",
      date: "April 26, 1986, 2:00 AM - Reactor Building",
      text: "You pull at the debris pinning Viktor. Your strength is fading from radiation sickness already setting in, but you won't leave him.\n\nAfter twenty agonizing minutes, you free him. You drag him outside, both of you leaving a trail of blood. Medics rush him to an ambulance.\n\n'You saved me,' he gasps. 'But Aleksei... your face...'\n\nYou touch your face and your hand comes away bloody. Radiation burns. You've absorbed a fatal dose.",
      choices: [
        {
          text: "Accept your fate and help others while you still can",
          next: "acceptance_path",
          stats: { duty: 25, survival: -20 }
        },
        {
          text: "Seek immediate medical evacuation",
          next: "emergency_medical",
          stats: { survival: 15, duty: 5 }
        }
      ]
    },

    help_operators: {
      title: "The Ghost Men",
      date: "April 26, 1986, 2:10 AM - Reactor Hall",
      text: "You help Akimov and Toptunov manually lower the control rods. All three of you know you're dead men—you've absorbed doses that guarantee death within weeks.\n\nBut if you can stabilize what's left, maybe you can prevent it from getting worse. Your hands bleed as you work the manual controls. The heat is unbearable.\n\n'It's not responding,' Akimov says, his voice defeated. 'There's nothing left to control. The core is gone.'\n\nYou've given your life trying to fix the unfixable. But you tried.",
      isEnding: true,
      outcome: "You died three weeks later in Moscow Hospital Number 6, alongside Akimov and Toptunov. The three of you absorbed the highest doses of anyone who lived long enough to reach a hospital—over 1,600 rem each. Your bodies broke down cell by cell while doctors could only watch. But your attempt to manually control the reactor, futile though it was, showed extraordinary courage. Years later, you were posthumously awarded the Order of the Red Banner. Your widows received the medals, and your story became a symbol of duty beyond reason, sacrifice beyond hope. You died trying to save a reactor that was already destroyed, but your courage saved something more important—the idea that some duties transcend even certain death."
    },

    abandon_search: {
      title: "The Survivor's Burden",
      date: "April 26, 1986, 2:15 AM - Outside Reactor Building",
      text: "You stumble out of the reactor building, leaving Viktor and the operators behind. The guilt hits immediately, but so does the understanding that staying would have meant certain death without saving anyone.\n\nYou've absorbed a significant but possibly survivable dose—around 200 rem. At the medical station, they tell you you'll be sick, but you'll probably live.\n\nViktor died in the hospital three weeks later. Akimov and Toptunov lasted even less. You survived, but at what cost to your conscience?",
      choices: [
        {
          text: "Dedicate your survival to helping other victims",
          next: "help_other_victims",
          stats: { duty: 15, truth: 10 }
        },
        {
          text: "Testify about what happened to prevent future disasters",
          next: "testify_future",
          stats: { truth: 25, duty: 10 }
        },
        {
          text: "Leave the nuclear industry entirely",
          next: "leave_industry",
          stats: { survival: 15, duty: -10 }
        }
      ]
    },

    follow_orders: {
      title: "The Obedient Servant",
      date: "April 26, 1986, 4:00 AM - Plant Administration",
      text: "You tell workers what you're ordered to say. 'It's under control. Minor fire. No danger.' Some believe you. Others see the fear in your eyes and know you're lying.\n\nPripyat remains unaware. The radiation plume continues drifting over the sleeping city. Children will play outside today in contaminated air. Pregnant women will breathe radioactive iodine.\n\nYou followed orders, but people will die because of your compliance.",
      choices: [
        {
          text: "Break ranks and tell the truth before it's too late",
          next: "late_truth",
          stats: { truth: 20, duty: -10 }
        },
        {
          text: "Continue following orders and hope for the best",
          next: "continued_compliance",
          stats: { duty: 5, truth: -25, survival: 10 }
        }
      ]
    },

    tell_truth: {
      title: "The Whistleblower",
      date: "April 26, 1986, 4:00 AM - Plant Grounds",
      text: "You gather workers and tell them the unfiltered truth. 'The reactor core is exposed. Radiation levels are off the scale. If you have family in Pripyat, get them out now.'\n\nSome workers immediately leave to evacuate their families. Officials arrive, furious. 'Volkov! You're spreading panic! You're fired! Arrested!'\n\nBut the truth is out. Word spreads through unofficial channels. Some families evacuate on their own, hours before the official evacuation.",
      choices: [
        {
          text: "Accept arrest but know you did the right thing",
          next: "arrested_hero",
          stats: { truth: 30, duty: 15 }
        },
        {
          text: "Flee before they can arrest you",
          next: "flee_arrest",
          stats: { truth: 25, survival: 15, duty: -10 }
        }
      ]
    },

    save_family: {
      title: "Blood Before Duty",
      date: "April 26, 1986, 3:00 AM - Pripyat",
      text: "You drive to Pripyat and wake your family. Your wife, Marina, and your children, Olga (8) and Dmitri (5), are confused and frightened.\n\n'There's been an accident,' you say. 'We need to leave. Now.'\n\nYou load them in the car with whatever you can grab. As you drive away, you see Pripyat still sleeping peacefully. 50,000 people who don't know what's coming.\n\nYour family is safe. But you've abandoned your duty to save strangers.",
      choices: [
        {
          text: "Return to help after getting your family to safety",
          next: "return_after_family",
          stats: { duty: 15, survival: 10 }
        },
        {
          text: "Stay with your family and leave Ukraine entirely",
          next: "family_exodus",
          stats: { survival: 25, duty: -20 }
        },
        {
          text: "Try to warn other families on your way out",
          next: "warn_others",
          stats: { truth: 15, duty: 10, survival: 5 }
        }
      ]
    },

    persistent_calling: {
      title: "The Voice in the Dark",
      date: "April 26, 1986, 2:00 AM - 6:00 AM - Administration Building",
      text: "You call Moscow repeatedly. Most hang up. Some listen but don't act. Hours pass. The radiation continues to pour into the atmosphere.\n\nFinally, at 6:00 AM, you reach Gorbachev's office. You're connected to a deputy. 'Engineer Volkov, we've received your reports. A commission is being assembled. But we must verify—'\n\n'There's no time for verification!' you shout. 'Every hour, thousands more are exposed!'\n\nBy the time you finish your calls, you've absorbed 100 rem from being near the disaster site. But your persistence has finally gotten through.",
      choices: [
        {
          text: "Continue to assist the incoming commission",
          next: "assist_commission",
          stats: { truth: 20, duty: 20 }
        },
        {
          text: "Demand to speak to international media",
          next: "contact_media",
          stats: { truth: 30, duty: -5 }
        }
      ]
    },

    drive_to_kiev: {
      title: "The Messenger",
      date: "April 26, 1986, 6:00 AM - Kiev",
      text: "You arrive in Kiev and go directly to the regional government offices. Officials are skeptical. 'The plant says it's under control,' they tell you.\n\n'The plant is lying!' you insist. 'I was there. I saw the exposed core. Pripyat needs to be evacuated immediately.'\n\nYour persistence and firsthand testimony finally gets their attention. Calls are made. Wheels begin turning. But it's been five hours since the explosion.",
      choices: [
        {
          text: "Stay in Kiev to ensure proper response",
          next: "stay_in_kiev",
          stats: { truth: 20, duty: 15, survival: 10 }
        },
        {
          text: "Return to Chernobyl to help with response efforts",
          next: "return_to_chernobyl",
          stats: { duty: 25, survival: -10 }
        }
      ]
    },

    return_to_plant: {
      title: "Back to Ground Zero",
      date: "April 26, 1986, 3:00 AM - Chernobyl Plant",
      text: "You return to help coordinate response efforts. By now, the military has arrived. General Pikalov takes charge. He respects your technical knowledge.\n\n'We need to prevent the other reactors from failing,' he says. 'And we need to cool what's left of Reactor 4.'\n\nYou work for the next 18 hours straight, coordinating engineers and soldiers. Your dosimeter maxes out multiple times. By the end, you've absorbed over 250 rem.",
      choices: [
        {
          text: "Continue working despite radiation sickness",
          next: "work_through_sickness",
          stats: { duty: 30, survival: -20 }
        },
        {
          text: "Accept medical evacuation when symptoms appear",
          next: "accept_evacuation",
          stats: { duty: 20, survival: 10 }
        }
      ]
    },

    report_to_kiev: {
      title: "The Whistleblower's Dilemma",
      date: "April 26, 1986, 8:00 AM - Kiev",
      text: "You report to Kiev authorities, but they're more interested in damage control than disaster response. 'We need to manage information carefully,' an official says. 'Panic is as dangerous as radiation.'\n\n'But people need to know the danger!' you protest.\n\n'People need to remain calm,' he counters. 'You'll say nothing publicly, or face consequences.'\n\nYou're caught between truth and authority.",
      choices: [
        {
          text: "Comply and work within the system",
          next: "system_compliance",
          stats: { duty: 10, truth: -15, survival: 15 }
        },
        {
          text: "Defy them and speak to journalists anyway",
          next: "defy_authority",
          stats: { truth: 30, duty: -10, survival: -5 }
        }
      ]
    },

    stay_silent: {
      title: "The Coward's Peace",
      date: "April 26, 1986 - May 1986 - Kiev",
      text: "You stay silent, finding work in Kiev under a new name. You watch as the disaster unfolds on state television—sanitized, minimized, lied about.\n\nPripyat is evacuated 36 hours after the explosion. Too late for many. The radiation plume spreads across Europe. The government remains silent for days.\n\nYou live with the knowledge that you could have warned people but chose safety instead.",
      isEnding: true,
      outcome: "You lived a long life in Kiev, dying at 68 of natural causes. You never spoke publicly about Chernobyl. Your family never knew you were there. You avoided prosecution, avoided radiation sickness, avoided any consequences—except the one that mattered most. You died knowing you chose survival over honor, silence over truth. In your final days, you wrote a confession that your children found after your death. 'I was there,' it read. 'I knew. I said nothing. Forgive me.' They published it anonymously. Your story became a symbol of the moral cost of silence, the price of cowardice. You saved yourself but lost yourself in the process."
    },

    contact_west: {
      title: "Breaking the Iron Curtain",
      date: "April 27, 1986 - Kiev",
      text: "You risk everything by contacting a Western journalist through unofficial channels. You tell them everything—the explosion, the exposed core, the cover-up, Pripyat still inhabited a day after the disaster.\n\nThe story breaks internationally before the Soviet government has issued any statement. The world learns of Chernobyl from you.\n\nKGB agents arrive at your door within hours.",
      choices: [
        {
          text: "Flee to a Western embassy",
          next: "seek_asylum",
          stats: { truth: 30, survival: 20, duty: -15 }
        },
        {
          text: "Accept arrest but demand the world knows the truth",
          next: "arrested_martyr",
          stats: { truth: 35, duty: 10, survival: -10 }
        }
      ]
    },

    medical_witness: {
      title: "Hospital Number 6",
      date: "April 26 - May 15, 1986 - Moscow",
      text: "In Moscow's Hospital Number 6, you're treated for acute radiation syndrome. The same hospital where Akimov, Toptunov, and the firefighters are dying.\n\nDoctors document everything you experienced. Your testimony helps them understand the disaster. You survive your dose—400 rem is near the lethal threshold, but with treatment, you pull through.\n\nYou watch other patients die around you. Some were heroes who stayed to fight fires or prevent further damage. Others were victims of circumstance. All are casualties of Chernobyl.",
      choices: [
        {
          text: "Use your survival to advocate for other victims",
          next: "victim_advocate",
          stats: { truth: 20, duty: 20 }
        },
        {
          text: "Testify about safety failures to prevent future disasters",
          next: "safety_testimony",
          stats: { truth: 25, duty: 15 }
        }
      ]
    },

    hospital_testimony: {
      title: "The Dying Witness",
      date: "April 27 - May 10, 1986 - Pripyat Hospital",
      text: "Despite your injuries and radiation sickness, you demand to speak with investigators. You tell them everything—the safety test that went wrong, Dyatlov's refusal to abort, the design flaws in the RBMK reactor.\n\nYour testimony is recorded. It will become crucial in understanding what happened and why.\n\nBut the radiation is taking its toll. Your condition worsens daily. The doctors tell your family to prepare for the worst.",
      choices: [
        {
          text: "Focus on recovery and hope to survive",
          next: "fight_for_life",
          stats: { survival: 15, duty: 10 }
        },
        {
          text: "Use your remaining time to document everything",
          next: "final_documentation",
          stats: { truth: 30, duty: 20 }
        }
      ]
    },

    evacuate_firefighters: {
      title: "Saving the Saviors",
      date: "April 26, 1986, 3:00 AM - Plant Grounds",
      text: "You manage to pull back about twenty firefighters, convincing them of the radiation danger. They're reluctant—it goes against their training to retreat from a fire.\n\nBut those who listen to you survive. Those who stayed on the roof are dead within weeks. Years later, firefighters who evacuated thank you personally. You saved twenty lives that night.",
      choices: [
        {
          text: "Continue helping with evacuation efforts",
          next: "continued_evacuation",
          stats: { duty: 20, survival: 5 }
        },
        {
          text: "Document the firefighters' exposure for medical records",
          next: "document_exposure",
          stats: { truth: 20, duty: 15 }
        }
      ]
    },

    guide_firefighters: {
      title: "The Doomed Guide",
      date: "April 26, 1986, 2:30 AM - 4:00 AM - Reactor Building",
      text: "You stay with the firefighters who won't leave, advising them how to fight a nuclear fire. 'Don't touch the graphite. Minimize time near the core. Rotate out frequently.'\n\nYour guidance helps, but the radiation is too intense. By dawn, you and the firefighters are all experiencing acute radiation sickness—nausea, vomiting, weakness.\n\nYou're all transported to Moscow Hospital Number 6. You've absorbed over 600 rem. The doctors are honest: 'It's fatal, but it might take weeks.'",
      isEnding: true,
      outcome: "You died on May 18, 1986, after 22 days of deterioration. But your guidance that night minimized firefighter casualties. Without your advice, twice as many would have died. You were posthumously awarded the Order of Lenin, though the award was never publicly announced—the government didn't want attention drawn to the disaster. Your widow kept the medal in a drawer for years, bitter about the secrecy. But in 2006, on the 20th anniversary, Ukraine publicly honored you as a Hero of Chernobyl. Your name is now engraved in the monument at the Chernobyl cemetery. You died in agony, but your courage and knowledge saved lives in humanity's darkest hour."
    },

    focus_workers: {
      title: "The Plant's Guardian",
      date: "April 26, 1986, 3:00 AM - 8:00 AM - Plant Grounds",
      text: "You focus on evacuating plant workers—the people you know, the people whose families you know. You organize buses, coordinate with hospitals, document exposures.\n\nBy morning, most workers are safely evacuated and receiving treatment. Your methodical approach saves lives and creates records that will help victims get compensation later.\n\nYou've absorbed about 150 rem—enough for radiation sickness, but survivable.",
      choices: [
        {
          text: "Continue coordinating response efforts",
          next: "coordinate_response",
          stats: { duty: 25, survival: 5 }
        },
        {
          text: "Seek treatment and recover to help long-term",
          next: "strategic_treatment",
          stats: { survival: 15, duty: 10 }
        }
      ]
    },

    work_within_system: {
      title: "The Pragmatist",
      date: "April 26-27, 1986 - Chernobyl Area",
      text: "You work within the Soviet system, pushing for action without being labeled a panic-monger. You carefully word reports, emphasize 'safety precautions' rather than 'evacuation,' use technical language to communicate urgency.\n\nYour approach works slowly. By 36 hours post-explosion, Pripyat is finally evacuated. It's later than ideal, but your steady pressure helped make it happen without getting you removed.\n\nYou've navigated the system successfully, though many received unnecessary radiation exposure due to the delays.",
      choices: [
        {
          text: "Continue as a liaison between authorities and responders",
          next: "system_liaison",
          stats: { duty: 20, survival: 10 }
        },
        {
          text: "Push for faster action on long-term evacuations",
          next: "push_evacuations",
          stats: { truth: 15, duty: 20 }
        }
      ]
    },

    public_demand: {
      title: "The Public Confrontation",
      date: "April 26, 1986, 8:00 AM - Government Meeting",
      text: "In a meeting with local officials, you stand up and loudly demand immediate evacuation of Pripyat. 'Every hour we wait, children are breathing radioactive iodine! Pregnant women are being exposed! This is criminal negligence!'\n\nThe room goes silent. Officials are shocked by your insubordination.\n\nYou're immediately removed from the meeting and placed under guard. But your outburst gets through to someone—evacuation planning accelerates.",
      choices: [
        {
          text: "Accept detention but know you made a difference",
          next: "detained_hero",
          stats: { truth: 30, duty: 15 }
        },
        {
          text: "Escape and continue warning people",
          next: "escape_detention",
          stats: { truth: 25, survival: 10, duty: 10 }
        }
      ]
    },

    secret_family_evacuation: {
      title: "The Hypocrite",
      date: "April 26-27, 1986 - Pripyat/Response Area",
      text: "You quietly arrange for your family to leave Pripyat early while publicly helping coordinate the 'calm, orderly' response. Your wife and children are safe in Kiev while you tell other families there's no immediate danger.\n\nYour family is saved, but you're complicit in the delayed evacuation that exposed thousands. You've protected your own while betraying your neighbors.",
      choices: [
        {
          text: "Try to make amends by pushing for faster evacuation",
          next: "guilty_redemption",
          stats: { truth: 15, duty: 15 }
        },
        {
          text: "Continue the deception to protect yourself",
          next: "continued_deception",
          stats: { survival: 15, truth: -20, duty: -15 }
        }
      ]
    },

    door_to_door: {
      title: "The Midnight Warning",
      date: "April 26, 1986, 3:00 AM - 6:00 AM - Pripyat",
      text: "You go door-to-door in apartment buildings, waking families. 'There's been a nuclear accident. You need to leave. Now. Don't pack. Just go.'\n\nSome believe you. Others think you're crazy or drunk. But hundreds of families evacuate hours before the official order. You save those lives.\n\nBy dawn, you've absorbed significant radiation from being in Pripyat's contaminated air, but you've warned as many as you could reach.",
      isEnding: true,
      outcome: "You developed radiation sickness but survived. Hundreds of families who heeded your warning avoided the worst exposure. For years, you were vilified by authorities as a panic-monger. You lost your engineering license and worked menial jobs. But in 2001, fifteen years later, a group of Pripyat survivors found you. They brought their healthy children and grandchildren—healthy because their families evacuated early thanks to you. They honored you as their savior. You cried for an hour. You lived to 71, never wealthy, never officially recognized, but knowing you saved hundreds of lives. At your funeral, over 200 people came—families you'd warned that night. Your headstone reads: 'He woke them from sleep and saved them from death.' No official medal could mean more."
    },

    emergency_broadcast: {
      title: "The Voice on the Radio",
      date: "April 26, 1986, 4:00 AM - Pripyat Radio Station",
      text: "You break into Pripyat's radio station and force your way onto the emergency broadcast system. Your voice echoes through apartments across the city:\n\n'This is an emergency! There has been a catastrophic accident at the nuclear plant. Radiation levels are dangerous. Evacuate immediately. This is not a drill!'\n\nYou repeat the message for ten minutes before authorities cut the power and arrest you. But thousands heard your warning. Many evacuated immediately.\n\nYou're charged with inciting panic and undermining state authority.",
      choices: [
        {
          text: "Accept prosecution knowing you saved lives",
          next: "prosecution_hero",
          stats: { truth: 35, duty: 15 }
        },
        {
          text: "Defend yourself and demand accountability",
          next: "demand_accountability",
          stats: { truth: 30, duty: 20 }
        }
      ]
    },

    alert_officials: {
      title: "Working Through Channels",
      date: "April 26, 1986, 3:30 AM - Pripyat City Hall",
      text: "You alert city officials and hospital administrators. They're skeptical but your position as a plant engineer gives you credibility.\n\nThe city begins preparing for evacuation—slowly, bureaucratically, but preparing. The hospital starts receiving exposed workers and prepares for more casualties.\n\nYour approach is slower than a direct warning to residents, but it gets official machinery moving. Pripyat is evacuated in 36 hours instead of days.",
      choices: [
        {
          text: "Stay in Pripyat to assist with evacuation",
          next: "assist_pripyat_evacuation",
          stats: { duty: 25, survival: -5 }
        },
        {
          text: "Return to the plant to help with containment",
          next: "return_containment",
          stats: { duty: 25, survival: -10 }
        }
      ]
    },

    deliver_to_moscow: {
      title: "The Evidence Bearer",
      date: "April 27-28, 1986 - Moscow",
      text: "You personally carry your documentation to Moscow, demanding meetings with top officials. Your evidence is undeniable—photos, measurements, timelines.\n\nThe Politburo can't ignore what you show them. Your documentation becomes the basis for understanding the disaster. Gorbachev later says your evidence convinced him of the scale of the catastrophe.\n\nBut the radiation you absorbed documenting the disaster has given you acute radiation sickness. You're hospitalized even as your evidence changes national policy.",
      isEnding: true,
      outcome: "You survived your radiation exposure after months of treatment, but with permanent health damage. Your evidence became crucial in the government's response and in later prosecutions. You testified at the trials of plant officials. Your photographs are now in museums, your measurements in scientific papers. You lived to 59, dying of radiation-related cancer. But your evidence helped save thousands by informing evacuation decisions. Gorbachev personally thanked you in 1989, saying, 'Your courage to document the truth changed how we responded.' You were posthumously declared a Hero of the Soviet Union in 1991, just months before the USSR collapsed. Your legacy is the truth you documented at the cost of your own health."
    },

    hide_evidence: {
      title: "The Insurance Policy",
      date: "April 27, 1986 - Near Chernobyl",
      text: "You make copies of your documentation and hide them in multiple locations before delivering the originals to authorities. You suspect they might suppress the truth, and you're right to be cautious.\n\nWhen you submit your report, officials thank you but the most damning evidence mysteriously disappears from official records. But you have your copies hidden safely.\n\nYears later, during Glasnost, you reveal the hidden evidence. It exposes the full extent of the cover-up.",
      isEnding: true,
      outcome: "You lived to 64, dying of radiation-related illnesses. But your hidden evidence, revealed in 1988, became sensational. It proved the government had suppressed crucial information about radiation levels and health dangers. Your revelation contributed to public anger that helped end the Soviet Union. You became a symbol of truth-telling against state power. International journalists interviewed you extensively. You testified before the European Parliament about nuclear safety. Your life was difficult—authorities harassed you, you lost jobs, but you never regretted protecting the truth. At your funeral, Mikhail Gorbachev sent a letter: 'Aleksei Volkov showed that one person's dedication to truth can change history.' Your evidence still informs radiation science today."
    },

    persistent_warning: {
      title: "The Cassandra",
      date: "April 26, 1986, 3:00 AM - 6:00 AM - Plant Grounds",
      text: "You spend hours warning every worker you encounter about the radiation danger. Many think you're overreacting. Some listen and minimize their exposure.\n\nBy dawn, you've saved dozens from unnecessary radiation exposure. But you've also absorbed over 200 rem staying in the contaminated area to warn people.\n\nYou develop radiation sickness within days. Hospital treatment is lengthy and painful, but you survive.",
      choices: [
        {
          text: "Use your experience to advocate for workers' rights",
          next: "workers_advocate",
          stats: { truth: 20, duty: 20 }
        },
        {
          text: "Document your illness to help other victims",
          next: "illness_documentation",
          stats: { truth: 25, duty: 15 }
        }
      ]
    },

    cordon_area: {
      title: "The Organizer",
      date: "April 26, 1986, 4:00 AM - 8:00 AM - Plant Grounds",
      text: "You convince military units arriving on scene to cordon off the most contaminated areas. You prevent hundreds of unnecessary exposures by organizing proper zones and decontamination procedures.\n\nYour methodical approach saves lives without causing panic. The military appreciates your technical knowledge. You become an unofficial advisor to the response effort.\n\nYou've absorbed about 100 rem—enough to cause health problems, but not immediately life-threatening.",
      choices: [
        {
          text: "Continue as a technical advisor for the cleanup",
          next: "technical_advisor",
          stats: { duty: 25, survival: 10 }
        },
        {
          text: "Focus on documenting proper safety procedures",
          next: "safety_procedures",
          stats: { truth: 20, duty: 20 }
        }
      ]
    },

    persistent_calls: {
      title: "The Tireless Voice",
      date: "April 26, 1986, 2:00 AM - 12:00 PM - Various Locations",
      text: "You make over fifty phone calls to various authorities. Most dismiss you. Some listen. By noon, enough people have heard your testimony that the government can no longer ignore it.\n\nA high-level commission is dispatched. Evacuation planning begins in earnest. Your persistence has broken through the bureaucratic paralysis.\n\nYou've been awake for over 24 hours and absorbed significant radiation, but your efforts are paying off.",
      choices: [
        {
          text: "Brief the incoming commission personally",
          next: "brief_commission",
          stats: { truth: 25, duty: 25 }
        },
        {
          text: "Rest and recover to continue helping long-term",
          next: "rest_and_recover",
          stats: { survival: 15, duty: 15 }
        }
      ]
    },

    return_to_help: {
      title: "Return to Ground Zero",
      date: "April 26, 1986, 6:00 AM - Chernobyl Plant",
      text: "You drive back to the plant to help directly. The situation is chaos—firefighters still fighting fires, engineers trying to prevent the other reactors from failing, soldiers arriving without proper equipment.\n\nYour technical knowledge is desperately needed. You work for 18 straight hours, coordinating efforts, advising on radiation safety, helping prevent further catastrophe.\n\nBy the end, you've absorbed over 300 rem. Fatal dose territory.",
      choices: [
        {
          text: "Continue working despite radiation sickness setting in",
          next: "work_until_collapse",
          stats: { duty: 35, survival: -25 }
        },
        {
          text: "Accept evacuation to hospital for treatment",
          next: "hospital_treatment",
          stats: { duty: 25, survival: 15 }
        }
      ]
    },

    international_call: {
      title: "Breaking the Silence",
      date: "April 26, 1986, 8:00 AM - Kiev",
      text: "You reach an international operator and connect with the International Atomic Energy Agency in Vienna. You tell them everything—reactor exploded, core exposed, Soviet government covering it up.\n\nWithin hours, the international community knows. Radiation detectors in Sweden pick up the plume. The Soviets can no longer hide the disaster.\n\nYou're arrested for revealing state secrets, but the world knows the truth.",
      choices: [
        {
          text: "Face trial as a traitor who saved lives",
          next: "traitor_trial",
          stats: { truth: 40, duty: 10, survival: -10 }
        },
        {
          text: "Attempt to flee to Western embassy",
          next: "embassy_refuge",
          stats: { truth: 35, survival: 20, duty: -15 }
        }
      ]
    },

    acceptance_path: {
      title: "The Final Hours",
      date: "April 26-27, 1986 - Chernobyl Area",
      text: "You accept that you've absorbed a fatal dose. With the time you have left, you help others. You warn workers, coordinate evacuations, share your technical knowledge.\n\nYou work for 30 hours straight before radiation sickness forces you to stop. You've helped save dozens of lives in your final act.\n\nYou're evacuated to Moscow Hospital Number 6, where doctors tell you what you already know: you're dying. But you used your last days to serve others.",
      isEnding: true,
      outcome: "You died on May 14, 1986, after 18 days of deterioration. Your final hours of service saved an estimated 40 lives—people who would have entered contaminated areas without your warnings. You were posthumously awarded the Order of Lenin, and your name is inscribed on the Chernobyl Memorial in Pripyat. Your widow, Marina, raised your children with stories of your heroism. In 2006, your son Dmitri became a nuclear safety engineer, inspired by your sacrifice. He works to ensure accidents like Chernobyl never happen again. You died young, but your legacy lives through the lives you saved and the son who carries on your mission. In the face of certain death, you chose to serve. That choice defines true heroism."
    },

    emergency_medical: {
      title: "Fighting for Life",
      date: "April 26-May 1986 - Moscow Hospital Number 6",
      text: "You're evacuated to Moscow's specialized radiation hospital. The treatment is aggressive—bone marrow transplants, blood transfusions, experimental procedures.\n\nYou hover between life and death for weeks. Your body fights the radiation damage with the help of doctors who are learning as they treat you.\n\nAgainst the odds, you survive. You've absorbed enough radiation to kill most people, but a combination of treatment, timing, and luck pulls you through.",
      isEnding: true,
      outcome: "You survived but with permanent health damage—weakened immune system, increased cancer risk, chronic fatigue. You lived to 58, dying of leukemia. But those 22 extra years mattered. You testified at the trial of plant officials, your survivor's perspective lending weight to prosecutions. You became an advocate for Chernobyl victims, helping secure compensation and medical care for thousands. You wrote a memoir that became required reading for nuclear engineers worldwide. Your children graduated university, and you met your grandchildren. You saved Viktor's life, and he was with you when you died, holding your hand and saying, 'You gave me 22 more years with my family. Thank you, brother.' Sometimes survival is its own form of heroism—not in the moment of crisis, but in what you do with the time you're given."
    },

    help_other_victims: {
      title: "The Victims' Champion",
      date: "1986-2008 - Ukraine and Russia",
      text: "You dedicate your survival to helping other Chernobyl victims. You organize support groups, fight for medical benefits, document radiation effects, advocate for the liquidators and evacuees.\n\nYour firsthand experience gives you credibility. You become the face of Chernobyl survivors, appearing before government committees, speaking at medical conferences, demanding justice and support.\n\nYou never fully recover your health, but you never stop fighting for others.",
      isEnding: true,
      outcome: "You died at 61 of radiation-related cancer, but you'd spent 22 years fighting for victims' rights. Your advocacy secured medical care for thousands, compensation for liquidators, and recognition for those who sacrificed their health. The Chernobyl Union you founded continues today, supporting survivors and their families. At your funeral, over 500 people attended—liquidators, evacuees, children of victims. They carried signs: 'He spoke when we had no voice' and 'A hero twice—once at Chernobyl, again for survivors.' Your grave in Kiev is visited annually by those whose lives you improved. You turned your suffering into service, your survival into salvation for others. That transformation is your true legacy."
    },

    testify_future: {
      title: "The Truth Witness",
      date: "1986-2005 - International",
      text: "You become an international spokesman on nuclear safety, testifying before government committees, speaking at conferences, teaching at universities.\n\nYour firsthand account of what went wrong at Chernobyl informs safety improvements worldwide. Reactor designs change. Protocols improve. Training evolves.\n\nYour testimony helps ensure no disaster like Chernobyl happens again.",
      isEnding: true,
      outcome: "You lived to 62, dying of complications from your initial radiation exposure. But your work changed nuclear safety globally. The protocols you advocated are now international standards. Reactor designs incorporate lessons from your testimony. You received the Goldman Environmental Prize, testified before the UN, and advised governments from Germany to Japan. When Fukushima happened in 2011, five years after your death, investigators referenced your work extensively. Your widow was invited to Japan to speak about your legacy. One Japanese official said, 'Volkov's testimony saved lives at Fukushima—we knew what not to do because he told us what went wrong at Chernobyl.' You couldn't prevent Chernobyl, but your honesty about it prevented worse disasters. Truth, it turns out, is the greatest safety mechanism."
    },

    leave_industry: {
      title: "Walking Away",
      date: "1986-2015 - Rural Ukraine",
      text: "You leave the nuclear industry entirely, unable to face the technology that nearly killed you and did kill your friends. You move to a small village and work as a teacher.\n\nYou never speak publicly about Chernobyl. Your students don't know your past. You live quietly, trying to forget.\n\nBut the memories haunt you. Viktor's face. The exposed core. The decisions you made or didn't make.",
      isEnding: true,
      outcome: "You lived to 72, dying peacefully in your village. You taught three generations of children, many of whom became engineers, doctors, and teachers. You were beloved in your community. But you never found peace with Chernobyl. On your deathbed, you finally told your family what you'd experienced. 'I survived when heroes died,' you said. 'I should have done more.' Your daughter replied, 'You did what you could, then spent 29 years shaping young minds. That's not nothing.' She was right, but you never quite believed it. Your gravestone reads simply: 'Teacher, Father, Survivor.' The word 'hero' is absent, by your request. But perhaps the real heroism was building a life after trauma, teaching others despite your pain, surviving not just the radiation but the guilt. Not every form of courage is dramatic."
    },

    late_truth: {
      title: "Better Late Than Never",
      date: "April 26, 1986, 10:00 AM - Plant Administration",
      text: "You can't live with the lie anymore. You gather plant workers and tell them the complete truth about the radiation danger and the government's minimization of the disaster.\n\nWorkers immediately begin evacuating their families on their own initiative. The unofficial evacuation saves lives, though it happens chaotically.\n\nYou're arrested for causing panic and undermining state authority, but the truth is spreading faster than authorities can contain it.",
      choices: [
        {
          text: "Accept arrest knowing you finally did the right thing",
          next: "redemptive_arrest",
          stats: { truth: 25, duty: 10 }
        },
        {
          text: "Continue spreading the truth despite threats",
          next: "defiant_truth",
          stats: { truth: 30, duty: 15, survival: -10 }
        }
      ]
    },

    continued_compliance: {
      title: "The Collaborator",
      date: "April 26-May 1986 - Chernobyl Area",
      text: "You continue following orders, minimizing the disaster in all your communications. Pripyat isn't evacuated for 36 hours. The May Day parade in Kiev goes ahead despite the radiation plume.\n\nThousands receive unnecessary exposure because of the official lies you help spread. You've chosen career over conscience, obedience over morality.",
      isEnding: true,
      outcome: "You lived to 69, dying of natural causes. You were promoted after Chernobyl, rewarded for your loyalty. But you were also investigated after the Soviet collapse, accused of complicity in the cover-up. No criminal charges stuck, but your reputation was destroyed. Your children stopped speaking to you when they learned what you'd done. 'How many children got cancer because you lied?' your daughter asked. You had no answer. You died wealthy but alone, your medals in a box, unopened. Your obituary mentioned your engineering career but not Chernobyl—your family's request. Your gravestone bears just your name and dates, nothing else. In the end, all your compliance bought you was a longer life devoid of meaning, wealth without respect, survival without honor. You lived, but you never recovered your soul."
    },

    arrested_hero: {
      title: "The Prisoner of Conscience",
      date: "April 27-December 1986 - Kiev Prison",
      text: "You're arrested for spreading panic and state secrets. The charges are serious—you could face years in prison.\n\nBut your arrest becomes international news. The Western press reports on the engineer who told the truth and was imprisoned for it. Pressure mounts on the Soviet government.\n\nIn December, during Gorbachev's glasnost reforms, you're quietly released. No apology, but no more prosecution.",
      isEnding: true,
      outcome: "You were released after eight months in prison. Your health never fully recovered from the radiation exposure and imprisonment, and you died at 57 from complications. But your story became symbolic of the Soviet system's failures—truth-tellers imprisoned, lies officially sanctioned. Your arrest was cited in debates about glasnost and perestroika. When the Soviet Union collapsed in 1991, you were officially exonerated and declared a Hero of Ukraine. Your prison journal, smuggled out and published in 1987, became an international bestseller, translated into 23 languages. You spent your remaining years as a democracy activist and nuclear safety advocate. At your funeral, Mikhail Gorbachev sent a wreath: 'He paid the price for truth and helped end an empire of lies.' Your courage in that moment changed more than you knew."
    },

    flee_arrest: {
      title: "The Fugitive Truth-Teller",
      date: "April 27-1986 - In Hiding",
      text: "You flee before they can formally arrest you. For months, you move from safe house to safe house, spreading the truth about Chernobyl to anyone who will listen.\n\nYou become a wanted man, but also a folk hero. Your story spreads through unofficial channels—samizdat publications, foreign radio broadcasts, word of mouth.\n\nThe truth you're telling can't be contained, even if you can be caught.",
      choices: [
        {
          text: "Eventually surrender and face trial publicly",
          next: "public_trial",
          stats: { truth: 30, duty: 15 }
        },
        {
          text: "Flee to the West and continue speaking from exile",
          next: "western_exile",
          stats: { truth: 35, survival: 20, duty: -10 }
        }
      ]
    },

    return_after_family: {
      title: "Duty Calls",
      date: "April 26, 1986, 6:00 AM - Return to Chernobyl",
      text: "After ensuring your family is safe in Kiev, you drive back to Chernobyl. The guilt of running was unbearable. Your technical knowledge is needed.\n\nYou arrive to find chaos—military arriving, firefighters dying, engineers overwhelmed. You immediately begin coordinating response efforts.\n\nYour family is safe, and you're back where you're needed. It's the best of both worlds, though you've still absorbed significant radiation.",
      choices: [
        {
          text: "Lead the technical response team",
          next: "lead_technical_response",
          stats: { duty: 30, survival: -5 }
        },
        {
          text: "Focus on documenting the disaster accurately",
          next: "accurate_documentation",
          stats: { truth: 25, duty: 20 }
        }
      ]
    },

    family_exodus: {
      title: "The Deserter",
      date: "April 26-May 1986 - Leaving Ukraine",
      text: "You take your family and drive west, away from the radiation, away from responsibility. You cross into Poland, then Germany, eventually seeking asylum in the West.\n\nYour family is safe. You're alive. But you abandoned your colleagues, your countrymen, your duty.",
      isEnding: true,
      outcome: "You lived to 74 in Germany, working as a consultant. Your family thrived in the West—your children became successful professionals. But you were branded a deserter and a coward. Soviet media vilified you. Even in the West, you were viewed with suspicion—why did you run when others stayed? You watched news of Chernobyl from afar, knowing you should have been there helping. Your son once asked, 'Did you do the right thing?' You said, 'I kept you safe.' He replied, 'But at what cost to your soul?' You had no answer. You died comfortable and foreign, successful and ashamed. Your family erected a modest headstone: 'Loving Father, Devoted Husband.' The word 'hero' doesn't appear, and that absence says everything."
    },

    warn_others: {
      title: "The Midnight Messenger",
      date: "April 26, 1986, 4:00 AM - Pripyat",
      text: "As you evacuate your own family, you stop at several apartment buildings to warn others. You wake dozens of families, urging them to leave immediately.\n\nMany follow your advice. Some think you're crazy. But by dawn, several hundred people have self-evacuated because of your warnings.\n\nYou've balanced family duty with broader responsibility, saving your own while helping others.",
      isEnding: true,
      outcome: "You and your family settled in Kiev, far enough from the disaster to be safe. You absorbed moderate radiation—enough for health problems but not fatal. You lived to 66, dying of radiation-related cancer. But you lived knowing you'd helped both your family and others. The families you warned that night found you years later and thanked you personally. Several named their children after you. You testified at the trial of plant officials, your firsthand account helping secure convictions. You wrote a book about balancing duty to family with duty to humanity—it became required reading at ethics courses in universities worldwide. At your funeral, your daughter said, 'He saved us, but he didn't stop there. He saved others too. That was who he was.' You found the middle path between selfishness and self-destruction, and that balance defined your legacy."
    },

    assist_commission: {
      title: "The Expert Advisor",
      date: "April 27-June 1986 - Chernobyl Area",
      text: "You become the key technical advisor to the government commission investigating the disaster. Your firsthand knowledge is invaluable in understanding what happened and how to respond.\n\nYou work 18-hour days for months, helping design the containment strategy, advising on evacuation zones, documenting the disaster.\n\nYour expertise shapes the entire response, potentially saving thousands of lives through better decision-making.",
      isEnding: true,
      outcome: "You lived to 61, dying of radiation-related illness. But your months of intensive work with the commission shaped the entire Chernobyl response. The 30-kilometer exclusion zone—your recommendation. The evacuation protocols—based on your data. The containment strategy—informed by your expertise. You became one of the key architects of the response that prevented Chernobyl from being even worse. You were decorated by both the Soviet Union and independent Ukraine. The UN invited you to help draft international nuclear safety protocols. You consulted on reactor design worldwide. Your funeral was attended by government ministers, scientists, and hundreds of ordinary people whose lives you'd saved through your expertise. Your gravestone reads: 'He knew, he spoke, he served.' In the halls of the International Atomic Energy Agency, your photo hangs with the inscription: 'Aleksei Volkov—whose expertise turned catastrophe into survivable disaster.'"
    },

    contact_media: {
      title: "Breaking the Story",
      date: "April 27, 1986 - Kiev",
      text: "You contact Western journalists through underground channels. Within 24 hours, the BBC and Voice of America are broadcasting your account of the disaster.\n\nThe Soviet government can no longer hide what happened. International pressure forces transparency and faster response.\n\nYou're arrested immediately, but the story is already out. The world knows the truth.",
      choices: [
        {
          text: "Face trial knowing you forced accountability",
          next: "accountability_trial",
          stats: { truth: 40, duty: 15 }
        }
      ]
    },

    stay_in_kiev: {
      title: "The Kiev Watchdog",
      date: "April 26-May 1986 - Kiev",
      text: "You remain in Kiev, constantly pressuring authorities for faster, more comprehensive response. Your engineering credentials and firsthand testimony make you impossible to ignore.\n\nEvacuation zones expand based on your recommendations. The May Day parade in Kiev is finally cancelled. Response efforts improve.\n\nYou become an unofficial check on government minimization of the disaster.",
      isEnding: true,
      outcome: "You lived to 65, your health compromised by your initial radiation exposure but not destroyed. You never returned to work at nuclear plants—instead becoming a full-time safety advocate and government critic. Your constant pressure improved the Chernobyl response and cleanup. You testified internationally about nuclear safety. You advised governments on emergency response protocols. You were both praised as a hero and criticized as a troublemaker—the same testimony depending on who was listening. When you died, the government sent an official wreath but no representative to your funeral. The people you'd helped, however, turned out by the hundreds. Your legacy is complex: a government pain in the ass who saved thousands of lives by refusing to shut up. Your memoir's title captured it perfectly: 'The Engineer Who Wouldn't Stop Talking—And Why That Mattered.'"
    },

    return_to_chernobyl: {
      title: "Back to the Source",
      date: "April 27, 1986 - Chernobyl Plant",
      text: "You return to Chernobyl and immediately join the technical response team. Your knowledge of the plant's systems is desperately needed.\n\nYou help design the water pumping strategy to cool the remaining reactors. You advise on the containment approach. You train the liquidators who will do the dangerous work.\n\nEvery day at the site means more radiation exposure, but you're making a real difference.",
      isEnding: true,
      outcome: "You worked at Chernobyl for three months before radiation sickness forced you to stop. You'd absorbed over 400 rem total. You died at 54 of radiation-related cancer, but those three months of work were crucial. The pumping system you helped design prevented a steam explosion that could have destroyed the entire facility. Your training of liquidators reduced casualties among cleanup workers. Your technical guidance informed the containment structure that still encases the ruins of Reactor 4. At your funeral, General Pikalov, commander of cleanup operations, said: 'Volkov knew he was dying from the moment he returned, but he came back anyway. His work saved thousands of liquidators from unnecessary exposure. He is the definition of a hero.' You received the Hero of the Soviet Union award posthumously. Your name is prominently displayed at the Chernobyl museum, and guides always tell visitors your story."
    },

    work_through_sickness: {
      title: "Working Until the End",
      date: "April 26-May 10, 1986 - Chernobyl Area",
      text: "Even as radiation sickness sets in—nausea, weakness, hair loss—you continue working. You coordinate response efforts, advise on containment, document everything.\n\nYou collapse on May 10, having worked for two weeks with a fatal dose of radiation in your body. Your dedication has been extraordinary, but it's killed you.\n\nYou're evacuated to Moscow Hospital Number 6, where you die fourteen days later.",
      isEnding: true,
      outcome: "You died on May 24, 1986, but your two weeks of work while dying accomplished more than most healthy people accomplish in years. Your coordination prevented further reactor failures. Your documentation became the basis for all subsequent Chernobyl research. Your advice saved countless liquidators from unnecessary exposure. You were posthumously awarded the Order of Lenin and the Hero of the Soviet Union. Your widow, Marina, accepted the medals and told the ceremony: 'He knew he was dying from day one, but he kept working. He said, "If I'm going to die anyway, I might as well make it count."' That became your epitaph, carved on your gravestone in Moscow: 'He made his death count.' Every year on the anniversary, liquidators visit your grave. In 2016, on the 30th anniversary, over 100 people came to honor you. Your sacrifice was not forgotten."
    },

    accept_evacuation: {
      title: "Strategic Retreat",
      date: "May 1986 - Moscow Hospital Number 6",
      text: "You accept medical evacuation when symptoms appear. The doctors are frank: you've absorbed a dangerous but possibly survivable dose—around 300 rem.\n\nTreatment is intensive. You spend two months in the hospital, hovering between life and death. But you survive.\n\nYou've saved yourself to potentially help long-term, though guilt about leaving weighs on you.",
      isEnding: true,
      outcome: "You survived and lived to 59, dying of radiation-related leukemia. But those 23 years mattered immensely. You became the government's chief technical advisor on Chernobyl cleanup and containment. You supervised construction of the original sarcophagus. You designed safety protocols for liquidators that reduced casualties. You testified at the trial of plant officials. You advised on the exclusion zone boundaries. You consulted on reactor safety worldwide. At your funeral, the prime minister of Ukraine gave a eulogy: 'Aleksei Volkov's 18 hours at Chernobyl could have been his last act, but because he accepted treatment, he gave us 23 years of expertise that shaped our response and prevented thousands of deaths. Sometimes the bravest thing is accepting help so you can help others later.' Your legacy was built not on dramatic self-sacrifice but on strategic thinking and long-term service."
    },

    victim_advocate: {
      title: "Voice of the Victims",
      date: "1986-2010 - Ukraine and Russia",
      text: "You dedicate your survival to advocating for Chernobyl victims—liquidators, evacuees, sick children, farmers who lost everything.\n\nYou fight bureaucracy for their benefits. You organize medical care. You document health effects. You battle government officials who want to minimize the disaster's impact.\n\nYour work improves thousands of lives, though it's frustrating, exhausting, and often thankless.",
      isEnding: true,
      outcome: "You lived to 67, your life extended by good medical care you helped secure for yourself and others. Your advocacy secured billions in compensation for victims. The Chernobyl Law you lobbied for guaranteed medical care and benefits to affected populations. You established clinics for radiation victims. You fought for children with thyroid cancer. You secured pensions for liquidators. At your funeral, thousands attended—people whose lives you'd improved lined the streets. The president of Ukraine gave a eulogy: 'Aleksei Volkov survived Chernobyl twice—once the radiation, then decades of bureaucracy. His advocacy saved more lives than his engineering ever could.' Your foundation continues your work today, helping fourth-generation victims. Your name is synonymous with Chernobyl advocacy. You turned your survival into service that echoes through generations."
    },

    safety_testimony: {
      title: "The Safety Prophet",
      date: "1986-2008 - International",
      text: "You testify before countless bodies about the safety failures that caused Chernobyl. You explain the design flaws in RBMK reactors, the procedural failures, the cultural problems that prioritized politics over safety.\n\nYour testimony changes nuclear safety worldwide. Reactors are redesigned. Protocols improve. Training emphasizes safety culture.\n\nYou become the face of 'learning from Chernobyl.'",
      isEnding: true,
      outcome: "You lived to 65, your radiation-damaged body finally succumbing to cancer. But your testimony changed nuclear power forever. The IAEA adopted your recommendations as international standards. Countries with RBMKs made critical safety upgrades. Emergency response protocols incorporated lessons from your experience. When Fukushima happened in 2011, three years after your death, investigators used your framework to understand what went wrong. A Japanese nuclear safety official said, 'Volkov's testimony about cultural and procedural failures was more valuable than any technical report. He understood that nuclear safety is as much about human factors as engineering.' You received the Goldman Environmental Prize, testified before the UN, and advised governments worldwide. Your memoir, 'Safety First: Lessons from Chernobyl,' is required reading for nuclear engineers globally. You couldn't prevent Chernobyl, but you prevented the next one."
    },

    fight_for_life: {
      title: "The Fighter",
      date: "April 27-June 1986 - Hospital",
      text: "You fight for survival with every ounce of will. The radiation has damaged your bone marrow, your organs, your immune system. But you refuse to give up.\n\nAfter two months of intensive treatment and several close calls, you begin to recover. The doctors are amazed—you've survived a dose that killed others.\n\nYour survival is a medical miracle, but you're permanently weakened.",
      isEnding: true,
      outcome: "You lived to 56, your radiation-compromised body succumbing to pneumonia that a healthy person would have survived. But those 20 years mattered. You testified at the plant officials' trial—your survival lending powerful testimony. You became a living reminder of both Chernobyl's human cost and human resilience. Medical researchers studied you extensively, advancing understanding of radiation effects. You consulted on emergency response protocols. You trained younger engineers on safety culture. Your children graduated university and gave you grandchildren. On your deathbed, your daughter asked if you regretted your choices that night. 'Not for a second,' you said. 'I tried to help, and I lived long enough to see you grow up. That's enough.' Your epitaph: 'He survived to serve. That service was his victory.' Sometimes heroism isn't dying dramatically—it's fighting to live so you can keep making a difference."
    },

    final_documentation: {
      title: "The Final Testimony",
      date: "April 27-May 15, 1986 - Hospital",
      text: "You use your remaining strength to document everything—what happened, why it happened, who was responsible, what should change.\n\nYou dictate to a nurse for hours each day, creating a comprehensive record of the disaster. Your testimony is lucid, detailed, and damning.\n\nYou die on May 15, but your documentation survives. It becomes the definitive firsthand account of Chernobyl.",
      isEnding: true,
      outcome: "Your testimony, published posthumously, changed history. It exposed the design flaws in RBMK reactors, the procedural failures, the culture of secrecy that enabled the disaster. Your documentation was used in the trial of plant officials, in safety reforms worldwide, in historical analysis. The 'Volkov Testament,' as it became known, is cited in nuclear safety courses globally. You were posthumously awarded numerous honors—Order of Lenin, Hero of the Soviet Union, the UN's Dag Hammarskjöld Medal. But perhaps more importantly, your words in that hospital bed, documented while you were dying, prevented future disasters. A nuclear safety expert wrote in 2016: 'Volkov's testimony is the Rosetta Stone of nuclear safety—it decoded not just what happened at Chernobyl, but why disasters happen and how to prevent them.' You died at 33, but your words have saved countless lives in the decades since."
    },

    continued_evacuation: {
      title: "The Evacuation Coordinator",
      date: "April 26-May 1986 - Chernobyl Area",
      text: "You spend weeks coordinating evacuations—first Pripyat, then the 30-kilometer zone, then wider areas as the contamination map becomes clear.\n\nYour organizational skills save lives. Your knowledge of radiation exposure guides evacuation priorities. Your calm demeanor prevents panic.\n\nYou've absorbed moderate radiation but nothing immediately life-threatening.",
      isEnding: true,
      outcome: "You lived to 63, developing radiation-related cancer but surviving far longer than most with your exposure level. Your evacuation planning saved thousands from unnecessary exposure. The orderly Pripyat evacuation—accomplished in three hours—was largely due to your preparation. You later coordinated evacuations from the wider exclusion zone, helping relocate 350,000 people. You became Ukraine's director of emergency management, developing protocols used nationwide. When you retired, the president personally thanked you: 'The Pripyat evacuation could have been chaos. Instead, it was orderly and quick, saving countless lives. That was your doing.' At your funeral, former Pripyat residents you'd evacuated attended by the hundreds. One brought the bag she'd packed that day: 'He told us we'd be back in three days. We never came home. But we're alive because of how quickly he moved us.' That's your legacy—thousands alive because you stayed calm and organized when the world was ending."
    },

    document_exposure: {
      title: "The Medical Documenter",
      date: "April 26-30, 1986 - Chernobyl Area",
      text: "You meticulously document every firefighter's exposure—where they went, how long they stayed, what they touched. Your records will be crucial for their medical treatment.\n\nDoctors later say your documentation saved lives by allowing targeted treatment based on exposure levels. Your scientific approach to documenting the disaster helps both immediate victims and long-term understanding.",
      isEnding: true,
      outcome: "You lived to 64, dying of radiation-related illness. But your documentation changed how radiation exposure is tracked and treated. Your detailed records allowed doctors to provide targeted treatment to firefighters, saving several lives. Your methodology became the standard for radiation accident documentation worldwide. The IAEA adopted your exposure tracking system as an international protocol. You published several medical papers on radiation effects, advancing scientific understanding. You consulted on radiation accidents worldwide—Three Mile Island, Tokaimura, Fukushima. At your funeral, a doctor who treated Chernobyl firefighters spoke: 'Volkov's documentation allowed us to save lives we would have lost. He brought scientific rigor to chaos.' Your legacy: turning disaster into data that saves future lives. Your exposure tracking forms are still used by every nuclear facility globally."
    },

    coordinate_response: {
      title: "The Response Coordinator",
      date: "April 26-December 1986 - Chernobyl Area",
      text: "You spend eight months coordinating the massive response effort—organizing liquidators, supervising cleanup, managing logistics for thousands of workers.\n\nYour technical knowledge and organizational skills make you invaluable. You're promoted to deputy director of the cleanup operation.\n\nThe work is exhausting and dangerous, but you're making a real difference in containment and cleanup.",
      isEnding: true,
      outcome: "You lived to 62, your years of exposure to low-level radiation finally causing fatal cancer. But your eight months of intense work, followed by years of oversight, shaped the entire Chernobyl cleanup. You supervised construction of the original sarcophagus. You organized the liquidator rotation system that minimized individual exposure. You established decontamination protocols still used today. Over 600,000 liquidators served at Chernobyl, and your safety systems reduced casualties significantly. You were awarded the Hero of the Soviet Union and Hero of Ukraine. At your funeral, liquidators from across the former USSR attended. One spoke for all: 'Volkov sent us into radiation, but he always brought us back alive. He understood that cleanup required people but people deserved protection. He never forgot we were human, not just tools.' Your gravestone bears an inscription chosen by liquidators: 'He organized the impossible and saved the organizers.'"
    },

    strategic_treatment: {
      title: "The Long Game",
      date: "May-August 1986 - Hospital and Recovery",
      text: "You accept treatment and focus on recovery, understanding that long-term contribution requires survival. Three months of intensive treatment stabilize your condition.\n\nYou recover enough to return to work, but as an advisor rather than field worker. You have decades of contribution ahead if you're smart about protecting your health.",
      isEnding: true,
      outcome: "You lived to 69, managing your radiation exposure carefully while contributing for decades. You became the Soviet Union's, and later Ukraine's, chief nuclear safety advisor. You supervised all long-term Chernobyl operations. You advised on reactor safety nationwide. You helped decommission dangerous old reactors. You trained a generation of nuclear engineers in safety culture. When you retired at 65, you
