"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { fetchItems } from "@/api/item/fetchItem";

const Page = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit: any = (data: { price: number; itemId: number }) => {
    const formData = {
      price: Number(data.price),
      itemId: Number(data.itemId),
    };
    fetchItems.addHistory(formData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Price:
        <input {...register("price", { required: true})} />
      </label>
      <br />
      <label>
        Item ID:
        <input {...register("itemId", { required: true})} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Page;
