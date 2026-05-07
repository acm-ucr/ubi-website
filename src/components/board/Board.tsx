import BoardCard from "./BoardCard";
import { BoardCardInfo } from "./BoardCardInfo";

const BoardComp = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-x-40 gap-y-30">
      {BoardCardInfo.map(({ image, name, position }, index) => (
        <BoardCard key={index} image={image} name={name} position={position} />
      ))}
    </div>
  );
};

export default BoardComp;
