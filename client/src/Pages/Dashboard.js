import React, { useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [data, setData] = useState("");
  const getUser = async () => {
    await axios.get("/getUser").then((response) => {
      console.log(response.data);
      setData(response.data);
    });
  };
  return (
    <div>
      <button onClick={getUser} className="btn btn-primary">
        get User
      </button>
      <br />
      {data}
    </div>
  );
};
export default Dashboard;
