const users = [];

const addUser = ({ id, username, room }) => {
  if (!room || !username) {
    return { error: `username and room are required` };
  }
  username = username.trim().toLowerCase();
  room = room.trim().toLowerCase();

  //existuser check
  const existingUser = users.find((user) => {
    return user.username === username && user.room === room;
  });

  if (existingUser) {
    return { error: "username is in Use" };
  }
  const user = { id, username, room };
  users.push(user);
  return { user };
};

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

const getUser = (id) => {
  const user1 = users.find((user) => user.id === id);
  if (user1 !== undefined) {
    return user1;
  }
  return undefined;
};

const getUsersInRoom = (room) => {
  const usersInroom = users.filter((user) => user.room === room);
  return usersInroom;
};

module.exports = {
  addUser,
  getUser,
  getUsersInRoom,
  removeUser,
};
