import React from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://www.touropia.com/gfx/d/best-places-to-visit-in-germany/berlin.jpg",
    address: "Berlin",
    description: "Berlin",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://www.touropia.com/gfx/d/most-photographed-cities-in-europe/vienna.jpg",
    address: "Vienna",
    description: "Vienna",
  },
];

const HomePage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default HomePage;
