import fs from 'fs';
import path from 'path';

const baseUrl = 'https://koukibuu3.github.io/slides';

function getDirectoryContents(dirPath) {
  const contents = fs.readdirSync(dirPath, { withFileTypes: true });
  return contents.map(dirent => {
    if (!dirent.isDirectory()) return null;

    const indexHtml = fs.readFileSync(path.join(dirPath, dirent.name, 'index.html'), 'utf8');
    const title = indexHtml.match(/<title>(.*) - Slidev<\/title>/)?.[1] || dirent.name;

    return {
      title,
      url: `${baseUrl}/${dirent.name}`,
      mainImagePath: `${baseUrl}/${dirent.name}/images/1.png`
    };
  });
}

function main() {
  const directoryContents = getDirectoryContents('./dist');
  const jsonOutput = JSON.stringify(directoryContents, null, 2);
  console.log(jsonOutput);
  fs.writeFileSync('./dist/index.html', jsonOutput);
}

main();
