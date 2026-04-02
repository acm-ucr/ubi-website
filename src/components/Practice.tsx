const Practice = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <div className="bg-ubi-pink flex w-3/4 items-center gap-1 p-10">
      <div className="bg-ubi-blue w-full p-5 text-left">{props.text1}</div>
      <div className="bg-ubi-red-200 w-full p-5 text-left">{props.text2}</div>
      <div className="bg-ubi-darkred-100 w-full p-5 text-left">
        {props.text3}
      </div>
    </div>
  );
};

export default Practice;
