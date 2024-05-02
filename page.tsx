import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
import { Post } from "../types/post";

const Page = ({ posts }: { posts: Post[] }) => {
  return /*#__PURE__*/ _jsxDEV("div", {
    children: posts.map((post) => /*#__PURE__*/ _jsxDEV("div", { children: post.title }, void 0, true, {
      fileName: "app/page.tsx",
      lineNumber: 10,
      columnNumber: 11
    }, this)),
  }, void 0, true, {
    fileName: "app/page.tsx",
    lineNumber: 9,
    columnNumber: 9
  }, this);
};

export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}

export default Page;
import type { AppProps } from 'next';
