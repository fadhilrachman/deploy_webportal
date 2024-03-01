"use client";
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Grid,
  GridItem,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { FaFile } from "react-icons/fa";
import { FieldArray, Formik, FormikProvider } from "formik";
import React, { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
//   import { useNavigate } from 'react-router-dom';
import { useDropzone } from "react-dropzone";
import { useRouter } from "next/navigation";
import TimeField from "react-simple-timefield";
import { CiCircleCheck } from "react-icons/ci";
import { MdAttachFile } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
const FormGenerator = ({ id, dataForm, formik, grid }) => {
  const navigate = useRouter();
  const handleComponentFields = (res, isArray, index) => {
    // const file =

    // const values =isArray?formik.values[res.id]:formik.values[res.id]
    // const values = isArray
    //   ? formik.values[res?.id][index][isArray.id] || ''
    //   : formik.values[res?.id] || '';

    // const id = isArray ? `${res.id}[${[index]}].${[isArray.id]}` : res.id;
    // const placeholder = isArray ? isArray.placeholder : res.placeholder;
    const label = isArray ? isArray.label : res.label;
    // const res?.helperText = isArray ? isArray.res?.helperText : res.res?.helperText;

    if (res.type == "text" || isArray?.type == "text") {
      return (
        <GridItem colSpan={res?.colSpan || grid} key={res.id}>
          <FormControl
            isRequired={res?.isRequired || false}
            isInvalid={formik.errors[res.id] && formik.touched[res.id]}
          >
            <FormLabel>{label}</FormLabel>
            <InputGroup>
              {res?.leftAddon && (
                <InputLeftAddon>{res?.leftAddon}</InputLeftAddon>
              )}
              <Input
                {...formik.getFieldProps(res.id)}
                onBlur={formik.handleBlur}
                placeholder={res?.placeholder}
                disabled={res?.disabled}
                type="text"
                size={"md"}
              />
            </InputGroup>
            <FormErrorMessage>{formik.errors[res.id]}</FormErrorMessage>
            <FormHelperText>{res?.helperText}</FormHelperText>
          </FormControl>
        </GridItem>
      );
    }
    if (res.type == "file" || isArray?.type == "file") {
      const [file, setFile] = useState("");
      const [dialog, setDialog] = useState(false);
      const [isUpload, setIsUpload] = useState(false);
      const { acceptedFiles, fileRejections, getRootProps, getInputProps } =
        useDropzone({
          onDrop: (acceptedFiles, rejectedFiles) => {
            formik.setFieldValue(res.id, acceptedFiles);
            setIsUpload(true);
            acceptedFiles.forEach((file) => {
              const reader = new FileReader();

              // Baca file sebagai URL data
              reader.readAsDataURL(file);

              // Setelah membaca file, ambil URL data dan lakukan sesuatu dengannya
              reader.onload = () => {
                const fileUrl = reader.result;
                setFile(fileUrl);
                console.log("File URL:", fileUrl);
                // Lakukan sesuatu dengan fileUrl, seperti menampilkannya atau mengirimkannya ke server
              };
            });
          },

          maxFiles: 1,
        });

      return (
        <GridItem colSpan={res?.colSpan || grid} key={res.id}>
          {/* <img src={file} /> */}
          <FormControl
            isRequired={res?.isRequired || false}
            isInvalid={formik.errors[res.id] && formik.touched[res.id]}
          >
            <FormLabel>{label}</FormLabel>
            {isUpload ? (
              <Box
                borderRadius={"5px"}
                mx={3}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
                backgroundColor={"#ebf3f7"}
                padding={"10px"}
              >
                <Text
                  color={"#2aa9e8"}
                  fontWeight={100}
                  cursor={"pointer"}
                  display={"flex"}
                  alignItems={"center"}
                  onClick={() => {
                    setDialog(true);
                  }}
                >
                  <MdAttachFile />
                  examplegambar.png
                </Text>
                <Text
                  cursor={"pointer"}
                  onClick={() => {
                    formik.setFieldValue(res.id, "");
                    setIsUpload(false);
                  }}
                >
                  <AiOutlineClose color="red" />
                </Text>
              </Box>
            ) : (
              <Box
                border={"1px solid #A8A8A8"}
                borderStyle={"dashed"}
                borderRadius={"10px"}
                height={"100px"}
                mx={3}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                _hover={{ backgroundColor: "#dee0e0" }}
                cursor={"pointer"}
                {...getRootProps()}
              >
                <input
                  {...getInputProps()}
                  type="file"
                  ID="fileSelect"
                  accept=".jpg, .png, .pdf"
                />

                <Box display={"flex"} alignItems={"center"}>
                  <FaFile color="gray" height={"200px"} width={"200px"} />
                  <Text ml={2}>Pilih atau Drag File</Text>
                </Box>
              </Box>
            )}

            <Modal
              isOpen={dialog}
              onClose={() => {
                setDialog(false);
              }}
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Image src={file} height={"100px"} />
                </ModalBody>

                <ModalFooter>
                  <Button
                    colorScheme="blue"
                    mr={3}
                    onClick={() => {
                      setDialog(false);
                    }}
                  >
                    Close
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>

            <FormErrorMessage>{formik.errors[res.id]}</FormErrorMessage>
            <FormHelperText>{res?.helperText}</FormHelperText>
          </FormControl>
        </GridItem>
      );
    }

    if (res.type == "password" || isArray?.type == "password") {
      const [show, setShow] = useState(false);
      const handleClick = () => setShow(!show);
      return (
        <GridItem colSpan={res?.colSpan || grid} key={res.id}>
          <FormControl
            isRequired={res?.isRequired || false}
            isInvalid={formik.errors[res.id] && formik.touched[res.id]}
          >
            <FormLabel>{label}</FormLabel>
            <InputGroup>
              {/* {res?.leftAddon && (
                <InputLeftAddon>{res?.leftAddon}</InputLeftAddon>
              )} */}
              <Input
                {...formik.getFieldProps(res.id)}
                onBlur={formik.handleBlur}
                placeholder={res?.placeholder}
                disabled={res?.disabled}
                type={show ? "text" : "password"}
                size={"md"}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
            <FormErrorMessage>{formik.errors[res.id]}</FormErrorMessage>
            <FormHelperText>{res?.helperText}</FormHelperText>
          </FormControl>
        </GridItem>
      );
    }

    if (res.type == "time" || isArray?.type == "time") {
      return (
        <GridItem colSpan={res?.colSpan || grid} key={res.id}>
          <FormControl
            isRequired={res?.isRequired || false}
            isInvalid={formik.errors[res.id] && formik.touched[res.id]}
          >
            <FormLabel>{label}</FormLabel>
            <TimeField
              // inputRef={{}}
              value={formik?.values[res.id]}
              onChange={(e) => {
                formik.setFieldValue(res.id, e.target.value);
              }}
              colon=":"
              input={
                <Input
                  onBlur={formik.handleBlur}
                  placeholder={res?.placeholder}
                  disabled={res?.disabled}
                  {...formik.getFieldProps(res.id)}
                  type="text"
                  size={"md"}
                />
              }
            />

            <FormErrorMessage>{formik.errors[res.id]}</FormErrorMessage>
            <FormHelperText>{res?.helperText}</FormHelperText>
          </FormControl>
        </GridItem>
      );
    }

    //DATE FIELD
    if ((res.type == "date") | (isArray?.type == "date")) {
      return (
        <GridItem colSpan={res?.colSpan || grid} key={res.id}>
          <FormControl
            isRequired={res?.isRequired || false}
            isInvalid={formik.errors[res.id] && formik.touched[res.id]}
          >
            <FormLabel htmlFor={res.id}>{label}</FormLabel>
            <Input
              onBlur={formik.handleBlur}
              {...formik.getFieldProps(res.id)}
              type="date"
              placeholder={res?.placeholder}
              disabled={res?.disabled}
              size={"md"}
            />
            <FormErrorMessage>{formik.errors[res.id]}</FormErrorMessage>
            <FormHelperText>{res?.helperText}</FormHelperText>
          </FormControl>
        </GridItem>
      );
    }

    //SELECT
    if ((res.type == "select") | (isArray?.type == "select")) {
      return (
        <GridItem colSpan={res?.colSpan || grid} key={res.id}>
          <FormControl
            isRequired={res?.isRequired || false}
            isInvalid={formik.errors[res.id] && formik.touched[res.id]}
          >
            <FormLabel htmlFor={res.id}>{label}</FormLabel>
            <Select
              onBlur={formik.handleBlur}
              {...formik.getFieldProps(res.id)}
              placeholder={res?.placeholder}
              disabled={res?.disabled}
              size={"md"}
              options
            >
              {res.options.map((option, index) => (
                <option key={`index`} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Select>
            <FormErrorMessage>{formik.errors[res.id]}</FormErrorMessage>
            <FormHelperText>{res?.helperText}</FormHelperText>
          </FormControl>
        </GridItem>
      );
    }

    if ((res.type == "title") | (isArray?.type == "title")) {
      return (
        <GridItem colSpan={res?.colSpan || grid} key={res.id} mb={3}>
          <Box display={"flex"} gap={"0px 20px"}>
            {res?.withButtonBack && (
              <Button
                size={"sm"}
                onClick={() => {
                  navigate.back();
                }}
              >
                <FaChevronLeft />
              </Button>
            )}
            <Text fontWeight={"bold"} fontSize={"2xl"}>
              {res.text}
            </Text>
          </Box>
          <Divider />
        </GridItem>
      );
    }

    if ((res.type == "subTitle") | (isArray?.type == "subTitle")) {
      return (
        <GridItem colSpan={res?.colSpan || grid} key={res.id} mt={3}>
          <Text fontWeight={"semibold"} fontSize={"xl"}>
            {res.text}
          </Text>
          <Divider />
        </GridItem>
      );
    }

    //NUMBER FIELD
    if (res.type == "number" || isArray?.type == "number") {
      return (
        <GridItem colSpan={res?.colSpan || grid} key={res.id}>
          <FormControl
            isRequired={res?.isRequired || false}
            isInvalid={formik.errors[res.id] && formik.touched[res.id]}
          >
            <FormLabel htmlFor={res.id}>{label}</FormLabel>
            <Input
              onBlur={formik.handleBlur}
              {...formik.getFieldProps(res.id)}
              placeholder={res?.placeholder}
              disabled={res?.disabled}
              type="number"
              size={"md"}
            />
            <FormErrorMessage>{formik.errors[res.id]}</FormErrorMessage>
            <FormHelperText>{res?.helperText}</FormHelperText>
          </FormControl>
        </GridItem>
      );
    }

    //TEXTAREA
    if (res.type == "textarea" || isArray?.type == "text") {
      console.log({ error: formik.errors });
      return (
        <GridItem colSpan={res?.colSpan || grid} key={res.id}>
          <FormControl
            isRequired={res?.isRequired || false}
            isInvalid={formik.errors[res.id] && formik.touched[res.id]}
          >
            <FormLabel htmlFor={res.id}>{label}</FormLabel>
            <Textarea
              {...formik.getFieldProps(res.id)}
              onBlur={formik.handleBlur}
              type="text"
              placeholder={res?.placeholder}
              disabled={res?.disabled}
            />

            <FormErrorMessage>{formik.errors[res.id]}</FormErrorMessage>
            <FormHelperText>{res?.helperText}</FormHelperText>
          </FormControl>
        </GridItem>
      );
    }
  };

  const handleFieldArray = (res) => {
    console.log({ values: formik.values[res.id], res });
    return (
      <FieldArray
        name={res.id}
        render={(arrayHelpers) => {
          return (
            <div>
              {formik.values[res.id].map((friend, index) =>
                res.fieldArray.map((resChild) => {
                  return handleComponentFields(res, resChild, index);
                })
              )}
              <Button
                type="button"
                onClick={() => arrayHelpers.push({ userName: "" })}
              >
                +
              </Button>
            </div>
          );
        }}
      />
    );
  };
  return (
    <FormikProvider value={formik}>
      <Box as="form" id={id} onSubmit={formik.handleSubmit}>
        <Grid templateColumns={`repeat(${grid}, 1fr)`} gap={3}>
          {dataForm.map((res) => {
            //TEXTFIELD
            if (res.type != "arrayfield") {
              return handleComponentFields(res);
            }
            // if (res.type == "arrayfield") {
            //   return handleFieldArray(res);
            // }
            //FIELD ARRAY
          })}
        </Grid>
      </Box>
    </FormikProvider>
  );
};

export default FormGenerator;
