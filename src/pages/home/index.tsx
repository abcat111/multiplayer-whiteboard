import React, { useEffect, useRef, useState } from 'react';
import { fabric } from 'fabric';
import './index.scss';
import About from '@/components/About';
import LeftSidebar from '@/components/LeftSidebar'

export default function Home() {
  console.log('home组件被渲染了');
  // const [count, setCount] = useState(175);
  // const canvasEl = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    // const options = { ... };
    const canvas = new fabric.Canvas('canvas', {
      fireRightClick: true, // 启用右键，button的数字为3
      stopContextMenu: true, // 禁止默认右键菜单
      controlsAboveOverlay: true, // 超出clipPath后仍然展示控制条
      backgroundColor: 'skyblue' // 画布背景色
    });

    // 圆形
    const circle = new fabric.Circle({
      radius: 30, // 圆的半径
      top: 20, // 距离容器顶部 20px
      left: 20, // 距离容器左侧 20px
      fill: 'pink' // 填充 粉色
    });

    const rect = new fabric.Rect({
      top: 30, // 距离容器顶部 30px
      left: 30, // 距离容器左侧 30px
      width: 100, // 宽 100px
      height: 60, // 高 60px
      fill: 'red' // 填充 红色
    });

    // 在canvas画布中加入矩形（rect）。add是“添加”的意思
    canvas.add(rect);
    // make the fabric.Canvas instance available to your app
    // updateCanvasContext(canvas);
    return () => {
      // updateCanvasContext(null);
      canvas.dispose();
    };
  }, []);
  return (
    <>
      {/* 画布区域 */}
      <div id="workspace">
        <LeftSidebar/>
        <div className="canvas-box">
          <canvas id="canvas" width={1000} height={500} style={{ border: '1px solid black' }}></canvas>
        </div>
      </div>
      <Factory>
        <About/>
      </Factory>
    </>
  );
}

const Factory = ({ children }: any) => {
  const [count, setCount] = useState(175);
  return (
    <>
      <h1>moment 的身高{count}</h1>
      <button onClick={() => setCount(count + 1)}>点击增加身高</button>
      {children}
    </>
  );
};
