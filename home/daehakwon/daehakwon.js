const subjects = [
  {
    name: '데이터 분석 기초',
    year: 1,
    semester: '1학기·3학점',
    type: 'required',
    desc: '기초적인 데이터 처리 및 분석 역량의 <br> 토대 형성을 주요 목적으로 파이썬 언어를 학습합니다.',
    followup: '후속 과목: 인공지능개론',
  },
  {
    name: '인공지능 개론',
    year: 1,
    semester: '1학기·3학점',
    type: 'required',
    desc: '인공지능의 기본 개념과 역사, 대표적인 알고리즘 <br> (기계학습, 신경망 등)에 대해 전반적으로 소개합니다.',
    followup: '선이수 과목: 데이터분석기초 ⇆ 후속 과목: AI 시스템 활용',
  },
  {
    name: '객체지향 프로그램',
    year: 1,
    semester: '1학기·3학점',
    type: 'elective',
    desc: '자바(JAVA)나 파이썬 기반 언어를 통해 클래스, 상속,<br> 캡슐화,다형성 등 객체지향 개념을 학습하는 과목입니다.',
    followup: '선이수 과목: 데이터분석기초 ⇆ 후속 과목: SW/HW 통합설계',
  },
  {
    name: '미적분학',
    year: 1,
    semester: '1학기·3학점',
    type: 'elective',
    desc: '데이터 분석, 인공지능, 통계적 모델링에 필요한<br> 수학적 사고력과 수식 기반 사고를 기르는 과목입니다.',
    followup: '후속 과목: 인공지능수학',
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
    name: '통계기초',
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
    name: '통계실무',
    year: 2,
    semester: '2학기·3학점',
    type: 'required',
    desc: '통계 소프트웨어(예: SPSS, R 등)를 활용한 <br> 실제 데이터 분석 프로젝트 수행을 중심으로 하는 수업입니다.',
    followup:
      '선이수 과목: 통계기초, 데이터분석기초 ⇆ 후속 과목: 데이터사이언스',
  },
  {
    name: '인공지능 <br> 프로그램',
    year: 2,
    semester: '2학기·2학점',
    type: 'required',
    desc: '이 과목은 인공지능 알고리즘을 <br> 직접 구현하고 응용하는 실습 중심의 과목입니다',
    followup: '선이수 과목: 프로그램 기초 ⇆ 후속 과목: 딥러닝, AI시스템활용',
  },
  {
    name: '운영체제',
    year: 2,
    semester: '1학기·3학점',
    type: 'elective',
    desc: '컴퓨터 시스템의 운영 원리(프로세스, 스케줄링 등)를 <br> 이해하고 OS의 구조와 동작 원리를 배웁니다.',
    followup:
      '선이수 과목: 프로그래밍기초, 컴퓨터구조 ⇆ 후속 과목: 멀티컴퓨터학습',
  },
  {
    name: '데이터 사이언스',
    year: 2,
    semester: '1학기·3학점',
    type: 'elective',
    desc: '통계, 컴퓨터공학, 머신러닝 기반으로 데이터 분석, <br> 모델링, 시각화의 전 과정을 배우는 융합형 과목입니다.',
    followup: '선이수 과목: 데이터분석기초, 통계기초 ⇆ 후속 과목: 빅데이터처리',
  },
  {
    name: '빅데이터 처리',
    year: 2,
    semester: '2학기·3학점',
    type: 'elective',
    desc: '대용량 데이터를 수집·저장·분석하는 기술을 배우며, <br> Hadoop, Spark 등의 플랫폼 사용법을 학습합니다.',
    followup:
      '선이수 과목: 데이터사이언스, 운영체제 ⇆ 후속 과목: AI 프로젝트 수업',
  },
  {
    name: '인공지능 플랫폼 <br> 설계',
    year: 3,
    semester: '1학기·3학점',
    type: 'required',
    desc: 'AI 시스템을 실제 서비스 환경에 배포하고 <br> 운영하기 위한 플랫폼 구조를 설계하는 과목입니다.',
    followup: '선이수 과목: 인공지능개론 ⇆ 후속 과목: AI 프로젝트 실습 과목',
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
    name: '소프트웨어 공학',
    year: 3,
    semester: '2학기·3학점',
    type: 'required',
    desc: '소프트웨어 개발 생애주기 전반(요구 분석, 설계, <br> 구현, 테스트)을 배우고 협업 중심 개발 방식을 실습합니다.',
    followup: '선이수 과목: 객체지향프로그래밍⇆ 후속 과목: 시스템 구축 과목',
  },
  {
    name: '클라우드 컴퓨팅',
    year: 3,
    semester: '1학기·3학점',
    type: 'elective',
    desc: 'AWS, Azure 등의 클라우드 환경에서의 데이터 처리, <br> 인공지능 학습 인프라를 구축하는 기술을 학습합니다.',
    followup: '선이수 과목: 운영체제, 인공지능개론 ⇆ 후속 과목: AI 플랫폼 설계',
  },
  {
    name: 'AI 정보보안',
    year: 3,
    semester: '1학기·3학점',
    type: 'elective',
    desc: 'AI 시스템에서 발생할 수 있는 보안 이슈, 데이터 유출 <br> 문제를 다루며, 암호화 기술과 보안 정책을 실습합니다.',
    followup: '선이수 과목: 운영체제 ⇆ 후속 과목: 보안 기반 AI 응용 과목',
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
    name: '정밀의료',
    year: 3,
    semester: '1학기·3학점',
    type: 'elective',
    desc: '개인의 유전체, 병력 데이터를 분석하여 맞춤형 <br> 진단 및 예측을 수행하는 AI 기반 의료 분석 과목입니다.',
    followup:
      '선이수 과목: 딥러닝, 데이터분석기초 ⇆ 후속 과목: AI 기반 예측 시스템',
  },
  {
    name: '멀티모달 학습',
    year: 3,
    semester: '1학기·3학점',
    type: 'elective',
    desc: '이미지+텍스트, 음성+영상 등 다양한 유형의 <br> 데이터를 통합해 학습하는 최신 AI 기법을 다룹니다.',
    followup: '선이수 과목: 딥러닝 ⇆ 후속 과목: 복합 AI 분석 프로젝트',
  },
  {
    name: '의료 DB 설계',
    year: 3,
    semester: '1학기·3학점',
    type: 'elective',
    desc: '병원 데이터, 전자의무기록(EMR)을 중심으로 한 <br> 데이터베이스 설계 및 SQL 활용 방법을 배웁니다.',
    followup: '선이수 과목: 데이터분석기초 ⇆ 후속 과목: 의료 전문가 시스템',
  },
  {
    name: '자료구조',
    year: 3,
    semester: '2학기·3학점',
    type: 'elective',
    desc: '리스트,스택,그래프 등의 기본 자료 구조와 연산 <br> 원리를 이해하며 알고리즘 작성을 위한 기초를 학습합니다.',
    followup: '선이수 과목: 프로그래밍 기초 ⇆ 후속 과목: 알고리즘 분석',
  },
  {
    name: '데이터 모델  <br> 및 시각화',
    year: 3,
    semester: '2학기·3학점',
    type: 'elective',
    desc: '데이터를 체계적으로 설계하고 Tableau,Power BI, <br> Python 등을 통해 시각화하는 방법을 학습합니다.',
    followup: '선이수 과목: 데이터분석기초 ⇆ 후속 과목: 데이터사이언스',
  },
  {
    name: '자동화 이론',
    year: 3,
    semester: '2학기·3학점',
    type: 'elective',
    desc: '상태기계, 제어 시스템, 로봇제어 알고리즘 등을 <br> 수학적으로 모델링하고 자동화 시스템 설계 능력을 기릅니다.',
    followup: '선이수 과목: SW/HW 플렛폼 설계 ⇆ 후속 과목: 임베디드 시스템',
  },
  {
    name: '알고리즘 분석',
    year: 3,
    semester: '2학기·3학점',
    type: 'elective',
    desc: '정렬, 탐색, 그래프, 동적 계획법 등 알고리즘의 원리와 <br> 시간·공간 복잡도 분석을 통해 프로그램을 설계합니다.',
    followup: '선이수 과목: 자료구조 ⇆ 후속 과목: AI 모델 최적화',
  },
  {
    name: '의료 전문가 <br> 시스템',
    year: 3,
    semester: '2학기·3학점',
    type: 'elective',
    desc: '진단 및 치료 보조를 위한 전문가 시스템의 구조, <br> 룰 기반 추론 시스템 설계, 실제 의료 사례 분석을 다룹니다.',
    followup: '선이수 과목: 정밀의료 ⇆ 후속 과목: AI 기반 병원 운영 시스템',
  },
  {
    name: '의사결정 <br> 지원 시스템',
    year: 4,
    semester: '1학기·2학점',
    type: 'elective',
    desc: 'AI 기반 예측 모델, 전문가 시스템, 통계적 판단 <br> 알고리즘 등을 의사결정 시나리오에 적용합니다.',
    followup: '선이수 과목: 의료DB설계, 정밀의료 ⇆ 후속 과목: BM 프로젝트',
  },
  {
    name: 'BM 프로젝트',
    year: 4,
    semester: '2학기·3학점',
    type: 'elective',
    desc: '데이터를 기반으로 한 AI 비즈니스 모델을 <br> 설계하고 프로토타입을 제안하는 실무형 수업입니다.',
    followup:
      '선이수 과목: 데이터사이언스, AI 플랫폼 설계 ⇆ 후속 과목: 졸업논문',
  },
  {
    name: '졸업논문',
    year: 4,
    semester: '1학기·P/NP',
    type: 'required',
    desc: '학생 개인 또는 팀 단위로 하나의 문제를 정의하고, <br> 독립적으로 수행하는 졸업 요건 과목입니다.',
    followup: '선이수 과목: 전공 전반',
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
