import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import React, { useEffect, useState } from "react";

const AiBot = () => {
  const [message, setMessage] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:5555/openai")
      .then((response) => response.json())
      .then((data) => {
        console.log("Got data", data);
        setMessage(data.message);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, [message]);

  return (
    <Card>
      <CardHeader className="">Response From OpenAI API:</CardHeader>
      <CardBody>
        <p>{message}</p>
      </CardBody>
      <CardFooter></CardFooter>
    </Card>
  );
};

export default AiBot;
