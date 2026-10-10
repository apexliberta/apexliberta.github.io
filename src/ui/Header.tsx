import styles from "./Header.module.css";
import {
  GithubIcon,
  TwitterSvg,
  PatreonSvg,
  DeviantArtSvg,
} from "./../constants/svgs";

const SOCIAL_LINKS = {
  github: "https://github.com/apexliberta",
  twitter: "https://x.com/LDragnald",
  patreon: "https://www.patreon.com/cw/aLibX",
  deviantart: "https://www.deviantart.com/apexliberta",
} as const;

export const TABS = ["projects", "novels", "blog", "articles"] as const;

type Props = {
  activeTab: (typeof TABS)[number];
  setActiveTab: (tab: (typeof TABS)[number]) => void;
};
export default function Header(props: Props) {
  function getSvg(name: keyof typeof SOCIAL_LINKS) {
    const defWidth = 24;
    if (name == "github") {
      return <GithubIcon width={defWidth} fill="#FFFFFF" />;
    } else if (name == "twitter") {
      return <TwitterSvg width={defWidth} fill="#FFFFFF" />;
    } else if (name === "patreon") {
      return <PatreonSvg width={defWidth} fill="#F65600" />;
    } else if (name === "deviantart") {
      return <DeviantArtSvg width={defWidth} />;
    }
  }
  return (
    <header className={styles.mainHeader}>
      <div className={styles.mainRow}>
        <div>
          <h1>Apex Liberta</h1>
          <p className="subtitle">Developer | Author | Gamer</p>
        </div>
        <ol className={styles.socialLinks}>
          {Object.entries(SOCIAL_LINKS).map(([platform, url], index) => (
            <li key={platform + index}>
              <a href={url} target="_blank" rel="noopener noreferrer">
                {getSvg(platform as keyof typeof SOCIAL_LINKS) ??
                  platform}
              </a>
            </li>
          ))}
        </ol>
      </div>
      <nav className={styles.mainNav}>
        {TABS.map((tab, index) => (
          <div
            key={tab + index}
            className={`${styles.navItem} ${props.activeTab === tab && styles.active}`}
            onClick={() => props.setActiveTab(tab)}
          >
            {tab}
          </div>
        ))}
      </nav>
    </header>
  );
}
