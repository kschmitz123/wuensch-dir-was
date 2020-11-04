import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
// import { Link } from 'react-router-dom';

const Container = styled.div`
  margin: 30px;
  padding: 10px;
  font-size: 2rem;
  background: #edf0ed;
  text-align: center;
  border-radius: 25px;
  box-shadow: 2px 2px 10px 0px white;
`;

// const NavLink = styled(Link)`
//   text-decoration: none;
//   cursor: pointer;
//   &:visited {
//     color: black;
//   }
// `;
export default function WishListItem({ title }) {
  return (
    <>
      {/* <NavLink to={`/wishlist/${list.id}`}> */}
      <Container>{title}</Container>
      {/* </NavLink> */}
    </>
  );
}

WishListItem.propTypes = {
  title: PropTypes.string.isRequired,
};
