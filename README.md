# 파일 업로드 하기전에 무조건 pull!!<br/>
// pull 받기<br/>
$ git pull origin main (master 아닌 main으로 지정함)<br/>

// 파일 올리기<br/>
$ git add . ("모든" 변경된 파일 올리기) <br/>
$ git add 파일이름 ("특정"파일 올리기) <br/>

// 현재 상태 확인 (add 뿐만 아니라 commit, push등 틈틈히 상태 확인하면서 할것)<br/>
$ git status<br/>

// 커밋 하기 (ex. 날짜_작업내용 : 20221017_로그인 버튼 수정)<br/>
$ git commit -m "commit message" (메세지를 적는경우)<br/>
$ git commit (메세지 없이는 되도록 하지말기)<br/>

// 현재 상태 확인<br/>
$ git status<br/>

// 로컬에서 원격 저장소로 올리기<br/>
$ git push origin main<br/>
