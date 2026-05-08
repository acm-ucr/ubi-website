import Title from "@/components/Title";
import BoardImage from "@/public/board/Board-Group.svg";
import Image from "next/image";
import BoardComp from "@/components/board/Board";
const Board = () => {
  return (
    <div className="flex flex-col items-center pb-40">
      <Title text="Meet the Board" />
      <Image src={BoardImage} alt="Photo of Board" />
      <div className="text-ubi-red-200 py-27 text-6xl font-semibold">
        <p>Your Officers</p>
      </div>
      <BoardComp />
    </div>
  );
};

export default Board;
