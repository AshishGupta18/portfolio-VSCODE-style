export interface Project {
  title: string;
  description: string;
  logo: string;
  link: string;
  slug: string;
}


export const projects: Project[] = [
  {
    title: 'Reward Simulator',
    description:
      'A Flutter App made with Bloc to generate the working flow of reward based redeemption app',
    logo: '/logos/coolify.svg',
    link: '',
    slug: 'reward-simulator',
  },
  {
    title: 'BillSpill',
    description:
      'Difficulty in managing money on a trip? Welcome Billspill where you can log , track , settle,  manage all of the expenses as a group',
    logo: '/logos/coolify.svg',
    link: 'https://bill-spill-blue.vercel.app/',
    slug: 'billspill',
  },
  {
    title: 'Icosmic',
    description:
      'Inter-club events , collabarations , shows all information binded in one website with proper flow and exceution',
    logo: '/logos/coolify.svg',
    link: 'https://icosmic.vercel.app/',
    slug: 'icosmic',
  },
  {
    title: 'TypingTest',
    description:
      'Test you typing speed here',
    logo: '/logos/coolify.svg',
    link: 'https://typing-speed-test-psi.vercel.app/',
    slug: 'typing-test',
  },
  {
    title: 'Image-Ditor',
    description:
      'A simple webpage to upload and edit an image however way you like',
    logo: '/logos/coolify.svg',
    link: 'image-ditor.vercel.app',
    slug: 'image-ditor',
  },
  {
    title: 'Encrypto',
    description:
      'An app which uses two layer encryption and security to successfully transfer data from one end to another,  on which i have also publised an IEEE paper',
    logo: '/logos/coolify.svg',
    link: 'https://ieeexplore.ieee.org/document/10463498',
    slug: 'encrypto',
  },

 
];
