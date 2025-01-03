import { Footer } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsLinkedin,
} from "react-icons/bs";

const FooterCom = () => {
  return (
    <>
      <Footer container className="border border-t-8 border-teal-500">
        <div className="w-full max-w-7xl mx-auto">
          <div className="">
            <div className="">
              <Link className="self-center whitespace-nowrap text-lg sm:text-lg dark:text-white font-semibold">
                <span className="py-2 px-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                  Phi Horizon's
                </span>
                Blog
              </Link>
            </div>
            <div className="grid justify-between grid-cols-2 gap-8 mt-5 sm:grid-cols-3 sm:gap-6">
              <div className="">
                <Footer.Title title="About US" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#" target="_blank">
                    About us
                  </Footer.Link>
                  <Footer.Link href="#" target="_blank">
                    Phi_Horizon's Blogs
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div className="">
                <Footer.Title title="Follwo US" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#" target="_blank">
                    GitHub
                  </Footer.Link>
                  <Footer.Link href="#" target="_blank">
                    Facebook
                  </Footer.Link>
                  <Footer.Link href="#" target="_blank">
                    YouTube
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div className="">
                <Footer.Title title="About US" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#" target="_blank">
                    Privacy
                  </Footer.Link>
                  <Footer.Link href="#" target="_blank">
                    Term &amp; Conditions
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>

          <Footer.Divider />
          <div className="w-full flex flex-col justify-between sm:flex-row ">
            <Footer.Copyright
              href="#"
              by="Phi_Horizon"
              year={new Date().getFullYear()}
            />
            <div className="flex gap-5 mt-3 sm:ml-3">
              <Footer.Icon href="#" icon={BsFacebook} />
              <Footer.Icon href="#" icon={BsInstagram} />
              <Footer.Icon href="#" icon={BsGithub} />
              <Footer.Icon href="#" icon={BsDribbble} />
              <Footer.Icon href="#" icon={BsLinkedin} />
            </div>
          </div>
        </div>
      </Footer>
    </>
  );
};

export default FooterCom;
