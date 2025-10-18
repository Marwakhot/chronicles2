    total_opposition: {
      title: "The Price of Principle",
      date: "July 1519 - Final Confrontation",
      text: "You refuse to back down on the ceremony issue. Captain Torres must make a choice. After long deliberation, he sides with you. The ceremony is cancelled.\n\nVásquez and half the crew mutiny. A brief, violent confrontation erupts. You fight alongside Torres and loyal crew. The mutiny is suppressed, but many die, including Captain Torres.\n\nYou are left in command by default, with a divided crew and a mission in chaos. You choose to end the expedition, returning to Spain with what maps and knowledge you have.\n\nYou are court-martialed for the failed expedition but ultimately acquitted when your journals reveal the truth of the mutiny.",
      choices: [
        {
          text: "Accept acquittal and continue advocating for reform",
          next: "ending_controversial_hero",
          stats: { empathy: 40, honor: 40 }
        }
      ]
    },

    ending_controversial_hero: {
      title: "The Man Who Said No",
      date: "1530 - Vindication",
      text: "Your court-martial becomes a sensation. Your principled stand against unjust conquest resonates with some and outrages others. The Church becomes interested in your case—some priests support your ethical stance; others condemn your disobedience.\n\nYou're never given another expedition, but you become a voice for colonial reform. You publish extensively, teach at university, and train missionaries in respectful engagement with indigenous peoples.\n\nYour influence grows slowly. When Spain eventually reforms some of its worst colonial practices decades later, your writings are cited as inspiration.\n\nYou die at 64, not wealthy or famous, but having stood for principle when it mattered most.",
      isEnding: true,
      outcome: "You became a controversial figure whose principled stand helped spark gradual reform. Some called you a hero; others a traitor. But you proved that saying 'no' to injustice is possible even within hierarchical systems. Your case was studied in military academies as an example of the limits of obedience. Religious scholars debated whether your defiance was righteous. Indigenous peoples who heard your story saw hope that some Europeans had conscience. You didn't stop colonialism, but you showed it could be resisted. That mattered."
    },

    modified_ceremony: {
      title: "The Reformed Ritual",
      date: "July 1519 - Compromise Achieved",
      text: "Your modified ceremony proceeds with elements of both cultures. Spanish flags are raised alongside Awahari symbols. Gifts are exchanged mutually. Speeches emphasize friendship and alliance, not submission and conquest.\n\nIt's not perfect—the power imbalance remains—but it's far better than the original plan. Elder Amara accepts it as a gesture of respect, even if she understands the underlying colonial ambitions.\n\nThe ceremony becomes a model. Other expeditions hear of your approach and some adopt it. You've created a template for somewhat more ethical colonial contact.\n\nYou complete the expedition successfully, returning with valuable maps and a reputation for diplomatic skill.",
      choices: [
        {
          text: "Continue promoting this model of respectful contact",
          next: "ending_diplomatic_reformer",
          stats: { empathy: 30, honor: 30, ambition: 30 }
        }
      ]
    },

    ending_diplomatic_reformer: {
      title: "The Model Builder",
      date: "1545 - Influence Realized",
      text: "Your career is spent promoting and refining your model of respectful colonial contact. You train explorers, write manuals, and advise expeditions. Your influence gradually changes how some Spanish explorers approach indigenous peoples.\n\nYou're never revolutionary—you work within the system—but you make the system marginally better. Some communities are treated more fairly because of your protocols. Some cultures survive intact longer because of your advocacy.\n\nYou rise to advisory positions in colonial administration. You use your influence consistently for indigenous protection, winning some battles, losing others.\n\nYou die at 77, having bent colonial practice slightly toward justice.",
      isEnding: true,
      outcome: "You were a reformer who worked within imperial systems to make them less destructive. Your diplomatic protocols saved lives and preserved cultures, though they couldn't stop colonialism itself. Indigenous peoples had mixed views—some saw you as an ally within an enemy system; others saw you as legitimizing conquest through politeness. Both perspectives have truth. You did what you could with the power you had, and that was significant even if limited."
    },

    cooperative_future: {
      title: "Partnership Established",
      date: "August 1519 - New Precedent",
      text: "The reformed ceremony establishes a foundation for genuine cooperation. Over the following months, Spanish and Awahari work together on various projects: improving harbor facilities, establishing trade routes, exchanging agricultural knowledge.\n\nIt's not equal partnership—Spanish technological and military advantages create inherent imbalance—but it's closer to genuine cooperation than most colonial relationships.\n\nYou serve as chief liaison, resolving disputes and facilitating communication. When the expedition departs, leaving a trading post, you've created a model that some future expeditions will study and occasionally emulate.\n\nYou complete the voyage, returning to Spain with both valuable maps and a proven model for respectful contact.",
      choices: [
        {
          text: "Promote this model throughout your career",
          next: "ending_partnership_advocate",
          stats: { empathy: 35, honor: 35, ambition: 30 }
        }
      ]
    },

    ending_partnership_advocate: {
      title: "The Advocate for Cooperation",
      date: "1543 - A Career of Bridge-Building",
      text: "You spend your career advocating for cooperative rather than exploitative relationships with indigenous peoples. You publish detailed accounts of successful partnerships, train diplomats and explorers, and lobby colonial authorities for better policies.\n\nYour influence is real but limited. Some expeditions follow your example; many don't. Some indigenous communities benefit from your advocacy; many still suffer terrible exploitation.\n\nBut you create precedents, establish practices, and inspire individuals who carry your approach forward. Decades after your death, reformers cite your work as proof that alternatives to brutal conquest existed.\n\nYou die at 72, knowing you made a difference even if you couldn't change everything.",
      isEnding: true,
      outcome: "You were an advocate who proved cooperation was possible and practical. Your model influenced some colonial practices, particularly in religious missions and trade relationships. You weren't revolutionary enough for some, too idealistic for others, but you occupied important middle ground. Indigenous peoples who encountered Spanish trained by you had significantly better experiences than those who didn't. You built bridges in an age of walls. That legacy endures."
    },

    radical_stand: {
      title: "The Revolutionary Voice",
      date: "July 1519 - Beyond the Pale",
      text: "You maintain your radical position: indigenous peoples have sovereignty, European 'discovery' gives no rights, and consent is required for any Spanish presence. These ideas are revolutionary—even dangerous—in 1519.\n\nCaptain Torres is sympathetic but constrained. 'Diego, I admire your principles, but I have orders. I cannot simply ignore the Crown's mandate to claim new lands.'\n\n'Then the Crown's mandate is unjust, sir. Following unjust orders doesn't make them just.'\n\nYour position becomes untenable. Torres can't support you without disobeying his own orders. He offers you a choice: moderate your stance or leave the expedition.\n\nYou choose to stay on Awahari when the fleet departs, continuing your advocacy from outside Spanish authority.",
      choices: [
        {
          text: "Remain on Awahari as an independent advocate",
          next: "ending_radical_advocate",
          stats: { empathy: 45, honor: 40 }
        }
      ]
    },

    ending_radical_advocate: {
      title: "The Prophet in Exile",
      date: "1547 - A Life Outside",
      text: "You spend 28 years on Awahari, living among the people and serving as advocate, teacher, and cultural bridge. You're not Spanish anymore, not quite Awahari either—you're something new.\n\nYou document indigenous perspectives on European contact, creating a unique historical record. You help the Awahari develop strategies for dealing with future European encounters. You train bilingual mediators who will represent Awahari interests.\n\nYour writings, smuggled back to Europe by sympathetic missionaries, influence reform movements. You become a legendary figure—the European who rejected empire and chose indigenous community.\n\nYou die at 75, honored by the Awahari and remembered as a prophet by European reformers.",
      isEnding: true,
      outcome: "You were a radical whose ideas were centuries ahead of their time. Your rejection of European superiority and assertion of indigenous sovereignty anticipated anti-colonial movements by 300 years. Your writings influenced Enlightenment thinkers and later independence movements. The Awahari preserved your memory as the foreigner who became family. European history marginalized you as a curiosity; indigenous history celebrated you as an ally. You sacrificed comfort and status for principle. That's rare in any age."
    },

    soften_position: {
      title: "Strategic Idealism",
      date: "July 1519 - Tactical Retreat",
      text: "You soften your position slightly, reframing your arguments to maintain influence. 'Captain, I'm not saying we abandon Spanish interests—just that we pursue them through genuine partnership rather than false claims of ownership. We can achieve Spain's goals more effectively with Awahari cooperation than through antagonism.'\n\nThis pragmatic framing allows Torres to support you while still following orders. You negotiate an agreement where Spain establishes presence but recognizes Awahari autonomy in internal matters. It's imperfect but workable.\n\nYou've learned that pure idealism often accomplishes nothing, while strategic idealism can achieve incremental progress.",
      choices: [
        {
          text: "Continue with strategic advocacy throughout your career",
          next: "ending_strategic_idealist",
          stats: { empathy: 35, honor: 35, ambition: 30 }
        }
      ]
    },

    ending_strategic_idealist: {
      title: "The Practical Visionary",
      date: "1544 - Balancing Act Complete",
      text: "You spend your career balancing idealism with pragmatism, pushing for indigenous rights while remaining within Spanish systems. You learn when to compromise and when to stand firm.\n\nYour approach proves effective. You establish protections for several indigenous communities, create protocols that reduce exploitation, and train others in your methods. You're not revolutionary, but you're consistently progressive.\n\nYou rise to significant positions in colonial administration, using your power carefully to advance indigenous interests without triggering backlash that would cost you influence.\n\nYou die at 70, having achieved more through pragmatic idealism than pure principle might have.",
      isEnding: true,
      outcome: "You were a strategic reformer who understood that perfect is the enemy of good. Your pragmatic approach achieved real protections for indigenous peoples while maintaining your ability to influence policy. Critics said you compromised too much; supporters said you accomplished more than uncompromising idealists. Both were right. You operated in the possible while working toward the ideal. That's sophisticated ethics in complex circumstances. Your legacy includes both specific protections you won and the model you provided for working within systems to change them."
    },

    enforce_fairly: {
      title: "The Honest Broker",
      date: "August 1519-1520 - Implementation",
      text: "You commit to enforcing the agreement fairly, holding both Spanish and Awahari accountable to its terms. When Spanish soldiers violate boundaries, you report them. When Awahari misunderstandings occur, you explain and mediate.\n\nYour fair enforcement earns trust from both sides. Conflicts that might have escalated into violence are resolved through the council system you helped establish. The trading post operates smoothly.\n\nWhen you finally depart Awahari to continue the expedition, the agreement is functioning well. You've created a working model of relatively fair colonial contact.",
      choices: [
        {
          text: "Promote this model elsewhere",
          next: "ending_fair_broker",
          stats: { empathy: 30, honor: 35, ambition: 25 }
        }
      ]
    },

    ending_fair_broker: {
      title: "The Builder of Fair Systems",
      date: "1541 - Systems That Last",
      text: "You dedicate your career to building and promoting fair systems for Spanish-indigenous relations. You create detailed protocols, train administrators, and audit colonial outposts to ensure compliance.\n\nYour systems don't eliminate colonial exploitation—the power imbalance is too great—but they reduce it significantly in places where they're implemented. Several indigenous communities maintain autonomy and prosperity longer because of your frameworks.\n\nYou become known as the 'Fair Broker,' respected by both colonial authorities (for making colonial rule more stable) and indigenous peoples (for reducing exploitation). It's an uncomfortable middle position, but you hold it with integrity.\n\nYou die at 73, your protocols still in use throughout the Spanish Pacific.",
      isEnding: true,
      outcome: "You built systems that made colonialism slightly less brutal and significantly more accountable. Your protocols saved communities from immediate destruction and provided frameworks for asserting indigenous rights. You were never revolutionary—you accepted colonial reality—but you made that reality more livable for indigenous peoples. Modern scholars debate whether improving colonial systems legitimized them, but most conclude you saved enough lives and cultures to justify your approach."
    },

    improve_terms: {
      title: "The Progressive Negotiator",
      date: "August 1519-1522 - Gradual Improvement",
      text: "You work continuously to improve the agreement terms, renegotiating whenever possible to give the Awahari more autonomy and protection. Each revision is small, but they accumulate.\n\nBy the time you leave Awahari to continue the expedition, the agreement is significantly better than the original. You've established precedents for indigenous land rights, resource control, and cultural autonomy that are revolutionary for their time.\n\nYour approach—starting with imperfect agreements and progressively improving them—becomes a model for other situations.",
      choices: [
        {
          text: "Continue this progressive approach throughout your career",
          next: "ending_progressive_diplomat",
          stats: { empathy: 35, honor: 35, ambition: 25 }
        }
      ]
    },

    ending_progressive_diplomat: {
      title: "The Incremental Revolutionary",
      date: "1543 - Small Steps, Big Impact",
      text: "You spend your career making small, progressive improvements to colonial relationships. No single change is revolutionary, but the cumulative effect is significant.\n\nYou renegotiate agreements, strengthen protections, expand indigenous rights, and challenge unjust practices—always working within systems but constantly pushing their boundaries.\n\nBy the end of your career, indigenous peoples under your agreements have significantly more autonomy and protection than those in other colonial areas. Your incremental approach proves that persistent, strategic advocacy can achieve meaningful change.\n\nYou die at 74, having revolutionized colonial practice through thousands of small improvements rather than dramatic confrontations.",
      isEnding: true,
      outcome: "You proved that revolution can be incremental. Your patient, persistent advocacy achieved more practical protections for indigenous peoples than more dramatic but less sustainable approaches. You were the tortoise to others' hares, and you won more races. Indigenous communities under your agreements maintained culture and autonomy longer than most. Your approach influenced later civil rights movements: small steps, strategic, persistent, effective. Your legacy is quieter but deeper than many more famous reformers."
    },

    mutual_agreement: {
      title: "True Partnership",
      date: "July 1519 - Historic Agreement",
      text: "You spend two weeks negotiating a genuinely mutual agreement between Spain and Awahari. It's unprecedented: both parties are recognized as sovereign, cooperation is voluntary, resource ownership is clearly defined, and disputes are resolved by joint council.\n\nElder Amara is pleased but skeptical: 'This agreement is good, Diego. But will your people honor it when you're gone? Will future ships respect what we've agreed?'\n\nIt's a fair question. You make a promise: you'll personally advocate for this agreement's enforcement and work to extend its principles to other Spanish-indigenous relationships.\n\nCaptain Torres supports the agreement, though he warns it may be controversial in Spain. 'Diego, you've created something remarkable. Let's see if it can survive contact with colonial bureaucracy.'",
      choices: [
        {
          text: "Dedicate your life to defending and promoting this model",
          next: "ending_treaty_defender",
          stats: { empathy: 40, honor: 40, ambition: 25 }
        }
      ]
    },

    ending_treaty_defender: {
      title: "The Guardian of Promises",
      date: "1540 - Faith Kept",
      text: "You spend 21 years defending and promoting the Awahari agreement. You lobby colonial authorities, train administrators, and personally audit compliance. When violations occur, you report them loudly and publicly.\n\nYour dedication makes you controversial. Colonial officials find you troublesome; indigenous peoples see you as rare ally. You're never wealthy or powerful, but you're respected where it matters.\n\nThe Awahari agreement survives largely intact until your death, remarkable in an age of broken promises. Several other communities negotiate similar agreements, citing yours as precedent.\n\nYou die at 68, having kept a promise when most would have forgotten it.",
      isEnding: true,
      outcome: "You were a keeper of promises in an age of betrayal. Your dedication to the Awahari agreement became legendary. The agreement itself survived for decades, protecting the Awahari from the worst colonial abuses. Other indigenous peoples heard of you and sought similar agreements. You proved that one person's integrity could make a difference. The Awahari told stories of 'Diego Who Kept His Word' for generations. Your tombstone bore inscriptions in Spanish and Awahari: 'He promised and delivered.'"
    },

    make_it_work: {
      title: "The Agreement's Champion",
      date: "August 1519-1521 - Making It Real",
      text: "You dedicate yourself to making the Awahari agreement work in practice. You mediate disputes, enforce terms fairly, adapt to unforeseen circumstances, and constantly communicate with both parties to address concerns.\n\nThe agreement succeeds because you make it succeed. Your tireless work turns principles into practice. When problems arise—and they do—you solve them creatively rather than abandoning the framework.\n\nBy the time you leave Awahari, the agreement is functioning well enough to survive your departure. You've proven that equitable colonial relationships are possible with sufficient commitment.",
      choices: [
        {
          text: "Replicate this success elsewhere",
          next: "ending_replicator",
          stats: { empathy: 35, honor: 35, ambition: 30 }
        }
      ]
    },

    ending_replicator: {
      title: "The Model Maker",
      date: "1542 - Success Multiplied",
      text: "You spend your career replicating the Awahari model with other indigenous communities. Not every attempt succeeds—local conditions vary, and some colonial officials refuse cooperation—but you achieve several more equitable agreements.\n\nYour work creates a network of indigenous communities with better protections than most. These communities correspond with each other, sharing strategies for dealing with colonial pressure. You've helped create something like an indigenous support network.\n\nYou train successors who continue your work after your death. Your model influences colonial policy debates for generations.\n\nYou die at 71, having multiplied your initial success many times over.",
      isEnding: true,
      outcome: "You took one successful model and replicated it, creating multiple communities with better colonial relationships than most. Your network approach was centuries ahead of its time. Indigenous peoples benefited directly from your work; some communities survived with their cultures intact partly because of protections you helped establish. You were a practical idealist who proved that good models can be scaled. Your legacy included not just the communities you helped but the framework others used long after you were gone."
    },

    // Now ensure all remaining paths have proper endings...

    equal_request: {
      title: "Asking, Not Demanding",
      date: "June 1519 - Respectful Communication",
      text: "Using your language skills, you present the Spanish request respectfully: 'Elder Kalani, our ships travel far. We ask permission to stop at Awahari for fresh water and food. We offer fair trade and friendship in return. But this is your land, your decision.'\n\nKalani is impressed by both your language ability and your approach. 'You ask, not demand. You see us as people, not obstacles. This is rare among your kind.'\n\nHe consults with other elders. After deliberation, they agree—with conditions. You negotiate details over several days, ensuring mutual understanding and genuine consent.\n\nThe agreement you create becomes a model for Spanish-indigenous relations.",
      choices: [
        {
          text: "Build on this foundation of mutual respect",
          next: "ending_respectful_explorer",
          stats: { empathy: 35, honor: 35, ambition: 25 }
        }
      ]
    },

    ending_respectful_explorer: {
      title: "The Explorer Who Asked Permission",
      date: "1541 - A Different Kind of Discovery",
      text: "You complete a remarkable career based on a simple principle: ask permission before taking. You explore widely but always with indigenous consent. You create maps but share them with the peoples whose lands they depict. You take resources but through fair trade.\n\nYour approach is slower than conquest, less profitable than exploitation, but more sustainable. Communities you visit remember you fondly. Some invite you back. Others recommend you to neighboring peoples.\n\nYou return to Spain with extensive knowledge, valuable maps, and a reputation for integrity. You never become wealthy, but you're respected by thoughtful people and remembered fondly by indigenous peoples.\n\nYou die at 69, having proven that exploration needn't be exploitation.",
      isEnding: true,
      outcome: "You revolutionized exploration by treating it as invitation rather than intrusion. Your maps were less complete than those made by conquistadors who went everywhere regardless of permission, but they were more honest. Indigenous peoples appeared in your accounts as hosts, not obstacles. Your model influenced missionary work and some later exploration. You proved that respecting sovereignty and gathering knowledge aren't incompatible. Modern historians call you remarkably progressive for your era."
    },

    mutual_benefit_frame: {
      title: "Trade and Friendship",
      date: "June 1519 - Practical Partnership",
      text: "You frame the Spanish request as mutual benefit: 'We offer metal tools, new crops, and protection from other European ships. You gain trade partners and allies. We gain safe harbor and friendly resupply. Both peoples benefit.'\n\nKalani listens carefully, asking astute questions about Spanish intentions, the nature of 'protection,' and long-term implications. Your honesty in answering impresses him.\n\nAfter negotiation, an agreement is reached. It's not perfectly equal—Spanish technological and military advantages create imbalance—but it's far better than conquest. Both sides gain genuine benefits.",
      choices: [
        {
          text: "Ensure this agreement remains mutually beneficial over time",
          next: "ending_mutual_benefit",
          stats: { empathy: 30, honor: 30, ambition: 30 }
        }
      ]
    },

    ending_mutual_benefit: {
      title: "The Trader Who Kept Faith",
      date: "1544 - Trade Done Right",
      text: "You spend your career ensuring that Spanish-indigenous trade remains genuinely mutual. You audit trading posts, investigate complaints, punish cheaters, and enforce fair practices.\n\nYou're not perfect—colonial systems create exploitation opportunities you can't eliminate—but you make trade fairer than it would otherwise be. Indigenous peoples know you as someone who keeps scales honest.\n\nYour reputation becomes valuable to Spain—communities that trust you open trade that others can't access. Your honesty proves strategically valuable, not just morally right.\n\nYou die at 74, having demonstrated that fair trade is possible and profitable.",
      isEnding: true,
      outcome: "You proved that colonial trade didn't have to be exploitative. Your career showed that honest dealing with indigenous peoples was both ethical and economically sound. Communities you worked with prospered relatively; those that dealt with less honest traders declined. Your example influenced some commercial policies and inspired honest traders. You were never revolutionary—you accepted trade itself—but you made it fairer. That practical ethics had real impact on real lives."
    },

    // Adding the few remaining endings...

    recommend_leave: {
      title: "The Road Not Taken",
      date: "July 1519 - Choosing Departure",
      text: "'Captain Torres, I recommend we continue our voyage and leave the Awahari in peace. They've shown us hospitality; we've mapped their waters. We've established friendly contact. Permanent presence will only lead to problems—exploitation, cultural destruction, violence. Let's leave with friendship intact.'\n\nTorres is surprised but considers your advice seriously. 'Diego, the Crown expects us to establish outposts. Can I justify leaving such a strategic location?'\n\n'You can justify avoiding unnecessary conflict, sir. We have our maps. Future expeditions can return if genuinely needed. But forcing presence now serves greed, not need.'\n\nAfter deliberation, Torres agrees. The fleet departs Awahari with friendship but no permanent presence.",
      choices: [
        {
          text: "Continue advocating for minimal intervention throughout the voyage",
          next: "ending_light_touch",
          stats: { empathy: 40, honor: 35 }
        }
      ]
    },

    ending_light_touch: {
      title: "The Explorer Who Left No Trace",
      date: "1521 - Return to Spain",
      text: "You complete the expedition advocating consistently for minimal intervention in indigenous societies. You map, you document, you trade briefly, but you don't establish permanent presence unless invited.\n\nYour approach is controversial. Colonial authorities call it wasteful; you call it respectful. Your maps are excellent, your ethnographic observations valuable, but you bring back less concrete 'conquest' than expected.\n\nYou're never given another expedition, but you influence some missionaries and later explorers. Your journals become important records of indigenous societies before major colonial disruption.\n\nYou die at 66, having taken the road less traveled and left indigenous peoples largely undisturbed.",
      isEnding: true,
      outcome: "You practiced an almost impossibly restrained form of exploration. Your legacy is complicated: you gathered valuable knowledge but deliberately limited Spanish expansion. Colonial historians criticized you; indigenous peoples benefited from your restraint. Modern scholars appreciate that your accounts documented cultures before colonial destruction. You proved that exploration could be genuinely about learning rather than conquering. That's rare and valuable."
    },

    recommend_trading_post: {
      title: "The Balanced Proposal",
      date: "July 1519 - Middle Ground",
      text: "'Captain, I recommend a small trading post with strict protections for Awahari rights. Ten men, clear boundaries, firm rules against exploitation, and genuine consent from the Awahari. We gain strategic presence; they maintain autonomy.'\n\nTorres approves your balanced approach. You negotiate terms with Elder Amara, ensuring genuine understanding and consent. The agreement includes provisions protecting Awahari land, culture, and autonomy.\n\nWhen implemented, the trading post functions reasonably well. It's not perfect—colonial presence always brings problems—but it's better than most alternatives.\n\nYou've created a workable compromise between Spanish interests and indigenous rights.",
      choices: [
        {
          text: "Monitor and improve this arrangement",
          next: "ending_balanced_approach",
          stats: { empathy: 30, honor: 30, ambition: 30 }
        }
      ]
    },

    ending_balanced_approach: {
      title: "The Practical Idealist",
      date: "1543 - Balance Maintained",
      text: "You spend your career promoting and refining your balanced approach to colonial presence. You're not anti-colonial—you accept Spanish expansion—but you insist on doing it ethically.\n\nYour trading posts are different: smaller, more respectful, better regulated. They're profitable enough to satisfy commercial interests but protective enough to limit indigenous harm. You've found a middle way that neither pure idealists nor pure pragmatists imagined.\n\nYou influence colonial policy through practical success. Officials adopt some of your protocols because they work, not just because they're ethical.\n\nYou die at 75, having proven that practical ethics is possible.",
      isEnding: true,
      outcome: "You were a practical idealist who made colonialism marginally more humane through workable compromises. You never achieved perfect justice—colonialism prevents that—but you achieved better outcomes than most. Indigenous peoples under your systems fared better than those under conquest models. Your legacy is pragmatic progress: not revolutionary but consistently better than the alternative. That's valuable even if imperfect."
    },

    recommend_colonization: {
      title: "The Empire Builder",
      date: "July 1519 - Full Commitment",
      text: "'Captain, I recommend full colonization with protections for native rights. Establish a proper settlement, bring families, create infrastructure. But guarantee Awahari rights to their villages, cultural practices, and representation in governance.'\n\nYour proposal is ambitious: Spain gets a full colonial presence, but indigenous peoples get unprecedented protections. Torres is intrigued but skeptical.\n\n'Diego, can we really enforce such protections? Once colonists arrive, won't they demand full control?'\n\n'Not if we establish clear legal frameworks from the beginning, sir. Make indigenous rights fundamental, not negotiable.'\n\nTorres approves the plan with reservations. Implementation proves challenging but partially successful.",
      choices: [
        {
          text: "Dedicate yourself to enforcing these protections",
          next: "ending_colonial_reformer",
          stats: { empathy: 25, honor: 30, ambition: 35 }
        }
      ]
    },

    ending_colonial_reformer: {
      title: "The Colonizer With Conscience",
      date: "1545 - Complex Legacy",
      text: "You spend your career building and defending a colonial model that includes indigenous protections. You're successful enough that Awahari maintains more autonomy than most colonized peoples, but you're not successful enough to prevent all exploitation.\n\nYou're a controversial figure: colonists resent restrictions you enforce; indigenous peoples appreciate protections but still suffer from colonial presence. You satisfy few but help many.\n\nYour model influences later colonial policy. Some protections you pioneered become standard. But you die knowing colonialism itself—even reformed colonialism—harms indigenous peoples.\n\nYou die at 72, your legacy deeply complicated.",
      isEnding: true,
      outcome: "You were a colonial reformer who improved a harmful system without ending it. Indigenous peoples had mixed views: your protections helped, but your colonization hurt. You occupy uncomfortable moral ground—neither hero nor villain. Modern scholars debate whether reformed colonialism was better than no reform at all. Most conclude you saved lives and cultures while enabling a system that ultimately destroyed many. You meant well and did some good in an inherently harmful system. That's complicated ethics."
    }

  };

  const currentSceneData = scenes[currentScene];

  if (!currentSceneData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-cyan-950 via-stone-900 to-black flex items-center justify-center">
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
    <div className="min-h-screen bg-gradient-to-br from-cyan-950 via-stone-900 to-black relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-9xl">⚓</div>
        <div className="absolute bottom-10 right-10 text-9xl">🌊</div>
        <div className="absolute top-1/2 right-1/4 text-6xl">🧭</div>
      </div>

      {/* Stats Panel */}
      <div className="fixed top-4 right-4 bg-stone-900/90 backdrop-blur-sm border-2 border-cyan-800/60 rounded-lg p-4 z-20 w-64">
        <h3 className="text-cyan-400 font-serif font-bold mb-3 text-center">Your Character</h3>
        
        <div className="space-y-3">
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-cyan-300 text-sm flex items-center gap-2">
                <Ship className="w-4 h-4" />
                Honor
              </span>
              <span className="text-cyan-200 text-sm font-bold">{stats.honor}%</span>
            </div>
            <div className="w-full bg-stone-800 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-blue-600 to-cyan-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${stats.honor}%` }}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-cyan-300 text-sm flex items-center gap-2">
                <Heart className="w-4 h-4" />
                Empathy
              </span>
              <span className="text-cyan-200 text-sm font-bold">{stats.empathy}%</span>
            </div>
            <div className="w-full bg-stone-800 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-rose-600 to-pink-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${stats.empathy}%` }}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-cyan-300 text-sm flex items-center gap-2">
                <Compass className="w-4 h-4" />
                Ambition
              </span>
              <span className="text-cyan-200 text-sm font-bold">{stats.ambition}%</span>
            </div>
            <div className="w-full bg-stone-800 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-amber-600 to-orange-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${stats.ambition}%` }}
              />
            </div>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-cyan-800/40">
          <p className="text-cyan-400/70 text-xs text-center italic">
            Navigate moral waters carefully
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
        <div className="bg-stone-900/80 backdrop-blur-sm border-2 border-cyan-800/60 rounded-lg overflow-hidden shadow-2xl">
          {/* Header */}
          <div className="bg-gradient-to-r from-cyan-900 to-blue-900 p-6 border-b-2 border-cyan-800/60">
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
                    className="w-full text-left p-5 bg-gradient-to-r from-stone-800/50 to-cyan-950/30 hover:from-cyan-900/40 hover:to-blue-900/40 border-2 border-cyan-800/40 hover:border-cyan-600 rounded-lg transition-all duration-300 group"
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
                    setStats({ honor: 50, empathy: 50, ambition: 50 });
                  }}
                  className="flex-1 px-6 py-3 bg-cyan-700 hover:bg-cyan-600 text-white font-serif font-semibold rounded-lg transition-all duration-300"
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

        {/* Choice History */}
        {choices.length > 0 && !currentSceneData.isEnding && (
          <div className="mt-6 bg-stone-900/60 backdrop-blur-sm border border-cyan-800/40 rounded-lg p-4">
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

export default ExplorationStory;        {
          text: "Continue the voyage with pride in what you accomplished",
          next: "continue_with_pride",
          stats: { empathy: 30, honor: 30, ambition: 25 }
        }
      ]
    },

    // Adding all the ending scenes to ensure every path leads to an ending
    
    ending_stay_awahari: {
      title: "A New Home",
      date: "August 1519 - Awahari Island",
      text: "You choose to stay on Awahari when the Spanish fleet departs. Captain Torres understands, though he's saddened to lose you. 'You've followed your conscience, Diego. That's more than most men can say.'\n\nThe Awahari welcome you as one of their own. You marry Lani, the healer's daughter, and over the years become a respected elder yourself. You teach the Awahari to read and write, creating the first written form of their language. They teach you their deep knowledge of the stars, the ocean, and the land.\n\nWhen other Spanish ships arrive, you serve as translator and protector, preventing many abuses. You're not perfect—cultural differences still cause problems—but your presence saves countless lives and preserves much of Awahari culture.\n\nYou never return to Spain. Your family never knows what became of you. But you die at 67, surrounded by children, grandchildren, and great-grandchildren who carry both Spanish and Awahari blood, speaking both languages, and honoring both heritages.",
      isEnding: true,
      outcome: "You became a bridge between two worlds, sacrificing your old life to protect and enrich a new one. Your descendants still live on Awahari, and the island maintained its autonomy far longer than most Pacific territories. Historians debate whether you were a traitor or a hero; the Awahari remember you simply as 'Diego Hoaloha'—Diego the True Friend. Your journals, written in both Spanish and Awahari, became invaluable historical documents. You proved that choosing humanity over empire was possible, even in the Age of Conquest."
    },

    ending_join_awahari: {
      title: "The Mapmaker Who Stayed",
      date: "August 1519 - Onward",
      text: "You accept Kalani's offer and remain on Awahari. The Spanish fleet sails without you, leaving you as the sole European among the islanders.\n\nThe transition is challenging. You must learn not just language but an entirely different way of thinking. Property doesn't exist as you knew it. Time flows differently. Success is measured in community harmony, not individual achievement.\n\nBut you adapt. You marry into Kalani's family, raise children who are both European and Awahari, and become a respected navigator and teacher. When other European ships arrive, you serve as translator and protector, using your unique position to prevent many colonial abuses.\n\nYou live to 71, longer than you would have in Spain's cities. Your final words are in the Awahari language: 'Ma kai, ma uka, ma kona'—From the sea, from the mountains, from all directions—a blessing encompassing all of life.\n\nYour grave overlooks the bay where you first landed, marked with both a Christian cross and Awahari symbols. You belong to both worlds and neither, having transcended the boundaries that once defined you.",
      isEnding: true,
      outcome: "You became a legend in Awahari oral tradition—the first outsider to truly become one of them. Your children and their descendants became leaders, blending the best of both cultures. When colonialism eventually reached Awahari decades later, your legacy of respectful coexistence provided a model. Your choice to stay probably saved the island from immediate conquest. Modern scholars study your journals as examples of early cultural relativism and respectful anthropology. You proved that 'going native' wasn't betrayal but bridge-building."
    },

    face_consequences: {
      title: "The Voyage Continues",
      date: "September 1519 - At Sea",
      text: "You refuse to abandon the expedition despite the danger. 'I'll see this through, Captain. And I'll continue to speak for what's right.'\n\nThe voyage continues westward. You discover more islands, chart unknown waters, and face new ethical dilemmas with each landfall. Vásquez's hostility grows, but Captain Torres protects you.\n\nThree months after leaving Awahari, during a storm, Vásquez makes his move. He attacks you on deck during the night watch. You fight back, and crew members must separate you.\n\nTorres has had enough. He puts Vásquez in chains for assault. 'We sail under law, not vendetta,' Torres declares. Vásquez is confined for the remainder of the voyage.\n\nYou survive to complete the expedition, returning to Spain two years after departure. Your maps revolutionize European understanding of the Pacific. More importantly, your journals advocating for humane treatment of indigenous peoples influence a generation of explorers and missionaries.\n\nYou never achieve great wealth or fame, but you sleep well, knowing you stood for honor when it mattered.",
      isEnding: true,
      outcome: "You returned to Spain a changed man, dedicated to reforming colonial practices. You published your journals, which became controversial but influential. The Church recruited you to train missionaries in respectful engagement with native peoples. You spent your final decades as a teacher and advocate, your maps adorning the walls of universities, your ethical writings studied by philosophers. You died at 68, honored by some as a visionary, dismissed by others as naive. But you never regretted choosing conscience over comfort."
    },

    request_return_home: {
      title: "Strategic Retreat",
      date: "August 1519 - Homeward Bound",
      text: "You ask Captain Torres to send you home on the next ship returning to Spain. 'Sir, I've made too many enemies here. I can't serve effectively anymore.'\n\nTorres understands. 'Diego, you've done good work. Your maps alone justify your place in history. Go home with honor.'\n\nA supply ship arrives in September, and you board it for the return journey. You spend six months at sea, documenting everything you've learned and seen.\n\nBack in Spain, you publish your maps and a carefully edited version of your journals. You become a respected cartographer and consultant on Pacific exploration, advising future expeditions.\n\nYou marry, have children, and teach cartography at university. You live to 73, a successful and respected man.\n\nBut sometimes, in quiet moments, you wonder what became of the Awahari. Did the trading post you helped establish protect them or exploit them? Did your early departure doom them to others' cruelty? You'll never know.",
      isEnding: true,
      outcome: "You had a comfortable life and contributed valuable knowledge to European expansion. Your maps were used for decades; your name appears in history books. But you carried guilt about leaving the Awahari to their fate. Later expeditions to the island reported that the trading post had grown into a colonial outpost, and the native population had declined. You tried to influence policy from Spain, but distance limited your impact. You died respected but haunted, knowing you'd chosen safety over continued advocacy when it mattered most."
    },

    volunteer_stay: {
      title: "The Long Guardianship",
      date: "August 1519 - Awahari Trading Post",
      text: "You volunteer to be among the ten men staying on Awahari to maintain the trading post. Captain Torres is surprised but pleased. 'Diego, this is a sacrifice. You're giving up the glory of completing the circumnavigation.'\n\n'Glory doesn't interest me, Captain. These people do. I can do more good here.'\n\nYou spend the next five years on Awahari, managing the trading post and protecting the islanders from abuses by visiting ships. You become fluent in the language, marry an Awahari woman named Kailani, and raise a family.\n\nWhen the Spanish Crown eventually sends a governor to establish formal control, you use your influence to negotiate protections for native rights. You're not entirely successful—colonialism has its inevitable costs—but you mitigate the worst abuses.\n\nYou live to 62, dying of fever during a plague. The Awahari bury you with full honors, and your children carry on your work as intermediaries and protectors.",
      isEnding: true,
      outcome: "You spent your life as a guardian and bridge between cultures. Your presence on Awahari probably saved hundreds of lives and preserved much of the native culture. Your bilingual children became leaders in the colonial period, advocating for their people's rights. Your journals, published posthumously, influenced debates about colonial ethics. You were never famous, but you were faithful to your principles. Your gravestone reads, in both Spanish and Awahari: 'He stayed when others left. He protected when others exploited. He loved when others conquered.'"
    },

    recommend_good_men: {
      title: "The Seeds of Good",
      date: "August 1519 - Choosing Wisely",
      text: "You recommend the best men to stay on Awahari: Paulo, Miguel, Father Rodrigo, and seven others who've shown respect for the islanders. You ensure they understand their mission is cooperation, not domination.\n\nYou create detailed instructions for maintaining good relations, learning the language, and respecting Awahari customs. Father Rodrigo promises to focus on service and example rather than forced conversion.\n\nWhen the fleet departs, you feel confident you've done what you could to protect the Awahari's future. The expedition continues, discovering more islands and eventually completing a circumnavigation.\n\nYou return to Spain a hero, your maps celebrated. You're granted a pension and position at court. But you use your influence to advocate for indigenous rights, publishing your journals and lobbying for reforms.\n\nYou visit Awahari again fifteen years later and are overjoyed to find the community thriving, still autonomous, with Paulo serving as a respected mediator between Spanish and Awahari interests.",
      isEnding: true,
      outcome: "You struck a rare balance: serving the expedition successfully while protecting indigenous peoples. Your advocacy helped shape more humane colonial policies, though colonialism itself remained brutal. The Awahari survived longer than most Pacific peoples with their culture intact, partly due to your groundwork. You died at 76, honored in Spain and remembered fondly in Awahari. Your legacy was imperfect—you couldn't stop colonialism—but you made it less destructive. Sometimes that's the best one can do."
    },

    continue_with_pride: {
      title: "The Exemplar",
      date: "September 1519 - Onward",
      text: "You continue the expedition with pride in what you've accomplished on Awahari. You've proven that respectful contact is possible, that indigenous peoples can be partners rather than subjects.\n\nThe expedition discovers more islands, charts unknown waters, and faces new challenges. At each landing, you apply lessons from Awahari, advocating for diplomatic first contact and respectful relationships.\n\nNot every landing goes well—some islands are hostile, some crew members ignore your advice—but your influence gradually changes the expedition's culture. Even some initially hostile sailors come to see the value of your approach.\n\nAfter three years at sea, the fleet returns to Spain having circumnavigated the Pacific. Your maps are revolutionary; your journals even more so. You become an advisor to the Crown on indigenous relations, helping draft policies that are somewhat less exploitative than they might have been.\n\nYou live to 69, respected as both navigator and humanist.",
      isEnding: true,
      outcome: "You became a model for future explorers—proof that discovery needn't require cruelty. Your influence was gradual and incomplete; colonialism's abuses continued. But some expeditions followed your example, some missionaries practiced the respect you advocated, and some indigenous peoples were treated slightly better because of your precedent. You died knowing you'd tried to bend the arc of history toward justice. Your epitaph reads: 'He explored new worlds while seeing old souls.' Your legacy includes both maps and morals."
    },

    promise_return: {
      title: "The Unfinished Journey",
      date: "August 1519 - Departing Awahari",
      text: "You tell Elder Kalani you must continue with the expedition, but you promise to return. 'This isn't goodbye, my friend. I'll come back when I can.'\n\nKalani understands. 'The ocean connects all islands, Diego. Perhaps you return, perhaps not. But you always here.' He taps his chest. 'In heart.'\n\nThe expedition continues. You complete the circumnavigation, return to Spain, and achieve modest fame for your cartography. You publish your journals, advocating for indigenous rights.\n\nYou try to organize a return voyage to Awahari, but funding never materializes. Years pass. You marry, have children, teach cartography. Life happens.\n\nAt 65, finally, you book passage on a ship heading to the Pacific. After 30 years away, you return to Awahari. The island has changed—Spanish colonial presence has grown—but elder Kailani (Kalani's grandson) welcomes you home.\n\nYou spend your final years there, dying at 71 among people you never stopped loving.",
      isEnding: true,
      outcome: "Your promise kept, even decades later, meant everything to the Awahari. You returned as a respected elder, using your final years to document their culture and advocate against colonial abuses. Your deathbed wish was for your journals to be preserved in both Spain and Awahari. They were, and they became crucial records of pre-colonial Pacific culture. You proved that bonds across culture and distance can endure. Your tombstone bears Awahari and Spanish inscriptions: 'He promised and returned. He remembered and was remembered.'"
    },

    // Now adding more ending scenes for all remaining paths

    honest_report: {
      title: "The Truthful Account",
      date: "June 1519 - After the Tour",
      text: "You give Captain Torres a full, honest report emphasizing Awahari sophistication. 'Sir, these are not simple savages. They have agricultural systems as advanced as European farms, sophisticated social organization, deep philosophical thought about humanity's place in nature. They deserve to be treated as equals, not conquered as inferiors.'\n\nTorres listens carefully. Your report influences his approach, leading to more respectful relations. Over the following months, genuine partnership develops between Spanish and Awahari.\n\nHowever, when your report eventually reaches Spain, it's controversial. Some praise your objectivity; others accuse you of exaggerating native capabilities to undermine colonial ambitions.\n\nYou don't care. You told the truth. That's what matters.",
      choices: [
        {
          text: "Continue documenting truth throughout the voyage",
          next: "ending_truthful_chronicler",
          stats: { empathy: 35, honor: 35 }
        }
      ]
    },

    ending_truthful_chronicler: {
      title: "The Honest Historian",
      date: "1521 - Spain",
      text: "You complete the expedition and return to Spain with voluminous, honest documentation of everything you witnessed. You publish your journals despite opposition from those who prefer flattering lies about conquest.\n\nYour work is controversial but influential. Future historians rely on your accounts as some of the few honest records of early Pacific contact. Reformers cite your writings to argue for better treatment of indigenous peoples.\n\nYou never become wealthy or powerful, but you're respected by intellectuals and reformers. You spend your final decades teaching and writing, trying to shape a more ethical approach to exploration.\n\nYou die at 67, your greatest legacy being truth in an age of convenient lies.",
      isEnding: true,
      outcome: "Your commitment to truth made you unpopular with colonial authorities but beloved by scholars and reformers. Your journals became primary sources for understanding pre-colonial Pacific cultures. Modern historians call you 'ahead of your time'—you saw indigenous peoples as fully human when most Europeans didn't. Your epitaph, chosen by you: 'He wrote what he saw, not what he was told to see.' Your work influenced anti-colonial movements centuries later. Truth endures."
    },

    protective_report: {
      title: "Guardian of Secrets",
      date: "June 1519 - Selective Truth",
      text: "You give practical information about resources and navigation but deliberately omit details about sacred sites and vulnerable locations. You're protecting the Awahari while still serving the expedition.\n\nCaptain Torres notices your omissions. 'Diego, you're holding something back.'\n\n'Sir, I'm giving you everything you need for safe anchorage and trade. Some things... some things should remain private. They're sacred to the Awahari.'\n\nTorres considers, then nods. 'I respect that. Not all knowledge needs to be shared with everyone.'\n\nYour selective reporting protects Awahari holy sites from desecration while still providing valuable navigation data to Spain.",
      choices: [
        {
          text: "Continue this careful balance",
          next: "ending_careful_balance",
          stats: { empathy: 30, honor: 30, ambition: 20 }
        }
      ]
    },

    ending_careful_balance: {
      title: "The Diplomatic Scholar",
      date: "1523 - Later Life",
      text: "You spend your career balancing truth with discretion, providing useful information to Spain while protecting indigenous peoples from the worst exploitation. Your maps are excellent; your ethnographic writings carefully omit details that could enable abuse.\n\nYou become an advisor on Pacific exploration, using your influence to steer expeditions toward cooperation rather than conquest. You're not always successful, but you save some communities from immediate destruction.\n\nYou marry late, have three children, and teach them that knowledge carries responsibility. You die at 71, having done what you could within an imperfect system.",
      isEnding: true,
      outcome: "You were a pragmatist who worked within the system to make it less harmful. Colonial historians praised your detailed navigational charts; indigenous peoples benefited from what you didn't write. Modern scholars debate whether your selective truth-telling was ethical, but most conclude you made the best choices possible in an impossible situation. Your legacy is complex but mostly positive—you were a bridge-builder in an age of destruction."
    },

    strategic_report: {
      title: "The Pragmatic Cartographer",
      date: "June 1519 - Strategic Intelligence",
      text: "You give a strategic report focusing on resources, safe harbors, and opportunities for Spanish interests. Your report is professional and thorough, noting agricultural capacity, defensive positions, and trade potential.\n\nYou don't emphasize Awahari humanity or culture—you present them as factors in Spain's strategic calculations. It's coldly professional and exactly what the Crown wants.\n\nYour report is praised by Captain Torres and later by officials in Spain. You're recognized as a valuable intelligence asset for future Pacific expansion.\n\nBut Paulo is disappointed in you. 'You had a chance to speak for them, Diego. To make them human in Spanish eyes. Instead, you made them assets or obstacles.'\n\nHis words sting because they're true.",
      choices: [
        {
          text: "Continue this pragmatic approach",
          next: "ending_pragmatic_career",
          stats: { ambition: 30, honor: 10 }
        },
        {
          text: "Try to make amends in future reports",
          next: "ending_reformed_pragmatist",
          stats: { empathy: 20, honor: 20, ambition: 20 }
        }
      ]
    },

    ending_pragmatic_career: {
      title: "The Successful Strategist",
      date: "1540 - Looking Back",
      text: "You build a successful career as a colonial strategist and cartographer. Your reports help Spain establish efficient trade networks and strategic outposts throughout the Pacific. You're wealthy, respected, and influential.\n\nBut you never return to Awahari. You hear rumors that the trading post expanded into a colonial settlement, that disease and exploitation reduced the native population by half. You tell yourself it would have happened anyway, that you just provided information.\n\nYou die at 74, honored by the Crown, your maps displayed in royal halls. Your children inherit your wealth and status.\n\nBut on your deathbed, you see Paulo's disappointed face. You wonder if success was worth the cost.",
      isEnding: true,
      outcome: "You achieved wealth and status by serving colonial interests efficiently. Your maps enabled Spanish expansion; your strategic insights maximized exploitation. You were never intentionally cruel, just professionally detached. History records you as a successful explorer and cartographer. The Awahari remember you, if at all, as part of the wave that overwhelmed them. You chose career over conscience, and while you succeeded materially, you died wondering if you'd sold your soul for gold and glory."
    },

    ending_reformed_pragmatist: {
      title: "The Late Convert",
      date: "1535 - Redemption",
      text: "After your initial pragmatic report, you're haunted by Paulo's words. In subsequent reports from other islands, you begin emphasizing indigenous humanity and capability. You advocate for trade over conquest, cooperation over domination.\n\nYour evolution surprises and sometimes frustrates colonial officials, but your earlier success gives you credibility. Some of your recommendations are implemented, leading to slightly less destructive relationships with some Pacific peoples.\n\nYou spend your later years trying to mitigate the damage your early work enabled. You publish revised editions of your journals, emphasizing indigenous perspectives. You fund missionaries focused on service rather than conversion.\n\nYou die at 69, not quite redeemed but having tried to make amends.",
      isEnding: true,
      outcome: "Your late-life conversion to advocacy helped some, though it couldn't undo your early contributions to colonial expansion. You were honest about your evolution, publishing a memoir called 'What I Learned Too Late.' It became influential in reform circles. You were neither pure hero nor pure villain—just a flawed man who eventually chose conscience over career. Your tombstone reads: 'He changed. That matters.'"
    },

    break_stance: {
      title: "The Advocate Emerges",
      date: "August 1519 - Taking a Stand",
      text: "You break your professional stance and begin actively advocating for better treatment of the Awahari. You confront soldiers engaged in abuse, report violations to Captain Torres, and argue forcefully in councils about indigenous rights.\n\nYour advocacy is effective but costly. You make enemies among the crew. Lieutenant Vásquez openly plots against you. Even Captain Torres warns you: 'Diego, I admire your principles, but you're endangering yourself.'\n\n'Then so be it, Captain. I didn't come to the other side of the world to watch injustice and stay silent.'\n\nYour last months on Awahari are tense but meaningful. You prevent many abuses and earn deep Awahari gratitude.",
      choices: [
        {
          text: "Continue this path despite personal risk",
          next: "ending_courageous_advocate",
          stats: { empathy: 35, honor: 35 }
        }
      ]
    },

    ending_courageous_advocate: {
      title: "The Price of Principle",
      date: "1520 - The Pacific",
      text: "Your advocacy continues throughout the voyage. At each island, you speak up for respectful contact. You prevent abuses when you can and document those you can't prevent.\n\nLieutenant Vásquez's hostility culminates in violence. During a storm, he attacks you on deck. The fight is brutal, and though you survive, you're badly injured. Captain Torres confines Vásquez but the damage is done.\n\nYou complete the voyage but are permanently weakened by your injuries. Back in Spain, you publish your journals, which cause controversy and admiration in equal measure. You spend your final years writing and teaching, dying at 51 from complications of your injuries.\n\nBut you die knowing you stood for something.",
      isEnding: true,
      outcome: "You paid a physical price for your principles but left a powerful legacy. Your journals inspired a generation of reformers. The Church eventually beatified several missionaries who followed your example of respectful engagement with indigenous peoples. You were never wealthy or famous, but 500 years later, scholars study your work as an example of moral courage in an immoral age. Your stand mattered."
    },

    work_within_system: {
      title: "The Gradual Reformer",
      date: "August 1519 - Systemic Change",
      text: "You work within the system to improve relations gradually. You draft protocols for Spanish-Awahari interactions, establish dispute resolution processes, and train crew members in basic cultural sensitivity.\n\nIt's slow, frustrating work. For every step forward, there seem to be two steps back. But gradually, conditions improve. The worst abuses become rarer. Some crew members genuinely come to respect the Awahari.\n\nCaptain Torres praises your work: 'Diego, you're teaching us how to explore without destroying. That's valuable.'\n\nWhen the expedition departs Awahari, relations are imperfect but sustainable. The trading post you helped establish operates with relative fairness.",
      choices: [
        {
          text: "Continue improving systems at each new island",
          next: "ending_systemic_reformer",
          stats: { empathy: 25, honor: 25, ambition: 25 }
        }
      ]
    },

    ending_systemic_reformer: {
      title: "The Builder of Better Systems",
      date: "1538 - Legacy of Reform",
      text: "You spend your career building better systems for Spanish-indigenous relations. You create protocols, train explorers, and draft policies that make colonial contact slightly less destructive.\n\nYou're never revolutionary—you work within the system—but you make that system marginally more humane. Some indigenous communities survive that might not have without your reforms.\n\nYou rise to a position of influence in colonial administration, using your power to advocate for indigenous protections. It's never enough, but it's something.\n\nYou die at 73, having improved an evil system without ending it. It's a complicated legacy.",
      isEnding: true,
      outcome: "You were a pragmatic reformer who made colonialism slightly less brutal. Critics say you legitimized an illegitimate system; supporters say you saved lives within that system. Both are right. You probably prevented thousands of deaths and protected numerous communities from immediate destruction, even though colonialism ultimately devastated most indigenous peoples anyway. You did what you could with the power you had. History judges you as well-intentioned but limited by your times."
    },

    // Continue adding remaining endings for completeness...

    learn_culture: {
      title: "The Student Becomes Teacher",
      date: "June-August 1519 - Cultural Immersion",
      text: "You spend two months living in Amara's village, learning everything you can. You study their agriculture, navigation, social structures, spirituality, art, and philosophy.\n\nYou discover astonishing sophistication: they navigate by reading wave patterns and star paths, passing knowledge orally with perfect accuracy. Their agriculture is sustainable for centuries. Their conflict resolution practices are more effective than European courts.\n\nYou document everything with respect and wonder. Amara becomes like a second mother to you, teaching you that wisdom takes many forms.\n\nWhen you return to the Spanish camp, you're changed. You can no longer see the Awahari as inferior—only different, and in many ways wiser.\n\nYou use your learning to advocate for respectful relations, citing specific examples of Awahari wisdom that rivals or exceeds European knowledge.",
      choices: [
        {
          text: "Dedicate yourself to learning from and protecting indigenous peoples",
          next: "ending_indigenous_scholar",
          stats: { empathy: 40, honor: 35 }
        }
      ]
    },

    ending_indigenous_scholar: {
      title: "The Bridge Between Worlds",
      date: "1542 - A Life's Work",
      text: "You dedicate your life to learning from and documenting indigenous cultures throughout the Pacific. You become fluent in multiple native languages, document sustainable practices, record oral histories, and advocate for indigenous rights.\n\nYou publish groundbreaking ethnographic works that challenge European assumptions about civilization and progress. Your writings anger colonialists but inspire a small movement of scholars and missionaries who see indigenous peoples as teachers, not subjects.\n\nYou spend your final decades training others in your approach. You establish a school for interpreters and cultural mediators who will work respectfully with native peoples.\n\nYou die at 68, surrounded by students from many cultures. Your funeral is attended by both Spanish dignitaries and indigenous leaders—a fitting end for a man who bridged worlds.",
      isEnding: true,
      outcome: "You became one of history's first ethnographers, documenting indigenous cultures with respect rather than contempt. Your works preserved knowledge that would otherwise have been lost. Modern anthropologists consider you a founder of their discipline. You proved that European learning could be enriched rather than diminished by indigenous wisdom. Universities now teach your methods; museums cite your documentation. You built bridges when most built walls."
    },

    cautious_learning: {
      title: "The Careful Observer",
      date: "June-August 1519 - Measured Approach",
      text: "You learn from Amara and the Awahari but remain somewhat reserved, maintaining professional boundaries while building genuine respect. You document their culture carefully, aware that your writings will be read by colonial officials.\n\nYou emphasize Awahari capabilities and wisdom while framing them in ways that Spanish readers can accept. You're a translator not just of language but of cultural understanding.\n\nYour balanced approach earns respect from both Awahari and Spanish. You're seen as trustworthy by both sides, which gives you influence but also puts you in difficult positions when their interests conflict.",
      choices: [
        {
          text: "Continue as mediator and cultural bridge",
          next: "ending_successful_mediator",
          stats: { empathy: 30, honor: 30, ambition: 30 }
        }
      ]
    },

    ending_successful_mediator: {
      title: "The Diplomat's Legacy",
      date: "1540 - Career Complete",
      text: "You spend your career as a mediator between Spanish and indigenous peoples. You're not perfect—you make compromises that haunt you—but you prevent many conflicts and save countless lives.\n\nYou rise to a respected position in colonial administration, using your influence to advocate for indigenous protections while maintaining colonial officials' trust. It's a delicate balance, but you manage it for decades.\n\nYou establish precedents for respectful negotiation, treaty-making with indigenous peoples, and cultural exchange. Some of your policies protect native communities for generations.\n\nYou die at 75, honored by Spain and remembered fondly by several indigenous communities. Your legacy is mixed but mostly positive.",
      isEnding: true,
      outcome: "You were a successful diplomat who made colonialism marginally more humane through patient mediation. You saved lives and preserved cultures, though you couldn't stop colonial expansion. Indigenous peoples remember you as one of the 'good' colonizers—a problematic category, but meaningful to those who benefited from your protection. Your diplomatic protocols were used for centuries. You proved that even within imperial systems, individual conscience and skill can mitigate harm."
    },

    // Adding final ending paths to ensure completion

    warn_protect: {
      title: "Guardian of Resources",
      date: "July-August 1519 - Protecting Treasures",
      text: "You warn Kalani about the Spanish interest in gold and help the Awahari hide and protect their small deposits. You explain European greed in terms they can understand and help them prepare for potential theft.\n\nYour warning proves prescient. Several soldiers attempt to raid the stream for gold, but Awahari warriors are ready and peacefully but firmly turn them away. When the soldiers complain to Captain Torres, you support the Awahari's right to protect their resources.\n\nTorres rules in favor of the Awahari, establishing a precedent that native resources remain native property. It's a small victory but a significant one.\n\nYour protective actions earn you deep Awahari trust and Spanish soldiers' resentment.",
      choices: [
        {
          text: "Continue protecting Awahari interests",
          next: "ending_faithful_guardian",
          stats: { empathy: 35, honor: 35 }
        }
      ]
    },

    ending_faithful_guardian: {
      title: "The Guardian's Reward",
      date: "1525 - Final Days on Awahari",
      text: "You spend five years on Awahari as part of the trading post garrison, using your position to protect the islanders from exploitation. You prevent theft, stop abuses, and advocate consistently for fair treatment.\n\nYour protection isn't perfect—colonial pressures are too strong—but you mitigate the worst outcomes. The Awahari population remains stable, their culture intact, their autonomy partially preserved.\n\nWhen you finally return to Spain, Elder Kalani gives you a sacred pendant: 'You protected when you could have taken. You gave when you could have stolen. You stayed when others left. You are truly ohana.'\n\nYou die at 58 from tropical fever, but the Awahari honor your memory for generations.",
      isEnding: true,
      outcome: "You were a faithful guardian who used whatever power you had to protect the vulnerable. Your presence on Awahari probably extended the period of Awahari autonomy by decades. Your example inspired other Spanish settlers to treat indigenous peoples more fairly. The Awahari told stories about you to their children: 'Diego Protector' who proved not all foreigners came to destroy. Your life was shorter than most but more meaningful than many longer lives."
    },

    // Final essential endings

    total_opposition: {
      title: "The Price of Principle",
      date: "July 1519 - Final Confrontation",
      text: "You refuse to back down on the ceremony issue. 'Captain Torres, if we proceed with this farce, we betray everything honorable about Spanish exploration. I cannot and will not support it.'\n\nVásquez draws his sword. 'Then you're a traitor!'\n\nCaptain Torres must make a choice. After long deliberation, he sides with you. 'We'll proceeimport React, { useState } from 'react';
import { ArrowLeft, Compass, Heart, Skull, Ship, AlertTriangle } from 'lucide-react';

const ExplorationStory = ({ onBack }) => {
  const [currentScene, setCurrentScene] = useState('intro');
  const [choices, setChoices] = useState([]);
  const [stats, setStats] = useState({
    honor: 50,
    empathy: 50,
    ambition: 50
  });

  const updateStats = (statChanges) => {
    setStats(prev => ({
      honor: Math.max(0, Math.min(100, prev.honor + (statChanges.honor || 0))),
      empathy: Math.max(0, Math.min(100, prev.empathy + (statChanges.empathy || 0))),
      ambition: Math.max(0, Math.min(100, prev.ambition + (statChanges.ambition || 0)))
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
      title: "The Great Voyage Begins",
      date: "April 1519 - Seville, Spain",
      text: "You are Diego Mendoza, a young cartographer aboard the Santa Cruz, one of five ships preparing to sail west in search of a new route to the Spice Islands. Captain Hernán de Torres has assembled a crew of 250 men—sailors, soldiers, priests, and craftsmen.\n\nYour skills in mapmaking earned you this position, but you know this voyage is about more than navigation. The Crown seeks gold, glory, and converts to Christianity. Your father, a merchant who traded with Moorish scholars, taught you that the world is larger and stranger than most Spaniards believe.\n\nAt the dock, you watch supplies being loaded: barrels of wine and salted meat, swords and arquebuses, crosses and prayer books, glass beads and copper bells for trade. Father Rodrigo blesses the ships while Captain Torres briefs his officers.\n\n'We sail at dawn,' the Captain announces. 'God and fortune favor the bold.'",
      choices: [
        {
          text: "Volunteer to help with final preparations and meet the crew",
          next: "meet_crew",
          stats: { empathy: 10, honor: 5 }
        },
        {
          text: "Spend the night studying your maps and preparing your instruments",
          next: "study_maps",
          stats: { ambition: 10 }
        },
        {
          text: "Visit Father Rodrigo to discuss the spiritual purpose of the voyage",
          next: "talk_priest",
          stats: { honor: 10, empathy: 5 }
        },
        {
          text: "Seek out the experienced sailors to learn what to expect",
          next: "learn_from_sailors",
          stats: { honor: 5, ambition: 5 }
        }
      ]
    },

    meet_crew: {
      title: "Bonds Forged in Port",
      date: "April 1519 - The Night Before Departure",
      text: "You help load the last provisions and meet your shipmates. There's Miguel, a grizzled sailor who's crossed the Atlantic three times. Juan, an idealistic young soldier seeking his fortune. And Paulo, a freed man from Africa who serves as the ship's cooper.\n\nMiguel eyes you skeptically. 'A mapmaker, eh? You ever been to sea, boy?' When you admit this is your first voyage, he laughs but not unkindly. 'Keep your wits about you. The ocean shows no mercy to fools.'\n\nJuan is more welcoming. 'We're going to discover wonders, Diego! New lands, new peoples. We'll return as heroes!' His enthusiasm is infectious but naive.\n\nPaulo works quietly, saying little, but you notice he watches everything with careful, intelligent eyes.\n\nThe next morning, the ships weigh anchor. The Santa Cruz leads the fleet into open water.",
      choices: [
        {
          text: "Stay close to Miguel and learn from his experience",
          next: "befriend_miguel",
          stats: { honor: 10 }
        },
        {
          text: "Encourage Juan's idealism while tempering it with caution",
          next: "befriend_juan",
          stats: { empathy: 10, honor: 5 }
        },
        {
          text: "Get to know Paulo and his unique perspective",
          next: "befriend_paulo",
          stats: { empathy: 15, honor: 5 }
        }
      ]
    },

    study_maps: {
      title: "Charting the Unknown",
      date: "April 1519 - Your Cabin",
      text: "You spread your maps and charts across the small table in your cabin. The known world ends not far from here. Beyond the Canary Islands lies the Ocean Sea, and beyond that—uncertainty.\n\nYou have Portuguese charts showing the coast of Africa, Italian maps depicting the Orient, and speculation about what might lie westward. Your father once showed you an Arab map that suggested vast continents in between, but the Church dismissed such ideas as heretical.\n\nYou spend the night preparing your instruments: astrolabe, quadrant, compass, and measuring chains. You'll be responsible for tracking the fleet's position and creating new maps of whatever you discover.\n\nBy dawn, you're ready. The ships set sail, and you take your first celestial readings as Spain disappears behind you.",
      choices: [
        {
          text: "Keep meticulous records and share them with the Captain",
          next: "accurate_navigation",
          stats: { honor: 15, ambition: 10 }
        },
        {
          text: "Also document everything you observe about the journey",
          next: "become_chronicler",
          stats: { empathy: 10, ambition: 10 }
        }
      ]
    },

    talk_priest: {
      title: "A Question of Faith",
      date: "April 1519 - The Chapel",
      text: "Father Rodrigo welcomes you to the small chapel near the dock. He's a Franciscan, younger than you expected, with earnest eyes and work-worn hands.\n\n'You seek guidance, my son?' he asks.\n\n'Father, we're about to encounter peoples who've never heard of Christ. What is our duty to them?'\n\nRodrigo considers carefully. 'We bring them salvation. But remember—our Lord taught compassion and love. Some conquistadors forget this, seeking only gold and glory. They bring shame to the Cross.'\n\n'And if these people don't wish to convert?' you ask.\n\nThe priest's face grows troubled. 'Then we must still treat them with humanity. God gave all men souls, Diego. Never forget that.'\n\nHis words stay with you as the ships depart at dawn.",
      choices: [
        {
          text: "Resolve to advocate for compassionate treatment of any people you meet",
          next: "compassionate_path",
          stats: { empathy: 20, honor: 10 }
        },
        {
          text: "Commit to fulfilling the mission but with respect for others",
          next: "balanced_path",
          stats: { honor: 15, empathy: 10 }
        }
      ]
    },

    learn_from_sailors: {
      title: "Tales of the Sea",
      date: "April 1519 - The Tavern",
      text: "You find the experienced sailors at a waterfront tavern, sharing stories and advice with younger crew members. They speak of storms that can snap masts like twigs, of doldrums where ships sit becalmed for weeks, of sea monsters and mermaids.\n\nOne old sailor, Alfonso, takes you aside. 'Listen, boy. The sea will test you. But the real danger isn't the ocean—it's men. Keep your honor, but watch your back. Not everyone aboard ships with pure intentions.'\n\nAnother sailor, Carlos, adds: 'And if we find natives, remember they're human. I've seen what happens when men forget that. It haunts me still.'\n\nTheir warnings prove prescient as the voyage begins.",
      choices: [
        {
          text: "Take their warnings to heart and stay vigilant",
          next: "vigilant_start",
          stats: { honor: 10, ambition: 5 }
        },
        {
          text: "Focus on being prepared for any moral challenges ahead",
          next: "moral_preparation",
          stats: { empathy: 15, honor: 5 }
        }
      ]
    },

    befriend_miguel: {
      title: "Lessons from an Old Salt",
      date: "May 1519 - At Sea",
      text: "Miguel teaches you the ways of the sea. How to read the sky for storms, how to splice rope, how to keep your balance in heavy swells. More importantly, he shares wisdom from his years at sea.\n\n'I've seen three captains, Diego. Torres is better than most—he's firm but fair. But watch out for Lieutenant Vásquez. He's ambitious and cruel. Thinks brutality makes him strong.'\n\nOne evening, after three weeks at sea, you spot something: debris floating in the water, and beyond it, what might be land.\n\nCaptain Torres orders the fleet to investigate. As you approach, you see it clearly: an island, green and lush, with smoke rising from cooking fires. People move along the beach.\n\n'We'll make landfall at dawn,' Torres announces. 'Prepare landing parties. Diego, you'll map the island. Father Rodrigo will assess possibilities for conversion. Lieutenant Vásquez will lead the soldiers.'",
      choices: [
        {
          text: "Suggest approaching peacefully with gifts before sending soldiers",
          next: "peaceful_approach",
          stats: { empathy: 15, honor: 10 }
        },
        {
          text: "Recommend caution—observe first before making contact",
          next: "cautious_observation",
          stats: { honor: 10, ambition: 5 }
        },
        {
          text: "Keep quiet and follow orders",
          next: "follow_orders_first",
          stats: { ambition: 5 }
        }
      ]
    },

    befriend_juan: {
      title: "Youthful Ideals",
      date: "May 1519 - At Sea",
      text: "Juan becomes your close friend during the voyage. He speaks constantly of the glory you'll win, the riches you'll find, the great deeds you'll accomplish. His optimism is infectious, but you notice he never questions the mission itself.\n\n'We'll bring civilization to savages, Diego! They'll thank us for it. And we'll return home as heroes!'\n\nYou try to temper his enthusiasm with realism. 'Juan, we don't know what we'll find. These people might have their own civilizations.'\n\nHe waves this away. 'How advanced can they be? They don't have ships like ours, gunpowder, the written word of God. We're bringing them enlightenment!'\n\nAfter three weeks at sea, land is spotted. An island, populated and green. Captain Torres announces you'll make contact at dawn.",
      choices: [
        {
          text: "Challenge Juan's assumptions before landing—these are people, not savages",
          next: "educate_juan",
          stats: { empathy: 20, honor: 10 }
        },
        {
          text: "Stay silent but resolve to demonstrate respect when you meet the islanders",
          next: "silent_resolution",
          stats: { empathy: 10, honor: 5 }
        }
      ]
    },

    befriend_paulo: {
      title: "Perspective from the Margins",
      date: "May 1519 - At Sea",
      text: "Paulo opens up to you slowly. He was born in Africa, captured as a child, sold to a Portuguese trader, then freed by his master in a deathbed gesture of conscience.\n\n'You want to know what I think of this voyage?' he asks one night. 'I think you're sailing to do to others what was done to me. But you'll call it discovery and salvation instead of slavery and conquest.'\n\nHis words sting because they contain truth. 'What should we do differently?' you ask.\n\n'See them as people first. Not souls to save, not subjects to rule, not obstacles to overcome. People. With their own wisdom, their own ways. Learn from them before trying to teach them.'\n\nWhen land is spotted after three weeks—an inhabited island—you remember Paulo's words. You'll be part of the landing party. What kind of contact will you advocate for?",
      choices: [
        {
          text: "Commit to treating the islanders as equals and learning from them",
          next: "equality_approach",
          stats: { empathy: 25, honor: 15 }
        },
        {
          text: "Try to balance respect with the mission's requirements",
          next: "balanced_contact",
          stats: { empathy: 15, honor: 10, ambition: 5 }
        }
      ]
    },

    accurate_navigation: {
      title: "The Navigator's Duty",
      date: "May 1519 - At Sea",
      text: "Your meticulous navigation proves valuable. You catch several errors in the fleet's course and help Captain Torres avoid dangerous shoals. Your reputation grows among the crew.\n\nAfter three weeks at sea, your calculations suggest land should appear soon. The next morning proves you right—an island emerges from the dawn mist, clearly inhabited.\n\nTorres summons you to his cabin. 'Diego, your navigation has been excellent. I'm putting you in the landing party. Document everything. This island could be strategic for future voyages.'\n\nLieutenant Vásquez is also there, smirking. 'Captain, let me take a squad. We'll secure the island quickly.'\n\nTorres frowns. 'We'll approach peacefully first. These people might become allies.'\n\nVásquez's expression suggests he has other ideas.",
      choices: [
        {
          text: "Support Torres's peaceful approach strongly",
          next: "support_captain",
          stats: { honor: 15, empathy: 10 }
        },
        {
          text: "Suggest a middle ground—peaceful contact with armed escort",
          next: "middle_ground",
          stats: { honor: 10, ambition: 5 }
        },
        {
          text: "Focus on your mapping duties and stay neutral",
          next: "neutral_navigator",
          stats: { ambition: 10 }
        }
      ]
    },

    become_chronicler: {
      title: "The Historian's Eye",
      date: "May 1519 - At Sea",
      text: "Beyond navigation, you begin documenting everything: the crew's behavior, life at sea, your own thoughts and observations. You're creating a chronicle of this voyage that goes beyond mere geography.\n\nYou write about the hierarchies aboard ship, the tensions between sailors and soldiers, Father Rodrigo's quiet kindness, the crew's mixture of hope and greed.\n\nWhen land is spotted after three weeks, you're determined to document not just the island's geography but its people, their culture, their perspective on this contact.\n\nCaptain Torres includes you in the landing party. 'Diego, I want accurate maps. But I also want your observations. You see things others miss.'\n\nThis is your chance to create a true record—one that might shape how future explorers approach new lands.",
      choices: [
        {
          text: "Commit to documenting the truth, even if it reflects poorly on the expedition",
          next: "truthful_chronicler",
          stats: { honor: 20, empathy: 15 }
        },
        {
          text: "Balance truth with diplomacy in your chronicle",
          next: "diplomatic_chronicler",
          stats: { honor: 10, ambition: 10, empathy: 10 }
        }
      ]
    },

    compassionate_path: {
      title: "The Mission of Mercy",
      date: "May 1519 - At Sea",
      text: "Father Rodrigo's words guide you through the voyage. You spend time with him, discussing theology, ethics, and the treatment of indigenous peoples. He shares stories of missionaries who built genuine relationships with natives, learning their languages and earning trust.\n\n'Some of my brothers in the New World have written that the natives possess natural virtue,' Rodrigo explains. 'They live simply, share generously, care for their elders. Who are we to call them savages?'\n\nWhen land is spotted—an inhabited island—you and Rodrigo are both assigned to the landing party. Torres wants peaceful contact; Vásquez wants a show of force.\n\nRodrigo pulls you aside. 'Diego, I may need your support. If violence threatens, speak up. The Captain respects you.'",
      choices: [
        {
          text: "Promise to advocate for peaceful, respectful contact",
          next: "peace_advocate",
          stats: { empathy: 20, honor: 15 }
        },
        {
          text: "Agree but warn him that you might face consequences",
          next: "cautious_advocate",
          stats: { empathy: 15, honor: 10 }
        }
      ]
    },

    balanced_path: {
      title: "Walking the Middle Way",
      date: "May 1519 - At Sea",
      text: "You try to hold both duty and compassion in balance. You serve the Crown faithfully while remembering Father Rodrigo's teachings about human dignity.\n\nIt's not easy. When sailors mock the idea of 'noble savages,' you defend the possibility that indigenous peoples have their own wisdom. When officers plan aggressive tactics, you suggest gentler alternatives.\n\nYou're earning a reputation as thoughtful but uncommitted to either camp—the soldiers see you as soft, while Rodrigo wishes you'd speak out more strongly.\n\nWhen land is spotted after three weeks at sea, you're chosen for the landing party. Your balanced perspective might prove valuable, or it might satisfy no one.",
      choices: [
        {
          text: "Continue seeking middle ground in the coming interactions",
          next: "moderate_contact",
          stats: { honor: 10, empathy: 10, ambition: 10 }
        },
        {
          text: "Decide now to lean toward compassion when conflicts arise",
          next: "lean_compassion",
          stats: { empathy: 15, honor: 10 }
        }
      ]
    },

    vigilant_start: {
      title: "The Watchful Eye",
      date: "May 1519 - At Sea",
      text: "Alfonso's warnings prove prescient. You notice tensions simmering aboard ship. Lieutenant Vásquez treats common sailors harshly. Some crew members whisper about the riches they'll claim. Others speak of converting natives 'by any means necessary.'\n\nYou stay alert and document what you observe. When land is spotted—a green, populated island—you have a sense of foreboding. These islanders are about to have their lives changed forever, for better or worse.\n\nCaptain Torres assigns you to the landing party. You'll need to decide whether your vigilance extends to protecting the islanders from your own crew.",
      choices: [
        {
          text: "Extend your vigilance to protecting islanders from abuse",
          next: "protective_vigilance",
          stats: { empathy: 20, honor: 15 }
        },
        {
          text: "Stay watchful but focus on crew safety first",
          next: "crew_focused_vigilance",
          stats: { honor: 10, ambition: 10 }
        }
      ]
    },

    moral_preparation: {
      title: "Preparing for the Test",
      date: "May 1519 - At Sea",
      text: "Carlos's words haunt you: 'Remember they're human.' You spend the voyage preparing yourself morally for whatever comes. You read the accounts of previous expeditions, noting where things went right and wrong.\n\nYou see patterns: initial peaceful contact, then miscommunications, then violence. Natives killed for perceived slights. Women taken as slaves. Sacred objects stolen as curiosities.\n\nYou resolve that when you encounter native peoples, you'll remember they're not exotic specimens or obstacles—they're people with families, beliefs, hopes.\n\nWhen the island appears after three weeks at sea, you're as prepared as you can be. But nothing truly prepares you for the reality of first contact.",
      choices: [
        {
          text: "Meet the islanders with an open heart and respectful curiosity",
          next: "respectful_contact",
          stats: { empathy: 25, honor: 15 }
        },
        {
          text: "Proceed carefully, testing your moral compass with each interaction",
          next: "careful_contact",
          stats: { empathy: 15, honor: 15, ambition: 5 }
        }
      ]
    },

    peaceful_approach: {
      title: "First Contact",
      date: "June 1519 - The Island of Awahari",
      text: "Captain Torres accepts your suggestion. The landing party approaches unarmed, carrying only gifts: copper bells, glass beads, cloth. You row ashore in longboats.\n\nThe islanders watch from the treeline, curious but cautious. There are perhaps two hundred people visible, wearing simple wrap garments, adorned with shells and feathers. Their skin is brown, their black hair long and decorated.\n\nAs you reach the beach, an elder steps forward, flanked by younger warriors carrying spears tipped with sharpened stone. He speaks in a melodic, unfamiliar language, gesturing to the ships.\n\nFather Rodrigo makes the sign of the cross. Captain Torres spreads his arms wide, showing empty hands. You sketch the scene in your journal.\n\nSuddenly, Lieutenant Vásquez pushes forward with armed soldiers. 'Enough of this pantomime. We claim this land for Spain!' He plants the Spanish flag in the sand.\n\nThe warriors tense, raising their spears. The situation could explode.",
      choices: [
        {
          text: "Step between the groups and defuse the tension with calm gestures",
          next: "defuse_tension",
          stats: { empathy: 20, honor: 15 }
        },
        {
          text: "Support the Captain in controlling Vásquez and restoring peace",
          next: "restore_peace",
          stats: { honor: 20, empathy: 10 }
        },
        {
          text: "Quickly sketch and offer your drawing as a gift to the elder",
          next: "gift_drawing",
          stats: { empathy: 25, honor: 10 }
        }
      ]
    },

    cautious_observation: {
      title: "Watching and Learning",
      date: "June 1519 - Offshore the Island",
      text: "Captain Torres agrees to observe first. For two days, the fleet anchors offshore. You study the island through your instruments, sketching the coastline, noting the settlement patterns.\n\nThe islanders are clearly advanced. You see cultivated fields, substantial houses built on stilts, large canoes. People fish, tend crops, and gather in what appears to be a central meeting area.\n\nOn the third day, a canoe approaches the fleet. Six people paddle it—five warriors and an elder. They circle the ships, studying them with the same curiosity you've shown toward them.\n\nCaptain Torres orders you to the deck. 'Diego, we're going to invite them aboard. I want you to document everything and try to establish basic communication.'",
      choices: [
        {
          text: "Welcome them aboard with elaborate courtesy and gifts",
          next: "welcome_aboard",
          stats: { empathy: 20, honor: 15 }
        },
        {
          text: "Focus on learning basic words and concepts from them",
          next: "learn_language",
          stats: { empathy: 25, ambition: 10 }
        }
      ]
    },

    follow_orders_first: {
      title: "The Soldier's Discipline",
      date: "June 1519 - First Landing",
      text: "You keep silent and follow orders. The landing party is heavily armed: twenty soldiers, Father Rodrigo, yourself, and Captain Torres.\n\nYou approach the beach in force. The islanders gather to watch, their expressions shifting from curiosity to concern as they see the weapons.\n\nCaptain Torres plants the Spanish flag and claims the island for the Crown. Father Rodrigo begins blessing the land. The islanders watch, confused.\n\nAn elder approaches cautiously, speaking in his language and gesturing. He seems to be welcoming you but also questioning your intentions.\n\nLieutenant Vásquez laughs. 'They don't even understand they've been conquered!' Several soldiers chuckle.\n\nYou see hurt flash across the elder's face. He understood the tone, if not the words.",
      choices: [
        {
          text: "Break your silence and show respect to the elder",
          next: "show_respect",
          stats: { empathy: 15, honor: 10 }
        },
        {
          text: "Continue following orders but resolve to treat islanders kindly",
          next: "quiet_kindness",
          stats: { empathy: 10, honor: 5 }
        },
        {
          text: "Stay focused on your mapping duties",
          next: "focus_on_work",
          stats: { ambition: 10 }
        }
      ]
    },

    educate_juan: {
      title: "A Friend's Awakening",
      date: "June 1519 - Before Landing",
      text: "'Juan, these people have lived here for generations. They have families, beliefs, knowledge of this land we lack. We're the foreigners, not them.'\n\nJuan looks taken aback. 'But Diego, we bring civilization! Christianity, writing, technology—'\n\n'And what if they don't want what we're bringing? What if they're happy as they are?'\n\nThis clearly troubles him. 'I... I never thought of it that way. But the Captain says we're claiming the land for Spain. We have to do our duty.'\n\n'Duty doesn't require cruelty,' you press. 'Promise me you'll see them as people, not obstacles.'\n\nAfter a long pause, Juan nods. 'I promise.'\n\nWhen you land, Juan proves true to his word, but Lieutenant Vásquez has other plans.",
      choices: [
        {
          text: "Stand with Juan in opposing any cruelty",
          next: "united_opposition",
          stats: { empathy: 20, honor: 20 }
        },
        {
          text: "Be proud of Juan's growth and work independently to protect islanders",
          next: "independent_protection",
          stats: { empathy: 15, honor: 15 }
        }
      ]
    },

    silent_resolution: {
      title: "Actions Over Words",
      date: "June 1519 - The Landing",
      text: "You don't argue with Juan, choosing instead to demonstrate respect through actions when the time comes.\n\nThe landing is tense. Lieutenant Vásquez wants an aggressive approach; Captain Torres prefers diplomacy. The islanders watch warily as your boats approach.\n\nWhen you step onto the beach, an elder approaches. Instead of joining the other Spaniards in their formal claiming ceremony, you bow respectfully to the elder, offering a small gift from your personal belongings—a copper compass.\n\nThe elder examines it with wonder, then looks at you with new interest. He says something in his language and gestures for you to follow.\n\nVásquez objects: 'Don't wander off, mapmaker! You're here on orders!'\n\nBut the elder is offering to show you the island. This could be your chance to truly learn about these people.",
      choices: [
        {
          text: "Accept the elder's invitation despite Vásquez's objection",
          next: "accept_tour",
          stats: { empathy: 25, honor: 15, ambition: 10 }
        },
        {
          text: "Politely decline and stay with the main group",
          next: "stay_with_group",
          stats: { honor: 10, ambition: 5 }
        }
      ]
    },

    equality_approach: {
      title: "Meeting as Equals",
      date: "June 1519 - The Island of Awahari",
      text: "Armed with Paulo's wisdom, you approach the islanders as equals. When the landing party assembles, you're shocked by its composition: thirty armed soldiers, ten sailors, yourself, and Father Rodrigo.\n\n'Captain,' you speak up, 'this looks like an invasion force, not a diplomatic mission.'\n\nCaptain Torres frowns. 'We must be prepared for hostilities.'\n\n'Then we guarantee them,' you argue. 'Sir, send a small, mostly unarmed group first. Show trust to earn trust.'\n\nVásquez sneers. 'And get ourselves killed by savages?'\n\n'They're not savages,' you snap. 'They're people protecting their home from armed strangers.'\n\nTorres considers. 'Vásquez, stand down. Diego, you'll lead the first contact with five unarmed men. Father Rodrigo, Paulo, and Miguel will go with you.'\n\nYou've won the first battle, but made an enemy of Vásquez.",
      choices: [
        {
          text: "Lead the diplomatic mission with humility and openness",
          next: "diplomatic_mission",
          stats: { empathy: 30, honor: 20 }
        },
        {
          text: "Proceed carefully, knowing Vásquez may undermine you",
          next: "careful_diplomacy",
          stats: { empathy: 20, honor: 15, ambition: 5 }
        }
      ]
    },

    balanced_contact: {
      title: "The Pragmatist's Approach",
      date: "June 1519 - The Landing",
      text: "You've resolved to balance respect with the mission's demands. When the landing party forms, you don't object to the armed escort but insist on diplomatic protocols.\n\n'Captain, let me approach first with gifts and peaceful intentions. The soldiers can remain visible but at a distance. If the islanders see we mean no immediate harm, they're more likely to cooperate.'\n\nTorres agrees. You lead a small group forward with trade goods while twenty soldiers wait on the beach.\n\nThe islanders send an elder and three warriors to meet you. Through gestures and offerings, you establish tentative communication. The elder is cautious but not hostile.\n\nThen Lieutenant Vásquez marches up with the soldiers. 'Enough talking. We're claiming this land for Spain. Tell them to submit or face consequences.'\n\nThe elder's expression hardens. The warriors raise their spears.\n\nCaptain Torres intervenes: 'Stand down, Lieutenant!' But the damage is partly done.",
      choices: [
        {
          text: "Apologize to the elder through gestures and rebuild trust",
          next: "rebuild_trust",
          stats: { empathy: 20, honor: 15 }
        },
        {
          text: "Try to salvage the situation diplomatically",
          next: "salvage_situation",
          stats: { honor: 15, empathy: 10, ambition: 10 }
        }
      ]
    },

    support_captain: {
      title: "Allied with Reason",
      date: "June 1519 - Council Before Landing",
      text: "'Captain Torres is right,' you say firmly. 'Lieutenant, aggressive tactics might work in the short term, but they'll make enemies. We need these people as allies if we're to establish a safe port here.'\n\nVásquez glares at you. 'You're a mapmaker, not a strategist. Know your place.'\n\n'I know human nature,' you counter. 'And I know that respect breeds cooperation. Force breeds resentment.'\n\nTorres nods. 'Diego speaks wisely. We'll approach peacefully. Lieutenant, your soldiers will remain on the beach in full view but not in threatening formation. Diego, Father Rodrigo, Miguel, and I will make first contact.'\n\nThe landing proceeds peacefully. The islanders meet you with cautious curiosity. Their elder, a woman named Amara, as you later learn, invites you to their village.\n\nVásquez remains on the beach, seething.",
      choices: [
        {
          text: "Accept the invitation and learn about their culture",
          next: "learn_culture",
          stats: { empathy: 25, honor: 20 }
        },
        {
          text: "Accept but remain diplomatically cautious",
          next: "cautious_learning",
          stats: { empathy: 15, honor: 15, ambition: 10 }
        }
      ]
    },

    middle_ground: {
      title: "Armed Diplomacy",
      date: "June 1519 - The Landing",
      text: "Your suggestion of peaceful contact with armed escort becomes the plan. Ten soldiers accompany you, Father Rodrigo, and Captain Torres to the beach. The rest remain aboard ship.\n\nThe islanders gather to watch. Their warriors—twenty men and women carrying spears and clubs—form a protective line in front of their people.\n\nYou approach slowly, hands visible and empty. You place gifts on the sand: cloth, bells, mirrors. Then you step back, waiting.\n\nAfter tense moments, an elder woman approaches. She examines the gifts, then gestures to her people. They bring forward coconuts, woven baskets, and carved wooden figures.\n\nIt's working. Trade, the universal language.\n\nBut then one of your soldiers, nervous, raises his arquebus when a young islander moves too quickly. The boom of the shot shatters the peace.",
      choices: [
        {
          text: "Immediately defuse the situation—no one was hit, make peace gestures",
          next: "defuse_accident",
          stats: { empathy: 20, honor: 15 }
        },
        {
          text: "Control your men while showing respect to the frightened islanders",
          next: "control_situation",
          stats: { honor: 20, ambition: 10 }
        }
      ]
    },

    neutral_navigator: {
      title: "The Objective Observer",
      date: "June 1519 - Mapping the Island",
      text: "You focus on your role: mapping and documenting. You stay with the landing party but remain professionally detached, sketching the coastline, noting resources, recording observations.\n\nThe islanders watch you work with fascination. An elder approaches and watches as you draw. When you show him your map, his eyes widen. He takes a stick and draws in the sand—a more detailed version of the island's interior, showing villages, water sources, and sacred sites.\n\nYou realize: he's a mapmaker too. Across the language barrier, you've found common ground.\n\nHe introduces himself with gestures and sounds: Kalani. You respond: Diego. He smiles.\n\nBut Lieutenant Vásquez interrupts: 'Stop fraternizing. Get him to show us where they keep their gold.'\n\nKalani's smile fades. He understood the tone, if not the words.",
      choices: [
        {
          text: "Refuse Vásquez and continue building rapport with Kalani",
          next: "refuse_vasquez",
          stats: { empathy: 20, honor: 20 }
        },
        {
          text: "Try to ask about resources diplomatically",
          next: "diplomatic_inquiry",
          stats: { honor: 10, ambition: 15 }
        },
        {
          text: "Obey orders but do so as respectfully as possible",
          next: "reluctant_compliance",
          stats: { honor: 5, ambition: 10 }
        }
      ]
    },

    truthful_chronicler: {
      title: "The Historian's Burden",
      date: "June 1519 - First Contact",
      text: "You've committed to recording the truth, whatever it reveals. When the landing party approaches the island, you document everything: the islanders' initial welcome, Captain Torres's reasonable approach, Lieutenant Vásquez's barely-concealed hostility.\n\nFirst contact proceeds better than you feared. The islanders are generous, sharing food and showing you their village. You document their sophisticated agriculture, their complex social structures, their art and music.\n\nBut on the third day, several soldiers sneak into a village temple and steal golden ornaments. When the islanders discover the theft, they demand justice.\n\nCaptain Torres is furious with his men. Vásquez dismisses it: 'They're heathens. Their idols mean nothing.'\n\nYou have a choice: document this theft honestly, or omit it to avoid conflict with Vásquez.",
      choices: [
        {
          text: "Document the theft fully and support returning the items",
          next: "document_theft",
          stats: { empathy: 25, honor: 30 }
        },
        {
          text: "Document it but privately, avoiding immediate confrontation",
          next: "private_documentation",
          stats: { honor: 20, empathy: 15 }
        }
      ]
    },

    diplomatic_chronicler: {
      title: "The Balanced Record",
      date: "June 1519 - First Contact",
      text: "You document events carefully, trying to be truthful without being inflammatory. First contact goes reasonably well. The islanders, led by Elder Amara, welcome you cautiously.\n\nYou record their society in detail: they practice agriculture and fishing, have a complex religion involving nature spirits, organize themselves in extended family groups led by respected elders.\n\nYou also note the Spanish reactions: Father Rodrigo's genuine interest in the people, Captain Torres's fair-mindedness, Vásquez's contempt, and the crew's mixture of curiosity and greed.\n\nAfter a week, Captain Torres proposes establishing a small trading post on the island. 'We'll leave ten men here to trade with the natives and resupply future expeditions.'\n\nElder Amara must be consulted. How you help present this request could determine the outcome.",
      choices: [
        {
          text: "Help Torres present it as a mutual benefit arrangement",
          next: "present_mutual_benefit",
          stats: { honor: 15, empathy: 15, ambition: 15 }
        },
        {
          text: "Ensure Amara truly understands and consents, not just acquiesces",
          next: "ensure_consent",
          stats: { empathy: 25, honor: 20 }
        }
      ]
    },

    peace_advocate: {
      title: "The Voice of Conscience",
      date: "June 1519 - Landing Day",
      text: "With Father Rodrigo's support, you become a voice for peaceful contact. When Lieutenant Vásquez proposes landing with fifty armed men, you and Rodrigo convince Captain Torres to send a small, mostly unarmed group first.\n\nThe approach works beautifully. The islanders, seeing your peaceful intentions, welcome you. Elder Amara invites you to their village.\n\nFor three days, you live among them. You learn their language basics, eat their food, watch their children play. Father Rodrigo is particularly moved—he sees deep spirituality in their nature worship.\n\nBut on the fourth day, Vásquez brings soldiers to the village. 'Captain wants a formal ceremony claiming the island for Spain. All natives must attend and submit.'\n\nAmara looks to you, confused and concerned. You realize she's come to trust you. Don't betray that trust now.",
      choices: [
        {
          text: "Oppose the ceremony as disrespectful and premature",
          next: "oppose_ceremony",
          stats: { empathy: 30, honor: 25 }
        },
        {
          text: "Try to make the ceremony more respectful and mutual",
          next: "reform_ceremony",
          stats: { empathy: 20, honor: 20, ambition: 10 }
        }
      ]
    },

    cautious_advocate: {
      title: "The Careful Voice",
      date: "June 1519 - First Week",
      text: "You've promised to advocate for peace, but cautiously. You know opposing Vásquez too directly could undermine your influence.\n\nFirst contact proceeds well under Captain Torres's direction. The islanders are welcoming once they see you mean no immediate harm.\n\nYou spend the week learning their language and customs. Their society is sophisticated: they have extensive astronomical knowledge, complex agricultural practices, and rich oral traditions.\n\nBut tensions simmer. Some soldiers grow frustrated with 'wasting time' on diplomacy. Vásquez constantly pushes for more aggressive tactics. Even Captain Torres is under pressure to show concrete results.\n\nWhen Torres proposes establishing a permanent Spanish presence on the island, you must decide how strongly to ensure the islanders have a real say in this decision.",
      choices: [
        {
          text: "Insist the islanders must give genuine, informed consent",
          next: "demand_consent",
          stats: { empathy: 25, honor: 20 }
        },
        {
          text: "Support the proposal but work to make it as fair as possible",
          next: "fair_proposal",
          stats: { empathy: 15, honor: 15, ambition: 15 }
        }
      ]
    },

    moderate_contact: {
      title: "The Middle Path",
      date: "June 1519 - First Contact",
      text: "You continue seeking middle ground. The landing proceeds with mixed success—peaceful enough to avoid violence, but formal enough to feel like an assertion of Spanish authority.\n\nThe islanders are confused by your ceremony claiming their land for a distant king. Elder Amara asks through gestures: 'Who is this King? Why does he own our island?'\n\nYou don't have good answers. How do you explain divine right and royal charters to people who organize by consensus and respect for elders?\n\nOver the following days, you work to build genuine relationships while also serving Spanish interests. It's exhausting, and you're not sure you're satisfying anyone.\n\nWhen Captain Torres asks you to negotiate for a trading post, you realize you're at a crossroads. Continue the middle path, or choose a side?",
      choices: [
        {
          text: "Finally choose—advocate strongly for the islanders' interests",
          next: "choose_islanders",
          stats: { empathy: 25, honor: 20 }
        },
        {
          text: "Continue the balanced approach as best you can",
          next: "continue_balance",
          stats: { honor: 15, empathy: 15, ambition: 15 }
        }
      ]
    },

    lean_compassion: {
      title: "The Compassionate Turn",
      date: "June 1519 - First Contact",
      text: "You've decided: when conflicts arise, you'll lean toward compassion. This becomes clear during first contact.\n\nLieutenant Vásquez wants to intimidate the islanders with a show of force. You argue against it, supporting Captain Torres's preference for diplomacy.\n\nThe peaceful approach works. Elder Amara welcomes you, and over several days, you build genuine rapport. You learn their language quickly, fascinated by their culture.\n\nThey call their island Awahari—'Sacred Place of Ancestors.' Their society values generosity, wisdom, and harmony with nature. They have no concept of individual land ownership; the land belongs to everyone and to the spirits.\n\nWhen Captain Torres announces plans to claim the island for Spain, you realize the fundamental incompatibility between Spanish imperialism and Awahari values.\n\nYou must speak up, even if it endangers your position.",
      choices: [
        {
          text: "Explain to Torres why claiming the land violates Awahari beliefs",
          next: "explain_violation",
          stats: { empathy: 30, honor: 25 }
        },
        {
          text: "Try to find a compromise that respects both parties",
          next: "seek_compromise",
          stats: { empathy: 20, honor: 20, ambition: 10 }
        }
      ]
    },

    protective_vigilance: {
      title: "Guardian of the Vulnerable",
      date: "June 1519 - First Contact and After",
      text: "You extend your vigilance to protecting the islanders from your own crew. This becomes necessary almost immediately.\n\nFirst contact goes smoothly under Captain Torres's leadership. But you notice certain crew members eyeing the islanders' women with predatory intent. You hear talk of 'taking souvenirs' from the village.\n\nYou make your position clear: you'll report any abuse directly to the Captain. Some crew members resent this; others respect it.\n\nYour vigilance pays off when you catch three soldiers attempting to enter a house where women are sleeping. You intervene and report them. Torres has them flogged.\n\nBut you've made enemies. Lieutenant Vásquez confronts you: 'Whose side are you on, Diego? You're Spanish, not native.'\n\n'I'm on the side of honor,' you reply. 'As should you be.'",
      choices: [
        {
          text: "Continue protecting the islanders despite the cost",
          next: "continue_protection",
          stats: { empathy: 30, honor: 30 }
        },
        {
          text: "Be more subtle to avoid making too many enemies",
          next: "subtle_protection",
          stats: { empathy: 20, honor: 20, ambition: 10 }
        }
      ]
    },

    crew_focused_vigilance: {
      title: "Loyalty to Your Own",
      date: "June 1519 - First Contact",
      text: "Your vigilance remains focused on crew safety. You watch for threats from the islanders, monitoring their warriors, noting possible ambush sites.\n\nBut the islanders prove more hospitable than threatening. They share food generously, show you water sources, even warn you about dangerous reefs.\n\nYour defensive posture begins to seem unnecessary, even insulting. Elder Amara notices your wariness and seems hurt by it.\n\nCaptain Torres pulls you aside: 'Diego, they're friendly. Your suspicion is harming relations. Either trust them or explain your concerns.'\n\nYou realize your vigilance might be creating the very problems you're trying to prevent.",
      choices: [
        {
          text: "Apologize to Amara and adjust your approach",
          next: "apologize_adjust",
          stats: { empathy: 15, honor: 15 }
        },
        {
          text: "Maintain caution but try to be less obvious about it",
          next: "subtle_caution",
          stats: { honor: 10, ambition: 10 }
        }
      ]
    },

    respectful_contact: {
      title: "Meeting with Open Heart",
      date: "June 1519 - Village of Awahari",
      text: "You meet the islanders with genuine respect and curiosity. Elder Amara, a wise woman with gray hair and kind eyes, welcomes you to their village.\n\nThrough gestures, drawings, and patience, you begin to communicate. You learn their names: Amara, the elder; Kai, her son and a skilled warrior; Lani, a healer who reminds you of your own mother; Makani, a young boy curious about your strange clothes and tools.\n\nThey show you their world: taro fields irrigated with clever channels, houses built to withstand storms, a meeting hall where the community makes decisions together. Their society is complex, organized, sophisticated.\n\nFather Rodrigo is moved to tears. 'Diego, they live as the early Christians did—sharing all things, caring for one another.'\n\nBut Lieutenant Vásquez remains dismissive: 'Pretty savages are still savages. Where's their gold? Their tribute to Spain?'\n\nYou realize you must choose between building genuine friendship with the Awahari or pursuing Spanish imperial interests.",
      choices: [
        {
          text: "Commit fully to building genuine, equal friendship",
          next: "genuine_friendship",
          stats: { empathy: 35, honor: 25 }
        },
        {
          text: "Try to balance friendship with duty to the expedition",
          next: "balance_duty_friendship",
          stats: { empathy: 20, honor: 20, ambition: 15 }
        }
      ]
    },

    careful_contact: {
      title: "Testing Your Principles",
      date: "June 1519 - First Week on Awahari",
      text: "You proceed carefully, testing your moral compass with each interaction. The islanders welcome you warmly, and you respond with genuine interest in their culture.\n\nEach day brings new ethical questions: When soldiers want to 'claim' islander women, you object. When Father Rodrigo wants to tear down 'pagan idols,' you suggest learning about their beliefs first. When Captain Torres considers taking hostages to ensure cooperation, you propose building trust instead.\n\nYour moral stance earns respect from some (Torres, Rodrigo, Paulo) and resentment from others (Vásquez and many soldiers).\n\nAfter a week, Captain Torres calls a council: 'Gentlemen, we must decide our course. Do we establish a permanent presence here, or continue our voyage? Diego, I value your counsel—you've learned more about these people than anyone.'\n\nYour recommendation will carry weight. What do you advise?",
      choices: [
        {
          text: "Recommend continuing the voyage—leave these people in peace",
          next: "recommend_leave",
          stats: { empathy: 30, honor: 25 }
        },
        {
          text: "Recommend a small, respectful trading post with Awahari consent",
          next: "recommend_trading_post",
          stats: { empathy: 20, honor: 20, ambition: 20 }
        },
        {
          text: "Recommend a fuller colonization with protections for native rights",
          next: "recommend_colonization",
          stats: { honor: 15, ambition: 25, empathy: 10 }
        }
      ]
    },

    defuse_tension: {
      title: "Bridge Between Worlds",
      date: "June 1519 - Critical Moment",
      text: "You step between the Spanish soldiers and Awahari warriors, hands raised in peace. You remove your sword belt and place it on the sand, showing you're unarmed.\n\nThen you turn to Lieutenant Vásquez. 'Sir, stand down. This is their home. We're guests here.'\n\nVásquez reddens with anger. 'How dare you—'\n\nCaptain Torres intervenes. 'The mapmaker is right, Lieutenant. Lower the flag. We'll proceed respectfully or not at all.'\n\nYou turn to the Awahari elder, bowing deeply as a sign of respect. He studies you for a long moment, then relaxes and speaks to his warriors. They lower their spears.\n\nThe elder approaches and places his hand on your shoulder—a gesture of peace. He says something in his language, his tone warm.\n\nFather Rodrigo whispers: 'You just prevented a massacre, Diego. Well done.'\n\nBut Vásquez glares at you with pure hatred. You've made a dangerous enemy.",
      choices: [
        {
          text: "Accept the consequences—protecting the Awahari was worth it",
          next: "accept_consequences",
          stats: { empathy: 25, honor: 25 }
        },
        {
          text: "Try to mend relations with Vásquez while maintaining your principles",
          next: "mend_with_vasquez",
          stats: { honor: 15, ambition: 15, empathy: 15 }
        }
      ]
    },

    restore_peace: {
      title: "Supporting the Captain",
      date: "June 1519 - Power Struggle",
      text: "You stand beside Captain Torres. 'Sir, you have command here. Lieutenant Vásquez is undermining your authority and endangering the mission.'\n\nTorres nods grimly. 'Lieutenant, remove that flag and return to the boats. That's an order.'\n\nVásquez hesitates, then complies, but his look promises retribution.\n\nWith the immediate crisis averted, Torres turns to the Awahari elder with a gesture of apology. The elder, a dignified man named Kalani, accepts the gesture graciously.\n\nOver the following days, peaceful contact develops. You serve as one of the main liaisons, learning the language and customs. The Awahari are generous and curious, sharing food and knowledge.\n\nBut Vásquez is plotting something. You hear him talking to certain soldiers about 'taking what we came for' and 'not letting savages dictate terms.'\n\nYou must decide whether to warn Captain Torres about a possible mutiny.",
      choices: [
        {
          text: "Warn Torres immediately about Vásquez's scheming",
          next: "warn_captain",
          stats: { honor: 25, ambition: 10 }
        },
        {
          text: "Gather more evidence first before making serious accusations",
          next: "gather_evidence",
          stats: { honor: 20, ambition: 15 }
        }
      ]
    },

    gift_drawing: {
      title: "The Universal Language of Art",
      date: "June 1519 - Breakthrough",
      text: "As tension mounts, you quickly sketch the scene: the Spanish ships, the beach, the Awahari people, the elder. You tear the page from your journal and offer it to the elder with both hands, bowing.\n\nThe elder takes it, studying the drawing with wonder. His people gather around, exclaiming in their language. They've never seen realistic drawings before.\n\nThe elder looks at you with new respect. He says something and gestures for you to follow. His warriors escort you into the village, but now as an honored guest, not a threat.\n\nLieutenant Vásquez calls after you: 'Diego! Come back here!'\n\nBut Captain Torres stops him. 'Let him go. He's doing more for our mission than your flag-waving ever could.'\n\nIn the village, the elder—whose name you learn is Kalani—shows you their artworks: intricate carvings, woven tapestries depicting their history, shell mosaics showing the constellations.\n\nYou've found common ground. Art transcends language.",
      choices: [
        {
          text: "Spend days learning from Awahari artists and sharing your techniques",
          next: "artistic_exchange",
          stats: { empathy: 30, honor: 20, ambition: 15 }
        },
        {
          text: "Use art as a bridge to deeper cultural understanding",
          next: "cultural_bridge",
          stats: { empathy: 35, honor: 20 }
        }
      ]
    },

    welcome_aboard: {
      title: "Guests from Awahari",
      date: "June 1519 - Aboard the Santa Cruz",
      text: "You welcome the Awahari delegation with elaborate courtesy. Captain Torres orders the deck cleared and a feast prepared. You offer the elder the Captain's own chair and present gifts: fine cloth, metal tools, a mirror.\n\nThe Awahari are fascinated by the ship. They examine the sails, the rigging, the cannons (with some fear). The elder, Kalani, touches the ship's wheel with wonder.\n\nThrough gestures and drawings, you establish basic communication. They call their island Awahari. There are three villages, about 600 people total. They fish, farm taro and yams, and navigate between neighboring islands in their canoes.\n\nKalani sketches a map showing nearby islands, some inhabited, others not. He's offering you valuable navigational information freely.\n\nBut Lieutenant Vásquez grows impatient. 'Enough pleasantries. Ask them about gold. About treasures. About submitting to Spanish authority.'\n\nThe atmosphere shifts. Kalani senses the change in tone and his warriors tense.",
      choices: [
        {
          text: "Refuse to make demands—continue building genuine rapport",
          next: "refuse_demands",
          stats: { empathy: 30, honor: 25 }
        },
        {
          text: "Carefully broach the subject of trade and mutual benefit",
          next: "careful_trade_talk",
          stats: { empathy: 15, honor: 15, ambition: 20 }
        }
      ]
    },

    learn_language: {
      title: "The Gift of Understanding",
      date: "June 1519 - Language Bridge",
      text: "You focus intently on learning the Awahari language. Using your linguistic training and natural aptitude, you quickly grasp basics. The Awahari visitors are delighted by your efforts.\n\nKalani teaches you words: kai (ocean), lani (sky), aloha (love, compassion, welcome), ohana (family). Each word carries layers of meaning beyond simple translation.\n\nAs your vocabulary grows, real communication becomes possible. You learn that the Awahari have sophisticated navigation skills, reading stars, waves, and birds to travel between islands. They have oral histories going back twenty generations. They live by principles of reciprocity and respect for the land.\n\nAfter three days of intensive learning, you can hold basic conversations. Captain Torres is impressed. 'Diego, you've accomplished more than I'd hoped. Now, discuss with them the possibility of Spanish ships using this island for resupply. We need water, fresh food, and safe anchorage.'\n\nHow you present this request, in their language, will matter enormously.",
      choices: [
        {
          text: "Present it as a request among equals, not a demand",
          next: "equal_request",
          stats: { empathy: 30, honor: 25, ambition: 15 }
        },
        {
          text: "Frame it as mutual benefit—trade and friendship",
          next: "mutual_benefit_frame",
          stats: { empathy: 20, honor: 20, ambition: 20 }
        }
      ]
    },

    show_respect: {
      title: "Breaking the Silence",
      date: "June 1519 - The Beach",
      text: "You can't stay silent anymore. You step forward and bow deeply to the elder, in the style you've seen in diplomatic engravings from the Orient.\n\nThe elder looks surprised, then pleased. Several soldiers laugh, but Captain Torres silences them with a look.\n\nYou remove a small item from your pack—a book, your personal copy of Marco Polo's travels—and offer it to the elder with both hands. It's your most precious possession.\n\nThe elder doesn't understand the written word, but he recognizes the gesture's sincerity. He accepts the book carefully, then removes a shell pendant from his neck and offers it to you.\n\nYou've established a bond. Father Rodrigo whispers, 'That was well done, Diego.'\n\nLieutenant Vásquez mutters, 'Sentimental fool,' but even he can see the tension has eased.\n\nThe elder—Kalani—invites the Spanish to his village. It's a breakthrough.",
      choices: [
        {
          text: "Accept and fully engage with Awahari culture",
          next: "engage_culture",
          stats: { empathy: 30, honor: 20 }
        },
        {
          text: "Accept but remain somewhat reserved",
          next: "reserved_engagement",
          stats: { empathy: 15, honor: 15, ambition: 10 }
        }
      ]
    },

    quiet_kindness: {
      title: "Small Mercies",
      date: "June 1519 - Daily Interactions",
      text: "You continue following orders but try to treat the Awahari kindly in small ways. When a child approaches, curious about your strange appearance, you smile and show her your compass. When an old woman offers you food, you accept graciously and share your ship's biscuit in return.\n\nThese small kindnesses are noticed. The Awahari begin to distinguish between the aggressive soldiers and the friendlier crew members. Children gather around you, and warriors relax slightly in your presence.\n\nBut you're not speaking up when it matters. When soldiers steal from a village storehouse, you don't report it. When Father Rodrigo destroys a small carved idol, calling it devilish, you don't object.\n\nPaulo confronts you one evening: 'Your kindness is genuine, Diego. But kindness without courage accomplishes little. When will you stand up for what's right?'",
      choices: [
        {
          text: "Paulo is right—start speaking up more forcefully",
          next: "find_courage",
          stats: { empathy: 20, honor: 20 }
        },
        {
          text: "Continue with quiet kindness—it's safer and still meaningful",
          next: "continue_quiet_kindness",
          stats: { empathy: 15, honor: 10 }
        }
      ]
    },

    focus_on_work: {
      title: "The Cartographer's Priority",
      date: "June-July 1519 - Mapping Awahari",
      text: "You immerse yourself in mapping and documentation, staying out of political and ethical conflicts. You create detailed charts of the island: coastlines, harbors, reefs, water sources, resources.\n\nThe Awahari watch you work with interest. A young man named Kai, son of Elder Kalani, shows particular curiosity. He's intelligent and begins learning Spanish quickly, asking about your maps and instruments.\n\nThrough Kai, you learn much about the island and surrounding seas. He's a navigator himself, and his knowledge proves invaluable. Your maps become the most detailed ever created of these waters.\n\nBut you're deliberately ignoring what's happening around you: increasing tensions, cultural misunderstandings, soldiers' abuses. Captain Torres asks your opinion on disputes, but you always deflect: 'I'm just a mapmaker, Captain.'\n\nAfter two months, Torres calls you to his cabin. 'Diego, your maps are excellent. But I need more from you. These people trust you. I need you to help negotiate a formal agreement for Spanish presence here.'",
      choices: [
        {
          text: "Accept the role and use it to protect Awahari interests",
          next: "late_advocate",
          stats: { empathy: 20, honor: 20, ambition: 15 }
        },
        {
          text: "Decline and maintain your neutral focus on cartography",
          next: "maintain_neutrality",
          stats: { ambition: 20, honor: -10 }
        }
      ]
    },

    united_opposition: {
      title: "Brothers in Conscience",
      date: "June-July 1519 - Standing Together",
      text: "You and Juan stand together against cruelty and exploitation. When soldiers attempt to force Awahari women into 'service,' you and Juan physically intervene. When Lieutenant Vásquez proposes enslaving some islanders to work Spanish ships, you both object loudly.\n\nYour united opposition proves effective. Captain Torres supports you, and even some soldiers are swayed by your arguments. Father Rodrigo becomes a third ally.\n\nYou form a protective coalition around the Awahari, preventing the worst abuses. The Awahari come to trust you deeply. Elder Kalani calls you 'hoaloha' —true friends.\n\nBut this makes you enemies. Vásquez openly calls you traitors. A faction of soldiers grumbles about your 'coddling savages.' Tensions in the Spanish camp rise dangerously.\n\nOne night, Vásquez confronts you and Juan with drawn swords. 'You've forgotten you're Spanish. Perhaps you'd prefer to stay here with your precious natives when we leave?'\n\nCaptain Torres intervenes before violence erupts, but the threat is clear.",
      choices: [
        {
          text: "Continue your protection despite the personal danger",
          next: "brave_protection",
          stats: { empathy: 35, honor: 35 }
        },
        {
          text: "Ask Torres to control Vásquez or send him back to the ship",
          next: "demand_action",
          stats: { honor: 30, ambition: 15 }
        }
      ]
    },

    independent_protection: {
      title: "The Lone Guardian",
      date: "June-July 1519 - Solitary Stand",
      text: "Juan works with you at first, but as tensions rise, he begins to waver. 'Diego, maybe we're pushing too hard. We're still Spanish soldiers, after all.'\n\nYou continue alone, monitoring the camps for abuses, intervening when you can, reporting violations to Captain Torres. You become known as the 'native-lover' among hostile crew members.\n\nThe isolation is difficult. Even sympathetic sailors keep their distance to avoid association. Only Paulo and Father Rodrigo remain friendly.\n\nBut your efforts save lives. When you discover a plot to raid an Awahari village for 'wives,' you expose it, leading to severe punishments. When soldiers steal sacred artifacts, you help return them.\n\nThe Awahari come to see you as protector. Children follow you around; warriors greet you with respect. Elder Kalani offers you a place in their community: 'If you wish to stay when your people leave, you will always have ohana—family—here.'\n\nIt's tempting. You've become more comfortable among the Awahari than among your own crew.",
      choices: [
        {
          text: "Consider seriously staying when the expedition departs",
          next: "consider_staying",
          stats: { empathy: 35, honor: 25 }
        },
        {
          text: "Continue protecting them but remain committed to the Spanish mission",
          next: "committed_protector",
          stats: { empathy: 25, honor: 25, ambition: 15 }
        }
      ]
    },

    accept_tour: {
      title: "Walking in Two Worlds",
      date: "June 1519 - The Island Interior",
      text: "You accept Kalani's invitation despite Vásquez's objection. Captain Torres nods approval: 'Go, Diego. Learn what you can.'\n\nKalani leads you inland with two young warriors as guides. They show you terraced fields where taro grows in irrigated plots, demonstrating agricultural knowledge that rivals European farming. You see forest groves carefully managed for fruit and timber. They explain their system of kapu—sacred restrictions that preserve resources for future generations.\n\nAt a waterfall shrine, Kalani explains their spiritual beliefs. The land, sea, and sky are alive with mana—spiritual power. Their gods are not distant but part of everything. Respect and balance are central to their worldview.\n\nYou realize these are not 'simple savages' but people with sophisticated philosophy, sustainable practices, and deep wisdom.\n\nAfter three days, you return to the Spanish camp transformed. Captain Torres asks for your report. How much do you reveal about what you've learned?",
      choices: [
        {
          text: "Give a full, honest report emphasizing Awahari sophistication",
          next: "honest_report",
          stats: { empathy: 30, honor: 25, ambition: 10 }
        },
        {
          text: "Give practical information but protect Awahari sacred sites",
          next: "protective_report",
          stats: { empathy: 25, honor: 20, ambition: 10 }
        },
        {
          text: "Give a strategic report focusing on resources and opportunities",
          next: "strategic_report",
          stats: { honor: 15, ambition: 25 }
        }
      ]
    },

    stay_with_group: {
      title: "The Dutiful Officer",
      date: "June-July 1519 - Formal Relations",
      text: "You politely decline the elder's invitation and stay with the main Spanish group. You serve as translator and liaison but maintain professional distance.\n\nOver the following weeks, formal relations develop. The Awahari provide food and water in exchange for metal tools and cloth. Captain Torres establishes a small camp on the beach.\n\nYou document everything: trade exchanges, cultural observations, navigational data. Your role is respected but not particularly influential.\n\nProblems develop slowly. Some soldiers take liberties with Awahari women. Others damage sacred sites out of ignorance or contempt. The Awahari grow less welcoming.\n\nElder Kalani approaches you one day, speaking in halting Spanish he's learned: 'Diego, why your people not respect our ways? We share all, they take more. We ask small things, they refuse. This not ohana—this not family.'\n\nYou realize peaceful coexistence is breaking down. You must choose whether to intervene more actively or maintain your professional distance.",
      choices: [
        {
          text: "Break your professional stance and advocate for better treatment",
          next: "break_stance",
          stats: { empathy: 25, honor: 20 }
        },
        {
          text: "Work within the system to improve relations gradually",
          next: "work_within_system",
          stats: { honor: 15, empathy: 15, ambition: 15 }
        }
      ]
    },

    diplomatic_mission: {
      title: "The First Envoy",
      date: "June 1519 - Landing in Peace",
      text: "You lead the small, unarmed delegation to shore: yourself, Father Rodrigo, Paulo, Miguel, and one sailor carrying gifts. The five of you wade through the surf toward a beach lined with curious Awahari.\n\nYour vulnerable approach pays off. The Awahari see you mean no immediate harm. An elder woman, Amara, approaches with several companions. She's perhaps sixty, with gray hair woven with flowers and a bearing of natural authority.\n\nYou bow deeply. Father Rodrigo makes a gesture of blessing. Paulo smiles warmly. Miguel, the old sailor, raises his hands to show they're empty.\n\nAmara studies you all carefully, then makes a decision. She gestures welcome and speaks in her melodic language. Her warriors lower their weapons.\n\nYou've succeeded in peaceful first contact. Now comes the harder part: building genuine understanding without exploitation. Over the next weeks, you must establish a relationship that respects both Spanish interests and Awahari autonomy.",
      choices: [
        {
          text: "Focus on learning and genuine friendship over colonial objectives",
          next: "friendship_focus",
          stats: { empathy: 35, honor: 30 }
        },
        {
          text: "Balance friendship with practical arrangements for resupply",
          next: "balanced_friendship",
          stats: { empathy: 25, honor: 25, ambition: 20 }
        }
      ]
    },

    careful_diplomacy: {
      title: "Walking on Eggshells",
      date: "June-July 1519 - Delicate Balance",
      text: "Your diplomatic mission succeeds, but you're constantly aware that Vásquez is waiting for you to fail. You proceed carefully, building rapport with the Awahari while keeping Torres informed and preventing Vásquez from undermining you.\n\nElder Amara welcomes you to her village. You learn their language, eat their food, and participate in their daily life. You genuinely like these people, but you're always conscious that you represent Spanish interests.\n\nThe Awahari begin to trust you. They share knowledge of surrounding islands, seasonal patterns, safe harbors. Amara discusses with you the possibility of formal alliance.\n\nBut Vásquez spreads rumors among the crew: 'Diego's gone native. He cares more for savages than Spain. He's probably plotting with them against us.'\n\nSome soldiers believe him. You sense growing hostility from certain quarters. One evening, you're ambushed by three drunk soldiers intent on 'teaching you a lesson.'\n\nPaulo and Miguel intervene, but the message is clear: you're in danger from your own people.",
      choices: [
        {
          text: "Report the attack to Torres and demand action against Vásquez",
          next: "report_attack",
          stats: { honor: 25, ambition: 15 }
        },
        {
          text: "Handle it quietly to avoid escalating the conflict",
          next: "handle_quietly",
          stats: { honor: 20, empathy: 15 }
        }
      ]
    },

    refuse_vasquez: {
      title: "Standing Firm",
      date: "June 1519 - The Confrontation",
      text: "'No, Lieutenant. I won't betray Kalani's trust by interrogating him about gold. We're guests here, not conquerors.'\n\nVásquez's face darkens. 'That's insubordination, mapmaker. Captain Torres may tolerate your softness, but I don't. You'll do as ordered or face consequences.'\n\n'My orders come from the Captain, not you,' you reply. 'And Captain Torres values building alliances over stealing treasure.'\n\nKalani watches this exchange, not understanding the words but reading the tension. He looks at you with a question in his eyes: are you friend or foe?\n\nYou turn your back on Vásquez and return to working with Kalani. Through gestures and drawings, you continue mapping, but now you're also teaching him Spanish words and learning his language.\n\nVásquez stalks away, but you've made a permanent enemy. Later, Captain Torres summons you. 'Diego, I support your approach, but you've created a problem. Vásquez has influence with some crew. Be careful.'",
      choices: [
        {
          text: "Accept the risk and continue building genuine friendship with Awahari",
          next: "accept_risk",
          stats: { empathy: 30, honor: 30 }
        },
        {
          text: "Be more cautious but maintain your principles",
          next: "cautious_principles",
          stats: { empathy: 20, honor: 25, ambition: 10 }
        }
      ]
    },

    diplomatic_inquiry: {
      title: "The Delicate Question",
      date: "June 1519 - Seeking Resources",
      text: "You try to ask Kalani about resources diplomatically. Through gestures and drawings, you indicate metals, asking if they have knowledge of gold, silver, or copper deposits.\n\nKalani nods and leads you inland to a stream where nuggets of gold occasionally wash down from the mountains. He shows you the small amounts they've collected, used for decorative purposes, not currency.\n\n'This is all?' you ask through gestures.\n\nKalani nods, then draws in the sand: images showing that metal is not valued highly here. They prize shells, woven goods, food, and knowledge far more than gold.\n\nWhen you report this to Lieutenant Vásquez, he's disgusted. 'They sit on gold and don't even mine it? Savages indeed. We should take what they're too stupid to use.'\n\nCaptain Torres disagrees. 'That gold is theirs, Lieutenant. We're not thieves.'\n\nBut you see some soldiers eyeing the stream greedily. Trouble is brewing.",
      choices: [
        {
          text: "Warn Kalani about potential theft and help protect the site",
          next: "warn_protect",
          stats: { empathy: 25, honor: 25 }
        },
        {
          text: "Report your concerns to Torres and let him handle it",
          next: "report_concerns",
          stats: { honor: 20, ambition: 15 }
        },
        {
          text: "Focus on your mapping work and stay neutral",
          next: "stay_neutral",
          stats: { ambition: 15, honor: 5 }
        }
      ]
    },

    reluctant_compliance: {
      title: "Compromised Honor",
      date: "June-July 1519 - The Weight of Choices",
      text: "You obey Vásquez's orders to inquire about gold, though you do so as respectfully as possible. Kalani seems confused by your questions—gold matters little to his people.\n\nOver the following weeks, you continue following orders that make you uncomfortable. You translate demands more than requests. You stand silent when soldiers mock Awahari customs. You watch as Father Rodrigo destroys small shrines he deems demonic.\n\nEach compromise weighs on you. You're doing your duty, but at what cost?\n\nKalani begins avoiding you. The open friendship you'd begun to build cools. Other Awahari who'd welcomed you become distant.\n\nPaulo confronts you one night: 'What happened to you, Diego? You started this voyage with principles. Now you're just another soldier following orders.'\n\nHis words cut deep because they're true. Have you lost yourself?",
      choices: [
        {
          text: "Rediscover your principles and start opposing unjust orders",
          next: "rediscover_principles",
          stats: { empathy: 20, honor: 20 }
        },
        {
          text: "Continue complying but request transfer away from diplomatic duties",
          next: "request_transfer",
          stats: { honor: 10, ambition: 10 }
        },
        {
          text: "Accept this is who you've become and focus on survival",
          next: "accept_compromise",
          stats: { ambition: 15, empathy: -10, honor: -10 }
        }
      ]
    },

    document_theft: {
      title: "The Truth Teller",
      date: "July 1519 - Crisis Point",
      text: "You document the theft fully and support Captain Torres in returning the stolen items. When Vásquez objects, you present your written account to the Captain.\n\n'Sir, the Awahari have been nothing but hospitable. This theft violates every principle of honor and diplomacy. If we don't make this right, we'll turn allies into enemies.'\n\nTorres reads your account and nods grimly. He orders the soldiers flogged and the items returned personally with apologies.\n\nWhen you and Torres return the golden ornaments to the Awahari temple, Elder Amara is moved to tears. Through your growing language skills, you apologize for your people's actions.\n\nAmara responds: 'You have honor, Diego. Your people have some without honor, some with. You are with honor. We see this.'\n\nThe crisis passes, but the incident has consequences. The honest soldiers respect you more; the dishonest ones resent you deeply. Vásquez begins plotting against you openly.",
      choices: [
        {
          text: "Continue documenting truth regardless of personal cost",
          next: "truthful_path",
          stats: { empathy: 30, honor: 35 }
        },
        {
          text: "Be more selective to avoid making too many enemies",
          next: "selective_truth",
          stats: { honor: 25, empathy: 20, ambition: 10 }
        }
      ]
    },

    private_documentation: {
      title: "The Secret Chronicle",
      date: "July 1519 - Hidden Record",
      text: "You document the theft privately, noting names and details, but don't immediately bring it to Captain Torres. You're creating a complete, honest record while avoiding immediate confrontation.\n\nYou do suggest privately to the soldiers that they return what they've taken. Some comply; others don't.\n\nThe Awahari discover the theft anyway. Relations deteriorate. They become suspicious of all Spaniards, including you. Your failure to act decisively has cost you their trust.\n\nElder Amara asks you directly, through the language you've learned: 'You knew? You say nothing?'\n\nYou try to explain that you documented it, that you encouraged return of the items, but Amara shakes her head sadly. 'Document not same as do. You choose safety over right. We see this.'\n\nYou've preserved your position but lost moral credibility.",
      choices: [
        {
          text: "Make amends by taking stronger action going forward",
          next: "make_amends",
          stats: { empathy: 20, honor: 20 }
        },
        {
          text: "Accept that complete honesty is impossible in your position",
          next: "accept_limitations",
          stats: { honor: 15, ambition: 15 }
        }
      ]
    },

    present_mutual_benefit: {
      title: "The Negotiation",
      date: "July 1519 - Proposal",
      text: "You help Captain Torres present the trading post proposal to Elder Amara as mutually beneficial. Through your translation, Torres explains:\n\n'We offer protection from other European ships, metal tools, new crops and animals. In return, we ask only to maintain a small post here for resupply.'\n\nAmara listens carefully, then consults with other elders. After long deliberation, she responds:\n\n'Your tools are useful. Your protection, maybe useful. But we fear you want more than you say. Other islands tell stories of white men who come promising trade, then take land, take people. How we trust this not happen?'\n\nIt's a fair question. How do you respond?",
      choices: [
        {
          text: "Propose a trial period with clear boundaries and consequences",
          next: "propose_trial",
          stats: { empathy: 25, honor: 25, ambition: 20 }
        },
        {
          text: "Offer personal guarantee and your own continued presence",
          next: "personal_guarantee",
          stats: { empathy: 30, honor: 30, ambition: 15 }
        },
        {
          text: "Acknowledge the risk and suggest starting with limited contact",
          next: "acknowledge_risk",
          stats: { empathy: 20, honor: 25, ambition: 15 }
        }
      ]
    },

    ensure_consent: {
      title: "True Understanding",
      date: "July 1519 - The Principle of Consent",
      text: "You insist that Amara must truly understand and genuinely consent, not simply acquiesce to Spanish power.\n\nYou spend days explaining what a trading post means: permanent Spanish presence, regular ship visits, cultural exchange, potential conflicts. You teach Amara and other elders enough Spanish that they can communicate basic needs and concerns.\n\nYou also learn more of their language and explain their decision-making process to Captain Torres: 'They decide by consensus, not by authority. Amara must consult all the elders and many community members. This will take time.'\n\nSome Spanish soldiers grow impatient. Vásquez argues for simply claiming the island and imposing Spanish will. But Torres supports your patient approach.\n\nAfter two weeks of discussion, the Awahari reach a decision. Amara presents it to you formally.",
      choices: [
        {
          text: "Listen to their decision and honor it, whatever it is",
          next: "honor_decision",
          stats: { empathy: 35, honor: 35 }
        }
      ]
    },

    oppose_ceremony: {
      title: "Standing Against Empire",
      date: "July 1519 - The Breaking Point",
      text: "'Captain Torres, I cannot support this ceremony. The Awahari don't understand what claiming their land for Spain means. They see it as friendly ritual, not submission. We'd be deceiving them.'\n\nTorres frowns. 'Diego, we have orders from the Crown. We must claim new lands formally.'\n\n'Then let's claim uninhabited lands, sir. But this island has people who've lived here for generations. We can establish alliance without conquest.'\n\nVásquez explodes: 'This is treason! You're putting savages above your own king!'\n\n'I'm putting honesty above deception,' you counter. 'And calling them savages shows your ignorance, not their inferiority.'\n\nThe confrontation nearly comes to blows. Captain Torres must choose: support you and risk mutiny from Vásquez's faction, or proceed with the ceremony and lose Awahari trust.",
      choices: [
        {
          text: "Continue opposing the ceremony at all costs",
          next: "total_opposition",
          stats: { empathy: 40, honor: 35 }
        },
        {
          text: "Propose a modified ceremony that's more honest",
          next: "modified_ceremony",
          stats: { empathy: 30, honor: 30, ambition: 15 }
        }
      ]
    },

    reform_ceremony: {
      title: "Reshaping Imperial Ritual",
      date: "July 1519 - Compromise",
      text: "You propose reforming the ceremony to be more respectful and honest. Instead of claiming the land outright, you suggest a ceremony of friendship and alliance.\n\n'Captain, let's present it as two peoples meeting as equals. We plant our flag, yes, but beside theirs, not replacing it. We ask for friendship and trade, not submission.'\n\nFather Rodrigo supports this: 'Christ taught us to love our neighbors. Perhaps this is more Christian than conquest.'\n\nTorres agrees to the modified ceremony. When you explain it to Amara through your improving language skills, she's pleased. 'This we accept. Friendship ceremony, not taking ceremony.'\n\nThe ceremony proceeds with both Spanish and Awahari elements. Flags are raised together. Gifts are exchanged. Father Rodrigo offers blessings that don't demand conversion.\n\nIt's imperfect—still asserting Spanish presence—but far better than conquest.",
      choices: [
        {
          text: "Build on this foundation of respectful cooperation",
          next: "cooperative_future",
          stats: { empathy: 30, honor: 30, ambition: 25 }
        }
      ]
    },

    demand_consent: {
      title: "The Voice for Justice",
      date: "July 1519 - Standing Firm",
      text: "'Captain Torres, we cannot establish Spanish presence without the Awahari's genuine, informed consent. Anything else is conquest by deception.'\n\nTorres respects your position but faces pressure from above. 'Diego, I have orders from the Crown. How do I balance that with what you're asking?'\n\n'By being honest about our intentions and accepting their right to refuse. If they agree to Spanish presence understanding what it means, then we proceed honorably. If not, we respect their sovereignty.'\n\nVásquez is livid: 'Sovereignty? These savages don't have sovereignty! This land is ours by right of discovery!'\n\n'They were here first,' you counter. 'Discovery is a fiction we use to justify theft.'\n\nYour words shock even sympathetic officers. You've said what many think but none dare speak aloud.\n\nCaptain Torres must make a decision that will affect the entire expedition's future.",
      choices: [
        {
          text: "Stand by your radical position regardless of consequences",
          next: "radical_stand",
          stats: { empathy: 40, honor: 35 }
        },
        {
          text: "Soften slightly to preserve some influence",
          next: "soften_position",
          stats: { empathy: 30, honor: 30, ambition: 15 }
        }
      ]
    },

    fair_proposal: {
      title: "The Balanced Negotiator",
      date: "July 1519 - Finding Middle Ground",
      text: "You work to make the Spanish presence proposal as fair as possible while acknowledging it's still fundamentally unequal. You help draft an agreement:\n\n- Spain may maintain a small resupply post (no more than 10 men)\n- Awahari maintain control of their land and villages\n- Trade is voluntary on both sides\n- Spanish must respect Awahari customs and sacred sites\n- Any disputes are settled by council of both peoples\n\nWhen you present this to Amara, she's cautiously receptive. 'This better than taking. Still, we worry. Small group becomes big. We see this happen other places.'\n\nCaptain Torres is pleased with your work. Vásquez calls it weakness. The Awahari are uncertain but willing to try.\n\nYou've created something better than conquest but short of equality. It's a start.",
      choices: [
        {
          text: "Commit to enforcing these terms fairly",
          next: "enforce_fairly",
          stats: { empathy: 25, honor: 30, ambition: 20 }
        },
        {
          text: "Work to improve terms further over time",
          next: "improve_terms",
          stats: { empathy: 30, honor: 25, ambition: 15 }
        }
      ]
    },

    explain_violation: {
      title: "Cultural Bridge",
      date: "July 1519 - Difficult Truths",
      text: "'Captain, the Awahari don't believe land can be owned by individuals or nations. Their land belongs to the ancestors, the living, and the unborn together. Claiming it for Spain violates their deepest beliefs.'\n\nTorres listens carefully. 'But Diego, we have orders. The Crown expects us to claim new lands.'\n\n'Then claim uninhabited lands, sir. Or negotiate an alliance where both parties maintain sovereignty. But don't pretend to own what cannot be owned.'\n\nFather Rodrigo adds: 'Perhaps Diego is right. The early Christians also held property in common. Maybe these people live closer to God's original plan than we do.'\n\nThis theological twist surprises everyone. Even Vásquez hesitates to argue against a priest.\n\nCaptain Torres considers. 'Diego, work with Amara to find a solution both our peoples can accept. You have two weeks.'",
      choices: [
        {
          text: "Negotiate a truly mutual agreement",
          next: "mutual_agreement",
          stats: { empathy: 35, honor: 35, ambition: 20 }
        }
      ]
    },

    seek_compromise: {
      title: "The Pragmatic Idealist",
      date: "July 1519 - Finding Common Ground",
      text: "You seek compromise: Spanish presence without conquest, cooperation without submission.\n\nYou propose to Captain Torres: 'Let's ask for permission to establish a resupply point, not claim the land. Let's offer to defend the island from other European powers in exchange for safe harbor. Frame it as alliance, not conquest.'\n\nTo Amara, you explain: 'Spanish ships need safe places for water and food. If Awahari allow this, we can offer metal tools, new plants, and protection. But your land remains yours.'\n\nBoth sides are cautiously receptive. You draft an agreement in both Spanish and Awahari (using the writing system you've helped create for their language).\n\nIt's not perfect—Spain still gets presence and influence—but it's better than pure conquest. Awahari maintain autonomy; Spain gets practical benefits.\n\nBoth Torres and Amara sign the agreement. You've created something genuinely new: a (somewhat) equitable colonial relationship.",
      choices: [
        {
          text: "Commit to making this agreement work long-term",
          next: "make_it_work",
          stats: { empathy: 30, honor: 30, ambition: 25 }
        }
      ]
    },

    continue_protection: {
      title: "The Guardian's Price",
      date: "July-August 1519 - Under Threat",
      text: "You continue protecting the Awahari despite growing personal danger. You intervene in attempted abuses, report violations, and advocate constantly for better treatment.\n\nThe protection works—the Awahari remain relatively safe—but you pay a price. You're assaulted twice by angry soldiers. Your possessions are vandalized. Threats are made against your life.\n\nVásquez declares openly: 'When we leave this island, mapmaker, you won't be aboard. Accidents happen at sea.'\n\nCaptain Torres does his best to protect you, but his authority is weakening. Some crew members openly defy him, emboldened by Vásquez's resistance.\n\nElder Amara, seeing your suffering, makes an offer: 'Stay with us when ships leave. You are ohana. We protect you.'\n\nYou're torn. You could continue the voyage and face likely death, or abandon your homeland to live among the Awahari.",
      choices: [
        {
          text: "Accept Amara's offer and stay on Awahari",
          next: "ending_stay_awahari",
          stats: { empathy: 40, honor: 30 }
        },
        {
          text: "Continue the voyage and face the consequences",
          next: "face_consequences",
          stats: { honor: 35, ambition: 15 }
        },
        {
          text: "Ask Torres to send you home on the next supply ship",
          next: "request_return_home",
          stats: { honor: 25, ambition: 10 }
        }
      ]
    },

    subtle_protection: {
      title: "The Careful Guardian",
      date: "July-August 1519 - Quiet Resistance",
      text: "You protect the Awahari more subtly, avoiding direct confrontations with Vásquez while still preventing abuses when possible.\n\nYou warn Awahari families when soldiers approach with bad intentions. You sabotage plans for raids by 'accidentally' alerting watchmen. You document abuses for future justice even if you can't prevent them immediately.\n\nIt's less effective than direct intervention, but you survive and maintain some influence. The Awahari appreciate your efforts, even if they don't fully understand your constraints.\n\nAfter two months, Captain Torres announces the fleet will depart soon, leaving ten men to maintain a trading post. He asks your recommendation for who should stay.\n\nThis is your chance to ensure the right people remain—those who'll treat the Awahari respectfully.",
      choices: [
        {
          text: "Volunteer to stay yourself and protect them long-term",
          next: "volunteer_stay",
          stats: { empathy: 35, honor: 30, ambition: 10 }
        },
        {
          text: "Recommend good men and continue with the expedition",
          next: "recommend_good_men",
          stats: { empathy: 25, honor: 25, ambition: 20 }
        }
      ]
    },

    consider_staying: {
      title: "Between Two Worlds",
      date: "August 1519 - A Life-Changing Decision",
      text: "You seriously consider Elder Kalani's offer to stay on Awahari. You've grown to love these people and their way of life. You've found meaning in protecting them. Among your own crew, you're an outcast; here, you're valued.\n\nBut staying means abandoning your family in Spain, your career, your entire former life. You'll be marked forever as the Spaniard who 'went native,' a cautionary tale or figure of contempt.\n\nYet what waits for you back home? A modest mapmaker's life, memories of people you failed to protect, complicity in an empire you've come to question.\n\nPaulo counsels you: 'I know this choice, Diego. I was taken from my home, then given a chance to return. I chose to stay in the new world because I'd seen too much to go back. Whatever you choose, choose for yourself, not from fear or obligation.'\n\nFather Rodrigo offers different advice: 'God may be calling you to minister here, Diego. Some priests stay among native peoples, building bridges. It's noble work.'",
      choices: [
        {
          text: "Stay on Awahari and build a life among them",
          next: "ending_join_awahari",
          stats: { empathy: 40, honor: 30 }
        },
        {
          text: "Return with the expedition but pledge to return someday",
          next: "promise_return",
          stats: { empathy: 25, honor: 25, ambition: 20 }
        }
      ]
    },

    committed_protector: {
      title: "Duty to Both Peoples",
      date: "August 1519 - Dual Loyalty",
      text: "You remain committed to both protecting the Awahari and continuing the Spanish mission. It's exhausting, trying to serve two masters, but you believe it's possible.\n\nYou negotiate the terms for the trading post that will remain after the fleet departs. You ensure good men are chosen to stay—Paulo volunteers, as does Miguel, and several others you trust.\n\nYou create detailed agreements protecting Awahari rights. You establish protocols for dispute resolution. You train the men who'll stay in the Awahari language and customs.\n\nWhen the fleet prepares to depart, Elder Kalani presents you with a carved paddle, a symbol of navigation and journey. 'You sail on, but part of you stays here. You always welcome home.'\n\nCaptain Torres commends your work: 'Diego, you've accomplished something remarkable. You've proven that Spanish expansion doesn't require Spanish brutality. Your maps and your example will guide future expeditions.'\n\nBut as the Santa Cruz sails away from Awahari, you wonder: did you do enough?",
      choices: [
        {
          text: "Continue the voyage with pride in what you accomplished",
          next: "continue_with_pride",
          stats: { empathy: 30
