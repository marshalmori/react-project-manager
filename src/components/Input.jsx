import { forwardRef } from "react";

const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
  const classes =
    "w-full p-2 border-b-2 border-stone-400 rounded-sm bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-800";
  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold capitalize text-stone-600">
        {label}
      </label>
      {textarea ? (
        <textarea ref={ref} className={classes} {...props} />
      ) : (
        <input ref={ref} className={classes} {...props} />
      )}
    </p>
  );
});

export default Input;
