import FooterSection from "./Components/FooterSection";
import Header from "./Components/Header";
import SectionCategory from "./Components/SectionCategory";
import SectionDownload from "./Components/SectionDownload";
import SectionJobs from "./Components/SectionJobs";
import SectionStaff from "./Components/SectionStaff";
import ServiceSection from "./Components/ServiceSection";
import SubscribeSection from "./Components/SubscribeSection";

function App() {
  return (
    <div className="App">
      <Header />
      <SectionCategory />
      <SectionJobs />
      <ServiceSection />
      <SectionDownload />
      <SectionStaff />
      <SubscribeSection />
      <FooterSection/>
    </div>
  );
}

export default App;
