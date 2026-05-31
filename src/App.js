import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [typed, setTyped] = useState('');
  const [starStyle, setStarStyle] = useState([]);
  const fullText = 'Frontend Developer & UI Designer';

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    // Typing effect
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTyped(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 60);

    // Generate stars
    const stars = Array.from({length: 80}, (_, i) => ({
      id: i,
      left: Math.random() * 100 + '%',
      top: Math.random() * 100 + '%',
      size: Math.random() * 3 + 1 + 'px',
      delay: Math.random() * 3 + 's',
      duration: Math.random() * 3 + 2 + 's'
    }));
    setStarStyle(stars);

    return () => clearInterval(timer);
  }, []);

  const navStyle = {
    background: 'rgba(10, 20, 50, 0.95)',
    backdropFilter: 'blur(10px)',
    padding: '18px 60px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'fixed',
    width: '100%',
    top: 0,
    zIndex: 100,
    boxSizing: 'border-box',
    borderBottom: '1px solid rgba(212, 175, 55, 0.2)'
  };

  const goldColor = '#D4AF37';
  const navyDark = '#0a1432';
  const navyMid = '#0d1f4e';

  return (
    <div style={{fontFamily: "'Segoe UI', sans-serif", margin: 0, padding: 0, overflowX: 'hidden'}}>

      {/* Navbar */}
      <nav style={navStyle}>
        <h2 style={{color: goldColor, margin: 0, fontSize: '22px', fontWeight: '800', letterSpacing: '2px'}}>
          SEBASTINE<span style={{color: 'white'}}>.</span>
        </h2>
        <div style={{display: 'flex', gap: '36px'}}>
          {['Home', 'About', 'Skills', 'Projects', 'Contact'].map(item => (
            <a key={item} href={"#" + item.toLowerCase()} style={{
              color: '#ccc',
              textDecoration: 'none',
              fontSize: '13px',
              fontWeight: '600',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              transition: 'color 0.3s'
            }}
            onMouseEnter={e => e.target.style.color = goldColor}
            onMouseLeave={e => e.target.style.color = '#ccc'}
            >{item}</a>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" style={{
        background: 'linear-gradient(135deg, #050d1f, #0a1432, #0d1f4e)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '0 60px',
        paddingTop: '80px',
        position: 'relative',
        overflow: 'hidden'
      }}>

        {/* Stars */}
        {starStyle.map(star => (
          <div key={star.id} style={{
            position: 'absolute',
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            background: goldColor,
            borderRadius: '50%',
            opacity: 0.6,
            animation: `twinkle ${star.duration} ${star.delay} infinite alternate`
          }} />
        ))}

        <style>{`
          @keyframes twinkle {
            from { opacity: 0.1; transform: scale(1); }
            to { opacity: 0.8; transform: scale(1.5); }
          }
          @keyframes cursor {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
        `}</style>

        <div style={{maxWidth: '700px', position: 'relative', zIndex: 1}}>
          <p data-aos="fade-right" style={{
            color: goldColor,
            fontSize: '14px',
            fontWeight: '700',
            marginBottom: '16px',
            letterSpacing: '4px',
            textTransform: 'uppercase'
          }}>
            Welcome to my portfolio
          </p>
          <h1 data-aos="fade-right" data-aos-delay="200" style={{
            color: 'white',
            fontSize: '64px',
            fontWeight: '900',
            margin: '0 0 8px',
            lineHeight: '1.1'
          }}>
            Sebastine
          </h1>
          <h1 data-aos="fade-right" data-aos-delay="300" style={{
            color: goldColor,
            fontSize: '64px',
            fontWeight: '900',
            margin: '0 0 24px',
            lineHeight: '1.1'
          }}>
            Eke
          </h1>
          <p data-aos="fade-right" data-aos-delay="400" style={{
            color: '#ccc',
            fontSize: '22px',
            marginBottom: '32px',
            minHeight: '32px'
          }}>
            {typed}<span style={{animation: 'cursor 1s infinite', color: goldColor}}>|</span>
          </p>
          <p data-aos="fade-right" data-aos-delay="500" style={{
            color: '#888',
            fontSize: '16px',
            lineHeight: '1.9',
            marginBottom: '48px',
            maxWidth: '540px'
          }}>
            I started coding with zero experience, just curiosity and determination. 
            From not knowing what HTML was, to building a full banking app from scratch — 
            every line of code I write is proof that consistency beats talent.
          </p>
          <div data-aos="fade-up" data-aos-delay="600" style={{display: 'flex', gap: '16px'}}>
            <a href="#projects" style={{
              background: 'linear-gradient(135deg, #D4AF37, #f0d060)',
              color: navyDark,
              padding: '16px 36px',
              borderRadius: '4px',
              textDecoration: 'none',
              fontWeight: '800',
              fontSize: '14px',
              letterSpacing: '1px',
              textTransform: 'uppercase'
            }}>View My Work</a>
            <a href="#contact" style={{
              background: 'transparent',
              color: 'white',
              padding: '16px 36px',
              borderRadius: '4px',
              textDecoration: 'none',
              fontWeight: '800',
              fontSize: '14px',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              border: '2px solid ' + goldColor
            }}>Hire Me</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{
        background: 'white',
        padding: '100px 60px'
      }}>
        <div style={{maxWidth: '900px', margin: '0 auto'}}>
          <div data-aos="fade-up" style={{marginBottom: '60px'}}>
            <p style={{color: goldColor, fontSize: '13px', fontWeight: '700', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '8px'}}>WHO I AM</p>
            <h2 style={{fontSize: '42px', color: navyDark, fontWeight: '900', marginBottom: '0'}}>
              About <span style={{color: goldColor}}>Me</span>
            </h2>
            <div style={{width: '60px', height: '4px', background: goldColor, borderRadius: '2px', marginTop: '16px'}}></div>
          </div>
          <div style={{display: 'flex', gap: '60px', alignItems: 'center'}}>
            <div data-aos="fade-right" style={{
              width: '220px',
              height: '220px',
              borderRadius: '4px',
              background: 'linear-gradient(135deg, #0a1432, #0d1f4e)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '90px',
              flexShrink: 0,
              border: '4px solid ' + goldColor,
              boxShadow: '0 20px 40px rgba(212,175,55,0.2)'
            }}>👨‍💻</div>
            <div data-aos="fade-left">
              <p style={{color: '#555', fontSize: '16px', lineHeight: '2', marginBottom: '20px'}}>
                I started coding with zero experience, just curiosity and determination. 
                From not knowing what HTML was, to building a full banking app from scratch — 
                every line of code I write is proof that consistency beats talent.
              </p>
              <p style={{color: '#555', fontSize: '16px', lineHeight: '2', marginBottom: '32px'}}>
                I build web apps that look great and actually work. No fancy degree, 
                no bootcamp — just late nights, broken code, and the satisfaction 
                of seeing it finally run. That's my story and I'm just getting started.
              </p>
              <div style={{display: 'flex', gap: '40px'}}>
                <div style={{textAlign: 'center', padding: '20px', border: '2px solid ' + goldColor, borderRadius: '4px', minWidth: '80px'}}>
                  <h3 style={{fontSize: '36px', color: goldColor, fontWeight: '900', margin: '0'}}>2+</h3>
                  <p style={{color: '#888', fontSize: '12px', margin: '4px 0 0', textTransform: 'uppercase', letterSpacing: '1px'}}>Projects</p>
                </div>
                <div style={{textAlign: 'center', padding: '20px', border: '2px solid ' + goldColor, borderRadius: '4px', minWidth: '80px'}}>
                  <h3 style={{fontSize: '36px', color: goldColor, fontWeight: '900', margin: '0'}}>3+</h3>
                  <p style={{color: '#888', fontSize: '12px', margin: '4px 0 0', textTransform: 'uppercase', letterSpacing: '1px'}}>Technologies</p>
                </div>
                <div style={{textAlign: 'center', padding: '20px', border: '2px solid ' + goldColor, borderRadius: '4px', minWidth: '80px'}}>
                  <h3 style={{fontSize: '36px', color: goldColor, fontWeight: '900', margin: '0'}}>100%</h3>
                  <p style={{color: '#888', fontSize: '12px', margin: '4px 0 0', textTransform: 'uppercase', letterSpacing: '1px'}}>Dedication</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" style={{
        background: 'linear-gradient(135deg, #050d1f, #0a1432)',
        padding: '100px 60px'
      }}>
        <div style={{maxWidth: '900px', margin: '0 auto'}}>
          <div data-aos="fade-up" style={{marginBottom: '60px'}}>
            <p style={{color: goldColor, fontSize: '13px', fontWeight: '700', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '8px'}}>WHAT I KNOW</p>
            <h2 style={{fontSize: '42px', color: 'white', fontWeight: '900', margin: '0'}}>
              My <span style={{color: goldColor}}>Skills</span>
            </h2>
            <div style={{width: '60px', height: '4px', background: goldColor, borderRadius: '2px', marginTop: '16px'}}></div>
          </div>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px'}}>
            {[
              {skill: 'HTML', level: 85, icon: '🌐'},
              {skill: 'CSS', level: 80, icon: '🎨'},
              {skill: 'JavaScript', level: 70, icon: '⚡'},
              {skill: 'React', level: 60, icon: '⚛️'},
              {skill: 'Git & GitHub', level: 75, icon: '🐙'},
              {skill: 'UI Design', level: 75, icon: '✏️'},
            ].map((item, index) => (
              <div key={item.skill} data-aos="fade-up" data-aos-delay={index * 100} style={{
                background: 'rgba(255,255,255,0.03)',
                borderRadius: '4px',
                padding: '28px',
                border: '1px solid rgba(212,175,55,0.2)',
                transition: 'border 0.3s'
              }}>
                <div style={{fontSize: '36px', marginBottom: '16px'}}>{item.icon}</div>
                <h3 style={{color: 'white', fontSize: '16px', fontWeight: '700', marginBottom: '16px'}}>{item.skill}</h3>
                <div style={{background: 'rgba(255,255,255,0.1)', borderRadius: '2px', height: '4px'}}>
                  <div style={{
                    background: 'linear-gradient(135deg, #D4AF37, #f0d060)',
                    height: '100%',
                    width: item.level + '%',
                    borderRadius: '2px'
                  }}></div>
                </div>
                <p style={{color: goldColor, fontSize: '13px', fontWeight: '700', marginTop: '10px'}}>{item.level}%</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={{
        background: '#f8f8f8',
        padding: '100px 60px'
      }}>
        <div style={{maxWidth: '900px', margin: '0 auto'}}>
          <div data-aos="fade-up" style={{marginBottom: '60px'}}>
            <p style={{color: goldColor, fontSize: '13px', fontWeight: '700', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '8px'}}>WHAT I'VE BUILT</p>
            <h2 style={{fontSize: '42px', color: navyDark, fontWeight: '900', margin: '0'}}>
              My <span style={{color: goldColor}}>Projects</span>
            </h2>
            <div style={{width: '60px', height: '4px', background: goldColor, borderRadius: '2px', marginTop: '16px'}}></div>
          </div>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px'}}>

            <div data-aos="fade-right" style={{
              background: 'white',
              borderRadius: '4px',
              overflow: 'hidden',
              boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
              border: '1px solid #eee'
            }}>
              <div style={{
                background: 'linear-gradient(135deg, #0a1432, #0d1f4e)',
                padding: '40px',
                textAlign: 'center',
                fontSize: '64px',
                borderBottom: '4px solid ' + goldColor
              }}>🏦</div>
              <div style={{padding: '28px'}}>
                <h3 style={{fontSize: '20px', color: navyDark, fontWeight: '900', marginBottom: '12px'}}>Prestige Trust</h3>
                <p style={{color: '#888', fontSize: '14px', lineHeight: '1.7', marginBottom: '20px'}}>
                  A full banking app with login, dashboard, send money, receive money, pay bills and transaction history.
                </p>
                <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px'}}>
                  {['HTML', 'CSS', 'JavaScript'].map(t => (
                    <span key={t} style={{background: navyDark, color: goldColor, padding: '4px 12px', borderRadius: '2px', fontSize: '11px', fontWeight: '700', letterSpacing: '1px'}}>{t}</span>
                  ))}
                </div>
                <a href="https://sebastine-design.github.io/prestige-trust" target="_blank" rel="noreferrer" style={{
                  background: 'linear-gradient(135deg, #D4AF37, #f0d060)',
                  color: navyDark,
                  padding: '12px 24px',
                  borderRadius: '4px',
                  textDecoration: 'none',
                  fontSize: '13px',
                  fontWeight: '800',
                  letterSpacing: '1px',
                  textTransform: 'uppercase'
                }}>View Project →</a>
              </div>
            </div>

            <div data-aos="fade-left" style={{
              background: 'white',
              borderRadius: '4px',
              overflow: 'hidden',
              boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
              border: '1px solid #eee'
            }}>
              <div style={{
                background: 'linear-gradient(135deg, #0a1432, #0d1f4e)',
                padding: '40px',
                textAlign: 'center',
                fontSize: '64px',
                borderBottom: '4px solid ' + goldColor
              }}>⚛️</div>
              <div style={{padding: '28px'}}>
                <h3 style={{fontSize: '20px', color: navyDark, fontWeight: '900', marginBottom: '12px'}}>Prestige Trust React</h3>
                <p style={{color: '#888', fontSize: '14px', lineHeight: '1.7', marginBottom: '20px'}}>
                  A rebuilt version of the banking app using React with instant page transitions and real-time balance updates.
                </p>
                <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px'}}>
                  {['React', 'JavaScript', 'CSS'].map(t => (
                    <span key={t} style={{background: navyDark, color: goldColor, padding: '4px 12px', borderRadius: '2px', fontSize: '11px', fontWeight: '700', letterSpacing: '1px'}}>{t}</span>
                  ))}
                </div>
                <a href="https://sebastine-design.github.io/prestige-react" target="_blank" rel="noreferrer" style={{
                  background: 'linear-gradient(135deg, #D4AF37, #f0d060)',
                  color: navyDark,
                  padding: '12px 24px',
                  borderRadius: '4px',
                  textDecoration: 'none',
                  fontSize: '13px',
                  fontWeight: '800',
                  letterSpacing: '1px',
                  textTransform: 'uppercase'
                }}>View Project →</a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{
        background: 'linear-gradient(135deg, #050d1f, #0a1432)',
        padding: '100px 60px'
      }}>
        <div style={{maxWidth: '600px', margin: '0 auto', textAlign: 'center'}}>
          <div data-aos="fade-up" style={{marginBottom: '48px'}}>
            <p style={{color: goldColor, fontSize: '13px', fontWeight: '700', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '8px'}}>LET'S WORK TOGETHER</p>
            <h2 style={{fontSize: '42px', color: 'white', fontWeight: '900', margin: '0'}}>
              Get In <span style={{color: goldColor}}>Touch</span>
            </h2>
            <div style={{width: '60px', height: '4px', background: goldColor, borderRadius: '2px', margin: '16px auto 0'}}></div>
          </div>
          <p data-aos="fade-up" style={{color: '#888', fontSize: '16px', lineHeight: '1.9', marginBottom: '48px'}}>
            I'm currently available for freelance work. If you have a project 
            that needs some creative work, feel free to reach out!
          </p>
          <div data-aos="fade-up" style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
            <a href="mailto:ekesebastine1@gmail.com" style={{
              background: 'linear-gradient(135deg, #D4AF37, #f0d060)',
              color: navyDark,
              padding: '18px 32px',
              borderRadius: '4px',
              textDecoration: 'none',
              fontWeight: '800',
              fontSize: '15px',
              letterSpacing: '1px'
            }}>📧 ekesebastine1@gmail.com</a>
            <a href="https://github.com/Sebastine-design" target="_blank" rel="noreferrer" style={{
              background: 'transparent',
              color: 'white',
              padding: '18px 32px',
              borderRadius: '4px',
              textDecoration: 'none',
              fontWeight: '800',
              fontSize: '15px',
              letterSpacing: '1px',
              border: '2px solid ' + goldColor
            }}>🐙 GitHub: Sebastine-design</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: '#020810',
        padding: '24px 60px',
        textAlign: 'center',
        borderTop: '1px solid rgba(212,175,55,0.2)'
      }}>
        <p style={{color: '#555', fontSize: '13px', margin: 0}}>
          © 2026 <span style={{color: goldColor}}>Sebastine Eke</span> — Built with React ⚛️
        </p>
      </footer>

    </div>
  );
}

export default App;