import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";
import { Form } from "react-bootstrap";
import { useMutation } from "@tanstack/react-query";
import { postDataService } from "../services/PostDataService.ts";

interface FormValues {
  numberOfGuests: string;
}

const API_URL = "http://localhost:8080/tables";
const TableForm = ({ refetch }) => {
  const [alertStatus, setAlertStatus] = useState("");
  const mutation = useMutation<any, Error, FormValues>({
    mutationFn: (data) => postDataService(API_URL, data),
    onSuccess: (data) => {
      refetch();
      setAlertStatus("success");
      setTimeout(() => setAlertStatus(""), 3000);
    },
    onError: () => {
      setAlertStatus("error");
      setTimeout(() => setAlertStatus(""), 3000);
    },
  });

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (values) => {
    try {
      await mutation.mutateAsync(values);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      // Handle the error, display a message to the user, etc.
    }
  };
  return (
    <Box bgColor="dark2" borderRadius="13px" flex="1" padding="14px">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Heading textColor="light" mb={4}>
          Create Table
        </Heading>
        <FormControl isInvalid={!!errors.numberOfGuests}>
          <FormLabel textColor="light">Number of Guests</FormLabel>
          <NumberInput
            defaultValue={3}
            min={3}
            max={8}
            keepWithinRange={true}
            clampValueOnBlur={false}
          >
            <NumberInputField
              color="light"
              {...register("numberOfGuests", { valueAsNumber: true })}
            />
            <NumberInputStepper>
              <NumberIncrementStepper color="light" />
              <NumberDecrementStepper color="light" />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
        <Button
          mt={4}
          bgColor="yellow"
          _hover={{
            bgColor: "vividYellow",
          }}
          isLoading={isSubmitting}
          type="submit"
        >
          Ajouter
        </Button>
      </Form>
      {alertStatus === "success" && (
        <Alert status="success" mb={4}>
          <AlertIcon />
          Data uploaded to the server. Fire on!
        </Alert>
      )}
      {alertStatus === "error" && (
        <Alert status="error" mb={4}>
          <AlertIcon />
          There was an error uploading the data.
        </Alert>
      )}
    </Box>
  );
};

export default TableForm;
