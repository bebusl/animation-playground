const html = document.documentElement;
// DOM의 대빵을 찾는거니까 이게 html인듯

const canvas = document.getElementById("lightpass");

const context = canvas.getContext("2d");

const frameCount = 148;
const currentFrame = (index) =>
  `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index
    .toString()
    .padStart(4, "0")}.jpg`;

const preloadImages = () => {
  for (let i = 1; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
  } // caching 시켜놓는 것.
};

const img = new Image();
img.src = currentFrame(1);
canvas.width = 1150;
canvas.height = 770;
img.onload = () => {
  context.drawImage(img, 0, 0);
};

const updateImage = (idx) => {
  img.src = currentFrame(idx);
  context.drawImage(img, 0, 0);
};

window.addEventListener("scroll", () => {
  const scrollTop = html.scrollTop;
  const maxScrollTop = html.scrollHeight - window.innerHeight;
  const scrollFraction = scrollTop / maxScrollTop;
  const frameIndex = Math.min(
    frameCount - 1,
    Math.ceil(scrollFraction * frameCount)
  );
  requestAnimationFrame(() => updateImage(frameIndex + 1));
});
