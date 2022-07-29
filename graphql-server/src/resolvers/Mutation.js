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
};
  
export default Mutation;
  