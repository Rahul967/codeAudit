import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import "./dash.css";

const Dashboard = () => {
  
  const location = useLocation();
  const answer = location.state?.answer || "No answer received";

  return (

    <Box className="dashboard-container">
      <Box className="left-column" mt={10}>
      
         <Box className="section1">
          <Heading as="h3" size="md" color="white" mb={4}>
          Inline Comments for Improvement
          </Heading>
          <Box padding={6} color="white"  height="80%" overflowY="auto"  backgroundColor={"black"}>
            {answer}
          </Box>
        </Box>
      </Box>
      
      <Box className="right-column">

        <Box className="section2">
          <Heading as="h3" size="md" color="white" mb={4}>
            Naming Standards
          </Heading>
          <Box padding={6} color="white"  height="80%" overflowY="auto"  backgroundColor={"black"}>
            {answer}
          </Box>
        </Box>

        <Box  className="section3">
          <Heading as="h3" size="md" color="white" mb={4}>
            Time Complexity
          </Heading>
          <Box  backgroundColor={"black"} padding={6} color="white" mb={4} height="80%" overflowY="auto">
            {answer}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
