import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-ui/core";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="main-div">
      <h1>Welcome to the orders App</h1>
      <Button
        color="primary"
        variant="contained"
        onClick={() => navigate("orders")}
      >
        Go to Orders
      </Button>
    </div>
  );
}

export default Home;
