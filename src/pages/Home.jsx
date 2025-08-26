import Carousel from '../components/Carousel.jsx';
import CompanyPresentation from '../components/CompanyPresentation.jsx';
import SolutionsGrid from '../components/SolutionsGrid.jsx';
import InteractiveMap from '../components/InteractiveMap.jsx';

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