document.addEventListener("DOMContentLoaded", () => {

  const buttons = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".video-card");

  buttons.forEach(btn=>{
    btn.onclick=()=>{
      buttons.forEach(b=>b.classList.remove("active"));
      btn.classList.add("active");
      const f = btn.dataset.filter;
      cards.forEach(c=>{
        c.style.display = (f==="all" || c.dataset.filter===f) ? "" : "none";
      });
    };
  });

  const root = document.documentElement;
  const palettes = [
    ['#ff6b6b','#6b8cff','#8affc1'],
    ['#ff9d6b','#ff6bb7','#6bffd4'],
    ['#6bd1ff','#6bff94','#ff6bee']
  ];
  let i=0;
  setInterval(()=>{
    i=(i+1)%palettes.length;
    const [c1,c2,c3]=palettes[i];
    root.style.setProperty("--c1",c1);
    root.style.setProperty("--c2",c2);
    root.style.setProperty("--c3",c3);
  },3000);

});
