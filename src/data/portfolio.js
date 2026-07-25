const images = import.meta.glob("../assets/performances/*.webp", {
  eager: true,
  import: "default",
});

const portfolio = Object.entries(images)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([path, image], index) => ({
    id: index + 1,
    image,
    title: `Performance ${index + 1}`,
    category: "Live Performance",
    filename: path.split("/").pop(),
  }));

export default portfolio;