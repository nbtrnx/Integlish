'use strict';

// Objects

// Primary
// carousel (primary)
const carouselPrimary = document.getElementById('carousel--primary');

// options (primary)
const optionsPrimary = carouselPrimary.querySelectorAll('.option');

// description (primary)
const descriptionKnowledge = document.querySelector('.feature-1__description--primary--knowledge');
const descriptionPractice = document.querySelector('.feature-1__description--primary--practice');
const descriptionQualification = document.querySelector('.feature-1__description--primary--qualification');

// (all)
const allDescriptionsPrimary = [descriptionKnowledge, descriptionPractice, descriptionQualification];

// Secondary
// carousels (secondary)
const carouselKnowledge = document.querySelector('.carousel--secondary--knowledge');
const carouselPractice = document.querySelector('.carousel--secondary--practice');
const carouselQualification = document.querySelector('.carousel--secondary--qualification');

// (all)
const allCarouselsSecondary = [carouselKnowledge, carouselPractice, carouselQualification];

// options (secondary)
const optionsKnowledge = carouselKnowledge.querySelectorAll('.option');
const optionsPractice = carouselPractice.querySelectorAll('.option');
const optionsQualification = carouselQualification.querySelectorAll('.option');

// description (secondary)
const descriptionPronunciation = document.getElementById('pronunciation');
const descriptionGrammar = document.getElementById('grammar');
const descriptionVocabulary = document.getElementById('vocabulary');
const descriptionRead = document.getElementById('read');
const descriptionListen = document.getElementById('listen');
const descriptionWrite = document.getElementById('write');
const descriptionSpeak = document.getElementById('speak');
const descriptionToefl = document.getElementById('toefl');
const descriptionIelts = document.getElementById('ielts');

// (all)
const allDescriptionsSecondary = [
  descriptionPronunciation,
  descriptionGrammar,
  descriptionVocabulary,
  descriptionRead,
  descriptionListen,
  descriptionWrite,
  descriptionSpeak,
  descriptionToefl,
  descriptionIelts
];

//
// functions
function resetUIPrimary(ev) {
  // button
  optionsPrimary.forEach((el) => el.classList.remove('active'));
  // description
  allDescriptionsPrimary.forEach((el) => el.classList.remove('active'));
  // carousel (secondary)
  allCarouselsSecondary.forEach((el) => el.classList.remove('active'));

  if (ev.currentTarget.classList.contains('option--knowledge')) {
    // button
    optionsKnowledge.forEach((el) => el.classList.remove('active'));
    carouselKnowledge.querySelector('.option--pronunciation').classList.add('active');
    // description
    allDescriptionsSecondary.forEach((el) => el.classList.remove('active'));
    descriptionPronunciation.classList.add('active');
  } else if (ev.currentTarget.classList.contains('option--practice')) {
    // button
    optionsPractice.forEach((el) => el.classList.remove('active'));
    carouselPractice.querySelector('.option--read').classList.add('active');
    // description
    allDescriptionsSecondary.forEach((el) => el.classList.remove('active'));
    descriptionRead.classList.add('active');
  } else if (ev.currentTarget.classList.contains('option--qualification')) {
    // button
    optionsQualification.forEach((el) => el.classList.remove('active'));
    carouselQualification.querySelector('.option--toefl').classList.add('active');
    // description
    allDescriptionsSecondary.forEach((el) => el.classList.remove('active'));
    descriptionToefl.classList.add('active');
  }
}

function resetUISecondary(e) {
  optionsKnowledge.forEach((el) => el.classList.remove('active'));
  optionsPractice.forEach((el) => el.classList.remove('active'));
  optionsQualification.forEach((el) => el.classList.remove('active'));
  allDescriptionsSecondary.forEach((el) => el.classList.remove('active'));
}

//
// Eventlisteners

// Primary
for (const option of optionsPrimary) {
  option.addEventListener('click', (ev) => {
    if (option.classList.contains('option--knowledge')) {
      if (option.classList.contains('active')) {
        if (!carouselKnowledge.querySelector('.option--pronunciation').classList.contains('active')) {
          return;
        }
      }
    } else if (option.classList.contains('option--practice')) {
      if (option.classList.contains('active')) {
        if (!carouselPractice.querySelector('.option--read').classList.contains('active')) {
          return;
        }
      }
    } else if (option.classList.contains('option--qualification')) {
      if (option.classList.contains('active')) {
        if (!carouselQualification.querySelector('.option--toefl').classList.contains('active')) {
          return;
        }
      }
    }
    resetUIPrimary(ev);
    // button
    option.classList.add('active');
    if (option.classList.contains('option--knowledge')) {
      // description
      descriptionKnowledge.classList.add('active');
      // carousel
      carouselKnowledge.classList.add('active');
    } else if (option.classList.contains('option--practice')) {
      // description
      descriptionPractice.classList.add('active');
      // carousel
      carouselPractice.classList.add('active');
    } else if (option.classList.contains('option--qualification')) {
      // description
      descriptionQualification.classList.add('active');
      // carousel
      carouselQualification.classList.add('active');
    }
  });
}

// Secondary
for (const option of optionsKnowledge) {
  option.addEventListener('click', () => {
    resetUISecondary();
    // button
    option.classList.add('active');
    if (option.classList.contains('option--pronunciation')) {
      // description
      descriptionPronunciation.classList.add('active');
    } else if (option.classList.contains('option--grammar')) {
      descriptionGrammar.classList.add('active');
    } else if (option.classList.contains('option--vocabulary')) {
      descriptionVocabulary.classList.add('active');
    }
  });
}

for (const option of optionsPractice) {
  option.addEventListener('click', () => {
    resetUISecondary();
    // button
    option.classList.add('active');
    if (option.classList.contains('option--read')) {
      // description
      descriptionRead.classList.add('active');
    } else if (option.classList.contains('option--listen')) {
      descriptionListen.classList.add('active');
    } else if (option.classList.contains('option--write')) {
      descriptionWrite.classList.add('active');
    } else if (option.classList.contains('option--speak')) {
      descriptionSpeak.classList.add('active');
    }
  });
}

for (const option of optionsQualification) {
  option.addEventListener('click', () => {
    resetUISecondary();
    // button
    option.classList.add('active');
    if (option.classList.contains('option--toefl')) {
      // description
      descriptionToefl.classList.add('active');
    } else if (option.classList.contains('option--ielts')) {
      descriptionIelts.classList.add('active');
    }
  });
}
