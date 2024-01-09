import { IconButton } from '@mui/material';
import { ReactNode } from 'react';

function ButtonIcon({ icon, clickButton }: { icon: ReactNode; clickButton: () => void }) {
  return (
    <IconButton onClick={clickButton} aria-label="delete" size="small">
      {icon}
    </IconButton>
  );
}

export default ButtonIcon;
