import { AccentCard } from '../components/AccentCard';
import d from '../data/accentData';
import '../App.css';

const Home = (props) => {
  const searchTerm = props.searchTerm;

  const defaultCards = d.accents.map((accent, i) => {
    return (
      <AccentCard character={accent.character} name={accent.name} key={i} />
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
        <AccentCard character={accent.character} name={accent.name} key={i} />
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
      <h1 className="header">All Accents</h1>
      <div className="defCardContainer">{defaultCards}</div>
      <h1 className="header">More stuff here</h1>
    </>
  );
};

export default Home;
