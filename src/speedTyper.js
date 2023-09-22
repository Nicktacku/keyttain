import { useState } from "react";

const SpeedTyper = () => {
  const targetWord = "game";
  const [word, setWord] = useState("");
  const [target, setTarget] = useState(targetWord);
  const [matched, setMatched] = useState("");
  const [matchedIndex, setMatchedIndex] = useState(1);
  const [matchedCollection, setMatchedCollection] = useState([]);

  const inputWord = (e) => {
    console.log("event: " + e.key);
    const { value } = e.target;
    let newList = matchedCollection;
    let ctr = 0;
    let wrong = false;

    setWord(value);

    console.log("value", value[matched.length]);
    console.log("target", targetWord[matched.length]);

    if (value[matched.length] === targetWord[matched.length]) {
      setMatchedIndex(matchedIndex + 1);
      setMatched(matched + value[matched.length]);

      newList.push((matchedIndex - 1).toString());
      setMatchedCollection(newList);
    }

    console.log(ctr.toString());
    console.log(newList[ctr]);

    let displayTarget = targetWord.split("").map((letter) => {
      if (ctr < matchedIndex && ctr.toString() === newList[ctr]) {
        ctr++;
        wrong = false;
        return <span className="text-success">{letter}</span>;
      } else if (
        ctr < matchedIndex &&
        ctr.toString() !== newList[ctr] &&
        value.length > matchedCollection.length
      ) {
        ctr++;
        wrong = true;
        return <span className="text-danger">{letter}</span>;
      } else {
        return <span className="text-dark">{letter}</span>;
      }
    });

    setTarget(displayTarget);
  };

  return (
    <>
      <div className="position-absolute top-50 start-50 translate-middle">
        <h1>{target}</h1>
        <form>
          <input
            type="text"
            onChange={inputWord}
            value={word}
            name="inputWord"
          />
          <br />
        </form>
      </div>
    </>
  );
};

export default SpeedTyper;
