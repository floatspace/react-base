import React, { useState, useEffect } from "react";

const Clock = () => {
  const [date, setDate] = useState(new Date());
  /**
   * useEffect 两个参数
   * 第一个参数作为回调函数会在浏览器布局和绘制完成后调用，因此它不会阻碍浏览器的渲染进程。
   * 第二个参数是一个数组
   *  当数组存在并有值时，如果数组中的任何值发生更改，则每次渲染后都会触发回调。
   *  当它不存在时，每次渲染后都会触发回调。
   *  当它是一个空列表([])时，回调只会被触发一次，类似于 componentDidMount。
   */
  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    // 返回函数将会在组件下一次重新渲染之后执行
    return () => {
      clearInterval(timer);
    };
  });
  return <h1>Hooks改造时间: {date.toLocaleTimeString()}</h1>;
};

export default Clock;
