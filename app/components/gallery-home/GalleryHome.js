import SlideGallery from "../slide-gallery/SlideGallery.js"
export default function GalleryHome() {
  return (
    <section className="bg-gray-200">
      <div className="container lg text-center">
        <h1 className="text-lg m-1 text-gray-600 font-medium">OUR SHOWCASE</h1>
        <h2 className="text-3xl text-gray-800 leading-tight">
          Explore our most recent works
        </h2>
      </div>
      <SlideGallery/>
    </section>
  );
}
