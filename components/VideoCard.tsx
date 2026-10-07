import type { GalleryVideo } from "@/lib/videos";

export function VideoCard({ video, index }: { video: GalleryVideo; index: number }) {
  return <figure className="video-card">
    <div className="video-frame"><iframe src={`https://player.mux.com/${video.playbackId}`} title={video.title} allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;" allowFullScreen /></div>
    <figcaption className="video-caption"><div><h3>{video.title}</h3><p>{video.description}</p></div><span>0{index + 1}</span></figcaption>
  </figure>;
}
