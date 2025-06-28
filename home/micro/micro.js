const subjects = [
  {
    name: '인공지능 개론',
    year: 1,
    semester: '1학기·3학점',
    type: 'required',
    desc: '인공지능의 기본 개념과 역사, 대표적인 알고리즘 <br> (기계학습, 신경망 등)에 대해 전반적으로 소개합니다.',
    followup: '선이수 과목: 데이터분석기초 ⇆ 후속 과목: AI 시스템 활용',
  },
  {
    name: '프로그래밍 기초',
    year: 2,
    semester: '1학기·2학점',
    type: 'required',
    desc: '컴퓨터 프로그래밍의 기초적인 구조를 파악하고, <br> 파이썬 또는 C언어를 활용하여 문제 해결 능력을 기릅니다.',
    followup: '후속 과목: 객체지향 프로그램, SW/HW 통합설계, AI시스템활용',
  },
  {
    name: '통계 기초',
    year: 2,
    semester: '1학기·3학점',
    type: 'required',
    desc: '평균, 분산, 확률 분포, 정규분포 등 통계 이론을<br> 배우며, 데이터 해석 및 판단의 기초 논리를 학습합니다.',
    followup: '선이수 과목: 미적분학 ⇆ 후속 과목: 통계실무, 데이터분석기초',
  },
  {
    name: '인공지능 수학',
    year: 2,
    semester: '1학기·3학점',
    type: 'required',
    desc: '인공지능 알고리즘에 필요한 행렬 연산 등을 다루며,<br> AI 모델 수학적 이해를 도와주는 수학 중심 과목입니다.',
    followup: '선이수 과목: 미적분학, 통계기초 ⇆ 후속 과목: 인공지능개론',
  },
  {
    name: 'SW/HW <br> 플랫폼 설계',
    year: 2,
    semester: '2학기·3학점',
    type: 'required',
    desc: '임베디드 시스템을 기반으로 하드웨어와 소프트웨어를<br> 통합 설계하는 과목. 센서 연동, 장치 제어 등을 실습합니다.',
    followup: '선이수 과목: 운영체제, 자료구조 ⇆ 후속 과목: 멀티모달 학습',
  },
  {
    name: '데이터마이닝 <br> 및 응용실습',
    year: 3,
    semester: '1학기·3학점',
    type: 'required',
    desc: '방대한 데이터를 분석해 숨겨진 패턴, 군집 등 <br> 유용한 정보를 추출하는 실습 위주로 구성되어 있습니다.',
    followup:
      '선이수 과목: 데이터분석기초, 통계기초 ⇆ 후속 과목: AI 시스템 활용',
  },
  {
    name: '인공지능 플랫폼 <br>설계',
    year: 3,
    semester: '1학기·3학점',
    type: 'required',
    desc: 'AI 시스템을 실제 서비스 환경에 배포하고 <br> 운영하기 위한 플랫폼 구조를 설계하는 과목입니다.',
    followup: '선이수 과목: 인공지능개론 ⇆ 후속 과목: AI 프로젝트 실습 과목',
  },
  {
    name: '딥러닝',
    year: 3,
    semester: '1학기·3학점',
    type: 'elective',
    desc: 'CNN, RNN 등 대표적인 딥러닝 구조와 <br> 학습 알고리즘을 배우며, 모델 구현을 실습합니다.',
    followup: '선이수 과목: 인공지능개론 ⇆ 후속 과목: AI 시스템 활용',
  },
  {
    name: '멀티모달 학습',
    year: 3,
    semester: '1학기·3학점',
    type: 'elective',
    desc: '이미지+텍스트, 음성+영상 등 다양한 유형의 <br> 데이터를 통합해 학습하는 최신 AI 기법을 다룹니다.',
    followup: '선이수 과목: 딥러닝 ⇆ 후속 과목: 복합 AI 분석 프로젝트',
  },
];

const searchInput = document.getElementById('searchInput');
const yearButtons = document.querySelectorAll('.year-buttons button');
const requiredContainer = document.getElementById('required-subjects');
const electiveContainer = document.getElementById('elective-subjects');
const navItems = document.querySelectorAll('.nav-item');
const subjectDetailList = document.getElementById('subject-detail-list');
const completedSubjects = JSON.parse(
  localStorage.getItem('completedSubjects') || '[]'
);

let currentYear = 1;

function loadCompletedSubjects() {
  return JSON.parse(localStorage.getItem('completedSubjects') || '[]');
}

function saveCompletedSubjects(subjects) {
  localStorage.setItem('completedSubjects', JSON.stringify(subjects));
}

function toggleCompletion(subjectName) {
  const completed = JSON.parse(
    localStorage.getItem('completedSubjects') || '[]'
  );
  const idx = completed.indexOf(subjectName);
  if (idx > -1) {
    completed.splice(idx, 1);
  } else {
    completed.push(subjectName);
  }
  localStorage.setItem('completedSubjects', JSON.stringify(completed));
}

function setupButtonToggle() {
  const buttons = document.querySelectorAll(
    '.subject-buttons .complete-button'
  );

  buttons.forEach((btn) => {
    const subjectName = btn
      .closest('.subject-info')
      .querySelector('.subject-name').textContent;
    const completed = loadCompletedSubjects();
    if (completed.includes(subjectName)) {
      btn.classList.add('selected');
    }

    btn.addEventListener('click', () => {
      btn.classList.toggle('selected');
      toggleCompletion(subjectName);
    });
  });
}

