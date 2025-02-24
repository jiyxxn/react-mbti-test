<div align="center">
  <br>
  <img src="https://github.com/user-attachments/assets/48ae8a0b-8c4a-456f-82a2-52a9f2a665f6" width="300">
</div>

<br>
<br>

#  MBTI 테스트 💌
> 배포 주소 : https://react-mbti-test-tawny.vercel.app/

<br>
<br>

## 💬 프로젝트 소개

> 📅 개발 기간 : 2025. 02. 20 ~ 2025. 02. 24 (총 5일)
> <br><br>
> **자신의 MBTI 유형을 테스트하고 공유하는 React 기반 웹 애플리케이션입니다.**
> <br>
> <br> zustand를 활용해 클라이언트 상태를, TanStack Query를 활용해 서버 상태를 관리하며,
> <br> react-router-dom을 사용해 페이지 간 네비게이션을 처리합니다.  
> <br> PC와 모바일 환경 모두에 최적화된 반응형 디자인을 적용하였습니다.

<br>
<br>

## 📑 페이지 구성
| **1. 회원가입**                                     | **2. 로그인**                | **3. 메인 홈**                     |
| :------------------------------------------------------------------: | :------------------------------------------------------------: | :-------------------------------------------------------------: |
| <img src="https://github.com/user-attachments/assets/5206a02d-99eb-4cad-b96b-17349dd3de58" alt="회원가입" /> | <img src="https://github.com/user-attachments/assets/9ec32daf-face-4817-b9c0-dd6fb5fc0088" alt="로그인" />| <img src="https://github.com/user-attachments/assets/43d5c423-9fcb-4e9b-8b7d-cbfddfab2d8e" alt="메인 홈" />           |
| **4. MBTI 테스트**                               | **5. 테스트 결과 목록**            | **6. 마이 페이지** |
| <img src="https://github.com/user-attachments/assets/3217afd5-2175-48de-83c3-349bb5ba243b" alt="MBTI 테스트" />                | <img src="https://github.com/user-attachments/assets/ea66e62c-4ccf-449e-a558-b43a9eb8bb16" alt="테스트 결과" />     | <img src="https://github.com/user-attachments/assets/a857f4fc-adfb-46c9-bf22-da557b1c2ba0" alt="마이 페이지" />       |


<br>
<br>

## ⚙ 프로젝트 기능 소개

- **React 라이브러리**로 구성된 프로젝트입니다.
- **Zustand**를 사용하여 애플리케이션의 유저 정보 상태 관리를 단순하고 직관적으로 처리합니다.
- **TanStack Query**를 사용하여 비동기 데이터 요청 및 캐싱 기능으로 서버 데이터를 효율적으로 관리합니다.
- **Axios Instance**를 활용하여 API 통신을 모듈화하고, 요청/응답 인터셉터를 통해 공통적인 처리 로직을 적용합니다.
- **Tailwind CSS**를 사용하여 반응형 디자인을 적용하고, **react-router-dom**을 이용해 페이지 간 네비게이션을 처리합니다.
- 로그인된 유저의 인증 상태에 따라 **ProtectedRoute**를 적용하여 비인가 사용자의 접근을 제한합니다.
- **카카오 공유하기** 기능을 활용해 자신의 MBTI 검사 결과를 소셜에 공유할 수 있습니다.


<br>
<br>

## 🚀 트러블 슈팅

- ### [[로그인] 로그인 후 UI가 갱신되지 않는 문제 해결: 변수와 함수의 차이](https://velog.io/@jiyunk/로그인-후-UI가-갱신되지-않는-문제-해결-변수와-함수의-차이)
- ### [[레이아웃] 스크롤 위치 원래 이렇게 어중간해요?](https://velog.io/@jiyunk/스크롤-위치-원래-이렇게-어중간해요)
<br>
<br>

## 📁 프로젝트 구조

```markdown
📁 /src  # 프로젝트 소스 코드 폴더
├─ api  # 서버와 통신하는 API 요청 및 서비스 함수 모음
├─ components  # UI 컴포넌트 모음
├─ data  # 정적인 데이터 파일 저장 폴더
├─ hooks  # 커스텀 훅 모음
├─ pages  # 개별 페이지 컴포넌트 모음
├─ routes  # 라우팅 관련 파일 모음
├─ utils  # 유틸리티 함수 모음
└─ zustand  # Zustand 상태 관리 관련 파일 모음

```

<br>
<br>

## 🧶 기술 스택
<div align="left">

### Environment
<img src="https://img.shields.io/badge/Visual_Studio_Code-007ACC?style=for-the-badge&logo=https://upload.wikimedia.org/wikipedia/commons/a/a7/Visual_Studio_Code_1.35_icon.svg&logoColor=white" />
<img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" />
<img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" />
<br>

### Development
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"/>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white"/>
<img src="https://img.shields.io/badge/Tanstackquery-FF4154?style=for-the-badge&logo=reactquery&logoColor=white">
<img src="https://img.shields.io/badge/Zustand-82612C?style=for-the-badge&logo=&logoColor=white">      
<img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=for-the-badge&amp;logo=Tailwind CSS&amp;logoColor=white">


</div>
