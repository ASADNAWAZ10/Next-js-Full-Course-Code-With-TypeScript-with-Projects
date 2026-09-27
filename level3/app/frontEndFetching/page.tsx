"use client";

import React, { useEffect } from "react";

const page = () => {
  const handleApi = async () => {
    let response = await fetch("http://localhost:3000/api/users");
    let data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    handleApi();
  }, []);
  return <div></div> 
};

export default page;
