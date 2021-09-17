import React, { useState } from "react";
import "./styles.css";

//storing emojis in a dictionary
const emojiDictionary = {
  "😍": "Love",
  "😘": "Kiss",
  "😂": "Laugh",
  "😔": "sad",
  "😠": "Angry",
  "😴": "Sleep",
  "😰": "Afraid",
  "🤔": "thought",
  "😏": "Smirking",
  "😖": "Upset"
};

//creating array from object
const emojis = Object.keys(emojiDictionary);

export default function App() {

  //default state of emoji is empty
  const [emoji, setEmoji] = useState(""); /** concept 2 is useState */
  const [meaning, setMeaning] = useState("Meaning of the Emoji will be displayed here..");

  //function to process the emoji
  function emojiChangeHandler(event) {
    //reading the input emoji 
    const emojiInput = event.target.value;
    //updating the state of emoji
    setEmoji(emojiInput);
    //checking whether input emoji is present in emojiDictionary
    if (emojiInput in emojiDictionary) {
      //updating the state of meaning
      setMeaning(emojiDictionary[emojiInput]);
    } else {
      //updating the state of meaning with failiure message
      setMeaning("Failed to recognise this emoji.");
    }
  }


  //function to process emoji when clicked
  function emojiClickHandler(inputEmoji) {
    //updating state of meaning with the meaning of emoji which was clicked
    setMeaning(emojiDictionary[inputEmoji]);
  }

  return (
    <div className="app-container">
      <h1>Emoji Interpreter</h1>
      <input
        //invoking emojiChangeHandler on onChange event
        onChange={emojiChangeHandler}
        value={emoji}
        placeholder="Search your emoji"
      />
      <div className="emoji-div"> {emoji} </div>
      <div className="meaning-div"> {meaning} </div> 
      {
        //map method returns a new array
        emojis.map((emoji) => (
          <span
           //displaying each emoji 
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem",cursor: "pointer" }}
          >
            {emoji}
          </span>
        ))
      }
    </div>
  );
}
