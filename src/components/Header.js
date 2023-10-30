import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];


const Header = () => {
  const [isHidden, setIsHidden] = useState(false);
  const prevScrollY = useRef(0);

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

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > prevScrollY.current && !isHidden) {
        // Scrolling down and the header is not hidden
        setIsHidden(true);
      } else if (currentScrollY < prevScrollY.current && isHidden) {
        // Scrolling up and the header is hidden
        setIsHidden(false);
      }
      prevScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isHidden]);

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      backgroundColor="#18181b"
      zIndex={1} // Add z-index to keep the header visually on top
      transform={`translateY(${isHidden ? "-200px" : "0"})`}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack>
              {
              socials.map((social)=>
              <a href={social.url}>
                <FontAwesomeIcon icon={social.icon}
                size="2x"/>
              </a>)
              }
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
              <a href="/#projects-section" 
              onClick={handleClick("proyects")}>Projects</a>
              <a href="/#contactme-section" onClick={handleClick("contactme")}>Contact Me</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
