import { Button, Input, Textarea } from "@nextui-org/react";
import React from "react";

const UserInput = () => {
  return (
    <div className=" mb-10 mt-10 ">
      <h1 className="mx-auto text-lg text-white ">Input Specimen Details</h1>
      <form className="flex flex-col justify-evenly  gap-3 ">
        <Input type="file" />
        <Textarea placeholder="Description" />
        <Input placeholder="Plate Type" clearable />
        <Input placeholder="Environmental Conditions" />
        <Button variant="flat" className="text-white w-1/2 mx-auto">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default UserInput;
