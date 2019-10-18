import { User } from "../../entity/User";

const user = async (parent, {id}) => {
    const findUser = await User.findOne({id});
    return findUser;
}
const users = async (parent, args) => {
    return await User.find();
}

const join = async (parent, args) => {
    const user = await User.create({...args.input}).save();
    return user
}
const updateUser = async (parent, args) => {
    return "hello"

}
const Query = { user, users };
const Mutation = { join, updateUser }

export {
    Query,
    Mutation
}