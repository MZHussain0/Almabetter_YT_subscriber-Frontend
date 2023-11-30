import axios from "axios";
import React, { useEffect, useState } from "react";
import CodeBlock from "../components/CodeBlock";

const SubscriberPage = () => {
  const [data, setData] = useState([]);

  // Fetch data from the API
  useEffect(() => {
    axios.get("/subscribers").then(({ data }) => {
      setData(JSON.stringify(data, null, 2));
    });
  }, []);

  return <CodeBlock data={data} text={"Details of all subscribers"} />;
};

export default SubscriberPage;
