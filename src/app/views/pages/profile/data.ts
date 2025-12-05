export type ProfileType = {
  cover: string
  profile: string
  name: string
  post: string
  about: string
  skill: string[]
  link: string[]
  email: string
  phone: string
  designation: string
  age: number
  experience: number
  language: string
}

export type SkillType = {
  title: string
  progressValue: number
}

export type FollowersType = {
  profile: string
  name: string
  email: string
}

export type ProjectType = {
  icon: string
  iconColor: string
  title: string
  days: number
  file: number
  progressValue: number
  progressType: string
  team: number
  teamMebmer: string[]
}

export type MessageType = {
  profile: string
  name: string
  content: string
  time: string
}


export const ProfileInfo: ProfileType = {
  cover: 'assets/images/small/img-2.jpg',
  profile: 'assets/images/users/avatar-1.jpg',
  name: 'Adrian K. Thompson',
  post: 'UI/UX Designer',
  about:
    "Hello, I'm Adrian Thompson, a passionate UI/UX Designer with a keen eye for aesthetics and usability. I specialize in creating engaging digital experiences that balance creativity with functionality. With over 8 years in design, I thrive on crafting products that leave a lasting impression.",
  skill: [
    'Figma',
    'Adobe XD',
    'Prototyping',
    'Wireframing',
    'User Testing',
    'Illustrator',
    'Responsive Design',
    'Motion Graphics',
    'Brand Identity',
  ],
  link: [
    'https://adrianthompson.design',
    'https://behance.net/adrian-uiux',
  ],

  email: 'adrian.thompson@designhub.com',
  phone: '+1 202-555-0179',
  designation: 'Senior UI/UX Designer',
  age: 29,
  experience: 8,
  language: 'English, French, Italian',
}

export const SkillData: SkillType[] = [
  {
    title: 'React.js',
    progressValue: 90,
  },
  {
    title: 'Figma',
    progressValue: 85,
  },
  {
    title: 'TypeScript',
    progressValue: 78,
  },
  {
    title: 'Node.js',
    progressValue: 70,
  },
]

export const FollowersData: FollowersType[] = [
  {
    profile: 'assets/images/users/avatar-6.jpg',
    name: 'Hilda B. Brid',
    email: 'hildabbridges@teleworm.us',
  },
  {
    profile: 'assets/images/users/avatar-2.jpg',
    name: 'Kevin M. Bacon',
    email: 'kevinmbacon@dayrep.com',
  },
  {
    profile: 'assets/images/users/avatar-3.jpg',
    name: 'Sherrie W. Torres',
    email: 'sherriewtorres@dayrep.com',
  },
  {
    profile: 'assets/images/users/avatar-4.jpg',
    name: 'David R. Willi',
    email: 'davidrwill@teleworm.us',
  },
  {
    profile: 'assets/images/users/avatar-7.jpg',
    name: 'Daryl V. Donn',
    email: 'darylvdonnellan@teleworm.us',
  },
  {
    profile: 'assets/images/users/avatar-5.jpg',
    name: 'Risa H. Cuevas',
    email: 'risahcuevas@jourrapide.com',
  },
]



export const ProjectData: ProjectType[] = [
  {
    icon: 'iconamoon:shopping-card-add',
    iconColor: 'success',
    title: 'E-Commerce Web App',
    days: 22,
    file: 18,
    progressValue: 72,
    progressType: 'success',
    team: 16,
    teamMebmer: [
      'assets/images/users/avatar-2.jpg',
      'assets/images/users/avatar-6.jpg',
      'assets/images/users/avatar-9.jpg',
      'assets/images/users/avatar-4.jpg',
    ],
  },
  {
    icon: 'iconamoon:apps-fill',
    iconColor: 'info',
    title: 'AI Analytics Dashboard',
    days: 30,
    file: 25,
    progressValue: 64,
    progressType: 'info',
    team: 10,
    teamMebmer: [
      'assets/images/users/avatar-7.jpg',
      'assets/images/users/avatar-3.jpg',
      'assets/images/users/avatar-8.jpg',
      'assets/images/users/avatar-5.jpg',
    ],
  },
]


export const MessagesData: MessageType[] = [
  {
    profile: 'assets/images/users/avatar-10.jpg',
    name: 'Rahul Sharma',
    content: 'Hey! Did you check the new design updates?',
    time: '9.45 AM',
  },
  {
    profile: 'assets/images/users/avatar-4.jpg',
    name: 'Sneha Patel',
    content: 'Yes, I reviewed it yesterday. Looks really good!',
    time: '10.20 AM',
  },
  {
    profile: 'assets/images/users/avatar-7.jpg',
    name: 'David Johnson',
    content: 'Can you send me the final presentation file?',
    time: '2.15 PM',
  },
  {
    profile: 'assets/images/users/avatar-9.jpg',
    name: 'Emily Davis',
    content: 'I will share it by evening, no worries.',
    time: '3.50 PM',
  },
  {
    profile: 'assets/images/users/avatar-1.jpg',
    name: 'Michael Brown',
    content: 'Team meeting scheduled tomorrow at 11 AM.',
    time: '5.05 PM',
  },
  {
    profile: 'assets/images/users/avatar-3.jpg',
    name: 'Sophia Wilson',
    content: 'Got it! I’ll be there on time.',
    time: '6.30 PM',
  },
  {
    profile: 'assets/images/users/avatar-2.jpg',
    name: 'Arjun Mehta',
    content: 'Please check the bug in login page, it’s urgent.',
    time: '7.45 PM',
  }
]

