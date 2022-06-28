import React, { useState } from "react";
import { motion } from "framer-motion";

import Link from "next/link";
import { categoryProps } from "../../pages/category";

interface props {
  category: categoryProps;
}
export const CategoryCard: React.FC<props> = ({ category }) => {
  return (
   <Link href={`${category.id}/book`}>
    <motion.div
      initial={{ scale: 0.9, opacity: 0.9 }}
      whileHover={{ scale: 1, opacity: 1 }}
      className="w-full relative flex flex-col justify-center items-center h-60 px-2 py-2 bg-white rounded-md"
    >
      <img src={category.cover} alt={category.name} className="w-24 h-24" />
      <div className="absolute bottom-0  bg-secondary text-white rounded-b-md w-full px-2 py-2 flex justify-center items-center content-center">
        <motion.span
          initial={{ scale: 0.8, opacity: 0.8 }}
          whileHover={{ scale: 1, opacity: 1 }}
        >
          {category.name}
        </motion.span>
      </div>
    </motion.div>
   </Link>
  );
};
