import { site } from "@/data/site";

export default function Contact() {
  return (
    <section id="contact" className="band contact">
      <div className="wrap">
        <div className="contact-top">
          <span className="mono faint"><span className="accent">04</span> &nbsp;Have something in mind?</span>
          <p className="muted small">An early idea, a technical challenge or a product ready for its next chapter. Let’s talk about it.</p>
        </div>
        <div className="contact-main">
          <h2 className="mega">Let’s build<br /><em>what’s next.</em></h2>
          <a className="arrow-box" href={site.upwork} target="_blank" rel="noreferrer" aria-label="Hire Jojo on Upwork">↗</a>
        </div>
        <div className="contact-bottom">
          <div>
            <a className="underlink" href={`mailto:${site.email}`}>{site.email}</a>
            <p className="mono faint">Good products start with a good question.</p>
          </div>
          <div className="links">
            <a href={site.upwork} target="_blank" rel="noreferrer">Upwork ↗</a>
            <a href={site.github} target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href={`mailto:${site.email}`}>Email ↗</a>
          </div>
        </div>
      </div>
      <footer className="wrap meta-row rule foot">
        <span>© Jojo Victor — Developer portfolio</span>
        <span>Considered code. Intentional design.</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </section>
  );
}