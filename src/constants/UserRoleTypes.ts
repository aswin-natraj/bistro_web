// Align with backend enum user_role_type
export const USER_ROLE_TYPE = {
  CELEBRITY: 'CELEBRITY',
  BRAND: 'BRAND',
  ACCOUNT_MANAGER: 'ACCOUNT_MANAGER',
  ADMIN: 'ADMIN',
  INDIVIDUAL: 'INDIVIDUAL', // Added for frontend use if needed
} as const;

// Type for user roles
export type UserRole = typeof USER_ROLE_TYPE[keyof typeof USER_ROLE_TYPE];

// Roles that can be displayed in the UI (excluding ADMIN)
export const DISPLAY_ROLES = [
  USER_ROLE_TYPE.INDIVIDUAL,
  USER_ROLE_TYPE.BRAND, 
  USER_ROLE_TYPE.CELEBRITY,
  USER_ROLE_TYPE.ACCOUNT_MANAGER
] as const;

// Type for displayable roles only
export type DisplayableRole = typeof DISPLAY_ROLES[number];

// Role descriptions
export const ROLE_DESCRIPTIONS: Record<DisplayableRole, { title: string; info: string }> = {
  [USER_ROLE_TYPE.INDIVIDUAL]: {
    title: 'Individual',
    info: 'Just exploring or hiring for fun? Start here.',
  },
  [USER_ROLE_TYPE.BRAND]: {
    title: 'Brand',
    info: 'Hire creators, launch campaigns, and manage services at scale.',
  },
  [USER_ROLE_TYPE.CELEBRITY]: {
    title: 'Celebrity',
    info: 'Offer services, grow your profile, and collaborate with brands.',
  },
  [USER_ROLE_TYPE.ACCOUNT_MANAGER]: {
    title: 'Celebrity Manager',
    info: 'Manage one or more celebrities\' profiles, services, and deals.',
  },
};

// Mapping for image keys (to match existing image naming in ImageData)
export const ROLE_IMAGE_KEYS: Record<DisplayableRole, string> = {
  [USER_ROLE_TYPE.INDIVIDUAL]: 'individual',
  [USER_ROLE_TYPE.BRAND]: 'brand',
  [USER_ROLE_TYPE.CELEBRITY]: 'celebrity',
  [USER_ROLE_TYPE.ACCOUNT_MANAGER]: 'celebrityManager',
};
