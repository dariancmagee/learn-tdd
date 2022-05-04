import {useState} from 'react';
import NewMessagForm from './NewMessageForm';
import MessageList from './MessageList';

export default function App() {
  const [messages, setMessages] = useState([]);
  function handleSend(newMessage) {
    setMessages([newMessage, ...messages]);
  }

  return (
    <>
      <NewMessagForm onSend={handleSend} />
      <MessageList data={messages} />
    </>
  );
}
