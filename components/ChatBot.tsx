"use client";

import { useState, useRef, useEffect, KeyboardEvent } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const INITIAL_MESSAGE: Message = {
  role: "assistant",
  content:
    "Hi! 👋 I'm Akhil's AI assistant. Ask me anything about his experience, skills, education, or background — I'll answer straight from his resume!",
};

const SUGGESTED_QUESTIONS = [
  "Where does Akhil currently work?",
  "What are his top technical skills?",
  "Tell me about his education",
  "What did he build at Verifone?",
];

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasUnread, setHasUnread] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      setHasUnread(false);
    }
  }, [isOpen]);

  const sendMessage = async (text?: string) => {
    const messageText = (text ?? input).trim();
    if (!messageText || isLoading) return;

    setInput("");
    setShowSuggestions(false);

    const userMessage: Message = { role: "user", content: messageText };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setIsLoading(true);

    try {
      // Build history excluding the initial greeting
      const history = messages
        .slice(1)
        .map((m) => ({ role: m.role, content: m.content }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: messageText, history }),
      });

      const data = await res.json();
      const assistantMessage: Message = {
        role: "assistant",
        content:
          data.message ||
          "Sorry, I couldn't get a response. Please try again!",
      };

      setMessages([...updatedMessages, assistantMessage]);

      // Show unread badge if chat is closed
      if (!isOpen) setHasUnread(true);
    } catch {
      setMessages([
        ...updatedMessages,
        {
          role: "assistant",
          content: "Oops, something went wrong. Please try again!",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* ── Floating bubble button ─────────────────────────────────── */}
      <button
        onClick={() => setIsOpen((v) => !v)}
        aria-label={isOpen ? "Close chat" : "Open Akhil's AI assistant"}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 active:scale-95"
        style={{ background: isOpen ? "#0F172A" : "#22D3EE", border: isOpen ? "2px solid #22D3EE" : "none" }}
      >
        {/* Unread badge */}
        {hasUnread && !isOpen && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-[#0F172A]" />
        )}

        {isOpen ? (
          /* Close (X) icon */
          <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          /* Chat bubble icon */
          <svg className="w-7 h-7 text-[#0F172A]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 2H4a2 2 0 00-2 2v18l4-4h14a2 2 0 002-2V4a2 2 0 00-2-2zm-2 10H6V10h12v2zm0-3H6V7h12v2z" />
          </svg>
        )}
      </button>

      {/* ── Chat panel ────────────────────────────────────────────── */}
      <div
        className={`fixed bottom-24 right-6 z-50 w-80 sm:w-96 flex flex-col rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        style={{ height: "520px", background: "#112240", border: "1px solid #1E3A5F" }}
      >
        {/* Header */}
        <div
          className="flex items-center gap-3 px-4 py-3 flex-shrink-0"
          style={{ background: "#0F172A", borderBottom: "1px solid #1E3A5F" }}
        >
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
            style={{ background: "#22D3EE", color: "#0F172A" }}
          >
            AK
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-slate-100 font-semibold text-sm leading-tight">Akhil's AI Assistant</p>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <p className="text-xs text-slate-400">Powered by Gemini · Resume-only</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-slate-500 hover:text-slate-300 transition-colors"
            aria-label="Close"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3" style={{ scrollbarWidth: "thin", scrollbarColor: "#1E3A5F transparent" }}>
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              {msg.role === "assistant" && (
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mr-2 mt-0.5 self-end"
                  style={{ background: "#22D3EE", color: "#0F172A" }}
                >
                  A
                </div>
              )}
              <div
                className={`max-w-[78%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                  msg.role === "user"
                    ? "rounded-br-sm font-medium"
                    : "rounded-bl-sm"
                }`}
                style={
                  msg.role === "user"
                    ? { background: "#22D3EE", color: "#0F172A" }
                    : { background: "#1E3A5F", color: "#CBD5E1" }
                }
              >
                {msg.content}
              </div>
            </div>
          ))}

          {/* Loading dots */}
          {isLoading && (
            <div className="flex justify-start items-end gap-2">
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                style={{ background: "#22D3EE", color: "#0F172A" }}
              >
                A
              </div>
              <div
                className="rounded-2xl rounded-bl-sm px-4 py-3"
                style={{ background: "#1E3A5F" }}
              >
                <div className="flex gap-1 items-center">
                  {[0, 150, 300].map((delay, idx) => (
                    <span
                      key={idx}
                      className="w-2 h-2 rounded-full animate-bounce"
                      style={{ background: "#22D3EE", animationDelay: `${delay}ms` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Suggested questions (shown initially) */}
          {showSuggestions && messages.length === 1 && !isLoading && (
            <div className="space-y-2 pt-1">
              <p className="text-xs text-slate-500 px-1">Try asking:</p>
              {SUGGESTED_QUESTIONS.map((q) => (
                <button
                  key={q}
                  onClick={() => sendMessage(q)}
                  className="w-full text-left text-xs px-3 py-2 rounded-xl border transition-all duration-150 hover:border-cyan-400 hover:text-cyan-400"
                  style={{ borderColor: "#1E3A5F", color: "#94A3B8", background: "transparent" }}
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input area */}
        <div
          className="flex items-center gap-2 p-3 flex-shrink-0"
          style={{ borderTop: "1px solid #1E3A5F" }}
        >
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask about Akhil..."
            disabled={isLoading}
            className="flex-1 text-sm rounded-xl px-4 py-2.5 outline-none transition-all duration-150"
            style={{
              background: "#0F172A",
              color: "#E2E8F0",
              border: "1px solid #1E3A5F",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#22D3EE")}
            onBlur={(e) => (e.target.style.borderColor = "#1E3A5F")}
          />
          <button
            onClick={() => sendMessage()}
            disabled={isLoading || !input.trim()}
            aria-label="Send message"
            className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-150 active:scale-95 disabled:opacity-40"
            style={{
              background: isLoading || !input.trim() ? "#1E3A5F" : "#22D3EE",
            }}
          >
            <svg
              className="w-4 h-4"
              style={{ color: isLoading || !input.trim() ? "#64748B" : "#0F172A" }}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.269 20.876L5.999 12zm0 0h7.5" />
            </svg>
          </button>
        </div>

        {/* Footer branding */}
        <p
          className="text-center text-xs py-1.5 flex-shrink-0"
          style={{ color: "#334155", background: "#0F172A" }}
        >
          🔒 Answers from resume only · Powered by Gemini
        </p>
      </div>
    </>
  );
}
