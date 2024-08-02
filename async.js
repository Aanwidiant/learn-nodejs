function samplePromise() {
  return Promise.resolve("Aan");
}

async function run() {
  const name = await samplePromise();
  console.info(name);
}

run();
