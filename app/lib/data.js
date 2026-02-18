import { Product, User } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async (q, page) => {
  const regex = new RegExp(q, "i");
  const ITEM_PER_PAGE = 2;

  try {
    connectToDB();
    const totalUsers = await User.countDocuments({
      username: { $regex: regex },
    });
    const users = await User.find({ username: { $regex: regex } })
      .sort({ isActive: -1, createdAt: -1 })
      .limit(ITEM_PER_PAGE)
      .skip((page - 1) * ITEM_PER_PAGE);
    return { totalUsers, users };
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch users!");
  }
};

export const fetchProducts = async (q, page) => {
  const regex = new RegExp(q, "i");
  const ITEM_PER_PAGE = 2;

  try {
    connectToDB();
    const totalProducts = await Product.countDocuments({
      title: { $regex: regex },
    });
    const products = await Product.find({ title: { $regex: regex } })
      .sort({ isActive: -1, createdAt: -1 })
      .limit(ITEM_PER_PAGE)
      .skip((page - 1) * ITEM_PER_PAGE);
    return { totalProducts, products };
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch products!");
  }
};

export const fetchUser = async (id) => {
  try {
    connectToDB();
    const user = await User.findById(id);
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch user!");
  }
};

export const fetchProduct = async (id) => {
  try {
    connectToDB();
    const product = await Product.findById(id);
    return product;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch product!");
  }
};
