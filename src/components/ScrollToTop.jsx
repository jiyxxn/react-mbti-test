import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * @component ScrollToTop
 * @description 페이지 이동 시 스크롤을 페이지 상단으로 이동시키는 컴포넌트
 * @returns {null} 화면에 아무것도 렌더링하지 않음
 */
const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지가 변경될 때 스크롤을 맨 위로 이동
  }, [location]);

  return null;
};

export default ScrollToTop;
