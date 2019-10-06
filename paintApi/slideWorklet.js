const DEG_360 = Math.PI * 2;
const FG_COLOR = "white";
const BG_COLOR = "#E1E1E1";
const BG_COLOR_ON = "#FFCD00";
const CIRCLE_MARGIN = 3;

class Slide {
  // static get inputArguments() { 
  //   return ['on|off'];
  // }

  static get inputProperties() {
    return ['--slide-on'];
  }

  paint(ctx, geom, props, args){
    const {width, height} = geom;
    const halfOfCircleSize = height / 2;
    const innerWidth = width - height;
    const on = parseFloat(props.get('--slide-on')).toString();
    const x = halfOfCircleSize + innerWidth * on

    ctx.fillStyle = on == 1 ? BG_COLOR_ON : BG_COLOR;
    ctx.beginPath();

    // 양쪽에 원을 그린다.
    ctx.arc(halfOfCircleSize, halfOfCircleSize, halfOfCircleSize, 0, DEG_360);
    ctx.arc(width - halfOfCircleSize, halfOfCircleSize, halfOfCircleSize, 0, DEG_360);
    // 가운데 사각형을 그려준다.
    ctx.rect(halfOfCircleSize, 0, innerWidth, height);
    ctx.fill();

    ctx.fillStyle = FG_COLOR;
    ctx.beginPath();
    ctx.arc(x, halfOfCircleSize, halfOfCircleSize - CIRCLE_MARGIN, 0, DEG_360);
    ctx.fill();
  }
}

registerPaint("slide", Slide);