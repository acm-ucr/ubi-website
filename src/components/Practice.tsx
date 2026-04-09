const Practice = (props: {
  text1: string;
  text2: string;
  text3: string;
  text4: string;
}) => {
  return (
    <div className="bg-ubi-pink flex w-2/3 flex-col items-center gap-1 p-10">
      <div className="bg-ubi-blue text-ubi-white m-1 w-2/3 p-4 text-center text-2xl">
        {props.text1}
      </div>
      <div className="m-8 flex w-2/3">
        <div className="bg-ubi-red-200 m-2 w-full rounded-full p-5 text-center text-xl">
          {props.text2}
        </div>
        <div className="bg-ubi-red-200 m-2 w-full rounded-full p-5 text-center text-xl">
          {props.text4}
        </div>
      </div>
      <div className="bg-ubi-darkred-100 m-1 w-2/3 p-4 text-center text-2xl">
        {props.text3}
      </div>
    </div>
  );
};

export default Practice;
