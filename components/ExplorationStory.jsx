
import React, { useState } from 'react';
import { ArrowLeft, Compass, Heart, Skull, AlertTriangle, Ship } from 'lucide-react';

const ExplorationStory = ({ onBack }) => {
  const [currentScene, setCurrentScene] = useState('intro');
  const [choices, setChoices] = useState([]);
  const [stats, setStats] = useState({
    loyalty: 50,
    humanity: 50,
    survival: 50
  });

  const updateStats = (statChanges) => {
    setStats(prev => ({
      loyalty: Math.max(0, Math.min(100, prev.loyalty + (statChanges.loyalty || 0))),
      humanity: Math.max(0, Math.min(100, prev.humanity + (statChanges.humanity || 0))),
      survival: Math.max(0, Math.min(100, prev.survival + (statChanges.survival || 0)))
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
      title: "The Call to Adventure",
      date: "February 1519 - Seville, Spain",
      text: "You are María Catalina de Santos, a young woman with an extraordinary gift for languages. Born to a Spanish merchant and a Moorish mother, you speak Spanish, Arabic, Latin, and Portuguese fluently. Your father taught you reading and writing—rare for a woman—before he died, leaving you with little prospects.\n\nNow, Hernán Cortés is assembling an expedition to the New World. Word has spread that he needs translators. You've heard stories of gold, of strange peoples, of a new world waiting to be discovered. But you've also heard whispers of violence, slavery, and destruction following in the wake of conquest.\n\nYour mother clutches your hand. 'Do not go, María. These expeditions bring only death. Stay here, marry the baker's son, live a quiet life.'\n\nBut the baker's son is cruel, and a quiet life means a slow death of a different kind. The ship leaves in two days.",
      choices: [
        {
          text: "Join the expedition—adventure and opportunity await",
          next: "join_expedition",
          stats: { survival: 10, loyalty: 10 }
        },
        {
          text: "Refuse and stay in Spain—safety over adventure",
          next: "stay_spain",
          stats: { survival: 20, loyalty: -10, humanity: -5 }
        },
        {
          text: "Join, but vow to protect indigenous peoples from harm",
          next: "join_protector",
          stats: { humanity: 20, loyalty: -10 }
        },
        {
          text: "Join solely to chronicle the truth of what happens",
          next: "join_chronicler",
          stats: { humanity: 10, survival: 5 }
        }
      ]
    },

    stay_spain: {
      title: "The Baker's Wife",
      date: "1519-1547 - Seville, Spain",
      text: "You marry the baker's son. He is indeed cruel. He drinks, strikes you, and gambles away money. You bear three children. Two die in infancy. Your mother passes away in 1523.\n\nIn 1526, you hear news: Cortés conquered the Aztec Empire. Stories of gold and glory fill the taverns. The baker's son curses you: 'We could have been rich if you'd gone! Useless woman!'\n\nYou live 28 more years of quiet misery. When you die at 47, the baker's son remarries within a month. Your one surviving child doesn't attend your funeral.",
      isEnding: true,
      outcome: "You chose safety and found only suffering. The New World's dangers might have killed you, but staying killed your spirit over decades instead. Your life was long but empty, filled with small cruelties that accumulated into a crushing weight. You died unmourned and unmemorable, your gifts wasted, your potential unrealized. Sometimes the safe choice is the most dangerous of all—not to your body, but to your soul. You survived, but you never truly lived."
    },

    join_expedition: {
      title: "The Voyage Begins",
      date: "March 1519 - Atlantic Ocean",
      text: "You board the Santa María de la Concepción with 500 soldiers, sailors, and adventurers. Cortés himself interviews you, impressed by your linguistic abilities.\n\n'You will be invaluable, Señorita Santos,' he says. 'We go to bring civilization and Christianity to savages. Your languages will help us communicate God's word.'\n\nDuring the voyage, you befriend a sailor named Diego who speaks quietly of his doubts. 'My cousin sailed with Columbus. He says the conquest of Hispaniola was butchery, not civilization. Entire peoples enslaved or killed.'\n\nYou also meet Father Olmedo, the expedition chaplain, who seems genuinely concerned with saving souls. And Cortés's second-in-command, Pedro de Alvarado, whose cruelty is already legendary.\n\nAs land appears on the horizon, you must decide what kind of person you will be in this new world.",
      choices: [
        {
          text: "Align yourself with Cortés—loyalty to the expedition",
          next: "align_cortes",
          stats: { loyalty: 20, humanity: -10 }
        },
        {
          text: "Befriend Father Olmedo—perhaps faith can temper conquest",
          next: "ally_olmedo",
          stats: { humanity: 15, loyalty: 10 }
        },
        {
          text: "Trust Diego and the common sailors—learn truth from below",
          next: "ally_sailors",
          stats: { humanity: 10, loyalty: -5 }
        }
      ]
    },

    join_protector: {
      title: "The Protector's Vow",
      date: "March-April 1519 - Yucatan Coast",
      text: "You join the expedition with a secret vow to protect indigenous peoples where you can. When you land on the Yucatan coast, you meet the Maya people for the first time.\n\nThey're wary but not hostile. Through gestures and your Arabic (which shares some sounds with their language), you begin to communicate. They offer food. Some Spanish soldiers want to take it by force anyway.\n\nCortés orders restraint—for now. 'We need information more than we need enemies,' he says pragmatically.\n\nYou meet a Maya woman named Ix Chel who seems to understand your intentions. She teaches you words in her language. You're learning fast.\n\nBut Cortés is growing impatient. He wants to move inland toward the great cities. The Maya are divided—some want to trade, others to resist. Your translations could tip the balance toward peace or war.",
      choices: [
        {
          text: "Translate faithfully but advocate loudly for peaceful trade",
          next: "advocate_peace",
          stats: { humanity: 20, loyalty: -10 }
        },
        {
          text: "Mistranslate slightly to prevent conflict",
          next: "mistranslate_peace",
          stats: { humanity: 15, loyalty: -20, survival: -10 }
        },
        {
          text: "Warn the Maya privately of Spanish intentions",
          next: "warn_maya",
          stats: { humanity: 25, loyalty: -30, survival: -15 }
        }
      ]
    },

    join_chronicler: {
      title: "The Observer",
      date: "April 1519 - Yucatan Coast",
      text: "You join determined to record the truth, whatever it may be. You keep a secret journal, writing in a cipher mixing Spanish and Arabic script that most Spaniards cannot read.\n\nThe first encounters with the Maya are tense but not violent. You record everything: the Spanish demands, the Maya responses, the growing cultural misunderstandings.\n\nCortés notices your constant writing. 'What are you recording, Señorita Santos?'\n\n'Just language notes, Captain. To improve my translations.'\n\nHe seems satisfied, but Pedro de Alvarado eyes you suspiciously. 'Women and their secrets,' he mutters.\n\nYour truthful chronicling may endanger you, but history deserves an honest account.",
      choices: [
        {
          text: "Continue honest chronicling despite the danger",
          next: "continue_chronicle",
          stats: { humanity: 15, survival: -10 }
        },
        {
          text: "Keep two journals—one truthful, one for Spanish eyes",
          next: "double_journal",
          stats: { humanity: 10, survival: 10 }
        }
      ]
    },

    align_cortes: {
      title: "The Conquistador's Translator",
      date: "April-May 1519 - March Inland",
      text: "You ally yourself with Cortés. His charisma is undeniable, his vision grand. He speaks of bringing civilization, Christianity, and glory to Spain. Part of you wants to believe him.\n\nAs you march inland, you translate his demands to increasingly larger indigenous settlements: 'Submit to the Spanish Crown and the Christian God, and you will be treated well. Resist, and face consequences.'\n\nMany submit out of fear. Cortés is pleased with your work. 'You have a gift, María. You will be remembered as the tongue that conquered an empire.'\n\nBut you see what follows submission: natives forced into labor, their gold confiscated, their temples defaced. When you translate Cortés's reassurances to worried chiefs, you know they are lies.\n\nIn Cempoala, a Totonac chief tells you through tears that he hopes the Spanish will free them from Aztec tribute. You don't tell him the Spanish tribute will be worse.",
      choices: [
        {
          text: "Continue serving Cortés—you've come too far to turn back",
          next: "serve_cortes",
          stats: { loyalty: 25, humanity: -20 }
        },
        {
          text: "Begin to have doubts about your role",
          next: "growing_doubts",
          stats: { humanity: 10, loyalty: -5 }
        },
        {
          text: "Secretly start helping indigenous peoples where possible",
          next: "secret_helper",
          stats: { humanity: 20, loyalty: -10, survival: -5 }
        }
      ]
    },

    serve_cortes: {
      title: "The Loyal Servant",
      date: "July-November 1519 - The March to Tenochtitlan",
      text: "You serve Cortés loyally through the long march inland. Your translations facilitate alliances with Tlaxcalans (enemies of the Aztecs), smooth over cultural misunderstandings, and help Cortés navigate the complex political landscape of Mesoamerica.\n\nYou're present when Cortés meets Moctezuma II, emperor of the Aztecs. The meeting is tense but peaceful. You translate the elaborate speeches, the gift exchanges, the cautious diplomacy.\n\nCortés treats you well, grants you gold and status. You're becoming wealthy from this conquest. You have a house built for you in Veracruz. Common soldiers salute you.\n\nBut at night, you dream of the villages burned, the temples destroyed, the people enslaved. You're complicit in it all.",
      isEnding: true,
      outcome: "You served Cortés loyally through the conquest of Mexico. You became wealthy, respected among the Spanish, and lived comfortably. You married a Spanish officer and had children. You died at 58, wealthy and honored. But you never forgot what you helped enable. In your final years, you endowed a hospital for indigenous peoples, trying to balance the scales. Your children inherited your wealth but not your guilt. History remembers you as Cortés's translator, the woman whose words opened an empire to conquest. Some call you a facilitator of genocide. Others say you were a product of your time. Your private journals, discovered centuries later, revealed your internal torment. You gained the world but never recovered your soul."
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
      {/* Decorative exploration elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-9xl">🌊</div>
        <div className="absolute bottom-10 right-10 text-9xl">🗺️</div>
        <div className="absolute top-1/2 right-1/4 text-6xl">⚓</div>
      </div>

      {/* Stats Panel */}
      <div className="fixed top-4 right-4 bg-cyan-900/90 backdrop-blur-sm border-2 border-cyan-800/60 rounded-lg p-4 z-20 w-64">
        <h3 className="text-cyan-400 font-serif font-bold mb-3 text-center">Your Character</h3>
        
        <div className="space-y-3">
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-cyan-300 text-sm flex items-center gap-2">
                <Ship className="w-4 h-4" />
                Loyalty to Spain
              </span>
              <span className="text-cyan-200 text-sm font-bold">{stats.loyalty}%</span>
            </div>
            <div className="w-full bg-cyan-950 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-blue-600 to-cyan-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${stats.loyalty}%` }}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-cyan-300 text-sm flex items-center gap-2">
                <Heart className="w-4 h-4" />
                Humanity
              </span>
              <span className="text-cyan-200 text-sm font-bold">{stats.humanity}%</span>
            </div>
            <div className="w-full bg-cyan-950 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-rose-600 to-pink-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${stats.humanity}%` }}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-cyan-300 text-sm flex items-center gap-2">
                <Compass className="w-4 h-4" />
                Will to Survive
              </span>
              <span className="text-cyan-200 text-sm font-bold">{stats.survival}%</span>
            </div>
            <div className="w-full bg-cyan-950 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-green-600 to-emerald-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${stats.survival}%` }}
              />
            </div>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-cyan-800/40">
          <p className="text-cyan-400/70 text-xs text-center italic">
            Navigate moral seas
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
        <div className="bg-cyan-900/80 backdrop-blur-sm border-2 border-cyan-800/60 rounded-lg overflow-hidden shadow-2xl">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-900 to-cyan-900 p-6 border-b-2 border-cyan-800/60">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <Ship className="w-8 h-8 text-cyan-300" />
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
                    className="w-full text-left p-5 bg-gradient-to-r from-cyan-950/50 to-blue-950/30 hover:from-cyan-900/40 hover:to-blue-900/40 border-2 border-cyan-800/40 hover:border-cyan-600 rounded-lg transition-all duration-300 group"
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
                    setStats({ loyalty: 50, humanity: 50, survival: 50 });
                  }}
                  className="flex-1 px-6 py-3 bg-cyan-700 hover:bg-cyan-600 text-white font-serif font-semibold rounded-lg transition-all duration-300"
                >
                  Play Again
                </button>
                <button
                  onClick={onBack}
                  className="flex-1 px-6 py-3 bg-blue-700 hover:bg-blue-600 text-white font-serif font-semibold rounded-lg transition-all duration-300"
                >
                  Choose Different Timeline
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Choice History */}
        {choices.length > 0 && !currentSceneData.isEnding && (
          <div className="mt-6 bg-cyan-900/60 backdrop-blur-sm border border-cyan-800/40 rounded-lg p-4">
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
