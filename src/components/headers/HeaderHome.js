import React from 'react';
import { useHistory } from 'react-router-dom';
import func from '../../function';
import Swal from 'sweetalert2';

function HomeHeader({
  loginState,
  setLoginState,
  currentUserState,
  setCurrentUserState,
}) {
  const { userName, profile } = currentUserState;
  const history = useHistory();

  const moveToMyPage = () => history.push('/mypage');

  const logoutButtonClicked = async () => {
    await func.destroySession(currentUserState.id);
    setLoginState({ ...loginState, isLoggedIn: false, temptId: '', temptPw: '' });
    setCurrentUserState({ ...currentUserState, id: '', pw: '', userName: '', profile: '' });

    await Swal.fire('', '로그아웃 되었습니다', 'success');
    history.push('/');
  };

  return (
    <div className="header-user">
      <img className="header-profile-image" src={profile} alt="" />
      <button className="header-user-name" type="button" onClick={moveToMyPage}>{userName}</button>
      <button className="header-home" type="button">홈</button>
      <button className="header-home" type="button" onClick={logoutButtonClicked}>로그아웃</button>
      <br />
    </div>
  );
}

export default HomeHeader;
