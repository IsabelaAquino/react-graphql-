import { v4 as uuidv4 } from 'uuid';

const Mutation = {
    createUser(args, { db }) {

      const user = {
        id: uuidv4(),
        name: args.name,
        email: args.email,
        phone: args.phone,
        password: args.password,
        avatar: args.avatar
      }

      console.log("input", user)

      db.users.push(user)

      return user;

    },
};
  
export default Mutation;
  