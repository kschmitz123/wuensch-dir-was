import { Link, useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import FloatingActionButton from '../components/Button';
import { getListById, deleteListById, patchListItem } from '../api/lists';
import WishListItem from '../components/WishListItem';
import BackArrow from '../assets/back-arrow.png';
import DangerButton from '../components/DangerButton';

const Container = styled.div`
  text-align: center;
`;
const Heading = styled.h1`
  color: white;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const WishList = () => {
  const { listId } = useParams();
  const history = useHistory();
  const [list, setList] = useState('');
  const [wishToAdd, setWishToAdd] = useState('');

  useEffect(async () => {
    const newList = await getListById(listId);
    setList(newList);
  }, []);

  const handleDelete = async () => {
    await deleteListById(listId);
    history.push('/');
  };
  const handleChange = (event) => {
    setWishToAdd([event.target.value, ...list.wishes]);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    patchListItem(listId, wishToAdd);
  };

  return (
    <Container>
      <Heading>Wishlist for: {list?.title}</Heading>
      <Form onSubmit={handleSubmit}>
        <input
          placeholder="Add wish"
          type="text"
          value={wishToAdd}
          onChange={handleChange}
          required
        />
        <input type="submit" value="Add" />
      </Form>
      <li>
        {list.wishes?.map((wish) => (
          <WishListItem key={wish} title={wish} />
        ))}
      </li>
      <DangerButton onClick={handleDelete} type="button">
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
