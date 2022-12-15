import * as chatRepo from "../repository/chatRepo";
import { serverTimestamp } from "firebase/firestore";

export const sendMessage = (user, roomId, input) => {
    const formattedInput = input.trim();
    if(!formattedInput) return;
    const message = {
        message: formattedInput,
        name: user,
        timestamp: serverTimestamp(),
    }
    chatRepo.sendMessage(message, roomId, user);
}

export const getMessages = (user, roomId, setMessages) => {
    if(!user || !roomId) return;
    return chatRepo.getMessages(user, roomId, setMessages);
}