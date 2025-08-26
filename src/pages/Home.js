import Carousel from '../components/Carousel';
import CompanyPresentation from '../components/CompanyPresentation';
import SolutionsGrid from '../components/SolutionsGrid';
import InteractiveMap from '../components/InteractiveMap';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Carousel />
      <CompanyPresentation />
      <SolutionsGrid />
      <InteractiveMap />
    </div>
  );
};

export default Home;