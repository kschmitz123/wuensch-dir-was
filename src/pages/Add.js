import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import FloatingActionButton from '../components/Button';
import BackArrow from '../assets/back-arrow.png';
import { postList } from '../api/lists';

const Container = styled.div`
  background: #edf0ed;
  margin: 30px;
  text-align: center;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Add = () => {
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const newList = await postList({ title });
    setLoading(false);
    history.push(`/wishlist/${newList.id}`);
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <input
          placeholder="Add name"
          type="text"
          value={title}
          onChange={handleChange}
          required
        />
        <input type="submit" value={Add} disabled={loading} />
      </Form>
      <Link to="/">
        <FloatingActionButton>
          <img src={BackArrow} alt="back" />
        </FloatingActionButton>
      </Link>
    </Container>
  );
};
export default Add;
