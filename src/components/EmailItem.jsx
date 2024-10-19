import React from "react";
import { MdFavoriteBorder } from "react-icons/md";
function EmailItem({ email, onEmailClick, isFavorite, isOpen }) {
  return (
    <div
      className={`flex flex-col md:flex-row  items-start w-full md:gap-x-2 px-2 py-3 rounded-md border-2 mb-3 cursor-pointer
        ${
          isFavorite
            ? "bg-green-500"
            : isOpen
            ? "bg-blue-200"
            : email.read
            ? "bg-yellow-300"
            : "bg-neutral-300"
        } 
        `}
      onClick={() => onEmailClick(email.id)}
    >
      <div className="bg-pink-500 md:w-fit px-4 py-2 rounded-full font-bold text-lg">
        {email.from.name.charAt(0)}
      </div>
      <div className="flex flex-col justify-center items-start">
        <div className="flex justify-center items-center gap-x-2">
          From:{" "}
          <div className="flex gap-x-1 font-semibold text-sm sm:text-base overflow-hidden">
            <span>{email.from.name}</span>
            <span>{email.from.email}</span>
          </div>
        </div>
        <h4>
          Subject: <span className="font-semibold">{email.subject}</span>
        </h4>
        <p className="text-neutral-500">{email.short_description}</p>

        <span className="border-b-2 px-1 border-neutral-950 rounded-md">
          {new Date(email.date).toLocaleString()}
        </span>
      </div>
    </div>
  );
}

export default EmailItem;
