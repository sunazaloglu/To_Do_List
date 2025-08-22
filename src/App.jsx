import { useEffect, useState } from "react";
import InputForm from "./components/InputForm";
import { Container, InputContainer, Button } from "./styles/StyledComponents";
import { nanoid } from "nanoid";
import ToDoList from "./components/ToDoList";
import EditModal from "./components/EditModal";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  const [items, setItems] = useState([]);
  const [newItemContent, setNewItemContent] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItemId, setEditingItemId] = useState(null);
  const [inputEdit, setInputEdit] = useState("");
  const [theme, setTheme] = useState(() => {
    const stored = localStorage.getItem("theme");
    return stored || "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.setAttribute("data-theme", "dark");
    } else {
      root.removeAttribute("data-theme");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const addItem = () => {
    const newItem = {
      id: nanoid(),
      content: newItemContent,
      done: false,
    };

    console.log(newItem);
    setItems((prevItems) => [...prevItems, newItem]);
    console.log(items);
    setNewItemContent("");
  };

  const deleteItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const openEditModal = (id, content) => {
    setEditingItemId(id);
    setInputEdit(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingItemId(null);
    setInputEdit("");
  };

  const saveEditedItem = () => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === editingItemId ? { ...item, content: inputEdit } : item
      )
    );
    closeModal();
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <div style={{ alignSelf: "flex-end", marginBottom: 12 }}>
          <Button onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}>
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </Button>
        </div>
        <InputContainer>
          <InputForm
            newItemContent={newItemContent}
            setNewItemContent={setNewItemContent}
            addItem={addItem}
          />
        </InputContainer>
        <ToDoList items={items} onDelete={deleteItem} onEdit={openEditModal} />
        {isModalOpen && (
          <EditModal
            inputEdit={inputEdit}
            onChange={(e) => setInputEdit(e.target.value)}
            onClose={closeModal}
            onSave={saveEditedItem}
          />
        )}
      </Container>
    </>
  );
}

export default App;
