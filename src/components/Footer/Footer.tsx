import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <Box
      sx={{
        display: 'flex',
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography>
        {currentYear} &copy; created by{' '}
        <Typography component="a" href="https://bozhenov.com" color="secondary">
          @Bomavi
        </Typography>{' '}
      </Typography>
    </Box>
  );
}

export default Footer;
