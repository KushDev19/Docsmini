import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion"

function Card({ data, reference }) {
  return (
    <motion.div drag dragConstraints={reference} dragTransition={{bounceStiffness: 100, bounceDamping: 30}} dragElastic={0.2} whileDrag={{scale:1.1}} className="relative w-60 h-72 flex-shrink-0 rounded-[45px] text-white overflow-hidden bg-zinc-900/90 py-10 px-8">
      <FaRegFileAlt />
      <p className="text-sm leading-tight mt-5">{data.desc}</p>
      <div className="footer bottom-0 absolute left-0 w-full">
        <div className="flex items-center px-8 py-3 mb-3 justify-between">
          <h5>{data.filesize}</h5>
          <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
            {data.close ? (
              <IoMdClose />
            ) : (
              <FaDownload size={11} color="white" />
            )}
          </span>
        </div>
        {data.tag.isOpen && (
          <div className={`tag w-full ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center p-3`}>
            <h3 className="text-sm">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
