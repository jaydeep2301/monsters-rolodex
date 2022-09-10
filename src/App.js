import "./App.css";
import Select from "react-select";
import { useState } from "react";
function App() {
  const [globalarr, setglobalarr] = useState([]);
  const [obj, setobj] = useState({
    label: "",
    value: "",
  });
  return (
    <div className="App">
      <div className="input-user">
        {globalarr.map(() => {
          return <></>;
        })}
        <input
          type="text"
          placeholder="type the label here"
          value={obj.label}
          onChange={(e) => setobj({ ...obj, label: e.target.value })}
        />
        <input
          type="text"
          placeholder="type the value here"
          value={obj.value}
          onChange={(e) => setobj({ ...obj, value: e.target.value })}
        />
        <button
          onClick={() => {
            setglobalarr([...globalarr, obj]);
            setobj({
              label: "",
              value: "",
            });
          }}
        >
          submit
        </button>
      </div>
      <div>
        <table
          class="table-dark"
          style={{
            marginLeft: "5%",
          }}
        >
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Label</th>
              <th scope="col">value</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            {globalarr.map((el, i) => {
              return (
                <>
                  <tr>
                    <th scope="row">{i}</th>
                    <td>{el.label}</td>
                    <td>{el.value}</td>
                    <td>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-trash"
                        viewBox="0 0 16 16"
                        style={{
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          let newarr = globalarr.filter((el, ind) => ind !== i);
                          setglobalarr(newarr);
                        }}
                      >
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                        <path
                          fill-rule="evenodd"
                          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                        />
                      </svg>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="selectbox">
        <Select options={globalarr} className="select" isMulti />
      </div>
    </div>
  );
}

export default App;
