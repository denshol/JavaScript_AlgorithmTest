function solution(record) {
  const userInfo = {}; // 유저 ID와 닉네임을 매핑하기 위한 객체
  const actions = []; // 액션 정보를 저장할 배열

  // 레코드를 순회하면서 액션, 유저 ID, 닉네임 추출 및 처리
  record.forEach((log) => {
    const [action, id, nickname] = log.split(" "); // 로그 파싱

    // 닉네임이 존재하고, 액션이 'Enter' 또는 'Change'인 경우 최신 닉네임으로 업데이트
    if (nickname && (action === "Enter" || action === "Change")) {
      userInfo[id] = nickname;
    }

    // 'Change' 액션은 출력 메시지에 포함되지 않기 때문에 체크
    if (action !== "Change") {
      // 메시지 출력을 위해 유저 ID와 액션 정보 저장
      actions.push({ id, action });
    }
  });

  // 변환된 액션 정보 배열을 기반으로 최종 메시지 생성
  return actions.map(({ id, action }) => {
    // 유저 닉네임과 액션에 따른 메시지 텍스트 결합
    return `${userInfo[id]}님이 ${
      action === "Enter" ? "들어왔습니다" : "나갔습니다"
    }.`;
  });
}
