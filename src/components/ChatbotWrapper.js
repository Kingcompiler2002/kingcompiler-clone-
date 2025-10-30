"use client";

import Chatbot from "./Chatbot";
import { usePathname } from "next/navigation";

export default function ChatbotWrapper() {
  const pathname = usePathname();
  const hideWhatsApp = pathname?.startsWith("/book-demo");
  return <Chatbot hideWhatsApp={!!hideWhatsApp} />;
}
