import React from "react";

const Banner = () => {
  return (
    <div className="px-6 py-20 -mx-6 bg-secondary-foreground text-primary-foreground">
      <p className="text-sm text-muted-foreground text-center">
        <span className="text-slate-50">Welcome</span> to our
        <span className="text-slate-50"> JavaScript tutorial blog</span>, where
        we dive deep into the world of web development with{" "}
        <span className="text-slate-50">JavaScript</span>
      </p>
      <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-5xl text-center mt-10 mb-10">
        The complete tutorial - only JavaScript
      </h1>
      <p className="text-xl text-muted-foreground text-center">
        Whether you're a
        <span className="text-slate-50">
          {" "}
          beginner looking to learn the basics{" "}
        </span>
        or an experienced developer seeking advanced techniques, our tutorials
        cover everything from the fundamentals of JavaScript syntax to
        <span className="text-slate-50">
          {" "}
          cutting-edge frameworks and libraries
        </span>
      </p>
    </div>
  );
};

export default Banner;
