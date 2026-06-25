import Title from "@/components/Title";
import BoardComp from "@/components/board/Board";
const Board = () => {
  return (
    <div className="flex flex-col items-center pb-20 md:pb-40">
      <Title text="Meet the Board" />
      <BoardComp />
    </div>
  );
};

export default Board;
