import { useContext } from "react";
import { ThemeContext } from "../../utils/ThemeContext";


export const Message = ({ text, author }) => {
    const { messageColor } = useContext(ThemeContext);
    return (
      <div>
        <span style={{ color: messageColor }} className="Message-Text">
          {author}: {text}
        </span>
      </div>
    );
};