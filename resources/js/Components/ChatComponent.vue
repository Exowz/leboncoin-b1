<template>
    <div class="chat-container">
      <div class="chat-messages" ref="messages">
        <div v-for="message in messages" :key="message.id" class="message">
          <div class="message-user">{{ message.user.name }}</div>
          <div class="message-text">{{ message.message }}</div>
        </div>
      </div>
      <input v-model="newMessage" @keyup.enter="sendMessage" placeholder="Type your message here..." />
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  import Echo from 'laravel-echo';
  
  const messages = ref([]);
  const newMessage = ref('');
  
  const fetchMessages = async () => {
    const response = await axios.get('/messages');
    messages.value = response.data;
  };
  
  const sendMessage = async () => {
    if (newMessage.value.trim() === '') return;
  
    await axios.post('/messages', { message: newMessage.value });
    newMessage.value = '';
  };
  
  onMounted(() => {
    fetchMessages();
  
    window.Echo.private('chat')
      .listen('MessageSent', (e) => {
        messages.value.push({
          id: e.message.id,
          message: e.message.message,
          user: e.message.user,
        });
      });
  });
  </script>
  
  <style scoped>
  .chat-container {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  .chat-messages {
    height: 400px;
    overflow-y: auto;
    margin-bottom: 20px;
    padding-right: 10px;
  }
  .message {
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    background: #fff;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  }
  .message-user {
    font-weight: bold;
  }
  .message-text {
    margin-top: 5px;
  }
  input {
    width: calc(100% - 20px);
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  </style>
  