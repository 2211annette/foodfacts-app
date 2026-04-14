import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'

function ErrorMessage({ message }) {
  return (
    <Box sx={{ my: 2 }}>
      <Alert severity="error">
        {message || 'Something went wrong.'}
      </Alert>
    </Box>
  )
}

export default ErrorMessage