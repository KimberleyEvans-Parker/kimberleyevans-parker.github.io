import React from "react"
import { Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Experience } from "./pages/experience/Experience"
import { Work } from "./pages/experience/Work"
import { Volunteer } from "./pages/experience/Volunteer"
import { Projects } from "./pages/experience/Projects"
import { Awards } from "./pages/experience/Awards"
import { Hobbies } from "./pages/hobbies/Hobbies"
import { Lego } from "./pages/hobbies/Lego"
import { Art } from "./pages/hobbies/Art"
import { Cosplays } from "./pages/hobbies/Cosplays"
import { Photography } from "./pages/hobbies/Photography"
import { Travel } from "./pages/hobbies/travel/Travel"
import { Words } from "./pages/words/Words"
import { LocateEntrance } from "./pages/amazonian mystery/LocateEntrance"
import { OpenEntrance } from "./pages/amazonian mystery/OpenEntrance"
import { SolvedMystery } from "./pages/amazonian mystery/SolvedMystery"
import { GetArtefact } from "./pages/amazonian mystery/GetArtefact"
import { Error404 } from "./pages/404"
import { Xero } from "./pages/experience/Xero"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />

        {/* Experience */}
        <Route path="experience" element={<Experience />} />
        <Route path="experience/work" element={<Work />} />
        <Route path="experience/volunteer" element={<Volunteer />} />
        <Route path="experience/projects" element={<Projects />} />
        <Route path="experience/awards" element={<Awards />} />
        <Route path="experience/work/xero" element={<Xero />} />

        {/* Hobbies */}
        <Route path="hobbies" element={<Hobbies />} />
        <Route path="hobbies/lego" element={<Lego />} />
        <Route path="hobbies/art" element={<Art />} />
        <Route path="hobbies/cosplays" element={<Cosplays />} />
        <Route path="hobbies/photography" element={<Photography />} />
        <Route path="hobbies/travel" element={<Travel />} />

        {/* Amazonian Mystery */}
        <Route path="AmazonianMystery" element={<LocateEntrance />} />
        <Route path="AmazonianMystery/OpenEntrance" element={<OpenEntrance />} />
        <Route path="AmazonianMystery/SolvedMystery" element={<SolvedMystery />} />
        <Route path="AmazonianMystery/GetArtefact" element={<GetArtefact />} />

        {/* Words + 404 */}
        <Route path="words" element={<Words />} />
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  )
}

export default App
