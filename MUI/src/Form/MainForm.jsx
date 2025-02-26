/* eslint-disable no-unused-vars */
import { useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Grid2,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from '@mui/material';

export default function MainForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [awesome, setAwesome] = useState([]);
  const [gender, setGender] = useState('');
  const [country, setCountry] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('submit');
  };

  const handleReset = () => {
    setUsername('');
    setEmail('');
    setPassword('');
    setAwesome([]);
    setGender('');
    setCountry('');
  };

  const handleAwesome = (event) => {
    if (!awesome.includes(event.target.value))
      setAwesome([...awesome, event.target.value]);
    else setAwesome(awesome.filter((item) => item !== event.target.value));
  };

  // const handleCountry = (event) => {
  //   if (!country.includes(event.target.value))
  //     setCountry([...country, event.target.value]);
  //   else setCountry(country.filter((item) => item !== event.target.value));
  // };

  return (
    <>
      {/* {console.log(awesome)} */}
      <Container>
        <Box
          component="form"
          display={'flex'}
          flexDirection={'column'}
          alignItems={'center'}
          alignContent={'center'}
          justifyContent={'center'}
          onSubmit={handleSubmit}
          onReset={handleReset}
        >
          <Grid2
            width={'100%'}
            container
            padding={0}
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            <Grid2 size={{ xs: 12, md: 6 }} gridAutoFlow={'row'}>
              <TextField
                variant="outlined"
                margin="normal"
                label="Username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                fullWidth
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }} gridAutoFlow={'row'}>
              <TextField
                variant="outlined"
                margin="normal"
                name="password"
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
              />
            </Grid2>
          </Grid2>

          <TextField
            variant="outlined"
            margin="normal"
            label="Email Address"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ width: '100%' }}
          />
          <FormControl margin="normal" fullWidth>
            <InputLabel>Country</InputLabel>
            <Select
              fullWidth
              label="Country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <MenuItem value="egypt">Egypt</MenuItem>
              <MenuItem value="usa">USA</MenuItem>
              <MenuItem value="japan">Japan</MenuItem>
            </Select>
          </FormControl>
          <Grid2
            width={'100%'}
            container
            padding={0}
            spacing={5}
            alignItems="start"
            justifyContent="space-around"
            sx={{
              '@media (max-width: 600px)': {
                flexDirection: 'column',
                alignItems: 'center',
              },
            }}
          >
            <FormControl>
              <FormLabel>How Awesome Are You?</FormLabel>
              <FormControlLabel
                control={<Checkbox />}
                checked={awesome.includes('Very Awesome')}
                label="Very Awesome"
                value={'Very Awesome'}
                onClick={handleAwesome}
              ></FormControlLabel>
              <FormControlLabel
                control={<Checkbox />}
                checked={awesome.includes('Extremly Awesome')}
                label="Extremly Awesome"
                value={'Extremly Awesome'}
                onClick={handleAwesome}
              ></FormControlLabel>
              <FormControlLabel
                control={<Checkbox />}
                checked={awesome.includes('Awesomeness Itself')}
                label="Awesomeness Itself"
                value={'Awesomeness Itself'}
                onClick={handleAwesome}
              ></FormControlLabel>
            </FormControl>
            <FormControl>
              <FormLabel>Gender</FormLabel>
              <RadioGroup
                name="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                sx={{
                  flexDirection: 'row',
                }}
              >
                <FormControlLabel
                  checked={gender === 'male'}
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="female"
                  checked={gender === 'female'}
                  control={<Radio />}
                  label="Female"
                />
              </RadioGroup>
            </FormControl>
          </Grid2>
          <Grid2
            width={'100%'}
            container
            padding={0}
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            <Button variant="contained" type="submit">
              Submit
            </Button>
            <Button variant="outlined" type="reset">
              Reset
            </Button>
          </Grid2>
        </Box>
      </Container>
    </>
  );
}
