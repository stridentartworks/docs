export const cssStyles = `
  .mode-buttons { 
    display: flex; justify-content: center; gap: 100px; padding: 30px 20px; 
    width: 780px; box-sizing: border-box; margin: 0 auto; 
  }
  .character-list { 
    display: grid; grid-template-columns: repeat(5, 140px); column-gap: 10px; 
    row-gap: -10px; padding: 20px; width: 780px; box-sizing: border-box; 
    margin: 0 auto; justify-items: center; 
  }
  .alphabet-button { 
    display: flex; flex-direction: column; align-items: center; 
    background-color: #f0f0f0; border-radius: 8px; border: 2px solid #9a9797; 
    padding: 16px; width: 100px; font-size: large; 
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; 
  }
  .flashcard-scene { width: 120px; height: 150px; perspective: 1000px; cursor: pointer; }
  .flashcard-inner { 
    position: relative; width: 100%; height: 100%; text-align: center; 
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1); transform-style: preserve-3d; 
  }
  .flashcard-inner.is-flipped { transform: rotateY(180deg); }
  .flashcard-face { 
    position: absolute; padding: 16px; height: 80%; width: 100%; box-sizing: border-box; 
    display: flex; align-items: center; justify-content: center; border-radius: 12px; 
    border: 2px solid; backface-visibility: hidden; 
  }
  .flashcard-front { color: #22d7f3; }
  .flashcard-back { transform: rotateY(180deg); }

  /* Theme States */
  .theme-hiragana .flashcard-front { background-color: #f9d86d; border-color: #c97eee; color: #034303; font-size: xxx-large; }
  .theme-hiragana .flashcard-back { background-color: #90af4c; border-color: #c97eee; color: #8d0518; font-size: xxx-large; }
  .theme-katakana .flashcard-front { background-color: #81c784; border-color: #c97eee; color: #8d0518; font-size: xxx-large; }
  .theme-katakana .flashcard-back { background-color: #f9d86d; border-color: #c97eee; color: #034303; font-size: xxx-large; }
  .theme-romanji .flashcard-front { background-color: #bef4f3; border-color: #2c7378; color: #8d0518; font-size: xx-large; }
  .theme-romanji .flashcard-back { background-color: #dbd9ca; border-color: #d18d4e; color: #034303; font-size: xx-large; }
  .theme-both .flashcard-front { background-color: #dbd9ca; border-color: #d18d4e; color: #034303; font-size: xx-large; }
  .theme-both .flashcard-back { background-color: #bef4f3; border-color: #2c7378; color: #8d0518; font-size: xx-large; }
`;

export const Characters = [
  {
    hiragana: 'あ',
    katakana: 'ア',
    romanji: 'a',
    index: 0,
  },
  {
    hiragana: 'い',
    katakana: 'イ',
    romanji: 'i',
    index: 1, 
  },
  {
    hiragana: 'う',
    katakana: 'ウ',
    romanji: 'u',
    index: 2,
  },
  {
    hiragana: 'え',
    katakana: 'エ',
    romanji: 'e',
    index: 3,
  },
  {
    hiragana: 'お',
    katakana: 'オ',
    romanji: 'o',
    index: 4,
  },
  {
    hiragana: 'か',
    katakana: 'カ',
    romanji: 'ka',
    index: 5,
  },
  {
    hiragana: 'き',
    katakana: 'キ',
    romanji: 'ki',
    index: 6,
  },
  {
    hiragana: 'く',
    katakana: 'ク',
    romanji: 'ku',
    index: 7,
  },
  {
    hiragana: 'け',
    katakana: 'ケ',
    romanji: 'ke',
    index: 8,
  },
  {
    hiragana: 'こ',
    katakana: 'コ',
    romanji: 'ko',
    index: 9,
  },
  {
    hiragana: 'さ',
    katakana: 'サ',
    romanji: 'sa',
    index: 10,
  },
  {
    hiragana: 'し',
    katakana: 'シ',
    romanji: 'shi',
    index: 11,
  },
  {
    hiragana: 'す',
    katakana: 'ス',
    romanji: 'su',
    index: 12,
  },
  {
    hiragana: 'せ',
    katakana: 'セ',
    romanji: 'se',
    index: 13,
  },
  {
    hiragana: 'そ',
    katakana: 'ソ',
    romanji: 'so',
    index: 14,
  },
  {
    hiragana: 'た',
    katakana: 'タ',
    romanji: 'ta',
    index: 15,
  },
  {
    hiragana: 'ち',
    katakana: 'チ',
    romanji: 'chi',
    index: 16,
  },
  {
    hiragana: 'つ',
    katakana: 'ツ',
    romanji: 'tsu',
    index: 17,
  },
  {
    hiragana: 'て',
    katakana: 'テ',
    romanji: 'te',
    index: 18,
  },
  {
    hiragana: 'と',
    katakana: 'ト',
    romanji: 'to',
    index: 19,
  },
  {
    hiragana: 'な',
    katakana: 'ナ',
    romanji: 'na',
    index: 20,
  },
  {
    hiragana: 'に',
    katakana: 'ニ',
    romanji: 'ni',
    index: 21,
  },
  {
    hiragana: 'ぬ',
    katakana: 'ヌ',
    romanji: 'nu',
    index: 22,
  },
  {
    hiragana: 'ね',
    katakana: 'ネ',
    romanji: 'ne',
    index: 23,
  },
  {
    hiragana: 'の',
    katakana: 'ノ',
    romanji: 'no',
    index: 24,
  },
  {
    hiragana: 'は',
    katakana: 'ハ',
    romanji: 'ha',
    index: 25,
  },
  {
    hiragana: 'ひ',
    katakana: 'ヒ',
    romanji: 'hi',
    index: 26,
  },
  {
    hiragana: 'ふ',
    katakana: 'フ',
    romanji: 'fu',
    index: 27,
  },
  {
    hiragana: 'へ',
    katakana: 'ヘ',
    romanji: 'he',
    index: 28,
  },
  {
    hiragana: 'ほ',
    katakana: 'ホ',
    romanji: 'ho',
    index: 29,
  },
  {
    hiragana: 'ま',
    katakana: 'マ',
    romanji: 'ma',
    index: 30,
  },
  {
    hiragana: 'み',
    katakana: 'ミ',
    romanji: 'mi',
    index: 31,
  },
  {
    hiragana: 'む',
    katakana: 'ム',
    romanji: 'mu',
    index: 32,
  },
  {
    hiragana: 'め',
    katakana: 'メ',
    romanji: 'me',
    index: 33,
  },
  {
    hiragana: 'も', 
    katakana: 'モ',
    romanji: 'mo',
    index: 34,
  },
  {
    hiragana: 'や',
    katakana: 'ヤ',
    romanji: 'ya',
    index: 35,
  },
  {
    hiragana: 'ゆ',
    katakana: 'ユ',
    romanji: 'yu',
    index: 36,
  },
  {
    hiragana: 'よ',
    katakana: 'ヨ',
    romanji: 'yo',
    index: 37,
  },
  {
    hiragana: 'ら',
    katakana: 'ラ',
    romanji: 'ra',
    index: 38,
  },
  {
    hiragana: 'り',
    katakana: 'リ',
    romanji: 'ri',
    index: 39,
  },
  {
    hiragana: 'る',
    katakana: 'ル',
    romanji: 'ru',
    index: 40,
  },
  {
    hiragana: 'れ',
    katakana: 'レ',
    romanji: 're',
    index: 41,
  },
  {
    hiragana: 'ろ',
    katakana: 'ロ',
    romanji: 'ro',
    index: 42,
  },
];

