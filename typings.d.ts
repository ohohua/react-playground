import '@umijs/max/typings';

// 声明HTML模块类型
declare module '*.html' {
  const content: string;
  export default content;
}
