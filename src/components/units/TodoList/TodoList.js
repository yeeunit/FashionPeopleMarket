import { v4 as uuidv4 } from "uuid";
import TodoItem from "./TodoItem";

export default function TodoList(props) {
  const { todos, test } = props;

  console.log(todos);
  // todos.forEach((item) => console.log(item));

  return (
    <>
      <div>
        xx
        {/* {test ? "o" : "x"} */}
        {/* {todos[0].id} */}
        {todos.map((item) => (
          <div key={uuidv4}>
            {item.id}
            {item.text}
            {item.checked}
          </div>
        ))}
      </div>
    </>
  );
}