export const CharacterCard = ({ character, activeAlphabet }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const flipCard = () => setIsFlipped(!isFlipped);

  const bothText = <span>{character.hiragana}<br/>{character.katakana}</span>;
  /** @type {any} */
  let frontText;
  /** @type {any} */
  let backText;
  /** @type {string} */
  let themeClass;

  if ((activeAlphabet === 'both')) {
    frontText = bothText; backText = character.romanji; themeClass = 'theme-both';
  } else if (activeAlphabet === 'hiragana') {
    frontText = character.hiragana; backText = character.katakana; themeClass = 'theme-hiragana';
  } else if (activeAlphabet === 'katakana') {
    frontText = character.katakana; backText = character.hiragana; themeClass = 'theme-katakana';
  } else if (activeAlphabet === 'romanji') {
    frontText = character.romanji; backText = bothText; themeClass = 'theme-romanji';
  }

  return (
    <div className={`flashcard-scene ${themeClass}`} title={character.romanji} onClick={flipCard}>
      <div className={`flashcard-inner ${isFlipped ? 'is-flipped' : ''}`}>
        <div className="flashcard-face flashcard-front"><span>{frontText}</span></div>
        <div className="flashcard-face flashcard-back"><span>{backText}</span></div>
      </div>
    </div>
  );
};

export const FlashcardApp = () => {
  const [selectedAlphabet, setSelectedAlphabet] = useState('both');
  const [resetCount, setResetCount] = useState(0);
  const [displayedCharacters, setDisplayedCharacters] = useState([...Characters]);

  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const toggleAlphabet = (alphabet) => {
    setSelectedAlphabet(alphabet);
    
    setResetCount((prev) => prev + 1);
    if (alphabet === 'both' || alphabet === 'romanji') {
      setDisplayedCharacters([...Characters]);
    } else {
      setDisplayedCharacters(shuffleArray(Characters));
    }
  };

  return (
    <>
      <style>{`${cssStyles}`}</style>

      <div className="mode-buttons">
        <button className='alphabet-button' onClick={() => toggleAlphabet('hiragana')}>Hiragana</button>
        <button className='alphabet-button' onClick={() => toggleAlphabet('katakana')}>Katakana</button>
        <button className='alphabet-button' onClick={() => toggleAlphabet('romanji')}>Romanji</button>
        <button className='alphabet-button' onClick={() => toggleAlphabet('both')}>Both</button>
      </div>

      <div className="character-list">
        {displayedCharacters.map((character) => (
          <CharacterCard 
            character={character} 
            key={`${character.index}-${selectedAlphabet}-${resetCount}`} 
            activeAlphabet={selectedAlphabet} 
          />
        ))}
      </div>
    </>
  );
};
