import styled from "styled-components";
import { BASE_URL } from "../../App";

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
            data?.map(({name, image, text})=> (
                <FoodCard key = {name}>
                    <div className="food_image">
                        <img src={BASE_URL + image} />
                    </div>
                    <div className="food_info">
                        <div className="info">
                            <h3> {name} </h3>
                            <p> {text} </p>
                        </div>
                    </div>
                </FoodCard>
            ))
        }
      </FoodCards>
    </FoodContainer>
  );
};

export default SearchResult;
