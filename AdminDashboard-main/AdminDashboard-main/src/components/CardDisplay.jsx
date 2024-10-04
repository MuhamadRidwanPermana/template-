import React, { useState } from "react";
import HighfidelityDesignCard from "./HighfidelityDesignCard";
import CardImage from "../assets/CardImage.png";
import Card from "../assets/Card.png";
import CardPic from "../assets/CardPic.png";
import CardDesign from "./CardDesign";
import AddTaskButton from "./AddTaskButton";
import TodoBar from "./TodoBar";

const CardDisplay = () => {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "To Do", status: "todo" },
    { id: 2, title: "InProgress", status: "in-progress" },
    { id: 3, title: "Completed", status: "completed" },
  ]);

  const handleDrop = (e, status) => {
    const id = e.dataTransfer.getData("text");
    const updatedList = todoList.map((todo) =>
      todo.id === parseInt(id) ? { ...todo, status: status } : todo
    );
    setTodoList(updatedList);
  };

  const getTodosByStatus = (status) =>
    todoList.filter((todo) => todo.status === status);

  const todoBarProps = {
    handleDrop,
  };
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 px-12 gap-6 self-stretch w-full">
      <div className=" flex flex-col gap-2 w-full">
        <TodoBar
          {...todoBarProps}
          todoList={getTodosByStatus("todo")}
          className="w-full"
        />
        <HighfidelityDesignCard imageSrc={CardImage} progressColor="#EBEBEB" />
        <CardDesign />
        <AddTaskButton />
      </div>
      <div className=" flex flex-col gap-2 w-full">
        <TodoBar
          {...todoBarProps}
          todoList={getTodosByStatus("in-progress")}
          className="w-full"
        />

        <HighfidelityDesignCard
          imageSrc={Card}
          progressColor="bg-[#FF5F37]"
          progress={70}
        />
        <AddTaskButton />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <TodoBar
          {...todoBarProps}
          todoList={getTodosByStatus("completed")}
          className="w-full"
        />

        <CardDesign progressColor="bg-[#8BC488]" progress={100} />
        <HighfidelityDesignCard
          imageSrc={CardPic}
          progressColor="bg-[#8BC488]"
          progress={100}
        />
        <AddTaskButton />
      </div>
    </div>
  );
};

export default CardDisplay;
