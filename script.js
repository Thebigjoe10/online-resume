  function animateProgressBar(progressBarFill, progressBarText, progress) {
      let width = 0;
      let id = setInterval(frame, 10);

      function frame() {
        if (width >= progress) {
          clearInterval(id);
        } else {
          width++;
          progressBarFill.style.width = width + '%';
          progressBarText.innerHTML = width + '%';
        }
      }
    }

    const progressBars = document.querySelectorAll('.progress-bar-fill');
    const progressTexts = document.querySelectorAll('.progress-bar-text');

    for (let i = 0; i < progressBars.length; i++) {
      const progressBarFill = progressBars[i];
      const progressBarText = progressTexts[i];
      const progressWidth = parseInt(progressBarFill.style.width, 10);

      animateProgressBar(progressBarFill, progressBarText, progressWidth);
    }