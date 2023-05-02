import "./App.css";
import { Address } from "./Component/Profile/Address";
import { FullName } from "./Component/Profile/FullName";
import { ProfilePhoto } from "./Component/Profile/ProfilePhoto";

export function App() {
  return (
    <main>
      <h1>My Profile</h1>

      <h2>
        <FullName/>
      </h2>

      <div>
        <Address/>
      </div>

      <div>
        <ProfilePhoto/>
      </div>
    </main>
  );
}
