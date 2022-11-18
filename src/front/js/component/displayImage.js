import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export const DisplayImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>
      {selectedImage && (
        <div>
          <img
            alt="not fount"
            width={"250px"}
            src={URL.createObjectURL(selectedImage)}
          />
          <br />
          <button onClick={() => setSelectedImage(null)}>Remove</button>
        </div>
      )}
      <br />

      <br />
      <Form.Control
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
      />
    </div>
  );
};
