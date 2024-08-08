import React, { useState } from 'react';
import ImageUploader from './components/ImageUploader';
import PlatformSelector from './components/PlatformSelector';
import GenerateButton from './components/GenerateButton';

const App = () => {
  const [selectedPlatform, setSelectedPlatform] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [generatedImage, setGeneratedImage] = useState(null);

  const handlePlatformSelect = (platform) => {
    setSelectedPlatform(platform);
  };

  const handleImageUpload = (image) => {
    setSelectedImage(image);
  };

  const handleImageGenerate = (image) => {
    setGeneratedImage(image);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="flex flex-1">
        <div className="flex flex-col space-y-4 w-1/3 p-4">
          <ImageUploader onImageUpload={handleImageUpload} />
          <PlatformSelector onPlatformSelect={handlePlatformSelect} />
        </div>
        <div className="flex flex-col items-center justify-center w-2/3 p-4">
          {generatedImage && (
            <div className="flex flex-col items-center">
              <img src={generatedImage} alt="Generated" className="max-h-64 rounded-lg shadow-md mb-4" />
              <button
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = generatedImage;
                  link.download = `${selectedPlatform}-image.jpg`;
                  link.click();
                }}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              >
                Download
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-center p-4">
        <GenerateButton
          selectedPlatform={selectedPlatform}
          selectedImage={selectedImage}
          onImageGenerate={handleImageGenerate} // Pass the function here
        />
      </div>
    </div>
  );
};

export default App;
