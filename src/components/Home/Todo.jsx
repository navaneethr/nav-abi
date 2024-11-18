import React, { useState } from "react";
import { Button, Flex, TextField, ListView, Item, Heading, View } from "@adobe/react-spectrum";

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  
  const addTask = (task) => {
    if (inputValue.trim() !== "") {
      setTasks([...tasks, inputValue]);
      setInputValue("");
    }
  };

  const removeTask = (index) => {
    // implement this
    const newTasks = tasks.filter((task, id) => id !== index);
    setTasks(newTasks);
  };

  return (
    <View padding="size-200">
      <Heading level={2}>Todo List</Heading>
      <Flex gap="size-100" marginBottom="size-200">
        <TextField
          placeholder="Enter a task"
          value={inputValue}
          onChange={setInputValue}
          flex={1}
          label="Task Input"
          isRequired
        />
        <Button variant="cta" onPress={addTask}>
          Add
        </Button>
      </Flex>

      <ListView
        aria-label="Task List"
        items={tasks.map((task, index) => ({ id: index, name: task }))}
        height="size-2400"
      >
        {(item) => (
          <Item>
            <Flex justifyContent="space-between" alignItems="center">
              <span>{item.name}</span>
              <Button variant="negative" onPress={() => removeTask(item.id)}>
                Remove
              </Button>
            </Flex>
          </Item>
        )}
      </ListView>
    </View>
  );
};

export default Todo;
