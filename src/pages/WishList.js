import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import FloatingActionButton from '../components/Button';
import { getListById } from '../api/lists';
import WishListItem from '../components/WishListItem';

const Container = styled.div`
  background: #edf0ed;
  margin: 30px;
  text-align: center;
`;

const WishList = () => {
  const { listId } = useParams();
  const [list, setList] = useState([]);

  useEffect(async () => {
    const newList = await getListById(listId);
    setList(newList);
  }, []);

  return (
    <Container>
      <h2>Wishlist for: {list?.title}</h2>
      <ul>
        {list.wishes?.map((wish) => (
          <WishListItem key={wish} title={wish} />
        ))}
      </ul>
      <Link to="/">
        <FloatingActionButton>Back</FloatingActionButton>
      </Link>
    </Container>
  );
};
export default WishList;
