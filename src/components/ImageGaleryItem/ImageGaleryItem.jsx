import { Component } from 'react';
import PropTypes from 'prop-types';

import { ImageGalleryItem } from 'components/ImageGallery/ImageGallery.styled';

import { Modal } from 'components/Modal/Modal';

export class ImageItem extends Component {
  state = {
    isOpen: false,
  };

  openModal = () => {
    this.setState({ isOpen: true });
  };
  closeModal = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const { image } = this.props;
    return (
      <ImageGalleryItem key={image.id}>
        <div onClick={this.openModal}>
          <img src={image.webformatURL} alt={image.tags} />
        </div>

        {this.state.isOpen && (
          <Modal
            img={image.largeImageURL}
            openModal={this.state.isOpen}
            closeModal={this.closeModal}
          />
        )}
      </ImageGalleryItem>
    );
  }
}

ImageItem.propTypes = {
  image: PropTypes.object.isRequired,
};
