const TEAM_NAMES = [
  'Pedro Cunha',
  'Pedro da Motta',
  'Yasmin dos Santos',
  'Oluchi Nicolly',
  'Vinicius Borges',
  'Nathan Santana',
  'Luiggi Nobre'
];

const RESEARCH = {
  dado1: null,
  dado2: null
};

const CAPTURES = {
  slide6Main: ''
};

const PRINTS = {
  funcao1a: 'imagens/telalogin.jpeg',
  funcao1b: 'imagens/telaperfil.jpeg',
  telaProfessor: 'imagens/prof-principal.png',
  telaAluno: 'imagens/aluno-principal.png',
  telaCoordenador: 'imagens/coordenador-principal.png',
  telaOrientador: 'imagens/orientador-principal.png'
};

const VIDEOS = {
  videoProfessor: 'imagens/tela-professor.mp4',
  videoAluno: 'imagens/tela-aluno.mp4',
  videoCoordenador: 'imagens/tela-coordenador.mp4',
  videoOrientador: 'imagens/tela-orientador.mp4'
};

const SECTION_NAMES = [
  'ZYNTEK · A EMPRESA',
  'ATO 1 · PROBLEMÁTICA E CONTEXTUALIZAÇÃO',
  'ATO 1 · PROBLEMA E OBJETIVOS',
  'ATO 1 · PÚBLICO-ALVO',
  'ATO 1 · 30 PARTICIPANTES · PESQUISAS',
  'ATO 1 · DIAGNÓSTICO COM COORDENADOR E AQV',
  'ATO 1 · ENTREVISTAS E REQUISITOS',
  'ATO 2 · A SOLUÇÃO',
  'ATO 2 · FUNDAMENTAÇÃO TÉCNICA',
  'ATO 3 · DEMO · TELA DE LOGIN',
  'ATO 3 · DEMO · TELA PROFESSOR',
  'ATO 3 · DEMO · TELA ALUNO',
  'ATO 3 · DEMO · TELA COORDENADOR',
  'ATO 3 · DEMO · TELA ORIENTADOR (AQV)',
  'ATO 3 · INTEGRAÇÃO DOS PERFIS',
  'ATO 4 · RESULTADOS E BENEFÍCIOS',
  'ATO 4 · PROPOSTA COMERCIAL',
  'ATO 4 · EVOLUÇÃO CONTÍNUA',
  'ATO 4 · CONCLUSÃO',
  'ATO 4 · ENCERRAMENTO'
];

