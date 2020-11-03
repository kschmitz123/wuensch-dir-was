import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import Button from '../components/Button';
import WishListItem from '../components/WishListItem';

const WishListItems = styled.div``;

const Container = styled.div`
  text-align: center;
`;
const Welcome = ({ title }) => {
  return (
    <Container>
      <WishListItems>
        <WishListItem title={title} />
        <WishListItem title={title} />
        <WishListItem title={title} />
      </WishListItems>
      <Button>
        <Link to="/add">+</Link>
      </Button>
    </Container>
  );
};

export default Welcome;

Welcome.propTypes = {
  title: PropTypes.string.isRequired,
};
