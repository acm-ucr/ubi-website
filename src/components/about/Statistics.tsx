interface StatisticsProps {
  donation_num: string;
  donation_text: string;
  engage_num: string;
  engage_text: string;
  bld_drv_num: string;
  bld_drv_text: string;
}

const Statistics = ({
  donation_num,
  donation_text,
  engage_num,
  engage_text,
  bld_drv_num,
  bld_drv_text,
}: StatisticsProps) => {
  return (
    <div className="m-5 flex w-4/5 flex-row justify-center divide-x-3 divide-[#beb1b1] rounded-4xl border border-t-2 border-r-3 border-b-7 border-l-3 border-[#c9aca3] bg-[#fdf9ed] p-4 shadow-md">
      <div className="flex flex-col items-center pr-17">
        <div className="text-ubi-red-200 m-5 text-6xl font-[1000]">
          {donation_num}
        </div>
        <div className="text-ubi-blue pb-5 text-4xl font-[1000]">
          {donation_text}
        </div>
      </div>
      <div className="flex flex-col items-center px-15">
        <div className="text-ubi-red-200 m-5 text-6xl font-[1000]">
          {" "}
          {engage_num}
        </div>
        <div className="text-ubi-blue pb-5 text-4xl font-[1000]">
          {engage_text}
        </div>
      </div>
      <div className="flex flex-col items-center pl-17">
        <div className="text-ubi-red-200 m-5 text-6xl font-[1000]">
          {bld_drv_num}
        </div>
        <div className="text-ubi-blue pb-5 text-4xl font-[1000]">
          {bld_drv_text}
        </div>
      </div>
    </div>
  );
};

export default Statistics;
