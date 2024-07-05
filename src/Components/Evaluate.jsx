import React from "react";
import { Box, Button, Input, Text, Heading } from "@chakra-ui/react";

const Evaluate = () => {
  return (
    <>
      <Box
        bgImage={"https://img.freepik.com/free-vector/gradient-liquid-abstract-background_23-2148916930.jpg?w=996&t=st=1720158849~exp=1720159449~hmac=16d675ce8e2ee9845d7a937e1bee2ad4704e1f34ca38e906183df3e214d64826"}
        // opacity={"0.8"}
        bgRepeat={"no-repeat"}
        bgSize={"cover"}
        border={"1px solid red"}
        // bg={"black"}
        height={"89vh"}
        display={"flex"}
        gap={"25px"}
      >
        <Box border={"0px solid white"} width={"30%"} ml={"20px"}>
          <Input
            border={"1px solid white"}
            height={"30%"}
            width={"91%"}
            margin={"20px"}
            borderRadius={"10px"}
            textAlign={"left"}
            placeholder={"enter your question"}
            color={"white"}
          />

          <Input
            placeholder={"enter your solution"}
            border={"1px solid white"}
            height={"45%"}
            width={"91%"}
            margin={"20px"}
            borderRadius={"10px"}
          />

          <Button width={"50%"} marginLeft={"23%"} bg={"white"} color={"white"}>
            {" "}
            Submit
          </Button>
        </Box>

        <Box border={"0px solid white"} width={"37%"}>
          <Box
          className="card"
            border={"1px solid white"}
            height={"90%"}
            margin={"20px"}
            borderRadius={"10px"}
            padding={"5px"}
            // bg={"whitesmoke"}
            opacity={0.8}
            
          >
            <Heading as="h3" size="lg" color={"white"}>
              Inline Comments for Improvement
            </Heading>

            <Text m={"20px"} color={"white"} fontWeight={"bold"}>
              # Set the next pointer of the current node to point to the
              previous node curr.next = prev # Update the previous pointer to
              point to the current node prev = curr # Update the current pointer
              to point to the next node curr = next # Return the new head of the
              reversed linked list return prev # Function to print a linked list
              def print_list(head): # Traverse the linked list and print each
              node's data curr = head while curr is not None: print(curr.data)
              curr = curr.next # Function to create a linked list from an array
              def create_linked_list(arr): # Create the head of the linked list
              head = Node(arr[0]) # Create the current pointer to traverse the
              linked list curr = head # Iterate over the array and create nodes
             
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

            <Heading  color={"white"} as='h3' size='lg' mt={"10px"}>
            Naming standards:
            </Heading>
            <Box className="card" borderRadius={"10px"} padding={"5px"}  border={"1px solid white"} color={"white"} mt={"20px"}>
              Follow a consistent naming convention for
              variables and functions. For example, use camelCase for variable
              names and PascalCase for function names. Code readability: Use
              The current
              implementation of the reverse_linked_list() function has a time
              complexity of O(n), where n is the number of nodes in the linked
            </Box >

            <Heading  color={"white"} as='h3' size='lg' mt={"20px"}>
            Time complexity  

            </Heading>
            <Box className="card"  border={"1px solid white"} borderRadius={"10px"} padding={"5px"} color={"white"} mt={"20px"}>
              The current
              implementation of the reverse_linked_list() function has a time
              complexity of O(n), where n is the number of nodes in the linked
              list. This can be improved to O(1) by using a stack or a queue.
              Space complexity: The current implementation of the
              
            </Box >
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Evaluate;

