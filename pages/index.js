import { Fragment } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

// import ShoveeModal from "@/utils/ShoveeModal";
import About from "@/sections/about";
import Education from "@/sections/education";
import Experience from "@/sections/experience";
const Navbar = dynamic(() => import("@/layout/navbar/Navbar"))
const Footer = dynamic(() => import("@/layout/footer/Footer"))
const Intro = dynamic(() => import("@/sections/Intro"))
const Skills = dynamic(() => import("@/sections/Skills"))
const Projects = dynamic(() => import("@/sections/Projects"))
const LatestBlogs = dynamic(() => import("@/sections/LatestBlogs"))
const Apps = dynamic(() => import("@/sections/Apps"))
const SendMail = dynamic(() => import("@/utils/SendMail"))
const SocialMedia = dynamic(() => import("@/utils/SocialMedia"))
const ChatSystem = dynamic(() => import("@/utils/ChatSystem"))
const Feedback = dynamic(() => import("@/utils/Feedback"))

const Home = () => {

  return (
    <Fragment>
      <Head>
        <title>Surjava Ghosh | Full-Stack Developer</title>
        
        {/* Primary Meta Tags */}
        <meta name="title" content="Surjava Ghosh - Full-Stack Developer" />
        <meta name="description" content="Professional portfolio of Surjava Ghosh, showcasing expertise in iOS, Android, and full-stack development with 7+ years of experience." />
        
        {/* Favicon - Local file from public folder */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://surjava.com" />
        <meta property="og:title" content="Surjava Ghosh - Full-Stack Developer" />
        <meta property="og:description" content="Professional portfolio showcasing 7+ years of mobile and full-stack development experience." />
        <meta property="og:image" content="/images/social-preview.png" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://surjava.com" />
        <meta property="twitter:title" content="Surjava Ghosh - Full-Stack Developer" />
        <meta property="twitter:description" content="Professional portfolio showcasing 7+ years of mobile and full-stack development experience." />
        <meta property="twitter:image" content="/images/social-preview.png" />
        
        {/* Other Meta Tags */}
        <meta name="keywords" content="iOS developer, Android developer, flutter developer, mobile app development, React Native, Swift, Kotlin, portfolio" />
        <meta name="author" content="Surjava Ghosh" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div>
        <div>
          {/* Desktop Navbar */}
          <Navbar />
          {/* Welcome Page */}
          <Intro />
          {/* About */}
          <About />
          {/* Skills  */}
          <Skills />
          {/* Education */}
          <Education />
          {/* Experience */}
          <Experience />
          {/* Projects */}
          <Projects />
          {/* SocialMedia */}
          <SocialMedia />

          {/* LatestBlog */}
          <LatestBlogs />
          {/* Apps */}
          <Apps />
          {/* Send Mail */}
          <SendMail />
          {/* Footer */}
          <Footer />
          <div className="z-40">
            {/* tawk.to Chat System */}
            <ChatSystem />
          </div>
          {/* Feedback Modal */}
          <Feedback />
          {/* ShoveeModal */}
          {/* <ShoveeModal /> */}
        </div>
      </div>
    </Fragment>
  );
}

export default Home
