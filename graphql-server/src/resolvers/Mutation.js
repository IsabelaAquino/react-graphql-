import { v4 as uuidv4 } from 'uuid';

const Mutation = {
    createUser({name, email, phone, password, avatar}, { db }){

      const user = {
        id: uuidv4(),
        name: name,
        email: email,
        phone: phone,
        password: password,
        avatar: avatar
      }

      console.log("user", user)

      db.users.push(user)

      return user;

    },
};
  
export default Mutation;
  