import { Link as RouterLink } from 'react-router-dom';

import Link from '@mui/material/Link';

import type { LinkProps } from 'react-router-dom';

function NavLink({ children, to }: LinkProps) {
  return (
    <Link component={RouterLink} to={to} underline="hover" color="inherit">
      {children}
    </Link>
  );
}

export default NavLink;
