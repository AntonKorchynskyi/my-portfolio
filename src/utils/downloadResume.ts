export const downloadResume = (resumeUrl: string, filename: string) => {
  const link = document.createElement("a");
  link.href = resumeUrl;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

