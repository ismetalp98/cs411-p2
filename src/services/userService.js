import * as userRepo from "../repository/userRepo"

export const createUser = (name) => {
    return userRepo.registerUser(name);
}

export const getUsers = () => {
    return userRepo.getUsers();
}

export const getChats = (user, setRooms) => {
    return userRepo.getChats(user, setRooms);
}

export const createChat = (user, roomName) => {
    return userRepo.createChat(user, roomName);
}