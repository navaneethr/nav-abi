import React, { useState } from "react";
import { Button, Flex, TextField, ListView, Item, Heading, View, Text, ActionMenu } from "@adobe/react-spectrum";

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  
  const addTask = (task) => {
    if (inputValue.trim() !== "") {
      setTasks([...tasks, inputValue]);
      setInputValue("");
    }
  };

  const handleAction = (id, action) => {
    if (action === 'delete') {
      const newTasks = tasks.filter((task, index) => id !== index);
      setTasks(newTasks);
    } else {
      alert(`Action: ${action}`);
    }
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
            <Text>{item.name}</Text>
            <ActionMenu onAction={(action) => handleAction(item.id, action)}>
              <Item key="delete" textValue="Delete">
                <Text>Delete</Text>
              </Item>
              <Item key="edit" textValue="Edit">
                <Text>Edit</Text>
              </Item>
            </ActionMenu>
          </Item>
        )}
      </ListView>
    </View>
  );
};

export default Todo;
