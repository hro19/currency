"use client";

import { useState } from "react";

export const useModalToggle = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const handleOpen = () => setIsModalOpen(true);

    const handleClose = () => setIsModalOpen(false);

    return {
      isModalOpen,
      setIsModalOpen,
      handleOpen,
      handleClose,
    };
};