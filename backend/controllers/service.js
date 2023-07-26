import Service from "../models/Service.js";
import { createError } from "../utils/Error.js";

// create post
export const createPost = async (req, res, next) => {
  const newPost = new Service(req.body);

  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (error) {
    next(error);
  }
};

//update post
export const updatePost = async (req, res, next) => {
  try {
    const post = await Service.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        const updatedPost = await Service.findByIdAndUpdate(
          req.params.id,
          { $set: req.body },
          { new: true }
        );
        res.status(200).json(updatedPost);
      } catch (error) {
        next(error);
      }
    } else {
      next(createError(401, "You can update only your post"));
    }
  } catch (error) {
    next(error);
  }
};

//delete post
export const deletePost = async (req, res, next) => {
  try {
    const post = await Service.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        await Service.findByIdAndDelete(req.params.id);
        res.status(200).json("post deleted");
      } catch (error) {
        next(error);
      }
    } else {
      next(createError(403, "You can delete only your post"));
    }
  } catch (error) {
    next(error);
  }
};

//get a post
export const getPost = async (req, res, next) => {
  try {
    const getPost = await Service.findById(req.params.id);
    res.status(200).json(getPost);
  } catch (error) {
    next(error);
  }
};

//get all post
export const getPosts = async (req, res, next) => {
  try {
    const getPosts = await Service.find();
    res.status(200).json(getPosts);
  } catch (error) {
    next(error);
  }
};
