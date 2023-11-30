import axios from "axios";
import React, { useEffect, useState } from "react";
import CodeBlock from "../components/CodeBlock";

const SubNamesPage = () => {
  const [data, setData] = useState([]);

  // Fetch data from the API
  useEffect(() => {
    axios.get("/subscribers/names").then(({ data }) => {
      setData(JSON.stringify(data, null, 2));
    });
  }, []);
  return (
    <>
      <CodeBlock
        data={data}
        text={"names and subscribedChannel of subscribers"}
      />
    </>
  );
};

export default SubNamesPage;
