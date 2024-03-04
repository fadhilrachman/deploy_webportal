// {/* <FormikProvider value={formik}>
// <FieldArray
//   name={"certificates"}
//   render={(arrayHelpers) => {
//     return (
//       <div>
//         {formik.values.certificates.map((certificate, index) => {
//           return (
//             <div key={index} style={{ margin: "10px 0px" }}>
//               <Flex
//                 justifyContent={"space-between"}
//                 alignItems={"center"}
//                 marginBottom={"20px"}
//               >
//                 <Text fontSize={"20px"} fontWeight={"bold"}>
//                   Sertifikat {index + 1}
//                 </Text>
//                 <FaTrash
//                   color="red"
//                   style={{ cursor: "pointer" }}
//                   onClick={() => {
//                     arrayHelpers.remove(index);
//                   }}
//                 />
//               </Flex>
//               {/* <Input /> */}
//               <FormControl mb={3}>
//                 <FormLabel>Sertifikat</FormLabel>
//                 {isUpload ? (
//                   <Box
//                     borderRadius={"5px"}
//                     mx={3}
//                     display={"flex"}
//                     alignItems={"center"}
//                     justifyContent={"space-between"}
//                     backgroundColor={"#ebf3f7"}
//                     padding={"10px"}
//                   >
//                     <Text
//                       color={"#2aa9e8"}
//                       fontWeight={100}
//                       cursor={"pointer"}
//                       display={"flex"}
//                       alignItems={"center"}
//                       onClick={() => {
//                         setDialog(true);
//                       }}
//                     >
//                       <MdAttachFile />
//                       examplegambar.png
//                     </Text>
//                     <Text
//                       cursor={"pointer"}
//                       onClick={() => {
//                         formik.setFieldValue(res.id, "");
//                         setIsUpload(false);
//                       }}
//                     >
//                       <AiOutlineClose color="red" />
//                     </Text>
//                   </Box>
//                 ) : (
//                   <Box
//                     border={"1px solid #A8A8A8"}
//                     borderStyle={"dashed"}
//                     backgroundColor={"#f7f9fa"}
//                     borderRadius={"10px"}
//                     height={"150px"}
//                     mx={3}
//                     display={"flex"}
//                     alignItems={"center"}
//                     justifyContent={"center"}
//                     _hover={{ borderColor: "#90CDF4" }}
//                     cursor={"pointer"}
//                     {...getRootProps()}
//                   >
//                     <input
//                       {...getInputProps()}
//                       type="file"
//                       ID="fileSelect"
//                       accept=".jpg, .png, .pdf"
//                     />

//                     <Box
//                       display={"flex"}
//                       flexDirection={"column"}
//                       alignItems={"center"}
//                     >
//                       <Icon as={IoFileTrayOutline} fontSize={"40px"} />

//                       <Text ml={2}>
//                         klik atau seret file ke area ini untuk upload
//                       </Text>
//                       <Text
//                         ml={2}
//                         fontSize={"small"}
//                         color={"GrayText"}
//                       >
//                         Maksimal size 5 MB
//                       </Text>
//                     </Box>
//                   </Box>
//                 )}
//               </FormControl>
//               <FormControl>
//                 <FormLabel>Deskripsi Sertifikat</FormLabel>

//                 <Input
//                   name={`certificates.${index}.description`}
//                   type="text"
//                   placeholder="deskripsi"
//                   onChange={formik.handleChange}
//                   value={certificate.description}
//                 />
//               </FormControl>
//             </div>
//           );
//         })}
//         <Button
//           type="button"
//           w={"100%"}
//           onClick={() => arrayHelpers.push({ description: "" })}
//         >
//           + Tambah Sertifikat
//         </Button>
//       </div>
//     );
//   }}
// />
// // </FormikProvider> */}
