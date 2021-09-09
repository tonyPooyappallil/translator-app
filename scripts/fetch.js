async function fetcher(text, from, to) {
  const res = await fetch("https://libretranslate.de/translate", {
    method: "POST",
    body: JSON.stringify({
      q: `${text}`,
      source: `${from}`,
      target: `${to}`,
    }),
    headers: { "Content-Type": "application/json" },
  });

  let data = await res.json();
  // console.log(data);
  let i = data.translatedText;
  console.log(i);
  return i;
}

export default fetcher;
