import React, { useState } from 'react';
import { UploadForm, ImageGrid, Modal } from '../components';

function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div className="gallery">
      <h1>Moments</h1>
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default Gallery;
