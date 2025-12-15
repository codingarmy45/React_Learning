import React, {useState} from 'react'

const Todo = () => {
 const [inputData, setInputData] = useState("");
  const [data, setData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");

  const changeHandler = (e) => {
    setInputData(e.target.value);
  };

  const clickHandler = (e) => {
    e.preventDefault();

    setData((prev) => [...prev, inputData]);

    setInputData("");
  };

  const deleteHandler = (e, indexToDelete) => {
    e.preventDefault();
    const newData = data.filter((_item, index) => index !== indexToDelete);
    setData(newData);
  };

  const editHandler = (e, indexToEdit) => {
    e.preventDefault();

    setEditIndex(indexToEdit);
    setEditText(data[indexToEdit]);
  };

  const handleEditChange = (e) => {
    setEditText(e.target.value);
  };

  const saveHandler = (e) => {
    e.preventDefault();

    if (editIndex !== null) {
      const newData = data.map((item, index) => {
        if (index === editIndex) {
          return editText;
        }
        return item;
      });

      setData(newData);

      setEditIndex(null);
      setEditText("");
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter task"
        value={inputData}
        onChange={changeHandler}
      />
      <button onClick={clickHandler}>Add</button>
      {data.map((item, index) => (
        <div>
          {index === editIndex ? (
            <input type="text" value={editText} onChange={handleEditChange} />
          ) : (
            <h3>{item}</h3>
          )}

         
          {index === editIndex ? (
            <button onClick={saveHandler}>save</button>
          ) : (
            <>
            <button onClick={(e) => editHandler(e, index)}>edit</button>
            <button onClick={(e) => deleteHandler(e, index)}>delete</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default Todo
