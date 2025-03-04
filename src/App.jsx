import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/navbar";
import About from "./Components/About";
import ProfileForm from "./Components/ProfileForm";
import { useState } from "react";
import Wrapper from "./Components/wrapper";


import Card from "./Components/Card";


function App() {
  const [mode, setMode] = useState("light");
  const [profiles, setProfiles] = useState(mockProfiles);

  const updateMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  const addProfile = (newProfile) => {
    setProfiles([...profiles, newProfile]);
  };

  return (
    <Router>
      <main className={mode === "dark" ? "dark" : ""}>
        <Navbar mode={mode} updateMode={updateMode} />
        <Wrapper>
          <Routes>
            <Route path="/" element={<Home profiles={profiles} />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/add-profile"
              element={<ProfileForm addProfile={addProfile} />}
            />
          </Routes>
        </Wrapper>
      </main>
    </Router>
  );
}

const Home = ({ profiles }) => {
  return (
    <div>
      <h1>Job Application - Profile List</h1>
      <div className="profile-list">
        {profiles.map((profile, index) => (
          <Card
            key={index}
            name={profile.name}
            title={profile.title}
            email={profile.email}
            image_url={profile.image_url}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
