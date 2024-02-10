"use client";

import React from 'react'
import { chakra,Input,FormControl,FormErrorMessage, FormLabel,Stack, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Box } from "@chakra-ui/react"
import { useAddForm } from "@/features/hook/useAddform";
import { useModalToggle } from '@/features/hook/useModalToggle';

const Modalpage = () => {
  const { isModalOpen, setIsModalOpen, handleOpen, handleClose } = useModalToggle();
  const { register, onSubmit, errors } = useAddForm({
    successMessage: "成功",
    setIsModalOpen: setIsModalOpen,
  });

  return (
    <Box>
      <Button
        onClick={handleOpen}
        bg="white"
        border="2px"
        borderColor="blue.500"
        _hover={{ bg: "blue.100" }}
        fontSize="lg"
      >
        価格新規追加
      </Button>
      <Modal isOpen={isModalOpen} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent py={6}>
          <ModalHeader>価格新規追加</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <chakra.form onSubmit={onSubmit} className="flex flex-col space-y-4">
              <Stack spacing={6}>
                <FormControl display="block" isInvalid={!!errors.price}>
                  <FormLabel>Price:</FormLabel>
                  <Input
                    id="price"
                    {...register("price", { required: true, valueAsNumber: true })}
                    step="0.0001"
                  />
                  <FormErrorMessage>
                    {errors.price && (errors.price.message as string)}
                  </FormErrorMessage>
                </FormControl>

                <FormControl display="block" isInvalid={!!errors.itemId}>
                  <FormLabel>Item ID:</FormLabel>
                  <Input
                    id="itemId"
                    {...register("itemId", { required: true, valueAsNumber: true })}
                  />
                  <FormErrorMessage>
                    {errors.itemId && (errors.itemId.message as string)}
                  </FormErrorMessage>
                </FormControl>

                <FormControl display="block" isInvalid={!!errors.rate}>
                  <FormLabel>Rate（小数点第二まで）:</FormLabel>
                  <Input
                    id="rate"
                    {...register("rate", { required: true, valueAsNumber: true })}
                  />
                  <FormErrorMessage>
                    {errors.rate && (errors.rate.message as string)}
                  </FormErrorMessage>
                </FormControl>

                <FormControl display="block" isInvalid={!!errors.inverseRate}>
                  <FormLabel>Inverse Rate（小数点第二まで）:</FormLabel>
                  <Input
                    id="inverseRate"
                    {...register("inverseRate", { required: true, valueAsNumber: true })}
                  />
                  <FormErrorMessage>
                    {errors.inverseRate && (errors.inverseRate.message as string)}
                  </FormErrorMessage>
                </FormControl>

                <Button
                  bg="white"
                  border="1px"
                  borderColor="blue.500"
                  _hover={{ bg: "blue.100" }}
                  fontSize="lg"
                  type="submit"
                >
                  Submit
                </Button>
              </Stack>
            </chakra.form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default Modalpage;