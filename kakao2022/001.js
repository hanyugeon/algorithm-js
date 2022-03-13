// 신고 결과 받기
// 나의 풀이(시간 초과)
function solution(id_list, report, k) {
  const userStatus = [];
  const reportList = report.filter((e, idx) => {
    return report.indexOf(e) === idx;
  });
  const banList = [];
  const receiveCount = [];

  for (let i = 0; i < id_list.length; i++) {
    userStatus.push({
      reportID: [],
      reportedCount: 0, 
    });
  }
  
  for (let i = 0; i < reportList.length; i++) {
    const reportTable = reportList[i].split(' ');
    const reporting = reportTable[0];
    const reported = reportTable[1];
    const reportingIdx = id_list.indexOf(reporting);
    const reportedIdx = id_list.indexOf(reported);
    
    userStatus[reportingIdx].reportID.push(reporting)
    userStatus[reportedIdx].reportedCount += 1;
  }

  for (let i = 0; i < id_list.length; i++) {
    if (userStatus[i].reportedCount >= k) {
      banList.push(id_list[i]);
    }
  }

  for (let i = 0; i < id_list.length; i++) {
    let count = 0;

    for (let j = 0; banList.length; j++) {
      if (userStatus[i].reportID.indexOf(banList[j]) !== -1) count++;
    }

    receiveCount.push(count);
  }

  return receiveCount;
}
