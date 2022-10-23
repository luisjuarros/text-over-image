import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./App.css";
var Airtable = require("airtable");

function App() {
  const [data, setData] = useState();

  var base = new Airtable({ apiKey: "keyMP4bdGTsGPhxy3" }).base(
    "app4H5DMjkWP5rcKk"
  );

  useEffect(() => {
    let my_collection = [];
    base("ciencia")
      .select({
        // Selecting the first 3 records in Grid view:
        maxRecords: 3,
        view: "Grid view",
      })
      .eachPage(
        function page(records, fetchNextPage) {
          // This function (`page`) will get called for each page of records.

          records.forEach(function (record) {
            // console.log("Retrieved", record.get("question"));
            my_collection.push({
              id: record.id,
              question: record.get("question"),
              answer: record.get("answer"),
              keyword: record.get("keyword"),
            });
          });

          // To fetch the next page of records, call `fetchNextPage`.
          // If there are more records, `page` will get called again.
          // If there are no more records, `done` will get called.
          fetchNextPage();
        },
        function done(err) {
          setData(my_collection);

          if (err) {
            console.error(err);
            return;
          }
        }
      );
  }, [base]);

  return (
    <>
      <div className="container mt-5">
        <div className="row mb-5">
          <div className="col">
            <strong>QUESTION</strong>
          </div>
        </div>
        <div className="row">
          <div className="col">
            {data &&
              data.map((element) => {
                return (
                  <Link to={`${element.id}`}>
                    <p>
                      {element.question} <br />
                    </p>
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
