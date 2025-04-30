/**
 * 캐시
 * https://school.programmers.co.kr/learn/courses/30/lessons/17680?language=javascript
 */

/**
 * 제이지: 도시 이름 검색 -> 도시와 관련된 맛집 게시물 DB에서 가져와 보여주는 서비스 개발 중
 * 어피치: 각 로직에 대한 성능 측정 수행 중 -> 너무 오래 걸림
 * 제이지: 캐시 크기를 얼마로 해야 효율적인지 몰라 난감한 상황
 * 이때 캐시 크기에 따른 실행시간 측정 프로그램 작성하기
 */

/**
 * 대소문자 구별 X
 *
 * LRU 알고리즘 활용하기
 *   cacheSize만큼 캐싱 가능
 *   가장 오래된 캐시값을 삭제
 *   기존 값이 캐싱 될 경우 최근 사용된 것으로 간주
 */

function solution(cacheSize, cities) {
  const HIT = 1;
  const MISS = 5;
  const cache = [];
  let time = 0;

  if (cacheSize === 0) return cities.length * MISS;

  cities = cities.map((city) => city.toLowerCase());

  cities.forEach((city, idx) => {
    // cache에 있을 경우
    if (cache.includes(city)) {
      time += HIT;

      // 해당 item을 cache의 가장 최근 값으로 다시 추가
      cache.splice(cache.indexOf(city), 1);
      cache.push(city);
    }

    // cache에 없을 경우
    else {
      // cache가 가득 찼을 때 가장 오래된 값을 제거
      if (cache.length >= cacheSize) {
        cache.shift();
      }

      // cache에 가장 최근 값으로 추가
      cache.push(city);
      time += MISS;
    }
  });

  return time;
}
