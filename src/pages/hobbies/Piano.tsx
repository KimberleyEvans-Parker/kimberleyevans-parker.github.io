import { getImageName, importAllPhotosFromFolder } from "../../helpers/Helpers"

import AutumnMood from "../../assets/hobbies/Piano/Autumn Mood.mp4"
import Secrets from "../../assets/hobbies/Piano/Secrets.mp4"
import TopOfTheMorning from "../../assets/hobbies/Piano/Top of the Morning.mp4"
import { VideoViewer } from "../components/VideoViewer"

export const Piano = () => {
  const pianoVideos = importAllPhotosFromFolder("hobbies/Piano")

  return (
    <div className="content-container">
      <div className="fade left">
        <h1>Piano</h1>
        <p>
          I enjoy playing piano. Now I play for fun and enjoy learning new songs.
          My favourite time I performed was with my family for my grandparents' 80th birthday.
          Here I played Top of the Morning with my mother and brother on the drums,
          and Secrets with my brother and cousin on the guitar.
        </p>
        <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>
          <div>
            <VideoViewer videoSrc={TopOfTheMorning} title="Top of the Morning" subtitle="Played with my mother (paino) and brother (drums) for my grandparents' 80th birthday" />
            <VideoViewer videoSrc={Secrets} title="Secrets" subtitle="Played with my brother (drums) and cousin (guitar) for my grandparents' 80th birthday" />
          </div>
          <VideoViewer videoSrc={AutumnMood} title="Autumn Mood" subtitle="Found a piano in the Turin Palace! Was lovely to play it." />
        </div>

      </div>
    </div>
  )
}
