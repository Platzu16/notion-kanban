import { React, useState, useEffect } from "react";
import DropIndicator from "./DropIndicator";
import { motion } from "framer-motion";
import { FiEdit } from "react-icons/fi";
export default function Card({ title, id, column, handleDragStart }) {
  let cardData = { title, id, column };

  let [cardTitle, setCardTitle] = useState(title);
  let [data, setData] = useState([cardData]);
  let [isEdit, setIsEdit] = useState(false);

  const edit = (e) => {
    setIsEdit(true);
  };
  const handleInputChange = (e) => {
    setCardTitle(e.target.value);
  };
  const saveCardDetails = ({ title, id, column }) => {
    const index = data.findIndex((card) => card.id === id);

    const updatedData = [...data];
    updatedData[index] = { ...updatedData[index], title, column };

    setData(updatedData);
    localStorage.setItem("cards", JSON.stringify(updatedData));
    setIsEdit(false);
  };

  return (
    <>
      <DropIndicator beforeId={id} column={column} />
      <motion.div
        layout
        layoutId={id}
        draggable="true"
        onDragStart={(e) => handleDragStart(e, { title, id, column })}
        className="cursor-grab rounded border border-neutral-700 bg-neutral-800 p-3 active:cursor-grabbing"
      >
        <span className="flex  justify-end">
          <FiEdit onClick={edit} />
        </span>
        {isEdit ? (
          <>
            <div className="flex justify-end mt-2 p-1">
              <input
                type="text"
                className=" w-full text-neutral-800 "
                value={cardTitle}
                onChange={handleInputChange}
              />
              <button
                className="w-300 ml-3  rounded border text-neutral-800 bg-neutral-100 "
                onClick={(e) =>
                  saveCardDetails({ title: cardTitle, id, column })
                }
              >
                Save
              </button>
            </div>
          </>
        ) : (
          <p className="text-sm text-neutral-100">{cardTitle}</p>
        )}
      </motion.div>
    </>
  );
}
