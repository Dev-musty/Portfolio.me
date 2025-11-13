import { Nav } from "../component/nav";
import Footer from "../component/Footer";
import { portfolio_data } from "../../data";
import Education from "../component/Education";
import resume from '../assets/MUSTHAPHA RIDWAN RESUME.pdf'
import ConnectSection from "../component/ConnectSection";
import UptoSection from "../component/UptoSection";
import Experience from "../component/Experience";
const About = () => {
  return (
    <>
      <Nav />
      <main className="mt-[50px] mx-[25px]  md-w-[768px] font-firacode text-[#E4E4E7]">
        <h2 className="text-[18px] text-[#00E5FF] text-center md:text-[25px]">
          //Mustapha Ridwan
        </h2>
        <h6 className="text-[16px] text-[400] text-center pt-[10px] md:text-[25px]">
          I'm a Full Stack Developer
        </h6>
        <div
          className="mt-[25px] md:mb-[30px] text-center
        "
        >
          <p className="text-[14px] text-[400] mb-[4px] md:text-[25px]">
            {portfolio_data.user_details.bio}
          </p>
          <span className="text-[11px] text-[#E4E4E7] text-[100] opacity-85 md:text-[22px]">
            {portfolio_data.user_details.tag}
          </span>
          <br />
        </div>
        {/* Resume */}
        <div className="mt-[10px] text-center">
          <a href={resume} target="_blank" className="md:text-[26px]" rel="noopener noreferrer" download>
            <span className="slash">//</span>Resume
          </a>
        </div>
        {/* Experience */}
        <Experience />
        {/* Exducation */}
        <h2 className="text-[#00E5FF] text-[16px] mt-[50px] mb-[20px]">
          //Education
        </h2>
        <Education
          title="Bachelor of science in Mechanical Engineering"
          timeLine="2023-2027"
          about=""
          state={["Inveiw"]}
        />
        <Education
          title="Full Stack Development"
          timeLine=""
          about="Cap Tech hub program"
          state={[
            "Currently in the luanch phase of the program.",
            "Building CampusLink",
            "Specialized in React and Node.js",
          ]}
        />
        {/* What I'm up to */}
        <UptoSection/>
        {/* Let's connect*/}
        <ConnectSection />
      </main>
      <Footer />
    </>
  );
};

export default About;
