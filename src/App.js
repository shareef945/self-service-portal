import "./App.css";
import "@tremor/react/dist/esm/tremor.css";
import { TextInput } from "@tremor/react";
import { useState } from "react";
import { SearchIcon } from "@heroicons/react/solid";
import { Badge } from "@tremor/react";
import "@fontsource/inter";
import Card from "./components/Card";

function App() {
  const [search, setSearch] = useState("");
  const [name, setName] = useState("Shareef");
  const apps = [
    { application: "ECG", url: "/portal/ecg" },
    { application: "E-Levy", url: "/portal/ecg" },
    { application: "FATCA", url: "/portal/fatca" },
  ];

  const filteredApps = apps.filter((app) =>
    app.application.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="main">
      <div className="navbar">
        <div>
          <img className="logo" src={"/ecobankLogo.png"} alt="" srcset="" />
        </div>
        <div className="search-bar">
          <TextInput
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search"
            icon={SearchIcon}
            error={false}
            errorMessage=""
            disabled={false}
            maxWidth="max-w-none"
            marginTop="mt-0"
          />
        </div>
        <div className="icon">
          <Badge text="1 Notification" size="xs" />
        </div>
      </div>
      <div className="body">
        <div className="welcome-message">Welcome, {name}</div>
        <div className="carousel">
          {filteredApps.map((app) => (
            <Card text={app.application} url={app.url} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
