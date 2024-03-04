"use client";

import {
  Box,
  Progress,
  Stack,
  Step,
  StepIcon,
  StepIndicator,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  Text,
} from "@chakra-ui/react";

function MyStepper({ activeStep, steps }) {
  // const steps = [
  //   { title: "First", description: "Contact Info" },
  //   { title: "Second", description: "Date & Time" },
  //   { title: "Third", description: "Select Rooms" },
  // ];

  const max = steps.length - 1;
  const progressPercent = (activeStep / max) * 100;
  return (
    <Stack w={"40%"}>
      <Stepper size="md" index={activeStep} gap="0">
        {steps.map((step, index) => (
          <Step key={index} gap="0">
            <StepIndicator>
              <StepStatus complete={<StepIcon />} />
              {/* <StepStatus incomple={<>kontol</>} /> */}
            </StepIndicator>
            <StepSeparator _horizontal={{ ml: "0" }} />
          </Step>
        ))}
      </Stepper>
      {/* <Text>
        Step {activeStep + 1}: <b>{activeStepText}</b>
      </Text> */}
    </Stack>
  );
}

export default MyStepper;
