import React from "react";
import Graph from "./Graph";
import Chart from "./Chart";
import { useState, useEffect } from "react";
import Piechart from "./Pie";
import PDF from "./Pdf";
import TableData from "./TableData";

function Graphs() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/data", { method: "GET", redirect: "follow" })
      .then((res) => res.json())
      .then((json) => {
        // console.log(json)
        setData(json);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <PDF />
      <div className="div2PDF">

        <div style={{ width: "70%", margin: "auto auto " }}>
          <Graph
            labels={data.length === 0 ? ["pink"] : data[0].labels}
            data1={
              data.length === 0 ? [0, 0, 0, 0, 0, 0, 0] : data[0].data[0].values
            }
            data2={
              data.length === 0 ? [0, 0, 0, 0, 0, 0, 0] : data[0].data[1].values
            }
          />
        </div>

        <div className="container">
          <div className="row">
            <div style={{ width: "30%" }} className="col-md-4">
              <Piechart
                labels={data.length === 0 ? ["pink"] : data[0].labels}
                data1={
                  data.length === 0
                    ? [0, 0, 0, 0, 0, 0, 0]
                    : data[0].data[0].values
                }
                data2={
                  data.length === 0
                    ? [0, 0, 0, 0, 0, 0, 0]
                    : data[0].data[1].values
                }
              />
            </div>
            <div className="col-md-8">
              <Chart
                labels={data.length === 0 ? ["pink"] : data[0].labels}
                data1={
                  data.length === 0
                    ? [0, 0, 0, 0, 0, 0, 0]
                    : data[0].data[0].values
                }
                data2={
                  data.length === 0
                    ? [0, 0, 0, 0, 0, 0, 0]
                    : data[0].data[1].values
                }
              />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div style={{ width: "30%" }} className="col-md-4">
              <Piechart
                labels={data.length === 0 ? ["pink"] : data[0].labels}
                data1={
                  data.length === 0
                    ? [0, 0, 0, 0, 0, 0, 0]
                    : data[0].data[0].values
                }
                data2={
                  data.length === 0
                    ? [0, 0, 0, 0, 0, 0, 0]
                    : data[0].data[1].values
                }
              />
            </div>
            <div className="col-md-8">
              <Chart
                labels={data.length === 0 ? ["pink"] : data[0].labels}
                data1={
                  data.length === 0
                    ? [0, 0, 0, 0, 0, 0, 0]
                    : data[0].data[0].values
                }
                data2={
                  data.length === 0
                    ? [0, 0, 0, 0, 0, 0, 0]
                    : data[0].data[1].values
                }
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div style={{ width: "30%" }} className="col-md-4">
              <Piechart
                labels={data.length === 0 ? ["pink"] : data[0].labels}
                data1={
                  data.length === 0
                    ? [0, 0, 0, 0, 0, 0, 0]
                    : data[0].data[0].values
                }
                data2={
                  data.length === 0
                    ? [0, 0, 0, 0, 0, 0, 0]
                    : data[0].data[1].values
                }
              />
            </div>
            <div className="col-md-8">
              <Chart
                labels={data.length === 0 ? ["pink"] : data[0].labels}
                data1={
                  data.length === 0
                    ? [0, 0, 0, 0, 0, 0, 0]
                    : data[0].data[0].values
                }
                data2={
                  data.length === 0
                    ? [0, 0, 0, 0, 0, 0, 0]
                    : data[0].data[1].values
                }
              />
            </div>
          </div>
        </div>

<div className="html2pdf__page-break" id="page-break"> 
<TableData />
</div>
<br />
<br/>
<br/>
<br/>
<br/>

       

        <div style={{ width: "70%", margin: "auto auto " }}>
          <Graph
            labels={data.length === 0 ? ["pink"] : data[0].labels}
            data1={
              data.length === 0 ? [0, 0, 0, 0, 0, 0, 0] : data[0].data[0].values
            }
            data2={
              data.length === 0 ? [0, 0, 0, 0, 0, 0, 0] : data[0].data[1].values
            }
          />
        </div>

        <div className="container">
          <div className="row">
            <div style={{ width: "30%" }} className="col-md-4">
              <Piechart
                labels={data.length === 0 ? ["pink"] : data[0].labels}
                data1={
                  data.length === 0
                    ? [0, 0, 0, 0, 0, 0, 0]
                    : data[0].data[0].values
                }
                data2={
                  data.length === 0
                    ? [0, 0, 0, 0, 0, 0, 0]
                    : data[0].data[1].values
                }
              />
            </div>
            <div className="col-md-8">
              <Chart
                labels={data.length === 0 ? ["pink"] : data[0].labels}
                data1={
                  data.length === 0
                    ? [0, 0, 0, 0, 0, 0, 0]
                    : data[0].data[0].values
                }
                data2={
                  data.length === 0
                    ? [0, 0, 0, 0, 0, 0, 0]
                    : data[0].data[1].values
                }
              />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div style={{ width: "30%" }} className="col-md-4">
              <Piechart
                labels={data.length === 0 ? ["pink"] : data[0].labels}
                data1={
                  data.length === 0
                    ? [0, 0, 0, 0, 0, 0, 0]
                    : data[0].data[0].values
                }
                data2={
                  data.length === 0
                    ? [0, 0, 0, 0, 0, 0, 0]
                    : data[0].data[1].values
                }
              />
            </div>
            <div className="col-md-8">
              <Chart
                labels={data.length === 0 ? ["pink"] : data[0].labels}
                data1={
                  data.length === 0
                    ? [0, 0, 0, 0, 0, 0, 0]
                    : data[0].data[0].values
                }
                data2={
                  data.length === 0
                    ? [0, 0, 0, 0, 0, 0, 0]
                    : data[0].data[1].values
                }
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div style={{ width: "30%" }} className="col-md-4">
              <Piechart
                labels={data.length === 0 ? ["pink"] : data[0].labels}
                data1={
                  data.length === 0
                    ? [0, 0, 0, 0, 0, 0, 0]
                    : data[0].data[0].values
                }
                data2={
                  data.length === 0
                    ? [0, 0, 0, 0, 0, 0, 0]
                    : data[0].data[1].values
                }
              />
            </div>
            <div className="col-md-8">
              <Chart
                labels={data.length === 0 ? ["pink"] : data[0].labels}
                data1={
                  data.length === 0
                    ? [0, 0, 0, 0, 0, 0, 0]
                    : data[0].data[0].values
                }
                data2={
                  data.length === 0
                    ? [0, 0, 0, 0, 0, 0, 0]
                    : data[0].data[1].values
                }
              />
            </div>
          </div>
        </div>

        <div id="pagebreak" className="pagebreak"> 
<TableData />
</div>

<br />
<br/>
<br/>
<br/>
<br/>
<br/>

        <div style={{ width: "70%", margin: "auto auto " }}>
          <Graph
            labels={data.length === 0 ? ["pink"] : data[0].labels}
            data1={
              data.length === 0 ? [0, 0, 0, 0, 0, 0, 0] : data[0].data[0].values
            }
            data2={
              data.length === 0 ? [0, 0, 0, 0, 0, 0, 0] : data[0].data[1].values
            }
          />
        </div>

        <div className="container">
          <div className="row">
            <div style={{ width: "30%" }} className="col-md-4">
              <Piechart
                labels={data.length === 0 ? ["pink"] : data[0].labels}
                data1={
                  data.length === 0
                    ? [0, 0, 0, 0, 0, 0, 0]
                    : data[0].data[0].values
                }
                data2={
                  data.length === 0
                    ? [0, 0, 0, 0, 0, 0, 0]
                    : data[0].data[1].values
                }
              />
            </div>
            <div className="col-md-8">
              <Chart
                labels={data.length === 0 ? ["pink"] : data[0].labels}
                data1={
                  data.length === 0
                    ? [0, 0, 0, 0, 0, 0, 0]
                    : data[0].data[0].values
                }
                data2={
                  data.length === 0
                    ? [0, 0, 0, 0, 0, 0, 0]
                    : data[0].data[1].values
                }
              />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div style={{ width: "30%" }} className="col-md-4">
              <Piechart
                labels={data.length === 0 ? ["pink"] : data[0].labels}
                data1={
                  data.length === 0
                    ? [0, 0, 0, 0, 0, 0, 0]
                    : data[0].data[0].values
                }
                data2={
                  data.length === 0
                    ? [0, 0, 0, 0, 0, 0, 0]
                    : data[0].data[1].values
                }
              />
            </div>
            <div className="col-md-8">
              <Chart
                labels={data.length === 0 ? ["pink"] : data[0].labels}
                data1={
                  data.length === 0
                    ? [0, 0, 0, 0, 0, 0, 0]
                    : data[0].data[0].values
                }
                data2={
                  data.length === 0
                    ? [0, 0, 0, 0, 0, 0, 0]
                    : data[0].data[1].values
                }
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div style={{ width: "30%" }} className="col-md-4">
              <Piechart
                labels={data.length === 0 ? ["pink"] : data[0].labels}
                data1={
                  data.length === 0
                    ? [0, 0, 0, 0, 0, 0, 0]
                    : data[0].data[0].values
                }
                data2={
                  data.length === 0
                    ? [0, 0, 0, 0, 0, 0, 0]
                    : data[0].data[1].values
                }
              />
            </div>
            <div className="col-md-8">
              <Chart
                labels={data.length === 0 ? ["pink"] : data[0].labels}
                data1={
                  data.length === 0
                    ? [0, 0, 0, 0, 0, 0, 0]
                    : data[0].data[0].values
                }
                data2={
                  data.length === 0
                    ? [0, 0, 0, 0, 0, 0, 0]
                    : data[0].data[1].values
                }
              />
            </div>
          </div>
        </div>

        <div id="pagebreak"> 
<TableData />
</div>

      </div>
    </>
  );
}

export default Graphs;
