export function fetchWithTimeout(delay) {
  // delay 시간이 지난뒤에 pending 에서 resolved 상태로 이행하는 프라미스 생성
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  })
}