import React from 'react';

const W  = 500;
const H = 500;
export default class Clock extends React.Component {
  constructor(ops) {
    super(ops)
    this.state = {}
  }
  drawCircle = (content: CanvasRenderingContext2D) => {
    content.beginPath();
    content.arc(W/2,H/2,200,0,Math.PI * 2)
    content.stroke();
  }
  drawSolidCircle=(content: CanvasRenderingContext2D)=>{
    content.beginPath();
    content.arc(W/2,H/2,8,0,Math.PI * 2)
    content.fill();
  }
  drawTimeNumber=(content: CanvasRenderingContext2D)=>{
    
    const ALlAngle = Math.PI * 2
    const oneAngle = ALlAngle / 12;
    content.beginPath();
    content.fillText("9",0,0)
    // new Array(12).fill(0).forEach((_,i:Number)=>{
      
    //   content.arc(W/2,H/2,W/2 + 20,i * oneAngle ,(i+1)*oneAngle);
    //   content.fillText("9",0,0)
    // })
    
  }
  componentDidMount() {
    const content: CanvasRenderingContext2D = this.refs.canvas.getContext('2d');
    
    this.drawTimeNumber(content)
    this.drawCircle(content);
    this.drawSolidCircle(content);
  }
  render() {
    return (
      <div>
        <canvas ref="canvas" id='canvas' width={W} height={H}></canvas>
      </div>
    )
  }
}