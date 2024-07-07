
import React, { useEffect, useState } from 'react';
import { Box, Button, Input, Select, Heading, useToast } from '@chakra-ui/react';
import MonacoEditor from '@monaco-editor/react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { auth } from './firebase'; // Ensure you import your Firebase auth configuration

// In-memory cache object
const cache = {};

const New = () => {
  const navigate = useNavigate();
  const toast = useToast();

  // Initialize state with cache values or defaults
  const [question, setQuestion] = useState(() => cache.question || '');
  const [userCode, setUserCode] = useState(() => cache.userCode || '');
  const [language, setLanguage] = useState(() => cache.language || 'javascript');
  const [generatingAnswer, setGeneratingAnswer] = useState(false);

  useEffect(() => {
    // Save state to cache on change
    cache.question = question;
    cache.userCode = userCode;
    cache.language = language;
  }, [question, userCode, language]);

  // Function to handle submission
  const generateAnswer = async (e) => {
    e.preventDefault();

    // Check if user is logged in
    const user = auth.currentUser;
    if (!user) {
      alert('Please login to submit your solution.');
      return;
    }

    setGeneratingAnswer(true);

    const modifiedQuestion = `${question} ,${userCode}.I have written the code in ${language}.

Provide a feedback that guide coder towards code optimization and improvement, without providing exact solutions.

Give the feedback in JSON format whose key will be title and value will be the feedback.

- Inline comments or annotations highlighting areas for improvement in the code.
 suggestions for better coding practices.
- Summary report at the end outlining strengths and areas for improvement.

follow the below sample and give the feedback for the above code in this format.
{ "title": "Code Review: deftwo_sum_brute_force", "feedback": { "Inline Comments": [ // Loop 1 (i): Iterates through all elements in nums. "for i in range(len(nums)):", " // Consider if there's a way to avoid visiting the same element twice?", // Loop 2 (j): Starts from i+1 to avoid duplicate pairs. " for j in range(i + 1, len(nums)):", " // Could this loop be optimized if we have additional information about nums?" ], "Suggestions": [ "Explore using a hash table for potentially faster lookups (average time complexity of O(n)).", "Consider the problem constraints. Can you leverage any properties of the input data (nums) for optimization?" ] }, "summary": { "Strengths": [ "Clear and concise implementation using nested loops.", "Correctly identifies the pair that adds up to the target." ], "Areas for Improvement": [ "Time complexity could be improved for larger datasets (current complexity is O(n^2)).", "Consider using more descriptive variable names (e.g., instead of i and j, use index1 and index2)." ] } }

the inline comments key should always hold the users code with inline comment for the same regarding changes/suggestions`;

    try {
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyCdxILuLbVq4Z8Ila7yfWYQ2PnN6zP2ekU`,
        method: 'post',
        data: {
          contents: [{ parts: [{ text: modifiedQuestion }] }],
        },
      });

      const answer = response.data.candidates[0].content.parts[0].text;
      
      // Update cache with new inputs
      cache.question = question;
      cache.userCode = userCode;
      cache.language = language;
      
      // Clear session storage
      sessionStorage.clear();

      navigate('/dashboard', { state: { answer } });
    } catch (error) {
      console.log(error);
      alert('Sorry - Something went wrong. Please try again!');
    }

    setGeneratingAnswer(false);
  };

  // Function to handle new query
  const handleNewQuery = () => {
    // Clear cache and sessionStorage
    for (let key in cache) {
      delete cache[key];
    }
    sessionStorage.clear();

    setQuestion('');
    setUserCode('');
    setLanguage('javascript');
    toast({
      title: "New query initiated.",
      description: "All inputs have been cleared.",
      status: "info",
      duration: 5000,
      isClosable: true,
      position: "top",
    });
  };

  return (
    <Box
      bgImage="https://images.pexels.com/photos/2680270/pexels-photo-2680270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      bgSize="cover"
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="87vh"
      p={4}
    >
      <Box
        bg="rgba(0, 0, 0, 0.8)"
        borderRadius="lg"
        boxShadow="lg"
        p={6}
        display="flex"
        flexDirection="column"
        width="40%"
        mx={4}
      >
        <Button
          mt={2}
          colorScheme="green"
          onClick={handleNewQuery}
          mb={4}
          width="fit-content"
          alignSelf="flex-end"
        >
          New Query
        </Button>
        <Heading as="h4" size="md" color="white" textAlign="left">
          Enter Your Question
        </Heading>
        <Input
          mt={4}
          height="150px"
          color="white"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          mb={4}
        />
        <Select
          placeholder="Select language"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          color="black"
          bg="white"
          mb={4}
        >
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
          <option value="csharp">C#</option>
          <option value="cpp">C++</option>
          <option value="go">Go</option>
          <option value="ruby">Ruby</option>
          <option value="typescript">TypeScript</option>
        </Select>
      </Box>

      <Box
        bg="rgba(0, 0, 0, 0.8)"
        borderRadius="lg"
        boxShadow="lg"
        p={6}
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="50%"
        mx={4}
        height="100%"
      >
        <MonacoEditor
          height="100%"
          width="100%"
          theme="hc-black"
           defaultValue="// Enter your code here"
          language={language}
          value={userCode}
          onChange={(value) => setUserCode(value)}
          options={{ resize: true }}
        />
        <Button
          width="50%"
          mt={4}
          isLoading={generatingAnswer}
          onClick={generateAnswer}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default New;




