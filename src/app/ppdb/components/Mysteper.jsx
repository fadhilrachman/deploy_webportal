"use client";

import { Box, Step, StepIcon, StepIndicator, StepSeparator, StepStatus, StepTitle, Stepper } from "@chakra-ui/react";

function MyStepper({ activeStep, steps }) {
  return (
    <Box w={"70vw"}>
      <Stepper index={activeStep} size="md" gap="0">
        {steps.map((step, index) => (
          <Step key={index} display="flex" justifyContent="center" alignItems="center" gap="">
            <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" gap={2} mt={6}>
              <StepIndicator bg="#90CDF4" w="50px" h="50px">
                <StepStatus complete={<StepIcon />} active={<Box width="80%" height="80%" bg="#3182CE" rounded="50%" />} />
              </StepIndicator>

              <StepTitle>{step.title}</StepTitle>
            </Box>

            <StepSeparator />
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}

export default MyStepper;
