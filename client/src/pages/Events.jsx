import { useState } from "react";
import eventImg from "../assets/images/event.jpg";
import eventImg2 from "../assets/images/event2.jpg";
import eventImg3 from "../assets/images/event3.jpg";

function Events() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const localEvents = JSON.parse(localStorage.getItem("events")) || [];

  const defaultEvents = [
    {
      id: "1",
      title: "Night Ops Battle",
      location: "Israel, Tel Aviv",
      date: "2026-07-12",
      image: eventImg,
      type: "night",
    },
    {
      id: "2",
      title: "Forest Skirmish",
      location: "Germany, Berlin",
      date: "2026-07-20",
      image: eventImg2,
      type: "forest",
    },
    {
      id: "3",
      title: "CQB Tournament",
      location: "Poland, Warsaw",
      date: "2026-08-01",
      image: eventImg3,
      type: "cqb",
    },
  ];

  const events = [...defaultEvents, ...localEvents];

  const filteredEvents = events.filter((event) => {
    const matchesSearch = event.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter =
      filter === "all" || event.type === filter;

    return matchesSearch && matchesFilter;
  });

  const handleJoin = (eventId) => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (!currentUser) return;

    const id = String(eventId);

    const updatedUser = {
      ...currentUser,
      myEvents: currentUser.myEvents
        ? currentUser.myEvents.map(String)
        : [],
    };

    if (!updatedUser.myEvents.includes(id)) {
      updatedUser.myEvents.push(id);
    }

    localStorage.setItem("currentUser", JSON.stringify(updatedUser));
  };

  const handleDelete = (eventId) => {
    const local = JSON.parse(localStorage.getItem("events")) || [];

    const updated = local.filter(
      (e) => String(e.id) !== String(eventId)
    );

    localStorage.setItem("events", JSON.stringify(updated));
    window.location.reload();
  };

  return (
    <div className="events-page">
      <h1 className="events-title">Events</h1>

      <input
        className="search-input"
        placeholder="Search events..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="filter-buttons">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("night")}>Night</button>
        <button onClick={() => setFilter("forest")}>Forest</button>
        <button onClick={() => setFilter("cqb")}>CQB</button>
      </div>

      <div className="events-grid">
        {filteredEvents.map((event) => (
          <div key={event.id} className="event-card">
            <img src={event.image} className="event-img" />

            <div className="event-info">
              <h3>{event.title}</h3>
              <p>{event.location}</p>
              <span>{event.date}</span>

              <button
                onClick={() =>
                  (window.location.href = `/events/${event.id}`)
                }
              >
                View
              </button>

              <button
                className="join-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  handleJoin(event.id);
                }}
              >
                Join
              </button>

              <button
                className="delete-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDelete(event.id);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;