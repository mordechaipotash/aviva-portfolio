import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardMedia,
  Dialog,
  IconButton,
  useTheme,
  useMediaQuery,
  Tabs,
  Tab,
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

const categories = {
  all: 'All Works',
  featured: 'Featured Series',
  portraits: 'Portraits',
  nature: 'Nature & Landscapes',
  purim: 'Purim Collection',
};

const artworks = [
  {
    id: 1,
    src: 'Aviva Final (1).JPG',
    title: 'Nature Exploration',
    category: ['featured', 'nature'],
  },
  {
    id: 2,
    src: 'Aviva Final (2).JPG',
    title: 'Tree Adventure',
    category: ['featured', 'nature'],
  },
  {
    id: 3,
    src: 'Aviva Final (3).JPG',
    title: 'Playful Discovery',
    category: ['featured', 'nature'],
  },
  {
    id: 4,
    src: 'Aviva Final (4).JPG',
    title: 'Teddy's Window',
    category: ['featured'],
  },
  {
    id: 5,
    src: 'Aviva Final (5).JPG',
    title: 'Butterfly Dance',
    category: ['featured', 'nature'],
  },
  {
    id: 6,
    src: 'Aviva (1).JPG',
    title: 'Healthcare Hero',
    category: ['portraits'],
  },
  {
    id: 7,
    src: 'Aviva (15).JPG',
    title: 'Purim Clown',
    category: ['purim'],
  },
  {
    id: 8,
    src: 'Aviva (17).JPG',
    title: 'Purim Celebration',
    category: ['purim'],
  },
  {
    id: 9,
    src: 'Aviva (18).JPG',
    title: 'Magical Purim',
    category: ['purim'],
  },
  {
    id: 10,
    src: 'Aviva (19).JPG',
    title: 'Mexican Style Purim',
    category: ['purim'],
  },
  {
    id: 11,
    src: 'Aviva (20).JPG',
    title: 'Winter House',
    category: ['nature'],
  },
  {
    id: 12,
    src: 'Aviva (21).JPG',
    title: 'Elegant Cat',
    category: ['portraits'],
  },
  {
    id: 13,
    src: 'Aviva (22).JPG',
    title: 'Plush Friends',
    category: ['portraits'],
  },
  {
    id: 14,
    src: 'Aviva (23).JPG',
    title: 'Girl with Chickens',
    category: ['portraits', 'nature'],
  },
  {
    id: 15,
    src: 'Aviva (24).jpg',
    title: 'Birthday Celebration',
    category: ['portraits'],
  },
  {
    id: 16,
    src: 'Aviva (25).jpg',
    title: 'Boy and Frog',
    category: ['featured', 'portraits', 'nature'],
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentCategory, setCurrentCategory] = useState('all');
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleImageClick = (artwork) => {
    setSelectedImage(artwork);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  const handleCategoryChange = (event, newValue) => {
    setCurrentCategory(newValue);
  };

  const filteredArtworks = artworks.filter((artwork) =>
    currentCategory === 'all' ? true : artwork.category.includes(currentCategory)
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Box sx={{ bgcolor: 'background.default', pt: 12, pb: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h2" align="center" gutterBottom>
            Gallery
          </Typography>
          <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
            <Tabs
              value={currentCategory}
              onChange={handleCategoryChange}
              variant="scrollable"
              scrollButtons="auto"
              allowScrollButtonsMobile
              centered
            >
              {Object.entries(categories).map(([key, label]) => (
                <Tab key={key} value={key} label={label} />
              ))}
            </Tabs>
          </Box>
          <Grid container spacing={3}>
            <AnimatePresence>
              {filteredArtworks.map((artwork) => (
                <Grid item xs={12} sm={6} md={4} key={artwork.id}>
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card
                      sx={{
                        cursor: 'pointer',
                        transition: '0.3s',
                        '&:hover': {
                          transform: 'scale(1.02)',
                          boxShadow: theme.shadows[8],
                        },
                      }}
                      onClick={() => handleImageClick(artwork)}
                    >
                      <CardMedia
                        component="img"
                        height="300"
                        image={artwork.src}
                        alt={artwork.title}
                        sx={{ objectFit: 'cover' }}
                      />
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </AnimatePresence>
          </Grid>
        </Container>
      </Box>

      <Dialog
        fullScreen={fullScreen}
        open={Boolean(selectedImage)}
        onClose={handleClose}
        maxWidth="lg"
      >
        {selectedImage && (
          <Box sx={{ position: 'relative' }}>
            <IconButton
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: 'white',
                bgcolor: 'rgba(0,0,0,0.5)',
                '&:hover': {
                  bgcolor: 'rgba(0,0,0,0.7)',
                },
              }}
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
            <Box
              component="img"
              src={selectedImage.src}
              alt={selectedImage.title}
              sx={{
                width: '100%',
                height: 'auto',
                maxHeight: '90vh',
                objectFit: 'contain',
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                bgcolor: 'rgba(0,0,0,0.7)',
                color: 'white',
                p: 2,
              }}
            >
              <Typography variant="h6">{selectedImage.title}</Typography>
            </Box>
          </Box>
        )}
      </Dialog>
    </motion.div>
  );
};

export default Gallery;
