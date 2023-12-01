"use client";

import React from 'react';
import Link from 'next/link';
import { Menu, MenuButton, MenuList, MenuItem, Button, Text, Box } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const GlobalMenu = () => {
    return (
      <Box className="fixed right-2 top-1 z-20">
        <Menu>
          {({ isOpen }) => (
            <>
              <MenuButton
                isActive={isOpen}
                as={Button}
                className="rounded-xl border border-gray-400 bg-stone-300 p-3 opacity-90"
                rightIcon={<ChevronDownIcon />}
              >
                {isOpen ? "Close" : "Open"}
              </MenuButton>
              <MenuList className="rounded-xl bg-stone-500 p-3 text-white">
                <MenuItem>
                  <Link href="/" className="w-full">
                    <Text>トップ</Text>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/currency/items" className="w-full">
                    アイテム一覧
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/currency/php" className="w-full">
                    通貨テーブル
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/currency/jpy" className="w-full">
                    通貨電卓
                  </Link>
                </MenuItem>
              </MenuList>
            </>
          )}
        </Menu>
      </Box>
    );
}

export default GlobalMenu