const STAGE_CUES = [
  {
    act: 'Zyntek — A Empresa',
    member: '1',
    time: '00:00–00:20',
    cue: 'Apresentar a Zyntek e seu propósito antes de entrar no projeto.'
  },
  {
    act: 'Ato 1 — O Problema',
    member: '1',
    time: '00:20–00:45',
    cue: 'Olhar para a banca e perguntar quanto tempo se perde em tarefas simples no portal.'
  },
  {
    act: 'Ato 1 — O Problema',
    member: '1',
    time: '00:45–01:10',
    cue: '“Como modernizar o portal acadêmico do SENAI sem comprometer as regras de negócio?” → objetivo geral e específicos.'
  },
  {
    act: 'Ato 1 — O Problema',
    member: '1',
    time: '01:10–01:30',
    cue: '“Cada perfil tem uma necessidade diferente — e foi o que ouvimos.”'
  },
  {
    act: 'Ato 1 — O Problema',
    member: '2',
    time: '01:30–02:00',
    cue: '“Foram 30 participantes: alunos, professores, coordenação e AQV.”'
  },
  {
    act: 'Ato 1 — O Problema',
    member: '2',
    time: '02:00–02:30',
    cue: '“Dois olhares complementares sobre o sistema atual.”'
  },
  {
    act: 'Ato 1 — O Problema',
    member: '2',
    time: '02:30–03:30',
    cue: '“Requisitos funcionais e não funcionais definiram as prioridades do projeto.”'
  },
  {
    act: 'Ato 2 — A Solução e o Negócio',
    member: '2',
    time: '03:30',
    cue: '“Agora, queremos apresentar a visão da Zyntek para essa solução.” → PITCH EM VÍDEO 03:30–05:00.'
  },
  {
    act: 'Ato 2 — Fundamentação Técnica',
    member: '3',
    time: '05:00–07:00',
    cue: '“HTML5, CSS3, JavaScript puro, localStorage e regras acadêmicas preservadas.”'
  },
  {
    act: 'Ato 3 — Demonstração do Portal',
    member: '5',
    time: '07:00–07:15',
    cue: 'Mostrar a tela de login e a tela de perfil para a banca.'
  },
  {
    act: 'Ato 3 — Demonstração do Portal',
    member: '4',
    time: '07:15–08:45',
    cue: '“Chamada, conteúdo, avaliações, síntese, subturmas e ocorrências no Diário de Classe.”'
  },
  {
    act: 'Ato 3 — Demonstração do Portal',
    member: '5',
    time: '08:45–09:45',
    cue: '“Frequência, notas, comparativo e boletim em consulta direta.”'
  },
  {
    act: 'Ato 3 — Demonstração do Portal',
    member: '5',
    time: '09:45–10:30',
    cue: '“Criação de turmas, atribuição de professores e unidades curriculares organizadas.”'
  },
  {
    act: 'Ato 3 — Demonstração do Portal',
    member: '5',
    time: '10:30–11:00',
    cue: '“O acompanhamento dos estudantes em um espaço dedicado à AQV.”'
  },
  {
    act: 'Ato 3 — Integração dos Perfis',
    member: '5',
    time: '11:00–11:20',
    cue: '“O que o professor registra alimenta o aluno, a gestão e a orientação educacional.”'
  },
  {
    act: 'Ato 4 — Resultados',
    member: '6',
    time: '11:20–12:00',
    cue: '“Menos cliques, consulta direta e rotinas acadêmicas mais organizadas.”'
  },
  {
    act: 'Ato 4 — Proposta Comercial',
    member: '6',
    time: '12:00–12:45',
    cue: '“R$ 80 mil na implantação e R$ 8 mil por mês de manutenção e evolução.”'
  },
  {
    act: 'Ato 4 — Evolução Contínua',
    member: '6',
    time: '12:45–13:15',
    cue: '“Expansão para outras unidades do SENAI, segurança e melhorias contínuas.”'
  },
  {
    act: 'Ato 4 — Conclusão',
    member: '6',
    time: '13:15–13:45',
    cue: '“Mais do que modernizar a aparência, repensamos o acesso e os processos do ensino.”'
  },
  {
    act: 'Ato 4 — Encerramento',
    member: '1',
    time: '13:45–14:15',
    cue: '“Nós somos a Zyntek. Tecnologia além do esperado.” → todos os 7 integrantes juntos.'
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const slides = [...document.querySelectorAll('.slide')];

  slides.forEach((slide) => {
    if (slide.dataset.index === '0' || slide === slides[slides.length - 1] || slide.classList.contains('print-showcase') || slide.querySelector('.geo-bg')) return;
    const geo = document.createElement('div');
    geo.className = 'geo-bg';
    geo.setAttribute('aria-hidden', 'true');
    geo.innerHTML = '<span class="geo-circle"></span><span class="geo-square"></span><span class="geo-triangle"></span><span class="geo-line"></span><span class="geo-dots"></span>';
    slide.prepend(geo);
  });

  const currentEl = document.getElementById('current');
  const counterMaxEl = document.getElementById('counterMax');
  const progressEl = document.getElementById('progressBar');
  const sectionNameEl = document.getElementById('sectionName');
  const slideNavTrack = document.getElementById('slideNavTrack');
  const headerBrand = document.getElementById('headerBrand');
  const helpBtn = document.getElementById('helpBtn');
  const shortcutsModal = document.getElementById('shortcutsModal');
  const closeShortcutsBtn = document.getElementById('closeShortcutsBtn');
  const shortcutsBackdrop = document.getElementById('shortcutsBackdrop');
  const cursorGlow = document.getElementById('cursorGlow');
  const ambientCanvas = document.getElementById('ambientCanvas');
  const teamListEl = document.getElementById('closingTeamList');
  const stageNotes = document.getElementById('stageNotes');
  const stageSlideEl = document.getElementById('stageSlide');
  const stageActEl = document.getElementById('stageAct');
  const stageMemberEl = document.getElementById('stageMember');
  const stageTimeEl = document.getElementById('stageTime');
  const stageCueEl = document.getElementById('stageCue');

  let index = 0;
  let touchStartX = 0;
  let digitBuffer = '';
  let digitTimer = null;
  let stageNotesOpen = false;
  let researchFrames = [];
  let budgetFrame = null;
  let videoFrames = [];

  const pad = (n) => String(n).padStart(2, '0');

  if (teamListEl) {
    teamListEl.innerHTML = TEAM_NAMES.map((name) => `<span>${name}</span>`).join('');
  }

  if (counterMaxEl) {
    counterMaxEl.textContent = String(slides.length);
  }

  if (slideNavTrack) {
    slideNavTrack.innerHTML = '';
    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = `slide-dot ${i === index ? 'active' : ''}`;
      dot.setAttribute('aria-label', `Ir para slide ${i + 1}: ${SECTION_NAMES[i]}`);

      const tooltip = document.createElement('span');
      tooltip.className = 'dot-tooltip';
      tooltip.textContent = `${pad(i + 1)} · ${SECTION_NAMES[i]}`;
      dot.appendChild(tooltip);

      dot.addEventListener('click', (e) => {
        e.stopPropagation();
        goTo(i);
      });
      slideNavTrack.appendChild(dot);
    });
  }

  function formatCounter(finalText, progress) {
    const match = finalText.match(/[\d,.]+/);
    if (!match) return finalText;
    const value = parseFloat(match[0].replace(/\./g, '').replace(',', '.'));
    if (!Number.isFinite(value)) return finalText;
    return `${(value * progress).toLocaleString('pt-BR', {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1
    })}%`;
  }

  function animateResearch() {
    researchFrames.forEach(cancelAnimationFrame);
    researchFrames = [];

    document.querySelectorAll('.result-bar-track i').forEach((bar) => {
      const target = parseFloat(bar.style.getPropertyValue('--pct')) || 0;
      const readout = bar.closest('.result-bar')?.querySelector('.result-bar-head b');
      const finalText = readout?.dataset.final || readout?.textContent || '';
      if (readout) readout.dataset.final = finalText;
      bar.style.setProperty('--pct', '0%');
      const startTime = performance.now();

      function frame(now) {
        const progress = Math.min((now - startTime) / 1100, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        bar.style.setProperty('--pct', `${(target * eased).toFixed(1)}%`);
        if (readout) readout.textContent = formatCounter(finalText, eased);
        if (progress < 1) researchFrames.push(requestAnimationFrame(frame));
        else if (readout) readout.textContent = finalText;
      }

      researchFrames.push(requestAnimationFrame(frame));
    });

    const donut = document.querySelector('.research-donut');
    const core = donut?.querySelector('.donut-core');
    const finalCore = core?.dataset.final || core?.textContent || '';

    if (donut) {
      const target = parseFloat(donut.style.getPropertyValue('--pct')) || 88.9;
      if (core) core.dataset.final = finalCore;
      donut.style.setProperty('--pct', '0%');
      const startTime = performance.now();

      function frame(now) {
        const progress = Math.min((now - startTime) / 1100, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        donut.style.setProperty('--pct', `${(target * eased).toFixed(1)}%`);
        if (core) core.textContent = formatCounter(finalCore, eased);
        if (progress < 1) researchFrames.push(requestAnimationFrame(frame));
        else if (core) core.textContent = finalCore;
      }

      researchFrames.push(requestAnimationFrame(frame));
    }

    const readout = document.querySelector('.research-readout');
    if (readout) {
      readout.classList.remove('is-counting');
      void readout.offsetWidth;
      readout.classList.add('is-counting');
    }
  }

  function animateBudget() {
    const counter = document.getElementById('budgetCounter');
    if (!counter) return;

    const target = parseInt(counter.dataset.target, 10) || 80000;
    const duration = 1200;
    const startTime = performance.now();

    if (budgetFrame) cancelAnimationFrame(budgetFrame);
    counter.textContent = 'R$ 0';

    function frame(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      const ease = 1 - (1 - progress) * (1 - progress);
      counter.textContent = `R$ ${Math.floor(ease * target).toLocaleString('pt-BR')}`;
      if (progress < 1) {
        budgetFrame = requestAnimationFrame(frame);
      } else {
        budgetFrame = null;
      }
    }

    budgetFrame = requestAnimationFrame(frame);
  }

  function setupCaptures() {
    Object.keys(CAPTURES).forEach((key) => {
      const slot = document.querySelector(`[data-capture="${key}"]`);
      const img = document.querySelector(`[data-capture-img="${key}"]`);
      if (!slot || !img) return;

      const label = slot.querySelector('.capture-label');
      if (label) label.dataset.placeholder = label.textContent;

      const path = CAPTURES[key];
      if (!path) {
        slot.classList.remove('has-capture');
        return;
      }

      const showCapture = () => {
        slot.classList.add('has-capture');
        if (label) label.textContent = 'CAPTURA VINCULADA';
      };

      const hideCapture = () => {
        slot.classList.remove('has-capture');
        if (label) label.textContent = label.dataset.placeholder;
      };

      img.addEventListener('load', showCapture);
      img.addEventListener('error', hideCapture);
      img.src = path;

      if (img.complete && img.naturalWidth > 0) showCapture();
    });
  }

  function setupPrints() {
    Object.keys(PRINTS).forEach((key) => {
      const frame = document.querySelector(`[data-print="${key}"]`);
      const img = document.querySelector(`[data-print-img="${key}"]`);
      if (!frame || !img) return;

      const path = PRINTS[key];
      if (!path) {
        frame.classList.remove('has-print');
        img.removeAttribute('src');
        return;
      }

      img.addEventListener('load', () => frame.classList.add('has-print'));
      img.addEventListener('error', () => frame.classList.remove('has-print'));
      img.src = path;

      if (img.complete && img.naturalWidth > 0) frame.classList.add('has-print');
    });
  }

  function playVideo(video, frame) {
    frame.classList.remove('is-paused');
    const attempt = video.play();
    if (attempt && typeof attempt.catch === 'function') {
      attempt.catch(() => {
        video.muted = true;
        const retry = video.play();
        if (retry && typeof retry.catch === 'function') retry.catch(() => {});
      });
    }
  }

  function setupVideos() {
    videoFrames = [];
    Object.keys(VIDEOS).forEach((key) => {
      const frame = document.querySelector(`[data-video-slot="${key}"]`);
      const video = frame ? frame.querySelector('.print-video') : null;
      if (!frame || !video) return;

      video.src = VIDEOS[key];
      video.controls = false;
      video.loop = false;
      video.playsInline = true;
      video.preload = 'metadata';

      frame.setAttribute('tabindex', '0');
      frame.setAttribute('role', 'button');
      frame.setAttribute('aria-label', 'Pausar ou retomar vídeo');

      const toggle = () => {
        if (video.paused) playVideo(video, frame);
        else {
          video.pause();
          frame.classList.add('is-paused');
        }
      };

      frame.addEventListener('click', toggle);
      frame.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggle();
        }
      });

      video.addEventListener('play', () => frame.classList.remove('is-paused'));
      video.addEventListener('pause', () => frame.classList.add('is-paused'));
      video.addEventListener('ended', () => frame.classList.add('is-paused'));

      videoFrames.push({ frame, video });
    });
  }

  function syncVideos() {
    const activeSlide = slides[index];
    videoFrames.forEach(({ frame, video }) => {
      try {
        video.currentTime = 0;
      } catch {}
      frame.classList.remove('is-paused');
      if (!activeSlide || frame.closest('.slide') !== activeSlide) {
        video.pause();
        return;
      }
      playVideo(video, frame);
    });
  }

  function renderStageNotes() {
    const cue = STAGE_CUES[index];
    if (!cue || !stageNotes) return;

    if (stageSlideEl) stageSlideEl.textContent = `SLIDE ${pad(index + 1)} · ${SECTION_NAMES[index]}`;
    if (stageActEl) stageActEl.textContent = cue.act;
    if (stageMemberEl) stageMemberEl.textContent = cue.member === 'a definir' ? 'a definir' : `Integrante ${cue.member}`;
    if (stageTimeEl) stageTimeEl.textContent = cue.time;
    if (stageCueEl) stageCueEl.textContent = cue.cue;
  }

  function toggleStageNotes(force) {
    stageNotesOpen = typeof force === 'boolean' ? force : !stageNotesOpen;
    if (!stageNotes) return;
    stageNotes.classList.toggle('open', stageNotesOpen);
    stageNotes.setAttribute('aria-hidden', String(!stageNotesOpen));
  }

  function update() {
    slides.forEach((slide, i) => {
      const isActive = i === index;
      slide.classList.toggle('active', isActive);
      slide.setAttribute('aria-hidden', String(!isActive));
    });

    if (currentEl) currentEl.textContent = pad(index + 1);
    if (progressEl) progressEl.style.width = `${((index + 1) / slides.length) * 100}%`;
    if (sectionNameEl) sectionNameEl.textContent = SECTION_NAMES[index];

    if (slideNavTrack) {
      slideNavTrack.querySelectorAll('.slide-dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
      });
    }

    renderStageNotes();
    syncVideos();

    const activeSlide = slides[index];
    if (activeSlide) {
      activeSlide.classList.remove('is-entering');
      void activeSlide.offsetWidth;
      activeSlide.classList.add('is-entering');
    }

    if (index === 4) animateResearch();
    if (index === 16) animateBudget();
  }

  function next() {
    index = (index + 1) % slides.length;
    update();
  }

  function prev() {
    index = (index - 1 + slides.length) % slides.length;
    update();
  }

  function goTo(newIndex) {
    clearTimeout(digitTimer);
    digitBuffer = '';
    if (newIndex >= 0 && newIndex < slides.length) {
      index = newIndex;
      update();
    }
  }

  const nextBtn = document.getElementById('next');
  const prevBtn = document.getElementById('prev');
  const fullBtn = document.getElementById('full');

  if (nextBtn) nextBtn.addEventListener('click', () => next());
  if (prevBtn) prevBtn.addEventListener('click', () => prev());

  if (headerBrand) {
    headerBrand.addEventListener('click', () => goTo(0));
    headerBrand.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        goTo(0);
      }
    });
  }

  if (fullBtn) {
    fullBtn.addEventListener('click', () => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen?.().catch(() => {});
      } else {
        document.exitFullscreen?.().catch(() => {});
      }
    });
  }

  function openHelp() {
    if (shortcutsModal) {
      shortcutsModal.classList.add('open');
      shortcutsModal.setAttribute('aria-hidden', 'false');
    }
  }

  function closeHelp() {
    if (shortcutsModal) {
      shortcutsModal.classList.remove('open');
      shortcutsModal.setAttribute('aria-hidden', 'true');
    }
  }

  if (helpBtn) helpBtn.addEventListener('click', openHelp);
  if (closeShortcutsBtn) closeShortcutsBtn.addEventListener('click', closeHelp);
  if (shortcutsBackdrop) shortcutsBackdrop.addEventListener('click', closeHelp);

  document.addEventListener('keydown', (e) => {
    if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;

    if (['ArrowRight', 'PageDown'].includes(e.key)) {
      e.preventDefault();
      next();
    } else if (['ArrowLeft', 'PageUp'].includes(e.key)) {
      e.preventDefault();
      prev();
    } else if (e.key === ' ') {
      e.preventDefault();
      next();
    } else if (e.key === 'Home') {
      e.preventDefault();
      goTo(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      goTo(slides.length - 1);
    } else if (e.key.toLowerCase() === 'n') {
      toggleStageNotes();
    } else if (e.key.toLowerCase() === 'f') {
      if (fullBtn) fullBtn.click();
    } else if (e.key === '?' || (e.shiftKey && e.key === '/')) {
      if (shortcutsModal && shortcutsModal.classList.contains('open')) {
        closeHelp();
      } else {
        openHelp();
      }
    } else if (e.key === 'Escape') {
      closeHelp();
      toggleStageNotes(false);
    } else if (/^[0-9]$/.test(e.key)) {
      if (digitBuffer === '1') {
        clearTimeout(digitTimer);
        digitBuffer = '';
        const doubleDigit = parseInt(`1${e.key}`, 10);
        if (doubleDigit <= slides.length) goTo(doubleDigit - 1);
        return;
      }
      if (e.key === '1') {
        digitBuffer = '1';
        digitTimer = setTimeout(() => {
          digitBuffer = '';
          goTo(0);
        }, 450);
        return;
      }
      digitBuffer = '';
      if (e.key === '0') return;
      const num = parseInt(e.key, 10);
      if (num >= 1 && num <= 9) goTo(num - 1);
    }
  });

  document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  document.addEventListener('touchend', (e) => {
    const diff = e.changedTouches[0].screenX - touchStartX;
    if (Math.abs(diff) > 50) {
      if (diff < 0) next();
      else prev();
    }
  }, { passive: true });

  if (cursorGlow) {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let glowX = mouseX;
    let glowY = mouseY;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    function renderGlow() {
      glowX += (mouseX - glowX) * 0.12;
      glowY += (mouseY - glowY) * 0.12;
      cursorGlow.style.left = `${glowX}px`;
      cursorGlow.style.top = `${glowY}px`;
      requestAnimationFrame(renderGlow);
    }
    renderGlow();
  }

  document.querySelectorAll('.tilt-card').forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((centerY - y) / centerY) * 5;
      const rotateY = ((x - centerX) / centerX) * 5;

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.015, 1.015, 1.015)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  });

  if (ambientCanvas) {
    const ctx = ambientCanvas.getContext('2d');
    let width = ambientCanvas.width = window.innerWidth;
    let height = ambientCanvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
      width = ambientCanvas.width = window.innerWidth;
      height = ambientCanvas.height = window.innerHeight;
    });

    const particleCount = Math.min(38, Math.floor(window.innerWidth / 35));
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.55,
        vy: (Math.random() - 0.5) * 0.55,
        size: Math.random() * 1.8 + 0.8,
        alpha: Math.random() * 0.45 + 0.2
      });
    }

    function animateParticles() {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        p1.x += p1.vx;
        p1.y += p1.vy;

        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        ctx.fillStyle = `rgba(56, 198, 165, ${p1.alpha})`;
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.size, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 125) {
            const lineAlpha = (1 - dist / 125) * 0.16;
            ctx.strokeStyle = `rgba(56, 198, 165, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animateParticles);
    }

    animateParticles();
  }

  setupCaptures();
  setupPrints();
  setupVideos();
  update();
});
