import { Navigation } from "./ui/components/navigations";
import UserProfileTabs from "./ui/components/user-profile-tabs";

export default function Home() {
  return (
    <div>
      <Navigation />
      <UserProfileTabs/>
    </div>
  );
}
