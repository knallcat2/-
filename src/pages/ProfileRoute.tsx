import { useParams } from "react-router-dom";
import { USERS } from "../data";
import Profile from "./Profile";
import SecretClub from "./SecretClub";

export default function ProfileRoute() {
  const { username } = useParams<{ username: string }>();

  if (!username) return <div>Not found</div>;

  const user = USERS[username];

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center h-full">
        <h2 className="text-xl font-bold mb-2">사용자를 찾을 수 없습니다.</h2>
        <p className="text-zinc-500">링크가 잘못되었거나 페이지가 삭제되었습니다.</p>
      </div>
    );
  }

  if (user.isSecret) {
    return <SecretClub user={user} />;
  }

  return <Profile user={user} />;
}
