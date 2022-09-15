import { AccentCard } from '../components/AccentCard';
import d from '../data/accentData';
import '../App.css';
import { useEffect, useState } from 'react';

const Home = (props) => {
  const searchTerm = props.searchTerm;
  const [savedCardList, setSavedCardList] = useState([]);

  const savedData = { savedAccents: [] };

  const addToSavedAccents = (accentName) => {
    const s = JSON.parse(localStorage.getItem('savedAccents'));
    if (s.savedAccents.includes(accentName) === false) {
      s.savedAccents.push(accentName);
      localStorage.setItem('savedAccents', JSON.stringify(s));
    }
  };

  const removeFromSavedAccents = (accentName) => {
    const s = JSON.parse(localStorage.getItem('savedAccents'));
    if (s.savedAccents.includes(accentName) === true) {
      s.savedAccents.splice(s.savedAccents.indexOf(accentName), 1);
      localStorage.setItem('savedAccents', JSON.stringify(s));
    }
  };

  if (localStorage.getItem('savedAccents') === null) {
    localStorage.setItem('savedAccents', JSON.stringify(savedData));
  }

  useEffect(() => {
    let savedAccentList = [];

    const savedCards = JSON.parse(localStorage.getItem('savedAccents'));

    for (let i = 0; i < savedCards.savedAccents.length; i++) {
      savedAccentList.push(
        d.accents.find((accent) => {
          return accent.name === savedCards.savedAccents[i];
        })
      );
    }

    setSavedCardList(
      savedAccentList.map((accent, i) => {
        return (
          <AccentCard
            character={accent.character}
            name={accent.name}
            key={i}
            addMe={addToSavedAccents}
            removeMe={removeFromSavedAccents}
          />
        );
      })
    );
  }, [savedAccentList]);

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
      {savedCardList.length > 0 ? (
        <>
          <h1 className="header">Saved Results</h1>
          <div className="defCardContainer">{savedCardList}</div>
        </>
      ) : null}
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
      <h1 className="header">All Accents</h1>
      <div className="defCardContainer">{defaultCards}</div>
      <h1 className="header">More stuff here</h1>
    </>
  );
};

export default Home;
