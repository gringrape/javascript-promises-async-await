export function fetchWithTimeout(delay) {
  // delay 시간이 지난뒤에 pending 에서 resolved 상태로 이행하는 프라미스 생성
  return new Promise(resolve => 
    setTimeout(resolve, delay)
  );
}

export function fetchMovies() {
  return fetch("./data/movies.json")
    .then(response => response.json())
    .then(movies => movies)
    .catch(error => console.log(error));
}

export function fetchBooks() {
  return fetch("./data/books.json")
    .then(response => response.json())
    .then(books => books)
    .catch(error => console.log(error));
}