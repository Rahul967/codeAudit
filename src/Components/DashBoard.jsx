
import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import "./dash.css";

const Dashboard = () => {
  const location = useLocation();
  const answer = location.state?.answer || '{"title": "", "feedback": {"Inline Comments": [], "Suggestions": []}, "summary": {"Strengths": [], "Areas for Improvement": []}}';

  // Parse the answer JSON
  const parsedAnswer = JSON.parse(answer);

  return (
    <Box className="dashboard-container">
      <Box className="left-column" mt={10}>
        <Box className="section1">
          <Heading as="h3" size="md" color="white" mb={4}>
            Inline Comments
          </Heading>
          <Box padding={6} color="white" height="80%" overflowY="auto" backgroundColor={"black"}>
            {parsedAnswer.feedback["Inline Comments"].map((comment, index) => (
              <Text key={index} mb={2}>
                {comment}
              </Text>
            ))}
          </Box>
        </Box>
      </Box>

      <Box className="right-column">
        <Box className="section2">
          <Heading as="h3" size="md" color="white" mb={4}>
            Suggestions
          </Heading>
          <Box padding={6} color="white" height="80%" overflowY="auto" backgroundColor={"black"}>
            {parsedAnswer.feedback.Suggestions.map((suggestion, index) => (
              <Text key={index} mb={2}>
                {suggestion}
              </Text>
            ))}
          </Box>
        </Box>

        <Box className="section3">
          <Heading as="h3" size="md" color="white" mb={4}>
            Summary
          </Heading>
          <Box backgroundColor={"black"} padding={6} color="white" mb={4} height="80%" overflowY="auto">
            <Heading as="h4" size="sm" color="white" mb={2}>
              Strengths
            </Heading>
            {parsedAnswer.summary.Strengths.map((strength, index) => (
              <Text key={index} mb={2}>
                {strength}
              </Text>
            ))}
            <Heading as="h4" size="sm" color="white" mb={2} mt={4}>
              Areas for Improvement
            </Heading>
            {parsedAnswer.summary["Areas for Improvement"].map((improvement, index) => (
              <Text key={index} mb={2}>
                {improvement}
              </Text>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
