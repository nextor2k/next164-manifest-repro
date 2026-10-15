"use client";

import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import { formatPrice } from "../lib/shared";

export function PriceForm() {
  const { register, handleSubmit } = useForm();
  return (
    <form
      onSubmit={handleSubmit((values) => toast(`Listed for ${formatPrice(values.price * 100)}`))}
    >
      <input {...register("price", { valueAsNumber: true })} />
      <button type="submit">List</button>
      <ToastContainer />
    </form>
  );
}
