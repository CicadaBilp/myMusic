

export const newSongType = (name) => {
  switch (name) {
      case '华语':
        return 7;
      case '欧美':
        return 96;
      case '日本':
        return 8;
      case '韩国':
        return 16;
      default:
          break;
  }
}

export const newDiscType = (name) => {
  switch (name) {
      case '华语':
        return 'ZH';
      case '欧美':
        return 'EA';
      case '日本':
        return 'JP';
      case '韩国':
        return 'KR';
      default:
          break;
  }
}



