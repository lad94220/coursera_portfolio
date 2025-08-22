import React, {useEffect} from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";
import { use } from "react";

const LandingSection = () => {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen, onClose } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "Freelance project proposal",
      comment: "",
    },
    onSubmit: (values) => {
      submit({
        url: "/api/contact",
        data: values,
      });
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(50, "Must be 50 characters or less")
        .required("Required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Required"),
      type: Yup.string().required("Required"),
      comment: Yup.string()
        .max(500, "Must be 500 characters or less")
        .required("Required"),
    }),
  });

  useEffect(() => {
    if (response) {
      if (response.error) {
        onOpen('error', response.error);
      } else {
        onOpen('success', `Thank for submission ${formik.values.firstName}, we will get back to you shortly.`);
      }
    }
  }, [response, formik]);

  useEffect(() => {
    const handleTouch = () => {
      onClose()
      formik.resetForm();
    };
    window.addEventListener('touchstart', handleTouch);
    return () => {
      window.removeEventListener('touchstart', handleTouch);
    };
  }, []);

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl isInvalid={formik.touched.firstName && Boolean(formik.errors.firstName)}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.touched.email && Boolean(formik.errors.email)}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.touched.type && Boolean(formik.errors.type)}>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select
                  id="type"
                  name="type"
                  value={formik.values.type}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <option value="Freelance project proposal">Freelance project proposal</option>
                  <option value="Open source consultancy session">Open source consultancy session</option>
                  <option value="Other">Other</option>
                </Select>
                <FormErrorMessage>{formik.errors.type}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.touched.comment && Boolean(formik.errors.comment)}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  value={formik.values.comment}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>
              <Button type="submit" colorScheme="purple" width="full" isLoading={isLoading} onSubmit={formik.handleSubmit}>
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
