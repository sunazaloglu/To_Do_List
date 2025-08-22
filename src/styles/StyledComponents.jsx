import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  width: 100%;
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 16px;
`;
export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 20px;
  width: 100%;
  flex-wrap: wrap;
`;
export const TextField = styled.input`
  padding: 10px 12px;
  font-size: 16px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  width: 260px;
  max-width: 100%;
  transition: box-shadow 0.2s ease, border-color 0.2s ease;
  outline: none;

  &::placeholder {
    color: var(--color-muted);
  }

  &:focus {
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.15);
  }
`;
export const Button = styled.button`
  padding: 10px 16px;
  font-size: 16px;
  background-color: var(--color-text);
  color: var(--color-surface);
  border: none;
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.05s ease, box-shadow 0.2s ease;
  box-shadow: var(--shadow-sm);

  &:hover {
    background-color: var(--color-primary);
  }

  &:active {
    transform: translateY(1px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 50px;
`;
export const List = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  max-width: 520px;
  margin: 0 auto;
  gap: 8px;

  h2 {
    margin: 8px 0 12px;
    font-size: 20px;
    color: var(--color-text);
  }
`;
export const ListBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 16px;
  margin-bottom: 8px;
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  text-decoration: ${({ done }) => (done ? "line-through" : "none")};
  opacity: ${({ done }) => (done ? 0.6 : 1)};
  transition: box-shadow 0.2s ease, border-color 0.2s ease, background-color 0.2s ease;
  gap: 12px;

  &:hover {
    box-shadow: var(--shadow-md);
    border-color: var(--color-border);
  }

  input[type="checkbox"] {
    cursor: pointer;
    margin-right: 8px;
  }

  span {
    flex: 1;
    text-align: left;
    color: var(--color-text);
    word-break: break-word;
  }
`;

export const EditDeleteContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(2px);
`;
export const ModalContainer = styled.div`
  background-color: var(--color-surface);
  padding: 20px;
  border-radius: var(--radius-md);
  display: flex;
  gap: 10px;
  align-items: center;
  width: 90%;
  max-width: 480px;
  box-shadow: var(--shadow-lg);
`;
