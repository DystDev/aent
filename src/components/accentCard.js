import '../App.css';

export const AccentCard = (props) => {
  return (
    <div className="accentCard">
      <h1>{props.character}</h1>
      <h2>{props.name}</h2>
    </div>
  );
};
