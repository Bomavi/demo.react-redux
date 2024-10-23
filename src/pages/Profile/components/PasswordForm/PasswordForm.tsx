import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';

import PasswordInput from 'src/components/PasswordInput';

function PasswordForm() {
  const handleSubmit = () => {
    //
  };

  return (
    <form>
      <Grid container spacing={2}>
        <Grid xs={12}>
          <PasswordInput fullWidth label="Old Password" />
        </Grid>
        <Grid xs={12}>
          <PasswordInput fullWidth label="New Password" />
        </Grid>
        <Grid xs={12}>
          <PasswordInput fullWidth label="Repeat Password" />
        </Grid>
        <Grid xs={12} display="flex" justifyContent="flex-end" mt={2}>
          <Button variant="contained" size="large" onClick={handleSubmit}>
            Save
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default PasswordForm;