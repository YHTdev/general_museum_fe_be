import React from "react";
import { motion } from "framer-motion";
import { BookCard } from "../../atoms/UiBookCard";

interface props {
  books: any;
}
export const BooksForm: React.FC<props> = ({ books }) => {
  return (
    <div className="grid w-full max-w-screen-xl grid-cols-12 gap-4 mx-auto">
      {books.map((b: any, i: any) => (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="col-span-4"
          key={i}>
          <BookCard book={b} />
        </motion.div>
      ))}
    </div>
  );
};
