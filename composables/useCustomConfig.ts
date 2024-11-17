type SocialMedia = { name: string; url: string };
type NavLink = { name: string; url: string };
type SRConfig = {
  origin: string;
  distance: string;
  duration: number;
  delay: number;
  rotate: { x: number; y: number; z: number };
  opacity: number;
  scale: number;
  easing: string;
  mobile: boolean;
  reset: boolean;
  useDelay: string;
  viewFactor: number;
  viewOffset: { top: number; right: number; bottom: number; left: number };
};

interface Config {
  email: string;
  socialMedia: SocialMedia[];
  navLinks: NavLink[];
  srConfig: (delay?: number, viewFactor?: number) => SRConfig;
}

const config: Config = {
  email: 'thinakoneto@gmail.com',
  socialMedia: [
    { name: 'GitHub', url: 'https://github.com/toto-thi' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/toto-thi' },
    { name: 'Instagram', url: 'https://www.instagram.com/toto_thii' },
    { name: 'Facebook', url: 'https://www.facebook.com/TotoThii' },
  ],
  navLinks: [
    { name: 'About', url: '#about' },
    { name: 'Experiences', url: '#experiences' },
    { name: 'Projects', url: '#projects' },
  ],
  srConfig: (delay = 200, viewFactor = 0.25): SRConfig => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};

export function useCustomConfig() {
  return config;
}
