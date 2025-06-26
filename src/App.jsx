import { useState } from "react";
import "./App.css";

function App() {
  const [activity, setActivity] = useState("");
  const [listData, setListData] = useState([]);

  const handleActtivity = (e) => {
    setActivity(e.target.value);
  };

  const handleAddActivity = (e) => {
    // setListData([...listData, activity]);//this will work asyncronously
    // console.log(listData);
    setListData((listData) => {
      const updatedList = [...listData, activity];
      setActivity("");
      console.log(updatedList);
      return updatedList;
    });
  };
  const handleRemoveActivity = (index) => {
    const updatedListData = listData.filter((ele, id) => {
      return index != id;
    });
    setListData(updatedListData);
  };
  const handleRemoveAll = () => {
    setListData([]);
  };
  return (
    <>
      <div className="app">
        <input
          type="text"
          placeholder="Add Activity"
          value={activity}
          onChange={handleActtivity}
        />
        <button onClick={handleAddActivity}>Add Activity</button>
        <p>Here is Your List</p>
        <ul>
          {listData != [] &&
            listData.map((ele, index) => {
              return (
                <>
                  <li kay={index}>{ele}</li>
                  <button onClick={() => handleRemoveActivity(index)}>
                    Remove
                  </button>
                </>
              );
            })}
          {listData.length >= 1 && (
            <button onClick={handleRemoveAll}>Remove All</button>
          )}
        </ul>
      </div>
    </>
  );
}

export default App;
