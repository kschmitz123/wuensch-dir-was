import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import WishListItem from '../components/WishListItem';

const WishListItems = styled.div``;

const NavLink = styled(Link)`
  display: inline-grid;
  place-content: center;
  text-decoration: none;
  height: 50px;
  width: 50px;
  background-color: #ff9a9e;
  border-radius: 50%;
  cursor: pointer;
`;

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
      <NavLink to="/add">
        <svg
          xmins="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />{' '}
        </svg>
      </NavLink>
    </Container>
  );
};

export default Welcome;

Welcome.propTypes = {
  title: PropTypes.string.isRequired,
};
