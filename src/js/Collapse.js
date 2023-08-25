export default class Collapse {
  constructor(container) {
    this.container = container;
  }

  init() {
    this.drawArea();
    this.startAnim();
  }

  drawArea() {
    const main = document.createElement('main');
    main.innerHTML = `
      <button class="btn" type="button" name="button" aria-label="Click to open description">
        Collapse
      </button>
      <div class="wrapper">
        <p class="description">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
        </p>
      </div>
    `;
    this.container.append(main);
    this.btn = this.container.querySelector('.btn');
    this.wrap = this.container.querySelector('.wrapper');
  }

  startAnim() {
    this.btn.addEventListener('click', (e) => {
      e.preventDefault();
      this.wrap.classList.toggle('active');
    });
  }
}
