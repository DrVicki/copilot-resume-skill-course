/**
 * Style contract — The Evidence Desk:
 * This page is an asymmetric editorial dossier, not a centered AI landing page.
 * Warm paper carries the narrative; ink, cobalt, and Proof Lime carry meaning.
 */

import CourseStudio from "@/components/CourseStudio";
import { Button } from "@/components/ui/button";
import { courseMeta, references } from "@/data/course";
import {
  ArrowDown,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock3,
  FileCheck2,
  GraduationCap,
  Layers3,
  Link2,
  ShieldAlert,
  Sparkles,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const heroImage = "/manus-storage/proofwork-hero_8084db0f.png";
const brandMark = "/manus-storage/proofwork-mark-v2_dfa688dd.png";

export default function Home() {
  const reduceMotion = useReducedMotion();

  const scrollToCourse = () => {
    document.getElementById("course")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container header-inner">
          <a href="#top" className="brand-lockup" aria-label="Proofwork course home">
            <img src={brandMark} alt="" className="brand-mark" />
            <span>
              <strong>Proofwork</strong>
              <small>Copilot resume lab</small>
            </span>
          </a>
          <nav className="desktop-nav" aria-label="Primary navigation">
            <a href="#why">Why a system</a>
            <a href="#method">The method</a>
            <a href="#course">Course</a>
            <a href="https://drvicki.github.io/proofroom-interview-course/" className="course-switch-link">
              Interview lab <ArrowRight size={14} />
            </a>
          </nav>
          <Button onClick={scrollToCourse} className="header-cta">
            Start the course <ArrowRight size={16} />
          </Button>
        </div>
      </header>

      <main id="top">
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="container hero-grid">
            <motion.div
              className="hero-copy"
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
            >
              <div className="hero-kicker">
                <span>Micro-course</span>
                <span>Microsoft Copilot</span>
              </div>
              <h1 id="hero-title">
                Build an <em>AI skill</em> that tailors your resume to any job.
              </h1>
              <p className="hero-lede">
                Stop rebuilding the same context in a new chat. Create one reusable,
                evidence-led Copilot agent that knows your career, matches honestly, and
                returns the same reviewable structure every time.
              </p>
              <div className="hero-actions">
                <Button onClick={scrollToCourse} size="lg" className="primary-action">
                  Begin lesson one <ArrowDown size={18} />
                </Button>
                <a className="text-link" href="#method">
                  See the three-part method <ArrowRight size={16} />
                </a>
              </div>
              <div className="instructor-line">
                <div className="instructor-monogram" aria-hidden="true">
                  VB
                </div>
                <div>
                  <span>Created and instructed by</span>
                  <strong>{courseMeta.instructor}</strong>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="hero-plate"
              initial={reduceMotion ? false : { opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: 0.08, ease: [0.23, 1, 0.32, 1] }}
            >
              <div className="plate-registration top-left" aria-hidden="true" />
              <div className="plate-registration bottom-right" aria-hidden="true" />
              <img
                src={heroImage}
                alt="Editorial illustration of verified career evidence moving through a matching process into a finished resume."
              />
              <div className="plate-caption">
                <span>01 / Evidence system</span>
                <span className="verified-chip">
                  <CheckCircle2 size={13} /> Verified inputs only
                </span>
              </div>
            </motion.div>
          </div>

          <div className="container hero-facts" aria-label="Course details">
            <div>
              <Clock3 size={18} aria-hidden="true" />
              <span>Length</span>
              <strong>{courseMeta.duration}</strong>
            </div>
            <div>
              <BookOpen size={18} aria-hidden="true" />
              <span>Format</span>
              <strong>{courseMeta.lessons} working lessons</strong>
            </div>
            <div>
              <FileCheck2 size={18} aria-hidden="true" />
              <span>Deliverable</span>
              <strong>Canvas-ready lesson files</strong>
            </div>
            <div>
              <GraduationCap size={18} aria-hidden="true" />
              <span>Instructor</span>
              <strong>{courseMeta.instructor}</strong>
            </div>
          </div>
        </section>

        <aside className="course-crossover course-crossover--proofroom" aria-labelledby="proofroom-promo-title">
          <div className="container crossover-inner">
            <div className="crossover-label">
              <span>Course 02</span>
              <strong>Proofroom</strong>
            </div>
            <div className="crossover-copy">
              <p>Continue the evidence-led job-search system</p>
              <h2 id="proofroom-promo-title">Turn the tailored resume into interview proof.</h2>
              <span>
                Build a reusable Microsoft Copilot practice room that asks one question at a time,
                probes your evidence, and debriefs what your answers actually prove.
              </span>
            </div>
            <a
              className="crossover-action"
              href="https://drvicki.github.io/proofroom-interview-course/"
            >
              Explore Proofroom <ArrowRight size={18} />
            </a>
          </div>
        </aside>

        <section className="problem-section" id="why" aria-labelledby="problem-heading">
          <div className="container problem-grid">
            <div className="margin-index" aria-hidden="true">
              01
            </div>
            <div className="problem-heading-block">
              <p className="section-kicker">The real problem</p>
              <h2 id="problem-heading">Quality drift is usually a setup problem.</h2>
            </div>
            <div className="problem-copy">
              <p>
                The familiar workflow works once: paste a resume, paste a job description,
                ask Copilot to tailor. A week later, you start again. The background changes,
                the standards soften, and the output drifts.
              </p>
              <blockquote>
                <span>“</span>
                A prompt gives you one good output. A system gives you the same standard every
                time.
              </blockquote>
              <p>
                Microsoft 365 Copilot Agent Builder lets users create a custom agent with a
                description, instructions, knowledge sources, and starter prompts, then test it
                before use.
                <sup>
                  <a href="#reference-2">[2]</a>
                </sup>
                This course turns those parts into one honest resume workflow.
              </p>
            </div>
          </div>

          <div className="container comparison-strip" aria-label="Prompt versus system comparison">
            <div className="comparison-label">Prompt vs. system</div>
            <div className="comparison-side muted-side">
              <span>One useful session</span>
              <strong>Paste → explain → rewrite → repeat</strong>
              <p>The context lives in a temporary conversation.</p>
            </div>
            <div className="comparison-arrow" aria-hidden="true">
              <ArrowRight />
            </div>
            <div className="comparison-side proof-side">
              <span>One reusable agent</span>
              <strong>Evidence → match → draft → verify</strong>
              <p>The standards live in instructions you can inspect and improve.</p>
            </div>
          </div>
        </section>

        <section className="method-section" id="method" aria-labelledby="method-heading">
          <div className="container method-heading-row">
            <div>
              <p className="section-kicker">The build method</p>
              <h2 id="method-heading">Three things every resume agent needs.</h2>
            </div>
            <p>
              Most generic outputs can be traced to one of these missing foundations. The
              course builds all three, then tests them as one system.
            </p>
          </div>

          <div className="container method-ledger">
            <article>
              <div className="ledger-number">01</div>
              <div className="ledger-icon">
                <Layers3 size={24} aria-hidden="true" />
              </div>
              <div className="ledger-copy">
                <span>Source</span>
                <h3>A career source of truth</h3>
                <p>
                  A richer evidence bank with every project, number, tool, decision, constraint,
                  and result you can verify—not a copy of your current resume.
                </p>
              </div>
              <div className="ledger-proof">Raw material</div>
            </article>
            <article>
              <div className="ledger-number">02</div>
              <div className="ledger-icon">
                <ShieldAlert size={24} aria-hidden="true" />
              </div>
              <div className="ledger-copy">
                <span>Rule</span>
                <h3>An honest matching rule</h3>
                <p>
                  A visible map from posting requirement to candidate evidence, including partial
                  matches and gaps that Copilot is not allowed to invent away.
                </p>
              </div>
              <div className="ledger-proof">Truth gate</div>
            </article>
            <article>
              <div className="ledger-number">03</div>
              <div className="ledger-icon">
                <FileCheck2 size={24} aria-hidden="true" />
              </div>
              <div className="ledger-copy">
                <span>Contract</span>
                <h3>A fixed output format</h3>
                <p>
                  The same match brief, gap report, resume structure, change log, and human-review
                  queue for every role you assess.
                </p>
              </div>
              <div className="ledger-proof">Review rhythm</div>
            </article>
          </div>

          <div className="container terminology-note">
            <Sparkles size={20} aria-hidden="true" />
            <p>
              <strong>Course terminology:</strong> “Skill” describes the reusable capability you
              build. In Microsoft 365 Copilot, the implementation is a custom declarative agent.
              Availability and knowledge-source options can vary by account, license, language,
              and organization settings.
              <sup>
                <a href="#reference-2">[2]</a>
              </sup>
              <sup>
                <a href="#reference-4">[4]</a>
              </sup>
            </p>
          </div>
        </section>

        <section className="instructor-section" aria-labelledby="instructor-heading">
          <div className="container instructor-card">
            <div className="instructor-stamp" aria-hidden="true">
              <span>VB</span>
              <small>Course 01</small>
            </div>
            <div className="instructor-copy">
              <p className="section-kicker">Creator & instructor</p>
              <h2 id="instructor-heading">{courseMeta.instructor}</h2>
              <p>
                This course is designed as a working studio. Every lesson turns a principle into a
                prompt, a documented action, and a downloadable submission students can review
                before posting in Canvas.
              </p>
            </div>
            <div className="instructor-principle">
              <span>Teaching principle</span>
              <strong>Build the evidence. Then build the output.</strong>
            </div>
          </div>
        </section>

        <CourseStudio />

        <section className="references-section" aria-labelledby="references-heading">
          <div className="container references-grid">
            <div>
              <p className="section-kicker">Source notes</p>
              <h2 id="references-heading">References</h2>
              <p>
                The Copilot setup guidance in this course follows current Microsoft documentation.
                Interface labels and account capabilities can change; check the linked source if
                your screen differs.
              </p>
            </div>
            <ol>
              {references.map((reference) => (
                <li id={`reference-${reference.id}`} key={reference.id}>
                  <span>[{reference.id}]</span>
                  <div>
                    <a href={reference.url} target="_blank" rel="noreferrer">
                      {reference.title} <Link2 size={14} aria-hidden="true" />
                    </a>
                    <small>{reference.publisher}</small>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="brand-lockup footer-brand">
            <img src={brandMark} alt="" className="brand-mark" />
            <span>
              <strong>Proofwork</strong>
              <small>Evidence before polish.</small>
            </span>
          </div>
          <p>
            {courseMeta.title}<br />
            Created and instructed by <strong>{courseMeta.instructor}</strong>
          </p>
        </div>
      </footer>
    </div>
  );
}
