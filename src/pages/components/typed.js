import React, { useEffect } from 'react';
import Typed from 'typed.js';

function TypedText() {
  useEffect(() => {
    const typed = new Typed('.typed', {
      strings: ["Designer", "Dreamer", "Developer", "Engineer"],
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });

    // 清理Typed实例以防止内存泄漏
    return () => {
      typed.destroy();
    }
  }, []); // 这个空数组表示仅在组件挂载时执行一次

  return (
    <span
      className="typed"
      style={{ color:'#F6B683' }}
    ></span>
  );
}

export default TypedText;
