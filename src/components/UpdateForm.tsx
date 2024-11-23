import React, { useEffect, useState } from "react";
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
  id: number | null;
  number: number;
  numberOfGuests: string;
}

const API_URL = "http://localhost:8080/tables";
const UpdateForm = ({ refetch, rowContent }) => {
  const [alertStatus, setAlertStatus] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState(
    rowContent?.numberOfGuests
  );
  useEffect(() => {
    setNumberOfGuests(rowContent?.numberOfGuests);
    setValue("numberOfGuests", rowContent?.numberOfGuests);
    setValue("id", rowContent.id);
    setValue("number", rowContent?.number);
  }, [rowContent]);
  const mutation = useMutation<any, Error, FormValues>({
    mutationFn: (data) => postDataService(API_URL, data),
    onSuccess: () => {
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
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    defaultValues: {
      id: rowContent.id,
      number: rowContent.number,
      numberOfGuests: rowContent.numberOfGuests,
    },
  });

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
          Update Table
        </Heading>
        <FormControl isInvalid={!!errors.numberOfGuests}>
          <FormLabel textColor="light">Number of Guests</FormLabel>
          <NumberInput
            value={numberOfGuests}
            min={3}
            max={8}
            keepWithinRange={true}
            clampValueOnBlur={false}
            onChange={(value) => {
              setValue("numberOfGuests", value); // Update React Hook Form's value
              setNumberOfGuests(value);
            }}
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
          Update
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

export default UpdateForm;
