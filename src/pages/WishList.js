import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import FloatingActionButton from '../components/Button';
import { getListById } from '../api/lists';
import WishListItem from '../components/WishListItem';
import BackArrow from '../assets/back-arrow.png';

const Container = styled.div`
  text-align: center;
`;
const Heading = styled.h1`
  color: white;
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
      <Heading>Wishlist for: {list?.title}</Heading>
      {list.wishes?.map((wish) => (
        <WishListItem key={wish} title={wish} />
      ))}
      <Link to="/">
        <FloatingActionButton>
          <img src={BackArrow} alt="back" />
        </FloatingActionButton>
      </Link>
    </Container>
  );
};
export default WishList;
