import { Box, Container, Heading, Stack, Text, Image } from "@chakra-ui/react";
import Link from "next/link";

const Logo = (_props) => {
  return <Image
  src="/images/logo.png"
  height={"60px"}
  width={"190px"}
/>
};

export default function Footer() {
  return (
    <Box bg={"body.light"} my={4}>
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <Logo />
        <Stack direction={"row"} spacing={6}>
          <Link href={`/`}>Home</Link>
          <Link href={`/accomodations`}>Accomodations</Link>
          <Link href={`/contact`}>Contact</Link>
        </Stack>
      </Container>
      <Box borderTopWidth={1} borderStyle={"solid"} borderColor={"brand.dark"}>
        <Container maxW={"6xl"} py={4} textAlign={"center"}>
          <Text>© 2022 Ineaw. All rights reserved</Text>
        </Container>
      </Box>
    </Box>
  );
}
