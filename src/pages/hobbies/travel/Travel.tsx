import { TravelMap } from './TravelMap';

export const Travel = () => {

  return (
    <div className="content-container experience-container">
      <div className="fade left">
        <h1>Travel</h1>
        <p>
          I love travelling and exploring new places.
          I have been fortunate enough to visit several countries across six different continents, each offering unique experiences and cultures.
        </p>
        <p>
          Some of my favorite destinations include Japan, with its rich history and modern technology;
          Egypt, for its ancient history;
          Vietnam, for its amazing culture;
          and my home country New Zealand, whith its breathtaking landscapes.
        </p>
        <TravelMap />

      </div>
    </div>
  );
}
