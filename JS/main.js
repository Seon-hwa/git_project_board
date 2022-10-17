document.addEventListener('DOMContentLoaded', () => {

    const id = document.getElementById('loginId');
    const pw = document.getElementById('loginPw');
    const loginBtn = document.querySelector('#loginBtn');
    const joinBtn = document.querySelector('#joinBtn');
    const kakaoBtn = document.querySelector('#kakaoBtn');
    const boardList = document.getElementById('boardList');


    // 로그인 버튼 클릭시 
    loginBtn.addEventListener('click', (event) => {
        console.log('로그인 버튼 클릭 성공')

        // 아이디가 공백일때
        if (id.value === "") {
            alert('아이디를 입력하세요.')
        }
        // 비밀번호가 공백일때
        if (pw.value === "") {
            alert('비밀번호를 입력하세요.')
        }
    })

    // 게시판 목록 클릭시
    boardList.addEventListener('click', (event) => {
        alert('로그인 하세요.')
    })

})