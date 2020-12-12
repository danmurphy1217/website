import Header from "../components/Header";
import { Descriptors } from "../components/HomeMain";
import HomePageSupporters from "../components/HomeSecondary";

const HomePage = () => {
    return (
      <div>
        <Header />
        <Descriptors />
        <HomePageSupporters />
      </div>
    );
  };

export default HomePage;