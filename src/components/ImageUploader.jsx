import React, { useState } from 'react';

const ImageUploader = ({ onImageUpload }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (event) => {
    const image = event.target.files[0];
    setSelectedImage(image);
    onImageUpload(image);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Upload a Photo</h2>
      <div className="flex justify-center items-center mb-4">
        <label
          htmlFor="image-upload"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
        >
          Choose File
        </label>
        <input
          id="image-upload"
          type="file"
          onChange={handleImageUpload}
          className="hidden"
        />
      </div>
      {selectedImage && (
        <div className="flex justify-center">
          <img
            src={URL.createObjectURL(selectedImage)}
            alt="Uploaded"
            className="max-h-64 rounded-lg shadow-md"
          />
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
