/**
 * Gideon AI Chat Widget
 * Embeddable chatbot for client websites
 *
 * Usage:
 * <script src="https://your-gideon-domain.com/widget/gideon-chat.js" data-site-id="buygeogrid"></script>
 */

(function() {
  'use strict';

  // Configuration
  const config = {
    apiUrl: document.currentScript?.getAttribute('data-api-url') || 'https://gideon-framework.vercel.app',
    siteId: document.currentScript?.getAttribute('data-site-id') || 'demo',
    primaryColor: document.currentScript?.getAttribute('data-color') || '#00c97e',
    position: document.currentScript?.getAttribute('data-position') || 'bottom-right',
    greeting: document.currentScript?.getAttribute('data-greeting') || 'Hi! How can I help you today?',
    brandName: document.currentScript?.getAttribute('data-brand-name') || 'AI Assistant',
  };

  // State
  let isOpen = false;
  let messages = [];
  let isLoading = false;

  // Create widget HTML
  function createWidget() {
    const widgetHTML = `
      <div id="gideon-chat-widget" class="gideon-widget" style="--primary-color: ${config.primaryColor}">
        <!-- Chat Button -->
        <button id="gideon-chat-button" class="gideon-chat-button ${config.position}" aria-label="Open chat">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
          <span class="gideon-badge" id="gideon-badge" style="display: none;">1</span>
        </button>

        <!-- Chat Window -->
        <div id="gideon-chat-window" class="gideon-chat-window ${config.position}" style="display: none;">
          <!-- Header -->
          <div class="gideon-header">
            <div class="gideon-header-content">
              <div class="gideon-avatar">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                  <line x1="9" y1="9" x2="9.01" y2="9"></line>
                  <line x1="15" y1="9" x2="15.01" y2="9"></line>
                </svg>
              </div>
              <div>
                <div class="gideon-brand-name">${config.brandName}</div>
                <div class="gideon-status">
                  <span class="gideon-status-dot"></span>
                  <span>Online</span>
                </div>
              </div>
            </div>
            <button id="gideon-close-button" class="gideon-close-button" aria-label="Close chat">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <!-- Messages -->
          <div id="gideon-messages" class="gideon-messages">
            <div class="gideon-message gideon-message-bot">
              <div class="gideon-message-content">
                ${config.greeting}
              </div>
            </div>
          </div>

          <!-- Input -->
          <div class="gideon-input-container">
            <input
              type="text"
              id="gideon-input"
              class="gideon-input"
              placeholder="Type your message..."
              autocomplete="off"
            />
            <button id="gideon-send-button" class="gideon-send-button" aria-label="Send message">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </div>

          <!-- Powered by -->
          <div class="gideon-footer">
            <span>Powered by Gideon AI</span>
          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', widgetHTML);
  }

  // Load CSS
  function loadCSS() {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    // For local testing, load from same directory as JS
    link.href = '/widget/gideon-chat.css';
    document.head.appendChild(link);
  }

  // Toggle chat window
  function toggleChat() {
    isOpen = !isOpen;
    const chatWindow = document.getElementById('gideon-chat-window');
    const chatButton = document.getElementById('gideon-chat-button');
    const badge = document.getElementById('gideon-badge');

    if (isOpen) {
      chatWindow.style.display = 'flex';
      chatButton.style.display = 'none';
      badge.style.display = 'none';
      document.getElementById('gideon-input').focus();
    } else {
      chatWindow.style.display = 'none';
      chatButton.style.display = 'flex';
    }
  }

  // Send message to API
  async function sendMessage(content) {
    if (!content.trim()) return;

    // Add user message to UI
    addMessage('user', content);

    // Clear input
    document.getElementById('gideon-input').value = '';

    // Show loading
    isLoading = true;
    const loadingId = addMessage('bot', '...');

    try {
      const response = await fetch(`${config.apiUrl}/api/ai/concierge`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: messages.map(m => ({
            role: m.role === 'user' ? 'user' : 'assistant',
            content: m.content
          })),
          context: {
            tenantSlug: config.siteId,
            tenantName: config.brandName,
          },
          useCase: 'fast',
          stream: false,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();

      // Remove loading message
      removeMessage(loadingId);

      // Add bot response
      addMessage('bot', data.content);

    } catch (error) {
      console.error('Chat error:', error);
      removeMessage(loadingId);
      addMessage('bot', "I'm sorry, I'm having trouble connecting right now. Please try again in a moment.");
    } finally {
      isLoading = false;
    }
  }

  // Add message to UI
  function addMessage(role, content) {
    const messageId = `msg-${Date.now()}-${Math.random()}`;
    const messagesContainer = document.getElementById('gideon-messages');

    const messageHTML = `
      <div class="gideon-message gideon-message-${role === 'user' ? 'user' : 'bot'}" id="${messageId}">
        <div class="gideon-message-content">
          ${content}
        </div>
      </div>
    `;

    messagesContainer.insertAdjacentHTML('beforeend', messageHTML);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    // Store in messages array
    messages.push({ role, content, id: messageId });

    return messageId;
  }

  // Remove message from UI
  function removeMessage(messageId) {
    const messageEl = document.getElementById(messageId);
    if (messageEl) {
      messageEl.remove();
    }
    messages = messages.filter(m => m.id !== messageId);
  }

  // Initialize widget
  function init() {
    // Load CSS
    loadCSS();

    // Create widget HTML
    createWidget();

    // Add event listeners
    document.getElementById('gideon-chat-button').addEventListener('click', toggleChat);
    document.getElementById('gideon-close-button').addEventListener('click', toggleChat);

    document.getElementById('gideon-send-button').addEventListener('click', () => {
      const input = document.getElementById('gideon-input');
      sendMessage(input.value);
    });

    document.getElementById('gideon-input').addEventListener('keypress', (e) => {
      if (e.key === 'Enter' && !isLoading) {
        sendMessage(e.target.value);
      }
    });

    console.log('✅ Gideon Chat Widget initialized for site:', config.siteId);
  }

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
