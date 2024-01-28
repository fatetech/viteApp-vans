import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const VanDetailPage = () => {
  const params = useParams();
  console.log(params);
  return <div>VanDetailPage</div>;
};

export default VanDetailPage;
