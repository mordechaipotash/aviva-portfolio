import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Button, Box, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FeaturedImage = ({ src, alt, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      <Box
        component="img"
        src={src}
        alt={alt}
        sx={{
          width: '100%',
          height: '300px',
          objectFit: 'cover',
          borderRadius: 2,
          boxShadow: 3,
        }}
      />
    </motion.div>
  );
};

const Home = () => {
  const featuredImages = [
    { src: 'Aviva Final (1).JPG', alt: 'Featured Artwork 1' },
    { src: 'Aviva Final (2).JPG', alt: 'Featured Artwork 2' },
    { src: 'Aviva Final (3).JPG', alt: 'Featured Artwork 3' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Box
        sx={{
          background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(Aviva (25).jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          color: 'white',
        }}
      >
        <Container>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h1" gutterBottom>
              Welcome to Aviva's Art Portfolio
            </Typography>
            <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
              Exploring imagination through watercolor and ink
            </Typography>
            <Button
              component={Link}
              to="/gallery"
              variant="contained"
              color="secondary"
              size="large"
            >
              View Gallery
            </Button>
          </motion.div>
        </Container>
      </Box>

      <Container sx={{ py: 8 }}>
        <Typography
          variant="h2"
          gutterBottom
          align="center"
          sx={{ mb: 6 }}
        >
          Featured Works
        </Typography>
        <Grid container spacing={4}>
          {featuredImages.map((image, index) => (
            <Grid item xs={12} md={4} key={index}>
              <FeaturedImage
                src={image.src}
                alt={image.alt}
                delay={index * 0.2}
              />
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 8 }}>
        <Container>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h3" gutterBottom>
                About the Artist
              </Typography>
              <Typography variant="body1" paragraph>
                Aviva's artwork captures the beauty of everyday moments through a unique blend of watercolor and ink techniques. Her illustrations bring stories to life with warmth and whimsy.
              </Typography>
              <Button
                component={Link}
                to="/about"
                variant="outlined"
                color="inherit"
                size="large"
              >
                Learn More
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="Aviva (1).JPG"
                alt="Artist Profile"
                sx={{
                  width: '100%',
                  borderRadius: 2,
                  boxShadow: 3,
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </motion.div>
  );
};

export default Home;
