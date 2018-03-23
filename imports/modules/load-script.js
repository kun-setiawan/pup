export const loadScript = (src, element) => {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = src;
  if (element === 'head') { document.head.appendChild(script); } else if (element === 'body') { document.body.appendChild(script); }
};

export const loadStyle = (src, element) => {
  const link = document.createElement('link');
  link.type = 'text/css';
  link.rel = 'stylesheet';
  link.href = src;
  document.head.appendChild(link);
  if (element === 'head') { document.head.appendChild(link); } else if (element === 'body') { document.body.appendChild(link); }
};
