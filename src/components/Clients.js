import React from "react";
import huawei from "../asset/huawei.jpeg";
import pertinence from "../asset/pertinence.jpeg";
import pwc from "../asset/pwc_logo.png";

const Clients = () => {
  return (
    <div>
      <div class="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
        <section class="w-full">
          <h2 id="client" class="secondary-title">
            Clients
          </h2>
          <p class="section-paragraph">
            I’ve had the pleasure of working with multiple Fortune 500
            companies, designing and implementing both frontend and backend.
          </p>

          <div class="space-y-12 my-16">
            <div class="w-full border border-nav p-16 lg:px-32 lg:py-20 lg:space-x-32 flex justify-center lg:justify-start flex-wrap lg:flex-nowrap">
              <div class="mb-6 lg:mb-0">
                <img src={huawei} alt="" />
              </div>

              <div class="flex flex-wrap justify-center text-center lg:text-left lg:block">
                <h3 class="text-white text-3xl font-semibold">Huawei Tech</h3>

                <div class="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-3 mt-6 mb-8">
                  <div class="badge">RF Engineering</div>
                  <div class="badge">software Engineering</div>
                </div>

                <p class="text-secondary">
                  I’ve had the pleasure of working with Huawei, a Fortune 500
                  company, designing and implementing both frontend and backend.
                </p>
              </div>
            </div>
            <div class="w-full border border-nav p-16 lg:px-32 lg:py-20 lg:space-x-32 flex justify-center lg:justify-start flex-wrap lg:flex-nowrap">
              <div class="mb-6 lg:mb-0">
                <img src={pertinence} alt="" />
              </div>

              <div class="flex flex-wrap justify-center text-center lg:text-left lg:block">
                <h3 class="text-white text-3xl font-semibold">
                  Pertinence Group
                </h3>

                <div class="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-3 mt-6 mb-8">
                  <div class="badge">Wordpress Development</div>
                  <div class="badge">Frontend development</div>
                </div>

                <p class="text-secondary">
                  I’ve had the pleasure of working with Pertinence Group
                  designing and implementing both frontend and backend.
                </p>
              </div>
            </div>
            <div class="w-full border border-nav p-16 lg:px-32 lg:py-20 lg:space-x-32 flex justify-center lg:justify-start flex-wrap lg:flex-nowrap">
              <div class="mb-6 lg:mb-0">
                <img src={pwc} alt="" />
              </div>

              <div class="flex flex-wrap justify-center text-center lg:text-left lg:block">
                <h3 class="text-white text-3xl font-semibold">Apple, inc.</h3>

                <div class="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-3 mt-6 mb-8">
                  <div class="badge">Frontend development</div>
                </div>

                <p class="text-secondary">
                  I was part of the team that desined the idea and built the
                  website
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Clients;
