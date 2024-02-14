import {
  Box,
  Flex,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  useDisclosure
} from "@chakra-ui/react";
import React from 'react'
import { Button } from "../ui/button";
import { Item } from "@/ts/Item";
import { fetchItems } from "@/api/item/fetchItem";

const ItemDelete = ({ item }: { item: Item }) => {

    const { onOpen, onClose, isOpen } = useDisclosure();
    
    const handlerDelete = async(item:Item) => {
      await fetchItems.deleteItem(item.id);
      onClose();
    };

  return (
    <>
      <Popover onOpen={onOpen} onClose={onClose} isOpen={isOpen}>
        <PopoverTrigger>
          <Flex
            flexDirection="column"
            justifyContent="space-between"
            gap={1}
            px={4}
            cursor="pointer"
          >
            <Box w="3px" h="3px" bg="gray.500" borderRadius="full" />
            <Box w="3px" h="3px" bg="gray.500" borderRadius="full" />
            <Box w="3px" h="3px" bg="gray.500" borderRadius="full" />
          </Flex>
        </PopoverTrigger>
        <PopoverContent bg="tomato" color="white">
          <PopoverHeader fontWeight="semibold">要確認事項</PopoverHeader>
          <PopoverArrow bg="tomato" />
          <PopoverCloseButton bg="purple.500" />
          <PopoverBody>
            <Box as="p">「{item.name}」を削除しますか？</Box>
            <Button
              className="my-2 bg-gray-400"
              onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
                handlerDelete(item)
              }
            >
              削除する
            </Button>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  );
}

export default ItemDelete
