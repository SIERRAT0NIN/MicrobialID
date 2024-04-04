import { useState } from "react";
import { Button, Input, Textarea, Tooltip } from "@nextui-org/react";

const UserInput = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const postData = {
      key: inputValue,
    };

    fetch("http://127.0.0.1:5555/openai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Got data", data);
        setInputValue(data.message);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="mb-10 mt-10">
      <h1 className="mx-auto text-lg text-white">Input Specimen Details</h1>
      <form
        className="flex flex-col justify-evenly gap-3"
        onSubmit={handleSubmit}
      >
        <Input type="file" />
        <Tooltip
          placement="bottom"
          content="Include the colony’s  characteristics shape, color, size, and growth pattern"
        >
          <Textarea placeholder="Description of colony" />
        </Tooltip>
        <Input
          placeholder="Plate Type"
          clearable
          onChange={handleInputChange}
          value={inputValue}
        />
        <Input placeholder="Environment sampled" />
        <Button
          variant="flat"
          className="text-white w-1/2 mx-auto"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default UserInput;
