import { nanoid } from 'nanoid';

import aboutCheers from '../assets/images/about_cheers.jpg';
import aboutRestaurant from '../assets/images/about_restaurant.jpg';
import aboutServe from '../assets/images/about_serve.jpg';
import aboutSteak from '../assets/images/about_steak.jpg';
import aboutWine from '../assets/images/about_wine.jpg';

export const aboutTitleData = {
  title: 'Restaurant de Leaf',
  capture: 'Varieties of our rich menu, a famous Michelin star restaurant.',
  'text-up':
    'We came up with a smart program that will help you do your part for the environment while saving 50 cents each time you purchase a fresh delicious Green Rebel salad.',
  'text-down':
    'Once upon a time, cofounders Ian O’Meara and Darragh McFeely had a renowned beachside bistro in New Zealand that served real food. Fresh, delicious, wholesome, authentic food which was sourced from a local produce stand called the “The Leaf”.',
};

export const aboutSliderData = [
  {
    id: nanoid(),
    image: aboutCheers,
    text:
      'In hac habitasse platea dictumst. Nam vitae ornare felis, ac imperdiet elit. Praesent fringilla ipsum tellus, eu hendrerit elit aliquet at. Etiam tempor erat id libero lacinia, et vulputate massa molestie. Integer eu elementum enim. Ut at varius turpis, efficitur efficitur tortor. In varius urna at dignissim commodo. Quisque rutrum euismod ex, a gravida massa porta id. Vestibulum nisl orci, accumsan at risus eu, finibus varius dui. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
  },
  {
    id: nanoid(),
    image: aboutRestaurant,
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus sem id finibus aliquam. Curabitur gravida id ante sit amet mollis. Sed interdum luctus viverra. Vivamus est ligula, pulvinar sed ante non, volutpat efficitur dolor. Praesent nec eros non velit eleifend molestie. Sed placerat placerat nisi quis faucibus. Etiam ut risus interdum, auctor lorem a, luctus nisl. Fusce eu metus velit. Aliquam eget facilisis justo, a porta libero. Fusce eget porttitor lorem, vitae interdum tortor. Nulla suscipit et nulla sed semper. Suspendisse ullamcorper consectetur tempus.In hac habitasse platea dictumst. Nam vitae ornare felis, ac imperdiet elit. Praesent fringilla ipsum tellus, eu hendrerit elit aliquet at. Etiam tempor erat id libero lacinia, et vulputate massa molestie. Integer eu elementum enim.',
  },
  {
    id: nanoid(),
    image: aboutServe,
    text:
      'Integer eget ornare ex. Etiam dignissim sodales cursus. Nullam eget luctus eros, pulvinar vestibulum nibh. Maecenas est ligula, dignissim venenatis elit et, molestie tristique neque. Sed congue ultrices posuere. Morbi pretium eu justo at eleifend. Quisque pulvinar, quam ac rutrum varius, nulla lectus dictum nulla, ac euismod enim quam at justo. n hac habitasse platea dictumst. Nam vitae ornare felis, ac imperdiet elit. Praesent fringilla ipsum tellus, eu hendrerit elit aliquet at. Etiam tempor erat id libero lacinia, et vulputate massa molestie. Integer eu elementum enim. Ut at varius turpis, efficitur efficitur tortor. In varius urna at dignissim commodo. Quisque rutrum euismod ex, a gravida massa porta id. Vestibulum nisl orci, accumsan at risus eu, finibus varius dui. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
  },
  {
    id: nanoid(),
    image: aboutSteak,
    text:
      'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed quam orci, blandit non odio vel, dapibus cursus libero. Praesent id neque dui. Nam tristique fringilla turpis, nec ultricies felis vulputate nec. Sed finibus urna elit, id lobortis sapien suscipit id. Vivamus laoreet lectus ut mattis dapibus.',
  },
  {
    id: nanoid(),
    image: aboutWine,
    text:
      'In velit felis, eleifend ac dapibus sed, lacinia vitae massa. Nullam ullamcorper pulvinar ante, at blandit magna mattis vel. In condimentum ipsum sed pharetra tristique. Proin sit amet quam arcu. Vestibulum venenatis sodales orci quis fringilla. Nulla diam justo, maximus vel justo vulputate, malesuada finibus ante.',
  },
];
