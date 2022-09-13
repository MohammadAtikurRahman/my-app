import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Card from '@mui/material/Card';

export default function Signin() {
  return (
    <FormGroup>
      <Card variant="outlined" sx={{ pt: 4, pb: 4 }}>
        <div>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '20ch' }
            }}
            noValidate
            autoComplete="off"
          >
            <TextField id="outlined-basic" label="Name" variant="outlined" size="small" />
          </Box>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '20ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField id="outlined-basic" label="Password" variant="outlined" size="small" />
          </Box>
          <Button variant="contained" sx={{ ml: 4 }} >Sign in </Button>
          <FormControlLabel sx={{ p: 2, color: 'text.secondary' }} control={<Checkbox defaultChecked />} label="Remember me" />
          <Button size="small" sx={{ display: 'block', ml: 4, color: 'text.secondary' }}>Forget Password</Button>
        </div>
      </Card>
    </FormGroup>
  );
}
