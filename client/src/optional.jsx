import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/UserDashboard", { replace: true });
  });

  return <h1></h1>;
}

export default Home;
