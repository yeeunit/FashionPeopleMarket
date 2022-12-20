import { useState } from "react";
import TodoList from "./TodoList";

export default function Template() {
  const [test, setTest] = useState(true);
  //   console.log("test", test);
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "할일 1",
      checked: true,
    },
    {
      id: 2,
      text: "할일 2",
      checked: false,
    },
    {
      id: 3,
      text: "할일 3",
      checked: true,
    },
  ]);

  return (
    <>
      <TodoList todos={todos} test={test} />
    </>
  );
}
