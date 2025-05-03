import "dart:math" show Random;

final rand = Random();
Word randomWord() => wordDefinitions[rand.nextInt(wordDefinitions.length)];

class Word {
  final String word;
  final Map<String, List<String>> definitions;
  Word({required this.word, required this.definitions});
  @override
  String toString() {
    return word;
  }
}

final wordDefinitions = <Word>[
  Word(
    word: "abate",
    definitions: {
      "v": ['to diminish in intensity', 'to cause to diminish in intensity'],
    },
  ),
  Word(
    word: "aberrant",
    definitions: {
      "adj": ['diverging from the standard type'],
    },
  ),
  Word(
    word: "abjure",
    definitions: {
      "v": ['to reject or renounce'],
    },
  ),
  Word(
    word: "abscond",
    definitions: {
      "v": ['to leave secretly, evading detection'],
    },
  ),
  Word(
    word: "abstain",
    definitions: {
      "v": ['to voluntarily refrain from doing something'],
    },
  ),
  Word(
    word: "acumen",
    definitions: {
      "n": ['keen judgment and perception'],
    },
  ),
  Word(
    word: "admonish",
    definitions: {
      "v": ['scold or to advise firmly'],
    },
  ),
  Word(
    word: "adulterate",
    definitions: {
      "v": ['to contaminate or make impure by introducing inferior elements'],
    },
  ),
  Word(
    word: "advocate",
    definitions: {
      "v": ['to recommend, support, or advise'],
    },
  ),
  Word(
    word: "aesthetic",
    definitions: {
      "adj": ['concerned with the nature of beauty and art'],
    },
  ),
  Word(
    word: "affectation",
    definitions: {
      "n": ['false behavior, often meant to impress or conceal the truth'],
    },
  ),
  Word(
    word: "aggrandize",
    definitions: {
      "v": ['enlarge or increase, esp wealth, power, reputation'],
    },
  ),
  Word(
    word: "alacrity",
    definitions: {
      "n": ['promptness and eagerness'],
    },
  ),
  Word(
    word: "alleviate",
    definitions: {
      "v": ['to relieve a problem or ease a burden'],
    },
  ),
  Word(
    word: "amalgamate",
    definitions: {
      "v": ['to combine to or mix together'],
    },
  ),
  Word(
    word: "ambiguous",
    definitions: {
      "adj": ['unclear', 'open to multiple interpretations'],
    },
  ),
  Word(
    word: "ambivalent",
    definitions: {
      "adj": [
        'having mixed or contradictory feelings about someone or something',
      ],
    },
  ),
  Word(
    word: "ameliorate",
    definitions: {
      "v": ['to improve or mitigate a situation'],
    },
  ),
  Word(
    word: "amenable",
    definitions: {
      "adj": ['easily convinced or persuaded'],
    },
  ),
  Word(
    word: "anachronism",
    definitions: {
      "n": [
        'something old-fashioned',
        'something appearing in a time period where it does not belong',
      ],
    },
  ),
  Word(
    word: "analogous",
    definitions: {
      "n": ['comparable', 'appropriate for analogy'],
    },
  ),
  Word(
    word: "anoint",
    definitions: {
      "v": [
        'to choose for a particular office or position',
        'to use oil on a person in a religious ceremony',
      ],
    },
  ),
  Word(
    word: "anomaly",
    definitions: {
      "n": ['an exception or unusual case'],
    },
  ),
  Word(
    word: "antipathy",
    definitions: {
      "n": ['strong dislike or hatred'],
    },
  ),
  Word(
    word: "antithetical",
    definitions: {
      "adj": ['contrary to the very nature of'],
    },
  ),
  Word(
    word: "apathy",
    definitions: {
      "n": ['state of total lack of interest or enthusiasm'],
    },
  ),
  Word(
    word: "appease",
    definitions: {
      "v": ['to placate', 'to satisfy (an appetite, a need)'],
    },
  ),
  Word(
    word: "arbitrary",
    definitions: {
      "adj": ['seemingly chosen or designated without reason or purpose'],
    },
  ),
  Word(
    word: "arcane",
    definitions: {
      "adj": ['secret or known only to a select group'],
    },
  ),
  Word(
    word: "archaic",
    definitions: {
      "adj": ['old-fashioned', 'no longer in the common usage'],
    },
  ),
  Word(
    word: "arduous",
    definitions: {
      "adj": ['difficult, taxing, requiring considerable effort'],
    },
  ),
  Word(
    word: "articulate",
    definitions: {
      "adj": ['exhibiting considerable communication skills, well-spoken'],
    },
  ),
  Word(
    word: "artless",
    definitions: {
      "adj": ['without artifice', 'natural, untrained'],
    },
  ),
  Word(
    word: "ascetic",
    definitions: {
      "adj": ['austere or self-denying'],
    },
  ),
  Word(
    word: "assuage",
    definitions: {
      "v": [
        'to provide relief from an unpleasant feeling',
        'to satisfy a need or appetite',
      ],
    },
  ),
  Word(
    word: "astonishment",
    definitions: {
      "n": ['total surprise, shock'],
    },
  ),
  Word(
    word: "audacious",
    definitions: {
      "adj": ['very bold or presumptuous'],
    },
  ),
  Word(
    word: "austere",
    definitions: {
      "adj": ['severe, unadorned'],
    },
  ),
  Word(
    word: "avarice",
    definitions: {
      "n": ['greed'],
    },
  ),
  Word(
    word: "aver",
    definitions: {
      "v": ['to assert or allege'],
    },
  ),
  Word(
    word: "banal",
    definitions: {
      "adj": ['boring, cliche'],
    },
  ),
  Word(
    word: "belie",
    definitions: {
      "v": ['give a false impression in word, appearance, or deed'],
    },
  ),
  Word(
    word: "benign",
    definitions: {
      "adj": ['gentle, harmless'],
    },
  ),
  Word(
    word: "biased",
    definitions: {
      "adj": ['prejudiced, displaying partiality'],
    },
  ),
  Word(
    word: "bolster",
    definitions: {
      "v": ['to shore up or support'],
    },
  ),
  Word(
    word: "bombastic",
    definitions: {
      "adj": ['overblown, theatrical'],
    },
  ),
  Word(
    word: "brazen",
    definitions: {
      "adj": ['bold or open to the point of shocking', 'shameless'],
    },
  ),
  Word(
    word: "bucolic",
    definitions: {
      "adj": ['pastoral, rustic'],
    },
  ),
  Word(
    word: "burgeon",
    definitions: {
      "v": ['flourish, bloom, expand or increase quickly'],
    },
  ),
  Word(
    word: "cacophony",
    definitions: {
      "n": ['loud and chaotic noise'],
    },
  ),
  Word(
    word: "calumny",
    definitions: {
      "n": ['lie or slander'],
    },
  ),
  Word(
    word: "candid",
    definitions: {
      "adj": ['honest, open'],
    },
  ),
  Word(
    word: "canon",
    definitions: {
      "n": [
        'accepted rules and tenets of a discipline',
        'sacred works/scripture',
        'notable literary and artistic works',
      ],
    },
  ),
  Word(
    word: "capacity",
    definitions: {
      "n": [
        'the ability to perform a particular action',
        'the total amount a container can hold',
        'a particular position or role',
      ],
    },
  ),
  Word(
    word: "capricious",
    definitions: {
      "adj": ['mercurial, unpredictable, whimsical'],
    },
  ),
  Word(
    word: "castigate",
    definitions: {
      "v": ['to scold or berate strongly'],
    },
  ),
  Word(
    word: "catalyst",
    definitions: {
      "n": ['something that speeds up a process or causes action'],
    },
  ),
  Word(
    word: "caustic",
    definitions: {
      "adj": ['corrosive', 'bitterly sarcastic'],
    },
  ),
  Word(
    word: "censure",
    definitions: {
      "v": ['to express intense condemnation'],
    },
  ),
  Word(
    word: "chauvinist",
    definitions: {
      "n": ['someone displaying prejudiced support for their own group'],
    },
  ),
  Word(
    word: "chicanery",
    definitions: {
      "n": ['trickery or deception'],
    },
  ),
  Word(
    word: "chronological",
    definitions: {
      "adj": ['ordered by time'],
    },
  ),
  Word(
    word: "coalesce",
    definitions: {
      "v": ['to come together, especially from disparate parts'],
    },
  ),
  Word(
    word: "cogent",
    definitions: {
      "adj": ['clearly laid out and persuasive'],
    },
  ),
  Word(
    word: "commensurate",
    definitions: {
      "adj": ['in accordance with, proportional'],
    },
  ),
  Word(
    word: "compelling",
    definitions: {
      "adj": ['captivating', 'very persuasive'],
    },
  ),
  Word(
    word: "comprehensive",
    definitions: {
      "adj": ['complete and thorough'],
    },
  ),
  Word(
    word: "condone",
    definitions: {
      "v": ['to approve or allow'],
    },
  ),
  Word(
    word: "confound",
    definitions: {
      "v": ['to confuse or astonish'],
    },
  ),
  Word(
    word: "connoisseur",
    definitions: {
      "n": ['an expert judge in matters of taste'],
    },
  ),
  Word(
    word: "consequential",
    definitions: {
      "adj": ['as a result of', 'significant or memorable'],
    },
  ),
  Word(
    word: "construe",
    definitions: {
      "v": ['to interpret'],
    },
  ),
  Word(
    word: "consumption",
    definitions: {
      "n": ['utilization (especially of a resource)'],
    },
  ),
  Word(
    word: "contend",
    definitions: {
      "v": ['assert or claim', 'grapple with'],
    },
  ),
  Word(
    word: "contentious",
    definitions: {
      "adj": ['controversial', 'involving conflict'],
    },
  ),
  Word(
    word: "contrite",
    definitions: {
      "adj": ['remorseful'],
    },
  ),
  Word(
    word: "convoluted",
    definitions: {
      "adj": ['roundabout, not straightforward'],
    },
  ),
  Word(
    word: "copious",
    definitions: {
      "adj": ['plentiful or abundant'],
    },
  ),
  Word(
    word: "cosmopolitan",
    definitions: {
      "adj": ['of or relating to a city or urban area', 'sophisticated'],
    },
  ),
  Word(
    word: "covet",
    definitions: {
      "v": ['to desire something that does not belong to you'],
    },
  ),
  Word(
    word: "craft",
    definitions: {
      "n": ['cunning', 'skill'],
    },
  ),
  Word(
    word: "craven",
    definitions: {
      "adj": ['cowardly to the point of being shameful'],
    },
  ),
  Word(
    word: "credence",
    definitions: {
      "n": ['belief or trust'],
    },
  ),
  Word(
    word: "credulous",
    definitions: {
      "adj": ['gullible, naive'],
    },
  ),
  Word(
    word: "decorum",
    definitions: {
      "n": ['appropriate behavior or good manners'],
    },
  ),
  Word(
    word: "deference",
    definitions: {
      "n": ['respect or polite submission'],
    },
  ),
  Word(
    word: "deflect",
    definitions: {
      "v": ['divert or cause to ricochet'],
    },
  ),
  Word(
    word: "deftness",
    definitions: {
      "adj": ['skill, acumen', 'manual dexterity'],
    },
  ),
  Word(
    word: "delineate",
    definitions: {
      "v": [
        'to describe very accurately',
        'to clearly demarcate a boundary',
        'to render an outline',
      ],
    },
  ),
  Word(
    word: "demur",
    definitions: {
      "v": ['to object or raise concerns'],
    },
  ),
  Word(
    word: "denigrate",
    definitions: {
      "v": ['say negative things about, particularly in a defamatory way'],
    },
  ),
  Word(
    word: "deride",
    definitions: {
      "v": ['to mock or ridicule'],
    },
  ),
  Word(
    word: "derivative",
    definitions: {
      "adj": ['imitates another work in a way that is uninspiring'],
    },
  ),
  Word(
    word: "desiccate",
    definitions: {
      "v": ['to dry out completely', 'to suck out the vitality and passion'],
    },
  ),
  Word(
    word: "desultory",
    definitions: {
      "adj": ['halfhearted', 'inconsistent or random'],
    },
  ),
  Word(
    word: "detachment",
    definitions: {
      "n": ['objectivity or aloofness'],
    },
  ),
  Word(
    word: "determinant",
    definitions: {
      "n": ['a strong factor in an outcome'],
    },
  ),
  Word(
    word: "diatribe",
    definitions: {
      "n": ['a rant or angry speech denouncing someone or something'],
    },
  ),
  Word(
    word: "didactic",
    definitions: {
      "adj": ['intended to teach something, particularly related to morality'],
    },
  ),
  Word(
    word: "diffident",
    definitions: {
      "adj": ['shy, timid, or reserved due to a lack of confidence'],
    },
  ),
  Word(
    word: "dilettante",
    definitions: {
      "n": ['someone with an amateur, unserious interest in something'],
    },
  ),
  Word(
    word: "dirge",
    definitions: {
      "n": ['funeral or mourning lament', 'any sad, slow song'],
    },
  ),
  Word(
    word: "disabuse",
    definitions: {
      "v": ["to dispel someone's illusions about something"],
    },
  ),
  Word(
    word: "discern",
    definitions: {
      "v": ['to perceive'],
    },
  ),
  Word(
    word: "discrepancy",
    definitions: {
      "n": ['inconsistency'],
    },
  ),
  Word(
    word: "disinterested",
    definitions: {
      "adj": ['objective, unbiased', 'not invested in the outcome'],
    },
  ),
  Word(
    word: "disparage",
    definitions: {
      "v": ['to belittle'],
    },
  ),
  Word(
    word: "disparate",
    definitions: {
      "adj": ['dissimilar to such a degree that comparison is not possible'],
    },
  ),
  Word(
    word: "dispassionate",
    definitions: {
      "adj": ['impartial or cool'],
    },
  ),
  Word(
    word: "disregard",
    definitions: {
      "v": ['to ignore or pay no attention to'],
    },
  ),
  Word(
    word: "dissemble",
    definitions: {
      "v": ["conceal or disguise one's true feelings or beliefs"],
    },
  ),
  Word(
    word: "disseminate",
    definitions: {
      "v": ['to spread widely (especially information)'],
    },
  ),
  Word(
    word: "dissonance",
    definitions: {
      "n": ["a clash between two elements that don't blend well"],
    },
  ),
  Word(
    word: "diverge",
    definitions: {
      "v": ['to split apart, especially a road or path'],
    },
  ),
  Word(
    word: "dogma",
    definitions: {
      "n": ['the official beliefs or tenets of particular sect or group'],
    },
  ),
  Word(
    word: "dupe",
    definitions: {
      "v": ['to deceive or fool'],
    },
  ),
  Word(
    word: "ebullient",
    definitions: {
      "adj": ['cheerful, enthusiastic, excited'],
    },
  ),
  Word(
    word: "eccentric",
    definitions: {
      "adj": ['quirky or unusual'],
    },
  ),
  Word(
    word: "eclectic",
    definitions: {
      "adj": ['composed of a variety of styles, themes, motifs, etc.'],
    },
  ),
  Word(
    word: "efficacy",
    definitions: {
      "n": ['effectiveness'],
    },
  ),
  Word(
    word: "elegy",
    definitions: {
      "n": ['sad poem or song, often in remembrance of someone deceased'],
    },
  ),
  Word(
    word: "elicit",
    definitions: {
      "v": ['to provoke a response'],
    },
  ),
  Word(
    word: "eloquence",
    definitions: {
      "adj": ['persuasive and articulate speech'],
    },
  ),
  Word(
    word: "eminent",
    definitions: {
      "adj": ['well-known, respected, distinguished'],
    },
  ),
  Word(
    word: "empirical",
    definitions: {
      "adj": ['based on evidence'],
    },
  ),
  Word(
    word: "emulate",
    definitions: {
      "v": ['to imitate or attempt to equal in accomplishment'],
    },
  ),
  Word(
    word: "enervate",
    definitions: {
      "v": ['to exhaust or drain of energy'],
    },
  ),
  Word(
    word: "engender",
    definitions: {
      "v": ['to cause or give rise to'],
    },
  ),
  Word(
    word: "enhance",
    definitions: {
      "v": ['intensify, increase, augment'],
    },
  ),
  Word(
    word: "entitlement",
    definitions: {
      "n": [
        'belief that one deserves things one has not earned',
        'the rights one is afforded under the law',
      ],
    },
  ),
  Word(
    word: "ephemeral",
    definitions: {
      "adj": ['short-lived or transient'],
    },
  ),
  Word(
    word: "equable",
    definitions: {
      "adj": ['even-tempered', 'not given to much change or variation'],
    },
  ),
  Word(
    word: "equivocate",
    definitions: {
      "v": ['to use ambiguous language in order to mislead or deceive'],
    },
  ),
  Word(
    word: "erroneous",
    definitions: {
      "adj": ['incorrect'],
    },
  ),
  Word(
    word: "erudite",
    definitions: {
      "adj": ['learned'],
    },
  ),
  Word(
    word: "eschew",
    definitions: {
      "v": ['avoid or abstain from'],
    },
  ),
  Word(
    word: "esoteric",
    definitions: {
      "adj": ['obscure, arcane'],
    },
  ),
  Word(
    word: "estimable",
    definitions: {
      "adj": ['deserving respect, esteem, and admiration'],
    },
  ),
  Word(
    word: "eulogy",
    definitions: {
      "n": ['memorial speech for one who has died'],
    },
  ),
  Word(
    word: "exacerbate",
    definitions: {
      "v": ['to make worse'],
    },
  ),
  Word(
    word: "exacting",
    definitions: {
      "adj": ['challenging, demanding, grueling'],
    },
  ),
  Word(
    word: "exculpate",
    definitions: {
      "v": ['to exonerate or vindicate'],
    },
  ),
  Word(
    word: "exigent",
    definitions: {
      "adj": ['urgent or pressing'],
    },
  ),
  Word(
    word: "exonerate",
    definitions: {
      "v": ['to clear of charges of wrongdoing'],
    },
  ),
  Word(
    word: "expatiate",
    definitions: {
      "v": ['to elaborate on something in great detail'],
    },
  ),
  Word(
    word: "explicate",
    definitions: {
      "v": ['to explain in detail'],
    },
  ),
  Word(
    word: "exposition",
    definitions: {
      "n": ['a thorough explanation', 'a public show or fair'],
    },
  ),
  Word(
    word: "extraneous",
    definitions: {
      "adj": ['irrelevant or superfluous'],
    },
  ),
  Word(
    word: "extrapolate",
    definitions: {
      "v": ['to estimate based on presently available information or facts'],
    },
  ),
  Word(
    word: "facetious",
    definitions: {
      "adj": ['glib or flippant'],
    },
  ),
  Word(
    word: "facilitate",
    definitions: {
      "v": ['to make something easier or simpler'],
    },
  ),
  Word(
    word: "fallacious",
    definitions: {
      "adj": ['relying on a fallacy and thus incorrect/misinformed'],
    },
  ),
  Word(
    word: "fastidious",
    definitions: {
      "adj": ['meticulous', 'invested in cleanliness'],
    },
  ),
  Word(
    word: "fluctuate",
    definitions: {
      "v": ['to shift without apparent pattern'],
    },
  ),
  Word(
    word: "foment",
    definitions: {
      "v": ['to foster unrest or discontent'],
    },
  ),
  Word(
    word: "forestall",
    definitions: {
      "v": ['to hold off or try to prevent'],
    },
  ),
  Word(
    word: "fortuitous",
    definitions: {
      "adj": ['fortunate and lucky'],
    },
  ),
  Word(
    word: "frugal",
    definitions: {
      "adj": ['economical, thrifty'],
    },
  ),
  Word(
    word: "gainsay",
    definitions: {
      "v": ['deny or oppose'],
    },
  ),
  Word(
    word: "galvanize",
    definitions: {
      "v": ['to prod someone into action'],
    },
  ),
  Word(
    word: "garrulous",
    definitions: {
      "adj": ['talkative'],
    },
  ),
  Word(
    word: "gauche",
    definitions: {
      "adj": ['socially inept, inappropriate, or awkward'],
    },
  ),
  Word(
    word: "germane",
    definitions: {
      "adj": ['relevant to the matter at hand'],
    },
  ),
  Word(
    word: "glib",
    definitions: {
      "adj": ['talking volubly, but carelessly or insincerely'],
    },
  ),
  Word(
    word: "gregarious",
    definitions: {
      "adj": ['sociable, genial'],
    },
  ),
  Word(
    word: "guile",
    definitions: {
      "n": ['craftiness and cunning'],
    },
  ),
  Word(
    word: "hackneyed",
    definitions: {
      "adj": ['cliche, trite, banal'],
    },
  ),
  Word(
    word: "harangue",
    definitions: {
      "n": ['diatribe or rant'],
    },
  ),
  Word(
    word: "hedonism",
    definitions: {
      "n": ['the pursuit of pleasure'],
    },
  ),
  Word(
    word: "hierarchical",
    definitions: {
      "adj": ['arranged in rank order or hierarchy'],
    },
  ),
  Word(
    word: "homogenous",
    definitions: {
      "adj": ['uniform, identical'],
    },
  ),
  Word(
    word: "hyperbole",
    definitions: {
      "n": ['obvious exaggeration for effect'],
    },
  ),
  Word(
    word: "iconoclast",
    definitions: {
      "n": ['a person who criticizes cherished beliefs or institutions'],
    },
  ),
  Word(
    word: "ideological",
    definitions: {
      "adj": ['relating to a particular belief system or theory'],
    },
  ),
  Word(
    word: "imminent",
    definitions: {
      "adj": ['about to happen'],
    },
  ),
  Word(
    word: "immutable",
    definitions: {
      "adj": ['unchangeable'],
    },
  ),
  Word(
    word: "impair",
    definitions: {
      "v": ['to hinder or weaken someone or something'],
    },
  ),
  Word(
    word: "impediment",
    definitions: {
      "n": ['barrier, hindrance, or obstruction'],
    },
  ),
  Word(
    word: "imperturbable",
    definitions: {
      "adj": ['remaining calm under any circumstance'],
    },
  ),
  Word(
    word: "implacable",
    definitions: {
      "adj": ['unforgiving', 'relentless'],
    },
  ),
  Word(
    word: "implicit",
    definitions: {
      "adj": ['implied or insinuated without being directly stated'],
    },
  ),
  Word(
    word: "imprudence",
    definitions: {
      "n": ['bad judgment'],
    },
  ),
  Word(
    word: "impudent",
    definitions: {
      "adj": ['disrespectful'],
    },
  ),
  Word(
    word: "inadvertent",
    definitions: {
      "adj": ['by accident or unintentional'],
    },
  ),
  Word(
    word: "inchoate",
    definitions: {
      "adj": ['rudimentary, in the beginning stages'],
    },
  ),
  Word(
    word: "inconclusive",
    definitions: {
      "adj": ['indeterminate or unresolved'],
    },
  ),
  Word(
    word: "indebted",
    definitions: {
      "adj": ['owing money', 'owing gratitude to someone or something'],
    },
  ),
  Word(
    word: "indefatigable",
    definitions: {
      "adj": ['cannot be made tired'],
    },
  ),
  Word(
    word: "indolent",
    definitions: {
      "adj": ['lazy', 'idle'],
    },
  ),
  Word(
    word: "infer",
    definitions: {
      "v": [
        'to conclude from implicit evidence (as opposed to explicit facts)',
      ],
    },
  ),
  Word(
    word: "ingenuous",
    definitions: {
      "adj": ['naive or innocent'],
    },
  ),
  Word(
    word: "inimical",
    definitions: {
      "adj": ['harmful or hostile'],
    },
  ),
  Word(
    word: "innocuous",
    definitions: {
      "adj": ['harmless'],
    },
  ),
  Word(
    word: "inscrutable",
    definitions: {
      "adj": ['enigmatic, incomprehensible'],
    },
  ),
  Word(
    word: "insipid",
    definitions: {
      "adj": ['bland, uninspired, inane'],
    },
  ),
  Word(
    word: "insular",
    definitions: {
      "adj": ["uninterested in matters outside one's immediate sphere"],
    },
  ),
  Word(
    word: "intensive",
    definitions: {
      "adj": ['concentrated and in-depth'],
    },
  ),
  Word(
    word: "intermediary",
    definitions: {
      "n": ['a go-between'],
    },
  ),
  Word(
    word: "intimate",
    definitions: {
      "adj": ['close (as in a relationship)', 'particularly private'],
      "v": ['to imply'],
    },
  ),
  Word(
    word: "intractable",
    definitions: {
      "adj": ['unmanageable', 'stubborn or obstinate'],
    },
  ),
  Word(
    word: "intransigent",
    definitions: {
      "adj": ['uncompromising, obstinate'],
    },
  ),
  Word(
    word: "intrepid",
    definitions: {
      "adj": ['bold and adventurous'],
    },
  ),
  Word(
    word: "inveterate",
    definitions: {
      "adj": ['ingrained, habitual'],
    },
  ),
  Word(
    word: "invulnerable",
    definitions: {
      "adj": ['indestructible, impervious to harm'],
    },
  ),
  Word(
    word: "irascible",
    definitions: {
      "adj": ['irritable, testy, touchy'],
    },
  ),
  Word(
    word: "irresolute",
    definitions: {
      "adj": ['wishy-washy, hesitant'],
    },
  ),
  Word(
    word: "laconic",
    definitions: {
      "adj": ['taciturn, reserved, succinct'],
    },
  ),
  Word(
    word: "laud",
    definitions: {
      "v": ['to praise'],
    },
  ),
  Word(
    word: "laudable",
    definitions: {
      "adj": ['praiseworthy'],
    },
  ),
  Word(
    word: "litigation",
    definitions: {
      "n": ['legal proceedings'],
    },
  ),
  Word(
    word: "loquacious",
    definitions: {
      "adj": ['talkative'],
    },
  ),
  Word(
    word: "lucid",
    definitions: {
      "adj": ['clear and coherent'],
    },
  ),
  Word(
    word: "luminous",
    definitions: {
      "adj": ['full of light'],
    },
  ),
  Word(
    word: "magnanimity",
    definitions: {
      "n": ['generosity and nobility of spirit'],
    },
  ),
  Word(
    word: "maladroit",
    definitions: {
      "adj": ['clumsy, awkward, inept'],
    },
  ),
  Word(
    word: "malign",
    definitions: {
      "adj": ['evil or harmful'],
      "v": ['to speak negatively about someone or something'],
    },
  ),
  Word(
    word: "malleable",
    definitions: {
      "adj": ['pliant or pliable', 'easily influenced'],
    },
  ),
  Word(
    word: "maverick",
    definitions: {
      "n": ['an unorthodox person or rebel'],
    },
  ),
  Word(
    word: "mendacity",
    definitions: {
      "n": ['untruthfulness, dishonesty'],
    },
  ),
  Word(
    word: "mercurial",
    definitions: {
      "adj": ['easily changeable, fickle'],
    },
  ),
  Word(
    word: "meticulous",
    definitions: {
      "adj": ['paying close attention to detail'],
    },
  ),
  Word(
    word: "misanthrope",
    definitions: {
      "n": ['person who hates humanity'],
    },
  ),
  Word(
    word: "mitigate",
    definitions: {
      "v": ['to improve a painful, unpleasant, or negative situation'],
    },
  ),
  Word(
    word: "modest",
    definitions: {
      "adj": ['not boastful', 'not overly showy'],
    },
  ),
  Word(
    word: "mollify",
    definitions: {
      "v": ['placate'],
    },
  ),
  Word(
    word: "monotony",
    definitions: {
      "n": ['boredom and repetition'],
    },
  ),
  Word(
    word: "mundane",
    definitions: {
      "adj": ['everyday, boring'],
    },
  ),
  Word(
    word: "munificent",
    definitions: {
      "adj": ['very generous'],
    },
  ),
  Word(
    word: "nascent",
    definitions: {
      "adj": ['just beginning or in the early stages'],
    },
  ),
  Word(
    word: "naive",
    definitions: {
      "adj": ['inexperienced or gullible'],
    },
  ),
  Word(
    word: "neglect",
    definitions: {
      "v": ['to abandon or leave uncared-for'],
    },
  ),
  Word(
    word: "nonplussed",
    definitions: {
      "adj": ['confused and baffled'],
    },
  ),
  Word(
    word: "notoriety",
    definitions: {
      "n": ['fame for doing something negative or criminal'],
    },
  ),
  Word(
    word: "nuance",
    definitions: {
      "n": ['subtle shades of difference'],
    },
  ),
  Word(
    word: "obdurate",
    definitions: {
      "adj": ['stubborn, obstinate'],
    },
  ),
  Word(
    word: "obscure",
    definitions: {
      "adj": ['mysterious or not well-known'],
      "v": ['to cover something up or make it more difficult to perceive'],
    },
  ),
  Word(
    word: "obsequious",
    definitions: {
      "adj": ['overly fawning and helpful in a way that is disingenuous'],
    },
  ),
  Word(
    word: "obstinate",
    definitions: {
      "adj": ['stubborn, uncompromising'],
    },
  ),
  Word(
    word: "obviate",
    definitions: {
      "v": ['to forestall the need for something', 'to prevent'],
    },
  ),
  Word(
    word: "occlude",
    definitions: {
      "v": ['to block or obstruct'],
    },
  ),
  Word(
    word: "occult",
    definitions: {
      "n": ['the mystical and supernatural'],
    },
  ),
  Word(
    word: "offset",
    definitions: {
      "v": ['to counterbalance or counteract'],
    },
  ),
  Word(
    word: "olfactory",
    definitions: {
      "adj": ['relating to smell or the sense of smell'],
    },
  ),
  Word(
    word: "omniscience",
    definitions: {
      "n": ['the quality or state of being all-knowing'],
    },
  ),
  Word(
    word: "onerous",
    definitions: {
      "adj": ['difficult or burdensome'],
    },
  ),
  Word(
    word: "opaque",
    definitions: {
      "adj": ['not see-through; blocking light'],
    },
  ),
  Word(
    word: "opprobrium",
    definitions: {
      "n": ['criticism or condemnation'],
    },
  ),
  Word(
    word: "oscillate",
    definitions: {
      "v": ['to swing back and forth between two points, poles, or positions'],
    },
  ),
  Word(
    word: "ostentatious",
    definitions: {
      "adj": ['overly showy in a way that is gaudy or vulgar'],
    },
  ),
  Word(
    word: "outstrip",
    definitions: {
      "v": ['to overtake or outrun'],
    },
  ),
  Word(
    word: "overshadow",
    definitions: {
      "v": ['to literally cast a shadow over', 'to appear more notable than'],
    },
  ),
  Word(
    word: "painstaking",
    definitions: {
      "adj": ['attentive to detail, meticulous'],
    },
  ),
  Word(
    word: "partial",
    definitions: {
      "adj": ['incomplete'],
    },
  ),
  Word(
    word: "partisan",
    definitions: {
      "n": ['a devoted supporter of a group, cause, or person'],
    },
  ),
  Word(
    word: "patent",
    definitions: {
      "adj": ['blatant, obvious'],
    },
  ),
  Word(
    word: "paucity",
    definitions: {
      "n": ['scarcity, poverty'],
    },
  ),
  Word(
    word: "pedantic",
    definitions: {
      "adj": ['overly concerned with irrelevant detail, fussy'],
    },
  ),
  Word(
    word: "pedestrian",
    definitions: {
      "adj": ['boring, monotonous, run-of-the-mill'],
    },
  ),
  Word(
    word: "perfidy",
    definitions: {
      "n": ['treachery or deceit'],
    },
  ),
  Word(
    word: "perfunctory",
    definitions: {
      "adj": ['done without much effort, care, or thought'],
    },
  ),
  Word(
    word: "peripheral",
    definitions: {
      "adj": ['on the edge or periphery; not centrally important'],
    },
  ),
  Word(
    word: "permeate",
    definitions: {
      "v": ['to pervade or penetrate throughout'],
    },
  ),
  Word(
    word: "perseverance",
    definitions: {
      "n": ['persistence in the face of obstacles'],
    },
  ),
  Word(
    word: "peruse",
    definitions: {
      "v": [
        'to read something carefully and closely',
        'to read something informally or quickly',
      ],
    },
  ),
  Word(
    word: "pervasive",
    definitions: {
      "adj": ['found everywhere, widespread; often has a negative connotation'],
    },
  ),
  Word(
    word: "phenomena",
    definitions: {
      "n": ['things that happen'],
    },
  ),
  Word(
    word: "phlegmatic",
    definitions: {
      "adj": ['cool and unruffled'],
    },
  ),
  Word(
    word: "pith",
    definitions: {
      "n": ['the essential substance of something'],
    },
  ),
  Word(
    word: "placate",
    definitions: {
      "v": ['to calm, especially an angry or upset person'],
    },
  ),
  Word(
    word: "plastic",
    definitions: {
      "adj": ['easily shaped or molded', 'made of plastic'],
    },
  ),
  Word(
    word: "platitude",
    definitions: {
      "n": ['a trite or cliche statement'],
    },
  ),
  Word(
    word: "plausible",
    definitions: {
      "adj": ['believable, reasonable'],
    },
  ),
  Word(
    word: "plethora",
    definitions: {
      "n": ['a surplus or overabundance of something'],
    },
  ),
  Word(
    word: "plummet",
    definitions: {
      "v": ['to fall quickly and far'],
    },
  ),
  Word(
    word: "polarize",
    definitions: {
      "v": ['to cause a sharp division between two groups'],
    },
  ),
  Word(
    word: "polemical",
    definitions: {
      "adj": ['angry, hostile, harshly critical'],
    },
  ),
  Word(
    word: "pragmatic",
    definitions: {
      "adj": ['practical'],
    },
  ),
  Word(
    word: "precarious",
    definitions: {
      "adj": ['uncertain or unstable'],
    },
  ),
  Word(
    word: "preceded",
    definitions: {
      "adj": ['went before'],
    },
  ),
  Word(
    word: "precipitate",
    definitions: {
      "v": ['to cause'],
      "adj": ['hastily and not well-considered'],
      "n": ['particulate matter formed within a solution'],
    },
  ),
  Word(
    word: "precursor",
    definitions: {
      "n": ['a forerunner'],
    },
  ),
  Word(
    word: "prescient",
    definitions: {
      "adj": ['knowing things before they happen, prophetic'],
    },
  ),
  Word(
    word: "presumptuous",
    definitions: {
      "adj": ['overly familiar; invades social boundaries'],
    },
  ),
  Word(
    word: "prevail",
    definitions: {
      "v": [
        'to succeed, especially with respect to vanquishing an opponent',
        'to convince or persuade',
      ],
    },
  ),
  Word(
    word: "prevaricate",
    definitions: {
      "v": ['to evade or deceive without outright lying'],
    },
  ),
  Word(
    word: "pristine",
    definitions: {
      "adj": ['untouched, clean, pure'],
    },
  ),
  Word(
    word: "probity",
    definitions: {
      "n": ['integrity and honor'],
    },
  ),
  Word(
    word: "prodigal",
    definitions: {
      "n": ['a reckless spender'],
    },
  ),
  Word(
    word: "prodigious",
    definitions: {
      "adj": ['enormous, immense, gigantic'],
    },
  ),
  Word(
    word: "profligate",
    definitions: {
      "adj": ['extravagant and wasteful, especially in an immoral way'],
    },
  ),
  Word(
    word: "proliferate",
    definitions: {
      "v": ['to multiply and spread rapidly'],
    },
  ),
  Word(
    word: "propitiate",
    definitions: {
      "v": [
        'to obtain favor from someone, by performing a pleasing action',
        'to appease someone who is angry',
      ],
    },
  ),
  Word(
    word: "propriety",
    definitions: {
      "n": ['appropriateness, manners, decorum'],
    },
  ),
  Word(
    word: "prospective",
    definitions: {
      "adj": ['potential or likely', 'applicable to the future'],
    },
  ),
  Word(
    word: "qualification",
    definitions: {
      "n": ['credential', 'a modifying statement'],
    },
  ),
  Word(
    word: "quotidian",
    definitions: {
      "adj": ['relating to the everyday or mundane'],
    },
  ),
  Word(
    word: "rationalize",
    definitions: {
      "v": ['attempt to justify with superficially valid reasons'],
    },
  ),
  Word(
    word: "reconcile",
    definitions: {
      "v": ['to bring into harmony', 'to repair a relationship'],
    },
  ),
  Word(
    word: "recondite",
    definitions: {
      "adj": ['arcane or obscure'],
    },
  ),
  Word(
    word: "refute",
    definitions: {
      "v": ['to rebut or disprove'],
    },
  ),
  Word(
    word: "relentless",
    definitions: {
      "adj": ['never stopping, constant'],
    },
  ),
  Word(
    word: "relevant",
    definitions: {
      "adj": ['relating to the topic or issue at hand'],
    },
  ),
  Word(
    word: "reproach",
    definitions: {
      "v": ['to scold or express criticism'],
    },
  ),
  Word(
    word: "repudiate",
    definitions: {
      "v": ['to renounce or disown'],
    },
  ),
  Word(
    word: "rescind",
    definitions: {
      "v": ['to take back or retract (an offer or statement)'],
    },
  ),
  Word(
    word: "respectively",
    definitions: {
      "adv": ['in the sequential order previously given'],
    },
  ),
  Word(
    word: "reticent",
    definitions: {
      "adj": ['hesitant to speak', 'introverted or silent'],
    },
  ),
  Word(
    word: "reverent",
    definitions: {
      "adj": ['solemn and respectful'],
    },
  ),
  Word(
    word: "rhetoric",
    definitions: {
      "n": ['the art of effective communication (written or verbal)'],
    },
  ),
  Word(
    word: "salubrious",
    definitions: {
      "adj": ['health-promoting'],
    },
  ),
  Word(
    word: "sanction",
    definitions: {
      "v": [
        'to give official permission',
        'to impose a penalty for a particular action',
      ],
      "n": ['punishments imposed for breaking a regulation'],
    },
  ),
  Word(
    word: "satiate",
    definitions: {
      "v": ['to completely satisfy (with respect to hunger or appetite)'],
    },
  ),
  Word(
    word: "secular",
    definitions: {
      "adj": ['of or relating to worldly (as opposed to religious) matters'],
    },
  ),
  Word(
    word: "sediment",
    definitions: {
      "n": ['material that settles at the bottom of a body of water'],
    },
  ),
  Word(
    word: "sedulous",
    definitions: {
      "adj": ['dedicated and careful'],
    },
  ),
  Word(
    word: "simultaneous",
    definitions: {
      "adj": ['occurring at the same moment'],
    },
  ),
  Word(
    word: "solicitous",
    definitions: {
      "adj": ['considerate, attentive'],
    },
  ),
  Word(
    word: "soporific",
    definitions: {
      "adj": ['makes sleepy'],
    },
  ),
  Word(
    word: "sparse",
    definitions: {
      "adj": ['scattered or scarce', 'austere and unadorned'],
    },
  ),
  Word(
    word: "specious",
    definitions: {
      "adj": ['spurious; appearing true but actually false'],
    },
  ),
  Word(
    word: "sporadic",
    definitions: {
      "adj": ['occasional or scattered'],
    },
  ),
  Word(
    word: "spurious",
    definitions: {
      "adj": ['fake or false'],
    },
  ),
  Word(
    word: "stolid",
    definitions: {
      "adj": ['calm and dependable'],
    },
  ),
  Word(
    word: "subjective",
    definitions: {
      "adj": ['open to personal interpretation; not based in objective fact'],
    },
  ),
  Word(
    word: "substantiate",
    definitions: {
      "v": ['to corroborate or give evidence of something'],
    },
  ),
  Word(
    word: "subversive",
    definitions: {
      "adj": ['meant to undercut established institutions or norms'],
    },
  ),
  Word(
    word: "sufficient",
    definitions: {
      "adj": ['enough for a given purpose'],
    },
  ),
  Word(
    word: "superbly",
    definitions: {
      "adv": ['excellently'],
    },
  ),
  Word(
    word: "supine",
    definitions: {
      "adj": ['laying back with the face upward (opposite position to prone)'],
    },
  ),
  Word(
    word: "supplant",
    definitions: {
      "v": ['to overtake or replace'],
    },
  ),
  Word(
    word: "sycophant",
    definitions: {
      "n": ['a fawning, insincere admirer'],
    },
  ),
  Word(
    word: "synthesize",
    definitions: {
      "v": ['to combine disparate parts into a coherent whole'],
    },
  ),
  Word(
    word: "tacit",
    definitions: {
      "adj": ['unspoken; implicit'],
    },
  ),
  Word(
    word: "taciturn",
    definitions: {
      "adj": ['reticent or reserved; tending towards silence'],
    },
  ),
  Word(
    word: "temperance",
    definitions: {
      "n": ['moderation and restraint, often in terms of alcohol consumption'],
    },
  ),
  Word(
    word: "tenuous",
    definitions: {
      "adj": ['weak, flimsy, insubstantial'],
    },
  ),
  Word(
    word: "timorous",
    definitions: {
      "adj": ['meek or timid'],
    },
  ),
  Word(
    word: "tirade",
    definitions: {
      "n": ['an angry rant'],
    },
  ),
  Word(
    word: "torpor",
    definitions: {
      "n": ['tiredness, lethargy'],
    },
  ),
  Word(
    word: "tortuous",
    definitions: {
      "adj": ['winding or twisty', 'complicated'],
    },
  ),
  Word(
    word: "tractable",
    definitions: {
      "adj": ['can be easily influenced or managed'],
    },
  ),
  Word(
    word: "transient",
    definitions: {
      "adj": ['passes quickly; short-lived'],
    },
  ),
  Word(
    word: "ubiquitous",
    definitions: {
      "adj": ['ever-present or universal'],
    },
  ),
  Word(
    word: "unadorned",
    definitions: {
      "adj": ['plain; unembellished'],
    },
  ),
  Word(
    word: "undermine",
    definitions: {
      "v": ['to weaken or compromise'],
    },
  ),
  Word(
    word: "underscore",
    definitions: {
      "v": ['to line underneath for emphasis', 'to emphasize'],
    },
  ),
  Word(
    word: "untenable",
    definitions: {
      "adj": ['describes a weak or unsupportable opinion or situation'],
    },
  ),
  Word(
    word: "vacillate",
    definitions: {
      "v": ['to shift between multiple options or opinions'],
    },
  ),
  Word(
    word: "venality",
    definitions: {
      "n": ['the state of being capable of being bribed'],
    },
  ),
  Word(
    word: "venerate",
    definitions: {
      "v": ['to give a high degree of respect; may border on worship'],
    },
  ),
  Word(
    word: "veracity",
    definitions: {
      "n": ['Truth and factual accuracy'],
    },
  ),
  Word(
    word: "verbose",
    definitions: {
      "adj": ['long-winded; loquacious'],
    },
  ),
  Word(
    word: "vexation",
    definitions: {
      "n": ['state of being frustrated, irritated, or concerned.'],
    },
  ),
  Word(
    word: "volatile",
    definitions: {
      "adj": ['easily changeable or extreme; unstable'],
    },
  ),
  Word(
    word: "whimsical",
    definitions: {
      "adj": ['fanciful or capricious'],
    },
  ),
  Word(
    word: "zeal",
    definitions: {
      "n": ['passion or fervor'],
    },
  ),
];
