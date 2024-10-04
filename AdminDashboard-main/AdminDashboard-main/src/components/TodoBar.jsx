import React from "react";
const TodoBar = ({ todoList, handleDrop }) => {
  const getTodosByStatus = (status) =>
    todoList.filter((todo) => todo.status === status);

  const handleDragStart = (e, id) => {
    e.dataTransfer.setData("text/plain", id);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };
  return (
    <div className="self-stretch ">
      <div
        className="w-full pt-1 rounded-md"
        onDragOver={(e) => handleDragOver(e)}
        onDrop={(e) => handleDrop(e, "todo")}
      >
        {getTodosByStatus("todo").map((todo) => (
          <div
            key={todo.id}
            className="p-1  bg-[#F4F6F8] rounded-md cursor-move flex justify-between items-center  w-full  text-[#858A93] text-[16px] font-[inter] font-[500]"
            draggable
            onDragStart={(e) => handleDragStart(e, todo.id)}
          >
            {todo.title}
            <div>
              <h1 className="bg-black text-white w-[32px] h-[35px] text-center flex flex-col items-center justify-center rounded-md">
                3
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div
        className="w-full  pt-1  rounded-md "
        onDragOver={(e) => handleDragOver(e)}
        onDrop={(e) => handleDrop(e, "in-progress")}
      >
        {getTodosByStatus("in-progress").map((todo) => (
          <div
            key={todo.id}
            className="p-1  bg-[#F4F6F8] rounded-md cursor-move flex justify-between items-center  w-full text-[#858A93] text-[16px] font-[inter] font-[500]"
            draggable
            onDragStart={(e) => handleDragStart(e, todo.id)}
          >
            {todo.title}
            <div>
              <h1 className="bg-black text-white w-[32px] h-[35px] text-center flex flex-col items-center justify-center rounded-md">
                1
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div
        className="w-full pt-1  rounded-md flex"
        onDragOver={(e) => handleDragOver(e)}
        onDrop={(e) => handleDrop(e, "completed")}
      >
        {getTodosByStatus("completed").map((todo) => (
          <div
            key={todo.id}
            className="p-1  bg-[#F4F6F8] rounded-md cursor-move flex justify-between items-center  w-full text-[#858A93] text-[16px] font-[inter] font-[500]"
            draggable
            onDragStart={(e) => handleDragStart(e, todo.id)}
          >
            {todo.title}
            <div>
              <h1 className="bg-black text-white w-[32px] h-[35px] text-center flex flex-col items-center justify-center rounded-md">
                2
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoBar;
