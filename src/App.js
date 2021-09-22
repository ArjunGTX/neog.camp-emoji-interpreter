import React, { useState } from "react";
import "./styles.css";

//storing emojis in a dictionary
const emojiDictionary = {
  "⛔": "No Entry",
  "🚏": "Bus Stop",
  "🚷": "No Pedestrians",
  "🚸": "Children Crossing",
  "🚧": "Construction",
  "⛖": "Two Way",
  "🚭": "No Smoking",
  "⛽": "Petrol Bunk",
  "⛐": "Slippery Road",
  "🛑": "Stop",
  "⛍": "Disabled Vehicle",
  "🚦": "Vertical Trafficl Lights",
  "⛕": "Alternate One-Way Left Way",
  "🚻": "Rest Room",
  "🚨": "Police Car Light",
  "⛒": "Circled Crossing Lane",
  "♿": "Handicaped",
  "⛼": "Headstone Graveyard",
  "🚰": "Portable Water",
  "🏧": "ATM",
  "⚠": "Warning",
  "☣": "Bio Hazard",
  "☢": "Radio Active",
  "🚫": "Prohibited"
};

//creating array from object
const emojis = Object.keys(emojiDictionary);

export default function App() {
  //default state of emoji is empty
  const [emoji, setEmoji] = useState("");
  const [meaning, setMeaning] = useState(
    "Meaning of the Emoji will be displayed here.."
  );

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
    } else if (emojiInput === "") {
      //updating the state of meaning with failiure message
      setMeaning("Meaning of the Traffic symbols will be displayed here..");
    } else {
      setMeaning("Failed to recognise this Symbol.");
    }
  }

  //function to process emoji when clicked
  function emojiClickHandler(inputEmoji) {
    //updating state of meaning with the meaning of emoji which was clicked
    setMeaning(emojiDictionary[inputEmoji]);
  }

  return (
    <div className="app-container">
      <h1>Traffic Symbols Interpreter</h1>
      <input
        //invoking emojiChangeHandler on onChange event
        onChange={emojiChangeHandler}
        value={emoji}
        placeholder="Search traffic symbol"
      />
      <div className="emoji-div"> {emoji} </div>
      <div className="meaning-div"> {meaning} </div>
      <div className="emoji-list">
        {
          //map method returns a new array
          emojis.map((emoji) => (
            <div
              style={{
                width: "60px",
                height: "60px",
                border: "1px solid black"
              }}
              onClick={() => emojiClickHandler(emoji)}
            >
              <span
                //displaying each emoji
                style={{
                  fontSize: "2rem",
                  padding: "0.5rem",
                  cursor: "pointer",
                  lineHeight: "4rem"
                }}
              >
                {emoji}
              </span>
            </div>
          ))
        }
      </div>
    </div>
  );
}
