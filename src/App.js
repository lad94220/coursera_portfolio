import { ChakraProvider, useEventListener } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";
import { useEffect, useRef, useState } from "react";

function App() {
  const [open, setOpen] = useState(true);
  const cancelRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (!cancelRef.current) {
        cancelRef.current = window.scrollY;
        return;
      }
      if (window.scrollY > cancelRef.current) {
        setOpen(false);
      } else if (window.scrollY < cancelRef.current) {
        setOpen(true);
      }
      cancelRef.current = window.scrollY;
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  return (
    <ChakraProvider>
      <AlertProvider>
        <main>
          <div
            style={{
              transform: open ? "translateY(0px)" : "translateY(-200px)",
              transition: "transform 0.3s ease",
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              zIndex: 1,
            }}
          >
            <Header />
          </div>
          <div>
            <LandingSection />
            <ProjectsSection />
            <ContactMeSection />
            <Footer />
            <Alert />
          </div>
        </main>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
