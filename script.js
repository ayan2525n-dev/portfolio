// Navigation Active Effect

document.querySelectorAll('nav a').forEach(link => {

  link.addEventListener('click', () => {

    document.querySelectorAll('nav a')
      .forEach(item => item.classList.remove('active'));

    link.classList.add('active');

  });

});


// 3D Mouse Tilt Effect

const portrait = document.querySelector('.portrait-card');

if (portrait) {

  portrait.addEventListener('mousemove', (event) => {

    const rect = portrait.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const rotateX = ((y / rect.height) - 0.5) * -18;
    const rotateY = ((x / rect.width) - 0.5) * 18;

    portrait.style.animation = 'none';

    portrait.style.transform =
      `perspective(900px)
       rotateX(${rotateX}deg)
       rotateY(${rotateY}deg)
       scale3d(1.03, 1.03, 1.03)`;

  });

  portrait.addEventListener('mouseleave', () => {

    portrait.style.animation = 'portraitFloat 5s ease-in-out infinite';

    portrait.style.transform =
      'perspective(900px) rotateX(0deg) rotateY(0deg)';

  });

}


// 3D Skill Card Tilt

const cards = document.querySelectorAll(
  '.skill-card, .goal-card'
);

cards.forEach(card => {

  card.addEventListener('mousemove', (event) => {

    const rect = card.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const rotateX = ((y / rect.height) - 0.5) * -10;
    const rotateY = ((x / rect.width) - 0.5) * 10;

    card.style.transform =
      `perspective(800px)
       rotateX(${rotateX}deg)
       rotateY(${rotateY}deg)
       translateY(-8px)`;

  });

  card.addEventListener('mouseleave', () => {

    card.style.transform =
      'perspective(800px) rotateX(0deg) rotateY(0deg)';

  });

});