import { Navigation } from "../ui/components/navigations";
import UserProfileHeader from "../ui/components/user-profile-header";
import VideoCardTabs from "../ui/components/video-card-tab";


export default function Page() {
  return (
    <div>
      <Navigation />
      <UserProfileHeader />
      <VideoCardTabs />
    </div>
  );
}
