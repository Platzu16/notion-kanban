import React, { useState, useEffect } from "react";
import Column from "./Column";
import DeleteTask from "./DeleteTask";
// import '../assets/data.json'
export default function Board() {
  // let data = require('../assets/data.json')['cards']
  //const [cards, setCards] = useState(data);
  const [cards, setCards] = useState([]);
  const [hasChecked, sethasChecked] = useState(false);

  useEffect(() => {
    hasChecked && localStorage.setItem("cards", JSON.stringify(cards));
  }, [cards]);

  useEffect(() => {
    const cardData = localStorage.getItem("cards");
    setCards(cardData ? JSON.parse(cardData) : []);
    sethasChecked(true);
  }, [cards]);

  return (
    <div className="flex h-full w-full gap-3 overflow-scroll p-12">
      <Column
        title="Backlog"
        column="backlog"
        headingColor="text-neutral-500"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="TODO"
        column="todo"
        headingColor="text-yellow-200"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="In progress"
        column="doing"
        headingColor="text-blue-200"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="Complete"
        column="done"
        headingColor="text-emerald-200"
        cards={cards}
        setCards={setCards}
      />
      <DeleteTask setCards={setCards} />
    </div>
  );
}
