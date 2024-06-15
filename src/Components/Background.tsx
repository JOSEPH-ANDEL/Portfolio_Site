const BackgroundStyle = {
    minWidth:"100%",
    minHeight:"100%",
  };

function Background() {
    return(
    <video style = {BackgroundStyle} autoPlay muted loop id="myVideo">
        <source src="../../public/Background.mp4" type="video/mp4" />
    </video>
    );
}

export default Background;