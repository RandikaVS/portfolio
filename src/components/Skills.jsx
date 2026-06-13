import React, { useRef, useEffect, useMemo } from 'react';
import { skills } from '../data/portfolio.js';
import SectionHeading from './SectionHeading.jsx';
import * as FaIcons from "react-icons/fa";
import "./css/skills.css";

/**
 * A rotating 3D "skill sphere" (TagCloud-style).
 *
 * Each skill is placed on the surface of a unit sphere using the Fibonacci
 * (golden-spiral) distribution so points are spread out evenly. Every frame we
 * rotate those base points around the X and Y axes, project them to 2D, and
 * write the transform/opacity/z-index straight to the DOM via refs — no React
 * re-render per frame, so it stays smooth.
 *
 * Items are only translated + scaled (never rotated), so logos always face the
 * camera ("billboarding"). Depth is conveyed with scale, opacity and a touch of
 * blur on the far side.
 */
export default function Skills() {
  const stageRef = useRef(null);   // sized square area that defines the radius
  const itemRefs = useRef([]);     // one DOM node per skill

  // Mutable animation state kept in refs (never triggers a render)
  const angle = useRef({ x: -0.2, y: 0 });           // current rotation
  const velocity = useRef({ x: 0.0006, y: 0.0016 });  // current spin speed
  const target = useRef({ x: 0.0006, y: 0.0016 });    // speed we ease toward
  const radius = useRef(0);
  const rafId = useRef(0);

  // Base positions on a unit sphere — computed once.
  const points = useMemo(() => {
    const n = skills.length;
    const inc = Math.PI * (3 - Math.sqrt(5)); // golden angle
    const off = 2 / n;
    return Array.from({ length: n }, (_, i) => {
      const y = i * off - 1 + off / 2;
      const r = Math.sqrt(Math.max(0, 1 - y * y));
      const phi = i * inc;
      return { x: Math.cos(phi) * r, y, z: Math.sin(phi) * r };
    });
  }, []);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      target.current = { x: 0.0002, y: 0.0004 };
      velocity.current = { ...target.current };
    }

    // Radius follows the stage size so it stays responsive.
    const measure = () => {
      const size = Math.min(stage.clientWidth, stage.clientHeight);
      radius.current = (size / 2) * 0.82;
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(stage);

    const idle = { x: reduced ? 0.0002 : 0.0006, y: reduced ? 0.0004 : 0.0016 };

    const tick = () => {
      // Ease the live velocity toward its target for buttery accel/decel.
      velocity.current.x += (target.current.x - velocity.current.x) * 0.06;
      velocity.current.y += (target.current.y - velocity.current.y) * 0.06;

      angle.current.x += velocity.current.x;
      angle.current.y += velocity.current.y;

      const sx = Math.sin(angle.current.x), cx = Math.cos(angle.current.x);
      const sy = Math.sin(angle.current.y), cy = Math.cos(angle.current.y);
      const R = radius.current;

      for (let i = 0; i < points.length; i++) {
        const el = itemRefs.current[i];
        if (!el) continue;
        const p = points[i];

        // rotate around Y
        const x1 = p.x * cy - p.z * sy;
        const z1 = p.x * sy + p.z * cy;
        // rotate around X
        const y2 = p.y * cx - z1 * sx;
        const z2 = p.y * sx + z1 * cx;

        // z2 in [-1, 1]: 1 = closest to viewer, -1 = far side
        const depth = (z2 + 1) / 2;            // 0..1
        const scale = 0.55 + depth * 0.65;     // far ↜ small, near ↜ big
        const opacity = 0.35 + depth * 0.65;

        el.style.transform =
          `translate(-50%, -50%) translate3d(${x1 * R}px, ${y2 * R}px, 0) scale(${scale})`;
        el.style.opacity = opacity;
        el.style.zIndex = ((z2 + 1) * 500) | 0;
        el.style.filter = z2 < -0.15 ? `blur(${(-z2 - 0.15) * 2.2}px)` : 'none';
        // far-side items shouldn't steal clicks
        el.style.pointerEvents = z2 < 0 ? 'none' : 'auto';
      }

      rafId.current = requestAnimationFrame(tick);
    };
    rafId.current = requestAnimationFrame(tick);

    // Pointer drives the spin speed based on distance from the centre.
    const onMove = (e) => {
      const rect = stage.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;   // -0.5..0.5
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      const MAX = 0.05;
      target.current = { x: -py * MAX, y: px * MAX };
    };
    const onLeave = () => { target.current = { ...idle }; };

    stage.addEventListener('pointermove', onMove);
    stage.addEventListener('pointerleave', onLeave);

    return () => {
      cancelAnimationFrame(rafId.current);
      ro.disconnect();
      stage.removeEventListener('pointermove', onMove);
      stage.removeEventListener('pointerleave', onLeave);
    };
  }, [points]);

  const renderCustomIcon = (Icon, color) => {
    if (!Icon) {
      return <span className={`skills__dot accent-bg-${color}`} />;
    }

    return (
      <Icon size={40} color={color} />

    );
  };

  return (
    <section id="skills" className="section">
      <SectionHeading prefix="#" title="Skills" />
      <p className="section-hint">Move your cursor to spin the skill sphere</p>

      <div className="skills__sphere">
        <div className="skills__glow" aria-hidden />
        <div className="skills__stage" ref={stageRef}>
          {skills.map((skill, i) => (
            <button
              key={skill.name}
              type="button"
              ref={(el) => (itemRefs.current[i] = el)}
              className={`skills__item accent-border-${skill.color}`}
              aria-label={skill.name}
            >
              {skill.icon ? (
  
                renderCustomIcon(skill.icon, skill.color)
              ) : (
                <span className={`skills__dot accent-bg-${skill.color}`} />
              )}
              <span className="skills__label">{skill.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}