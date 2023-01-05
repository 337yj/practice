import "./App.css";
import Profile from "./components/Profile";
import Avatar from "./components/Avatar";
import myImg from "./assets/프로필.jpg";

function AppProfile() {
  return (
    <>
      <Avatar image={myImg} isNew={true} />
      <Profile image={myImg} name="이윤정" title="프론트엔드 개발자" isNew={true} />
      <Profile image={myImg} name="쩡이" title="Front-end Developer" />
      <Profile image={myImg} name="Yun Jeong Lee" title="프엔 개발자" />
    </>
  );
}

export default AppProfile;
