import { Bot, Sparkles } from "lucide-react";

export default function AiAssistant() {
  return (
    <div className="flex h-full items-center justify-center flex-col gap-4 bg-[#07070A] text-white p-6">
      <div className="h-16 w-16 rounded-full bg-purple-600/20 flex items-center justify-center">
        <Bot size={32} className="text-purple-400" />
      </div>
      <h1 className="text-3xl font-bold">Neat AI Assistant</h1>
      <p className="text-zinc-400 max-w-md text-center">
        This is where ISPs will interact with the AI to understand the protocol,
        run commands, and read the entire network.
      </p>
      <button className="mt-4 px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-500 transition text-white font-medium">
        Start Chatting
      </button>
    </div>
  );
}
