document.addEventListener('DOMContentLoaded', function () {
  const requiredContainer = document.getElementById('required-subjects');
  const electiveContainer = document.getElementById('elective-subjects');
  // 사용자 이름 표시
  const userInfoStr = localStorage.getItem('userInfo');
  const userNameDisplay = document.getElementById('userNameDisplay');

  function toggleCompletion(name) {
    let completed = JSON.parse(
      localStorage.getItem('completedSubjects') || '[]'
    );
    const idx = completed.indexOf(name);
    if (idx > -1) {
      completed.splice(idx, 1); // 이미 있으면 해제
    } else {
      completed.push(name); // 없으면 등록
    }
    localStorage.setItem('completedSubjects', JSON.stringify(completed));
  }

  if (userInfoStr) {
    try {
      const userInfo = JSON.parse(userInfoStr);
      userNameDisplay.textContent = userInfo.username || '이름 없음';
    } catch (e) {
      userNameDisplay.textContent = '이름 없음';
    }
  } else {
    userNameDisplay.textContent = '이름 없음';
  }

  // 수강 완료 과목
  const completedSubjects = JSON.parse(
    localStorage.getItem('completedSubjects') || '[]'
  );
  const userInfo = JSON.parse(userInfoStr || '{}');
  const field = userInfo.field;

  let subjects = [];

  if (field === 'AI/클라우드 분야') {
    subjects = [
      {
        name: '데이터 분석 기초',
        year: 1,
        semester: '1학기·3학점',
        type: 'required',
      },
      {
        name: '인공지능 개론',
        year: 1,
        semester: '1학기·3학점',
        type: 'required',
      },
      {
        name: 'SW/HW \n 플랫폼 설계',
        year: 2,
        semester: '2학기·3학점',
        type: 'required',
      },
      {
        name: '데이터마이닝 \n 및 응용실습',
        year: 3,
        semester: '1학기·3학점',
        type: 'required',
      },
      {
        name: '소프트웨어 공학',
        year: 3,
        semester: '2학기·3학점',
        type: 'required',
      },
      {
        name: 'AI 정보보안',
        year: 3,
        semester: '1학기·3학점',
        type: 'elective',
      },
      {
        name: '데이터 모델 \n 및 시각화',
        year: 3,
        semester: '2학기·3학점',
        type: 'elective',
      },
      {
        name: '의사결정 \n 지원 시스템',
        year: 4,
        semester: '1학기·2학점',
        type: 'elective',
      },
      {
        name: 'BM 프로젝트',
        year: 4,
        semester: '2학기·3학점',
        type: 'elective',
      },
    ];
  } else if (field === '빅데이터 분야') {
    subjects = [
      {
        name: '데이터 분석 기초',
        year: 1,
        semester: '1학기·3학점',
        type: 'required',
      },
      {
        name: '인공지능 개론',
        year: 1,
        semester: '1학기·3학점',
        type: 'required',
      },
      {
        name: '프로그래밍 기초',
        year: 2,
        semester: '1학기·2학점',
        type: 'required',
      },
      {
        name: '인공지능 수학',
        year: 2,
        semester: '1학기·3학점',
        type: 'required',
      },
      {
        name: 'SW/HW \n 플랫폼 설계',
        year: 2,
        semester: '2학기·3학점',
        type: 'required',
      },
      {
        name: '통계실무',
        year: 2,
        semester: '2학기·3학점',
        type: 'required',
      },
      {
        name: '운영체제',
        year: 2,
        semester: '2학기·3학점',
        type: 'elective',
      },
      {
        name: '데이터 사이언스',
        year: 2,
        semester: '1학기·3학점',
        type: 'elective',
      },
      {
        name: '빅데이터 처리',
        year: 2,
        semester: '2학기·3학점',
        type: 'elective',
      },
      {
        name: '데이터마이닝 \n 및 응용실습',
        year: 3,
        semester: '1학기·3학점',
        type: 'required',
      },
      {
        name: '소프트웨어 공학',
        year: 3,
        semester: '2학기·3학점',
        type: 'required',
      },
      {
        name: 'AI 정보보안',
        year: 3,
        semester: '1학기·3학점',
        type: 'elective',
      },
      {
        name: '데이터 모델 \n 및 시각화',
        year: 3,
        semester: '2학기·3학점',
        type: 'elective',
      },
      {
        name: '의사결정 \n 지원 시스템',
        year: 4,
        semester: '1학기·2학점',
        type: 'elective',
      },
      {
        name: 'BM 프로젝트',
        year: 4,
        semester: '2학기·3학점',
        type: 'elective',
      },
    ];
  } else if (field === '대학원 진학형') {
    subjects = [
      {
        name: '데이터 분석 기초',
        year: 1,
        semester: '1학기·3학점',
        type: 'required',
      },
      {
        name: '인공지능 개론',
        year: 1,
        semester: '1학기·3학점',
        type: 'required',
      },
      {
        name: '객체지향 프로그램',
        year: 1,
        semester: '1학기·3학점',
        type: 'elective',
      },
      {
        name: '미적분학',
        year: 1,
        semester: '1학기·3학점',
        type: 'elective',
      },
      {
        name: '프로그래밍 기초',
        year: 2,
        semester: '1학기·2학점',
        type: 'required',
      },
      {
        name: '통계기초',
        year: 2,
        semester: '1학기·3학점',
        type: 'required',
      },
      {
        name: '인공지능 수학',
        year: 2,
        semester: '1학기·3학점',
        type: 'required',
      },
      {
        name: 'SW/HW \n 플랫폼 설계',
        year: 2,
        semester: '2학기·3학점',
        type: 'required',
      },
      {
        name: '통계실무',
        year: 2,
        semester: '2학기·3학점',
        type: 'required',
      },
      {
        name: '인공지능 \n 프로그램',
        year: 2,
        semester: '2학기·2학점',
        type: 'required',
      },
      {
        name: '운영체제',
        year: 2,
        semester: '1학기·3학점',
        type: 'elective',
      },
      {
        name: '데이터 사이언스',
        year: 2,
        semester: '1학기·3학점',
        type: 'elective',
      },
      {
        name: '빅데이터 처리',
        year: 2,
        semester: '2학기·3학점',
        type: 'elective',
      },
      {
        name: '인공지능 플랫폼 \n 설계',
        year: 3,
        semester: '1학기·3학점',
        type: 'required',
      },
      {
        name: '데이터마이닝 \n 및 응용실습',
        year: 3,
        semester: '1학기·3학점',
        type: 'required',
      },
      {
        name: '소프트웨어 공학',
        year: 3,
        semester: '2학기·3학점',
        type: 'required',
      },
      {
        name: '클라우드 컴퓨팅',
        year: 3,
        semester: '1학기·3학점',
        type: 'elective',
      },
      {
        name: 'AI 정보보안',
        year: 3,
        semester: '1학기·3학점',
        type: 'elective',
      },
      {
        name: '딥러닝',
        year: 3,
        semester: '1학기·3학점',
        type: 'elective',
      },
      {
        name: '정밀의료',
        year: 3,
        semester: '1학기·3학점',
        type: 'elective',
      },
      {
        name: '멀티모달 학습',
        year: 3,
        semester: '1학기·3학점',
        type: 'elective',
      },
      {
        name: '의료 DB 설계',
        year: 3,
        semester: '1학기·3학점',
        type: 'elective',
      },
      {
        name: '자료구조',
        year: 3,
        semester: '2학기·3학점',
        type: 'elective',
      },
      {
        name: '데이터 모델  \n 및 시각화',
        year: 3,
        semester: '2학기·3학점',
        type: 'elective',
      },
      {
        name: '자동화 이론',
        year: 3,
        semester: '2학기·3학점',
        type: 'elective',
      },
      {
        name: '알고리즘 분석',
        year: 3,
        semester: '2학기·3학점',
        type: 'elective',
      },
      {
        name: '의료 전문가 \n 시스템',
        year: 3,
        semester: '2학기·3학점',
        type: 'elective',
      },
      {
        name: '의사결정 \n 지원 시스템',
        year: 4,
        semester: '1학기·2학점',
        type: 'elective',
      },
      {
        name: 'BM 프로젝트',
        year: 4,
        semester: '2학기·3학점',
        type: 'elective',
      },
      {
        name: '졸업논문',
        year: 4,
        semester: '1학기·P/NP',
        type: 'required',
      },
    ];
  } else if (field === '마이크로 전공형') {
    subjects = [
      {
        name: '인공지능 개론',
        year: 1,
        semester: '1학기·3학점',
        type: 'required',
      },
      {
        name: '프로그래밍 기초',
        year: 2,
        semester: '1학기·2학점',
        type: 'required',
      },
      {
        name: '통계 기초',
        year: 2,
        semester: '1학기·3학점',
        type: 'required',
      },
      {
        name: '인공지능 수학',
        year: 2,
        semester: '1학기·3학점',
        type: 'required',
      },
      {
        name: 'SW/HW \n 플랫폼 설계',
        year: 2,
        semester: '2학기·3학점',
        type: 'required',
      },
      {
        name: '데이터마이닝 \n 및 응용실습',
        year: 3,
        semester: '1학기·3학점',
        type: 'required',
      },
      {
        name: '인공지능 플랫폼 \n 설계',
        year: 3,
        semester: '1학기·3학점',
        type: 'required',
      },
      {
        name: '딥러닝',
        year: 3,
        semester: '1학기·3학점',
        type: 'elective',
      },
      {
        name: '멀티모달 학습',
        year: 3,
        semester: '1학기·3학점',
        type: 'elective',
      },
    ];
  }

  function extractCredit(semesterStr) {
    const match = semesterStr.match(/(\d+)학점/);
    return match ? parseInt(match[1], 10) : 0;
  }

  // 홈 버튼 진로별 이동
  const homeBtn = document.getElementById('homeBtn');
  if (homeBtn) {
    homeBtn.addEventListener('click', function (e) {
      e.preventDefault();
      try {
        const userInfo = JSON.parse(localStorage.getItem('userInfo')) || {};
        const field = userInfo.field;

        let targetPage = '/home/home.html';
        switch (field) {
          case '대학원 진학형':
            targetPage = '/home/daehakwon/daehakwon.html';
            break;
          case '빅데이터 분야':
            targetPage = '/home/bigdata/bigdata.html';
            break;
          case 'AI/클라우드 분야':
            targetPage = '/home/ai/ai.html';
            break;
          case '마이크로 전공형':
            targetPage = '/home/micro/micro.html';
            break;
        }
        window.location.href = targetPage;
      } catch (e) {
        console.error('userInfo 파싱 오류:', e);
        window.location.href = '/home/home.html';
      }
    });
  }

  function renderSubjects(year) {
    requiredContainer.innerHTML = '';
    electiveContainer.innerHTML = '';

    const completedSubjects = JSON.parse(
      localStorage.getItem('completedSubjects') || '[]'
    );
    const savedElectives = JSON.parse(
      localStorage.getItem('savedElectives') || '[]'
    );

    const filtered = subjects.filter((sub) => sub.year === year);

    filtered.forEach((sub) => {
      const card = document.createElement('div');
      card.className = 'subject-card';
      card.classList.add(
        sub.type === 'required' ? 'required-card' : 'elective-card'
      );

      const isCompleted = completedSubjects.includes(sub.name);

      card.innerHTML = `
  <div class="subject-header">
    <button class="goto-home-button">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="#fff"
        viewBox="0 0 24 24"
        class="goto-arrow"
      >
        <path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6z" />
      </svg>
    </button>
  </div>
  <div class="subject-info">
    <div class="subject-name">${sub.name.replace(/\n/g, '<br>')}</div>
    <div class="subject-semester">${sub.semester}</div>
    <div class="subject-buttons">
      <button class="complete-btn ${isCompleted ? 'selected' : ''}">
        ✔ 수강완료
      </button>
    </div>
  </div>
`;
      // 수강완료 버튼 이벤트
      const completeBtn = card.querySelector('.complete-btn');
      completeBtn.addEventListener('click', () => {
        toggleCompletion(sub.name); // 순수 name만
        completeBtn.classList.toggle('selected');
        updateProgressCircle();
      });

      const gotoBtn = card.querySelector('.goto-home-button');
      gotoBtn.addEventListener('click', () => {
        localStorage.setItem('highlightSubject', sub.name);
        localStorage.setItem('highlightYear', sub.year);
        let targetPage = '/home/home.html';
        switch (field) {
          case '대학원 진학형':
            targetPage = '/home/daehakwon/daehakwon.html';
            break;
          case '빅데이터 분야':
            targetPage = '/home/bigdata/bigdata.html';
            break;
          case 'AI/클라우드 분야':
            targetPage = '/home/ai/ai.html';
            break;
          case '마이크로 전공형':
            targetPage = '/home/micro/micro.html';
            break;
        }
        window.location.href = targetPage;
      });

      if (sub.type === 'required') {
        requiredContainer.appendChild(card);
      } else {
        if (savedElectives.includes(sub.name.replace(/\n/g, '<br>'))) {
          electiveContainer.appendChild(card);
        }
      }
    });
  }

  document
    .querySelectorAll('.curriculum-year-buttons button')
    .forEach((btn) => {
      btn.addEventListener('click', () => {
        const year = parseInt(btn.value, 10);

        // 과목 렌더링
        renderSubjects(year);

        // 버튼 선택 토글
        document
          .querySelectorAll('.curriculum-year-buttons button')
          .forEach((b) => b.classList.remove('selected'));
        btn.classList.add('selected');
      });
    });

  // 페이지 로드 시 기본 1학년 표시
  renderSubjects(1);
  document
    .querySelector('.curriculum-year-buttons button[value="1"]')
    .classList.add('selected');

  function updateProgressCircle() {
    const completedSubjects = JSON.parse(
      localStorage.getItem('completedSubjects') || '[]'
    );
    const totalScore = completedSubjects.reduce((acc, name) => {
      const s = subjects.find((x) => x.name === name);
      return s ? acc + extractCredit(s.semester) : acc;
    }, 0);
    const percent = Math.min(Math.round((totalScore / 70) * 100), 100);
    const lack = Math.max(70 - totalScore, 0);

    document.querySelector('.percent').textContent = `${percent}%`;
    document.getElementById(
      'progressMessage'
    ).innerHTML = `전공학점, ${percent}% 달성🎉<br>조금만 더 힘내요!`;
    document.getElementById('getScore').textContent = totalScore;
    document.getElementById('lackScore').textContent = lack;
    document.querySelector(
      '.progress-circle'
    ).style.background = `conic-gradient(#d6e1f9 0% ${
      100 - percent
    }%, #3a66e6 ${100 - percent}% 100%)`;
  }
  renderSubjects(1);
  document
    .querySelector('.curriculum-year-buttons button[value="1"]')
    .classList.add('selected');
  updateProgressCircle();
});

function highlightSubjectIfNeeded() {
  const highlight = localStorage.getItem('highlightSubject');
  const highlightYear = parseInt(localStorage.getItem('highlightYear'), 10);

  if (highlight && highlightYear) {
    const yearButton = document.querySelector(
      `.curriculum-year-buttons button[value="${highlightYear}"]`
    );

    if (yearButton) {
      yearButton.click(); // 해당 학년 버튼 클릭해서 렌더링
    }

    // 렌더링 후 잠시 기다렸다가 하이라이트
    setTimeout(() => {
      const subjectEls = document.querySelectorAll('.subject-name');
      subjectEls.forEach((el) => {
        // innerHTML 안에 <br> 치환해서 비교
        if (el.innerHTML.replace(/<br>/g, '\n').trim() === highlight) {
          el.closest('.subject-card').style.border = '3px solid #3a66e6';
          el.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
          });
        }
      });
      localStorage.removeItem('highlightSubject');
      localStorage.removeItem('highlightYear');
    }, 500);
  }
}

// 마지막에 호출
highlightSubjectIfNeeded();
