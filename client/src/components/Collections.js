import React from 'react';
import thumbnail_rings from '../assets/thumbnails/thumbnail_rings.jpg';
import thumbnail_beads from '../assets/thumbnails/thumbnail_beads.jpg';
import thumbnail_pendants from '../assets/thumbnails/thumbnail_pendants.jpg';
import thumbnail_cufflinks from '../assets/thumbnails/thumbnail_cufflinks.jpg';
import thumbnail_custom from '../assets/thumbnails/thumbnail_custom.jpg';

const Collections = () => {
  return(
    <div className="section collections-container">
      <h1>Featured Collections</h1>
      <div className="collections">
        <div className="collection">
          <img src={thumbnail_rings} alt=""/>
          <h3>Rings</h3>
        </div>
        <div className="collection">
          <img src={thumbnail_beads} alt=""/>
          <h3>Beads</h3>
        </div>
        <div className="collection">
          <img src={thumbnail_pendants} alt=""/>
          <h3>Necklaces/Pendants</h3>
        </div>
        <div className="collection">
          <img src={thumbnail_cufflinks} alt=""/>
          <h3>Cufflinks</h3>
        </div>
        <div className="collection">
          <img src={thumbnail_custom} alt=""/>
          <h3>Custom</h3>
        </div>
      </div>
    </div>
  )
}

export default Collections;
