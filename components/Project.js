import styles from "../styles/Project.module.css";
import { GitHub, ExternalLink } from "react-feather";

export default function Project({ title, summary, tools, github, extlink }) {
  return (
    <div className={`${styles.projectItem} hover-anim fade-in`}>
      <div className={styles.projectTop}>
        <div className={`${styles.projectLinks}`}>
          {github ? (
            <a href={github} target="_blank" rel="noopener noreferrer">
              <GitHub size={22} className="icon" />
            </a>
          ) : null}
          {extlink ? (
            <a href={extlink} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={22} className="icon" />
            </a>
          ) : null}
        </div>
      </div>
      <div className={styles.txt}>
        <div className={`${styles.projectTitle}`}>{title}</div>
        <div className={styles.projectSummary}>{summary}</div>
      </div>
      <ul className={`${styles.projectTools} list`}>
        {tools.map((tool, index) => (
          <li key={`projectTool-${tool}-${index}`}>{tool}</li>
        ))}
      </ul>
    </div>
  );
}
