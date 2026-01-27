import { useRef, useEffect, useCallback } from 'react';
import { SEO } from '../components/SEO';
import { typography } from '../utils/typography';
import ChatMessage from '../components/chat/ChatMessage';
import ChatInput from '../components/chat/ChatInput';
import ChatSuggestions from '../components/chat/ChatSuggestions';
import TypingIndicator from '../components/chat/TypingIndicator';
import ErrorBoundary from '../components/ErrorBoundary';
import { ChatErrorFallback } from '../components/ErrorFallbacks';
import { useSessionStorage } from '../hooks';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const CHAT_ENDPOINT = import.meta.env.VITE_CHAT_ENDPOINT;
const CHAT_STORAGE_KEY = 'chat-messages';

const initialWelcomeMessage: Message = {
  id: 'welcome',
  role: 'assistant',
  content: "Hey there! I'm Christian's Personal AI Assistant here to help you learn more about him. Feel free to ask about his background, Altivum® Inc, The Vector Podcast, or his book \"Beyond the Assessment.\" What would you like to know?",
  timestamp: new Date(),
};

const ChatContent = () => {
  const [messages, setMessages, clearMessages] = useSessionStorage<Message[]>(
    CHAT_STORAGE_KEY,
    [initialWelcomeMessage]
  );
  const [isTyping, setIsTyping] = useSessionStorage<boolean>('chat-typing', false);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  // Show suggestions only if no user messages exist yet
  const hasUserMessages = messages.some((m) => m.role === 'user');
  const showSuggestions = !hasUserMessages;

  // Clear conversation handler
  const handleClearConversation = useCallback(() => {
    clearMessages();
  }, [clearMessages]);
  const scrollToBottom = () => {
    // Scroll within the messages container, not the whole page
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTo({
        top: messagesContainerRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    // Only scroll to bottom after user has sent a message
    if (messages.length > 1) {
      scrollToBottom();
    }
  }, [messages, isTyping]);

  const handleSend = async (content: string) => {
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: 'user',
      content,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    // Prepare conversation history for API (excluding welcome message)
    const conversationHistory = [...messages.filter(m => m.id !== 'welcome'), userMessage].map((msg) => ({
      role: msg.role,
      content: msg.content,
    }));

    // Create placeholder for assistant response
    const assistantMessageId = `assistant-${Date.now()}`;
    setMessages((prev) => [
      ...prev,
      {
        id: assistantMessageId,
        role: 'assistant',
        content: '',
        timestamp: new Date(),
      },
    ]);
    setIsTyping(false);

    try {
      const response = await fetch(CHAT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: conversationHistory }),
      });

      if (!response.ok) throw new Error('Failed to get response');

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();

      if (reader) {
        let done = false;
        while (!done) {
          const result = await reader.read();
          done = result.done;

          if (result.value) {
            const chunk = decoder.decode(result.value, { stream: true });

            // Append chunk to the assistant message
            setMessages((prev) =>
              prev.map((msg) =>
                msg.id === assistantMessageId
                  ? { ...msg, content: msg.content + chunk }
                  : msg
              )
            );
          }
        }
      }
    } catch (error) {
      console.error('Chat error:', error);
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === assistantMessageId
            ? {
                ...msg,
                content:
                  'I apologize, but I encountered an error. Please try again.',
              }
            : msg
        )
      );
    }
  };

  const handleSuggestionSelect = (suggestion: string) => {
    handleSend(suggestion);
  };

  return (
    <div className="h-screen pt-20 flex flex-col bg-altivum-dark overflow-hidden">
      <SEO
        title="AI Chat"
        description="Have a conversation with an AI assistant trained on Christian Perez's background, work, and expertise. Learn about his journey from Green Beret to tech CEO."
        keywords="AI chat, Christian Perez, conversation, Altivum, veteran entrepreneur"
        url="https://thechrisgrey.com/chat"
        breadcrumbs={[
          { name: "Home", url: "https://thechrisgrey.com" },
          { name: "AI Chat", url: "https://thechrisgrey.com/chat" }
        ]}
      />

      {/* Header */}
      <div className="border-b border-white/10 bg-altivum-dark/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6 py-6 flex items-start justify-between">
          <div>
            <h1 className="text-white mb-2" style={typography.cardTitleLarge}>
              AI Chat
            </h1>
            <p className="text-altivum-silver" style={typography.smallText}>
              Ask me anything about Christian's background, Altivum, the podcast, or his book.
            </p>
          </div>
          {hasUserMessages && (
            <button
              onClick={handleClearConversation}
              className="flex items-center gap-2 px-4 py-2 text-altivum-silver hover:text-white border border-white/20 hover:border-white/40 rounded transition-colors duration-200 text-sm"
              aria-label="Clear conversation"
            >
              <span className="material-icons text-base">refresh</span>
              <span className="hidden sm:inline">Clear</span>
            </button>
          )}
        </div>
      </div>

      {/* Messages Container */}
      <div
        ref={messagesContainerRef}
        className="flex-1 overflow-y-auto"
      >
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div
            className="space-y-6"
            role="log"
            aria-live="polite"
            aria-label="Chat messages"
          >
            {messages.map((message) => (
              <ChatMessage
                key={message.id}
                role={message.role}
                content={message.content}
              />
            ))}
            {isTyping && <TypingIndicator />}
          </div>
        </div>

        {/* Suggestions */}
        {showSuggestions && (
          <div className="max-w-4xl mx-auto">
            <ChatSuggestions onSelect={handleSuggestionSelect} />
          </div>
        )}
      </div>

      {/* Input Area */}
      <ChatInput onSend={handleSend} disabled={isTyping} />
    </div>
  );
};

// Clear chat storage on error reset
const handleChatErrorReset = () => {
  if (typeof window !== 'undefined') {
    window.sessionStorage.removeItem(CHAT_STORAGE_KEY);
    window.sessionStorage.removeItem('chat-typing');
  }
};

const Chat = () => {
  return (
    <ErrorBoundary
      fallback={<ChatErrorFallback onRetry={handleChatErrorReset} />}
      onReset={handleChatErrorReset}
      showHomeButton={false}
      pageName="Chat"
    >
      <ChatContent />
    </ErrorBoundary>
  );
};

export default Chat;
