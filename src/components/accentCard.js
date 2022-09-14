import { toast } from 'react-toastify';
import '../App.css';
import 'react-toastify/dist/ReactToastify.css';

export const AccentCard = (props) => {
  return (
    <div
      className="accentCard"
      onClick={() => {
        navigator.clipboard.writeText(props.character);
        toast(`Copied ${props.character} to the clipboard!`, {
          draggable: true,
          autoClose: 2000
        });
      }}
    >
      <h1>{props.character}</h1>
      <h2>{props.name}</h2>
    </div>
  );
};
