import { LinkProps, Link as RouterLink } from 'react-router-dom';

import Link from '@mui/material/Link';

function NavLink({ children, to }: LinkProps) {
  return (
    <Link component={RouterLink} to={to} underline="hover" color="inherit">
      {children}
    </Link>
  );
}

export default NavLink;
