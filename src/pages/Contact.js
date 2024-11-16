import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  TextField,
  Button,
} from '@mui/material';
import { motion } from 'framer-motion';
import { Email, Phone, LocationOn } from '@mui/icons-material';

const ContactInfo = ({ icon, title, content }) => (
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      mb: 3,
    }}
  >
    <Box
      sx={{
        mr: 2,
        bgcolor: 'primary.main',
        color: 'white',
        p: 1,
        borderRadius: '50%',
      }}
    >
      {icon}
    </Box>
    <Box>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1" color="text.secondary">
        {content}
      </Typography>
    </Box>
  </Box>
);

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(new FormData(form)).toString(),
    })
      .then(() => {
        // Reset form
        form.reset();
        // Show success message (you can add a snackbar or alert here)
        alert('Message sent successfully!');
      })
      .catch((error) => {
        // Show error message
        console.error(error);
        alert('Error sending message. Please try again.');
      });
  };

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
          <Typography variant="h2" align="center" gutterBottom>
            Get in Touch
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            gutterBottom
            sx={{ mb: 6 }}
          >
            Interested in commissioning artwork or have questions? I'd love to hear from you!
          </Typography>

          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Paper elevation={3} sx={{ p: 4 }}>
                  <Typography variant="h4" gutterBottom>
                    Contact Information
                  </Typography>
                  <Box sx={{ mt: 4 }}>
                    <ContactInfo
                      icon={<Email />}
                      title="Email"
                      content="aviva@example.com"
                    />
                    <ContactInfo
                      icon={<Phone />}
                      title="Phone"
                      content="+1 (555) 123-4567"
                    />
                    <ContactInfo
                      icon={<LocationOn />}
                      title="Location"
                      content="Jerusalem, Israel"
                    />
                  </Box>
                </Paper>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Paper elevation={3} sx={{ p: 4 }}>
                  <Typography variant="h4" gutterBottom>
                    Send a Message
                  </Typography>
                  <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{ mt: 4 }}
                    data-netlify="true"
                    name="contact"
                    method="POST"
                  >
                    <input type="hidden" name="form-name" value="contact" />
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          fullWidth
                          label="First Name"
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          fullWidth
                          label="Last Name"
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          label="Email"
                          type="email"
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          label="Message"
                          multiline
                          rows={4}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          variant="contained"
                          color="primary"
                          size="large"
                          fullWidth
                        >
                          Send Message
                        </Button>
                      </Grid>
                    </Grid>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </motion.div>
  );
};

export default Contact;
