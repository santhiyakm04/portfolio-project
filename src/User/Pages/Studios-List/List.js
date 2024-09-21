
import './List.css'
export const Studio_Listing = ()=>{

    return(
        <>
         <div class="header-3">
        <nav class="navbar navbar-expand-lg bg-primary lsting-navbar">
          <div class="container">
            <div class="navbar-translate">
              <button class="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-bar bar1"></span>
                <span class="navbar-toggler-bar bar2"></span>
                <span class="navbar-toggler-bar bar3"></span>
              </button>
              <a class="navbar-brand" href="#pablo">Portfolio</a>
            </div>
            <div class="collapse navbar-collapse show" data-nav-image="./assets/img//blurred-image-1.jpg">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#pablo">
                    Home
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div>
          
        </div>
       
      </div>
      <div id="carouselExampleIndicators" class="carousel slide">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1" class=""></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2" class=""></li>
      </ol>
      <div class="carousel-inner" role="listbox">
        <div class="carousel-item active">
          <div class="page-header header-filter">
            <div class="page-header-image" style={{backgroundImage: "url('../assets/img/bg30.jpg')"}}></div>
            <div class="content-center text-center">
              <div class="row">
                <div class="col-md-8 ml-auto mr-auto">
                  <h1 class="title">Finding the Perfect.</h1>
                  <h4 class="description text-white">The haute couture crowds make stylish statements between shows during couture season in Paris...</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="page-header header-filter">
            <div class="page-header-image" style={{backgroundImage: "url('../assets/img/bg29.jpg')"}}></div>
            <div class="content-center">
              <div class="row">
                <div class="col-md-8 ml-auto mr-auto text-center">
                  <h1 class="title">Street Style: Couture.</h1>
                  <h4 class="description text-white">See what Karlie Kloss, Tracee Ellis Ross and others wore between the shows...</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="page-header header-filter">
            <div class="page-header-image" style={{backgroundImage: "url('../assets/img/bg28.jpg')"}}></div>
            <div class="content-center text-center">
              <div class="row">
                <div class="col-md-8 ml-auto mr-auto">
                  <h1 class="title">For Men With Style.</h1>
                  <h4 class="description text-white">Shirts that actually fit? Check. Linen shorts? Yup. Those wider pants suddenly in style? Got them, too....</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <i class="now-ui-icons arrows-1_minimal-left"></i>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <i class="now-ui-icons arrows-1_minimal-right"></i>
      </a>
    </div>

        </>
    )


}