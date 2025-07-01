import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const fetchPostsMetaData = () => {
  const folderPath = path.join(process.cwd(), "../posts");
  const postsMetaData: { [key: string]: string }[] = []; 
  try {
    if (!fs.existsSync(folderPath)) {
      console.log(`Directory does not exist: ${folderPath}`);
      return;
    }

    const files = fs.readdirSync(folderPath);

    if (files.length === 0) {
      console.log(`No files found in: ${folderPath}`);
      return;
    }

    files.forEach((file) => {
      const filePath = path.join(folderPath, file);
      try {
        const postFile = matter.read(filePath);
        postsMetaData.push(postFile.data);
        console.log(postsMetaData);
      } catch (readError) {
        console.error(`Error reading file ${file}:`, readError);
      }
    });
  } catch (error) {
    console.error(
      `Error reading directory: ${
        error instanceof Error ? error.message : String(error)
      }`
    );
  }

  return postsMetaData;
};

fetchPostsMetaData();
