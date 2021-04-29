import Layout from "../Layout";
import FreeshRecommendations from "./Components/FreeshRecommendations/FreeshRecommendations";
import HeroArea from "./Components/HeroArea/HeroArea";
import MoreOnMotorcycles from "./Components/MoreOnMotorcycles/MoreOnMotorcycles";
import TryIslamicAd from "./Components/TryIslamicAd/TryIslamicAd";

const Home = () => {
  return (
    <Layout>
      <main>
        <HeroArea />
        <section>
          <MoreOnMotorcycles />
        </section>
        <section>
          <FreeshRecommendations />
        </section>
        <section>
          <TryIslamicAd />
        </section>
      </main>
    </Layout>
  );
};

export default Home;
