import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Card } from '@mui/material';
import Typography from '@mui/material/Typography';
export default function Signin() {
  return (
    <Card variant="outlined">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Box
              component="img"
              sx={{
                mt: '3ch',
                ml: '3ch',
                mb: '5ch',
                height: 500,
                width: 500,
                // maxHeight: { xs: 600, md: 500 },
                // maxWidth: { xs: 600, md: 500 },
              }}
              alt="The house from the offer."
              src="https://img.freepik.com/free-vector/add-cart-concept-illustration_114360-1445.jpg?w=740&t=st=1663064620~exp=1663065220~hmac=c7b2647678fb7bc0d5d432c4301e5cda82da3c37f30d36b9986980d7489b688f"
            />
          </Grid>
          <Grid item xs={6}>
            <FormGroup sx={{ mt: '15ch', ml: '6ch' }}>
              <div>
                <Typography variant="h4" gutterBottom>
                  Sign In
                </Typography>
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
                <Button variant="contained" sx={{ ml: 4 }} >Sign Up </Button>
                <FormControlLabel sx={{ p: 2, color: 'text.secondary' }} control={<Checkbox defaultChecked />} label="Remember me" />
              </div>
              <Button size="small" sx={{ display: 'block', ml: 4, color: 'text.secondary' }}>Forget Password</Button>
            </FormGroup>
          </Grid>
        </Grid>
      </Box>
      <Typography component="div">
        <Box sx={{ textTransform: 'capitalize', m: 1, fontWeight: 'light' }}>Copy Right Md. Atikur Rahman</Box>
      </Typography>
    </Card>
  );
}
