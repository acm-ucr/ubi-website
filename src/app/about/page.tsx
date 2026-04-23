import Title from "@/components/Title";
import OurVision from "@/components/about/OurVision";
import Statistics from "@/components/about/Statistics";
import WhyDonate from "@/components/about/WhyDonate";

const About = () => {
  return (
    <div className="flex flex-col items-center">
      <Title text="About Us" />
      {/* render the OurVision component below the title */}
      <OurVision />
      <Statistics
        donation_num="250+"
        donation_text="Donations"
        engage_num="80+"
        engage_text="Student Engagement"
        bld_drv_num="10+"
        bld_drv_text="Blood Drives"
      />
      <div className="flex items-center justify-center py-15">
        <WhyDonate />
      </div>
    </div>
  );
};

export default About;
