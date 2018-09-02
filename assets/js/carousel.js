export default class Carousel {
    constructor(delay) {
        this._delay = delay;
        this._num = 0;
    }

    nextCaroussel() {
        document.querySelector('.slide.show').classList.remove('show');
        document.querySelector('.controls.active').classList.remove('active');
        this._num++;
        if (this._num === 3) {
            this._num = 0;
        }
        document.querySelectorAll('.slide')[this._num].classList.add('show');
        document.querySelectorAll('.controls')[this._num].classList.add('active');
    };

    progressCarousselReset() {
        document.querySelector('#section-slider > .btn .progress').classList.remove('active');
    }

    progressCarousselActive() {
        setTimeout(function () {
            document.querySelector('#section-slider > .btn .progress').classList.add('active');
        }, 50);

    }

    init() {
        this.progressCarousselReset();
        this.progressCarousselActive();
        this._intervalCaroussel = setInterval(() => {
            this.initCaroussel();
        }, this._delay);
        document.querySelector('#section-slider > .btn').addEventListener('click', () => {
            this.initCaroussel();
        });
        let controls = document.querySelectorAll('.controls');
        for (let i = 0; i < controls.length; i++) {
            controls[i].addEventListener('click', (e) => {
                e.preventDefault();
                this._num = i - 1;
                this.initCaroussel();
            });
        }
    }

    initCaroussel() {

        this.nextCaroussel();
        this.progressCarousselReset();
        this.progressCarousselActive();

        clearInterval(this._intervalCaroussel);
        this._intervalCaroussel = setInterval(() => {
            this.initCaroussel();
        }, this._delay);

    };
}