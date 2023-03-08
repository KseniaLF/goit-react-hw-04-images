import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

import { Form } from 'components/Form/Form';

import { getImgApiData } from 'services/api';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import Button from 'components/Button';
import { Loader } from 'components/Loader/Loader';

export const App = () => {
  const [queryValue, setQueryValue] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalHits, setTotalHits] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const { hits, totalHits } = await getImgApiData(queryValue, page);

      if (hits.length === 0) {
        setLoading(false);
        return toast.error(`Sorry, NOT FOUND`);
      }

      if (page === 1) {
        setImages(hits);
        setLoading(false);
        setTotalHits(totalHits);

        return toast.success('Found: ' + totalHits);
      }

      setImages(prevState => [...prevState, ...hits]);
      setLoading(false);
    };

    try {
      if (!queryValue) {
        return;
      }

      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, [page, queryValue]);

  const handleFormSubmit = value => {
    if (images.length > 0 && queryValue === value) {
      return toast.info(`${value} already found`);
    }
    setQueryValue(value);
    setPage(1);
    setImages([]);
    setTotalHits(null);
    // setQueryValue(prevState => )
  };

  const onClick = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div>
      <Form onSubmit={handleFormSubmit} />

      {images.length === 0 && loading && <Loader />}

      <ImageGallery images={images} />

      {images.length !== 0 && loading && <Loader />}
      {!loading && images.length < totalHits && <Button onClick={onClick} />}

      <ToastContainer style={{ fontSize: '15px' }} autoClose={1000} />
    </div>
  );
};

// const handleFormSubmit = queryValue => {
//   setQueryValue(queryValue);
// };
// queryValue => setQueryValue(queryValue) //setQueryValue
