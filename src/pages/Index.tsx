import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Overview from '@/components/Overview';
import TechnicalSkills from '@/components/TechnicalSkills';
import WorkExperience from '@/components/WorkExperience';
import Projects from '@/components/Projects';
import Certificates from '@/components/Certificates';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Overview />
      <TechnicalSkills />
      <WorkExperience />
      <Projects />
      <Certificates />
      <Contact />
    </div>
  );
};

export default Index;
