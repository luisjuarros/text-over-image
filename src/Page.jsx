import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Page.css";
var Airtable = require("airtable");

const Page = () => {
  const { slug } = useParams();
  console.log(slug);
  const [data, setData] = useState();
  const [unsplash, setUnsplash] = useState();

  var base = new Airtable({ apiKey: "keyMP4bdGTsGPhxy3" }).base(
    "app4H5DMjkWP5rcKk"
  );

  useEffect(() => {
    base("ciencia").find(slug, function (err, record) {
      if (err) {
        console.error(err);
        return;
      }
      console.log("Retrieved", record.id);
      setData(record);

      const response = axios
        .get(
          `https://api.unsplash.com/search/photos?per_page=20&query=${record.fields.keyword}`,
          {
            headers: {
              Authorization:
                "Client-ID qFfQbLoHmqKfeCurC_w2iQCONBCHEYuerUk3z6pgBm0",
            },
          }
        )
        .then((response) => {
          let temp = response.data;
          console.log(temp);
          setUnsplash(response.data);
        });

      //   fetch(
      //     `https://api.unsplash.com/search/photos?query=${record.fields.keyword}`,
      //     {
      //       headers: new Headers({
      //         Authorization: "Client-ID qFfQbLoHmqKfeCurC_w2iQCONBCHEYuerUk3z6pgBm0",
      //       }),
      //     }
      //   ).then((res) => {
      //     // setUnsplash(res.json());
      //     console.log(res.json().results);
      //   });
    });
  }, []);
  return (
    <div className="container font">
      {data && (
        <div>
          <p>{data.fields.keyword}</p> <p>{data.fields.question}</p>
          <p>{data.fields.answer}</p>
        </div>
      )}

      {/* <div class="myClass">
  <img src="{{ localStorage.values.image_selected}}" />
  <div class="up background">{{ localStorage.values.my_text}}</div>
  <div class="down background-down">➡️</div>
</div> */}

      {unsplash && (
        <div className="row">
          {unsplash &&
            unsplash.results.map((element) => {
              return (
                <div
                  className="col"
                  style={{
                    height: "200px",
                    width: "200px",
                    margin: "1rem",
                    textAlign: "center",
                  }}
                >
                  {/* <img
                    style={{
                      objectFit: "cover",
                      width: "200px",
                      height: "200px",
                    }}
                    src={element.urls.regular}
                  /> */}
                  <p
                    style={{
                      background: `url(${element.urls.regular})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      lineHeight: "2.5",
                      paddingTop: "2%",
                      width: "200px",
                      height: "200px",
                    }}
                  >
                    <span
                      style={{
                        backgroundColor: "rgba(255, 0, 0, 1)",
                        color: "#fff",
                        display: "inline",
                        padding: "0.5rem",
                        fontFamily: "'Fuzzy Bubbles', cursive",
                        fontSize:"0.9rem"                      }}
                    >
                      {data.fields.question}
                    </span>
                  </p>{" "}
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default Page;
