import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  background: #edf0ed;
  margin: 30px;
`;

const Add = () => {
  return (
    <Container>
      <h1>This is a page</h1>
      <p>Add your wishlist items here.</p>
      <Link to="/">Back</Link>
    </Container>
  );
};
export default Add;
