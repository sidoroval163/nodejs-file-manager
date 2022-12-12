const up = (currentDirectory) => {
  if (currentDirectory.split(`\\`).length > 1) {
    return currentDirectory.split(`\\`).slice(0, -1).join("\\");
  } else {
    return currentDirectory;
  }
};
export { up };
