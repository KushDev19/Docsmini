import React, { useRef } from "react";
import Card from "./Card";


function Foreground() {

  const ref = useRef(null);

  const data = [
    {
      desc: "Hello My Name is kush and i am going to learn react js",
      filesize: ".8mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel?",
      filesize: "10mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur.",
      filesize: "4.9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
  ];

  return (
    <div ref={ref} className="fixed w-full top-0 left-0 z-[3] h-full flex gap-10 flex-wrap">
      {data.map((item, index) => (
        <Card data={item} reference={ref} />
      ))}
    </div>
  );
}


export default Foreground;
