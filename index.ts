import fs from 'fs';
import path from 'path';

export default function walk(cwd: string) {
  let files: string[] = [];

  (function get_files(directory: string) {
    let files_in_directory = fs.readdirSync(directory);

    for (const file of files_in_directory) {
      const absolute_path = path.join(directory, file);

      if (fs.statSync(absolute_path).isDirectory()) {
        get_files(absolute_path);
      } else {
        files.push(absolute_path);
      }
    }
  })(cwd);

  return files;
}
