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
    <div className="m-5 flex w-4/5 flex-col items-center justify-center rounded-4xl border border-t-2 border-r-3 border-b-7 border-l-3 border-[#c9aca3] bg-[#fdf9ed] p-4 shadow-md md:w-2/3 lg:w-4/5 lg:flex-row">
      <div className="flex flex-col items-center py-5 lg:px-15 lg:py-0">
        <div className="text-ubi-red-200 m-5 text-6xl font-black">
          {donation_num}
        </div>
        <div className="text-ubi-blue pb-5 text-4xl font-black">
          {donation_text}
        </div>
      </div>

      <div className="block w-2/3 border-t-3 border-[#beb1b1] lg:hidden" />
      <div className="hidden h-24 border-l-3 border-[#beb1b1] lg:block" />

      <div className="flex flex-col items-center py-5 lg:px-10 lg:py-0">
        <div className="text-ubi-red-200 m-5 text-6xl font-black">
          {engage_num}
        </div>
        <div className="text-ubi-blue pb-5 pl-10 text-4xl font-black">
          {engage_text}
        </div>
      </div>

      <div className="block w-2/3 border-t-3 border-[#beb1b1] lg:hidden" />
      <div className="hidden h-24 border-l-3 border-[#beb1b1] lg:block" />

      <div className="flex flex-col items-center py-5 lg:py-0 lg:pl-15">
        <div className="text-ubi-red-200 m-5 text-6xl font-black">
          {bld_drv_num}
        </div>
        <div className="text-ubi-blue pb-5 text-4xl font-black">
          {bld_drv_text}
        </div>
      </div>
    </div>
  );
};

export default Statistics;
