import Sidebar from "../Sidebar";
import Navbar from "../Navbar-second";
import AdvancedHeroSectionSearch from "../AdvancedHeroSection-search";
import { Container } from "./AdvancedSearchFood";

const AdvancedSearchFood = ({setFoods}) => {
  return (
    <Container>
      <>
        <Sidebar/>
        <Navbar />
        <AdvancedHeroSectionSearch setFoods={setFoods}/>
      </>
    </Container>
  );
};

export default AdvancedSearchFood;
