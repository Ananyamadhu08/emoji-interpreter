import { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😊": "Smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance",
  "🇦🇺": "Australia Day",
  "🇫🇷 ": "Bastille Day",
  "🎂 ": "Birthday",
  "🛍️": "Black Friday",
  "✊🏿": "Black Lives Matter",
  "🇨🇦": "Canada Day",
  "🇧🇷 ": "Carnaval",
  "🐉": "Chinese New Year",
  "🎅": "Christmas",
  "🇲🇽": "Cinco de Mayo",
  "🦠 ": "Coronavirus",
  "🪔": "Diwali",
  "🇨🇳": "Dragon Boat Festival",
  "🐰 ": "Easter",
  "🎥": "Emoji Movie",
  "🍂 ": "Fall / Autumn",
  "👨": "Father’s Day",
  "💪": "Festivus",
  "🎓": "Graduation",
  "🔥": "Fire",
  "🎃": "Halloween",
  "🕎": "Hanukkah",
  "💕": "Hearts",
  "🕉️": "Holi",
  "🇺🇸": "Independence Day",
  "♀️": "International Women Day",
  "🤱": "Mother’s Day",
  "🎊": "New Year’s Eve",
  "🔞": "NSFW",
  "🏊": "Olympics",
  "🏳️‍🌈": "Pride",
  "🎭 ": "Purim",
  "👑": "Queen’s Birthday",
  "☪️ ": "Ramadan",
  "🌱": "Spring",
  "☘️": "St Patrick’s Day",
  "☀️": "Summer",
  "🏈": "Super Bowl",
  "🦃": "Thanksgiving",
  "💘": "Valentine’s Day",
  "🎖️": "Veterans Day",
  "👰 ": "Wedding",
  "⛄": "Winter",
  "🎿": "Winter Olympics",
  "🏡": "Working From Home",
  "⚽ ": "World Cup",
  "🌎 ": "World Emoji Day"
};

// converting an object to array of keys usind Object.keys() method
const emojis = Object.keys(emojiDictionary);
console.log(emojis);

export default function App() {
  const [meaning, setMeaning] = useState("Translations Will Appear Here");
  const [emoji, setEmoji] = useState("");

  function changeHandler(event) {
    const inputEmoji = event.target.value;
    setEmoji(inputEmoji);

    if (inputEmoji in emojiDictionary) {
      setMeaning(emojiDictionary[inputEmoji]);
    } else {
      setMeaning("failure to recognise this emoji");
    }
  }

  function emojiClickHandler(inputEmoji) {
    setMeaning(emojiDictionary[inputEmoji]);
  }

  return (
    <div className="App">
      <h1>Inside Out</h1>
      <input
        onChange={changeHandler}
        value={emoji}
        placeholder={"Search Your Emoji Here"}
        style={{
          padding: "1rem",
          minWidth: "80%"
        }}
      ></input>
      <h2>{emoji}</h2>
      <h2>{meaning}</h2>
      {emojis.map((emoji) => (
        <span onClick={() => emojiClickHandler(emoji)}> {emoji} </span>
      ))}
    </div>
  );
}
