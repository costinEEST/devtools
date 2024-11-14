import fetchToCurl from "@repo/fetch-to-curl";

import "./style.css";

document
  .querySelector<HTMLButtonElement>("#convert")!
  .addEventListener("click", () => {
    document.querySelector<HTMLDivElement>("#output")!.innerText = fetchToCurl(
      document.querySelector<HTMLTextAreaElement>("#request")!.value
    );
  });
