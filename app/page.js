import LandingPage from '@/components/LandingPage';
import WelcomePage from '@/components/WelcomePage';
import TimelineSelection from '@/components/TimelineSelection';
import StorySelection from '@/components/StorySelection';

export default function Home() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [selectedTimeline, setSelectedTimeline] = useState(null);

  const handleEnter = () => {
    setCurrentPage('welcome');
  };

  const handleContinue = () => {
    setCurrentPage('timeline');
  };
