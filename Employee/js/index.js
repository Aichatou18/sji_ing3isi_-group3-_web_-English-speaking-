var TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  const imageModalBody = document.getElementById('modalBody');
  const images = document.querySelectorAll('.img-gallery img');
  const messages = [
      "Increased Efficiency and Speed: The platform streamlines the process of finding and connecting with needed services. Users can quickly search for professionals based on location, skills, reviews, and availability, saving significant time compared to traditional methods like word-of-mouth or extensive online searches.",
      "Expanded Reach and Accessibility: Both service providers and seekers benefit from increased reach. Professionals can access a broader client base beyond their immediate geographical area, and individuals can find services that might not be readily available locally. This is particularly beneficial for those in remote areas or with limited access to traditional service providers",
      "Enhanced Transparency and Trust: Features like user reviews, ratings, and verification systems build trust and transparency. Potential clients can make informed decisions based on the experiences of others, and service providers can showcase their qualifications and build a positive reputation.",
      "Cost-Effectiveness: For both providers and seekers, the application can be more cost-effective than traditional methods. Providers can potentially reach more clients without the expense of extensive advertising, while seekers can avoid the time and cost associated with extensive searches and vetting processes.",
      "Significantly Reduced Search Time: The application drastically cuts down the time spent searching for qualified professionals. Users can quickly filter results based on specific criteria (location, skills, availability, reviews), instantly narrowing down the options and eliminating the need for extensive manual searches across multiple platforms or directories.",
     "This app saves you tons of time! Forget endless searches. find the perfect professional quickly and easily by filtering for location, skills, and reviews. Book appointments directly, message providers instantly, and get your service needs met faster than ever before. It's efficient communication and scheduling all in one place, freeing up your time to focus on other things. Whether you're a busy professional or someone who values their time, this app streamlines the entire process, from finding the right person to getting the job done."
  ];

  images.forEach(img => {
      img.addEventListener('click', () => {
          const index = img.dataset.imageIndex;
          imageModalBody.textContent = messages[index];
      });
  });