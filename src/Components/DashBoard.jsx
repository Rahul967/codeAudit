


import React, { useEffect, useState } from 'react';
import { Box, Heading, Text, Button, useToast } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import "./dash.css";

const Dashboard = () => {
  const location = useLocation();
  const toast = useToast();

  // Define a default answer structure
  const defaultAnswer = {
    title: "",
    feedback: {
      "Inline Comments": [],
      Suggestions: []
    },
    summary: {
      Strengths: [],
      "Areas for Improvement": []
    }
  };

  // Retrieve data from location state or use default
  const initialAnswer = location.state?.answer || JSON.stringify(defaultAnswer);

  // Function to safely parse JSON
  const safeParseJSON = (jsonString, defaultValue) => {
    try {
      return JSON.parse(jsonString);
    } catch (error) {
      console.error("JSON parsing error:", error);
      toast({
        title: "Error parsing data.",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      return defaultValue;
    }
  };

  // Initialize state with parsed initial answer
  const [parsedAnswer, setParsedAnswer] = useState(() => {
    const storedAnswer = sessionStorage.getItem('parsedAnswer');
    return storedAnswer ? safeParseJSON(storedAnswer, defaultAnswer) : safeParseJSON(initialAnswer, defaultAnswer);
  });

  useEffect(() => {
    // Store parsedAnswer in sessionStorage on changes
    sessionStorage.setItem('parsedAnswer', JSON.stringify(parsedAnswer));
  }, [parsedAnswer]);

  useEffect(() => {
    // Retrieve data from sessionStorage and update state on component mount
    const storedAnswer = sessionStorage.getItem('parsedAnswer');
    if (storedAnswer) {
      setParsedAnswer(safeParseJSON(storedAnswer, defaultAnswer));
    }
  }, []);

  // Function to clear sessionStorage
  const clearSessionStorage = () => {
    sessionStorage.clear();
    setParsedAnswer(defaultAnswer);
  };

  return (
    <Box className="dashboard-container">
      <Box className="left-column" mt={10}>
        <Box className="section1">
          <Heading as="h3" size="md" color="white" mb={4}>
            Inline Comments
          </Heading>
          <Box padding={6} color="white" height="80%" overflowY="auto" backgroundColor={"black"}>
            {parsedAnswer.feedback["Inline Comments"].length > 0 ? (
              parsedAnswer.feedback["Inline Comments"].map((comment, index) => (
                <Text key={index} mb={2}>
                  {comment}
                </Text>
              ))
            ) : (
              <Text>No inline comments available</Text>
            )}
          </Box>
        </Box>
      </Box>

      <Box className="right-column">
        <Box className="section2">
          <Heading as="h3" size="md" color="white" mb={4}>
            Suggestions
          </Heading>
          <Box padding={6} color="white" height="80%" overflowY="auto" backgroundColor={"black"}>
            {parsedAnswer.feedback.Suggestions.length > 0 ? (
              parsedAnswer.feedback.Suggestions.map((suggestion, index) => (
                <Text key={index} mb={2}>
                  {suggestion}
                </Text>
              ))
            ) : (
              <Text>No suggestions available</Text>
            )}
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
            {parsedAnswer.summary.Strengths.length > 0 ? (
              parsedAnswer.summary.Strengths.map((strength, index) => (
                <Text key={index} mb={2}>
                  {strength}
                </Text>
              ))
            ) : (
              <Text>No strengths available</Text>
            )}
            <Heading as="h4" size="sm" color="white" mb={2} mt={4}>
              Areas for Improvement
            </Heading>
            {parsedAnswer.summary["Areas for Improvement"].length > 0 ? (
              parsedAnswer.summary["Areas for Improvement"].map((improvement, index) => (
                <Text key={index} mb={2}>
                  {improvement}
                </Text>
              ))
            ) : (
              <Text>No areas for improvement available</Text>
            )}
          </Box>
        </Box>
      </Box>

      <Box className="clear-button" textAlign="center">
        <Button
          onClick={clearSessionStorage}
          variant="outline"
          _hover={{ backgroundColor: "black", color: "white" }}
          className="custom-button"
        >
          Clear
        </Button>
      </Box>
    </Box>
  );
};

export default Dashboard;
