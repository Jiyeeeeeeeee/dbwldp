const projects = [
  {
    id: "project-5",
    year: "2026",
    title: { ko: "Indexing Assemblage", en: "Indexing Assemblage" },
    type: { ko: "책", en: "editorial" },
    meta: {
      ko: {
        year: "2026",
        size: "148×210 mm",
        pages: "36p",
        paper: "문켄 프린트 화이트 115g",
        printing: "디지털 출력",
        binding: "실제본"
      },
      en: {
        year: "2026",
        size: "148×210 mm",
        pages: "36p",
        paper: "MunkenPrintWhite 115g",
        printing: "Indigo Printing",
        binding: "Saddle Stitch Binding"
      }
    },
    description: {
      ko: "An archive of 36 non-hierarchical surfaces made from 336 index labels.",
      en: "An archive of 36 non-hierarchical surfaces made from 336 index labels."
    },
    images: [
      { src: "images/indexing-1.jpg", alt: { ko: "프로젝트 이미지 1", en: "project image 1" } },
      { src: "images/Indexing-2.jpg", alt: { ko: "프로젝트 이미지 1", en: "project image 1" } },
      { src: "images/Indexing-3.jpg", alt: { ko: "프로젝트 이미지 1", en: "project image 1" } },
      { src: "images/Indexing-4.jpg", alt: { ko: "프로젝트 이미지 1", en: "project image 1" } },
    ]

  },


  {
    id: "project-4",
    year: "2026",
    title: {
      ko: "Indexing Pattern",
      en: "Indexing Pattern"
    },
    type: {
      ko: "그래픽",
      en: "graphic"
    },

    meta: {
      ko: {
        year: "2026",
        paper: "고지서",
        printing: "디지털 출력"
      }
    },

    images: [
      { src: "images/Indexing-6.jpeg", alt: { ko: "프로젝트 이미지 1" } },
      { src: "images/Indexing-7.jpeg", alt: { ko: "프로젝트 이미지 2" } },
      { src: "images/Indexing-8.jpeg", alt: { ko: "프로젝트 이미지 3" } },
      { src: "images/Indexing-9.jpeg", alt: { ko: "프로젝트 이미지 4" } },
      { src: "images/Indexing-10.jpeg", alt: { ko: "프로젝트 이미지 5" } },
      { src: "images/Indexing-11.jpeg", alt: { ko: "프로젝트 이미지 6" } },
      { src: "images/Indexing-12.jpeg", alt: { ko: "프로젝트 이미지 7" } },
      { src: "images/Indexing-13.jpeg", alt: { ko: "프로젝트 이미지 8" } },
      { src: "images/Indexing-14.jpeg", alt: { ko: "프로젝트 이미지 9" } },
      { src: "images/Indexing-15.jpeg", alt: { ko: "프로젝트 이미지 10" } },
      { src: "images/Indexing-16.jpeg", alt: { ko: "프로젝트 이미지 11" } },
      { src: "images/Indexing-17.jpeg", alt: { ko: "프로젝트 이미지 12" } }
    ]
  },


  {
    id: "project-3",
    year: "2026",
    title: { ko: "Imagined between two points", en: "Imagined between two points" },
    type: { ko: "Editorial", en: "Editorial" },
    meta: {
      ko: {
        year: "2026",
        size: "130 x 180 mm",
        printing: "Indigo Printing",
      },
      en: {
        year: "2026",
        size: "130 x 180 mm",
        printing: "Indigo Printing",
      }
    },
    description: {
    },
    images: [
      { src: "images/twopoints-1.jpg", alt: { ko: "프로젝트 이미지 1", en: "project image 1" } },
      { src: "images/twopoints-3.jpg", alt: { ko: "프로젝트 이미지 1", en: "project image 1" } },
      { src: "images/twopoints-2.jpg", alt: { ko: "프로젝트 이미지 1", en: "project image 1" } },
    ]
  },
  {
    id: "project-2",
    year: "2026",
    title: { ko: "growing business cards", en: "growing business cards," },
    type: { ko: "그래픽", en: "graphic" },
    meta: {
      ko: {
        year: "2026",
        size: "165x255, 220x340, 275x385 mm",
        paper: "NT 151g, NS Board 1100mm, Laminated paper",
        printing: "Indigo Printing",
      },
      en: {
        year: "2026",
        size: "165x255, 220x340, 275x385 mm",
        paper: "NT white 151g, NS board 1100mm",
        printing: "Indigo Printing",
      }
    },
    description: {
      ko: "I imagine the reactions of those to whom I hand this object—a business card that does not even approximate the standard, a so-called business card that cannot truly be exchanged, nothing more than a small wooden board with four corners. *You made this as a business card? Where's your phone number? The email address isn't even yours. I can't possibly take this with me.* Well, that's the problem. The business card has grown too large. Instead, perhaps it can serve as a fan to cool you in the coming summer, a shade from the sun, or a small mat to sit on the pavement. It may turn out to be surprisingly useful after all.",
      en: "."
    },
    images: [
    ]
  },
  {
    id: "project-1",
    year: "2025",
    title: { ko: "다양하고, 기이하며, 일시적이고, 마법같고, 위험하며 감정적인 것을 만들기", en: "Make a Zine," },
    type: { ko: "프로젝트", en: "Project" },
    meta: {
      ko: {
        year: "2025",
        size: "130×200 mm",
        production: "인터프로프린트",
        paper: "백색 모조지",
        printing: "인디고 1도 인쇄",
        pages: "44p"
      },
      en: {
        year: "2025",
        size: "130×200 mm",
        production: "Interpro Print",
        paper: "White woodfree paper",
        printing: "Indigo 1-color printing",
        pages: "44p"
      }
    },
    description: {
    },
    images: [
      { src: "images/rei-10.jpg", alt: { ko: "진 프로젝트 이미지 10", en: "Zine project image 10" } },
    ]
  },
  /*{
    id: "project-0",
    year: "2026",
    title: { ko: "Yoo Jiye?", en: "Yoo Jiye?" },
    meta: {
    },
    description: {
      ko: "[YD KIDS](https://www.instagram.com/lildead19/) [서신교환](https://www.instagram.com/exchange.papers/) [AG](https://www.instagram.com/ag.co.kr/) 전 디자이너",
      en: "[YD키즈](https://www.instagram.com/lildead19/) [서신교환](https://www.instagram.com/exchange.papers/)의 멤버이자 [AG](https://www.instagram.com/ag.co.kr/) 전 디자이너"

  },*/
];

