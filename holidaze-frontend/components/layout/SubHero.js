import { Flex, Heading, VStack, useBreakpointValue } from "@chakra-ui/react";

export default function SubHero() {
  return (
    <>
      <Flex
        maxW={"full"}
        h={"30ch"}
        backgroundImage={
          "url(https://images.unsplash.com/photo-1569417921961-edf9477063de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1571&q=80)"
        }
        backgroundSize={"cover"}
        alt="Bergen harbour at night"
        backgroundPosition={"center center"}
      >
        <VStack
          w={"full"}
          justify={"center"}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
        >
          <Heading
            as={"h1"}
            color={"white"}
            fontWeight={700}
            lineHeight={1.2}
            textAlign={"center"}
            fontSize={useBreakpointValue({ base: "3xl", md: "5xl" })}
          >
            Contact us
          </Heading>
        </VStack>
      </Flex>
    </>
  );
}
