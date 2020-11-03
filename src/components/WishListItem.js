import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

const Container = styled.div`
  margin: 10px;
  border: 1px solid red;
  padding: 20px;
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
