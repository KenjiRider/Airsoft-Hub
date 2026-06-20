import { useState } from "react";
import { useNavigate } from "react-router-dom";

import eventImg from "../assets/images/event.jpg";
import eventImg2 from "../assets/images/event2.jpg";
import eventImg3 from "../assets/images/event3.jpg";

function CreateEvent() {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("night");
  const [image, setImage] = useState("1");

  const navigate = useNavigate();

  const handleCreate = () => {
    const events = JSON.parse(localStorage.getItem("events")) || [];

    let selectedImage = eventImg;

    if (image === "2") selectedImage = eventImg2;
    if (image === "3") selectedImage = eventImg3;

    const newEvent = {
      id: Date.now(),
      title,
      location,
      date,
      type,
      image: selectedImage,
    };

    events.push(newEvent);

    localStorage.setItem("events", JSON.stringify(events));

    navigate("/events");
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>Create Event</h1>

        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="night">Night</option>
          <option value="forest">Forest</option>
          <option value="cqb">CQB</option>
        </select>

        <select value={image} onChange={(e) => setImage(e.target.value)}>
          <option value="1">Image 1</option>
          <option value="2">Image 2</option>
          <option value="3">Image 3</option>
        </select>

        <button onClick={handleCreate}>
          Create Event
        </button>
      </div>
    </div>
  );
}

export default CreateEvent;