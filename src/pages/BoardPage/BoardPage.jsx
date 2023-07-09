import "./BoardPage.scss";
import { BLOCKS } from "./Constants";
import { Block } from "../../components/Block/Block";

export const BoardPage = () => {
  return (
    <div className="board">
        {BLOCKS.map(block => 
            <div className="board__item" key={block.id}>
                <Block {...block} blocks={BLOCKS} />
            </div>
            )}
    </div>
  );
}