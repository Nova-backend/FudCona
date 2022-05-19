import React from "react";
import "./Welcome.css";
import rbg from "../images/rbg.jpg";
import {  MdOutlineAccountCircle } from "react-icons/md";
import {AiOutlineProfile } from "react-icons/ai";
import {HiClipboardCopy} from "react-icons/hi";
import {HiOutlineSearch} from "react-icons/hi";
import {AiOutlineBars} from "react-icons/ai";

function Welcome() {
  return (
    <div>
      <div className="header">
        <div className="desc">
          <nav className="navbar">
            <span className="black">Fud</span>
            <span className="olive">Cona</span>
            <HiOutlineSearch />
            <AiOutlineBars />
          </nav>
          <p>
            Register your restaurant on FudCona for free and get more revenue
          </p>
          <button type="submit" className="reg-btn">Register now</button>
        </div>

        <div className="svg">
          <svg
            width="1295"
            height="350"
            viewBox="0 0 1295 350"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_171_9)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M125 196C166.421 196 200 162.421 200 121C200 79.5786 166.421 46 125 46C83.5786 46 50 79.5786 50 121C50 162.421 83.5786 196 125 196ZM228 296C255.614 296 278 273.614 278 246C278 218.386 255.614 196 228 196C200.386 196 178 218.386 178 246C178 273.614 200.386 296 228 296ZM1129 103.5C1129 124.211 1112.21 141 1091.5 141C1070.79 141 1054 124.211 1054 103.5C1054 82.7893 1070.79 66 1091.5 66C1112.21 66 1129 82.7893 1129 103.5ZM1170 296C1211.42 296 1245 262.421 1245 221C1245 179.579 1211.42 146 1170 146C1128.58 146 1095 179.579 1095 221C1095 262.421 1128.58 296 1170 296Z"
                fill="#FAFAF5"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_171_9"  
                x="0"
                y="0"
                width="1295"
                height="350"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="25" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_171_9"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_171_9"
                  result="shape"

                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>

      <div className="how">
      <svg className="how-dec" width="1440" height="6" viewBox="0 0 1440 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 2.49994H266.38C266.614 1.26618 267.698 0.333272 269 0.333272C270.473 0.333272 271.667 1.52718 271.667 2.99994C271.667 4.4727 270.473 5.66661 269 5.66661C267.698 5.66661 266.614 4.7337 266.38 3.49994H0V2.49994ZM1168.33 2.99994C1168.33 4.4727 1169.53 5.66661 1171 5.66661C1172.3 5.66661 1173.39 4.7337 1173.62 3.49994H1440V2.49994H1173.62C1173.39 1.26618 1172.3 0.333272 1171 0.333272C1169.53 0.333272 1168.33 1.52718 1168.33 2.99994Z" fill="#989A38"/>
</svg>

        <h3>How it works</h3>
      </div>
      <div className="container">


        <div className="column">
          <div className="steps">
            <MdOutlineAccountCircle className="step-icons" />
            <h1>Step 1</h1>
            <p>Register your restaurant</p>
          </div>
          <div className="steps">
            <AiOutlineProfile className="step-icons" />
            <h1>Step 2</h1>
            <p>
              Create your restaurant profile and create menu items
            </p>
          </div>
          <div className="steps">
            <HiClipboardCopy className="step-icons" />
            <h1>Step 3</h1>
            <p>Start receiving orders</p>
          </div>
        </div>
        <div className="bg-img">
          <img src={rbg} alt="background" />
        </div>
      </div>
    </div>
  );
}

export default Welcome;
