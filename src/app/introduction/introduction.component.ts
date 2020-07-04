import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {
 public widgets: any;
  constructor() { }

  ngOnInit() {

    const txtType = function (el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = '';
      this.tick();
      this.isDeleting = false;
    };

    txtType.prototype.tick = function () {
      let i = this.loopNum % this.toRotate.length;
      let fullTxt = this.toRotate[i];

      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

      let that = this;
      let delta = 200 - Math.random() * 100;

      if (this.isDeleting) { delta /= 2; }

      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
      }

      if (this.txt !== fullTxt) {
        setTimeout(function () {
          that.tick();
        }, 80);
      } else {
        setTimeout(function () {
          that.tick();
        }, 600);
      }
    };

    window.onload = function () {
      const elements = document.getElementsByClassName('typewrite');
      for (let i = 0; i < elements.length; i++) {
        const toRotate = elements[i].getAttribute('data-type');
        const period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new txtType(elements[i], JSON.parse(toRotate), period);
        }
      }
      // INJECT CSS
      const css = document.createElement('style');
      css.type = 'text/css';
      css.innerHTML = '.typewrite > .wrap { border-right: 0.08em solid #fff}';
      document.body.appendChild(css);
    };

    // this.widgets = [
    //   {
    //     icon: "assests/icons/pilot.svg",
    //     title: "ORDER",
    //     content:
    //       "You can order data on-demand for your assets from anywhere and at anytime. It is as simple as few clicks. Now sit back and relax while our patented tech does the magic."
    //   },
    //   {
    //     icon: "assests/icons/order.svg",
    //     title: "PILOT",
    //     content:
    //       "Our network of drone pilots and hobbyists will do the flying, capture the data and upload to our proprietary platform."
    //   },
    //   {
    //     icon: "assests/icons/analyze.svg",
    //     title: "ANALYZE",
    //     content:
    //       "Aerologix's platform will empower you with information at your fingertips so that you can derive actionable insights and make swift decisions."
    //   }
    // ]
  }

}
