import { useEffect, useState } from "react";
import styled from "styled-components";
import SearchResult from "./components/SearchResult/SearchResult";

export const BASE_URL = "http://localhost:9000";

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;
const TopContainer = styled.section`
  min-height: 140px;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  align-items: center;

  .search {
    input {
      background-color: transparent;
      border: 1px solid red;
      color: white;
      border-radius: 5px;
      height: 40px;
      font-size: 16px;
      padding: 0px 10px;
    }
  }
`;

const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding-bottom: 40px;
`;
const Button = styled.button`
  background-color: #ff4343;
  border-radius: 5px;
  padding: 6px 12px;
  border: none;
  color: white;
  cursor: pointer;
`;


const App = () => {
  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedBtn, setSelectedBtn] = useState("all");

  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true);

      try {
        const response = await fetch(BASE_URL);
        const json = await response.json();

        setData(json);
        setFilteredData(json);
        setLoading(false);
      } catch (error) {
        setError("Unable to fetch");
      }
    };

    fetchFoodData();
  }, []);

  const searchFood = (e) => {
    const searchValue = e.target.value;
    
    if(searchValue === null){
      setFilteredData(null);
    }

    const filter = data?.filter((food)=>food.name.toLowerCase().includes(searchValue.toLowerCase()));

    setFilteredData(filter);
  }

  const filterFood = (type) => {
    if(type==="all"){
      setFilteredData(data);
      setSelectedBtn("all");
      return ;
    }

    const filter = data?.filter((food)=>food.type.toLowerCase().includes(type.toLowerCase()));
    setFilteredData(filter);
    setSelectedBtn(type);
  }

  const filterBtn = [
    {
      name: "All",
      type: "all"
    }, 
    {
      name: "Breakfast",
      type: "breakfast"
    },
    {
      name: "Dinner",
      type: "dinner"
    },
    {
      name: "Lunch",
      type: "lunch"
    }
  ]


  return (
    <Container>
      <TopContainer>
        <div className="logo">
          {/* <img src="/logo.png" alt="" /> */}
          <p>HunGer Me</p>
        </div>

        <div className="search">
          <input onChange={searchFood} placeholder="Search Food" />
        </div>
      </TopContainer>
      <FilterContainer>
       {
        filterBtn.map((value)=> (
          <Button key={value.name} onClick={()=>filterFood(value.type)}> {value.name} </Button>
        ))
       }
      </FilterContainer>
      <SearchResult data = {filteredData} />
    </Container>
  );
};

export default App;
