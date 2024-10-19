import React, { useState, useEffect } from "react";
import { getEmails, getEmailById } from "./services/tempService.js";
import EmailList from "./components/EmailList";
import EmailDetail from "./components/EmailDetail";
import FilterButtons from "./components/FilterButtons";
import Pagination from "./components/Pagination";

function App() {
  const [emails, setEmails] = useState([]);
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [filter, setFilter] = useState("all");
  const [page, setPage] = useState(1);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetchEmails();
  }, [page]);

  const fetchEmails = async () => {
    const data = await getEmails(page);
    const emailsWithReadStatus = data.list.map((email) => ({
      ...email,
      isRead: false,
    }));
    setEmails(emailsWithReadStatus);
  };

  const handleEmailClick = async (id) => {
    const email = await getEmailById(id);
    setSelectedEmail(email);
    markAsRead(id);
  };

  const markAsRead = (id) => {
    setEmails((prevEmails) =>
      prevEmails.map((email) =>
        email.id === id ? { ...email, isRead: true } : email
      )
    );
  };

  const handleFavoriteToggle = (id) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(id)
        ? prevFavorites.filter((favId) => favId !== id)
        : [...prevFavorites, id]
    );
  };

  const handleFilterChange = (filterType) => {
    setFilter(filterType);
  };

  const filteredEmails = emails.filter((email) => {
    if (filter === "favorites") {
      return favorites.includes(email.id);
    } else if (filter === "read") {
      return email.isRead;
    } else if (filter === "unread") {
      return !email.isRead;
    }
    return true;
  });

  return (
    <div className="flex flex-col bg-slate-300 sm:mx-6 my-7 px-4 py-3 h-full">
      <FilterButtons
        onFilterChange={handleFilterChange}
        activeFilter={filter}
      />

      <div className="flex flex-col md:flex-row w-full">
        <EmailList
          emails={filteredEmails}
          onEmailClick={handleEmailClick}
          favorites={favorites}
          selectedEmail={selectedEmail}
          read={selectedEmail !== null}
          onFavoriteToggle={handleFavoriteToggle}
        />

        {/* This will show the email detail only whe an email is selected */}
        {selectedEmail && (
          <div className="w-full md:w-2/3">
            <EmailDetail
              email={selectedEmail}
              id={selectedEmail.id}
              onFavoriteToggle={handleFavoriteToggle}
              isFavorite={favorites.includes(selectedEmail.id)} // This is for checking if the clicked email is favorited?
            />
          </div>
        )}
      </div>
      <Pagination currentPage={page} onPageChange={setPage} />
    </div>
  );
}

export default App;
