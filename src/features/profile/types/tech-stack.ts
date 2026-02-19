/**
 * A technology item displayed in the Tech Stack section.
 *
 * Icon resolution uses cdn.simpleicons.org:
 * - URL: https://cdn.simpleicons.org/{icon}/{color}
 * - `icon` defaults to lowercase `key` if not specified
 */
export type TechStack = {
  /** Unique identifier. */
  key: string;
  /** Display name of the technology. */
  title: string;
  /** Official website URL. */
  href: string;
  /** Category tags used for grouping/filtering. */
  categories: string[];
  /** Simple Icons slug (defaults to lowercase key). */
  icon?: string;
  /** Brand hex color (without #). */
  color?: string;
  /** Hex color for dark mode (without #), if needed for visibility. */
  darkColor?: string;
};
