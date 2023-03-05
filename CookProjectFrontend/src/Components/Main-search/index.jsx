import Sidebar from "../Sidebar";
import Navbar from "../Navbar-second";
import HeroSectionSearch from "../HeroSection-search";
import { Container } from "./SearchFood";

const SearchFood = ({setFoods}) => {
  return (
    <Container>
      <>
        <Sidebar/>
        <Navbar />
        <HeroSectionSearch setFoods={setFoods} />
      </>
    </Container>
  );
};

export default SearchFood;
