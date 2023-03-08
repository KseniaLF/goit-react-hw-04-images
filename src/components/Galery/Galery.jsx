// import { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// // import { toast } from 'react-toastify';
// import { getImgApiData } from 'services/api';

// import { ImageGallery } from 'components/ImageGallery/ImageGallery';
// // import { Loader } from 'components/Loader/Loader';
// import Button from 'components/Button';

// export const Galery = ({ queryValue }) => {
//   const [images, setImages] = useState([]);
//   const [page, setPage] = useState(1);

//   // if (images.length === 0 && loading === true) {
//   //   return <Loader />;
//   // }

//   if (images.length !== 0) {
//     return (
//       <>
//         <ImageGallery images={images} />

//         {/* {loading && <Loader />} */}

//         {/* {!loading && images.length < totalHits && <Button onClick={onClick} />} */}
//         {/* <Button onClick={onClick} /> */}
//       </>
//     );
//   }
// };

// Galery.propTypes = {
//   queryValue: PropTypes.string.isRequired,
// };
