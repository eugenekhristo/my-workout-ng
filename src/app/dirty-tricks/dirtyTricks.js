// dirty trick to place btn as it was fixed position but related to the side of container and not the side of the window
export const placeHeroBtn = () =>
  (function(btnId, containerId) {
    const $container = document.getElementById(containerId);
    const $heroBtn = document.getElementById(btnId);

    function positionHeroBtn(element) {
      const elementRightSide = element.getBoundingClientRect($container).right;
      const windowWidth = document.documentElement.clientWidth;
      $heroBtn.style.right = windowWidth - elementRightSide + 8 + 'px';
    }

    positionHeroBtn($container);

    window.addEventListener('resize', () => positionHeroBtn($container));
  })('heroBtn', 'container');
