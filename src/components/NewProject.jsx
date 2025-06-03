import Input from "./Input";

export default function NewProject() {
  return (
    <div className="w-[35rem] my-16">
      <div>
        <Input label="Title" />
        <Input label="Description" textarea />
        <Input label="Due Date" />
      </div>

      <menu className="flex items-center justify-end gap-3 my-4 mt-16">
        <li>
          <button className="px-6 py-2 rounded-md text-stone-900 hover:text-stone-950 font-semibold hover:border hover:border-stone-900">
            Cancel
          </button>
        </li>
        <li>
          <button className="px-6 py-2 rounded-md bg-stone-900 text-stone-50 hover:bg-stone-950 font-semibold">
            Save
          </button>
        </li>
      </menu>
    </div>
  );
}
