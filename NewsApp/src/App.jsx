import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Card from "./components/Card";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=tesla&from=2023-10-28&sortBy=publishedAt&apiKey=600491370c9f4321ac0eaf0eaa8bafc3"
      )
      .then((res) => {
        console.log("data is fetched");
        setData(res.data.articles); // Assuming the data you need is in the 'articles' property
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <Navbar />
      <div className="flex gap-4 my-4 flex-wrap justify-center">
        {data.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            description={item.description}
            urlToImage={item.urlToImage}
            url={item.url}
          />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default App;
