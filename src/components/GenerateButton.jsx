import React, { useState } from 'react';
import html2canvas from 'html2canvas';

const GenerateButton = ({ selectedPlatform, selectedImage, onImageGenerate }) => {
  const handleGenerate = async () => {
    if (selectedPlatform && selectedImage) {
      const generatedImage = await generateImage(selectedPlatform, selectedImage);
      if (generatedImage && onImageGenerate) {
        onImageGenerate(generatedImage); // Invoke the passed function with the generated image
      }
    } else {
      alert('Please select a platform and upload an image.');
    }
  };

  const generateImage = async (platform, image) => {
    try {
      const canvas = document.createElement('canvas');
      let width, height;

      switch (platform) {
        case 'youtube':
          width = 1280;
          height = 720;
          break;
        case 'instagram':
          width = 1080;
          height = 1080;
          break;
        case 'facebook':
          width = 1200;
          height = 630;
          break;
        case 'twitter':
          width = 1024;
          height = 512;
          break;
        default:
          console.error('Invalid platform selected.');
          return null;
      }

      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext('2d');
      const img = new Image();
      img.src = URL.createObjectURL(image);

      return new Promise((resolve) => {
        img.onload = () => {
          ctx.drawImage(img, 0, 0, width, height);
          canvas.toBlob((blob) => {
            const imageUrl = URL.createObjectURL(blob);
            resolve(imageUrl);
          }, 'image/jpeg');
        };
      });
    } catch (error) {
      console.error('Error generating image:', error);
      return null;
    }
  };

  return (
    <button
      onClick={handleGenerate}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Generate Image
    </button>
  );
};

export default GenerateButton;
