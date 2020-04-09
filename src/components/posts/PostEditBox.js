import React, { useState } from 'react';
import { editPost } from '../../function';

function PostEditBox({
  specificPost,
  postState,
  setPostState,
  currentUserState,
}) {
  const [temptState, setTemptState] = useState('');
  const { id } = currentUserState;

  const setEditBox = (temptState) => {
    setTemptState(temptState);
  };

  const clickedEditSuccess = async () => {
    const { uniqueKey } = specificPost;

    if (!temptState.trim()) {
      alert('수정사항을 입력해주세요');
      return;
    }

    if (specificPost.id !== id) {
      alert('게시글은 해당 작성자만 수정 할 수 있습니다');
      return;
    }

    const { timeLinePosts } = await editPost(uniqueKey, temptState);
    setPostState({ ...postState, post: [...timeLinePosts.reverse()] });
    alert('게시글이 수정되었습니다');
  };

  return (
    <div>
      <textarea
        className="showpost-edit-box"
        type="text"
        value={temptState}
        onChange={(e) => setEditBox(e.target.value)}
      />
      <button
        className="showpost-edit-complete"
        type="button"
        onClick={clickedEditSuccess}
      >
      완료
      </button>
    </div>
  );
}

export default PostEditBox;
