import Header from "../components/Header";
import { Descriptors } from "../components/HomeMain";
import HomePageSupporters from "../components/HomeSecondary";
import { formatOf } from "../components/extras/customFormatters";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Descriptors
        plaintext="I AM A..."
        config={{
          strings: [
            `${formatOf("ENGINEER")}`,
            `${formatOf("STUDENT")}`,
            `${formatOf("MUSICIAN")}`,
            `${formatOf("WRITER")}`,
          ],
          autoStart: true,
          loop: true,
        }}
      />
      <HomePageSupporters />
    </div>
  );
};

export default HomePage;
