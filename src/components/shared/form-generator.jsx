"use client";
import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Grid,
  GridItem,
  Icon,
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
import { FaFile, FaTrash } from "react-icons/fa";
import { FieldArray, Formik, FormikProvider } from "formik";
import React, { useEffect, useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
//   import { useNavigate } from 'react-router-dom';
import { useDropzone } from "react-dropzone";
import { useRouter } from "next/navigation";
import TimeField from "react-simple-timefield";
import { CiCircleCheck } from "react-icons/ci";
import { MdAttachFile } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { usePPDB } from "@/context/ppdb.context";
import { IoFileTrayOutline } from "react-icons/io5";
const FormGenerator = ({ id, dataForm, formik, grid }) => {
  const navigate = useRouter();
  const handleComponentFields = (res, isArray, index) => {
    // const file =

    // const values =isArray?formik.values[res.id]:formik.values[res.id]
    const values = isArray
      ? formik.values[res?.id][index][isArray.id] || ""
      : formik.values[res?.id] || "";

    const id = isArray ? `${res.id}[${[index]}].${[isArray.id]}` : res.id;
    // const placeholder = isArray ? isArray.placeholder : res.placeholder;
    const label = isArray ? isArray.label : res.label;
    // const res?.helperText = isArray ? isArray.res?.helperText : res.res?.helperText;

    if (res.type == "text" || isArray?.type == "text") {
      return (
        <GridItem colSpan={res?.colSpan || grid} key={res.id}>
          <FormControl
            isInvalid={formik.errors[res.id] && formik.touched[res.id]}
          >
            <FormLabel>
              {label}
              {res?.isRequired && (
                <span style={{ color: "red", marginLeft: "4px" }}>*</span>
              )}{" "}
            </FormLabel>
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
    if (res.type == "file") {
      const [file, setFile] = useState("");
      const [dialog, setDialog] = useState(false);
      const [isUpload, setIsUpload] = useState(false);
      useEffect(() => {
        // Periksa apakah formik.values[res.id] adalah array file dan apakah file sudah diatur
        if (Array.isArray(formik.values[res.id]) && !file) {
          // Ambil file pertama dari array
          const firstFile = formik.values[res.id][0];

          if (firstFile) {
            const reader = new FileReader();

            // Baca file sebagai URL data
            reader.readAsDataURL(firstFile);

            // Setelah membaca file, ambil URL data dan lakukan sesuatu dengannya
            reader.onload = () => {
              const fileUrl = reader.result;
              setIsUpload(true);
              setFile(fileUrl);
              console.log("File URL:", fileUrl);
              // Lakukan sesuatu dengan fileUrl, seperti menampilkannya atau mengirimkannya ke server
            };
          }
        }
      }, [formik.values[res.id]]);
      console.log({ file });
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
            isInvalid={formik.errors[res.id] && formik.touched[res.id]}
          >
            <FormLabel>
              {label}
              {res?.isRequired && (
                <span style={{ color: "red", marginLeft: "4px" }}>*</span>
              )}{" "}
            </FormLabel>
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
                height={"150px"}
                backgroundColor={"#f7f9fa"}
                mx={3}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                _hover={{ borderColor: "#90CDF4" }}
                cursor={"pointer"}
                {...getRootProps()}
              >
                <input
                  {...getInputProps()}
                  type="file"
                  ID="fileSelect"
                  accept=".jpg, .png, .pdf"
                />
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"center"}
                >
                  <Icon as={IoFileTrayOutline} fontSize={"40px"} />

                  <Text ml={2}>
                    klik atau seret file ke area ini untuk upload
                  </Text>
                  <Text ml={2} fontSize={"small"} color={"GrayText"}>
                    Maksimal size 5 MB
                  </Text>
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
            isInvalid={formik.errors[res.id] && formik.touched[res.id]}
          >
            <FormLabel>
              {label}
              {res?.isRequired && (
                <span style={{ color: "red", marginLeft: "4px" }}>*</span>
              )}{" "}
            </FormLabel>
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
            isInvalid={formik.errors[res.id] && formik.touched[res.id]}
          >
            <FormLabel>
              {label}
              {res?.isRequired && (
                <span style={{ color: "red", marginLeft: "4px" }}>*</span>
              )}{" "}
            </FormLabel>
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
            isInvalid={formik.errors[res.id] && formik.touched[res.id]}
          >
            <FormLabel htmlFor={res.id}>
              {label}*
              {res?.isRequired && (
                <span style={{ color: "red", marginLeft: "4px" }}>*</span>
              )}{" "}
            </FormLabel>
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
            isInvalid={formik.errors[res.id] && formik.touched[res.id]}
          >
            <FormLabel htmlFor={res.id}>
              {label}*
              {res?.isRequired && (
                <span style={{ color: "red", marginLeft: "4px" }}>*</span>
              )}{" "}
            </FormLabel>
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
            isInvalid={formik.errors[res.id] && formik.touched[res.id]}
          >
            <FormLabel>
              {label}
              {res?.isRequired && (
                <span style={{ color: "red", marginLeft: "4px" }}>*</span>
              )}{" "}
            </FormLabel>
            <InputGroup>
              {res?.leftAddon && (
                <InputLeftAddon>{res?.leftAddon}</InputLeftAddon>
              )}
              <Input
                {...formik.getFieldProps(res.id)}
                onBlur={formik.handleBlur}
                placeholder={res?.placeholder}
                disabled={res?.disabled}
                type="number"
                size={"md"}
              />
            </InputGroup>
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
            isInvalid={formik.errors[res.id] && formik.touched[res.id]}
          >
            <FormLabel htmlFor={res.id}>
              {label}*
              {res?.isRequired && (
                <span style={{ color: "red", marginLeft: "4px" }}>*</span>
              )}{" "}
            </FormLabel>
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
    console.log({ values: formik.values, res });
    // const values = isArray
    // ? formik.values[res?.id][index][isArray.id] || ""
    // : formik.values[res?.id] || "";

    // const id = isArray ? `${res.id}[${[index]}].${[isArray.id]}` : res.id;
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

    // useEffect(() => {
    //   // Periksa apakah formik.values[res.id] adalah array file dan apakah file sudah diatur
    //   if (Array.isArray(values) && !file) {
    //     // Ambil file pertama dari array
    //     const firstFile = values[0];

    //     if (firstFile) {
    //       const reader = new FileReader();

    //       // Baca file sebagai URL data
    //       reader.readAsDataURL(firstFile);

    //       // Setelah membaca file, ambil URL data dan lakukan sesuatu dengannya
    //       reader.onload = () => {
    //         const fileUrl = reader.result;
    //         setIsUpload(true);
    //         setFile(fileUrl);
    //         console.log("File URL:", fileUrl);
    //         // Lakukan sesuatu dengan fileUrl, seperti menampilkannya atau mengirimkannya ke server
    //       };
    //     }
    //   }
    // }, [values]);
    return (
      <FieldArray
        name={res.id}
        render={(arrayHelpers) => {
          return (
            <div>
              {formik.values[res.id].map((friend, index) => {
                return (
                  <Box>
                    <Flex
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Text fontSize={"20px"} fontWeight={"bold"}>
                        {res?.title} {index + 1}
                      </Text>
                      <FaTrash
                        color="red"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          arrayHelpers.remove(index);
                        }}
                      />
                    </Flex>
                    {res.fieldArray.map((resChild) => {
                      // const [cuy, setcuy] = useState();
                      console.log({ resChild });
                      return (
                        <Box mb={5}>
                          {resChild.type == "file" && (
                            <GridItem
                              colSpan={res?.colSpan || grid}
                              key={res.id}
                            >
                              {/* <img src={file} /> */}
                              <FormControl
                                isInvalid={
                                  formik.errors[res.id] &&
                                  formik.touched[res.id]
                                }
                              >
                                <FormLabel>
                                  {"konol"}
                                  {res?.isRequired && (
                                    <span
                                      style={{
                                        color: "red",
                                        marginLeft: "4px",
                                      }}
                                    >
                                      *
                                    </span>
                                  )}{" "}
                                </FormLabel>
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
                                      <FaFile
                                        color="gray"
                                        height={"200px"}
                                        width={"200px"}
                                      />
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

                                <FormErrorMessage>
                                  {formik.errors[res.id]}
                                </FormErrorMessage>
                                <FormHelperText>
                                  {res?.helperText}
                                </FormHelperText>
                              </FormControl>
                            </GridItem>
                          )}
                          {handleComponentFields(res, resChild, index)}
                        </Box>
                      );
                    })}
                  </Box>
                );
              })}
              <Button
                type="button"
                w={"100%"}
                onClick={() => arrayHelpers.push({})}
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
        <Grid
          templateColumns={`repeat(${grid}, 1fr )`}
          // templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(6, 1fr)" }}
          gap={3}
        >
          {dataForm.map((res) => {
            //TEXTFIELD
            if (res.type != "arrayfield") {
              return handleComponentFields(res);
            }
            // if (res.type == "arrayfield") {
            //   console.log("kintoll");
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
