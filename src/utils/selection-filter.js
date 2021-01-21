//this function allows us to filter series and movies by genre

const selectionFilter = ({ series, films } = []) => {
  return {
    series: [
      {
        title: "Documentaire",
        data: series?.filter((item) => item.genre === "documentaire"),
      },
      {
        title: "Comedies",
        data: series?.filter((item) => item.genre === "comedies"),
      },
      {
        title: "Enfant",
        data: series?.filter((item) => item.genre === "enfant"),
      },
      {
        title: "Crime",
        data: series?.filter((item) => item.genre === "crime"),
      },
      {
        title: "Famille",
        data: series?.filter((item) => item.genre === "famille"),
      },
    ],
    films: [
      { title: "Drame", data: films?.filter((item) => item.genre === "drame") },
      {
        title: "Thriller",
        data: films?.filter((item) => item.genre === "thriller"),
      },
      {
        title: "Enfant",
        data: films?.filter((item) => item.genre === "enfant"),
      },
      {
        title: "Suspense",
        data: films?.filter((item) => item.genre === "suspense"),
      },
      {
        title: "Romance",
        data: films?.filter((item) => item.genre === "romance"),
      },
    ],
  };
};

export default selectionFilter;
