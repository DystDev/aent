import { AccentCard } from '../components/AccentCard';
import d from '../data/accentData';
import '../App.css';

const Home = () => {
  const defaultCards = d.accents.map((accent) => {
    return <AccentCard character={accent.character} name={accent.name} />;
  });
  return (
    <>
      <div className="defCardContainer">{defaultCards}</div>
      <h1>More stuff here</h1>
    </>
  );
};

export default Home;
