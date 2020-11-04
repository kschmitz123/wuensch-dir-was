import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
const Add = () => {
  return (
    <Container>
      <div>
        <h1>This is a page</h1>
        <p>Add your wishlist items here.</p>
      </div>
      <NavLink to="/">Back</NavLink>
    </Container>
  );
};
export default Add;
