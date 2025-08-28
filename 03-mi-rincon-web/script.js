// Toggle de tema con persistencia en localStorage
(function attachThemeToggle(){
  function isDark(){
    return document.documentElement.classList.contains('dark');
  }
  function setTheme(mode){ // 'dark' | 'light'
    document.documentElement.classList.toggle('dark', mode === 'dark');
    localStorage.setItem('theme', mode);
    updateIcon();
  }
  function toggleTheme(){
    setTheme(isDark() ? 'light' : 'dark');
  }
  function updateIcon(){
    const btn = document.getElementById('themeToggle');
    if (!btn) return;
    const dark = isDark();
    btn.textContent = dark ? '☀️' : '🌙';
    btn.setAttribute('aria-label', dark ? 'Cambiar a claro' : 'Cambiar a oscuro');
  }
  function initFromStorageOrSystem(){
    try{
      const stored = localStorage.getItem('theme'); // 'dark' | 'light' | null
      if (stored === 'dark' || stored === 'light'){
        document.documentElement.classList.toggle('dark', stored === 'dark');
      }else{
        // si no hay preferencia guardada, respetá el sistema
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.documentElement.classList.toggle('dark', prefersDark);
      }
    }catch(e){}
    updateIcon();
  }

  // reacciona si el sistema cambia de tema (opcional pero pro)
  const mq = window.matchMedia('(prefers-color-scheme: dark)');
  mq.addEventListener?.('change', (e)=>{
    const stored = localStorage.getItem('theme');
    if (!stored) { // solo si el usuario no forzó manualmente
      document.documentElement.classList.toggle('dark', e.matches);
      updateIcon();
    }
  });

  document.addEventListener('DOMContentLoaded', function(){
    const btn = document.getElementById('themeToggle');
    if (btn){
      btn.addEventListener('click', toggleTheme);
    } else {
      console.warn('[theme] Falta #themeToggle en el DOM');
    }
    initFromStorageOrSystem();
  });
})();
