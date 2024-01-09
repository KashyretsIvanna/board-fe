import DeleteIcon from '@mui/icons-material/Delete';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import ModeIcon from '@mui/icons-material/Mode';
import { TextField } from '@mui/material';

import styles from './DraggableCard.module.scss';

import UseManageCard from '@/customHooks/useManageCard';
import { TargetItem } from '@/types/board.type';

function DraggableCard(props: {
  description: string;
  title: string;
  id: string;
  from: string;
  onDrop: (e: React.DragEvent<HTMLDivElement>, targetItem: TargetItem) => void;
}) {
  const {
    onCheckoutEdit,
    isEditable,
    onDelete,
    onSave,
    description,
    title,
    setDescription,
    setTitle,
  } = UseManageCard(props);

  return (
    <div
      onDragStart={(e) => {
        e.dataTransfer.setData('id', props.id.toString());
        e.dataTransfer.setData('from', props.from);
      }}
      onDrop={(e) => {
        props.onDrop(e, { description: props.description, header: props.title, id: props.id });
      }}
      draggable={true}
      className={styles.draggable__container}
    >
      <div className={styles.draggable}>
        <TextField
          disabled={!isEditable}
          multiline
          variant="standard"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <TextField
          multiline
          disabled={!isEditable}
          variant="standard"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <div>
          <span
            onClick={() => {
              onCheckoutEdit();
            }}
          >
            <ModeIcon />
          </span>
          {isEditable && (
            <span onClick={onSave}>
              <LibraryAddCheckIcon />
            </span>
          )}
          <span
            onClick={() => {
              onDelete(props.id);
            }}
          >
            <DeleteIcon />
          </span>
        </div>
      </div>
    </div>
  );
}

export default DraggableCard;
