import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import FormControlLabel from '@mui/material/FormControlLabel';

import PageContent from 'src/components/PageContent';
import Switch from 'src/components/Switch';

function Settings() {
  return (
    <PageContent title="Settings">
      <Box sx={{ mt: 3 }}>
        <form>
          <Grid container spacing={2}>
            <Grid xs={12}>
              <FormControlLabel
                control={<Switch defaultChecked sx={{ mr: 2 }} />}
                label="Mocked Setting 1"
              />
            </Grid>
            <Grid xs={12}>
              <FormControlLabel
                control={<Switch sx={{ mr: 2 }} />}
                label="Mocked Setting 2"
              />
            </Grid>
            <Grid xs={12}>
              <FormControlLabel
                control={<Switch defaultChecked sx={{ mr: 2 }} />}
                label="Mocked Setting 3"
              />
            </Grid>
          </Grid>
        </form>
      </Box>
    </PageContent>
  );
}

export default Settings;
