import { useState, useEffect } from "react";
import React from "react";

function TableData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/data", { method: "GET", redirect: "follow" })
      .then((res) => res.json())
      .then((json) => {
        // console.log(json);
        setData(json);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="container">
        <h3>Table Data</h3>
      </div>

      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Months</th>
              <th>Values</th>
            </tr>
          </thead>
          <div className="d-flex justify-content-between">
            <div>
              {" "}
              {data.map((data, i) => (
                <tr key={i}>
                  <td>{data.labels}</td>
                </tr>
              ))}
            </div>
            <div>
              {" "}
              {data.map((data, i) => (
                <tr key={i}>
                  <td>{data.values}</td>
                </tr>
              ))}
            </div>
          </div>
        </table>
      </div>
    </>
  );
}

export default TableData;
