import { useState } from 'react';
import PropTypes from 'prop-types';

import { ImageGalleryItem } from 'components/ImageGallery/ImageGallery.styled';

import { Modal } from 'components/Modal/Modal';

export const ImageItem = ({ image }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <ImageGalleryItem>
      <div onClick={openModal}>
        <img src={image.webformatURL} alt={image.tags} />
      </div>

      {isOpen && (
        <Modal
          img={image.largeImageURL}
          openModal={isOpen}
          closeModal={closeModal}
        />
      )}
    </ImageGalleryItem>
  );
};

ImageItem.propTypes = {
  image: PropTypes.object.isRequired,
};
