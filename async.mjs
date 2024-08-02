function samplePromise() {
  return Promise.resolve("Aan");
}

const name = await samplePromise();
console.info(name);
