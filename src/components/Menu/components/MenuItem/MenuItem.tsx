import { ReactNode } from 'react';

import { useNavigate } from 'react-router-dom';

import ListItemIcon from '@mui/material/ListItemIcon';
import MuiMenuItem from '@mui/material/MenuItem';

interface Props {
  children: ReactNode;
  icon?: ReactNode;
  to: string;
  onClick?: () => void;
}

function MenuItem({ children, icon, to, onClick }: Props) {
  const navigate = useNavigate();

  const handleNavigateTo = () => {
    navigate(to);
    onClick?.();
  };

  return (
    <MuiMenuItem onClick={handleNavigateTo}>
      {icon && <ListItemIcon>{icon}</ListItemIcon>}
      {children}
    </MuiMenuItem>
  );
}

export default MenuItem;
