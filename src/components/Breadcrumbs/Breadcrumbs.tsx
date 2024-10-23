import { ReactNode } from 'react';

import { useMatches } from 'react-router-dom';
import { mdiMenuRight } from '@mdi/js';
import Icon from '@mdi/react';

import Box from '@mui/material/Box';
import MuiBreadcrumbs from '@mui/material/Breadcrumbs';

type ParamsSchema = Record<string, unknown>;

interface MatchSchema {
  handle: { crumb: (params: ParamsSchema) => ReactNode };
  params: ParamsSchema;
}

function Breadcrumbs() {
  const matches = useMatches() as MatchSchema[];

  const breadcrumbs = matches
    .filter((match) => Boolean(match.handle.crumb))
    .map((match) => {
      return match.handle.crumb(match.params);
    });

  return (
    <MuiBreadcrumbs separator={<Icon path={mdiMenuRight} size={0.8} />}>
      {breadcrumbs.map((crumb, index) => (
        <Box key={index}>{crumb}</Box>
      ))}
    </MuiBreadcrumbs>
  );
}

export default Breadcrumbs;
