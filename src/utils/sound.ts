// Web Audio API Synthesizer for lightweight retro/anime UI sound effects
import { getCookie, setCookie } from './cookie';

class SoundManager {
  private ctx: AudioContext | null = null;
  private muted: boolean = false;

  constructor() {
    const cookieVal = getCookie('yuridle_sound_muted');
    if (cookieVal !== null) {
      this.muted = cookieVal === 'true';
    } else if (typeof localStorage !== 'undefined') {
      this.muted = localStorage.getItem('yuridle_sound_muted') === 'true';
      setCookie('yuridle_sound_muted', String(this.muted), 365);
    }
  }

  private initCtx() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public isMuted(): boolean {
    return this.muted;
  }

  public toggleMute(): boolean {
    this.muted = !this.muted;
    setCookie('yuridle_sound_muted', String(this.muted), 365);
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('yuridle_sound_muted', String(this.muted));
      }
    } catch {
      // Ignore
    }
    if (!this.muted) {
      this.playClick();
    }
    return this.muted;
  }

  public playClick() {
    if (this.muted) return;
    this.initCtx();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(850, this.ctx.currentTime + 0.04);

      gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.04);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.05);
    } catch {
      // Audio context may be blocked by autoplay policies
    }
  }

  public playTileFlip(index: number = 0) {
    if (this.muted) return;
    this.initCtx();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      const baseFreq = 440 + index * 60;
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(baseFreq, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(baseFreq + 120, this.ctx.currentTime + 0.08);

      gain.gain.setValueAtTime(0.1, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.08);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.09);
    } catch {
      // Audio error handled
    }
  }

  public playCorrect() {
    if (this.muted) return;
    this.initCtx();
    if (!this.ctx) return;

    try {
      // Two-tone cheerful chime
      const now = this.ctx.currentTime;
      [523.25, 659.25, 783.99].forEach((freq, i) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + i * 0.08);

        gain.gain.setValueAtTime(0.15, now + i * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.08 + 0.25);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now + i * 0.08);
        osc.stop(now + i * 0.08 + 0.26);
      });
    } catch {
      // Ignore
    }
  }

  public playWinFanfare() {
    if (this.muted) return;
    this.initCtx();
    if (!this.ctx) return;

    try {
      const melody = [
        { f: 523.25, d: 0.12 }, // C5
        { f: 659.25, d: 0.12 }, // E5
        { f: 783.99, d: 0.12 }, // G5
        { f: 1046.5, d: 0.35 }  // C6
      ];

      let t = this.ctx.currentTime;
      melody.forEach(note => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(note.f, t);

        gain.gain.setValueAtTime(0.18, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + note.d);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(t);
        osc.stop(t + note.d + 0.05);

        t += note.d * 0.9;
      });
    } catch {
      // Ignore
    }
  }

  public playWrong() {
    if (this.muted) return;
    this.initCtx();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(140, this.ctx.currentTime + 0.18);

      gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.18);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.2);
    } catch {
      // Ignore
    }
  }

  public playSuccessSound() {
    this.playCorrect();
  }

  public playWrongSound() {
    this.playWrong();
  }

  public playMelody(notes?: number[], force: boolean = true) {
    if (this.muted && !force) return;
    this.initCtx();
    if (!this.ctx) return;

    try {
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }

      const melody = notes && notes.length > 0 ? notes : [523, 659, 784, 880, 1047, 880, 784, 659];
      let t = this.ctx.currentTime + 0.05;

      melody.forEach(freq => {
        if (!this.ctx) return;

        // Lead chime voice
        const osc1 = this.ctx.createOscillator();
        const gain1 = this.ctx.createGain();

        // Warm harmonic body voice
        const osc2 = this.ctx.createOscillator();
        const gain2 = this.ctx.createGain();

        osc1.type = 'triangle';
        osc1.frequency.setValueAtTime(freq, t);

        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(freq * 0.5, t);

        // Rich audible volume (0.24)
        gain1.gain.setValueAtTime(0.22, t);
        gain1.gain.exponentialRampToValueAtTime(0.001, t + 0.3);

        gain2.gain.setValueAtTime(0.12, t);
        gain2.gain.exponentialRampToValueAtTime(0.001, t + 0.3);

        osc1.connect(gain1);
        gain1.connect(this.ctx.destination);

        osc2.connect(gain2);
        gain2.connect(this.ctx.destination);

        osc1.start(t);
        osc1.stop(t + 0.32);

        osc2.start(t);
        osc2.stop(t + 0.32);

        t += 0.24;
      });
    } catch {
      // Audio context blocked
    }
  }
}

export const sound = new SoundManager();
