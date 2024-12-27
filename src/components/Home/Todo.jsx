import React, { useState } from "react";
import { Button, ButtonGroup, Content, Form, Divider, Flex, TextField, ListView, Item, Heading, View, Text, ActionMenu, Dialog, DialogContainer, AlertDialog, useDialogContainer } from "@adobe/react-spectrum";

const Todo = () => {
  let [tasks, setTasks] = useState([]);
  let [inputValue, setInputValue] = useState("");
  let [dialog, setDialog] = useState(null);
  let [selectedItem, setSelectedItem] = useState(null);

  
  const addTask = (task) => {
    if (inputValue.trim() !== "") {
      setTasks([...tasks, inputValue]);
      setInputValue("");
    }
  };

  const handleAction = (item, action) => {
    setDialog(action);
    setSelectedItem(item);
  };

  const onDeleteConfirmed = () => {
    const newTasks = tasks.filter((task, index) => selectedItem.id !== index);
    setTasks(newTasks);
  }

  const onSaveConfirmed = (newValue) => {
    const newTasks = [...tasks];
    newTasks[selectedItem.id] = newValue;
    setTasks(newTasks);
  }

  return (
    <View padding="size-200">
      <Heading level={2}>Todo List</Heading>
      <DialogContainer onDismiss={() => setDialog(null)}>
        {dialog === 'edit' &&
          <EditDialog selectedItem={selectedItem} onSave={onSaveConfirmed} />}
        {dialog === 'delete' &&
          (
            <AlertDialog
              title="Delete"
              variant="destructive"
              primaryActionLabel="Delete"
              onPrimaryAction={onDeleteConfirmed}
            >
              Are you sure you want to delete this item?
            </AlertDialog>
          )}
      </DialogContainer>
      <>
        <Flex gap="size-100" marginBottom="size-200" alignItems="flex-end">
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
              <ActionMenu onAction={(action) => handleAction(item, action)}>
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
      </>
    </View>
  );
};

const EditDialog = ({selectedItem, onSave}) => {
  // This hook allows us to dismiss the dialog when the user
  // presses one of the buttons (below).
  let dialog = useDialogContainer();
  let [value, setValue] = useState(selectedItem.name || '')

  const onSaveClicked = () => {
    onSave(value); 
    dialog.dismiss();
  };
  
  return (
    <Dialog>
      <Heading>Edit</Heading>
      <Divider />
      <Content>
        <Form labelPosition="side" width="100%">
          <TextField autoFocus defaultValue={value} onChange={setValue}/>
        </Form>
      </Content>
      <ButtonGroup>
        <Button variant="secondary" onPress={dialog.dismiss}>Cancel</Button>
        <Button variant="accent" onPress={onSaveClicked}>Save</Button>
      </ButtonGroup>
    </Dialog>
  );
}

export default Todo;
