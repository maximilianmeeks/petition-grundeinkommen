import React from "react"

const ParlamentStream = () => {
  return (
    <div className="embed-responsive embed-responsive-16by9">
      <iframe
        src="https://webtv.bundestag.de/player/macros/_v_/_s_mobile-embed/_x_s-144277506/pl/html/index.html?uuid=KGMP3VWL94P1F&amp;noflash=true&amp;content=7195843&amp;theov=2.71.0&amp;flashSkin=embed_fade_old&amp;hls=true&amp;playerLink=/iptv/player/macros/_x_s-144277506/od_player.html&amp;dns=webtv.bundestag.de&amp;preset=embed_fade&amp;ps=embed_fade&amp;autoplay=true"
        allowFullScreen={true}
        title="parlamentStream"
        width={400}
        height={225}
        className="embed-responsive-item"
      ></iframe>
    </div>
  )
}

export default ParlamentStream
