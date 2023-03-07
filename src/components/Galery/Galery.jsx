import { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { getImgApiData } from 'services/api';

import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Loader } from 'components/Loader/Loader';
import Button from 'components/Button';

export class Galery extends Component {
  state = {
    images: [],
    page: 1,
    loading: false,
    totalHits: null,
  };

  async componentDidUpdate(prevProps, _) {
    try {
      const prevQueryValue = prevProps.queryValue;
      const nextQueryValue = this.props.queryValue;

      if (prevQueryValue !== nextQueryValue) {
        this.setState({
          images: [],
          page: 1,
          loading: true,
        });

        const images = await getImgApiData(nextQueryValue, 1);

        const { hits, totalHits } = images;

        if (hits.length === 0) {
          this.setState({ loading: false });
          return toast.error(`Sorry, NOT FOUND`);
        }

        this.setState({
          page: this.state.page + 1,
          images: hits,
          loading: false,
          totalHits: totalHits,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  onClick = async () => {
    try {
      const nextQueryValue = this.props.queryValue;

      this.setState({ loading: true });

      const images = await getImgApiData(nextQueryValue, this.state.page);

      const { hits } = images;

      return this.setState({
        page: this.state.page + 1,
        images: [...this.state.images, ...hits],
        loading: false,
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { images, loading, totalHits } = this.state;

    if (images.length === 0 && loading === true) {
      return <Loader />;
    }

    if (images.length !== 0) {
      return (
        <>
          <ImageGallery images={images} />

          {loading && <Loader />}
          {!loading && images.length < totalHits && (
            <Button onClick={this.onClick} />
          )}
        </>
      );
    }
  }
}

Galery.propTypes = {
  queryValue: PropTypes.string.isRequired,
};
