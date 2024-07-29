import React, { useCallback, useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleClick = useCallback(() => {
    setIsFavorited(prevState => !prevState);
  }, []);

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon filled={isFavorited} />
      </div>
    </div>
  );
}

export default PhotoFavButton;