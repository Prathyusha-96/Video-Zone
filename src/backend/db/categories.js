import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Movies",
   
  },
  {
    _id: uuid(),
    categoryName: "Food",
   
  },
  {
    _id: uuid(),
    categoryName: "TEDx Talks",
   
  },
  {
    _id: uuid(),
    categoryName: "Music",
    
  },
];
