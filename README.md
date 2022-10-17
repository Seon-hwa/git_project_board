# 파일 업로드 하기전에 무조건 pull!!
// pull 받기 ㅇㅇㅇㅇㅇㅇ
$ git pull origin main (master 아닌 main으로 지정함)

// 파일 올리기
$ git add . ("모든" 변경된 파일 올리기) 
$ git add 파일이름 ("특정"파일 올리기) 

// 현재 상태 확인 (add 뿐만 아니라 commit, push등 틈틈히 상태 확인하면서 할것)
$ git status

// 커밋 하기 (ex. 날짜_작업내용 : 20221017_로그인 버튼 수정)
$ git commit -m "commit message" (메세지를 적는경우)
$ git commit (메세지 없이는 되도록 하지말기)

// 현재 상태 확인
$ git status

// 로컬에서 원격 저장소로 올리기
$ git push origin main
