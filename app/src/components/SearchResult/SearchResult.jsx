import styled from "styled-components";

const FoodContainer = styled.section`
  height: calc(100vh - 210px);
  background-image: url("/not.jpg");
  background-size: cover;
`;

const FoodCard = styled.div``;


const SearchResult = () => {
  return (
    <FoodContainer>
      <FoodCard></FoodCard>
    </FoodContainer>
  );
};

export default SearchResult;
