import { AccentCard } from '../components/AccentCard';
import d from '../data/accentData';
import '../App.css';
import { useState } from 'react';

const Home = (props) => {
  const searchTerm = props.searchTerm;

  const [savedAccentNames, setSavedAccentNames] = useState([]);

  const addToSavedAccents = (accentName) => {
    if (savedAccentNames.includes(accentName) === false) {
      setSavedAccentNames((oldArr) => [...oldArr, accentName]);
    }
  };

  const removeFromSavedAccents = (accentName) => {
    setSavedAccentNames((oldArr) =>
      oldArr.filter((item) => item !== accentName)
    );
  };

  const defaultCards = d.accents.map((accent, i) => {
    return (
      <AccentCard
        character={accent.character}
        name={accent.name}
        key={i}
        addMe={addToSavedAccents}
        removeMe={removeFromSavedAccents}
      />
    );
  });

  const filteredCards = d.accents
    .filter((accent) => {
      return (
        accent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        accent.aliases.some((alias) =>
          alias
            .split(' ')
            .some((word) => word.toLowerCase() === searchTerm.toLowerCase())
        ) ||
        accent.aliases.some(
          (alias) => alias.toLowerCase() === searchTerm.toLowerCase()
        )
      );
    })
    .map((accent, i) => {
      return (
        <AccentCard
          character={accent.character}
          name={accent.name}
          key={i}
          addMe={addToSavedAccents}
          removeMe={removeFromSavedAccents}
        />
      );
    });

  return (
    <>
      {searchTerm.length > 0 ? (
        <>
          <h1 className="header">Search Results</h1>
          <div className="defCardContainer">
            {filteredCards.length !== 0 ? (
              filteredCards
            ) : (
              <p className="emphasis">There were no results :(</p>
            )}
          </div>
        </>
      ) : null}
      <h1 className="header">Saved accents</h1>
      <div className="defCardContainer">
        {savedAccentNames.length > 0 ? (
          savedAccentNames.map((a, i) => {
            const ad = d.accents.find((item) => {
              return item.name === a;
            });
            return (
              <AccentCard
                character={ad.character}
                name={ad.name}
                key={i}
                addMe={addToSavedAccents}
                removeMe={removeFromSavedAccents}
              />
            );
          })
        ) : (
          <p className="emphasis">
            Hmm... it seems like you have no accents saved. Click the heart on
            the card to find them easily across sessions.
          </p>
        )}
      </div>

      <h1 className="header">All Accents</h1>
      <div className="defCardContainer">{defaultCards}</div>
      <h1 className="header">More stuff here</h1>
    </>
  );
};

export default Home;
