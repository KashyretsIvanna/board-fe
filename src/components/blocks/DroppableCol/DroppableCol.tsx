import styles from './DroppableCol.module.scss';

import DraggableCard from '@/components/cards/DraggableCard/DraggableCard';
import { TargetItem } from '@/types/board.type';
import { ChildrenProp } from '@/types/children.type';

function DroppableCol(props: {
  cards: { title: string; id: string; description: string }[];
  header: ChildrenProp;
  status: string;
  onDrop: (e: React.DragEvent<HTMLDivElement>, targetItem?: TargetItem) => void;
}) {
  return (
    <div className={styles.droppable}>
      <div className={styles.droppable__header}>{props.header}</div>
      <div
        className={styles.droppable__body}
        onDragOver={(e) => {
          e.preventDefault();
        }}
        onDrop={(e: React.DragEvent<HTMLDivElement>) => {
          props.onDrop(e);
        }}
      >
        {props.cards.map((el) => (
          <DraggableCard
            from={props.status}
            key={el.id}
            description={el.description}
            title={el.title}
            id={el.id}
            onDrop={(e: React.DragEvent<HTMLDivElement>) => {
              e.stopPropagation();
              props.onDrop(e, el);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default DroppableCol;
