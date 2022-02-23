import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRandomGreeting } from "../redux/greetings";

const Greeting = () => {
  const dispatch = useDispatch();
  const { message } = useSelector((state) => state.greetings);

  useEffect(() => {
    dispatch(fetchRandomGreeting());
  }, []);

  const fetchGreeting = () => {
    dispatch(fetchRandomGreeting());
  };

  return (
    <div className="container">
      <button type="button" onClick={() => fetchGreeting()} className="btn btn-primary mt-5 mb-5">
              Get random greeting
            </button>
      <h2>{message}</h2>
    </div>
    ) 
    
};

export default Greeting;