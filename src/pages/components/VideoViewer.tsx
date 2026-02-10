interface VideoViewerProps {
  videoSrc: string
  title?: string
  subtitle?: string
}

export const VideoViewer = ({ videoSrc, title, subtitle }: VideoViewerProps) => {
  return (
    <div className="video-viewer" style={{ textAlign: "center", margin: "40px 20px", width: "450px" }}>
        <video controls style={{maxWidth: "450px", maxHeight: "500px"}}>
            <source src={videoSrc} type="video/mp4" />
            <source src={videoSrc} type="video/ogg" />
            Your browser does not support HTML video.
        </video>
        {title && <h4>{title}</h4>}
        {subtitle && <h6>{subtitle}</h6>}
    </div>
  )
}
