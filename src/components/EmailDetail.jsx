import React from "react";

function EmailDetail({ email, onEmailClick, onFavoriteToggle, isFavorite }) {
  if (!email) return null; // In case there is no email passed

  return (
    <div
      className="p-4 border border-gray-300 shadow-md rounded-md h-full"
      onClick={() => onEmailClick(email.id)}
    >
      {/* Email Body */}
      <p className="mb-4 text-gray-800">
        {email.body.substring(8, email.body.length - 10)}{" "}
        {/* By default Api was
        rendering the body with div and p tag. So i used js property to stop
        render*/}
      </p>

      <button
        className={`bg-neutral-400 border-2 border-neutral-600 hover:bg-emerald-400 px-3 py-1 rounded-md ${
          isFavorite ? "bg-emerald-400" : "bg-neutral-400"
        }`}
        onClick={(e) => {
          e.stopPropagation();
          onFavoriteToggle(email.id);
        }}
      >
        {isFavorite ? "Unmark Favorite" : "Mark as Favorite"}
      </button>
    </div>
  );
}

export default EmailDetail;
