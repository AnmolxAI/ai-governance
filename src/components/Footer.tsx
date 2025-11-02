export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <span className="footer-label">Curated by </span>
        <a
          href="https://www.linkedin.com/in/iqanmol/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          Anmol Kumar
        </a>
        <span className="footer-separator"> • </span>
        <a
          href="https://github.com/AnmolxAI/ai-governance-today"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          Contribute
        </a>
        <span className="footer-separator"> • </span>
        <a
          href="https://www.aigovernance.today"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          aigovernance.today
        </a>
      </div>
    </footer>
  );
}

