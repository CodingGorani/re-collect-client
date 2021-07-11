import React, { useEffect } from 'react';
import BigBookmark from './BigBookmark';
import { useSelector, useDispatch } from 'react-redux';
import { recollect } from '../modules/getRecollect';
import initialState from '../modules/initialState';

function Recollect(props) {
  // dispatch(recollect(bookmarks)); 요청
  // 1. 로그인 o => visitcounts = 0
  // 2. 로그인 x => initialState guestBookmarks 3개
  const { bookmarks } = useSelector(
    (state) => state.bookmarkReducer.userBookmarks
  );
  const dispatch = useDispatch();
  const accessToken = localStorage.getItem('accessToken');
  const { guestBookmarks } = useSelector((state) => state.bookmarkReducer);

  // 읽지않은 북마크 //
  const { unreadBookmarks } = useSelector((state) => state.recollectReducer);

  useEffect(() => {
    if (accessToken) {
      dispatch(recollect(bookmarks));
    } else {
      console.log(guestBookmarks);
    }
  }, [dispatch]);

  return (
    <div className="recollect">
      <div className="recollect__title">Recollect</div>
      <div className="recollect__bookmarks">
        {unreadBookmarks !== null
          ? unreadBookmarks.map((unread) => {
              return (
                <BigBookmark
                  key={unread.id}
                  text={unread.text}
                  color={unread.color}
                  importance={unread.importance}
                />
              );
            })
          : guestBookmarks.bookmarks.map((bookmark) => {
              return (
                <BigBookmark
                  key={bookmark.id}
                  text={bookmark.text}
                  color={bookmark.color}
                />
              );
            })}
      </div>
    </div>
  );
}

export default Recollect;
