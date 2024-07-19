export const routes = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'About me',
    href: '/about-me',
  },
  {
    title: 'Work',
    href: '/work',
  },
  {
    title: 'Contact',
    href: '/contact',
  },
];

export const awards = [
  {
    title: 'CZECH INSTITUTE OF DESIGN',
    context:
      'Interior of the Year - Public Spaces for Masarycka Restaurant awarded by Institute of Design, Czech Republic',
    year: '2021',
  },
  {
    title: 'AMERICAN INSTITUTE OF ARCHITECT',
    context: 'AIA LA RESTAURANT AWARDS HONOR AWARD for Masarycka Restaurant',
    year: '2022',
  },
  {
    title: 'BIG SEE',
    context: 'BIG SEE Interior Design Award - Winner for Motorcycle Loft',
    year: '2021',
  },
  {
    title: 'AMERICAN INSTITUTE OF ARCHITECT',
    context: 'AIA LA NEXT AWARDS HONOR AWARD for Embassy of the Czech Republic',
    year: '2010',
  },
  {
    title: 'AMERICAN INSTITUTE OF ARCHITECT',
    context:
      'AIA LA NEXT AWARDS BEST IN SHOW for Embassy of the Czech Republic',
    year: '2010',
  },
  {
    title: 'LOS ANGELES BUSINESS COUNCIL',
    context:
      'Renovation Award for Commercial project Indian Paintbrush Productions',
    year: '2012',
  },
  {
    title: 'CHAMBER OF ARCHITECTS CZECH REPUBLIC',
    context:
      'Grand Prix - National Architecture Award for Czech Republic for Residential Multifamily project Central Park Prague',
    year: '2010',
  },
];

export const socials = [
  {
    title: 'Instagram',
    href: 'https://www.instagram.com/marijavolkman/',
  },
  {
    title: 'Facebook',
    href: 'https://www.facebook.com/marija.volkman',
  },
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/marija-volkman-0a8b5b1a/',
  },
];

export type ProjectsView = 'list' | 'grid';

export const projectsFeatured = [
  {
    title: 'Masarycka Restaurant',
    slug: 'masarycka-restaurant',
    category: 'Hospitality',
    featuredPhoto: 'masarycka-restaurant/featuredPhoto.jpg',
  },
  {
    title: 'Arden Residence',
    slug: 'arden-residence',
    category: 'Residential',
    featuredPhoto: 'arden-residence/featuredPhoto.jpg',
  },
  {
    title: 'Basics Coffee',
    slug: 'basics-coffee',
    category: 'Hospitality',
    featuredPhoto: 'basics-coffee/featuredPhoto.jpg',
  },
  {
    title: 'Bird & Bird',
    slug: 'bird-and-bird',
    category: 'Office fittout',
    featuredPhoto: 'bird-and-bird/featuredPhoto.jpg',
  },
  {
    title: 'Cottage',
    slug: 'cottage',
    category: 'Residential',
    featuredPhoto: 'cottage/featuredPhoto.jpg',
  },
  {
    title: 'Silencio',
    slug: 'c2-montreal',
    category: 'Design & Development',
    featuredPhoto: 'andjela-zivic.jpeg',
  },
];

export type Project = {
  title: string;
  slug: string;
  category: string;
  featuredPhoto: string;
  location: string;
  client: string;
  year: string;
  grid: {
    alt: string;
    images: {
      src: string;
      style: {
        '--r': number;
        '--c': number;
        '--s'?: number;
      };
      caption?: string;
    }[];
  };
};

