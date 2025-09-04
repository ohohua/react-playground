// 运行时配置

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ name: string }> {
  return { name: '张三' };
}

export const layout = () => {
  return {
    title: 'Playground',
    locale: false,
    layout: 'top',
    logo: () => (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        className="icon"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.4286 2.3158H5.74576C3.41404 2.3158 1.52381 4.0124 1.52381 6.10527C1.52381 8.19814 3.41404 9.89474 5.74576 9.89474H10.6667"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        ></path>
        <path
          d="M5.33334 6.10526H10.2542C12.586 6.10526 14.4762 7.80187 14.4762 9.89474C14.4762 11.9876 12.586 13.6842 10.2542 13.6842H4.84034"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        ></path>
      </svg>
    ),
    contentStyle: { padding: 0 }, // 修改页面的padding
  };
};
