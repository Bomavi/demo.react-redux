import { useState } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';

import Input from 'src/components/Input';

function InformationForm() {
  const [isEditable, setIsEditable] = useState(false);

  const handleEditStart = () => {
    setIsEditable(true);
  };

  const handleEditCancel = () => {
    setIsEditable(false);
  };

  return (
    <form>
      <Grid container spacing={2}>
        <Grid xs={6}>
          <Input fullWidth disabled={!isEditable} label="First Name" />
        </Grid>
        <Grid xs={6}>
          <Input fullWidth disabled={!isEditable} label="Last Name" />
        </Grid>
        <Grid xs={12}>
          <Input
            fullWidth
            multiline
            disabled={!isEditable}
            rows={4}
            label="BIO"
          />
        </Grid>
        <Grid xs={12} display="flex" justifyContent="flex-end" mt={2}>
          {!isEditable && (
            <Button variant="contained" size="large" onClick={handleEditStart}>
              Edit
            </Button>
          )}
          {isEditable && (
            <Box display="flex" flex={1} justifyContent="space-between">
              <Button
                variant="outlined"
                size="large"
                color="error"
                onClick={handleEditCancel}
              >
                Cancel
              </Button>
              <Button variant="contained" size="large">
                Save
              </Button>
            </Box>
          )}
        </Grid>
      </Grid>
    </form>
  );
}

export default InformationForm;
