export default function Input({ label, textarea, ...props }) {
  const classes =
    "w-full p-2 border-b-2 border-stone-400 rounded-sm bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-800";
  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold capitalize text-stone-600">
        {label}
      </label>
      {textarea ? (
        <textarea className={classes} {...props} />
      ) : (
        <input className={classes} {...props} />
      )}
    </p>
  );
}
