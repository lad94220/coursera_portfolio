import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: duyleanh265@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/lad94220",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/duy-l%C3%AA-anh-554461298/",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {socials.map((item, index) => {
              return (
                <a key={index} href={item.url} style={{ marginRight: '16px' }}>
                  <FontAwesomeIcon icon={item.icon} size="2x"/>
                </a>
              )
            })}
          </nav>
          <nav>
            <HStack spacing={8}>
              <a href="/#projects" onClick={handleClick("projects")}>
                Projects
              </a>
              <a href="/#contact-me" onClick={handleClick("contactme")}>
                Contact me
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
