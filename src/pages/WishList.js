import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import FloatingActionButton from '../components/Button';

const Container = styled.div`
  background: #edf0ed;
  margin: 30px;
  text-align: center;
`;

const WishList = () => {
  const { name } = useParams();
  return (
    <Container>
      <h2>Wishlist for: {name}</h2>
      <Link to="/">
        <FloatingActionButton>Back</FloatingActionButton>
      </Link>
    </Container>
  );
};
export default WishList;
