import React from 'react'
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <footer className="footer mt-10 bg-slate-800 text-white">
    <div className="name text-xl py-2">
      Recipe App made by -{" "}
      <a
        href="https://www.linkedin.com/in/jay-kang-b5284a228/"
        target="__blank"
      >
        Jay Kang
      </a>
    </div>
    <div className="iconContainer flex py-2">
      <a
        href="https://www.instagram.com/just__kang/"
        target="__blank"
        className="flex-1"
      >
        <InstagramIcon fontSize="large" />
      </a>
      <a
        href="https://www.linkedin.com/in/jay-kang-b5284a228/"
        target="__blank"
        className="flex-1"
      >
        <LinkedInIcon fontSize="large" />
      </a>
      <a
        href="https://github.com/jaykang95"
        target="__blank"
        className="flex-1"
      >
        <GitHubIcon fontSize="large" />
      </a>
    </div>
  </footer>
  )
}

export default Footer