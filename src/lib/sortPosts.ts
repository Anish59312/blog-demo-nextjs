type PostsMetaData = {
  title: string;
  date: string;
  slug: string;
};

export const sortPost = (postsMetaData: PostsMetaData[]) => {
  //postMetaData example
  // [
  //   {
  //     title: "My First Blog Post",
  //     date: "2025-07-01",
  //     slug: "my-first-post",
  //   },
  // ];
  // take this array and sort by date in descending order
  const sortedPostsMetaData = postsMetaData.sort(
    (a: PostsMetaData, b: PostsMetaData) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  console.log("sortedPostesMetaData", sortedPostsMetaData);

  return sortedPostsMetaData;
};

sortPost([
  {
    title: "My First Blog Post",
    date: "2025-07-01",
    slug: "my-first-post",
  },
  {
    title: "My First Blog Post",
    date: "2026-07-01",
    slug: "my-first-post",
  },
]);
