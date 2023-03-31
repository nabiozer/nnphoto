import React, { useState } from 'react';

import Title from './Title';
import ImageGrid from './ImageGrid';
import Modal from './Modal';


function Gallery({images}:any) {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="gallery">
      <Title/>
      <ImageGrid setSelectedImg={setSelectedImg} images={images}/>
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default Gallery;