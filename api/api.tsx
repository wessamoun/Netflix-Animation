import { movie } from "@/types/types";

async function movies() {
  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&include_adult=false&primary_release_year=2023&with_genres=16&}` ,{next: {
      revalidate: 3
    }}
  );
  const movies = await res.json();
  return movies;
}

export async function upComing() {
  let moviesArray: movie[] = [];
  for (let i = 1; i < 50; i++) {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=${i}&`,{next: {
        revalidate: 3
      }}
    );
    const movies = await res.json();
    for (let j = 0; j < movies.results.length; j++) {
      movies.results[j].backdrop_path !== null
        ? moviesArray.push(movies.results[j])
        : "";
    }
  }
  return moviesArray;
}

export async function Trending() {
  let moviesArray: movie[] = [];
  for (let i = 1; i < 20; i++) {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=${i}&`
    );
    const movies = await res.json();
    for (let j = 0; j < movies.results.length; j++) {
      movies.results[j].backdrop_path !== null
        ? moviesArray.push(movies.results[j])
        : "";
    }
  }
  return moviesArray;
}
export async function popular() {
  let moviesArray: movie[] = [];
  for (let i = 1; i < 20; i++) {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=${i}&`
    );
    const movies = await res.json();
    for (let j = 0; j < movies.results.length; j++) {
      movies.results[j].backdrop_path !== null
        ? moviesArray.push(movies.results[j])
        : "";
    }
  }
  return moviesArray;
}
export async function top_rated() {
  let moviesArray: movie[] = [];
  for (let i = 1; i < 20; i++) {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=${i}&`
    );
    const movies = await res.json();
    for (let j = 0; j < movies.results.length; j++) {
      movies.results[j].backdrop_path !== null
        ? moviesArray.push(movies.results[j])
        : "";
    }
  }
  return moviesArray;
}
export async function action() {
  let moviesArray: movie[] = [];
  for (let i = 1; i < 20; i++) {
    const res = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=${i}&include_adult=false&primary_release_year=2023&with_genres=16%2C28&}`
    );
    const movies = await res.json();
    for (let j = 0; j < movies.results.length; j++) {
      movies.results[j].backdrop_path !== null
        ? moviesArray.push(movies.results[j])
        : "";
    }
  }
  return moviesArray;
}
export async function adventure() {
  let moviesArray: movie[] = [];
  for (let i = 1; i < 20; i++) {
    const res = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=${i}&include_adult=false&primary_release_year=2023&with_genres=16%2C12&}`
    );
    const movies = await res.json();
    for (let j = 0; j < movies.results.length; j++) {
      movies.results[j].backdrop_path !== null
        ? moviesArray.push(movies.results[j])
        : "";
    }
  }
  return moviesArray;
}
export async function comedy() {
  let moviesArray: movie[] = [];
  for (let i = 1; i < 20; i++) {
    const res = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=${i}&include_adult=false&primary_release_year=2023&with_genres=16%2C35&}`
    );
    const movies = await res.json();
    for (let j = 0; j < movies.results.length; j++) {
      movies.results[j].backdrop_path !== null
        ? moviesArray.push(movies.results[j])
        : "";
    }
  }
  return moviesArray;
}
export async function family() {
  let moviesArray: movie[] = [];
  for (let i = 1; i < 20; i++) {
    const res = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=${i}&include_adult=false&primary_release_year=2023&with_genres=16%2C10751&}`
    );
    const movies = await res.json();
    for (let j = 0; j < movies.results.length; j++) {
      movies.results[j].backdrop_path !== null
        ? moviesArray.push(movies.results[j])
        : "";
    }
  }
  return moviesArray;
}
export async function documentary() {
  let moviesArray: movie[] = [];
  for (let i = 1; i < 20; i++) {
    const res = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=${i}&include_adult=false&primary_release_year=2023&with_genres=16%2C99&}`
    );
    const movies = await res.json();
    for (let j = 0; j < movies.results.length; j++) {
      movies.results[j].backdrop_path !== null
        ? moviesArray.push(movies.results[j])
        : "";
    }
  }
  return moviesArray;
}
export async function history() {
  let moviesArray: movie[] = [];
  for (let i = 1; i < 20; i++) {
    const res = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=${i}&include_adult=false&primary_release_year=2023&with_genres=16%2C36&}`
    );
    const movies = await res.json();
    for (let j = 0; j < movies.results.length; j++) {
      movies.results[j].backdrop_path !== null
        ? moviesArray.push(movies.results[j])
        : "";
    }
  }
  return moviesArray;
}
export async function mystery() {
  let moviesArray: movie[] = [];
  for (let i = 1; i < 50; i++) {
    const res = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=${i}&include_adult=false&primary_release_year=2023&with_genres=16%2C9648&}`
    );
    const movies = await res.json();
    for (let j = 0; j < movies.results.length; j++) {
      movies.results[j].backdrop_path !== null
        ? moviesArray.push(movies.results[j])
        : "";
    }
  }
  return moviesArray;
}
export async function genres() {
  const res = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en&}`
  );
  const genresData = await res.json();

  return genresData;
}

export default movies;
