import { services, type ServiceItem } from './services';
import { industries, type IndustryItem } from './industries';

export { services, type ServiceItem };
export { industries, type IndustryItem };

export const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Industries", href: "/industries" },
  { name: "Careers", href: "/careers" },
  { name: "Contact Us", href: "/contact" }
];

export default {
  services,
  industries,
  navigation
};
