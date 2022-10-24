const renderHTML = (html) => {
  return (
    html &&
    html
      .split("&lt;")
      .join("<")
      .split("&gt;")
      .join(">")
      .split("&nbsp;")
      .join(" ")
  );
};

export default renderHTML;
