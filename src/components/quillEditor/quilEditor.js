"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import hljs from "highlight.js";
import "highlight.js/styles/vs2015.css";
import "./quilEditor.css";

// Dynamically import React Quill without SSR
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

// Quill configuration
const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ font: [] }],
    [{ list: "ordered" }, { list: "bullet" }],
    ["bold", "italic", "underline", "strike"],
    [{ color: [] }, { background: [] }], // Color options
    [{ align: [] }],
    ["link", "image", "video"], // Added video upload
    ["code-block"],
    ["clean"],
  ],
  syntax: {
    highlight: (text) => hljs.highlightAuto(text).value,
  },
  clipboard: {
    matchVisual: false,
  },
};

const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
  "color",
  "background", // Include color and background
  "align",
  "code-block",
];

const QuillEditor = ({ value, onChange }) => {
  useEffect(() => {
    hljs.configure({
      languages: ["javascript", "ruby", "python", "java"],
    });
  }, []);

  return (
    <ReactQuill
      value={value}
      onChange={onChange}
      modules={modules}
      formats={formats}
      theme="snow"
      style={{ minHeight: "300px" }}
    />
  );
};

export default QuillEditor;
