import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Form({ addTodo }) {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    done: false,
  });

  function handleTaskInputChange(e) {
    setTodo({ ...todo, task: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuidv4() });
      setTodo({ ...todo, task: "" });
    }
  }

  return (
    <form
      className="todo-form"
      onSubmit={handleSubmit}
      style={{ display: "flex", alignItems: "center", gap: 20 }}
    >
      <TextField
        label="Task"
        type="text"
        name="task"
        value={todo.task}
        onChange={handleTaskInputChange}
      />
      <Button type="submit" variant="contained">
        Submit
      </Button>
    </form>
  );
}

export default Form;
