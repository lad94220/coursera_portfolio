import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Duy!";
const bio1 = "A student at VNUHCM - University of Science";
const bio2 = "With a passion for web development and design";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
  <VStack>
    {<Avatar
      name="Duy"
      src="/avatar.jpg"
      size="2xl"
      mb={4}
    />}
    <Heading as="h2" size="2xl" color="white" mb={4}>
      {greeting}
    </Heading>
    <Heading as="h3" size="lg" color="white" mb={2}>
      {bio1}
    </Heading>
    <Heading as="h3" size="lg" color="white">
      {bio2}
    </Heading>
  </VStack>
  </FullScreenSection>
);

export default LandingSection;