export const projectsFull = [
  {
    title: 'Masarycka Restaurant',
    slug: 'masarycka-restaurant',
    category: 'Hospitality',
    featuredPhoto: 'masarycka-restaurant/featuredPhoto.jpg',
    location: 'Prague, Czech Republic',
    client: 'Lagardére Travel Retail',
    year: '2021',
    grid: {
      alt: 'Masarycka Restaurant',
      images: [
        {
          src: '/projects/masarycka-restaurant/1.jpg',
          style: { '--r': 1, '--c': 1, '--s': 4 },
        },
        {
          src: '/projects/masarycka-restaurant/2.jpg',
          style: { '--r': 2, '--c': 5, '--s': 3 },
        },
        {
          src: '/projects/masarycka-restaurant/3.jpg',
          style: { '--r': 3, '--c': 3, '--s': 2 },
        },
        {
          src: '/projects/masarycka-restaurant/4.jpg',
          style: { '--r': 4, '--c': 1, '--s': 2 },
        },
        {
          src: '/projects/masarycka-restaurant/5.jpg',
          style: { '--r': 5, '--c': 3, '--s': 5 },
        },
        {
          src: '/projects/masarycka-restaurant/6.jpg',
          style: { '--r': 6, '--c': 2 },
        },
        {
          src: '/projects/masarycka-restaurant/7.jpg',
          style: { '--r': 7, '--c': 3, '--s': 3 },
        },
        {
          src: '/projects/masarycka-restaurant/8.jpg',
          style: { '--r': 8, '--c': 6, '--s': 2 },
        },
        {
          src: '/projects/masarycka-restaurant/9.jpg',
          style: { '--r': 9, '--c': 1, '--s': 5 },
        },
        {
          src: '/projects/masarycka-restaurant/10.jpg',
          style: { '--r': 10, '--c': 6, '--s': 3 },
        },
        {
          src: '/projects/masarycka-restaurant/11.jpg',
          style: { '--r': 11, '--c': 4, '--s': 2 },
        },
        {
          src: '/projects/masarycka-restaurant/12.jpg',
          style: { '--r': 12, '--c': 1, '--s': 3 },
        },
        {
          src: '/projects/masarycka-restaurant/13.jpg',
          style: { '--r': 13, '--c': 4, '--s': 5 },
        },
        {
          src: '/projects/masarycka-restaurant/14.jpg',
          style: { '--r': 14, '--c': 1, '--s': 3 },
        },
        {
          src: '/projects/masarycka-restaurant/15.jpg',
          style: { '--r': 15, '--c': 4, '--s': 5 },
        },
        {
          src: '/projects/masarycka-restaurant/16.jpg',
          style: { '--r': 16, '--c': 3, '--s': 1 },
        },
        {
          src: '/projects/masarycka-restaurant/17.jpg',
          style: { '--r': 17, '--c': 1, '--s': 2 },
        },
        {
          src: '/projects/masarycka-restaurant/18.jpg',
          style: { '--r': 18, '--c': 3, '--s': 5 },
        },
        {
          src: '/projects/masarycka-restaurant/19.jpg',
          style: { '--r': 19, '--c': 2 },
        },
        {
          src: '/projects/masarycka-restaurant/20.jpg',
          style: { '--r': 20, '--c': 3, '--s': 3 },
        },
        {
          src: '/projects/masarycka-restaurant/21.jpg',
          style: { '--r': 21, '--c': 6, '--s': 2 },
        },
        {
          src: '/projects/masarycka-restaurant/22.jpg',
          style: { '--r': 22, '--c': 1, '--s': 5 },
        },
        {
          src: '/projects/masarycka-restaurant/23.jpg',
          style: { '--r': 23, '--c': 6, '--s': 3 },
        },
      ],
    },
  },
  {
    title: 'Arden Residence',
    slug: 'arden-residence',
    category: 'Residential',
    featuredPhoto: 'arden-residence/featuredPhoto.jpg',
    location: 'Los Angeles, California',
    client: 'Rismondo Design',
    year: '2024',
    grid: {
      alt: 'Arden Residence',
      images: [
        {
          src: '/projects/arden-residence/1.jpg',
          style: { '--r': 1, '--c': 1, '--s': 4 },
        },
        {
          src: '/projects/arden-residence/2.jpg',
          style: { '--r': 2, '--c': 5, '--s': 3 },
        },
        {
          src: '/projects/arden-residence/3.jpg',
          style: { '--r': 3, '--c': 3, '--s': 2 },
        },
        {
          src: '/projects/arden-residence/4.jpg',
          style: { '--r': 4, '--c': 1, '--s': 2 },
        },
        {
          src: '/projects/arden-residence/5.jpg',
          style: { '--r': 5, '--c': 3, '--s': 5 },
        },
        {
          src: '/projects/arden-residence/6.jpg',
          style: { '--r': 6, '--c': 2 },
        },
        {
          src: '/projects/arden-residence/7.jpg',
          style: { '--r': 7, '--c': 3, '--s': 3 },
        },
        {
          src: '/projects/arden-residence/8.jpg',
          style: { '--r': 8, '--c': 6, '--s': 2 },
        },
        {
          src: '/projects/arden-residence/9.jpg',
          style: { '--r': 9, '--c': 1, '--s': 5 },
        },
        {
          src: '/projects/arden-residence/10.jpg',
          style: { '--r': 10, '--c': 6, '--s': 3 },
        },
        {
          src: '/projects/arden-residence/11.jpg',
          style: { '--r': 11, '--c': 4, '--s': 2 },
        },
        {
          src: '/projects/arden-residence/12.jpg',
          style: { '--r': 12, '--c': 1, '--s': 3 },
        },
        {
          src: '/projects/arden-residence/13.jpg',
          style: { '--r': 13, '--c': 4, '--s': 5 },
        },
        {
          src: '/projects/arden-residence/14.jpg',
          style: { '--r': 14, '--c': 1, '--s': 3 },
        },
        {
          src: '/projects/arden-residence/15.jpg',
          style: { '--r': 15, '--c': 4, '--s': 5 },
        },
        {
          src: '/projects/arden-residence/16.jpg',
          style: { '--r': 16, '--c': 3, '--s': 1 },
        },
        {
          src: '/projects/arden-residence/17.jpg',
          style: { '--r': 17, '--c': 1, '--s': 2 },
        },
        {
          src: '/projects/arden-residence/18.jpg',
          style: { '--r': 18, '--c': 3, '--s': 5 },
        },
        {
          src: '/projects/arden-residence/19.jpg',
          style: { '--r': 19, '--c': 2 },
        },
      ],
    },
  },
  {
    title: 'Basics Coffee',
    slug: 'basics-coffee',
    category: 'Residential',
    featuredPhoto: 'arden-residence/featuredPhoto.jpg',
    location: 'Prague, Czech Republic',
    client: '',
    year: '2021-2022',
    grid: {
      alt: 'Basics Coffee',
      images: [
        {
          src: '/projects/basics-coffee/1.jpg',
          style: { '--r': 1, '--c': 1, '--s': 4 },
        },
        {
          src: '/projects/basics-coffee/2.jpg',
          style: { '--r': 2, '--c': 5, '--s': 3 },
        },
        {
          src: '/projects/basics-coffee/3.jpg',
          style: { '--r': 3, '--c': 3, '--s': 2 },
        },
        {
          src: '/projects/basics-coffee/4.jpg',
          style: { '--r': 4, '--c': 1, '--s': 2 },
        },
        {
          src: '/projects/basics-coffee/5.jpg',
          style: { '--r': 5, '--c': 3, '--s': 5 },
        },
        {
          src: '/projects/basics-coffee/6.jpg',
          style: { '--r': 6, '--c': 2 },
        },
        {
          src: '/projects/basics-coffee/7.jpg',
          style: { '--r': 7, '--c': 3, '--s': 3 },
        },
        {
          src: '/projects/basics-coffee/8.jpg',
          style: { '--r': 8, '--c': 6, '--s': 2 },
        },
        {
          src: '/projects/basics-coffee/9.jpg',
          style: { '--r': 9, '--c': 1, '--s': 5 },
        },
        {
          src: '/projects/basics-coffee/10.jpg',
          style: { '--r': 10, '--c': 6, '--s': 3 },
        },
        {
          src: '/projects/basics-coffee/11.jpg',
          style: { '--r': 11, '--c': 4, '--s': 2 },
        },
        {
          src: '/projects/basics-coffee/12.jpg',
          style: { '--r': 12, '--c': 1, '--s': 3 },
        },
        {
          src: '/projects/basics-coffee/13.jpg',
          style: { '--r': 13, '--c': 4, '--s': 5 },
        },
        {
          src: '/projects/basics-coffee/14.jpg',
          style: { '--r': 14, '--c': 1, '--s': 3 },
        },
        {
          src: '/projects/basics-coffee/15.jpg',
          style: { '--r': 15, '--c': 4, '--s': 5 },
        },
        {
          src: '/projects/basics-coffee/16.jpg',
          style: { '--r': 16, '--c': 3, '--s': 1 },
        },
        {
          src: '/projects/basics-coffee/17.jpg',
          style: { '--r': 17, '--c': 1, '--s': 2 },
        },
        {
          src: '/projects/basics-coffee/18.jpg',
          style: { '--r': 18, '--c': 3, '--s': 5 },
        },
      ],
    },
  },
  {
    title: 'Bird & Bird',
    slug: 'bird-and-bird',
    category: 'Office fittout',
    featuredPhoto: 'bird-and-bird/featuredPhoto.jpg',
    location: 'Prague, Czech Republic',
    client: '',
    year: '2022',
    grid: {
      alt: 'Bird & Bird',
      images: [
        {
          src: '/projects/bird-and-bird/1.jpg',
          style: { '--r': 1, '--c': 1, '--s': 4 },
        },
        {
          src: '/projects/bird-and-bird/2.jpg',
          style: { '--r': 2, '--c': 5, '--s': 3 },
        },
        {
          src: '/projects/bird-and-bird/3.jpg',
          style: { '--r': 3, '--c': 3, '--s': 2 },
        },
        {
          src: '/projects/bird-and-bird/4.jpg',
          style: { '--r': 4, '--c': 1, '--s': 2 },
        },
        {
          src: '/projects/bird-and-bird/5.jpg',
          style: { '--r': 5, '--c': 3, '--s': 5 },
        },
        {
          src: '/projects/bird-and-bird/6.jpg',
          style: { '--r': 6, '--c': 2 },
        },
        {
          src: '/projects/bird-and-bird/7.jpg',
          style: { '--r': 7, '--c': 3, '--s': 3 },
        },
        {
          src: '/projects/bird-and-bird/8.jpg',
          style: { '--r': 8, '--c': 6, '--s': 2 },
        },
        {
          src: '/projects/bird-and-bird/9.jpg',
          style: { '--r': 9, '--c': 1, '--s': 5 },
        },
        {
          src: '/projects/bird-and-bird/10.jpg',
          style: { '--r': 10, '--c': 6, '--s': 3 },
        },
        {
          src: '/projects/bird-and-bird/11.jpg',
          style: { '--r': 11, '--c': 4, '--s': 2 },
        },
        {
          src: '/projects/bird-and-bird/12.jpg',
          style: { '--r': 12, '--c': 1, '--s': 3 },
        },
        {
          src: '/projects/bird-and-bird/13.jpg',
          style: { '--r': 13, '--c': 4, '--s': 5 },
        },
        {
          src: '/projects/bird-and-bird/14.jpg',
          style: { '--r': 14, '--c': 1, '--s': 3 },
        },
        {
          src: '/projects/bird-and-bird/15.jpg',
          style: { '--r': 15, '--c': 4, '--s': 5 },
        },
        {
          src: '/projects/bird-and-bird/16.jpg',
          style: { '--r': 16, '--c': 3, '--s': 1 },
        },
        {
          src: '/projects/bird-and-bird/17.jpg',
          style: { '--r': 17, '--c': 1, '--s': 2 },
        },
        {
          src: '/projects/bird-and-bird/18.jpg',
          style: { '--r': 18, '--c': 3, '--s': 5 },
        },
        {
          src: '/projects/bird-and-bird/19.jpg',
          style: { '--r': 19, '--c': 2 },
        },
        {
          src: '/projects/bird-and-bird/20.jpg',
          style: { '--r': 20, '--c': 3, '--s': 3 },
        },
        {
          src: '/projects/bird-and-bird/21.jpg',
          style: { '--r': 21, '--c': 6, '--s': 2 },
        },
        {
          src: '/projects/bird-and-bird/22.jpg',
          style: { '--r': 22, '--c': 1, '--s': 5 },
        },
        {
          src: '/projects/bird-and-bird/23.jpg',
          style: { '--r': 23, '--c': 6, '--s': 3 },
        },
        {
          src: '/projects/bird-and-bird/24.jpg',
          style: { '--r': 24, '--c': 4, '--s': 2 },
        },
        {
          src: '/projects/bird-and-bird/25.jpg',
          style: { '--r': 25, '--c': 1, '--s': 3 },
        },
        {
          src: '/projects/bird-and-bird/26.jpg',
          style: { '--r': 26, '--c': 4, '--s': 5 },
        },
        {
          src: '/projects/bird-and-bird/27.jpg',
          style: { '--r': 27, '--c': 1, '--s': 3 },
        },
        {
          src: '/projects/bird-and-bird/28.jpg',
          style: { '--r': 28, '--c': 4, '--s': 5 },
        },
        {
          src: '/projects/bird-and-bird/29.jpg',
          style: { '--r': 29, '--c': 3, '--s': 1 },
        },
        {
          src: '/projects/bird-and-bird/30.jpg',
          style: { '--r': 30, '--c': 1, '--s': 2 },
        },
        {
          src: '/projects/bird-and-bird/31.jpg',
          style: { '--r': 31, '--c': 3, '--s': 5 },
        },
        {
          src: '/projects/bird-and-bird/32.jpg',
          style: { '--r': 32, '--c': 2 },
        },
        {
          src: '/projects/bird-and-bird/33.jpg',
          style: { '--r': 33, '--c': 3, '--s': 3 },
        },
        {
          src: '/projects/bird-and-bird/34.jpg',
          style: { '--r': 34, '--c': 6, '--s': 2 },
        },
        {
          src: '/projects/bird-and-bird/35.jpg',
          style: { '--r': 35, '--c': 1, '--s': 5 },
        },
        {
          src: '/projects/bird-and-bird/36.jpg',
          style: { '--r': 36, '--c': 6, '--s': 3 },
        },
        {
          src: '/projects/bird-and-bird/37.jpg',
          style: { '--r': 37, '--c': 4, '--s': 2 },
        },
        {
          src: '/projects/bird-and-bird/38.jpg',
          style: { '--r': 38, '--c': 1, '--s': 3 },
        },
        {
          src: '/projects/bird-and-bird/39.jpg',
          style: { '--r': 39, '--c': 4, '--s': 5 },
        },
        {
          src: '/projects/bird-and-bird/40.jpg',
          style: { '--r': 40, '--c': 1, '--s': 3 },
        },
        {
          src: '/projects/bird-and-bird/41.jpg',
          style: { '--r': 41, '--c': 4, '--s': 5 },
        },
        {
          src: '/projects/bird-and-bird/42.jpg',
          style: { '--r': 42, '--c': 3, '--s': 1 },
        },
        {
          src: '/projects/bird-and-bird/43.jpg',
          style: { '--r': 43, '--c': 1, '--s': 2 },
        },
      ],
    },
  },
  {
    title: 'Cottage',
    slug: 'cottage',
    category: 'Residential',
    featuredPhoto: 'cottage/featuredPhoto.jpg',
    location: 'Czech Republic',
    client: 'Private Investor',
    year: '2022',
    grid: {
      alt: 'Cottage',
      images: [
        {
          src: '/projects/cottage/1.jpg',
          style: { '--r': 1, '--c': 1, '--s': 4 },
        },
        {
          src: '/projects/cottage/2.jpg',
          style: { '--r': 2, '--c': 5, '--s': 3 },
        },
        {
          src: '/projects/cottage/3.jpg',
          style: { '--r': 3, '--c': 3, '--s': 2 },
        },
        {
          src: '/projects/cottage/4.jpg',
          style: { '--r': 4, '--c': 1, '--s': 2 },
        },
        {
          src: '/projects/cottage/5.jpg',
          style: { '--r': 5, '--c': 3, '--s': 5 },
        },
        {
          src: '/projects/cottage/6.jpg',
          style: { '--r': 6, '--c': 2 },
        },
        {
          src: '/projects/cottage/7.jpg',
          style: { '--r': 7, '--c': 3, '--s': 3 },
        },
        {
          src: '/projects/cottage/8.jpg',
          style: { '--r': 8, '--c': 6, '--s': 2 },
        },
        {
          src: '/projects/cottage/9.jpg',
          style: { '--r': 9, '--c': 1, '--s': 5 },
        },
        {
          src: '/projects/cottage/10.jpg',
          style: { '--r': 10, '--c': 6, '--s': 3 },
        },
        {
          src: '/projects/cottage/11.jpg',
          style: { '--r': 11, '--c': 4, '--s': 2 },
        },
        {
          src: '/projects/cottage/12.jpg',
          style: { '--r': 12, '--c': 1, '--s': 3 },
        },
        {
          src: '/projects/cottage/13.jpg',
          style: { '--r': 13, '--c': 4, '--s': 5 },
        },
        {
          src: '/projects/cottage/14.jpg',
          style: { '--r': 14, '--c': 1, '--s': 3 },
        },
        {
          src: '/projects/cottage/15.jpg',
          style: { '--r': 15, '--c': 4, '--s': 5 },
        },
        {
          src: '/projects/cottage/16.jpg',
          style: { '--r': 16, '--c': 3, '--s': 1 },
        },
        {
          src: '/projects/cottage/17.jpg',
          style: { '--r': 17, '--c': 1, '--s': 2 },
        },
        {
          src: '/projects/cottage/18.jpg',
          style: { '--r': 18, '--c': 3, '--s': 5 },
        },
        {
          src: '/projects/cottage/19.jpg',
          style: { '--r': 19, '--c': 2 },
        },
        {
          src: '/projects/cottage/20.jpg',
          style: { '--r': 20, '--c': 3, '--s': 3 },
        },
        {
          src: '/projects/cottage/21.jpg',
          style: { '--r': 21, '--c': 6, '--s': 2 },
        },
        {
          src: '/projects/cottage/22.jpg',
          style: { '--r': 22, '--c': 1, '--s': 5 },
        },
        {
          src: '/projects/cottage/23.jpg',
          style: { '--r': 23, '--c': 6, '--s': 3 },
        },
        {
          src: '/projects/cottage/24.jpg',
          style: { '--r': 24, '--c': 4, '--s': 2 },
        },
        {
          src: '/projects/cottage/25.jpg',
          style: { '--r': 25, '--c': 1, '--s': 3 },
        },
        {
          src: '/projects/cottage/26.jpg',
          style: { '--r': 26, '--c': 4, '--s': 5 },
        },
        {
          src: '/projects/cottage/27.jpg',
          style: { '--r': 27, '--c': 1, '--s': 3 },
        },
        {
          src: '/projects/cottage/28.jpg',
          style: { '--r': 28, '--c': 4, '--s': 5 },
        },
        {
          src: '/projects/cottage/29.jpg',
          style: { '--r': 29, '--c': 3, '--s': 1 },
        },
        {
          src: '/projects/cottage/30.jpg',
          style: { '--r': 30, '--c': 1, '--s': 2 },
        },
        {
          src: '/projects/cottage/31.jpg',
          style: { '--r': 31, '--c': 3, '--s': 5 },
        },
        {
          src: '/projects/cottage/32.jpg',
          style: { '--r': 32, '--c': 2 },
        },
        {
          src: '/projects/cottage/33.jpg',
          style: { '--r': 33, '--c': 3, '--s': 3 },
        },
        {
          src: '/projects/cottage/34.jpg',
          style: { '--r': 34, '--c': 6, '--s': 2 },
        },
        {
          src: '/projects/cottage/35.jpg',
          style: { '--r': 35, '--c': 1, '--s': 5 },
        },
      ],
    },
  },
];
