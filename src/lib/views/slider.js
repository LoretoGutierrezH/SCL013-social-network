export const slider = () => {
  const buttonPrev = document.getElementById('button-prev');
  const buttonNext = document.getElementById('button-next');
  const track = document.getElementById('track');
  const slickList = document.getElementById('slick-list');
  const slick = document.querySelectorAll('.slick');
  console.log(typeof (slick));

  const slickWidth = slick[0].offsetWidth;
  function Move(value) {
    const trackWidth = track.offsetWidth;
    const listWidth = slickList.offsetWidth;
    let leftPosition = track.style.left;

    if (track.style.left === '') {
      leftPosition = 0;
    } else {
      leftPosition = parseFloat(track.style.left.slice(0, -2) * -1);
    }

    if (leftPosition < (trackWidth - listWidth) && value === 2) {
      track.style.left = `${-1 * (leftPosition + slickWidth)}px`;
    } else if (leftPosition > 0 && value === 1) {
      track.style.left = `${-1 * (leftPosition - slickWidth)}px`;
    }
  }

  buttonPrev.onclick = () => Move(1);
  buttonNext.onclick = () => Move(2);
};
