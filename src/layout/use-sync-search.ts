import React, { useState, useEffect } from "react";

export const useSearchSync = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");

  const param = "search";

  useEffect(() => {}, []);

  //change the value
  useEffect(() => {}, [value]);

  return [];
};
