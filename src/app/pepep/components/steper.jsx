"use client";

import { Box, Step, StepDescription, StepIcon, StepIndicator, StepNumber, StepSeparator, StepStatus, StepTitle, Stepper } from "@chakra-ui/react";

function MyStepper({ activeStep, steps }) {
  return (
    <Box w={"70vw"}>
      <Stepper index={activeStep}>
        {steps.map((step, index) => (
          <Step key={index} display="flex" justifyContent="center" alignItems="center" gap={3}>
            <Box flexShrink="0" display="flex" justifyContent="center" alignItems="center" flexDirection="column" gap={2} mt={6}>
              <StepIndicator>
                <StepStatus complete={<StepIcon />} incomplete={<StepNumber />} active={<StepNumber />} />
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
