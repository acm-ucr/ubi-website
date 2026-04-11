type titleProps = {
  text: string;
};

const Title = ({ text }: titleProps) => {
  return (
    <div className="text-ubi-blue font-volkhov flex justify-center py-17 text-center text-5xl font-bold tracking-wider md:text-6xl lg:text-7xl">
      {text}
    </div>
  );
};

export default Title;
