import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import eventImg from "../assets/images/event.jpg";
import eventImg2 from "../assets/images/event2.jpg";
import eventImg3 from "../assets/images/event3.jpg";

function MyEvents() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const load = () => {
      const data = JSON.parse(localStorage.getItem("currentUser"));
      setUser(data);
    };

    load();
    window.addEventListener("storage", load);

    return () => window.removeEventListener("storage", load);
  }, []);

  const allEvents = [
    { id: "1", title: "Night Ops Battle", image: eventImg },
    { id: "2", title: "Forest Skirmish", image: eventImg2 },
    { id: "3", title: "CQB Tournament", image: eventImg3 },
  ];

  const events = user?.myEvents
    ? allEvents.filter((e) =>
        user.myEvents.map(String).includes(String(e.id))
      )
    : [];

  return (
    <div className="events-page">
      <h1 className="events-title">My Events</h1>

      <div className="events-grid">
        {events.length === 0 ? (
          <p>No events yet</p>
        ) : (
          events.map((event) => (
            <Link
              to={`/events/${event.id}`}
              key={event.id}
              className="event-card"
            >
              <img src={event.image} className="event-img" />

              <div className="event-info">
                <h3>{event.title}</h3>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}

export default MyEvents;