import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const Container = styled.div`
  margin: 30px;
  padding: 10px;
  font-size: 2rem;
  background: #edf0ed;
  text-align: center;
  box-shadow: 2px 2px 10px 0px white;
`;
export default function WishListItem({ title }) {
  return (
    <>
      <Container>{title}</Container>
    </>
  );
}

WishListItem.propTypes = {
  title: PropTypes.string.isRequired,
};
