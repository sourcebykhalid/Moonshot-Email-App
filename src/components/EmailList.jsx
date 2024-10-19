import React from "react";
import { FaRegStar } from "react-icons/fa";
function EmailList({ emails, onEmailClick, favorites, read }) {
  return (
    <ul
      className={`${
        read ? "w-full md:w-1/3" : "w-full"
      } border-r-2 border-gray-300`}
    >
      {emails.map((email) => (
        <li
          key={email.id}
          className={`sm:p-4 border-b cursor-pointer ${
            email.isRead ? "bg-gray-200" : "bg-neutral-100"
          }`}
          onClick={() => onEmailClick(email.id)}
        >
          <div className="flex flex-col md:flex-row items-center sm:items-start w-full md:gap-x-2 sm:px-2 py-3 rounded-md border-2 mb-3 cursor-pointe">
            <div className="bg-pink-500 md:w-fit px-4 py-2 rounded-full font-bold text-lg">
              {email.from.name.charAt(0)}
            </div>
            <div className="flex flex-col   items-start">
              <div className="flex justify-center items-center gap-x-2">
                From:{" "}
                <div
                  className={`flex  sm:flex-row justify-center sm:items-start gap-x-1 font-semibold text-base  overflow-hidden`}
                >
                  <span className=" text-base">{email.from.name}</span>
                  <span>{email.from.email}</span>
                </div>
              </div>
              <h4>
                Subject: <span className="font-semibold">{email.subject}</span>
              </h4>

              <div className="flex justify-between items-center w-full">
                <span className="block text-sm text-gray-500">
                  {new Date(email.date).toLocaleString()}
                </span>
                {favorites.includes(email.id) && (
                  <span className=" text-5xl font-bold sm:text-base text-yellow-500">
                    <FaRegStar />
                  </span>
                )}
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default EmailList;