/* Contact */

const CONTACT_CONTENT = {
  ko: {
    title: "Contact",
    body: `
      <span class="contact-line">
        <a href="mailto:yoojiyekr@gmail.com">
          yoojiyekr@gmail.com
        </a> on Gmail
      </span>

      <span class="contact-line">
        <a href="https://www.instagram.com/yoojiye/">
          yoojiye
        </a> on IG
      </span>

      <span class="contact-line">
        <a href="https://www.are.na/jiye-yoo/channels">
          yoojiye
        </a> on Are.na
      </span>
    `
  }
};


/* Slideshow data */

const slides = projects.flatMap((project) => {
  const media = project.images?.length
    ? project.images
    : project.image?.src
      ? [project.image]
      : [];

  return media.map((item) => ({
    ...item,
    title: project.title.ko,
    meta: project.meta?.ko || {},
    projectId: project.id
  }));
});


/* Elements */

const slideMedia = document.getElementById("slide-media");
const slideTitle = document.getElementById("slide-title");

const homeButton = document.getElementById("home-button");

const floatingContactContent = document.getElementById(
  "floating-contact-content"
);

const caption = document.querySelector(".slide-caption");

let currentSlide = 0;
let blueCaption = null;


/* Format caption */

function formatCaption(slide) {
  const metaValues = Object.values(slide.meta || {})
    .filter((value) =>
      value !== null &&
      value !== undefined &&
      value !== ""
    );

  return [slide.title, ...metaValues].join(", ");
}


/* Create blue caption */

function createBlueCaption() {
  if (!caption) return;

  blueCaption = caption.cloneNode(true);
  blueCaption.classList.add("is-blue");

  blueCaption.querySelectorAll("[id]").forEach((element) => {
    element.removeAttribute("id");
  });

  caption.after(blueCaption);
}


/* Update blue caption text */

function updateBlueCaptionText() {
  if (!blueCaption) return;

  const blueTitle = blueCaption.querySelector(".slide-title");

  if (blueTitle) {
    blueTitle.textContent = slideTitle.textContent;
  }
}


/* Calculate image overlap */

function updateCaptionOverlap() {
  if (!blueCaption) return;

  const media = slideMedia.querySelector("img, video");

  if (!media) {
    blueCaption.style.clipPath = "inset(100%)";
    return;
  }

  if (
    media.tagName === "IMG" &&
    (!media.complete || media.naturalWidth === 0)
  ) {
    blueCaption.style.clipPath = "inset(100%)";
    return;
  }

  if (
    media.tagName === "VIDEO" &&
    media.readyState === 0
  ) {
    blueCaption.style.clipPath = "inset(100%)";
    return;
  }

  const imageRect = media.getBoundingClientRect();
  const captionRect = blueCaption.getBoundingClientRect();

  const overlapLeft = Math.max(
    imageRect.left,
    captionRect.left
  );

  const overlapRight = Math.min(
    imageRect.right,
    captionRect.right
  );

  const overlapTop = Math.max(
    imageRect.top,
    captionRect.top
  );

  const overlapBottom = Math.min(
    imageRect.bottom,
    captionRect.bottom
  );

  if (
    overlapLeft >= overlapRight ||
    overlapTop >= overlapBottom
  ) {
    blueCaption.style.clipPath = "inset(100%)";
    return;
  }

  const top = overlapTop - captionRect.top;
  const right = captionRect.right - overlapRight;
  const bottom = captionRect.bottom - overlapBottom;
  const left = overlapLeft - captionRect.left;

  blueCaption.style.clipPath = `
    inset(
      ${top}px
      ${right}px
      ${bottom}px
      ${left}px
    )
  `;
}


