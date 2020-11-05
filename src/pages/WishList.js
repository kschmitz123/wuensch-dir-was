import { Link, useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import FloatingActionButton from '../components/Button';
import { getListById, deleteListById } from '../api/lists';
import WishListItem from '../components/WishListItem';
import BackArrow from '../assets/back-arrow.png';
import DangerButton from '../components/DangerButton';

const Container = styled.div`
  text-align: center;
`;
const Heading = styled.h1`
  color: white;
`;
const WishList = () => {
  const { listId } = useParams();
  const history = useHistory();
  const [list, setList] = useState([]);

  useEffect(async () => {
    const newList = await getListById(listId);
    setList(newList);
  }, []);

  const handleDelete = async () => {
    await deleteListById(listId);
    history.push('/');
  };

  return (
    <Container>
      <Heading>Wishlist for: {list?.title}</Heading>
      {list.wishes?.map((wish) => (
        <WishListItem key={wish} title={wish} />
      ))}
      <DangerButton onClick={handleDelete} type="submit">
        Delete
      </DangerButton>
      <Link to="/">
        <FloatingActionButton>
          <img src={BackArrow} alt="back" />
        </FloatingActionButton>
      </Link>
    </Container>
  );
};
export default WishList;
