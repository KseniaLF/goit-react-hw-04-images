import PropTypes from 'prop-types';
import { LoadMoreBtn } from './Button.styled';

const Button = ({ onClick }) => {
  return (
    <LoadMoreBtn>
      <button type="button" onClick={onClick}>
        Load more
      </button>
    </LoadMoreBtn>
  );
};

export default Button;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
