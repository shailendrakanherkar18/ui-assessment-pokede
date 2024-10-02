import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createUseStyles } from 'react-jss';

interface Props {
  label: string;
  value: string;
}

export const LabelValue = (props: Props) => {
  const { label, value } = props;
  const classes = useStyles();

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mb={2}>
      <Typography
        variant="subtitle1"
        color="textSecondary"
        component="span"
        sx={{ fontWeight: 'bold', marginRight: 1 }}
      >
        {label}:
      </Typography>
      <Typography
        variant="h6"
        component="span"
        sx={{ fontWeight: 'bold', marginRight: 1, color: '#000' }}
      >
        {value}
      </Typography>
    </Box>
  );
};

const useStyles = createUseStyles({
  labelValueContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1rem',
  },
  label: {
    fontWeight: 'bold',
    marginRight: '1rem',
    color: '#757575', // You can use Material UI color codes or custom ones
  },
  value: {
    color: '#000', // Default black or any other custom color
  },
});
