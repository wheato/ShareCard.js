export default abstract class Stage {
  constructor() {}

  drawImage(image: ImageBitmap, pos: {}, align: string) {}
  drawText(text: string | string[], pos: {}, align: string) {}
  setFont(family: string) {}
  setFontSize(size: number) {}
  setColor(color: string) {}
}