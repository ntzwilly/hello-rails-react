import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRandomGreeting } from "../redux/greetings";

const Greeting = () => {
  const dispatch = useDispatch();
  const { message } = useSelector((state) => state.greetings);

  console.log(message);

  useEffect(() => {
    dispatch(fetchRandomGreeting());
  }, []);

  return <h2>{message}</h2>;
};

export default Greeting;