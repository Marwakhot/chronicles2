import React, { useState } from 'react';
import { ArrowLeft, BookOpen, Lock } from 'lucide-react';
import AncientStory from './AncientStory';
import MedievalStory from './MedievalStory';
import ModernStory from './ModernStory';
import ExplorationStory from './ExplorationStory';

const StorySelection = ({ timeline, onBack }) => {
  const [selectedStory, setSelectedStory] = useState(null);

  const stories = {
    ancient: [
      {
        id: 'caesar',
        title: "Julius Caesar's Assassination",
        description: "Navigate Roman politics on the Ides of March. Will you join the conspirators, defend Caesar, or try to stay neutral? Your choices will determine your fate in one of history's most pivotal moments.",
        difficulty: 'Medium',
        themes: ['Loyalty', 'Morality', 'Politics'],
        available: true,
        component: AncientStory
      }
    ],
    medieval: [
      {
        id: 'blackdeath',
        title: 'The Black Death',
        description: 'Experience the plague that changed Europe forever. Make choices about care, escape, and faith as death sweeps through your village. Will you serve, flee, or find another path?',
        difficulty: 'Hard',
        themes: ['Survival', 'Faith', 'Community'],
        available: true,
        component: MedievalStory
      }
    ],
    exploration: [
      {
        id: 'voyage',
        title: 'Voyage of the Unknown',
        description: 'Sail with Hernán Cortés to Mexico in 1519. Face profound ethical dilemmas about conquest, cultural destruction, and your role as a translator. Will you serve Spain loyally, protect indigenous peoples, or find a middle path?',
        difficulty: 'Very Hard',
        themes: ['Ethics', 'Humanity', 'Colonialism'],
        available: true,
        component: ExplorationStory
      }
    ],import React, { useState } from 'react';
import { ArrowLeft, Anchor, Heart, Skull, Ship, AlertTriangle, Compass } from 'lucide-react';

const ExplorationStory = ({ onBack }) => {
  const [currentScene, setCurrentScene] = useState('intro');
  const [choices, setChoices] = useState([]);
  const [stats, setStats] = useState({
    humanity: 50,
    loyalty: 50,
    honor: 50
  });

  const updateStats = (statChanges) => {
    setStats(prev => ({
      humanity: Math.max(0, Math.min(100, prev.humanity + (statChanges.humanity || 0))),
      loyalty: Math.max(0, Math.min(100, prev.loyalty + (statChanges.loyalty || 0))),
      honor: Math.max(0, Math.min(100, prev.honor + (statChanges.honor || 0)))
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
      title: "The New World Beckons",
      date: "March 1519 - Port of Seville, Spain",
      text: "You are Diego Mendoza, a young cartographer selected for Captain Hernán Cortés's expedition to the lands the natives call Mexico. Your skill with maps and languages earned you this position, though your conscience troubles you about the venture's true purpose.\n\nThe harbor bustles with activity. Eleven ships are being loaded with supplies, weapons, and hundreds of men eager for gold and glory. Your friend Father Bartolomé, a Dominican friar, approaches with concern etched on his face.\n\n'Diego,' he says quietly, 'I have heard troubling reports from previous expeditions. The natives are treated as less than human. Enslaved. Murdered. Promise me you will not lose your soul in pursuit of gold.'\n\nCaptain Cortés himself approaches, his commanding presence impossible to ignore. 'Mendoza! Are you ready to map a new world? To bring civilization to the savages? We sail at dawn!'",
      choices: [
        {
          text: "Promise Father Bartolomé you will advocate for humane treatment of natives",
          next: "promise_humanity",
          stats: { humanity: 15, honor: 10, loyalty: -5 }
        },
        {
          text: "Tell Cortés you will serve faithfully as cartographer and translator",
          next: "pledge_loyalty",
          stats: { loyalty: 15, honor: 5 }
        },
        {
          text: "Express doubts about the expedition's ethics to Cortés",
          next: "voice_doubts",
          stats: { humanity: 20, honor: 15, loyalty: -10 }
        },
        {
          text: "Remain neutral and focus only on your cartography duties",
          next: "neutral_stance",
          stats: { honor: 5 }
        }
      ]
    },

    promise_humanity: {
      title: "The Sacred Promise",
      date: "March 1519 - The Night Before Departure",
      text: "You clasp Father Bartolomé's hand. 'I promise. I will not become a monster, no matter what I witness.'\n\nThe friar places a small wooden cross in your palm. 'Keep this. Remember that God sees all we do, even in lands far from Spain.'\n\nThat night, you cannot sleep. Through your window, you see sailors loading chains and shackles onto the ships. The expedition's true nature becomes clearer—this is not just exploration, but conquest.\n\nIn the morning, as the ships prepare to sail, you overhear Cortés's officers discussing their strategy: find gold, claim territory for Spain, and convert or subjugate the natives by any means necessary.\n\nYour promised humanity may come at great personal cost.",
      choices: [
        {
          text: "Board the ship and stay true to your promise",
          next: "sail_with_principles",
          stats: { humanity: 10, honor: 15 }
        },
        {
          text: "Abandon the expedition before departure",
          next: "abandon_expedition",
          stats: { humanity: 15, loyalty: -20, honor: 10 }
        }
      ]
    },

    pledge_loyalty: {
      title: "The Captain's Confidence",
      date: "March-April 1519 - Atlantic Crossing",
      text: "Cortés claps you on the shoulder. 'Good man, Mendoza! I need men I can trust. These natives have gold—mountains of it. They worship false gods. We will save their souls and claim their riches for Spain and the Church.'\n\nDuring the voyage, Cortés shares his plans with you. He speaks of a great empire in the interior, ruled by a king named Montezuma. 'Intelligence suggests they are a mighty but superstitious people. We can use this.'\n\nYour loyalty to Cortés is noted by all. You are given privileged information and trusted with important tasks. But you also overhear darker conversations—plans for enslavement, forced conversion, and violent conquest if the natives resist.\n\nAfter months at sea, land appears on the horizon. You have reached the coast of what the natives call the Yucatan.",
      choices: [
        {
          text: "Continue serving Cortés loyally without question",
          next: "loyal_servant",
          stats: { loyalty: 20, humanity: -10 }
        },
        {
          text: "Begin to question the ethics of the mission privately",
          next: "private_doubts",
          stats: { humanity: 15, honor: 10 }
        }
      ]
    },

    voice_doubts: {
      title: "Dangerous Honesty",
      date: "March 1519 - Captain's Quarters",
      text: "You take a deep breath. 'Captain, with respect, I must ask—what will be our conduct toward the native peoples? Previous expeditions have been marked by... cruelty.'\n\nCortés's expression darkens. The room falls silent. Other officers stare at you with barely concealed hostility.\n\n'Mendoza,' Cortés says coldly, 'we bring civilization and the true faith to pagans who practice human sacrifice. Whatever methods are necessary are justified by that sacred mission. Do you question the Church? The Crown?'\n\nYou have made a dangerous enemy. But Father Bartolomé, who witnessed the exchange, nods at you with approval.\n\nThat night, one of Cortés's lieutenants, Pedro de Alvarado, approaches you. 'Careful, cartographer. Men who question the Captain have a way of disappearing. The sea is treacherous, if you understand me.'",
      choices: [
        {
          text: "Apologize to Cortés and pledge loyalty to avoid danger",
          next: "apologize_cortez",
          stats: { loyalty: 15, honor: -15, humanity: -5 }
        },
        {
          text: "Stand by your principles despite the threat",
          next: "stand_firm",
          stats: { humanity: 25, honor: 25, loyalty: -15 }
        },
        {
          text: "Seek protection by befriending Father Bartolomé and other clergy",
          next: "clergy_protection",
          stats: { humanity: 15, honor: 10 }
        }
      ]
    },

    neutral_stance: {
      title: "The Observer",
      date: "April 1519 - Approaching the Yucatan Coast",
      text: "You focus on your maps, your instruments, your calculations. You tell yourself you are just a cartographer—not responsible for conquest, just documenting geography.\n\nBut neutrality becomes harder to maintain. During the voyage, you witness punishments of sailors who question orders. You hear plans for subjugation. You cannot unhear the casual discussions of enslaving entire peoples.\n\nAs land approaches, Cortés asks you to join a landing party. 'We need your language skills and mapmaking, Mendoza. First contact with the natives. Are you ready?'\n\nYou realize there is no neutral ground. Your presence, your skills, your maps—all will be used for conquest. By participating, you enable it. But refusing might mean death.",
      choices: [
        {
          text: "Join the landing party and use your skills to help",
          next: "join_landing",
          stats: { loyalty: 10, honor: 5 }
        },
        {
          text: "Refuse and face the consequences",
          next: "refuse_landing",
          stats: { humanity: 20, loyalty: -20, honor: 15 }
        }
      ]
    },

    sail_with_principles: {
      title: "First Contact",
      date: "April 1519 - Coast of Yucatan",
      text: "The ships anchor near a settlement. Natives gather on the beach, watching warily. You are among the first to go ashore, carrying only mapping instruments and the wooden cross Father Bartolomé gave you.\n\nThe natives are Maya. Through gestures and your limited knowledge of indigenous languages from previous expedition reports, you begin to communicate. They are cautious but not hostile.\n\nThen soldiers begin unloading weapons. The Maya warriors tense. You see fear in the eyes of the women holding children.\n\nCortés orders an interpreter to demand gold and submission to Spanish authority. The Maya chief, through your translation, says they have some gold but it is sacred, not for trading. He asks what Spain wants in return for peace.\n\nCortés turns to you. 'Tell them they must accept Spanish rule and convert to Christianity. Otherwise, we are authorized to take what we need by force.'",
      choices: [
        {
          text: "Translate Cortés's demand accurately but add a plea for peaceful negotiation",
          next: "soften_translation",
          stats: { humanity: 20, honor: 15, loyalty: -10 }
        },
        {
          text: "Translate exactly as ordered without editorializing",
          next: "literal_translation",
          stats: { loyalty: 15, honor: 10, humanity: -5 }
        },
        {
          text: "Refuse to deliver the ultimatum and suggest peaceful trade instead",
          next: "refuse_ultimatum",
          stats: { humanity: 30, honor: 20, loyalty: -25 }
        }
      ]
    },

    abandon_expedition: {
      title: "The Deserter's Path",
      date: "March 1519 - Seville Streets",
      text: "As dawn breaks and the ships prepare to sail, you slip away into Seville's narrow streets. Your cartography position was prestigious, your chance for wealth and fame. You are abandoning it all.\n\nFather Bartolomé finds you in a church. 'You have chosen the harder path,' he says. 'Most men would sail. You have courage.'\n\nBut Cortés's men are searching for you. Desertion before departure is a serious crime. If caught, you face imprisonment or worse.\n\nFather Bartolomé offers you sanctuary in a monastery. 'Stay here. When the expedition leaves, you will be safe. I can help you find other work.'",
      choices: [
        {
          text: "Accept sanctuary and start a new life away from conquest",
          next: "ending_sanctuary",
          stats: { humanity: 20, honor: 15 }
        },
        {
          text: "Leave Spain entirely to avoid being caught",
          next: "flee_spain",
          stats: { humanity: 10, honor: 5 }
        }
      ]
    },

    loyal_servant: {
      title: "The Conqueror's Right Hand",
      date: "April-July 1519 - Mexico Coast",
      text: "You serve Cortés without question. Your maps guide the expedition inland. Your translations facilitate demands for gold and submission. You witness villages being subjugated, natives enslaved, resistance crushed with overwhelming violence.\n\nYou tell yourself this is civilization, that you are bringing progress to a savage land. But at night, you hear the cries of enslaved natives. You see the fear in their eyes.\n\nCortés rewards your loyalty. You receive a share of plundered gold. You are promoted to a position of authority.\n\nThen you meet Malinche, a native woman who speaks multiple indigenous languages. Cortés takes her as translator and concubine. Through her, you learn about the Aztec Empire—its sophistication, its cities, its culture. These are not savages. These are people with their own civilization.",
      choices: [
        {
          text: "Continue loyal service, pushing aside your growing doubts",
          next: "suppress_doubts",
          stats: { loyalty: 25, humanity: -20, honor: -10 }
        },
        {
          text: "Confront your complicity and try to mitigate the worst abuses",
          next: "late_conscience",
          stats: { humanity: 15, honor: 10, loyalty: -5 }
        }
      ]
    },

    private_doubts: {
      title: "The Crisis of Conscience",
      date: "May 1519 - Coastal Settlement",
      text: "You begin keeping a private journal, documenting not just geography but the treatment of natives. You witness a massacre at Cholula—thousands killed for alleged treachery. You see temples destroyed, idols smashed, people forced into slavery.\n\nFather Bartolomé, who accompanied the expedition, seeks you out. 'Diego, I see the horror in your eyes. You must speak up. Silence is complicity.'\n\nBut speaking up means losing Cortés's favor—perhaps losing your life. You have already gained gold, status, and security by serving the expedition.\n\nThen you are assigned to map the great city of Tenochtitlan—the Aztec capital. As you enter the city, you are struck by its magnificence. The canals, the temples, the markets—this civilization rivals anything in Europe.\n\nYou realize the full horror of what you are facilitating: the destruction of a great culture.",
      choices: [
        {
          text: "Document Tenochtitlan's greatness truthfully, risking Cortés's anger",
          next: "honest_documentation",
          stats: { humanity: 20, honor: 20, loyalty: -15 }
        },
        {
          text: "Secretly help some natives escape Spanish control",
          next: "secret_resistance",
          stats: { humanity: 25, honor: 15, loyalty: -20 }
        },
        {
          text: "Continue serving but advocate for less brutal treatment",
          next: "advocate_mercy",
          stats: { humanity: 15, honor: 10, loyalty: 5 }
        }
      ]
    },

    apologize_cortez: {
      title: "The Coward's Survival",
      date: "April 1519 - Aboard Ship",
      text: "You kneel before Cortés. 'Captain, I spoke rashly. I am a loyal servant of Spain and the Church. I will not question again.'\n\nCortés studies you coldly, then nods. 'See that you do not. Men who forget their place have short futures.'\n\nYou have saved yourself, but at what cost? Father Bartolomé looks at you with disappointment. Your fellow sailors see you as weak, someone who folds under pressure.\n\nWhen the expedition reaches the coast and begins its conquest, you are assigned to tasks that keep you away from the worst violence. But you know it is happening. You hear the screams. You see the enslaved natives.\n\nYou are safe, but you are also complicit.",
      isEnding: true,
      outcome: "You survived the expedition and returned to Spain with moderate wealth. But you carried the weight of your cowardice for the rest of your life. You knew you could have spoken up, could have resisted, but chose safety over honor. You died at 54, wealthy but haunted. Your maps were used for centuries of colonization, and you never forgot that your skills enabled conquest. On your deathbed, you confessed to a priest your regrets, but absolution brought no peace. Your legacy is comfort purchased with complicity—a lesson about the cost of choosing survival over principle."
    },

    stand_firm: {
      title: "The Voice of Conscience",
      date: "April-August 1519 - Mexican Coast and Interior",
      text: "You refuse to apologize. 'I will serve faithfully as cartographer, Captain, but I will not celebrate cruelty.'\n\nCortés nearly has you flogged, but Father Bartolomé intervenes. 'Captain, would you punish a man for following Christian mercy? That would not look well in reports to the Crown.'\n\nReluctantly, Cortés allows you to continue, but you are watched constantly. Any mistake could mean death.\n\nBut your stance earns respect from others who share your doubts. A small group forms—clergy and a few soldiers who are troubled by the expedition's brutality. You become a voice of conscience, documenting abuses and advocating for humane treatment.\n\nWhen the expedition reaches Tenochtitlan, you are awed by its magnificence. This great city proves that these are not savages but a sophisticated civilization. You document everything honestly.",
      choices: [
        {
          text: "Continue documenting honestly despite Cortés's anger",
          next: "continue_honest_work",
          stats: { humanity: 25, honor: 25, loyalty: -15 }
        },
        {
          text: "Destroy the evidence to protect yourself",
          next: "destroy_evidence",
          stats: { humanity: -20, honor: -25, loyalty: 10 }
        }
      ]
    },

    continue_honest_work: {
      title: "The Chronicler's Courage",
      date: "1519-1521 - Through the Conquest",
      text: "You continue your honest documentation despite threats. Father Bartolomé helps smuggle your writings to Spain. Your detailed accounts of Aztec civilization reach sympathetic clergy and scholars.\n\nWhen Tenochtitlan falls, you document the horror: the massacre, the destruction of temples and libraries, the enslavement. Your maps and journals become damning evidence of conquest atrocities.\n\nCortés has you arrested and sent back to Spain to face charges of undermining the Crown's interests. But your documentation has already sparked debate in Spanish courts about the morality of conquest.",
      choices: [
        {
          text: "Face trial and testify about what you witnessed",
          next: "ending_testimony",
          stats: { humanity: 30, honor: 30 }
        },
        {
          text: "Escape custody and join indigenous resistance",
          next: "join_resistance",
          stats: { humanity: 35, honor: 25, loyalty: -40 }
        }
      ]
    },

    destroy_evidence: {
      title: "The Coward's Erasure",
      date: "August 1519 - Tenochtitlan",
      text: "In fear for your life, you burn your honest documentation. You rewrite your journals to portray the Aztecs as savage and the conquest as civilizing.\n\nCortés is pleased. You are restored to favor. You receive gold and status.\n\nBut Father Bartolomé looks at you with profound disappointment. 'You had evidence of their greatness. Evidence that could have protected them. And you destroyed it to save yourself.'\n\nYou live with wealth and status, but also with the knowledge that you destroyed truth to serve power.",
      isEnding: true,
      outcome: "You lived to 61, dying wealthy but despised by anyone who knew what you had done. Your falsified maps and reports were used for centuries to justify Spanish conquest, portraying indigenous civilizations as primitive. Father Bartolomé de las Casas publicly condemned you by name in his writings defending indigenous peoples. Your family inherited wealth but also shame. Your children changed their surname to escape association with you. On your deathbed, you tried to confess the truth, but it was too late—the lies had taken root. Your legacy is as a man who chose safety over truth, destroying evidence that could have protected millions. Sometimes the worst evil is not active cruelty but cowardly silence."
    },

    honest_reports: {
      title: "The Whistleblower",
      date: "1520-1550 - Spain and Mexico",
      text: "You send detailed reports to the Council of the Indies, documenting both Aztec civilization's sophistication and the conquest's brutality. Your reports spark the Valladolid debate on indigenous rights.\n\nCortés has you arrested for disloyalty, but your documentation protects you—powerful clergy cite your work as evidence for indigenous humanity.\n\nYou spend years testifying, writing, and advocating. Your maps and ethnographic studies become foundational texts for understanding pre-conquest America.",
      isEnding: true,
      outcome: "You lived to 70, dying as a respected scholar and advocate. Your documentation helped establish the New Laws of 1542 that provided some protections for indigenous peoples. While these laws were often violated, they represented progress. Your maps and cultural studies preserved knowledge of civilizations that were being destroyed. Universities sought your counsel. You trained a generation of ethnographers who documented indigenous cultures with respect rather than contempt. At your funeral, indigenous representatives spoke of your advocacy. Your grave marker reads: 'He saw greatness where others saw only gold. He spoke truth when silence was rewarded.' Your legacy is truth-telling in service of justice."
    },

    protection_efforts: {
      title: "The Shield",
      date: "1520-1560 - Mexico and Spain",
      text: "You work with Bartolomé de las Casas and other clergy to establish protections for indigenous peoples. You document cases of abuse, advocate for indigenous rights, and use your status as a conquistador to testify credibly about atrocities.\n\nYou help found schools for indigenous children, establish missions that protect rather than exploit natives, and fight to end the encomienda system of forced labor.\n\nIt is exhausting work. You make powerful enemies. You survive assassination attempts. But you also see results: some natives protected, some abuses prevented, some reforms enacted.",
      isEnding: true,
      outcome: "You lived to 68, dying exhausted but satisfied. Your advocacy contributed to the New Laws and helped establish the principle that indigenous peoples had rights. You personally saved hundreds of natives from slavery and thousands from the worst abuses. The indigenous communities you protected remembered you for generations. Your published works, combining exploration accounts with cultural respect, influenced how future expeditions approached new cultures. At your death, both Spanish reformers and indigenous leaders mourned. Your epitaph: 'He sailed with conquerors, returned with conscience, and spent his life building bridges between worlds.' Your legacy proves that individuals can resist systemic injustice and make real differences."
    },

    help_resistance: {
      title: "The Traitor or Hero?",
      date: "November 1519 - Tenochtitlan",
      text: "You secretly help Montezuma communicate with his generals outside the city. You provide information about Spanish weaknesses and tactics. You sabotage weapons and falsify intelligence.\n\nWhen Cortés discovers your betrayal, you are tortured for information. You refuse to reveal which natives you helped.\n\nYou are executed as a traitor to Spain. But Montezuma, before his own death, ensures your story reaches indigenous historians. In Aztec codices, you are remembered as one of the few Europeans who chose honor over conquest.",
      isEnding: true,
      outcome: "You died at 29, executed by Spanish authorities. But your sacrifice became legendary among indigenous peoples. The intelligence you provided helped prolong Aztec resistance and save lives during the siege. Centuries later, when indigenous historians compiled oral traditions, your name appeared—'the Spaniard who remembered he was human first.' Your choice inspired future acts of resistance and cross-cultural solidarity. While Spain condemned you as a traitor, indigenous communities honored your memory. Your legacy is proof that loyalty to humanity can transcend national and cultural boundaries. Sometimes treason against an unjust cause is the highest form of loyalty to human dignity."
    },

    advocate_for_emperor: {
      title: "The Diplomatic Voice",
      date: "November 1519-June 1520 - Tenochtitlan",
      text: "You publicly advocate for Montezuma's release and fair treatment. You argue that holding an emperor hostage violates diplomatic norms and will only ensure eternal indigenous hostility.\n\nCortés ignores you, but your arguments reach sympathetic clergy and some soldiers. A small faction forms, supporting peaceful coexistence over conquest.\n\nWhen the Aztecs revolt after Spanish massacres during a religious festival, the faction you helped organize advocates for negotiated withdrawal rather than siege.\n\nCortés rejects this, leading to the disastrous 'Noche Triste' where hundreds of Spaniards die fleeing the city. Your faction gains credibility.",
      choices: [
        {
          text: "Push harder for peace negotiations during the siege",
          next: "peace_efforts",
          stats: { humanity: 30, honor: 25, loyalty: -20 }
        },
        {
          text: "Help evacuate indigenous civilians during the siege",
          next: "civilian_evacuation",
          stats: { humanity: 35, honor: 30, loyalty: -15 }
        }
      ]
    },

    neutral_documentation: {
      title: "The Academic Observer",
      date: "1519-1522 - Through the Conquest",
      text: "You focus on documenting Aztec culture, language, and knowledge while trying to remain neutral about the conquest itself. You record their astronomy, medicine, history, and art.\n\nYour documentation preserves invaluable knowledge, but you do not use it to advocate for the people being destroyed. You watch civilizations fall while taking notes.\n\nYou tell yourself that preserving knowledge is important, that future generations will value what you documented. But can neutral observation of atrocity be justified?",
      isEnding: true,
      outcome: "You lived to 65, dying as a respected ethnographer. Your documentation of Aztec civilization became the most complete record of their culture, language, and knowledge. Scholars for centuries used your work. But you were also criticized for documenting genocide without trying to stop it. Indigenous scholars later noted that you preserved their ancestors' knowledge while doing nothing to preserve their ancestors' lives. Your legacy is complex: you saved cultural memory while watching cultures die. Your epitaph asks the question you never answered: 'Is observation without intervention scholarship or complicity?' Your work is invaluable, but your neutrality is forever debated."
    },

    admit_translation: {
      title: "The Honest Mediator",
      date: "April-May 1519 - Coastal Settlements",
      text: "You admit to Cortés that you softened the translation to achieve peace without violence. 'Captain, I obtained cooperation without bloodshed. The mission succeeds through diplomacy.'\n\nCortés is furious but cannot deny the results. The Maya provided gold peacefully. No Spanish casualties occurred.\n\nBut Pedro de Alvarado argues for harsh punishment. 'If translators alter orders, we lose control. He must be made an example.'\n\nFather Bartolomé intervenes: 'He achieved the Captain's goal through Christian means rather than violence. Should we punish success?'\n\nCortés decides your fate.",
      choices: [
        {
          text: "Accept whatever punishment Cortés decrees",
          next: "accept_punishment",
          stats: { honor: 20, humanity: 10 }
        },
        {
          text: "Argue that your methods better serve Spanish interests",
          next: "defend_methods",
          stats: { humanity: 15, honor: 15, loyalty: 5 }
        }
      ]
    },

    deny_alteration: {
      title: "The Liar's Path",
      date: "April 1519 - Cortés's Tent",
      text: "You lie, claiming you translated exactly as ordered and that Pedro misunderstood. Cortés wants to believe you—the peaceful outcome served his purposes.\n\nBut Pedro de Alvarado knows you are lying. He watches you carefully, waiting for another mistake to expose you.\n\nYou have saved yourself through dishonesty, but you have also made a dangerous enemy and proven yourself untrustworthy. The clergy lose respect for you. Other soldiers note your cowardice.\n\nYou continue as translator, but everyone knows you will lie to save yourself.",
      isEnding: true,
      outcome: "You survived the expedition and returned to Spain with modest wealth. But your reputation for dishonesty followed you. You were never trusted with important positions. Your maps and translations were always double-checked. You lived to 57, dying unmemorable and unmourned. Your children knew you as a liar, your wife as a coward. Father Bartolomé mentioned you in his writings as an example of how conquest corrupted even potentially good men: 'Mendoza could have been a bridge between cultures, but fear made him a liar, and lies made him useless.' Your legacy is that self-preservation through dishonesty often achieves neither honor nor security, just survival without meaning."
    },

    troubled_compliance: {
      title: "The Conflicted Servant",
      date: "May-August 1519 - Mexican Coast",
      text: "You admit to Father Bartolomé that your role troubles you, but you feel powerless to change it. 'I am just a translator. What can one man do?'\n\nThe friar responds: 'One man can refuse. One man can speak truth. One man can choose conscience over comfort. The question is: will you?'\n\nYou continue serving as translator through increasingly horrific events. You witness massacres at Cholula. You translate demands that lead to enslavement. Each time, you tell yourself you have no choice.\n\nBut you do have a choice. You simply keep choosing comfort over conscience.",
      choices: [
        {
          text: "Finally reach a breaking point and refuse to continue",
          next: "breaking_point",
          stats: { humanity: 25, honor: 20, loyalty: -20 }
        },
        {
          text: "Continue serving while drowning guilt in alcohol",
          next: "drown_guilt",
          stats: { humanity: -15, honor: -20, loyalty: 10 }
        }
      ]
    },

    defend_service: {
      title: "The Justified Conqueror",
      date: "May 1519 - Coastal Settlements",
      text: "You defend your actions to Father Bartolomé: 'These people practice human sacrifice! They worship false gods! We bring civilization and true faith! Whatever means are necessary serve a greater good!'\n\nThe friar looks at you with profound sadness. 'And so it begins. Good men convince themselves that any cruelty is justified by righteous ends. Diego, you are becoming the very thing you once feared.'\n\nYou dismiss his concerns and continue serving Cortés with increasing enthusiasm. You begin to believe the conquest's propaganda. These are savages who need Spanish civilization.\n\nYou are becoming a monster and do not even realize it.",
      isEnding: true,
      outcome: "You became one of the conquest's most enthusiastic participants, eventually receiving an encomienda with thousands of enslaved natives. You died at 52, wealthy but brutal. Your treatment of indigenous peoples was notorious even by conquest standards. Your own family eventually rejected you—your son, who studied with las Casas, publicly denounced you. You died alone, your wealth unable to buy affection or respect. Your legacy is as a cautionary tale: how good intentions and self-justification can transform ordinary people into instruments of oppression. Las Casas cited you in his writings as proof that conquest corrupted the soul: 'Mendoza arrived in the New World troubled by conscience. He left it having lost his humanity entirely.'"
    },

    confess_crisis: {
      title: "The Awakening",
      date: "May 1519 - Midnight Confession",
      text: "You break down before Father Bartolomé. 'I am facilitating atrocities! My translations enable slavery! I tell myself I have no choice, but that is a lie. I could refuse. I could resist. I am complicit!'\n\nThe friar embraces you as you weep. 'Recognizing this is the first step. Now you must choose: continue complicity or accept the cost of resistance.'\n\nYou spend a sleepless night in prayer and contemplation. By dawn, you have decided.",
      choices: [
        {
          text: "Refuse to continue serving and accept the consequences",
          next: "refuse_to_serve",
          stats: { humanity: 30, honor: 30, loyalty: -30 }
        },
        {
          text: "Continue serving but sabotage from within",
          next: "internal_sabotage",
          stats: { humanity: 25, honor: 20, loyalty: -25 }
        },
        {
          text: "Seek a middle path—serve but advocate for humane treatment",
          next: "advocate_mercy",
          stats: { humanity: 20, honor: 15, loyalty: 5 }
        }
      ]
    },

    dignified_imprisonment: {
      title: "The Principled Prisoner",
      date: "April-May 1519 - Ship's Brig",
      text: "You accept imprisonment with dignity. 'I will not facilitate violence against innocent people. Do what you will.'\n\nCortés keeps you confined during initial contacts with the Maya. Without your language skills, negotiations are more difficult and violent. You hear screams from shore and know your refusal may have cost lives in the short term.\n\nBut Father Bartolomé visits you: 'Diego, your stand has inspired others. Several soldiers have begun questioning orders. Your principled refusal is like a pebble creating ripples.'\n\nAfter a week, Cortés faces a dilemma: execute you publicly (risking mutiny from sympathetic soldiers) or find another use for you.",
      choices: [
        {
          text: "Maintain your refusal even if it means execution",
          next: "maintain_refusal",
          stats: { humanity: 35, honor: 35, loyalty: -35 }
        },
        {
          text: "Offer to serve only in non-combat roles documenting culture",
          next: "compromise_offer",
          stats: { humanity: 20, honor: 20, loyalty: -10 }
        }
      ]
    },

    beg_forgiveness: {
      title: "The Broken Will",
      date: "April 1519 - Ship's Deck",
      text: "Faced with chains and the possibility of execution, your courage fails. You beg Cortés for forgiveness, promising to serve faithfully without question.\n\nCortés accepts, but your capitulation costs you all respect. Soldiers see you as a coward. The clergy see you as someone who abandoned principles under pressure. The natives see you as just another oppressor.\n\nYou serve as translator for the rest of the expedition, but everyone knows you cannot be trusted to stand for anything. You will always fold under pressure.",
      isEnding: true,
      outcome: "You survived the expedition and returned to Spain, but your reputation never recovered. You lived to 55, working menial jobs because no one trusted you with important positions. Your family knew you as the man who had no principles, only survival instincts. Father Bartolomé mentioned you sadly in his writings: 'Mendoza had a chance to stand for something, but fear broke him. He lived, but what he lived for, I cannot say.' You died unmemorable, your grave marked only with dates. Your legacy is that life without principles is not truly living—just breathing and counting days until death. The courage to stand for something matters more than mere survival."
    },

    drown_guilt: {
      title: "The Alcoholic's Decline",
      date: "1519-1524 - Mexico and Spain",
      text: "You drink to silence your conscience. Wine helps you forget the faces of enslaved children, the burned villages, the destroyed temples.\n\nBut the alcohol takes its toll. Your hands shake. Your work becomes sloppy. You become unreliable, then useless.\n\nCortés eventually dismisses you. You return to Spain with some gold but drink it away within a year. You die in a gutter, surrounded by other broken men, destroyed by what you witnessed and enabled.",
      isEnding: true,
      outcome: "You died at 38, your body destroyed by alcohol, your soul destroyed by guilt. You left no family, no legacy, no mark on history except as a cautionary tale. Father Bartolomé wrote of you: 'Mendoza could not live with what he had done, but neither could he find the courage to stop doing it. Alcohol became his escape, and his grave.' Your death was unrecorded, your burial unmourned. You proved that guilt without action destroys the soul. Some who knew you said you died long before your body stopped—killed by the weight of complicity you lacked the courage to shed."
    },

    delayed_action: {
      title: "Better Late Than Never",
      date: "June 1519-1522 - Mexican Conquest",
      text: "You finally act on your conscience. During the siege of Tenochtitlan, you help native families escape. You hide children from slave raids. You falsify maps to slow Spanish advances.\n\nYour late-blooming conscience cannot undo earlier complicity, but it saves some lives. When Cortés discovers your sabotage, you are arrested.\n\nFather Bartolomé testifies on your behalf: 'He came to his senses and chose righteousness, even knowing the cost. That takes courage.'\n\nYou are imprisoned but not executed, sent back to Spain in chains.",
      isEnding: true,
      outcome: "You spent three years in Spanish prisons before being released. You lived another thirty years, dedicating yourself to advocacy for indigenous rights. You could never fully atone for your early complicity, but you spent decades trying. You helped establish schools for indigenous children, fought against the worst abuses of the encomienda system, and preserved accounts of pre-conquest cultures. At 61, you died working at a mission protecting indigenous peoples. Your epitaph, written by las Casas: 'He arrived late to conscience but stayed faithful to its demands once awakened. Redemption is always possible.' Your legacy is hope—that even those who participate in injustice can change course and dedicate their remaining days to repair."
    },

    maintain_refusal: {
      title: "The Martyr's Choice",
      date: "May 1519 - Public Execution",
      text: "Cortés decides to execute you publicly as an example. You are brought before the assembled expedition on a beach, charges of mutiny read aloud.\n\n'Do you have final words?' Cortés asks.\n\nYou look at the assembled soldiers, many avoiding your eyes. Then at the Maya watching from a distance, understanding something important is happening even if they do not understand the Spanish words.\n\n'I regret nothing,' you say clearly. 'I will not help powerful men harm the powerless. Whatever happens to me, my conscience is clear.'",
      isEnding: true,
      outcome: "You were executed at age 29, your body buried on a Mexican beach. But your stand had lasting impact. Several soldiers, inspired by your courage, later refused brutal orders and were imprisoned rather than participate in massacres. Father Bartolomé cited your martyrdom in his writings defending indigenous peoples: 'Young Mendoza gave his life rather than betray his conscience. His blood cries out against unjust conquest.' Decades later, indigenous oral histories recorded a 'Spanish man who died defending native peoples before conquest even began.' Your principled refusal, though it cost your life, planted seeds of resistance. Your legacy is proof that moral courage is not measured by success but by willingness to sacrifice for principle."
    },

    forced_compliance: {
      title: "The Coerced Collaborator",
      date: "May 1519-1521 - Through the Conquest",
      text: "Under threat of death, you agree to serve. But everyone knows you are complying through force, not conviction. Cortés uses you but does not trust you. Soldiers mock you. The natives see you as just another oppressor regardless of your coercion.\n\nYou survive the expedition but at terrible cost. You witnessed and facilitated atrocities while telling yourself you had no choice. But you did have a choice—the one you did not take.\n\nYou return to Spain alive but spiritually dead.",
      isEnding: true,
      outcome: "You lived to 49, dying of illness exacerbated by despair. You never married, never found peace, never forgave yourself for not accepting martyrdom when you had the chance. Father Bartolomé wrote: 'Mendoza chose life over principle and discovered that life without principle is a kind of death.' You worked menial jobs, saved no money, made no friends. Your final years were spent in a charitable hospice, maintained by the Church for the destitute. On your deathbed, you confessed: 'I should have died on that beach rather than live as a coward.' Your legacy is that forced compliance is still compliance, and survival without honor may be worse than honorable death."
    },

    accept_punishment: {
      title: "The Accepting Servant",
      date: "May-June 1519 - Under Discipline",
      text: "You accept Cortés's punishment: fifty lashes and demotion from translator to general laborer. The lashing is public and brutal. You bear it without crying out.\n\nYour acceptance of punishment earns grudging respect from soldiers. Even Cortés notes your courage. After you heal, you are quietly restored to translator duties.\n\nBut now you know: you can soften translations to achieve peace, but only within limits. Push too far, and you will be punished. It is a delicate balance—how much humanity can you preserve while still serving the expedition?",
      choices: [
        {
          text: "Continue carefully softening translations when possible",
          next: "careful_mediation",
          stats: { humanity: 20, honor: 15, loyalty: 5 }
        },
        {
          text: "Translate literally from now on to avoid further punishment",
          next: "literal_compliance",
          stats: { loyalty: 15, humanity: -10, honor: -5 }
        }
      ]
    },

    defend_methods: {
      title: "The Pragmatic Diplomat",
      date: "May-November 1519 - Coastal Expeditions",
      text: "You argue to Cortés: 'Captain, my methods achieved your goals without Spanish casualties or wasted ammunition. Peaceful cooperation serves Spain better than violent conquest. We get gold, supplies, and guides without making eternal enemies.'\n\nCortés considers this. Your argument appeals to his practical side. 'Very well. Continue your diplomatic approach—but understand, if cooperation is not achieved quickly, we will use force.'\n\nYou have won permission to try diplomacy first. It is not perfect, but it is better than immediate violence. You become the expedition's chief negotiator with indigenous peoples.",
      choices: [
        {
          text: "Use your negotiating position to protect natives while serving Spanish interests",
          next: "balanced_diplomat",
          stats: { humanity: 25, honor: 20, loyalty: 10 }
        },
        {
          text: "Exploit your position to enrich yourself while appearing to serve both sides",
          next: "corrupt_diplomat",
          stats: { humanity: -15, honor: -25, loyalty: 5 }
        }
      ]
    },

    breaking_point: {
      title: "No More",
      date: "October 1519 - Cholula Massacre",
      text: "At Cholula, Cortés orders a preemptive massacre based on dubious intelligence of a planned ambush. Thousands of unarmed civilians are slaughtered in a temple courtyard.\n\nYou are ordered to translate justifications to survivors. You cannot do it. You cannot translate words that justify the murder of children.\n\n'No,' you say to Cortés. 'I will not do this anymore. Execute me if you must, but I will not be part of this.'\n\nThe plaza is silent except for the crying of wounded. Everyone stares at you. Cortés's hand moves to his sword.",
      choices: [
        {
          text: "Stand firm and accept whatever comes",
          next: "cholula_stand",
          stats: { humanity: 35, honor: 35, loyalty: -40 }
        },
        {
          text: "Try to run and escape into the countryside",
          next: "escape_cholula",
          stats: { humanity: 20, honor: 10, loyalty: -30 }
        }
      ]
    },

    refuse_to_serve: {
      title: "The Conscious Objector",
      date: "May 1519 - Declaration of Independence",
      text: "You announce to Cortés: 'I will no longer translate orders that lead to enslavement or violence. I will document geography and culture, but I will not facilitate conquest.'\n\nCortés has you arrested immediately. But your public stand resonates. Several soldiers approach Father Bartolomé, also troubled by the expedition's brutality. A small resistance forms within the expedition.\n\nCortés faces a dilemma: execute you and risk open mutiny, or find another solution.",
      choices: [
        {
          text: "Remain imprisoned and become a symbol of resistance",
          next: "symbol_of_resistance",
          stats: { humanity: 30, honor: 30, loyalty: -35 }
        },
        {
          text: "Use your imprisonment to organize resistance among sympathetic soldiers",
          next: "organize_resistance",
          stats: { humanity: 35, honor: 25, loyalty: -40 }
        }
      ]
    },

    internal_sabotage: {
      title: "The Secret Resister",
      date: "May 1519-June 1520 - Covert Operations",
      text: "You continue serving outwardly but sabotage from within. You mistranslate to reduce tensions. You warn natives of planned raids. You hide indigenous children from slavers. You falsify maps to slow the conquest.\n\nFor over a year, you walk a tightrope—appearing loyal while secretly undermining the expedition. You save lives without martyrdom.\n\nBut Pedro de Alvarado grows suspicious. He begins watching you carefully, checking your translations, noting your mistakes.",
      choices: [
        {
          text: "Continue sabotage even as suspicion grows",
          next: "risky_sabotage",
          stats: { humanity: 30, honor: 25, loyalty: -30 }
        },
        {
          text: "Stop sabotage to avoid detection",
          next: "stop_sabotage",
          stats: { humanity: -10, honor: -15, loyalty: 10 }
        }
      ]
    },

    advocate_mercy: {
      title: "The Voice of Moderation",
      date: "May 1519-1521 - Throughout the Conquest",
      text: "You continue serving as translator but consistently advocate for the most humane treatment possible. Before each action, you argue for diplomacy over violence, negotiation over coercion.\n\nSometimes you succeed in softening orders. Sometimes you fail. You save some lives but witness many deaths. You are neither hero nor villain—just someone trying to reduce suffering within an oppressive system.\n\nFather Bartolomé becomes your ally. Together, you document abuses and push for better treatment. It is exhausting, often futile work, but occasionally you make a difference.",
      isEnding: true,
      outcome: "You lived to 69, dying as a respected but controversial figure. You helped draft some of the New Laws protecting indigenous peoples, though they were often violated. You saved hundreds of lives through your advocacy while facilitating a system that killed thousands. Your legacy is deeply ambiguous. Indigenous historians noted: 'Mendoza tried to humanize conquest—but conquest cannot be humane.' Spanish reformers praised your efforts: 'He worked within the system to limit its cruelties.' You died uncertain whether you had done enough, but certain you had done something. Your epitaph asks the question you never answered: 'Is it better to resist from within or refuse to participate? Each person must decide.'"
    },

    compromise_offer: {
      title: "The Cultural Documenter",
      date: "May 1519-1522 - Study and Documentation",
      text: "You offer Cortés a compromise: you will not participate in combat or translate orders for conquest, but you will document native cultures, create maps, and serve as ethnographer.\n\nCortés, needing your skills, reluctantly agrees. You are assigned to work with sympathetic clergy studying indigenous peoples.\n\nYou spend the conquest years documenting Aztec astronomy, medicine, history, and culture. While civilizations fall around you, you preserve their knowledge. Is this enough? Is documentation without intervention moral?",
      isEnding: true,
      outcome: "You lived to 67, dying as a renowned ethnographer. Your documentation of indigenous cultures became foundational to understanding pre-conquest America. Your linguistic work preserved languages that might otherwise have been lost. Universities treasure your manuscripts. But you were also criticized for documenting genocide without trying to stop it. At your funeral, a Nahua scholar spoke: 'Mendoza saved our ancestors' knowledge but not our ancestors. We honor the preservation but question the price.' Your legacy is that cultural preservation is valuable but cannot replace human lives. You proved that even within systems of oppression, knowledge can be protected—but you also showed the limits of neutrality when facing atrocity."
    },

    peace_efforts: {
      title: "The Desperate Negotiator",
      date: "June-August 1521 - Siege of Tenochtitlan",
      text: "During the siege, you repeatedly attempt to negotiate peace. You argue for allowing civilians to evacuate, for accepting Aztec surrender with dignity, for limiting destruction of the great city.\n\nCortés rejects your pleas. He wants total victory, complete subjugation. The siege continues. Disease, starvation, and violence kill tens of thousands.\n\nYou work with Father Bartolomé to document the atrocities, creating evidence for future prosecution. When Tenochtitlan falls, you help evacuate some civilians, saving perhaps a few hundred from immediate slaughter.",
      isEnding: true,
      outcome: "You lived to 66, spending your life testifying about the siege. Your eyewitness accounts helped prosecute some of the worst conquistadors. You worked with las Casas to establish protections for surviving indigenous peoples. You never forgave yourself for not stopping the siege, but the hundreds you evacuated remembered you as their savior. At your funeral, descendants of those you saved spoke of your desperate efforts. Your epitaph: 'He tried to stop what could not be stopped, but saved those he could reach.' Your legacy is that even in failing to prevent atrocity, attempting to limit it has moral value. Effort matters even when success is impossible."
    },

    civilian_evacuation: {
      title: "The Rescue Mission",
      date: "July-August 1521 - Siege of Tenochtitlan",
      text: "While Cortés prosecutes the siege, you organize secret evacuations of civilians—women, children, elderly—through gaps in Spanish lines. Working with sympathetic soldiers and clergy, you save hundreds, perhaps thousands, from the final assault.\n\nIt is dangerous, exhausting work. You are nearly killed several times. But each family that escapes is a victory against total destruction.\n\nWhen the city finally falls, Cortés discovers your rescue operations. You are arrested for treason.",
      isEnding: true,
      outcome: "You spent five years in Spanish prisons, then were released during reforms under Charles V. You lived another thirty years, honored by indigenous communities you saved. Families passed down stories of 'the Spaniard who risked everything to save our grandparents.' You became a symbol of resistance within the system. Las Casas cited you as proof that individual conscience could triumph over orders. You died at 63, surrounded by indigenous families and Spanish reformers. Your grave, maintained by indigenous descendants, reads: 'He chose humanity over orders, mercy over conquest. Generations live because he cared more for people than power.' Your legacy proves that even within systems of oppression, individuals can save lives through courage and compassion."
    },

    ending_testimony: {
      title: "The Witness",
      date: "1522-1560 - Spanish Courts and Beyond",
      text: "You return to Spain and testify at the Council of the Indies. Your detailed documentation of Aztec civilization and conquest brutality sparks the great debate on indigenous rights.\n\nYou spend decades testifying, writing, and advocating. Your eyewitness accounts carry weight that theoretical arguments cannot match. You describe temples you measured, markets you mapped, children you saw enslaved.\n\nYour testimony contributes to the New Laws of 1542, though enforcement is weak. Still, you have shifted the conversation. Indigenous peoples are recognized as fully human, deserving of rights.",
      isEnding: true,
      outcome: "You died at 68, having spent forty years advocating for indigenous rights. Your testimony was cited in legal cases for centuries. Your documentation preserved knowledge of civilizations that were being destroyed. You trained younger advocates, including some indigenous students, to continue the work. At your funeral, representatives from three continents spoke. Your epitaph, written by las Casas: 'He saw what others denied, documented what others ignored, and testified when silence was easier. His voice echoed through history.' Your legacy is that witnessing and speaking truth, even when change is slow, matters profoundly. You proved that documentation and testimony are forms of resistance."
    },

    join_resistance: {
      title: "The Renegade",
      date: "1521-1540 - Indigenous Resistance Movements",
      text: "You escape custody and join indigenous resistance movements. Using your knowledge of Spanish tactics and weapons, you help organize guerrilla operations against colonial forces.\n\nYou are hunted by Spanish authorities, a price on your head. But indigenous communities shelter you, recognizing you as one who chose their side.\n\nFor nearly twenty years, you fight alongside natives resisting conquest. You teach them Spanish military tactics. You translate Spanish intelligence. You become a legend—the European who betrayed his own people for justice.",
      isEnding: true,
      outcome: "You were killed in battle at age 48, fighting alongside Chichimec warriors against a Spanish column. Your body was recovered by your indigenous allies and given full burial honors. Spanish authorities condemned you as a traitor. Indigenous historians honored you as a hero. Centuries later, when Mexico gained independence, you were recognized as an early fighter for indigenous rights. A statue in your honor stands in a town you helped defend. The inscription reads: 'Diego Mendoza—Spaniard by birth, warrior for justice by choice. He showed that loyalty to humanity transcends loyalty to nation.' Your legacy is that betraying an unjust cause is the highest form of loyalty to justice."
    },

    careful_mediation: {
      title: "The Careful Diplomat",
      date: "May 1519-1521 - Walking the Tightrope",
      text: "You carefully soften translations when possible, achieving Spanish goals through diplomacy rather than violence when you can. It is delicate work—push too hard and you are punished, not hard enough and people die.\n\nYou save some lives. You prevent some atrocities. But you also facilitate a conquest. The moral calculus is impossible: are the lives saved worth the complicity?\n\nYou return to Spain with moderate wealth and a troubled conscience.",
      isEnding: true,
      outcome: "You lived to 64, dying of natural causes. You were neither celebrated nor condemned—just a minor figure in a vast conquest. But hundreds of people lived because of your careful mediation. You prevented massacres through diplomatic translations. You were not a hero, but you reduced suffering where you could. At your funeral, a few indigenous people attended—survivors from villages you helped negotiate peace for. One spoke: 'He was not our savior, but when he could choose mercy, he did. That is something.' Your epitaph asks the question you never answered: 'In an unjust system, is reducing harm enough? Or does participation in injustice negate all good?' Your legacy is ambiguous—neither villain nor hero, just human."
    },

    literal_compliance: {
      title: "The Broken Spirit",
      date: "May 1519-1522 - Descent into Complicity",
      text: "After punishment, you translate literally without attempting to soften violence. You tell yourself you have no choice, but really you have simply lost courage.\n\nYou translate orders for enslavement. You facilitate destruction. You become a tool of conquest without resistance.\n\nYou return to Spain with blood money, having lost your soul to fear.",
      isEnding: true,
      outcome: "You died at 51, alone and despised. Even Cortés's supporters found you contemptible—you had shown you would abandon principles under pressure. Indigenous peoples remembered you as 'the translator who chose to harm us.' Spanish reformers cited you as an example of moral failure. Your children changed their names to escape your legacy. You died with wealth but no meaning, comfort but no peace. Your grave was unmarked by your family's request. Las Casas mentioned you briefly: 'Mendoza had a chance to stand for something but chose safety. He lived longer than many, but his life meant less than nothing.' Your legacy is a warning: life preserved through constant moral compromise becomes worthless."
    },

    balanced_diplomat: {
      title: "The Bridge Builder",
      date: "1519-1565 - Decades of Mediation",
      text: "You spend decades as a mediator between Spanish and indigenous peoples. You negotiate treaties that preserve some indigenous autonomy. You establish trade relationships that benefit both sides. You prevent some conflicts through patient diplomacy.\n\nIt is imperfect work. You cannot stop all injustice. But you create spaces where indigenous cultures survive, where accommodation prevents extinction.\n\nYou become famous as the 'Bridge'—someone trusted by both cultures, though fully accepted by neither.",
      isEnding: true,
      outcome: "You lived to 73, dying as a respected elder statesman. The communities where you mediated maintained peace longer than those without such advocates. You helped preserve indigenous rights in specific localities even as colonialism spread. At your funeral, both Spanish officials and indigenous leaders spoke. Your epitaph: 'He built bridges when others built walls. He sought peace when others sought power.' Your legacy is that within imperfect systems, reducing harm through skillful mediation has value. You were not a revolutionary but a pragmatist who saved lives and preserved cultures through careful navigation of power. Sometimes revolution is impossible, but amelioration is still worthwhile."
    },

    corrupt_diplomat: {
      title: "The Exploiter",
      date: "1519-1530 - Profiting from Misery",
      text: "You use your position to enrich yourself. You translate in ways that favor whoever pays you more. You exploit both Spanish and indigenous peoples for personal gain.\n\nYou grow wealthy by being untrustworthy to everyone. But wealth built on exploitation brings no peace.\n\nYou die relatively young, poisoned by someone you betrayed. No one mourns you.",
      isEnding: true,
      outcome: "You died at 42, murdered by someone you had cheated—Spanish and indigenous suspects both, never solved. Your wealth was stolen, your family impoverished. No one attended your funeral. Your grave was vandalized repeatedly until authorities stopped maintaining it. You became a byword for corruption and betrayal. Even centuries later, 'pulling a Mendoza' meant exploiting a position of trust for personal gain. Your legacy is that self-interest without principle leads to universal contempt. You gained wealth but lost humanity, and in the end lost everything. Your story became a cautionary tale told to warn others against mercenary morality."
    },

    cholula_stand: {
      title: "The Cholula Witness",
      date: "October 1519 - Public Defiance",
      text: "You stand in the blood-soaked plaza and refuse. Cortés advances on you, but Father Bartolomé steps between you.\n\n'Captain, will you murder another man in this place of slaughter? Will you prove Diego's point about our barbarity?'\n\nCortés hesitates. Soldiers watch. Some look ashamed. The moment crystallizes the moral horror of what has just happened.\n\nCortés has you imprisoned but does not execute you. Your public stand has complicated his narrative of righteous conquest. You become a witness to atrocity.",
      isEnding: true,
      outcome: "You spent three years imprisoned before being sent back to Spain. There, you testified at length about the Cholula massacre and other atrocities. Your eyewitness account was devastating—you could describe exactly what happened because you were there. Your testimony helped spark the New Laws protecting indigenous peoples. You lived to 62, spending your life documenting conquest atrocities and advocating for indigenous rights. At your funeral, Cholula survivors attended—families who had escaped the massacre. One elder said: 'Mendoza refused to make excuses for murder. His witness gave us voice.' Your gravestone reads: 'He saw evil and named it, though naming it cost him everything.' Your legacy is that bearing witness to atrocity, even when you cannot prevent it, serves justice."
    },

    escape_cholula: {
      title: "The Fugitive's Flight",
      date: "October 1519-1525 - On the Run",
      text: "You run from the massacre, fleeing into the countryside. Spanish soldiers pursue, but you escape with help from indigenous people fleeing the same horror.\n\nYou live as a fugitive, moving from village to village, hunted by Spanish authorities. Indigenous communities shelter you because you refused to justify their massacre.\n\nYou spend years on the run, never safe, never settled, but free of complicity.",
      isEnding: true,
      outcome: "You were captured in 1525 and executed as a deserter. But during your years as a fugitive, you helped hundreds of indigenous families escape Spanish control, taught them Spanish tactics, and became a symbol of resistance. Indigenous oral histories remember 'the Spaniard who ran from massacre and ran toward justice.' Your execution was attended by indigenous witnesses who honored your choice. Your legacy is that sometimes flight from evil is its own form of resistance. You could not stop Cholula's massacre, but by refusing to justify it and helping its survivors, you proved that individual conscience matters even in the face of overwhelming power."
    },

    symbol_of_resistance: {
      title: "The Imprisoned Conscience",
      date: "May 1519-August 1521 - Prison as Platform",
      text: "You remain imprisoned throughout the conquest, your presence a constant reminder to other soldiers that resistance is possible. Sympathetic soldiers visit you secretly. Your imprisonment becomes a rallying point for those troubled by the expedition's brutality.\n\nWhen Tenochtitlan falls, Cortés faces pressure to release you from soldiers who were inspired by your stand. You emerge from imprisonment to find a changed dynamic—some soldiers openly question orders now.\n\nYour principled stand has created space for others to resist.",
      isEnding: true,
      outcome: "You lived to 65, becoming a prominent advocate for indigenous rights. Your imprisonment during the conquest gave you moral authority—you had refused to participate. You helped draft the New Laws and trained indigenous students in European law so they could defend their communities. At your funeral, over a hundred people testified about how your imprisoned stand had inspired them to resist unjust orders. Your epitaph: 'He chose prison over participation, and his captivity freed others to follow conscience.' Your legacy is that principled resistance, even when it does not immediately succeed, creates space for others to resist. You proved that refusing complicity matters even when refusal changes nothing immediately."
    },

    organize_resistance: {
      title: "The Prison Organizer",
      date: "May 1519-November 1519 - Internal Revolution",
      text: "From prison, you organize sympathetic soldiers into a resistance network. Using messages smuggled by Father Bartolomé, you coordinate refusals of the worst orders, evacuations of indigenous civilians, and documentation of atrocities.\n\nYour prison cell becomes headquarters for internal resistance. Cortés discovers the network and plans mass executions to restore control.\n\nBut the night before executions, your network mutinies. They free you and several other imprisoned resisters, then desert the expedition. Nearly forty soldiers abandon Cortés.",
      isEnding: true,
      outcome: "You lived another forty-five years, dying at 71. Your mutiny weakened Cortés's forces and delayed the conquest. The soldiers who deserted with you formed a community that protected indigenous peoples from Spanish raids. You became a legendary figure—the man who organized resistance from a prison cell. Historians debate whether your mutiny saved or cost lives, but indigenous communities you protected honored you as a hero. Your epitaph: 'He turned a prison cell into a command post for conscience. Bars did not contain his resistance.' Your legacy is that even imprisonment cannot stop determined moral resistance. You proved that organization and courage can create change even from positions of powerlessness."
    },

    risky_sabotage: {
      title: "The Exposed Saboteur",
      date: "June 1520 - Discovery and Trial",
      text: "Pedro de Alvarado catches you warning indigenous families of a planned raid. You are arrested and charged with treason.\n\nAt your trial, you confess everything: the mistranslations, the warnings, the hidden children, the falsified maps. 'I am guilty of trying to prevent atrocities,' you say. 'If that is treason, I accept the charge.'\n\nCortés could execute you, but your confession has made you a public figure. Sympathetic soldiers and clergy rally to your defense. Your trial becomes a referendum on the conquest itself.",
      isEnding: true,
      outcome: "You were imprisoned for two years, then released when Charles V demanded accounting of conquest abuses. You spent the next forty years testifying about those abuses. Your sabotage had saved dozens of families, and they testified on your behalf. You became a hero to indigenous peoples and Spanish reformers alike. You lived to 68, dying while compiling a dictionary of indigenous languages—preservation work that complemented your earlier sabotage. Your epitaph: 'He served by sabotaging, saved by betraying, and loved by defying.' Your legacy is that covert resistance within oppressive systems can save lives, and that moral sabotage is sometimes the highest form of service to humanity."
    },

    stop_sabotage: {
      title: "The Frightened Conformist",
      date: "June 1520-1522 - Return to Complicity",
      text: "Afraid of discovery, you stop your sabotage and return to dutiful service. You translate accurately, facilitate conquest efficiently, and no longer warn indigenous peoples.\n\nThe families you previously saved are rounded up by raids you no longer sabotage. You see them enslaved and know you could have warned them but chose safety instead.\n\nYou return to Spain with blood money, your brief moment of conscience crushed by fear.",
      isEnding: true,
      outcome: "You died at 55, wealthy but despised by those who knew your full story. Father Bartolomé wrote harshly of you: 'Mendoza showed us that moral cowardice can be worse than evil intent. He knew what was right, briefly did right, then abandoned righteousness for security.' Indigenous communities you once helped but later betrayed remembered you with particular bitterness—you had shown them hope, then withdrawn it. Your grave was unmarked. Your legacy is that starting on the path of conscience but abandoning it for fear can be worse than never starting at all. Half-measures in morality often mean complete failure."
    },

    literal_translation: {
      title: "The Willing Tool",
      date: "April-November 1519 - Facilitating Conquest",
      text: "You translate every brutal order exactly, telling yourself you are just doing your job. You facilitate demands for gold, threats of violence, and orders for enslavement.\n\nYou watch villages burned, people enslaved, cultures destroyed—all with your translations enabling it. You drink heavily to sleep at night.\n\nBy the time you reach Tenochtitlan, you have become a shell of yourself, existing only to serve conquest.",
      isEnding: true,
      outcome: "You died at 46 of alcohol-related illness. Your translations facilitated the enslavement of thousands. You were mentioned in indigenous oral histories as 'the voice of the Spanish demons—he spoke their evil in our language.' You left no family, no friends, no positive legacy. Father Bartolomé wrote: 'Mendoza claimed to be just a translator, but words have power. By lending his voice to cruelty, he enabled it. His compliance was complicity.' Your unmarked grave was vandalized repeatedly. Your legacy is that 'just following orders' or 'just doing your job' is never sufficient moral justification. Those who lend their skills to oppression are responsible for oppression."
    }
  };

  const currentSceneData = scenes[currentScene];

  if (!currentSceneData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-950 via-cyan-900 to-black flex items-center justify-center">
        <div className="text-white text-center p-8">
          <Skull className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
          <p className="text-xl mb-4">Scene not found: {currentScene}</p>
          <button 
            onClick={onBack} 
            className="px-6 py-3 bg-cyan-700 hover:bg-cyan-600 rounded-lg transition-all"
          >
            Return to Timeline
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-cyan-900 to-black relative overflow-hidden">
      {/* Decorative ocean/exploration elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-9xl">⚓</div>
        <div className="absolute bottom-10 right-10 text-9xl">🗺️</div>
        <div className="absolute top-1/2 left-1/4 text-6xl">🧭</div>
      </div>

      {/* Stats Panel */}
      <div className="fixed top-4 right-4 bg-slate-900/90 backdrop-blur-sm border-2 border-cyan-800/60 rounded-lg p-4 z-20 w-64">
        <h3 className="text-cyan-400 font-serif font-bold mb-3 text-center">Your Character</h3>
        
        <div className="space-y-3">
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-cyan-300 text-sm flex items-center gap-2">
                <Heart className="w-4 h-4" />
                Humanity
              </span>
              <span className="text-cyan-200 text-sm font-bold">{stats.humanity}%</span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-rose-600 to-pink-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${stats.humanity}%` }}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-cyan-300 text-sm flex items-center gap-2">
                <Ship className="w-4 h-4" />
                Loyalty to Spain
              </span>
              <span className="text-cyan-200 text-sm font-bold">{stats.loyalty}%</span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-blue-600 to-cyan-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${stats.loyalty}%` }}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-cyan-300 text-sm flex items-center gap-2">
                <Compass className="w-4 h-4" />
                Personal Honor
              </span>
              <span className="text-cyan-200 text-sm font-bold">{stats.honor}%</span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-amber-600 to-yellow-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${stats.honor}%` }}
              />
            </div>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-cyan-800/40">
          <p className="text-cyan-400/70 text-xs text-center italic">
            Your choices define who you are
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-8 max-w-4xl">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-cyan-300 hover:text-cyan-100 transition-colors mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Return to Timeline</span>
        </button>

        {/* Story Card */}
        <div className="bg-slate-900/80 backdrop-blur-sm border-2 border-cyan-800/60 rounded-lg overflow-hidden shadow-2xl">
          {/* Header */}
          <div className="bg-gradient-to-r from-cyan-900 to-blue-900 p-6 border-b-2 border-cyan-800/60">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <Anchor className="w-8 h-8 text-cyan-300" />
                <div>
                  <h2 className="text-3xl font-serif font-bold text-cyan-300">
                    {currentSceneData.title}
                  </h2>
                  <p className="text-cyan-400/80 text-sm italic">{currentSceneData.date}</p>
                </div>
              </div>
              {currentSceneData.isEnding && (
                <div className="flex items-center gap-2 bg-cyan-700/30 px-3 py-1 rounded-full">
                  <Skull className="w-4 h-4 text-cyan-300" />
                  <span className="text-cyan-300 text-sm font-bold">Ending</span>
                </div>
              )}
            </div>
          </div>

          {/* Story Text */}
          <div className="p-8">
            <div className="prose prose-invert max-w-none">
              {currentSceneData.text.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-cyan-100 text-lg leading-relaxed mb-4 font-serif">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Ending Outcome */}
            {currentSceneData.isEnding && currentSceneData.outcome && (
              <div className="mt-8 p-6 bg-cyan-900/20 border-2 border-cyan-700/50 rounded-lg">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-cyan-300 font-serif font-bold text-xl mb-2">Your Legacy</h3>
                    <p className="text-cyan-200 leading-relaxed">
                      {currentSceneData.outcome}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Choices */}
            {!currentSceneData.isEnding && currentSceneData.choices && (
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-2 text-cyan-400 font-serif font-bold">
                  <span className="text-lg">Choose your path:</span>
                </div>
                {currentSceneData.choices.map((choice, index) => (
                  <button
                    key={index}
                    onClick={() => makeChoice(choice.next, choice.text, choice.stats)}
                    className="w-full text-left p-5 bg-gradient-to-r from-slate-800/50 to-cyan-950/30 hover:from-cyan-900/40 hover:to-blue-900/40 border-2 border-cyan-800/40 hover:border-cyan-600 rounded-lg transition-all duration-300 group"
                  >
                    <p className="text-cyan-200 group-hover:text-cyan-100 font-serif leading-relaxed">
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
                    setStats({ humanity: 50, loyalty: 50, honor: 50 });
                  }}
                  className="flex-1 px-6 py-3 bg-cyan-700 hover:bg-cyan-600 text-white font-serif font-semibold rounded-lg transition-all duration-300"
                >
                  Play Again
                </button>
                <button
                  onClick={onBack}
                  className="flex-1 px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-serif font-semibold rounded-lg transition-all duration-300"
                >
                  Choose Different Timeline
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Choice History */}
        {choices.length > 0 && !currentSceneData.isEnding && (
          <div className="mt-6 bg-slate-900/60 backdrop-blur-sm border border-cyan-800/40 rounded-lg p-4">
            <h3 className="text-cyan-400 font-serif font-bold mb-3 text-sm">Your Journey So Far:</h3>
            <div className="space-y-2">
              {choices.map((choice, index) => (
                <div key={index} className="flex items-start gap-2">
                  <span className="text-cyan-600 text-xs mt-1">▸</span>
                  <p className="text-cyan-300/70 text-xs">{choice}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap');
      `}</style>
    </div>
  );
};

export default ExplorationStory;

    clergy_protection: {
      title: "Under Holy Protection",
      date: "April-November 1519 - Mexican Expedition",
      text: "Father Bartolomé and other Dominican friars provide you protection. Cortés, while ruthless, is careful about openly defying clergy—appearances matter for his standing with the Church.\n\nYou work primarily with the religious contingent, documenting native cultures and languages. You witness the conflicted mission of the friars—some genuinely want to understand and protect natives, others see conversion as justifying conquest.\n\nYou meet native leaders and learn their languages. You document their astronomy, their mathematics, their architecture. You realize these civilizations have knowledge Europe lacks.\n\nWhen Cortés imprisons the Aztec emperor Montezuma, you are present as translator. Montezuma speaks to you with dignity: 'Why do you aid these invaders? You are a man of learning. Do you not see what they will destroy?'\n\nHis words haunt you.",
      choices: [
        {
          text: "Help Montezuma send secret messages to his people to resist",
          next: "help_resistance",
          stats: { humanity: 30, honor: 25, loyalty: -30 }
        },
        {
          text: "Advocate publicly for Montezuma's release and fair treatment",
          next: "advocate_for_emperor",
          stats: { humanity: 20, honor: 20, loyalty: -15 }
        },
        {
          text: "Continue documenting Aztec culture while staying neutral",
          next: "neutral_documentation",
          stats: { humanity: 10, honor: 10 }
        }
      ]
    },

    soften_translation: {
      title: "The Mediator's Art",
      date: "April 1519 - First Contact",
      text: "You translate Cortés's ultimatum but add: 'The Spanish captain seeks alliance and trade. He offers protection and friendship in exchange for cooperation. He does not wish violence but seeks mutual benefit.'\n\nCortés cannot speak Maya and does not realize you have softened his demands. The Maya chief, reading between your words, agrees to limited cooperation while maintaining dignity.\n\nA tentative peace is established. The Maya provide some gold and food. Cortés is satisfied for now. Violence is avoided.\n\nBut Pedro de Alvarado, who knows some indigenous languages, suspects you altered the translation. He reports this to Cortés.\n\nThat night, you are summoned to the Captain's tent.",
      choices: [
        {
          text: "Admit you softened the translation to achieve peace",
          next: "admit_translation",
          stats: { humanity: 15, honor: 20, loyalty: -10 }
        },
        {
          text: "Deny altering the translation and claim misunderstanding",
          next: "deny_alteration",
          stats: { honor: -15, loyalty: 5 }
        }
      ]
    },

    literal_translation: {
      title: "The Professional Distance",
      date: "April-May 1519 - Yucatan Coast",
      text: "You translate exactly as ordered. The Maya chief's face darkens. He confers with his warriors.\n\nThen he agrees, but you see in his eyes that this is submission under threat, not true acceptance. The Maya provide gold and food, but the atmosphere is tense.\n\nThat night, some Maya attempt to flee with their families. Spanish soldiers catch them and Cortés orders harsh punishment as an example. You are forced to translate his justifications to the remaining natives.\n\nYou tell yourself you are just a translator, just following orders. But the terror in the natives' eyes suggests they see you as complicit.\n\nFather Bartolomé approaches you. 'Diego, you translate words of violence without protest. Does this not trouble you?'",
      choices: [
        {
          text: "Admit it troubles you but claim you have no choice",
          next: "troubled_compliance",
          stats: { humanity: 5, honor: -5 }
        },
        {
          text: "Defend your actions as necessary service to Spain",
          next: "defend_service",
          stats: { loyalty: 15, humanity: -15 }
        },
        {
          text: "Break down and confess your moral crisis to the friar",
          next: "confess_crisis",
          stats: { humanity: 20, honor: 10 }
        }
      ]
    },

    refuse_ultimatum: {
      title: "The Mutineer",
      date: "April 1519 - Beach Confrontation",
      text: "You turn to face Cortés. 'Captain, I will not deliver threats of violence to people who have done us no harm. We should seek trade and peace, not conquest.'\n\nThe beach falls silent. Soldiers stare in disbelief. No one defies Cortés openly.\n\n'You refuse a direct order?' Cortés's hand moves to his sword. 'That is mutiny.'\n\nFather Bartolomé steps forward. 'Captain, perhaps the translator makes a valid point. Peaceful relations serve Spain better than—'\n\n'Silence!' Cortés roars. He orders you arrested. 'Chain him. He will face military tribunal aboard ship.'\n\nAs soldiers bind your hands, you see varied reactions: some look at you with contempt, others with hidden admiration. The Maya watch with confusion, unsure what is happening.\n\nYou face imprisonment, possibly execution, for refusing to facilitate conquest.",
      choices: [
        {
          text: "Accept imprisonment with dignity, standing by your refusal",
          next: "dignified_imprisonment",
          stats: { humanity: 30, honor: 30, loyalty: -30 }
        },
        {
          text: "Beg for mercy and agree to follow orders",
          next: "beg_forgiveness",
          stats: { humanity: -20, honor: -25, loyalty: 10 }
        }
      ]
    },

    join_landing: {
      title: "The Complicit Observer",
      date: "April-June 1519 - Mexican Coast",
      text: "You join the landing parties, documenting geography and translating when needed. You tell yourself you are just doing your job, not making the decisions.\n\nBut your maps guide the conquest. Your translations facilitate demands for gold and submission. Your skills enable the expedition's goals.\n\nYou witness the Maya being forced into labor. You see villages burned for resistance. You document it all in your journals but take no action to stop it.\n\nOne day, a young Maya woman, captured and enslaved, speaks to you in broken Spanish. 'Why you help bad men? You have kind face but help hurt people.'\n\nYou have no answer. That night, you drink heavily to silence your conscience.",
      choices: [
        {
          text: "Continue your work while drinking to cope with guilt",
          next: "drown_guilt",
          stats: { humanity: -10, honor: -15, loyalty: 10 }
        },
        {
          text: "Finally act on your conscience and try to help natives",
          next: "delayed_action",
          stats: { humanity: 20, honor: 15, loyalty: -15 }
        }
      ]
    },

    refuse_landing: {
      title: "The Line in the Sand",
      date: "April 1519 - Aboard Ship",
      text: "You refuse. 'Captain, I will not participate in conquest. I signed on as a cartographer, not an instrument of subjugation.'\n\nCortés's face darkens. 'You refuse orders?'\n\n'I refuse to use my skills to harm innocent people,' you reply, your voice shaking but firm.\n\nCortés has you confined to the ship under guard. 'You will reconsider or face charges of mutiny,' he warns.\n\nFor days, you remain imprisoned while the expedition makes first contact without you. Through the porthole, you see natives being brought aboard in chains. You hear screams from the shore.\n\nFather Bartolomé visits you. 'Diego, your stand is noble but may cost your life. Cortés is discussing your execution as an example.'",
      choices: [
        {
          text: "Maintain your refusal even facing execution",
          next: "maintain_refusal",
          stats: { humanity: 35, honor: 35, loyalty: -35 }
        },
        {
          text: "Agree to serve to save your life",
          next: "forced_compliance",
          stats: { humanity: -10, honor: -20, loyalty: 15 }
        }
      ]
    },

    ending_sanctuary: {
      title: "The Monastery Scribe",
      date: "1519-1548 - Seville and Beyond",
      text: "You spend your life in monasteries, using your cartography skills to copy and illuminate manuscripts. You hear reports of Cortés's conquest—the fall of Tenochtitlan, the subjugation of the Aztec Empire, the death of thousands.\n\nYou are safe, but you wonder: could you have made a difference? Could your voice have saved lives?\n\nFather Bartolomé, now famous for defending indigenous rights, visits you years later. 'You made the right choice, Diego. One man could not have stopped Cortés. You saved your soul by not participating.'\n\nBut still you wonder.",
      isEnding: true,
      outcome: "You lived to 72, dying peacefully in a monastery. You produced beautiful maps and manuscripts, teaching younger monks your skills. You never married, never gained wealth or fame, but you kept your conscience clear. When news reached you of the atrocities committed during the conquest, you grieved but knew you bore no responsibility. In your later years, you corresponded with Bartolomé de las Casas, contributing to his writings defending indigenous peoples. Your choice to walk away inspired others to refuse unjust orders. Your gravestone reads: 'He chose not to sail when the voyage meant betraying his principles.' A quiet life, but an honorable one."
    },

    flee_spain: {
      title: "The Exile",
      date: "1519-1540 - Portugal and Beyond",
      text: "You flee to Portugal, then to Italy, always moving to stay ahead of Spanish authorities. You work as a cartographer under assumed names, never revealing your connection to the Cortés expedition.\n\nYou live in constant fear of discovery. You never marry, never settle, never truly find peace.\n\nYears later, you hear of the conquest's aftermath—millions dead from disease and violence, cultures destroyed, civilizations erased. You tell yourself you bear no responsibility, having refused to participate.\n\nBut loneliness and fear are your constant companions.",
      isEnding: true,
      outcome: "You died at 51 in Venice, alone in a rented room. Your maps, created under false names, contributed to European knowledge but brought you no recognition. Your choice to flee, while avoiding complicity, also meant a life of fear and isolation. You never built connections, never had a family, never found a home. On your deathbed, you wondered if there had been a middle path—a way to resist without running, to stand for something without standing alone. Your death went unrecorded, your grave unmarked. You avoided participating in conquest but paid the price of perpetual exile. Sometimes refusing to engage means forfeiting the chance to make a difference."
    },

    suppress_doubts: {
      title: "The Conqueror",
      date: "1519-1521 - Fall of Tenochtitlan",
      text: "You become Cortés's most trusted lieutenant. Your maps guide the siege of Tenochtitlan. Your translations facilitate negotiations that are really just opportunities to learn weaknesses for exploitation.\n\nYou are present when Tenochtitlan falls. The city burns. Thousands die. An entire civilization collapses. You stand in the ruins of the great temple, now destroyed, and see Aztec children being led away in chains.\n\nYou return to Spain wealthy. You buy a fine estate. You are celebrated as a hero of the conquest.\n\nBut you drink heavily. You cannot sleep without nightmares. You see their faces—the natives you helped enslave and destroy.",
      isEnding: true,
      outcome: "You lived to 59, dying of liver failure from alcoholism. Your wealth meant nothing—you spent it trying to drown your guilt. Your children grew up with a father who was physically present but emotionally destroyed. Near the end, you confessed everything to Father Bartolomé, now famous for defending indigenous rights. He said: 'Gold bought with blood never brings peace.' Your will left money to support indigenous peoples, but it was too little, too late. Your legacy is cautionary: success built on others' suffering corrupts the soul. Your gravestone bears only your name and dates—your family could not bear to add achievements that shamed them. You gained the world but lost yourself."
    },

    late_conscience: {
      title: "The Repentant",
      date: "1520-1565 - Mexico and Spain",
      text: "During the siege of Tenochtitlan, you finally act. You secretly help native families escape the city. You hide indigenous children from soldiers seeking slaves. You falsify maps to slow Spanish advance.\n\nCortés discovers your betrayal during the final assault. You are arrested and sent back to Spain in chains, accused of treason.\n\nBut Father Bartolomé, now Bartolomé de las Casas, speaks in your defense. Your documentation of Aztec culture becomes crucial evidence of their sophisticated civilization. Your trial becomes public, exposing conquest atrocities.\n\nYou spend five years imprisoned, then are released. You dedicate the rest of your life to advocating for indigenous rights.",
      isEnding: true,
      outcome: "You lived to 73, dying while working on a manuscript about Aztec civilization. Your late-life activism helped establish some protections for indigenous peoples in Spanish law. You never fully atoned for your early complicity, but you spent decades trying. Families you saved during the siege kept your memory alive in indigenous communities. Your published works, combining maps with cultural documentation, preserved knowledge of pre-conquest civilizations. At your funeral, both Spanish reformers and indigenous representatives spoke. Your epitaph, written by de las Casas: 'He sailed with conquerors but returned with conscience.' Your legacy is complex—early complicity followed by genuine redemption. You proved change is possible, even after terrible mistakes."
    },

    honest_documentation: {
      title: "The Truth-Teller",
      date: "August 1519 - Tenochtitlan",
      text: "You document Tenochtitlan honestly: its vast markets, sophisticated aquaducts, intricate social organization, magnificent architecture. Your maps and reports describe a city rivaling any in Europe.\n\nCortés is furious. 'You make them sound civilized! You undermine our mission!'\n\n'They ARE civilized, Captain. More so than us in many ways.'\n\nCortés confiscates your journals and has you confined. But Father Bartolomé smuggled out copies of your work before the confiscation.\n\nYour honest documentation reaches Spain and creates controversy. Some use it to argue for humane treatment of natives. Others call you a traitor for not supporting Spanish supremacy claims.\n
