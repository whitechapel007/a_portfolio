import React, { useState } from "react";

const HireMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div>
      <div class="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
        <section class="w-full">
          <h2 id="hire" class="secondary-title">
            Hire me
          </h2>
          <p class="section-paragraph">
            Feel free to to contact me any time, through any method below.
          </p>

          <div class="w-full grid lg:grid-cols-2 gap-8 lg:gap-32 mt-24">
            <div class="space-y-12">
              <div>
                <label className="text-white block mb-6 text-xl font-bold">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full border border-input-border bg-input px-4 py-4"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label className="text-white block mb-6 text-xl font-bold">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full border border-input-border bg-input px-4 py-4"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label classname="text-white block mb-6 text-xl font-bold">
                  Message
                </label>
                <textarea
                  type="email"
                  className="w-full border border-input-border bg-input px-4 py-4 h-56 resize-none"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <button className="px-6 py-2 bg-theme text-white font-bold">
                Send it!
              </button>
            </div>

            <div class="mt-12">
              <p className="text-secondary">080-595-47139</p>
              <a
                href="mailto:ebukareed@gmail.com"
                class="text-secondary underline mt-3 block"
              >
                Ebukareed@gmail.com
              </a>

              <div class="flex mt-20 space-x-6">
                <a href="#">LinkedIn</a>
                <a href="#">Twitter</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HireMe;
