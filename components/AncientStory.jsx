import React, { useState } from 'react';
import { ArrowLeft, Scroll, Heart, Skull, Crown, AlertTriangle } from 'lucide-react';

const AncientStory = ({ onBack }) => {
  const [currentScene, setCurrentScene] = useState('intro');
  const [choices, setChoices] = useState([]);
  const [stats, setStats] = useState({
    loyalty: 50,
    morality: 50,
    influence: 30
  });

  const updateStats = (statChanges) => {
    setStats(prev => ({
      loyalty: Math.max(0, Math.min(100, prev.loyalty + (statChanges.loyalty || 0))),
      morality: Math.max(0, Math.min(100, prev.morality + (statChanges.morality || 0))),
      influence: Math.max(0, Math.min(100, prev.influence + (statChanges.influence || 0)))
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
      title: "The Ides of March Approach",
      date: "March 14, 44 BCE",
      text: "You are Marcus Junius, a mid-ranking senator in the Roman Republic. The marble halls of the Senate echo with whispered conspiracies. Julius Caesar has declared himself Dictator Perpetuo—dictator for life. Some call it the death of the Republic; others see it as necessary stability after years of civil war.\n\nYour old friend Gaius Cassius Longinus approaches you in the Forum, his face grave. 'Marcus,' he whispers urgently, 'walk with me. We must speak privately.' His hand rests on your shoulder, and you notice the tension in his grip.\n\nThe afternoon sun casts long shadows across the ancient stones. Whatever Cassius has to say, you sense it will change everything.",
      choices: [
        {
          text: "Walk with Cassius and hear what he has to say",
          next: "conspiracy_revealed",
          stats: { loyalty: -5 }
        },
        {
          text: "Politely decline and distance yourself from political intrigue",
          next: "avoid_conspiracy",
          stats: { morality: 5, loyalty: 10 }
        },
        {
          text: "Agree, but remain cautious and non-committal",
          next: "cautious_approach",
          stats: { influence: 5 }
        }
      ]
    },

    conspiracy_revealed: {
      title: "The Plot Unfolds",
      date: "March 14, 44 BCE - Evening",
      text: "In the shadowed colonnade of the Temple of Saturn, Cassius reveals the conspiracy. 'Caesar has become a tyrant,' he says, his voice barely above a whisper. 'Tomorrow, on the Ides of March, we will restore the Republic. Brutus has joined us—even he, whom Caesar loves as a son.'\n\nHe produces a list of names. You recognize many: Brutus, Casca, Cimber, and over sixty others. 'We need men of principle, Marcus. Men who remember what Rome once was. Will you stand with us?'\n\nYour heart pounds. This is treason—or is it patriotism? Caesar has brought peace, but at what cost to Roman liberty?",
      choices: [
        {
          text: "Join the conspiracy—the Republic must be preserved",
          next: "join_conspirators",
          stats: { loyalty: -20, morality: 10, influence: 15 }
        },
        {
          text: "Refuse and warn Caesar of the plot",
          next: "warn_caesar",
          stats: { loyalty: 30, morality: -15, influence: -10 }
        },
        {
          text: "Tell Cassius you need time to consider such a grave decision",
          next: "delay_decision",
          stats: { influence: 5 }
        }
      ]
    },

    avoid_conspiracy: {
      title: "The Path of Caution",
      date: "March 14, 44 BCE - Evening",
      text: "You politely excuse yourself from Cassius, citing pressing family matters. His eyes show disappointment, but he nods curtly. As you walk away, you feel the weight of unspoken words.\n\nThat evening, your wife Claudia confronts you. 'I saw you with Cassius. Everyone knows something is brewing. The household slaves whisper of omens—owls hooting at noon, a lioness whelping in the streets. Whatever is coming, Marcus, our family will be caught in it.'\n\nShe grips your arm. 'You must choose a side, or we will be crushed between them.'",
      choices: [
        {
          text: "Decide to seek an audience with Caesar and pledge your loyalty",
          next: "pledge_to_caesar",
          stats: { loyalty: 25, influence: 10 }
        },
        {
          text: "Try to warn both sides and mediate peace",
          next: "attempt_mediation",
          stats: { morality: 15, influence: -5 }
        },
        {
          text: "Prepare to leave Rome with your family until the crisis passes",
          next: "flee_rome",
          stats: { loyalty: -10, morality: 5 }
        }
      ]
    },

    cautious_approach: {
      title: "A Dangerous Dance",
      date: "March 14, 44 BCE - Evening",
      text: "You walk with Cassius, listening carefully but committing to nothing. He speaks of tyranny, of stolen liberty, of senators reduced to mere ornaments in Caesar's court. His passion is evident, his arguments compelling.\n\n'Think on it, Marcus,' he concludes. 'But decide quickly. Tomorrow, the Republic will be reborn—with or without you.' He clasps your arm in the Roman fashion and disappears into the gathering dusk.\n\nAt home, you find a sealed letter on your writing table. The wax bears Caesar's personal seal. Inside, a brief message: 'Marcus Junius, attend me at the Senate tomorrow. I have a proposal that will elevate your family's position. Your friend, Caesar.'",
      choices: [
        {
          text: "Attend the Senate tomorrow and see how events unfold",
          next: "attend_senate",
          stats: { influence: 10 }
        },
        {
          text: "Send word to Caesar warning him of danger",
          next: "warn_caesar",
          stats: { loyalty: 20, morality: -10 }
        },
        {
          text: "Go to Cassius and pledge yourself to the conspiracy",
          next: "late_joining",
          stats: { loyalty: -15, morality: 5, influence: 10 }
        }
      ]
    },

    join_conspirators: {
      title: "Blood on the Senate Floor",
      date: "March 15, 44 BCE - The Senate",
      text: "The morning arrives heavy with fate. You take your place among the conspirators, a concealed dagger beneath your toga. Caesar enters, magnificent in his purple-trimmed toga, greeting senators by name. He sees you and smiles—a genuine smile of friendship.\n\nTillius Cimber approaches Caesar with a petition. It's the signal. Casca strikes first, but his blade only grazes Caesar's neck. Suddenly, all of you are upon him—a storm of daggers in the sacred Senate chamber.\n\nCaesar fights back, but there are too many. He pulls his toga over his head as the blades fall. You hold your dagger, the moment frozen. Your hand shakes.",
      choices: [
        {
          text: "Strike Caesar—complete what you've committed to",
          next: "strike_caesar",
          stats: { loyalty: -30, morality: -20, influence: 20 }
        },
        {
          text: "Step back and refuse to strike",
          next: "refuse_strike",
          stats: { loyalty: -10, morality: 15, influence: -15 }
        },
        {
          text: "Try to stop the assassination",
          next: "stop_assassination",
          stats: { loyalty: 20, morality: 20, influence: -25 }
        }
      ]
    },

    warn_caesar: {
      title: "The Warning",
      date: "March 15, 44 BCE - Dawn",
      text: "You send an urgent message to Caesar's residence, requesting an immediate private audience. Within an hour, you're admitted to his presence. Caesar, still in his sleeping robes, listens intently as you reveal the conspiracy.\n\nHis face remains impassive as you name names: Brutus, Cassius, Casca. When you finish, he's silent for a long moment. 'Brutus?' he finally says, pain evident in his voice. 'Even Brutus?'\n\nHe stands, walking to the window. 'You've shown great courage in coming to me, Marcus. But tell me—why should I trust that this isn't itself a trap? How do I know you're not leading me to a different danger?'",
      choices: [
        {
          text: "Offer to stand beside Caesar at the Senate as proof of your loyalty",
          next: "prove_loyalty",
          stats: { loyalty: 20, influence: 15 }
        },
        {
          text: "Suggest Caesar skip the Senate session entirely",
          next: "suggest_absence",
          stats: { morality: 10, influence: 10 }
        },
        {
          text: "Urge Caesar to arrest the conspirators immediately",
          next: "urge_arrests",
          stats: { loyalty: 15, morality: -15, influence: 5 }
        }
      ]
    },

    strike_caesar: {
      title: "The Die is Cast",
      date: "March 15, 44 BCE - Aftermath",
      text: "Your blade joins the others. Caesar's blood stains the Senate floor, pooling around the base of Pompey's statue—bitter irony. Twenty-three wounds. When it's done, there's only silence and the metallic smell of blood.\n\nBrutus tries to address the remaining senators, but they flee in horror. You stand among the conspirators, looking at what you've done. The man who conquered Gaul, who crossed the Rubicon, lies broken on the marble.\n\nCassius grips your shoulder. 'We must move quickly. The people must understand we've saved the Republic.' But through the doors, you hear screams, confusion, anger.\n\nMark Antony's voice rings out: 'Murder! Caesar is murdered!'",
      choices: [
        {
          text: "Stay with the conspirators and address the people",
          next: "address_people_conspirator",
          stats: { influence: 10 }
        },
        {
          text: "Flee Rome before Antony rallies Caesar's supporters",
          next: "flee_rome_conspirator",
          stats: { loyalty: -10 }
        },
        {
          text: "Seek sanctuary in a temple",
          next: "seek_sanctuary",
          stats: { morality: 5 }
        }
      ]
    },

    refuse_strike: {
      title: "The Reluctant Conspirator",
      date: "March 15, 44 BCE - Aftermath",
      text: "You step back, unable to strike. The others don't notice in the chaos—they're too focused on their grim task. Caesar falls, and you watch, frozen, as the life leaves him.\n\nWhen it's over, Brutus sees you standing apart, your dagger still clean. Understanding flashes in his eyes—disappointment, or perhaps respect? You'll never know.\n\nThe conspirators raise their bloodied daggers and rush into the Forum, crying 'Liberty! Freedom! Tyranny is dead!' But the crowd's reaction is not what they expected. Many weep for Caesar. Some look murderous.\n\nYou are caught between two worlds: neither fully conspirator nor loyal Caesar supporter.",
      choices: [
        {
          text: "Leave Rome immediately with your family",
          next: "flee_rome_neutral",
          stats: { morality: 10, influence: -10 }
        },
        {
          text: "Try to help Brutus and Cassius explain their actions",
          next: "help_explain",
          stats: { loyalty: -10, influence: 5 }
        },
        {
          text: "Denounce the conspirators publicly to save yourself",
          next: "denounce_conspirators",
          stats: { loyalty: 15, morality: -20, influence: 10 }
        }
      ]
    },

    prove_loyalty: {
      title: "Standing Guard",
      date: "March 15, 44 BCE - The Senate",
      text: "You accompany Caesar to the Senate, staying close. As the session begins, you notice Cassius watching you with hatred in his eyes. Cimber approaches Caesar with his petition, and you recognize the signal.\n\nYou step between Caesar and Casca as the first blade flashes. 'Traitors!' you shout. Your warning gives Caesar precious seconds. He draws a stylus from his writing tablet—his only weapon—and fights back.\n\nBut there are too many conspirators. You feel a blade slice across your arm. Caesar is struck repeatedly despite your efforts. As he falls, he looks at you with gratitude and sorrow.\n\n'You tried, Marcus,' he gasps. 'Remember... remember the Republic we both loved...'\n\nHe dies in your arms, while the conspirators flee the chaos they've created.",
      choices: [
        {
          text: "Rally Caesar's supporters and pursue the conspirators",
          next: "rally_caesarians",
          stats: { loyalty: 30, influence: 20 }
        },
        {
          text: "Protect Caesar's body until Mark Antony arrives",
          next: "protect_body",
          stats: { loyalty: 25, morality: 15 }
        },
        {
          text: "Address the Senate about what happened",
          next: "address_senate_loyal",
          stats: { influence: 25, morality: 10 }
        }
      ]
    },

    rally_caesarians: {
      title: "The Avenger",
      date: "March 15-20, 44 BCE",
      text: "You become one of Mark Antony's chief lieutenants in the hunt for Caesar's assassins. Your testimony about the murder—how you tried to save Caesar—makes you a hero to his supporters.\n\nAntony's famous funeral speech turns the mob against the conspirators. Brutus and Cassius flee Rome. Civil war looms.\n\nOctavian, Caesar's adopted heir, arrives in Rome. He's only eighteen but carries himself with unexpected authority. 'You defended my father,' he says when you meet. 'I will not forget this.'\n\nYears of war follow. But you've chosen your side, and history will remember you as one of Caesar's most loyal defenders.",
      isEnding: true,
      outcome: "You became a trusted general under Mark Antony and later served Octavian (Augustus). Your family prospered, though you never forgot the blood spilled that day. History remembers you as a defender of Caesar, a man who chose loyalty over personal safety."
    },

    address_people_conspirator: {
      title: "The Forum Speech",
      date: "March 15, 44 BCE - The Forum",
      text: "You stand with Brutus and Cassius before the Roman people. The crowd is hostile, confused, grieving. Brutus speaks eloquently about liberty, about tyranny, about saving the Republic.\n\nFor a moment, it seems to work. Some in the crowd cheer. But then Mark Antony arrives with Caesar's body. He asks permission to speak at the funeral. Against Cassius's advice, Brutus agrees.\n\nAntony's speech destroys everything. 'Friends, Romans, countrymen...' He shows Caesar's bloody toga, reads his will leaving gardens and money to the people. The crowd becomes a mob, screaming for the blood of the conspirators.\n\nYou must flee Rome or die.",
      choices: [
        {
          text: "Flee east with Brutus and Cassius to raise an army",
          next: "flee_east",
          stats: { loyalty: -20 }
        },
        {
          text: "Try to surrender and beg for mercy",
          next: "beg_mercy",
          stats: { morality: -10, influence: -20 }
        },
        {
          text: "Fight your way out of the city",
          next: "fight_escape",
          stats: { loyalty: -15 }
        }
      ]
    },

    flee_east: {
      title: "The Battle of Philippi",
      date: "October 42 BCE",
      text: "Two years of exile and war. You fought alongside Brutus and Cassius, raising legions in the East. But at Philippi in Macedonia, Antony and Octavian's forces meet yours in battle.\n\nThe battle is chaos. Cassius, thinking all is lost, orders his freedman to kill him. When Brutus learns of this, his spirit breaks. Your side is defeated.\n\nBrutus finds you after the battle. 'It seems our Republic died with Caesar after all,' he says sadly. 'At least we tried, Marcus. History may judge us harshly, but we acted for Rome.'\n\nThat night, Brutus takes his own life. You must decide your own fate.",
      isEnding: true,
      outcome: "You chose to fall on your sword rather than be captured. History remembers you as one of Caesar's assassins—some call you a defender of the Republic, others a traitor. Your name becomes synonymous with the eternal question: when is killing a tyrant justified?"
    },

    protect_body: {
      title: "The Faithful Guardian",
      date: "March 15-20, 44 BCE",
      text: "You guard Caesar's body until Mark Antony arrives with his soldiers. Your loyalty is noted and rewarded. Antony embraces you, tears streaming down his face.\n\n'You alone tried to save him,' Antony says. 'Rome needs more men like you.'\n\nYou help arrange Caesar's funeral. Antony's speech ignites the city. The conspirators flee for their lives. Civil war erupts, but you've secured your family's future on the winning side.\n\nYears later, when Augustus (the former Octavian) becomes the first Emperor, he grants your family senatorial estates. Your grandson asks you about that day.\n\n'I couldn't save him,' you say. 'But I could honor his memory. Sometimes that's all we can do.'",
      isEnding: true,
      outcome: "You lived to old age, respected as a man of principle who stayed loyal when tested. Your family thrived under the new Empire. You never regretted your choice, though you mourned what the Republic might have been."
    },

    flee_rome_neutral: {
      title: "The Exile's Path",
      date: "March-April, 44 BCE",
      text: "You gather your family and most valuable possessions, fleeing Rome under cover of darkness. You travel to your cousin's villa in Greece, far from the coming storm.\n\nNews reaches you slowly. Mark Antony's speech. The proscriptions. The civil war. Names you know—friends, colleagues—appear on death lists. Some support Antony and Octavian; others back Brutus and Cassius.\n\nYour wife asks, 'Did we make the right choice?' You watch your children playing in the Greek sunshine, safe from Roman politics.\n\n'We survived,' you answer. 'Perhaps that's enough.'",
      isEnding: true,
      outcome: "You lived quietly in Greece, never returning to Rome. Your children grew up far from politics. You missed the life you knew, but you never regretted saving your family from the bloodshed. Some called you a coward; others, wise."
    },

    denounce_conspirators: {
      title: "The Turncoat",
      date: "March 15, 44 BCE - The Forum",
      text: "In the Forum, before the confused and angry crowd, you raise your voice: 'Citizens! I infiltrated the conspiracy to protect Caesar! I stand before you with clean hands!'\n\nYou name every conspirator you know. Mark Antony listens intently, then embraces you publicly. 'This man is a hero!' he declares.\n\nBut the conspirators know the truth. Brutus escapes, but not before sending you a message: 'I thought you a man of principle, Marcus. I was wrong. Live with your choice.'\n\nYou receive rewards—land, appointments, gold. But at night, you see Caesar's face as he died, and Brutus's look of betrayal. Your children will be wealthy.\n\nYou will never sleep easily again.",
      isEnding: true,
      outcome: "You prospered materially but paid the price in reputation and conscience. Some praised your 'cleverness'; others whispered 'traitor.' You died wealthy but haunted, never certain you made the right choice."
    }
  };

  // Add more scene variations for different paths...
  const currentSceneData = scenes[currentScene];

  if (!currentSceneData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-950 via-stone-900 to-black flex items-center justify-center">
        <div className="text-white text-center">
          <p className="text-xl mb-4">Scene not found: {currentScene}</p>
          <button onClick={onBack} className="px-6 py-3 bg-amber-700 hover:bg-amber-600 rounded">
            Return to Timeline
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-950 via-stone-900 to-black relative overflow-hidden">
      {/* Decorative Roman elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-9xl">🏛️</div>
        <div className="absolute bottom-10 right-10 text-9xl">⚔️</div>
        <div className="absolute top-1/2 left-1/4 text-6xl">🦅</div>
      </div>

      {/* Stats Panel */}
      <div className="fixed top-4 right-4 bg-stone-900/90 backdrop-blur-sm border-2 border-amber-800/60 rounded-lg p-4 z-20 w-64">
        <h3 className="text-amber-400 font-serif font-bold mb-3 text-center">Your Standing</h3>
        
        <div className="space-y-3">
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-amber-300 text-sm flex items-center gap-2">
                <Crown className="w-4 h-4" />
                Loyalty to Caesar
              </span>
              <span className="text-amber-200 text-sm font-bold">{stats.loyalty}%</span>
            </div>
            <div className="w-full bg-stone-800 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-red-600 to-amber-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${stats.loyalty}%` }}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-amber-300 text-sm flex items-center gap-2">
                <Heart className="w-4 h-4" />
                Moral Integrity
              </span>
              <span className="text-amber-200 text-sm font-bold">{stats.morality}%</span>
            </div>
            <div className="w-full bg-stone-800 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-blue-600 to-cyan-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${stats.morality}%` }}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-amber-300 text-sm flex items-center gap-2">
                <Scroll className="w-4 h-4" />
                Political Influence
              </span>
              <span className="text-amber-200 text-sm font-bold">{stats.influence}%</span>
            </div>
            <div className="w-full bg-stone-800 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${stats.influence}%` }}
              />
            </div>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-amber-800/40">
          <p className="text-amber-400/70 text-xs text-center italic">
            Your choices shape history
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-8 max-w-4xl">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-amber-300 hover:text-amber-100 transition-colors mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Return to Timeline</span>
        </button>

        {/* Story Card */}
        <div className="bg-stone-900/80 backdrop-blur-sm border-2 border-amber-800/60 rounded-lg overflow-hidden shadow-2xl">
          {/* Header */}
          <div className="bg-gradient-to-r from-red-900 to-amber-900 p-6 border-b-2 border-amber-800/60">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <Scroll className="w-8 h-8 text-amber-300" />
                <div>
                  <h2 className="text-3xl font-serif font-bold text-amber-300">
                    {currentSceneData.title}
                  </h2>
                  <p className="text-amber-400/80 text-sm italic">{currentSceneData.date}</p>
                </div>
              </div>
              {currentSceneData.isEnding && (
                <div className="flex items-center gap-2 bg-amber-700/30 px-3 py-1 rounded-full">
                  <Skull className="w-4 h-4 text-amber-300" />
                  <span className="text-amber-300 text-sm font-bold">Ending</span>
                </div>
              )}
            </div>
          </div>

          {/* Story Text */}
          <div className="p-8">
            <div className="prose prose-invert max-w-none">
              {currentSceneData.text.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-amber-100 text-lg leading-relaxed mb-4 font-serif">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Ending Outcome */}
            {currentSceneData.isEnding && currentSceneData.outcome && (
              <div className="mt-8 p-6 bg-amber-900/20 border-2 border-amber-700/50 rounded-lg">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-amber-300 font-serif font-bold text-xl mb-2">Your Legacy</h3>
                    <p className="text-amber-200 leading-relaxed">
                      {currentSceneData.outcome}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Choices */}
            {!currentSceneData.isEnding && currentSceneData.choices && (
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-2 text-amber-400 font-serif font-bold">
                  <span className="text-lg">Choose your path:</span>
                </div>
                {currentSceneData.choices.map((choice, index) => (
                  <button
                    key={index}
                    onClick={() => makeChoice(choice.next, choice.text, choice.stats)}
                    className="w-full text-left p-5 bg-gradient-to-r from-stone-800/50 to-amber-950/30 hover:from-amber-900/40 hover:to-red-900/40 border-2 border-amber-800/40 hover:border-amber-600 rounded-lg transition-all duration-300 group"
                  >
                    <p className="text-amber-200 group-hover:text-amber-100 font-serif leading-relaxed">
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
                    setStats({ loyalty: 50, morality: 50, influence: 30 });
                  }}
                  className="flex-1 px-6 py-3 bg-amber-700 hover:bg-amber-600 text-white font-serif font-semibold rounded-lg transition-all duration-300"
                >
                  Play Again
                </button>
                <button
                  onClick={onBack}
                  className="flex-1 px-6 py-3 bg-stone-700 hover:bg-stone-600 text-white font-serif font-semibold rounded-lg transition-all duration-300"
                >
                  Choose Different Timeline
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Choice History (if any choices made) */}
        {choices.length > 0 && !currentSceneData.isEnding && (
          <div className="mt-6 bg-stone-900/60 backdrop-blur-sm border border-amber-800/40 rounded-lg p-4">
            <h3 className="text-amber-400 font-serif font-bold mb-3 text-sm">Your Journey So Far:</h3>
            <div className="space-y-2">
              {choices.map((choice, index) => (
                <div key={index} className="flex items-start gap-2">
                  <span className="text-amber-600 text-xs mt-1">▸</span>
                  <p className="text-amber-300/70 text-xs">{choice}</p>
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

export default AncientStory
