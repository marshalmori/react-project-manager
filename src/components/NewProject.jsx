import { useRef } from "react";
import Input from "./Input";

export default function NewProject({ onAdd }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    // validation...

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <div className="w-[35rem] my-16">
      <div>
        <Input type="text" ref={title} label="Title" />
        <Input ref={description} label="Description" textarea />
        <Input type="date" ref={dueDate} label="Due Date" />
      </div>

      <menu className="flex items-center justify-end gap-3 my-4 mt-16">
        <li>
          <button className="px-6 py-2 rounded-md text-stone-900 hover:text-stone-950 font-semibold hover:border hover:border-stone-900">
            Cancel
          </button>
        </li>
        <li>
          <button
            onClick={handleSave}
            className="px-6 py-2 rounded-md bg-stone-900 text-stone-50 hover:bg-stone-950 font-semibold"
          >
            Save
          </button>
        </li>
      </menu>
    </div>
  );
}
