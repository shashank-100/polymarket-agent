import { create } from "zustand";
import { ChatState } from "@/types";
import { CoreMessage } from "ai";

interface ChatActions {
    setBase64Images: (images: string[] | null) => void;
    updateMessages: (updateFn: (messages: CoreMessage[]) => CoreMessage[]) => void;
}

const useChatStore = create<ChatState & ChatActions>((set) => ({
    // Initial state
    base64Images: null,
    messages: [],

    // Actions
    setBase64Images: (images) => set({ base64Images: images }),
    updateMessages: (updateFn) =>
        set((state) => ({
            messages: updateFn(state.messages),
        })),
}));

export default useChatStore;