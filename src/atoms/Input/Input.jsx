import React from "react";
import { useFormContext } from "react-hook-form";

export default function Input({ name, label, type }) {
  const { register } = useFormContext();
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        {...register(name)}
        id={name}
        className="w-full h-full outline-none py-3 font-sans text-black text-sm lg:text-base placeholder:text-sm"
      />
    </div>
  );
}