function renderSubjects(year, query = '') {
  requiredContainer.innerHTML = '';
  electiveContainer.innerHTML = '';

  const savedElectives = JSON.parse(
    localStorage.getItem('savedElectives') || '[]'
  );
  const completedSubjects = JSON.parse(
    localStorage.getItem('completedSubjects') || '[]'
  );

  const filtered = subjects.filter((sub) => sub.year === year);

  // ✅ 여기 forEach 교체
  filtered.forEach((sub) => {
    const card = document.createElement('div');
    card.className = 'subject-card';
    card.classList.add(
      sub.type === 'required' ? 'required-card' : 'elective-card'
    );

    const isCompleted = completedSubjects.includes(sub.name);
    const isSaved = savedElectives.includes(sub.name);

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
        <div class="subject-name">${sub.name.replace('\n', '<br>')}</div>
        <div class="subject-semester">${sub.semester}</div>
        <div class="subject-buttons">
          ${
            sub.type === 'required'
              ? `<button class="complete-btn ${
                  isCompleted ? 'selected' : ''
                }">✔ 수강완료</button>`
              : `<button class="complete-btn ${
                  isCompleted ? 'selected' : ''
                }">✔ 수강</button>
                 <button class="add-btn ${
                   isSaved ? 'selected' : ''
                 }">＋ 담기</button>`
          }
        </div>
      </div>
    `;

    if (sub.type === 'required') {
      requiredContainer.appendChild(card);
    } else {
      electiveContainer.appendChild(card);
    }

    const completeBtn = card.querySelector('.complete-btn');
    completeBtn.addEventListener('click', () => {
      toggleCompletion(sub.name);
      completeBtn.classList.toggle('selected');
    });

    const gotoBtn = card.querySelector('.goto-home-button');
    gotoBtn.addEventListener('click', () => {
      const highlightName = sub.name;
      const highlightNameClean = highlightName.replace(/\n/g, '').trim();

      const subjectLines = document.querySelectorAll('.subject-line .name');
      subjectLines.forEach((el) => {
        const targetName = el.textContent.replace(/\n/g, '').trim();
        if (targetName === highlightNameClean) {
          el.closest('.subject-line').style.border = '3px solid #3a66e6';
          el.closest('.subject-line').scrollIntoView({
            behavior: 'smooth',
            block: 'center',
          });
        }
      });
    });

    if (sub.type === 'elective') {
      const addBtn = card.querySelector('.add-btn');
      addBtn.addEventListener('click', () => {
        toggleElective(sub.name);
        addBtn.classList.toggle('selected');
      });
    }
  });

  renderSubjectTextInfo(year);
}

function renderSubjectTextInfo(year) {
  subjectDetailList.innerHTML = '';
  const filtered = subjects.filter((sub) => sub.year === year);

  filtered.forEach((sub) => {
    const div = document.createElement('div');
    div.className = 'subject-line';
    div.innerHTML = `
      <div class="profile-icon"></div>
      <div class="text-info">
        <div class="name">${sub.name}</div>
        <div class="desc">${sub.desc}</div>
        <div class="followup">${sub.followup || ''}</div>
      </div>
      <button class="review-button">수강평 보기</button>
    `;
    const reviewBtn = div.querySelector('.review-button');
    reviewBtn.addEventListener('click', () => {
      // 예: review.html 이동
      window.location.href = `/review/review.html?subject=${encodeURIComponent(
        sub.name
      )}`;
    });

    subjectDetailList.appendChild(div);
  });
}

yearButtons.forEach((button) => {
  button.addEventListener('click', () => {
    currentYear = parseInt(button.value);
    yearButtons.forEach((b) => b.classList.remove('selected'));
    button.classList.add('selected');
    renderSubjects(currentYear, searchInput.value);
  });
});

searchInput.addEventListener('input', () => {
  renderSubjects(currentYear, searchInput.value);
});

navItems.forEach((item) => {
  item.addEventListener('click', () => {
    navItems.forEach((i) => i.classList.remove('selected'));
    item.classList.add('selected');
  });
});

function highlightSubjectIfNeeded() {
  const highlight = localStorage.getItem('highlightSubject');
  const highlightYear = parseInt(localStorage.getItem('highlightYear'), 10);

  if (highlight && highlightYear) {
    const yearButton = document.querySelector(
      `.year-buttons button[value="${highlightYear}"]`
    );
    if (yearButton) {
      yearButton.click(); // 그 학년을 클릭 → 렌더링 실행
    }

    setTimeout(() => {
      const subjectEls = document.querySelectorAll('.subject-line .name');
      subjectEls.forEach((el) => {
        const elName = el.textContent.trim().replace(/\s+/g, '');
        const highlightName = highlight.replace(/\s+/g, '');
        if (elName === highlightName) {
          el.closest('.subject-line').style.border = '3px solid #3a66e6';
          el.closest('.subject-line').scrollIntoView({
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

document.addEventListener('DOMContentLoaded', function () {
  renderSubjects(1);
  document
    .querySelector('.year-buttons button[value="1"]')
    .classList.add('selected');
  highlightSubjectIfNeeded(); // << 여기서 호출
});
