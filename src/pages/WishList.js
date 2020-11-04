import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  background: #edf0ed;
  margin: 30px;
`;

const WishList = () => {
  const { name } = useParams();
  return (
    <Container>
      <Link to="/">Back</Link> Wishlist from: {name}
    </Container>
  );
};
export default WishList;
