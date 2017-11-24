interface PushMsg {
  src: string;
}
class Track {
  img: HTMLImageElement;
  constructor() {
    this.img = new Image();
  }
  public push(pushMsg: PushMsg) {
    const { src } = pushMsg
    this.img.src = src;
    this.img.onload = function() {
      // 发送接口
    }
  }
}
const track = new Track();