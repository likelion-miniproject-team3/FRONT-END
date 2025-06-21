const step1 = document.getElementById('step1');
const step2 = document.getElementById('step2');
const step3 = document.getElementById('step3');
const step4 = document.getElementById('step4');

const next1 = document.getElementById('next1');
const next2 = document.getElementById('next2');
const next3 = document.getElementById('next3');
const submitBtn = document.getElementById('submit');

const usernameError = document.getElementById('username-error');
const usernicknameError = document.getElementById('usernickname-error');
const useremailError = document.getElementById('useremail-error');
const usernumberError = document.getElementById('usernumber-error');
const useridError = document.getElementById('userid-error');
const passwordError = document.getElementById('password-error');
const fieldError = document.getElementById('field-error');

const fillBar = document.querySelector('.fill');

function setError(input, errorDiv, message) {
  errorDiv.textContent = message;
  errorDiv.classList.add('active');

  input.previousElementSibling.style.color = '#e74c3c'; // 라벨 빨강

  if (input.tagName === 'SELECT') {
    input.classList.add('error'); // select 박스 빨간 테두리
  } else {
    input.style.borderBottomColor = '#e74c3c'; // 인풋 밑줄 빨강
  }
}

function clearError(input, errorDiv) {
  errorDiv.textContent = '';
  errorDiv.classList.remove('active');
  input.previousElementSibling.style.color = '#3b6ef7'; // 라벨 파랑
  input.style.borderBottomColor = '#3b6ef7'; // 밑줄 파랑
}

function clearAllError(input, errorDiv) {
  errorDiv.textContent = '';
  errorDiv.classList.remove('active');
  input.previousElementSibling.style.color = '#aaa';

  if (input.tagName === 'SELECT') {
    input.classList.remove('error'); // 테두리 원래대로
  } else {
    input.style.borderBottomColor = '#ccc';
  }
}

function validateStep1() {
  let valid = true;

  const usernameInput = document.getElementById('username');
  const usernicknameInput = document.getElementById('usernickname');
  const useremailInput = document.getElementById('useremail');
  const usernumberInput = document.getElementById('usernumber');

  const username = usernameInput.value.trim();
  const usernickname = usernicknameInput.value.trim();
  const useremail = useremailInput.value.trim();
  const usernumber = usernumberInput.value.trim();

  // 초기화
  [usernameInput, usernicknameInput, useremailInput, usernumberInput].forEach(
    (input) => {
      const errorDiv = input.nextElementSibling;
      clearAllError(input, errorDiv);
    }
  );

  if (username === '') {
    setError(usernameInput, usernameError, '이름을 다시 확인해주세요');
    valid = false;
  }
  if (usernickname === '') {
    setError(
      usernicknameInput,
      usernicknameError,
      '닉네임을 다시 확인해주세요'
    );
    valid = false;
  } else if (usernickname.length > 10) {
    setError(
      usernicknameInput,
      usernicknameError,
      '닉네임은 10글자 이내로 입력해주세요'
    );
    valid = false;
  }
  if (useremail === '') {
    setError(useremailInput, useremailError, '이메일을 다시 확인해주세요');
    valid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(useremail)) {
    setError(useremailInput, useremailError, '유효한 이메일 형식이 아닙니다');
    valid = false;
  }
  if (usernumber === '') {
    setError(usernumberInput, usernumberError, '학번을 다시 확인해주세요');
    valid = false;
  }

  return valid;
}

function validateStep2() {
  const useridInput = document.getElementById('userid');
  const userid = useridInput.value.trim();

  clearAllError(useridInput, useridError);

  if (userid === '') {
    setError(useridInput, useridError, '아이디를 다시 확인해주세요');
    return false;
  }
  return true;
}

function validateStep3() {
  const passwordInput = document.getElementById('password');
  const password = passwordInput.value.trim();

  clearAllError(passwordInput, passwordError);

  if (password === '') {
    setError(passwordInput, passwordError, '비밀번호를 다시 확인해주세요');
    return false;
  }
  return true;
}

