import { Request, Response } from "express";
import { User } from "../entities/User";
import { console } from "inspector";

export const createUser = async (req: Request, res: Response) => {
  try {
    const { firstname, lastname } = req.body;
    const user = new User();
    user.firstname = firstname;
    user.lastname = lastname;

    await user.save();
    console.log(user);
    res.json(user);
  } catch (error) {
    res.json(error);
  }
};

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();

    res.json(users);
  } catch (error) {
    res.status(500);
  }
};

export const updateUsers = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await User.findOneBy({ id: parseInt(req.params.id) });

    if (!user) res.status(404).json({ message: "User does not exists" });
    else {
      await User.update({ id: parseInt(id) }, req.body);
      res.sendStatus(204);
    }
  } catch (error) {
    res.status(500);
  }
};

export const deleteUsers = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await User.delete({ id: parseInt(id) });
    console.log(result);
    res.sendStatus(204);
  } catch (error) {
    res.status(500);
  }
};
