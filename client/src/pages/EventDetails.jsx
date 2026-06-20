import { useParams } from "react-router-dom";

import eventImg from "../assets/images/event.jpg";
import eventImg2 from "../assets/images/event2.jpg";
import eventImg3 from "../assets/images/event3.jpg";

function EventDetails() {
  const { id } = useParams();

  const defaultEvents = [
    {
      id: "1",
      title: "Night Ops Battle",
      location: "Israel, Tel Aviv",
      date: "2026-07-12",
      image: eventImg,
      description: "Night tactical operation",
    },
    {
      id: "2",
      title: "Forest Skirmish",
      location: "Germany, Berlin",
      date: "2026-07-20",
      image: eventImg2,
      description: "Forest battle",
    },
    {
      id: "3",
      title: "CQB Tournament",
      location: "Poland, Warsaw",
      date: "2026-08-01",
      image: eventImg3,
      description: "CQB fight",
    },
  ];

  const localEvents = JSON.parse(localStorage.getItem("events")) || [];

  const allEvents = [...defaultEvents, ...localEvents];

  const event = allEvents.find((e) => String(e.id) === String(id));

  if (!event) {
    return <h1>Event not found</h1>;
  }

  return (
    <div className="event-details">
      <img src={event.image} />

      <h1>{event.title}</h1>
      <p>{event.location}</p>
      <p>{event.date}</p>
      <p>{event.description}</p>
    </div>
  );
}

export default EventDetails;