import { useState } from "react";

const App = () => {
  const [handleInputActivity, sethandleInputActivity] = useState("");
  const [handleAddClick, sethandleAddClick] = useState([]);

  const handleInputchange = (e) => {
    sethandleInputActivity(e.target.value);
  };
  const handleAddbutton = () => {
    sethandleAddClick((handleAddClick) => {
      const updateddata = [...handleAddClick, handleInputActivity];
      console.log(updateddata);
      sethandleInputActivity("");
      return updateddata;
    });
  };

  const handleDelete = (index) => {
    const deletedData = handleAddClick.filter((ele, id) => index != id);
    sethandleAddClick(deletedData);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Activities"
        value={handleInputActivity}
        onChange={handleInputchange}
      />
      <button onClick={handleAddbutton}>Add ToDo</button>

      <div>
        <ul>
          {handleAddClick.map((ele, index) => {
            return (
              <div>
                <li key={ele.id}>{ele}</li>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </div>
            );
          })}
        </ul>
        <h1>Hello</h1>
      </div>
    </div>
  );
};
export default App;

// import { useState } from "react";

// const App = () => {
//   const [handleInputTodo, setHandleTodo] = useState([]);
//   const [handleButton, setHandleButton] = useState([]);

//   const handleChangeTodo = (e) => {
//     setHandleTodo(e.target.value);
//   };
//   const handleAddButton = () => {
//     setHandleButton((handleButton) => {
//       const updatedData = [...handleButton, handleInputTodo];
//       console.log(updatedData);
//       setHandleTodo("");
//       return updatedData;
//     });
//   };

//   const handleRemove = (index) => {
//     const updatedListData = handleButton.filter((ele, id) => {
//       return index != id;
//     });
//     setHandleButton(updatedListData);
//   };
//   return (
//     <>
//       <div>
//         <input
//           type="text"
//           placeholder="Enter Todo"
//           value={handleInputTodo}
//           onChange={handleChangeTodo}
//         />
//         <button onClick={handleAddButton}>Add</button>
//       </div>
{
  /* <div>
        <ul>
          {handleButton.map((ele, index) => {
            return (
              <div>
                <li key={ele.id}>{ele}</li>
                <button onClick={() => handleRemove(index)}>trem</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
export default App; */
}
// import { useState } from "react";

// const App = () => {
//   const [inputTodo, setInputTodo] = useState("");
//   const [listData, setListdata] = useState([]);
//   const [remove, setRemove] = useState([]);

//   const handleInputTodo = (e) => {
//     setInputTodo(e.target.value);
//   };

//   const handleAddButton = () => {
//     setListdata((listData) => {
//       const updatedList = [...listData, inputTodo];
//       setInputTodo("");
//       return updatedList;
//     });
//   };

//   // const handleAddButton = () => {
//   //   setListdata(...listData, inputTodo);
//   // };

//   const handleRemove = (index) => {
//     const updatedListdata = listData.filter((ele, id) => {
//       return index != id;
//     });
//     setListdata(updatedListdata);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Enter todo"
//         value={inputTodo}
//         onChange={handleInputTodo}
//       />
//       <button onClick={handleAddButton}>Add</button>
//       <p>List od data</p>
//       <ul>
//         {listData.map((ele, index) => {
//           return (
//             <div key={index} className="list">
//               <li>{ele}</li>
//               <button onClick={() => handleRemove(index)}>Remove</button>
//             </div>
//           );
//         })}
//       </ul>
//     </div>
//   );
// };

// export default App;

// import { useState } from "react";

// const App = () => {
//   const [handlinputActivity, setHandleInputActivity] = useState("");
//   const [listData, setListData] = useState([]);

//   const handleonchangeactivity = (e) => {
//     setHandleInputActivity(e.target.value);
//   };

//   const handleAddbutton = () => {
//     setListData((listData) => {
//       const updatedList = [...listData, handlinputActivity];
//       console.log(updatedList);
//       setHandleInputActivity("");
//       return updatedList;
//     });
//   };

//   const handleDelete = (index) => {
//     const listUpdated = listData.filter((ele, id) => {
//       return index != id;
//     });
//     setListData(listUpdated);
//   };

//   return (
//     <>
//       <div>
//         <input
//           type="text"
//           placeholder="Add Activity"
//           value={handlinputActivity}
//           onChange={(e) => handleonchangeactivity(e)}
//         />
//         <button onClick={handleAddbutton}>Add Activity</button>
//         <div>
//           <p>Here is your list</p>
//           <ul>
//             {listData.map((ele, index) => {
//               return (
//                 <>
//                   <li key={index}>{ele}</li>
//                   <button onClick={() => handleDelete(index)}>Delete</button>
//                 </>
//               );
//             })}
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// };

// export default App;

// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [activity, setActivity] = useState("");
//   const [listData, setListData] = useState([]);

//   const handleActtivity = (e) => {
//     setActivity(e.target.value);
//   };

//   const handleAddActivity = (e) => {
//     // setListData([...listData, activity]);//this will work asyncronously
//     // console.log(listData);
//     setListData((listData) => {
//       const updatedList = [...listData, activity];
//       setActivity("");
//       console.log(updatedList);
//       return updatedList;
//     });
//   };
//   const handleRemoveActivity = (index) => {
//     const updatedListData = listData.filter((ele, id) => {
//       return index != id;
//     });
//     setListData(updatedListData);
//   };
//   const handleRemoveAll = () => {
//     setListData([]);
//   };
//   return (
//     <>
//       <div className="app">
//         <input
//           type="text"
//           placeholder="Add Activity"
//           value={activity}
//           onChange={handleActtivity}
//         />
//         <button onClick={handleAddActivity}>Add Activity</button>
//         <p>Here is Your List</p>
//         <ul>
//           {listData != [] &&
//             listData.map((ele, index) => {
//               return (
//                 <>
//                   <li kay={index}>{ele}</li>
//                   <button onClick={() => handleRemoveActivity(index)}>
//                     Remove
//                   </button>
//                 </>
//               );
//             })}
//           {listData.length >= 1 && (
//             <button onClick={handleRemoveAll}>Remove All</button>
//           )}
//         </ul>
//       </div>
//     </>
//   );
// }

// export default App;
