"use client";

import React from 'react'
import {
Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { addItemDrawerStore } from "@/zustand/addItemDrawerStore";
import AddItem from "@/components/item/AddItem";
import { CurrencyObj } from "@/ts/Currency";

function DrawerExample({ currencyObjData }: { currencyObjData: CurrencyObj }) {
  const { isItemDrawerOpen, onItemDrawerOpen, onItemDrawerClose } =
    addItemDrawerStore();
  const btnRef = React.useRef<HTMLButtonElement>(null);

  return (
    <>
      <Button
        ref={btnRef}
        onClick={onItemDrawerOpen}
        color={"orange.500"}
        bg="white"
        border="2px"
        borderColor="orange.500"
        _hover={{ bg: "orange.100" }}
        fontSize={{ base: "sm", md: "lg" }}
      >
        アイテム新規作成
      </Button>
      <Drawer
        isOpen={isItemDrawerOpen}
        placement="right"
        onClose={onItemDrawerClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>アイテム新規作成</DrawerHeader>
          <DrawerBody>
            <AddItem currencyObjData={currencyObjData} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default DrawerExample;