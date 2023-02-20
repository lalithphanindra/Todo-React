import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
function App() {
  const [todo, setTodo] = useState({
    todo_name: "",
    cat: "",
    date: "",
    isChecked: "false",
  });
  const [categorylist, setCatlist] = useState([]);
  const [todoList, setTodoList] = useState([]);
  const [CategoryFilter, setCategoryFilter] = useState(false);
  const [DateFilter, setDateFilter] = useState(false);

  const [isFocused, setIsfocus] = useState(false);
  const [isFocusedCat, setIsfocusCat] = useState(false);

  const [searchCategory, searchCategoryArray] = useState([]);
  const [filterCategory, setfilterCategory] = useState([]);
  const [filterdate, setFilterdate] = useState([]);

  const [searcharray, setSearcharray] = useState([]);
  const [category, setCategory] = useState("");

  const onAdd = () => {
    setTodoList([...todoList, todo]);
    console.log(todo);
    console.log(todo);
  };
  const onTodoChange = (e) => {
    setTodo({ ...todo, todo_name: e.target.value });
  };
  const onDelete = (e) => {
    var array = [...todoList];
    var index = array.indexOf(e.target.value);
    array.splice(index, 1);
    setTodoList([...array]);
  };
  const onDate = (e) => {
    setTodo({ ...todo, date: e.target.value });
    console.log(todo.date);
  };
  const onDoing = (e) => {
    setTodo({ ...todo, isChecked: e.target.value });
    console.log();
  };

  const onSearch = (e) => {
    var temp = [];
    var array = [...todoList];
    var length = array.length;
    var stext = e.target.value;
    for (let i = 0; i < length; i++) {
      if (array[i].todo_name.includes(stext)) {
        temp.push(array[i]);
      }
    }
    setSearcharray([...temp]);
  };
  const onCatchange = (e) => {
    setCategory(e.target.value);
  };
  const onCatDelete = (e) => {
    var array = [...todoList];
    var index = array.indexOf(e.target.value);
    array.splice(index, 1);
    setCatlist([...array]);
  };

  const addCat = () => {
    setCatlist([...categorylist, category]);
  };

  const onCat = (e) => {
    setTodo({ ...todo, cat: e.target.value });
  };

  const onCatSearch = (e) => {
    var temp2 = [];
    var array = [...categorylist];
    var length = array.length;
    var stext1 = e.target.value;
    for (let i = 0; i < length; i++) {
      if (array[i].includes(stext1)) {
        temp2.push(array[i]);
      }
    }
    searchCategoryArray([...temp2]);
  };
  const onCatfilter = (e) => {
    var filter = e.target.value;
    console.log(filter);
    var temp3 = [];

    var array4 = [...todoList];
    var len = array4.length;
    for (let i = 0; i < len; i++) {
      if (array4[i].cat === filter) {
        temp3.push(array4[i]);
      }
    }
    setfilterCategory([...temp3]);
  };

  const onDateFilter = (e) => {
    var dates = e.target.value;
    var temp4 = [];
    var array5 = [...todoList];
    var lenn = array5.length;
    for (let i = 0; i < lenn; i++) {
      if (array5[i].date === dates) {
        temp4.push(array5[i]);
      }
    }
    setFilterdate([...temp4]);
  };

  return (
    <>
      <div className="hij">
        {" "}
        <h1 className="hi">Your To do List!</h1>
      </div>
      <div>
        {/* <input
          className="hello"
          onChange={onCatSearch}
          type="text"
          placeholder="Search a Category"
          onFocus={() => setIsfocusCat(true)}
          onBlur={() => setIsfocusCat(false)}
        /> */}
        <br />
        <div class="hmm">
          <input
            class="hi2"
            onChange={onCatchange}
            type="text"
            placeholder="Enter a category"
          />
          <button className="xy" onClick={addCat}>
            Add a Category
          </button>
        </div>
        <br></br>
      </div>
      <div>
        {!isFocusedCat ? (
          <ul>
            {categorylist.map((t) => {
              return (
                <>
                  <li>
                    <input
                      type="checkbox"
                      onChange={onDoing}
                      value={todo.isChecked}
                    />

                    {t}

                    <button onClick={onCatDelete} value={t}>
                      {" "}
                      Delete
                    </button>
                  </li>
                </>
              );
            })}
          </ul>
        ) : (
          <ul>
            {searchCategory.map((t) => {
              return (
                <>
                  <li>
                    <span>{t}</span>
                    <input type="checkbox" />
                    <button onClick={onCatDelete} value={t}>
                      {" "}
                      Delete
                    </button>
                  </li>
                </>
              );
            })}
          </ul>
        )}
      </div>

      <div className="opq">
        <input
          className="abc"
          onChange={onTodoChange}
          value={todo.todo_name}
          type="text"
          placeholder="Add ToDo"
        />
        <input
          type="date"
          onChange={onDate}
          value={todo.date}
          className="jlk"
        />
        <select onChange={onCat} className="jlk">
          <option disabled selected>
            Choose a Category
          </option>
          {categorylist.map((x) => (
            <option> {x}</option>
          ))}
        </select>
        <button className="lmn" onClick={onAdd}>
          Add to Todo List
        </button>{" "}
        <br />
      </div>

      <input
        onChange={onSearch}
        type="text"
        placeholder="Search"
        onFocus={() => setIsfocus(true)}
        onBlur={() => setIsfocus(false)}
        className="bcd"
      />
      <select
        onChange={onCatfilter}
        onFocus={() => setCategoryFilter(true)}
        onBlur={() => setCategoryFilter(false)}
        className="bcd"
      >
        {" "}
        <option disabled selected>
          {" "}
          Select Filter
        </option>
        {categorylist.map((x) => (
          <option> {x}</option>
        ))}
      </select>
      <input
        type="date"
        onChange={onDateFilter}
        onFocus={() => setDateFilter(true)}
        onBlur={() => setDateFilter(false)}
      />

      {!isFocused ? (
        <ul>
          {todoList.map((t) => {
            return (
              <>
                <li>
                  <input
                    type="checkbox"
                    onChange={onDoing}
                    value={todo.isChecked}
                  />

                  <span>{t.todo_name}</span>
                  <span style={{ marginLeft: "15px" }}>{t.date}</span>

                  <button onClick={onDelete} value={t}>
                    {" "}
                    Delete
                  </button>
                </li>
              </>
            );
          })}
        </ul>
      ) : (
        <ul>
          {searcharray.map((t) => {
            return (
              <>
                <li>
                  <span>{t.todo_name}</span>
                  <input type="checkbox" />
                  <button onClick={onDelete} value={t}>
                    {" "}
                    Delete
                  </button>
                </li>
              </>
            );
          })}
        </ul>
      )}

      {!CategoryFilter ? (
        ""
      ) : (
        <ul>
          {filterCategory.map((t) => {
            return (
              <>
                <li>
                  <span>{t.todo_name}</span>
                  <input type="checkbox" />
                  <button onClick={onDelete} value={t}>
                    {" "}
                    Delete
                  </button>
                </li>
              </>
            );
          })}
        </ul>
      )}
      {!DateFilter ? (
        ""
      ) : (
        <ul>
          {filterdate.map((t) => {
            return (
              <>
                <li>
                  <span>{t.todo_name}</span>
                  <input type="checkbox" />
                  <button onClick={onDelete} value={t}>
                    {" "}
                    Delete
                  </button>
                </li>
              </>
            );
          })}
        </ul>
      )}
    </>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
