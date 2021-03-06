import { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "π": "Smiling",
  "π³": "disbelief",
  "π": "sad",
  "π₯‘": "takeout box",
  "β€οΈ": "love",
  "π": "annoyance",
  "π¦πΊ": "Australia Day",
  "π«π· ": "Bastille Day",
  "π ": "Birthday",
  "ποΈ": "Black Friday",
  "βπΏ": "Black Lives Matter",
  "π¨π¦": "Canada Day",
  "π§π· ": "Carnaval",
  "π": "Chinese New Year",
  "π": "Christmas",
  "π²π½": "Cinco de Mayo",
  "π¦  ": "Coronavirus",
  "πͺ": "Diwali",
  "π¨π³": "Dragon Boat Festival",
  "π° ": "Easter",
  "π₯": "Emoji Movie",
  "π ": "Fall / Autumn",
  "π¨": "Fatherβs Day",
  "πͺ": "Festivus",
  "π": "Graduation",
  "π₯": "Fire",
  "π": "Halloween",
  "π": "Hanukkah",
  "π": "Hearts",
  "ποΈ": "Holi",
  "πΊπΈ": "Independence Day",
  "βοΈ": "International Women Day",
  "π€±": "Motherβs Day",
  "π": "New Yearβs Eve",
  "π": "NSFW",
  "π": "Olympics",
  "π³οΈβπ": "Pride",
  "π­ ": "Purim",
  "π": "Queenβs Birthday",
  "βͺοΈ ": "Ramadan",
  "π±": "Spring",
  "βοΈ": "St Patrickβs Day",
  "βοΈ": "Summer",
  "π": "Super Bowl",
  "π¦": "Thanksgiving",
  "π": "Valentineβs Day",
  "ποΈ": "Veterans Day",
  "π° ": "Wedding",
  "β": "Winter",
  "πΏ": "Winter Olympics",
  "π‘": "Working From Home",
  "β½ ": "World Cup",
  "π ": "World Emoji Day"
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
