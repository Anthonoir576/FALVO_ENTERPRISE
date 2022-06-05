


//~ ########################################################
//~ --------------------- EXPORT ---------------------------
//~ ########################################################
//.           -- Effet binaire sur texte Accueil --
//~ --------------------------------------------------------
export const txtEffect = () => {

  class TextScramble {
    el          ?: any;
    chars       ?: any;
    resolve     ?: any;
    frame       ?: any;
    queue       ?: any;
    frameRequest?: any;

    constructor(el?: any, chars?: any, update?: any) {
      this.el     = el;
      this.chars  = "01101010";
      this.update = this.update.bind(this);
    }

    setText(newText?: any) {
      const oldText = this.el.innerText;
      const length  = Math.max(oldText.length, newText.length);
      const promise = new Promise((resolve) => (this.resolve = resolve));
      this.queue = [];

      for (let i = 0; i < length; i++) {

        const from  = oldText[i] || "";
        const to    = newText[i] || "";
        const start = Math.floor(Math.random() * 40);
        const end   = start + Math.floor(Math.random() * 40);

        this.queue.push({
          from,
          to,
          start,
          end,
        });
      };

      cancelAnimationFrame(this.frameRequest);
      this.frame = 0;
      this.update();
      return promise;
    };

    update() {

      let output   = "";
      let complete = 0;

      for (let i = 0, n = this.queue.length; i < n; i++) {
        let { from, to, start, end, char } = this.queue[i];

        if (this.frame >= end) {
          complete++;
          output += to;
        } else if (this.frame >= start) {
          if (!char || Math.random() < 0.28) {
            char = this.randomChar();
            this.queue[i].char = char;
          };

          output += `<span class="text-effect-binaire">${char}</span>`;
        } else {
          output += from;
        };
      };

      this.el.innerHTML = output;

      if (complete === this.queue.length) {
        this.resolve();
      } else {
        this.frameRequest = requestAnimationFrame(this.update);
        this.frame++;
      };
    };

    randomChar() {
      return this.chars[Math.floor(Math.random() * this.chars.length)];
    };
  };

  const phrases = ["FALVO Anthony", "FALVO. Enterprise"];
  const el      = document.querySelector(".text-effect");
  const fx      = new TextScramble(el);
  let counter   = 0;

  const next = () => {
    fx.setText(phrases[counter]).then(() => {
      setTimeout(next, 5000);
    });
    counter = (counter + 1) % phrases.length;
  };

  next();
};
//~ --------------------------------------------------------
//~ ########################################################