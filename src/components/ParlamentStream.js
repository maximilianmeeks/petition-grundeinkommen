import React from "react"

const ParlamentStream = () => {
  return (
    <div className="embed-responsive embed-responsive-16by9">
      <iframe
        width="560"
        height="315"
        src="https://webtv.bundestag.de/player/macros/_v_q_0_de/_s_embed_fade_old/_x_s-144277506/pl/html/index.html?uuid=KGR07GX0O52K8&amp;sv=A170913&amp;noflash=true&amp;hls=true&amp;theov=2.40.0&amp;content=7466652&amp;flashSkin=ondemand&amp;ps=embed_fade&amp;gui=de"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  )
}

export default ParlamentStream
