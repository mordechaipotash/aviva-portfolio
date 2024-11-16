import React from 'react';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SkillCard = ({ title, description, delay }) => {
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
      <Paper
        elevation={3}
        sx={{
          p: 3,
          height: '100%',
          transition: '0.3s',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: 6,
          },
        }}
      >
        <Typography variant="h5" gutterBottom color="primary">
          {title}
        </Typography>
        <Typography variant="body1">{description}</Typography>
      </Paper>
    </motion.div>
  );
};

const About = () => {
  const skills = [
    {
      title: 'Watercolor Mastery',
      description: 'Expert use of watercolor techniques to create depth, texture, and emotion in every piece.',
    },
    {
      title: 'Ink Illustration',
      description: 'Precise and expressive ink work that brings characters and scenes to life with detail and charm.',
    },
    {
      title: 'Storytelling',
      description: 'Ability to capture narratives and emotions through carefully composed scenes and character interactions.',
    },
    {
      title: 'Cultural Art',
      description: 'Specialization in Jewish themes and holiday celebrations, particularly Purim illustrations.',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Box
        sx={{
          bgcolor: 'background.default',
          pt: 12,
          pb: 8,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <Typography variant="h2" gutterBottom>
                  About Aviva
                </Typography>
                <Typography variant="body1" paragraph>
                  Aviva is a talented artist who specializes in watercolor and ink illustrations. Her work captures the beauty of everyday moments, bringing stories to life through her unique artistic perspective.
                </Typography>
                <Typography variant="body1" paragraph>
                  With a keen eye for detail and a passion for storytelling, Aviva creates artwork that resonates with viewers of all ages. Her illustrations often feature themes of nature, childhood wonder, and Jewish cultural celebrations.
                </Typography>
                <Typography variant="body1" paragraph>
                  Each piece is carefully crafted to evoke emotion and create connections, whether it's through her charming character portraits, serene landscapes, or festive Purim illustrations.
                </Typography>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="Aviva (25).jpg"
                alt="Aviva's Favorite Work"
                sx={{
                  width: '100%',
                  borderRadius: 2,
                  boxShadow: 3,
                }}
              />
              <Typography
                variant="caption"
                display="block"
                align="center"
                sx={{ mt: 2 }}
              >
                "Boy and Frog" - One of Aviva's favorite pieces, showcasing her mastery of light, reflection, and storytelling
              </Typography>
            </Grid>
          </Grid>

          <Box sx={{ mt: 8 }}>
            <Typography variant="h3" gutterBottom align="center">
              Artistic Expertise
            </Typography>
            <Grid container spacing={4} sx={{ mt: 2 }}>
              {skills.map((skill, index) => (
                <Grid item xs={12} sm={6} key={skill.title}>
                  <SkillCard
                    title={skill.title}
                    description={skill.description}
                    delay={index * 0.2}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </motion.div>
  );
};

export default About;
