export const showButton = (screenWidth: number, scrollPosition: number): boolean => {

  if (screenWidth >= 1400) {
    return scrollPosition >= 590;
  }

  if (screenWidth >= 1200) {
    return scrollPosition >= 610;
  }

  if (screenWidth >= 992) {
    return scrollPosition >= 590;
  }

  if (screenWidth >= 768) {
    return scrollPosition >= 530;
  }

  if (screenWidth >= 576) {
    return scrollPosition >= 385;
  }

  if (screenWidth >= 375) {
    return scrollPosition >= 420;
  }

  return false;
};
