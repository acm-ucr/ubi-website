const Practice = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <div className="bg-ubi-pink w-2/3 flex-col items-center gap-10 p-10">
      <div className="bg-ubi-blue w-2/3 place-self-center p-5 text-center text-3xl text-white">
        {props.text1}
      </div>
      <div className="flex w-74/100 flex-row place-self-center">
        <div className="bg-ubi-red-200 m-10 w-full rounded-full p-5 text-center text-2xl">
          {props.text2}
        </div>
        <div className="bg-ubi-red-200 m-10 w-full rounded-full p-5 text-center text-2xl">
          {props.text2}
        </div>
      </div>
      <div className="bg-ubi-darkred-100 w-2/3 place-self-center p-5 text-center text-3xl">
        {props.text3}
      </div>
    </div>
  );
};

export default Practice;
