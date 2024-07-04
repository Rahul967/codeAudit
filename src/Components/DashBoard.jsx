import React from "react";
import { Box, Button, Input, Text, Heading } from "@chakra-ui/react";

const DashBoard = () => {
  return (
    <>
      <Box
        border={"1px solid red"}
        bg={"#111526"}
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
            height={"50%"}
            width={"91%"}
            margin={"20px"}
            borderRadius={"10px"}
          />

          <Button width={"50%"} marginLeft={"23%"}>
            {" "}
            Submit
          </Button>
        </Box>

        <Box border={"0px solid white"} width={"37%"}>
          <Box
            border={"1px solid white"}
            height={"90%"}
            margin={"20px"}
            borderRadius={"10px"}
            padding={"5px"}
          >
            <Heading as="h3" size="lg" color={"white"}>
              Inline Comments for Improvement
            </Heading>

            <Text m={"20px"} color={"white"}>
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
              for each element for i in range(1, len(arr)): # Create a new node
              with the current element's data node = Node(arr[i]) # Set the next
              pointer of the current node to point to the new node curr.next =
              node # Update the current pointer to point to the new node curr =
              curr.next # Return the head of the linked list return head #
              Example usage arr = [1, 2, 3, 4, 5] head = create_linked_list(arr)
              print("Original list:") print_list(head) reversed_head =
              reverse_linked_list(head) print("Reversed list:")
              print_list(reversed_head) 
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
            <Box  borderRadius={"10px"} padding={"5px"}  border={"1px solid white"} color={"white"} mt={"20px"}>
              Follow a consistent naming convention for
              variables and functions. For example, use camelCase for variable
              names and PascalCase for function names. Code readability: Use
              whitespace and indentation to make the code more readable. Error
              handling: Add error handling for cases where the input list is
              empty or contains invalid data.
            </Box >

            <Heading  color={"white"} as='h3' size='lg' mt={"20px"}>
            Time complexity  

            </Heading>
            <Box  border={"1px solid white"} borderRadius={"10px"} padding={"5px"} color={"white"} mt={"20px"}>
              The current
              implementation of the reverse_linked_list() function has a time
              complexity of O(n), where n is the number of nodes in the linked
              list. This can be improved to O(1) by using a stack or a queue.
              Space complexity: The current implementation of the
              reverse_linked_list() function has a space complexity of O(1).
              This can be improved to O(n) by using a recursive approach.
            </Box >
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default DashBoard;
