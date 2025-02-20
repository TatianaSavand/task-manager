import {Button, Form, Input} from "@heroui/react";
import {ChangeEvent, FormEvent, useState} from "react";

interface TaskFormProps {
  onCreate: (title: string) => void;
}

function TaskForm({onCreate}: TaskFormProps) {
  const [title, setTitle] = useState("");

  const onSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    onCreate(title);
    setTitle('');
  };

  const onTitleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.target.value)
  }

  return (
    <Form className="w-full max-w-xs" validationBehavior="native" onSubmit={onSubmit}>
      <Input
        isRequired
        label="Title"
        labelPlacement="outside"
        name="title"
        placeholder="Enter your title"
        type="text"
        value={title}
        onChange={onTitleChange}
        // validate
      />
      <Button type="submit" variant="bordered">
        Submit
      </Button>
    </Form>
  )
}

export default TaskForm;