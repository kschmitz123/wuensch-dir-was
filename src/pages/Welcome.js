import { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { getLists } from '../api/lists';
import WishListItem from '../components/WishListItem';
import FloatingActionButton from '../components/Button';

const Container = styled.div`
  text-align: center;
`;

const Heading = styled.h1`
  color: white;
`;
const Welcome = () => {
  const [lists, setLists] = useState(null);
  useEffect(async () => {
    const newLists = await getLists();
    setLists(newLists);
  }, []);

  return (
    <Container>
      <Heading>Christmas Wishlist</Heading>
      {lists?.map((list) => (
        <WishListItem key={list.id} name={list.title} />
      ))}
      <Link to="/add">
        <FloatingActionButton>
          <svg
            xmins="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
          >
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
          </svg>
        </FloatingActionButton>
      </Link>
    </Container>
  );
};

export default Welcome;
