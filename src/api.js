export async function fetchImages() {
    const response = await fetch(
      "https://aws.random.cat/meow"
    );
    const data = await response.json();
    return data.file;
  }