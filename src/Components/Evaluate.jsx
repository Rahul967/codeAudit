import React, { useState } from "react";
import { Box, Button, Input, Text, Heading, Select } from "@chakra-ui/react";
import axios from "axios";
import MonacoEditor from "@monaco-editor/react";
import download from "../images/background.jpg";

const Evaluate = () => {
  const [question, setQuestion] = useState("");
  const [userCode, setUserCode] = useState("");
  const [answer, setAnswer] = useState("");
  const [generatingAnswer, setGeneratingAnswer] = useState(false);
  const [language, setLanguage] = useState("javascript"); // State to manage the selected language

  async function generateAnswer(e) {
    setGeneratingAnswer(true);
    e.preventDefault();
    setAnswer("Loading your answer... \n It might take a few seconds");

    const modifiedQuestion = `I have written the following code in ${language}, please suggest ways to improve the code and give suggestions to optimize the code and suggest improvements in naming standards, code quality, etc. Also paste the whole code and add comments in between the code on how we can improve the code. Don't write the solution of the code.\n\n${userCode}`;

    try {
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyCdxILuLbVq4Z8Ila7yfWYQ2PnN6zP2ekU`,
        method: "post",
        data: {
          contents: [{ parts: [{ text: modifiedQuestion }] }],
        },
      });

      setAnswer(response.data.candidates[0].content.parts[0].text);
    } catch (error) {
      console.log(error);
      setAnswer("Sorry - Something went wrong. Please try again!");
    }

    setGeneratingAnswer(false);
  }

  return (
    <>
      <Box
        bgImage={download}
        bgRepeat={"no-repeat"}
        bgSize={"cover"}
        border={"1px solid red"}
        height={"89vh"}
        display={"flex"}
        gap={"25px"}
      >
        <form onSubmit={generateAnswer}>
          <Box border={"0px solid white"} width={"30%"} ml={"20px"}>
            <Input
              border={"1px solid white"}
              height={"50px"}
              width={"250px"}
              margin={"20px"}
              borderRadius={"10px"}
              textAlign={"left"}
              placeholder={"Enter your question"}
              color={"white"}
              required
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />

            <Select
              placeholder="Select language"
              margin={"20px"}
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              color={"black"}
              bg={"white"}
              border={"1px solid white"}
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

            <Box
              height={"300px"}
              width={"250px"}
              margin={"20px"}
              borderRadius={"10px"}
              border={"1px solid white"}
              color={"white"}
            >
              <MonacoEditor
                height="100%"
                width="100%"
                defaultLanguage={language}
                defaultValue="// Enter your code here"
                onChange={(value) => setUserCode(value)}
                 theme="vs-dark"
                options={{ resize: true }}
              />
            </Box>

            <Button
              width={"100px"}
              marginLeft={"100px"}
              bg={"white"}
              color={""}
              type="submit"
              disabled={generatingAnswer}
            >
              Submit
            </Button>
          </Box>
        </form>
        <Box border={"0px solid white"} width={"37%"}>
          <Box
            className="card"
            border={"1px solid white"}
            height={"90%"}
            margin={"20px"}
            borderRadius={"10px"}
            padding={"5px"}
            opacity={0.8}
          >
            <Heading as="h3" size="lg" color={"white"}>
              Inline Comments for Improvement
            </Heading>

            <Text m={"20px"} color={"white"} fontWeight={"bold"}>
              {answer}
            </Text>
          </Box>
        </Box>

        <Box border={"0px solid white"} width={"30%"}>
          <Box
            border={"1px solid white"}
            height={"90%"}
            margin={"20px"}
            borderRadius={"10px"}
            padding={"20px"}
          >
            <Heading color={"white"} as="h3" size="lg" mt={"10px"}>
              Naming Standards
            </Heading>
            <Box
              className="card"
              borderRadius={"10px"}
              padding={"5px"}
              border={"1px solid white"}
              color={"white"}
              mt={"20px"}
            >
              {answer}
            </Box>

            <Heading color={"white"} as="h3" size="lg" mt={"20px"}>
              Time Complexity
            </Heading>
            <Box
              className="card"
              border={"1px solid white"}
              borderRadius={"10px"}
              padding={"5px"}
              color={"white"}
              mt={"20px"}
            >
              {answer}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Evaluate;
