import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

const Container = styled.div`
  margin: 10px;
  border: 1px solid #ff7a79;
  padding: 10px;
  font-size: 2rem;
  text-align: center;
  box-shadow: 2px 4px 13px 0px rgba(233, 32, 77, 0.75);
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
