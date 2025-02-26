import { Box, Typography } from '@mui/material';
import { Grid2 } from '@mui/material';
import img1 from '../assets/images/image-retro-pcs.jpg';
import img2 from '../assets/images/image-top-laptops.jpg';
import img3 from '../assets/images/image-gaming-growth.jpg';

export default function Card() {
  return (
    <>
      <Box my={2}>
        <Grid2 container spacing={2}>
          <Grid2 size={{ xs: 12, sm: 4 }}>
            <Grid2 container spacing={2}>
              <Grid2 size={4}>
                <Box
                  component="img"
                  src={img1}
                  sx={{
                    objectFit: 'cover',
                    width: '100%',
                  }}
                />
              </Grid2>
              <Grid2 size={8}>
                <Box>
                  <Typography
                    variant="h4"
                    fontWeight={800}
                    color="hsl(5, 85%, 63%)"
                  >
                    01
                  </Typography>
                  <Typography
                    variant="h6"
                    fontWeight={800}
                    sx={{ '&:hover': { color: 'hsl(5, 85%, 63%)' } }}
                  >
                    Reviving Retro PCs
                  </Typography>
                  <Typography
                    variant="body2"
                    fontWeight={400}
                    color="hsl(236, 13%, 42%)"
                  >
                    What happens when old PCs are given modern upgrades?
                  </Typography>
                </Box>
              </Grid2>
            </Grid2>
          </Grid2>

          <Grid2 size={{ xs: 12, sm: 4 }}>
            <Grid2 container spacing={2}>
              <Grid2 size={4}>
                <Box
                  component="img"
                  src={img2}
                  sx={{
                    objectFit: 'cover',
                    width: '100%',
                  }}
                />
              </Grid2>
              <Grid2 size={8}>
                <Box>
                  <Typography
                    variant="h4"
                    fontWeight={800}
                    color="hsl(5, 85%, 63%)"
                  >
                    02
                  </Typography>
                  <Typography
                    variant="h6"
                    fontWeight={800}
                    sx={{ '&:hover': { color: 'hsl(5, 85%, 63%)' } }}
                  >
                    Top 10 Laptops of 2022
                  </Typography>
                  <Typography
                    variant="body2"
                    fontWeight={400}
                    color="hsl(236, 13%, 42%)"
                  >
                    Our best picks for various needs and budgets.
                  </Typography>
                </Box>
              </Grid2>
            </Grid2>
          </Grid2>

          <Grid2 size={{ xs: 12, sm: 4 }}>
            <Grid2 container spacing={2}>
              <Grid2 size={4}>
                <Box
                  component="img"
                  src={img3}
                  sx={{
                    objectFit: 'cover',
                    width: '100%',
                  }}
                />
              </Grid2>
              <Grid2 size={8}>
                <Box>
                  <Typography
                    variant="h4"
                    fontWeight={800}
                    color="hsl(5, 85%, 63%)"
                  >
                    03
                  </Typography>
                  <Typography
                    variant="h6"
                    fontWeight={800}
                    sx={{ '&:hover': { color: 'hsl(5, 85%, 63%)' } }}
                  >
                    The Growth of Gaming
                  </Typography>
                  <Typography
                    variant="body2"
                    fontWeight={400}
                    color="hsl(236, 13%, 42%)"
                  >
                    How the pandemic has sparked fresh opportunities.
                  </Typography>
                </Box>
              </Grid2>
            </Grid2>
          </Grid2>
        </Grid2>
      </Box>
    </>
  );
}
