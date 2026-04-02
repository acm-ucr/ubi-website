const Practice = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <div className="flex w-3/4 items-center gap-1 bg-ubi-pink p-10">
      <div className="w-full bg-ubi-blue p-5 text-left">{props.text1}</div>
        <div className="w-full bg-ubi-red-200 p-5 text-left">{props.text2}</div>
        <div className="w-full bg-ubi-darkred-100 p-5 text-left">{props.text3}</div>
    </div>
  );
};

export default Practice;
