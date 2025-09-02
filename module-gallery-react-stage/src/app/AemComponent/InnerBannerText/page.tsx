import { InnerBanner } from "@/components/InnerBanner";

export default function HomePage() {
  return (
    <main>
      <InnerBanner
        leftColumnContent={
          <div className="text-white">
            <h2 className="text-4xl font-bold mb-4">Welcome to Our Store</h2>
            <p className="text-lg">Find fresh offers, curated just for you.</p>
            <button className="mt-4 bg-white text-black px-4 py-2 rounded">Shop Now</button>
          </div>
        }
        backgroundImage="/images/InnerBannerFull.jpg"
        color="orange"
        width="medium"
        height="full"
        padding="AllSide"
        borderRadius="left"
        className="min-h-[400px] w-[1920px]"
      />
    </main>
  );
}
