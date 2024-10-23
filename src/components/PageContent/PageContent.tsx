import { ReactNode } from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import Breadcrumbs from 'src/components/Breadcrumbs';

interface Props {
  children?: ReactNode;
  tabBar?: ReactNode;
  title?: string;
}

function PageContent({ children, tabBar, title }: Props) {
  return (
    <Box>
      <Box sx={{ ml: 1 }}>
        {title && (
          <Typography
            noWrap
            variant="h5"
            sx={{ fontWeight: 600, mt: 8, mb: 1 }}
          >
            {title}
          </Typography>
        )}
        <Breadcrumbs />
      </Box>
      <Paper elevation={0} sx={{ marginTop: 3, p: 6 }}>
        <Box display="flex" justifyContent="space-between">
          {tabBar}
        </Box>
        {children}
      </Paper>
    </Box>
  );
}

export default PageContent;
