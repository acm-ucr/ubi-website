const Practice = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <div className="bg-ubi-pink flex w-2/3 flex-col items-center gap-9 rounded-md p-10">
      <div className="bg-ubi-blue w-3/5 p-4 text-center text-2xl text-white">
        {props.text1}
      </div>
      <div className="flex w-3/5 gap-6">
        <div className="bg-ubi-red-200 w-full rounded-full p-4 text-center text-xl">
          {props.text2}
        </div>
        <div className="bg-ubi-red-200 w-full rounded-full p-4 text-center text-xl">
          {props.text2}
        </div>
      </div>
      <div className="bg-ubi-darkred-100 w-3/5 p-4 text-center text-2xl">
        {props.text3}
      </div>
    </div>
  );
};

export default Practice;
