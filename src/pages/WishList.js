import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  background: #edf0ed;
  margin: 30px;
  text-align: center;
`;

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
const WishList = () => {
  const { name } = useParams();
  return (
    <Container>
      <h2>Wishlist from: {name}</h2>
      <NavLink to="/">Back</NavLink>
    </Container>
  );
};
export default WishList;
