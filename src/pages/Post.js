import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { getPosts, getUsers, findUserById } from '../function';
import Header from '../web_components/Header';
import Advertisement from '../web_components/Advertisement';
import TimeLinePost from '../web_components/TimeLinePost';
import FriendsIndex from '../web_components/FriendsIndex';

const callAPI = async (postState, setPostState, loginState, setLoginState) => {
  const { timeLinePosts } = await getPosts();
  const { userStore } = await getUsers();

  setLoginState({ ...loginState, users: [...userStore] });

  setPostState({
    ...postState,
    post: [...timeLinePosts.reverse()],
  });
};

function Post({
  postState,
  setPostState,
  currentUserState,
  setCurrentUserState,
  loginState,
  setLoginState,
  commentState,
  setCommentState,
  topLevelState,
  setTopLevelState,
  setSearchState,
}) {
  const { isLoggedIn, users } = loginState;
  const { id } = currentUserState;

  if (isLoggedIn === false) {
    return <Redirect to="/" />;
  }

  useEffect(() => {
    callAPI(postState, setPostState, loginState, setLoginState);
  }, []);

  return (
    <div>
      {!findUserById(users, id)
        ? <h3>페이지를 로딩중입니다...</h3>
        : (
          <div>
            <Header
              loginState={loginState}
              setLoginState={setLoginState}
              currentUserState={currentUserState}
              setCurrentUserState={setCurrentUserState}
              setSearchState={setSearchState}
            />
            <div className="main-timeline">
              <Advertisement />
              <TimeLinePost
                postState={postState}
                setPostState={setPostState}
                currentUserState={currentUserState}
                commentState={commentState}
                setCommentState={setCommentState}
                setTopLevelState={setTopLevelState}
                loginState={loginState}
                setLoginState={setLoginState}
              />
              <FriendsIndex
                loginState={loginState}
                currentUserState={currentUserState}
                topLevelState={topLevelState}
                setTopLevelState={setTopLevelState}
              />
            </div>
          </div>
        )}
    </div>
  );
}

export default Post;
