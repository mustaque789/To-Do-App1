import React, { useState } from "react";
import logo from "../Images/Logo.png";

const Todo1 = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (!inputData) {
    } else {
      setItems([...items, inputData]);
      setInputData("");
    }
  };

  const deleteItem =(id)=>{
       const updatedItems= items.filter((elem, ind)=>{
        return ind !== id;
       })
       setItems(updatedItems)
  }

  const removeAll =()=>{
    setItems([])
  }

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src={logo} />
            <figcaption>My To-Do App ✌</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="✍️ Add Items..."
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
            <i className="fa fa-plus" title="Add Item" onClick={addItem}></i>
          </div>
          <div className="showItems">
            {items.map((elem, ind) => {
              return (
                <div className="eachItem" key={ind}>
                  <h3>{elem}</h3>
                  <i
                    className="far fa-trash-alt add-btn"
                    title="Delete Items" onClick={()=>deleteItem(ind)}
                  ></i>
                </div>
              );
            })}

            <div className="showItems">
              <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}>
                <span>CLEAR LIST</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo1;