/* Render slide */

function renderSlide() {
  slideMedia.replaceChildren();

  if (blueCaption) {
    blueCaption.style.clipPath = "inset(100%)";
  }

  if (slides.length === 0) {
    slideTitle.textContent = "No images available";
    updateBlueCaptionText();
    return;
  }

  const slide = slides[currentSlide];

  let element;

  if (slide.type === "video") {
    element = document.createElement("video");

    element.autoplay = true;
    element.loop = true;
    element.muted = true;
    element.playsInline = true;

    element.className = "slide-video";

    element.addEventListener(
      "loadedmetadata",
      updateCaptionOverlap
    );

  } else {
    element = document.createElement("img");

    element.alt = slide.alt?.ko || slide.title;
    element.draggable = false;

    element.className = "slide-image";

    element.addEventListener(
      "load",
      updateCaptionOverlap
    );
  }

  element.src = slide.src;
  slideMedia.appendChild(element);

  // Title + meta
  slideTitle.textContent = formatCaption(slide);

  updateBlueCaptionText();

  requestAnimationFrame(updateCaptionOverlap);
}


/* Next image */

function nextSlide() {
  if (slides.length === 0) return;

  currentSlide = (currentSlide + 1) % slides.length;

  renderSlide();
}


/* Previous image */

function previousSlide() {
  if (slides.length === 0) return;

  currentSlide =
    (currentSlide - 1 + slides.length) % slides.length;

  renderSlide();
}


/* Click image */

slideMedia.addEventListener("click", nextSlide);


/* Home button */

homeButton.addEventListener("click", () => {
  currentSlide = 0;
  renderSlide();
});


/* Keyboard navigation */

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    nextSlide();
  }

  if (event.key === "ArrowLeft") {
    previousSlide();
  }
});


/* Window resize */

window.addEventListener(
  "resize",
  updateCaptionOverlap
);


/* Initialize */

floatingContactContent.innerHTML = CONTACT_CONTENT.ko.body;

createBlueCaption();
renderSlide();


/* Random letter hover */


/* Wrap visible letters only */

function wrapLetters(element) {
  if (!element || element.dataset.lettersWrapped === "true") {
    return;
  }

  const walker = document.createTreeWalker(
    element,
    NodeFilter.SHOW_TEXT
  );

  const textNodes = [];

  while (walker.nextNode()) {
    textNodes.push(walker.currentNode);
  }

  textNodes.forEach((node) => {
    const text = node.textContent;

    // Ignore indentation-only text nodes
    if (!text.trim()) {
      return;
    }

    const fragment = document.createDocumentFragment();

    Array.from(text).forEach((character) => {

      // Keep spaces as normal text
      if (/\s/.test(character)) {
        fragment.appendChild(
          document.createTextNode(character)
        );
        return;
      }

      // Wrap only visible characters
      const span = document.createElement("span");
      span.className = "random-letter";
      span.textContent = character;

      fragment.appendChild(span);
    });

    node.replaceWith(fragment);
  });

  element.dataset.lettersWrapped = "true";
}


function randomizeLetters(element) {
  const letters = element.querySelectorAll(".random-letter");

  letters.forEach((letter) => {
    const rotation = (Math.random() * 20 - 10).toFixed(2);
    const offsetY = (Math.random() * 12 - 6).toFixed(2);

    letter.style.setProperty(
      "--random-rotation",
      `${rotation}deg`
    );

    letter.style.setProperty(
      "--random-y",
      `${offsetY}px`
    );

    letter.classList.add("is-active");
  });
}

function resetLetters(element) {
  element.querySelectorAll(".random-letter").forEach((letter) => {
    letter.classList.remove("is-active");
  });
}

function setupRandomHover(element) {
  if (!element) return;

  wrapLetters(element);

  element.addEventListener("mouseenter", () => {
    randomizeLetters(element);
  });

  element.addEventListener("mouseleave", () => {
    resetLetters(element);
  });
}

/* Apply to header and contact links */

setupRandomHover(
  document.querySelector(".header-home-button")
);

document.querySelectorAll(
  ".floating-contact-content a"
).forEach((link) => {
  setupRandomHover(link);
});
