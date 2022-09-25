import { toast } from 'react-toastify';
import '../App.css';
import 'react-toastify/dist/ReactToastify.css';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

export const AccentCard = (props) => {
  const currentCharacter = props.uppercase
    ? props.characters[1]
    : props.characters[0];
  return (
    <>
      <div
        className="accentCard"
        onClick={() => {
          navigator.clipboard.writeText(currentCharacter);
          toast(`Copied ${currentCharacter} to the clipboard!`, {
            draggable: true,
            autoClose: 2000
          });
        }}
      >
        <h1>{currentCharacter}</h1>
        <h2>{props.name}</h2>
        {props.active === false ? (
          <AiOutlineHeart
            className="accentCardHeart"
            onClick={(event) => {
              props.addMe(props.name);
              event.stopPropagation();
            }}
            size="3em"
          />
        ) : (
          <AiFillHeart
            className="accentCardHeart"
            onClick={(event) => {
              props.removeMe(props.name);
              event.stopPropagation();
            }}
            size="3em"
          />
        )}
      </div>
    </>
  );
};
