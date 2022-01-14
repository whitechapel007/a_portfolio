import React from "react";

import figure6 from "../asset/FireShot Capture 018 - Tochis restaurant - whitechapel007.github.io.jpg";
import figure7 from "../asset/FireShot Capture 019 - Coders Den - whitechapel007.github.io.jpg";
import figure9 from "../asset/FireShot Capture 021 - Stage 3 Task - whitechapel007.github.io.jpg";
import figure10 from "../asset/FireShot Capture 022 - Gadget safe - gadgetlock-waitlist.netlify.app.jpg";
import figure11 from "../asset/FireShot Capture 023 - Frontend Mentor - Sunnyside agency landing page_ - sunny-side-agency-landing-page.netlify.app.jpg";
import figure12 from "../asset/FireShot Capture 024 - React App - github-search-whitech.netlify.app.jpg";
import figure13 from "../asset/FireShot Capture 025 - meddical home - medical-kodecamp.netlify.app.jpg";
import figure14 from "../asset/FireShot Capture 026 - Web solutions - web-solutions-demo-page.netlify.app.jpg";
import figure15 from "../asset/FireShot Capture 029 - Pertinence wealth community – pertinence wealth community_ - pertinence.community.jpg";
const Mywork = () => {
  return (
    <div>
      <div class="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
        <section class="w-full">
          <h2 id="work" class="secondary-title">
            My work
          </h2>
          <p class="section-paragraph">
            I’ve had the pleasure of working with multiple Fortune 500
            companies, designing and implementing both frontend and backend.
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <img
              src={figure9}
              className=" w-full hidden md:block bg-nav h-36 lg:h-72 object-cover"
            />
            <img
              src={figure6}
              className="hidden md:block bg-nav h-36 lg:h-72 object-cover"
            />
            <img
              src={figure7}
              className="w-full hidden md:block md:col-span-2 lg:col-span-1 bg-nav h-36 lg:h-72 object-cover"
            />
            <img
              src={figure10}
              className="w-full hidden md:block md:col-span-2 lg:col-span-1 bg-nav h-36 lg:h-72 object-cover"
            />
            <img
              src={figure11}
              className="w-full hidden md:block md:col-span-2 lg:col-span-1 bg-nav h-36 lg:h-72 object-cover"
            />
            <img
              src={figure12}
              className="w-full hidden md:block md:col-span-2 lg:col-span-1 bg-nav h-36 lg:h-72 object-cover"
            />
            <img
              src={figure13}
              className="w-full hidden md:block md:col-span-2 lg:col-span-1 bg-nav h-36 lg:h-72 object-cover"
            />
            <img
              src={figure14}
              className="w-full hidden md:block md:col-span-2 lg:col-span-1 bg-nav h-36 lg:h-72 object-cover"
            />
            <img
              src={figure15}
              className="w-full hidden md:block md:col-span-2 lg:col-span-1 bg-nav h-36 lg:h-72 object-cover"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Mywork;
