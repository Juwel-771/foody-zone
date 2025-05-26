import styled from "styled-components";

const FoodContainer = styled.section`
  height: calc(100vh - 210px);
  background-image: url("/not.jpg");
  background-size: cover;
`;

const FoodCards = styled.div``;
const FoodCard = styled.div``;


const SearchResult = ({data}) => {
  return (
    <FoodContainer>
      <FoodCards>
        {
            data?.map((food)=> (
                <FoodCard key = {food.name}></FoodCard>
            ))
        }
      </FoodCards>
    </FoodContainer>
  );
};

export default SearchResult;
