import Title from "@/components/Title";
import WhyDonate from "@/components/about/WhyDonate";
import Statistics from "@/components/about/Statistics";

const About = () => {
  return (
    <div className="flex flex-col items-center">
      <Title text="About Us" />
      <div className="flex items-center justify-center">
        <WhyDonate />
      </div>
      <Statistics
        donation_num="250+"
        donation_text="Donations"
        engage_num="80+"
        engage_text="Student Engagement"
        bld_drv_num="10+"
        bld_drv_text="Blood Drives"
      />
    </div>
  );
};

export default About;
