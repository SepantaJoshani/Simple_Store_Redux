import React from "react";
import { Link } from "react-router-dom";
import BrandIcon from "../Icons/BrandIcon";
import GithubIcon from "../Icons/GithubIcon";
import TwitterIcon from "../Icons/TwitterIcon";
import InstaIcon from '../Icons/InstaIcon'

const Footer = () => {
  return (
    <footer className="px-4 bg-blue-400 divide-y dark:bg-coolGray-800 dark:text-coolGray-100">
      <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/3">
          <Link
            to="/"
            className="flex justify-center space-x-3 lg:justify-start"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full dark:bg-violet-400">
              <BrandIcon />
            </div>
            <span className="self-center text-2xl font-semibold">
              Shopping Project
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase dark:text-coolGray-50">
              Product
            </h3>
            <ul className="space-y-1">
              <li>
                <Link to="/">Features</Link>
              </li>
              <li>
                <Link to='/'>Integrations</Link>
              </li>
              <li>
                <Link to='/'>Pricing</Link>
              </li>
              <li>
                <Link to='/'>FAQ</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase dark:text-coolGray-50">
              Company
            </h3>
            <ul className="space-y-1">
              <li>
                <Link to='/'>Privacy</Link>
              </li>
              <li>
                <Link to='/'>Terms of Service</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="uppercase dark:text-coolGray-50">Developers</h3>
            <ul className="space-y-1">
              <li>
                <Link to='/'>Public API</Link>
              </li>
              <li>
                <Link to='/'>Documentation</Link>
              </li>
              <li>
                <Link to='/'>Guides</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <div className="uppercase dark:text-coolGray-50">Social media</div>
            <div className="flex justify-start space-x-3">
              <Link
                to="https://github.com/SepantaJoshani"
                rel='noreferrer'
                target="_blank"
                title="github"
                className="flex items-center p-1"
              >
                <GithubIcon />
              </Link>
              <Link
                to="https://twitter.com/SepantaJoshani"
                rel='noreferrer'
                target="_blank"
                title="Twitter"
                className="flex items-center p-1"
              >
                <TwitterIcon />
              </Link>
              <Link
                to="https://www.instagram.com/sepanta__joshani/"
                rel='noreferrer'
                target="_blank"
                title="Instagram"
                className="flex items-center p-1"
              >
               <InstaIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 text-sm text-center dark:text-coolGray-400">
        © 2021. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
