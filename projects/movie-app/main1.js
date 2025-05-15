const apiKey = "13121373"; // replace with your api key

async function searchMovies() {
  const query = document.getElementById("searchInput").value.trim();
  const movieContainer = document.getElementById("movies");

  if (!query) {
    movieContainer.innerHTML = "<p>Please enter a search term.</p>";
    return;
  }

  movieContainer.innerHTML = "<p>Loading...</p>";

  // status codes
  // 2XX - success -> 200 - success, 201 - created
  // 4XX - errors -> 404 - not found error, 401 - not authorized
  // 5xx - errors with the server -> 500 - server error

  try {
    const res = await fetch(
      `https://www.omdbapi.com/?apikey=${apiKey}&s=${query}`,
    );
    const data = await res.json();

    if (data.Response === "True") {
      movieContainer.innerHTML = data.Search.map(
        (movie) => `
        <div class="movie">
          <img src="${movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"}" alt="${movie.Title}">
          <h3>${movie.Title}</h3>
          <p>${movie.Year}</p>
        </div>
      `,
      ).join("");
    } else {
      movieContainer.innerHTML = `<p>${data.Error}</p>`;
    }
  } catch (error) {
    movieContainer.innerHTML = `<p>Something went wrong. Please try again</p>`;
    console.log(error);
  }
}
