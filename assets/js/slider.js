/*==============================================
=            SECTION TEAM CAROUSSEL            =
==============================================*/
export default class Slider {
    constructor(delay) {
        this._delay = delay;
        this._numberEl = document.querySelectorAll(".el-name").length;
        this._countEl = 1;
    }

    move() {
        document.querySelector('.el-name.show').classList.remove('show');

        var elPpCurrent = document.querySelector('.el-pp.show');
        elPpCurrent.classList.remove('show');
        elPpCurrent.classList.add('hide');

        setTimeout(() => {
            elPpCurrent.style.display = "none";
            elPpCurrent.classList.remove('hide');
        }, 700);

        this._countEl++;
        if (this._countEl > this._numberEl)
            this._countEl = 1;

        var elNameNext = document.querySelector('.el-name:nth-child(' + this._countEl + ')');
        elNameNext.classList.add('show');
        var elPpNext = document.querySelector('.el-pp:nth-child(' + this._countEl + ')');
        elPpNext.style.display = "block";

        setTimeout(() => {
            elPpNext.classList.add('show');
        }, 50);

        setTimeout(() => {
            this.move();
        }, this._delay);
    };
    init(){
        var elNameNext = document.querySelector('.el-name');
        elNameNext.classList.add('show');
        setTimeout(() => {
            this.move();
        }, this._delay);
    }
}