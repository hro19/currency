"use client";

import React from 'react';
import Link from 'next/link';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const GlobalMenu = () => {
    return (
      <div className="fixed top-1 right-2">
        <Menu>
          {({ isOpen }) => (
            <>
              <MenuButton
                isActive={isOpen}
                as={Button}
                className="bg-stone-300 p-3 rounded-xl opacity-90 border border-gray-400"
                rightIcon={<ChevronDownIcon />}
              >
                {isOpen ? "Close" : "Open"}
              </MenuButton>
              <MenuList className="bg-stone-500 p-3 rounded-xl text-white">
                <MenuItem>
                  <Link href="/">トップ</Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/currency/php">通貨テーブル</Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/currency/jpy">通貨電卓</Link>
                </MenuItem>
              </MenuList>
            </>
          )}
        </Menu>
      </div>
    );
}

export default GlobalMenu
