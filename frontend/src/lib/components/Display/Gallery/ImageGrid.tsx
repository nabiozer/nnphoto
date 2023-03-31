import React from 'react';

import { motion } from 'framer-motion';

const ImageGrid = ({ setSelectedImg,images }:any) => {
 

  
  return (
    <div className="img-grid">
      {images && images.map((image:any) => (
        <motion.div className="img-wrap" key={image} 
          layout
          whileHover={{ opacity: 1 }}
          onClick={() => setSelectedImg(image)}
        >
          <motion.img src={image} alt="uploaded pic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          />
        </motion.div>
      ))}
    </div>
  )
}

export default ImageGrid;