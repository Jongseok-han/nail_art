import Navbar from '@/components/main/navbar';
import AetherHero from '@/components/main/hero';

export default function Home() {
  return (
    <>
      <Navbar />
      <AetherHero
        title="Nail Your YouTube Thumbnail with AI."
        subtitle={
          <>
            Create click-worthy thumbnails in seconds.
            <br />
            Let AI design professional visuals for your videos.
          </>
        }
        ctaLabel="Generate Thumbnail"
        ctaHref="#generate"
        align="center"
        overlayGradient="linear-gradient(180deg, #000000cc 0%, #00000066 50%, #000000aa 100%)"
      />
    </>
  );
}
