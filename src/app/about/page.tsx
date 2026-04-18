import Title from "@/components/Title";
import WhyDonate from "@/components/about/WhyDonate";

const About = () => {
  return (
    <div>
      <Title text="About Us" />
      <div className="flex items-center justify-center">
        <WhyDonate />
      </div>
    </div>
  );
};

export default About;
