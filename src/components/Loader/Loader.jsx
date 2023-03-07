import { InfinitySpin } from 'react-loader-spinner';
import { LoaderItem } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderItem>
      <InfinitySpin width="200" color="#4d6aa9" />
    </LoaderItem>
  );
};
