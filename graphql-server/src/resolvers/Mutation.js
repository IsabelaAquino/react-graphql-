import { v4 as uuidv4 } from 'uuid';

const Mutation = {
    createUser(parent, {name, email, phone, password, avatar}, { db }, info){

      const user = {
        id: uuidv4(),
        name,
        email,
        phone,
        password,
        avatar
      }

      db.users.push(user)

      return user;

    },

    editUser(parent, {id, name, email, phone, password, avatar}, { db }, info){
      const user = {
        id,
        name,
        email,
        phone,
        password,
        avatar
      }

      for (let i = 0; i < db.users.length; i++) {
        if (db.users[i].id === user.id) {
          db.users[i] = user;
          break;
        }
      }

      return user;
    },

    deleteUser(parent, {id}, { db }, info){

      let newUsers = db.users.filter(function(item) {
          return item.id != id;
      });

      db.users = newUsers

      return db.users;
    },
};
  
export default Mutation;
  