function validateStep4() {
  const fieldInput = document.getElementById('field');
  const field = fieldInput.value;

  clearAllError(fieldInput, fieldError);

  if (field === '') {
    setError(fieldInput, fieldError, '희망 분야를 선택해주세요');
    return false;
  }
  return true;
}

// 입력 상태에 따라 라벨, 밑줄, 입력 글자 색 조정 + 에러 메시지 자동 제거
document.querySelectorAll('input, select').forEach((el) => {
  const label = el.previousElementSibling;
  const errorDiv =
    el.nextElementSibling &&
    el.nextElementSibling.classList.contains('error-message')
      ? el.nextElementSibling
      : null;

  function updateStyle() {
    if (el.value.trim() !== '') {
      label.style.color = '#3b6ef7'; // 파란색 라벨
      el.style.color = 'black'; // 입력 텍스트 검정
      el.style.borderBottomColor = '#3b6ef7'; // 파란 밑줄
      if (errorDiv) {
        errorDiv.textContent = '';
        errorDiv.classList.remove('active');
      }
    } else {
      label.style.color = '#aaa'; // 기본 라벨색
      el.style.color = '#aaa'; // placeholder 색
      el.style.borderBottomColor = '#ccc'; // 기본 밑줄색
      if (errorDiv) {
        errorDiv.textContent = '';
        errorDiv.classList.remove('active');
      }
    }
  }

  el.addEventListener('input', updateStyle);

  el.addEventListener('focus', () => {
    if (el.classList.contains('error')) {
      // 오류 상태면 라벨 빨간색 유지
      el.previousElementSibling.style.color = '#e74c3c';
      if (el.tagName !== 'SELECT') {
        el.style.borderBottomColor = '#e74c3c'; // input 밑줄 빨강
      }
    } else {
      // 오류 아니면 평소대로 파란색
      el.previousElementSibling.style.color = '#3b6ef7';
      if (el.tagName !== 'SELECT') {
        el.style.borderBottomColor = '#3b6ef7';
      }
    }
  });

  el.addEventListener('blur', () => {
    if (el.value.trim() === '') {
      label.style.color = '#aaa';
      el.style.color = '#aaa';
      el.style.borderBottomColor = '#ccc';
    }
  });

  updateStyle(); // 초기 스타일 적용
});

// 단계별 버튼 이벤트 및 진행바 width 조정
next1.addEventListener('click', () => {
  if (validateStep1()) {
    step1.classList.remove('active');
    step2.classList.add('active');
    fillBar.style.width = '50%'; // 1단계 → 2단계
  }
});

next2.addEventListener('click', () => {
  if (validateStep2()) {
    step2.classList.remove('active');
    step3.classList.add('active');
    fillBar.style.width = '75%'; // 2단계 → 3단계
  }
});

next3.addEventListener('click', () => {
  if (validateStep3()) {
    step3.classList.remove('active');
    step4.classList.add('active');
    fillBar.style.width = '100%'; // 3단계 → 4단계
  }
});

submitBtn.addEventListener('click', () => {
  if (validateStep4()) {
    document.querySelector('.top-bar').style.display = 'none';
    document.querySelectorAll('.step').forEach((el) => {
      el.style.display = 'none';
    });

    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#3b6ef7', '#f7c948', '#e74c3c'],
    });

    const container = document.createElement('div');
    container.classList.add('welcome-container');

    const h2 = document.createElement('h2');
    h2.textContent = '반가워요 !';
    h2.classList.add('welcome-title');
    container.appendChild(h2);

    const p = document.createElement('p');
    p.innerHTML = '마이페이지에서<br>프로필 등록을 해주세요';
    p.classList.add('welcome-message');
    container.appendChild(p);

    const confirmBtn = document.createElement('button');
    confirmBtn.textContent = '확인';
    confirmBtn.classList.add('confirm-button');
    confirmBtn.addEventListener('click', () => {
      window.location.href = 'home.html';
    });

    document.body.appendChild(container);
    document.body.appendChild(confirmBtn);

    fillBar.style.width = '25%';

    document.querySelectorAll('input').forEach((input) => (input.value = ''));
    document.getElementById('field').value = '';
  }
});
