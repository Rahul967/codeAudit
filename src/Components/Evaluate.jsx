import React, { useState } from 'react';
import { Box, Button, Input, Select, Heading } from '@chakra-ui/react';
import MonacoEditor from '@monaco-editor/react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { auth } from './firebase'; // Ensure you import your Firebase auth configuration

const New = () => {
  const [question, setQuestion] = useState('');
  const [userCode, setUserCode] = useState('');
  const [language, setLanguage] = useState('javascript');
  const [generatingAnswer, setGeneratingAnswer] = useState(false);
  const navigate = useNavigate();

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
    const modifiedQuestion = `I have written the following code in ${language}, please suggest ways to improve the code and give suggestions to optimize the code and suggest improvements in naming standards, code quality, etc. Also paste the whole code and add comments in between the code on how we can improve the code. Don't write the solution of the code.\n\n${userCode}`;

    try {
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyCdxILuLbVq4Z8Ila7yfWYQ2PnN6zP2ekU`,
        method: 'post',
        data: {
          contents: [{ parts: [{ text: modifiedQuestion }] }],
        },
      });

      const answer = response.data.candidates[0].content.parts[0].text;
      navigate('/dashboard', { state: { answer } });
    } catch (error) {
      console.log(error);
      alert('Sorry - Something went wrong. Please try again!');
    }

    setGeneratingAnswer(false);
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
          theme="vs-dark"
          defaultLanguage={language}
          defaultValue="// Enter your code here"
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

