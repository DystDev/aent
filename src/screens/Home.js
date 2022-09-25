import { AccentCard } from '../components/AccentCard';
import d from '../data/accentData';
import '../App.css';
import { useEffect, useState } from 'react';

const Home = (props) => {
  const searchTerm = props.searchTerm;

  const [savedAccentNames, setSavedAccentNames] = useState([]);

  useEffect(() => {
    const oldData = JSON.parse(localStorage.getItem('storedFavourites'));
    if (oldData !== null) {
      setSavedAccentNames(oldData);
    } else {
      localStorage.setItem('storedFavourites', JSON.stringify([]));
    }
  }, [setSavedAccentNames]);

  const addToSavedAccents = (accentName) => {
    if (savedAccentNames.includes(accentName) === false) {
      const old = savedAccentNames;
      setSavedAccentNames([...old, accentName]);
      localStorage.setItem(
        'storedFavourites',
        JSON.stringify([...old, accentName])
      );
    }
  };

  const removeFromSavedAccents = (accentName) => {
    const old = savedAccentNames;
    setSavedAccentNames(old.filter((item) => item !== accentName));
    localStorage.setItem(
      'storedFavourites',
      JSON.stringify(old.filter((item) => item !== accentName))
    );
  };

  const defaultCards = d.accents.map((accent, i) => {
    return (
      <AccentCard
        characters={accent.characters}
        name={accent.name}
        key={i}
        addMe={addToSavedAccents}
        removeMe={removeFromSavedAccents}
        active={savedAccentNames.includes(accent.name)}
        uppercase={props.isUppercase}
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
        accent.aliases.some((alias) =>
          alias.toLowerCase().startsWith(searchTerm.toLowerCase())
        )
      );
    })
    .map((accent, i) => {
      return (
        <AccentCard
          characters={accent.characters}
          name={accent.name}
          key={i}
          addMe={addToSavedAccents}
          removeMe={removeFromSavedAccents}
          active={savedAccentNames.includes(accent.name)}
          uppercase={props.isUppercase}
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
                characters={ad.characters}
                name={ad.name}
                key={i}
                addMe={addToSavedAccents}
                removeMe={removeFromSavedAccents}
                active={savedAccentNames.includes(ad.name)}
                uppercase={props.isUppercase}
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
