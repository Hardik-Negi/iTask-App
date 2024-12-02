import React, { useState } from "react";
import { RiEdit2Fill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";

const Mainbar = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      const updatedTodo = todos.map((item) =>
        item.id === editId
          ? (item = { id: item.id, todo })
          : { id: item.id, todo: item.todo }
      );
      setTodos(updatedTodo);
      setEditId(0);
      setTodo("");
      return;
    }

    if (todo !== "") {
      setTodos([{ id: `${todo}-${Date.now()}`, todo }, ...todos]);
      setTodo("");
    }
  };

  const handleDelete = (id) => {
    const deleteTodo = todos.filter((item) => item.id !== id);
    setTodos([...deleteTodo]);
  };

  const handleEdit = (id) => {
    const editTodo = todos.find((item) => item.id === id);
    setTodo(editTodo.todo);
    setEditId(id);
  };

  console.log(todos);
  return (
    <div className="w-[75%] h-full justify-center items-center px-20 ">
      <div className="flex flex-col w-full  justify-center py-10 ">
        <span className="font-bold text-3xl text-left text-white">
          Today main focus{" "}
        </span>
        <span className="font-bold text-4xl text-left text-white">
          Design team meeting
        </span>
      </div>

      <div className="flex w-full flex-col gap-4 justify-center items-center ">
        <div className="h-14 w-full border flex bg-white rounded-2xl justify-start items-center gap-2 p-2">
          <div className="h-4 w-4 rounded-full border bg-[#F54CB4]"></div>
          <div className="h-4 w-4 rounded-full border bg-[#4DC6F5]"></div>
          <div className="h-4 w-4 rounded-full border bg-[#FAC508]"></div>
          <form onSubmit={handleSubmit} className="w-[85%] flex gap-4">
            <input
              type="text"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
              className="w-full outline-none pl-2 "
              placeholder="What is your next Task?"
            />
            <button
              type="submit"
              className="font-bold px-2 py-1 cursor-pointer border bg-[#977EFE] text-white rounded-lg "
            >
              {editId ? "EDIT" : "ADD"}
            </button>
          </form>
        </div>
        {todos.map((item) => (
          <div className="h-14 w-full border flex bg-white rounded-2xl justify-start items-center gap-2 p-2">
            <div className="h-4 w-4 rounded-full border bg-[#F54CB4]"></div>
            <div className="h-4 w-4 rounded-full border bg-[#4DC6F5]"></div>
            <div className="h-4 w-4 rounded-full border bg-[#FAC508]"></div>
            <div className="w-[85%] flex pl-2 gap-2">
              <div className="w-full">
                <p key={item.id}>{item.todo}</p>
              </div>
              <button
                onClick={() => handleEdit(item.id)}
                className="cursor-pointer"
              >
                <RiEdit2Fill size={20} color="grey" />
              </button>
              <button
                onClick={() => handleDelete(item.id)}
                className="cursor-pointer"
              >
                <MdDelete size={20} color="red" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mainbar;
