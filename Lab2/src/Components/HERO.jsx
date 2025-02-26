import { Box, Button, Divider, Grid2, Typography } from '@mui/material';
import DHero from '../assets/images/image-web-3-desktop.jpg';
import MHero from '../assets/images/image-web-3-mobile.jpg';

export default function HERO() {
  return (
    <>
      <Box my={3}>
        <Grid2 container spacing={2}>
          {/* Left/First side of HERO */}
          <Grid2 size={{ xs: 12, sm: 8 }}>
            <Grid2 container spacing={2}>
              {/* Image */}
              <Grid2 size={12}>
                <Box
                  component="img"
                  sx={{
                    objectFit: 'cover',
                    width: '100%',
                    content: {
                      xs: `url(${MHero})`,
                      sm: `url(${DHero})`,
                    },
                  }}
                />
              </Grid2>

              {/* Text */}
              <Grid2 size={{ xs: 12, sm: 6 }}>
                <Typography my={2} variant="h3" fontWeight={800}>
                  The Bright Future of Web 3.0?
                </Typography>
              </Grid2>

              {/* Paragraph with button */}
              <Grid2 size={{ xs: 12, sm: 6 }}>
                <Typography
                  my={2}
                  variant="body2"
                  fontSize={15}
                  color="hsl(236, 13%, 42%)"
                >
                  We dive into the next evolution of the web that claims to put
                  the power of the platforms back into the hands of the people.
                  But is it really fulfilling its promise?
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    mt: 2,
                    textTransform: 'uppercase',
                    backgroundColor: 'hsl(5, 85%, 63%)',
                    color: 'black',
                    borderRadius: 0,
                    width: '50%',
                    fontWeight: 700,
                    letterSpacing: 2,
                    '&:hover': {
                      backgroundColor: 'black',
                      color: 'white',
                    },
                  }}
                >
                  Read more
                </Button>
              </Grid2>
            </Grid2>
          </Grid2>

          {/* Right/Second side of HERO */}
          <Grid2 size={{ xs: 12, sm: 4 }}>
            <Box sx={{ bgcolor: 'hsl(240, 100%, 5%)', p: 2 }}>
              <Typography
                my={2}
                variant="h5"
                fontWeight={700}
                color="hsl(35, 77%, 62%)"
              >
                New
              </Typography>
              <Typography
                my={2}
                variant="body2"
                fontSize={15}
                fontWeight={700}
                sx={{ '&:hover': { color: 'hsl(35, 77%, 62%)' } }}
                color="white"
              >
                Hydrogen VS Electric Cars
              </Typography>
              <Typography
                my={2}
                variant="body2"
                fontSize={15}
                fontWeight={400}
                color="hsl(236, 7.20%, 62.00%)"
              >
                Will hydrogen-fueled cars ever catch up to EVs?
              </Typography>
              <Divider
                sx={{ borderColor: 'white', margin: '1rem 0', opacity: 0.4 }}
              />
              <Typography
                my={2}
                variant="body2"
                fontSize={15}
                fontWeight={700}
                sx={{ '&:hover': { color: 'hsl(35, 77%, 62%)' } }}
                color="white"
              >
                The downsides of AI artistry
              </Typography>{' '}
              <Typography
                my={2}
                variant="body2"
                fontSize={15}
                fontWeight={400}
                color="hsl(236, 7.20%, 62.00%)"
              >
                What are the possible adverse effects of on-demand AI image
                generation?
              </Typography>
              <Divider
                sx={{ borderColor: 'white', margin: '1rem 0', opacity: 0.4 }}
              />
              <Typography
                my={2}
                variant="body2"
                fontSize={15}
                fontWeight={700}
                sx={{ '&:hover': { color: 'hsl(35, 77%, 62%)' } }}
                color="white"
              >
                Is VC Funding Drying Up?
              </Typography>
              <Typography
                my={2}
                variant="body2"
                fontSize={15}
                fontWeight={400}
                color="hsl(236, 7.20%, 62.00%)"
              >
                Private funding by VC firms is down 50% YOY. We take a look at
                what that means.
              </Typography>
            </Box>
          </Grid2>
        </Grid2>
      </Box>
    </>
  );
}
