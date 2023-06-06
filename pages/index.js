import Head from "next/head";
import { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { Fragment, useContext, useState } from "react";
import Intro from "@/components/Intro";
import Blogs from "@/components/Blogs";
import ThemeBtn from "@/components/ThemeBtn";
import { BlogContext } from "@/contextApi/blogContext";
import Navbar from "@/components/Navbar";

export default function Home() {
  const { dark } = useContext(BlogContext);

  return (
    <Fragment>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className={dark ? "dark" : ""}>
        <ThemeBtn />
        <div
          className="dark:bg-gray-700 "
        >
          <Navbar>
            <Intro />
            <div className={`${utilStyles.headingMd} w-[90%] m-auto`}>
              <Blogs />
            </div>
          </Navbar>
        </div>
      </div>
    </Fragment>
  );
}
