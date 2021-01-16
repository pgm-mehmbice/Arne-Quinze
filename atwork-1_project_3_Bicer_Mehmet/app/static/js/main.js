const ART_API = 'https://www.pgm.gent/data/arnequinze/art.json';


(() => {
  const app = {
    initialize() {
      console.log("1. Application started!");
      this.cacheElements();
      this.buildUI();
    },

    cacheElements() {
      console.log("2. Chache all exisiting DOM elements!");
      this.$art = document.querySelector('.art');
      this.$atelier = document.querySelector('.atelier‐studio');
      this.$press = document.querySelector('.press');
      // this.$ = document.querySelector('.');
    },

    buildUI() {
      console.log("3. Build the user interface!");
      if (this.$art) {
        this.$art.innerHTML = this.getDataFromArtAPI();
      }
      if (this.$atelier) {
        this.$atelier.innerHTML = this.getDataFromAtelierStudioAPI();
      }
      if (this.$press) {
        this.$press.innerHTML = this.getDataFromPressAPI();
      }

    },

    getDataFromArtAPI() {
      fetch(ART_API, {})
        .then(response => response.json())
        .then(json => this.updateArt(json))
        .catch(error => console.log(error));
    },

    updateArt(art) {
      this.$art.innerHTML = art.map((art) => {
        let images = art.images.map((image) => {
            return `<a href=""><img loading="lazy" src="../static/img/images/images/${image}"></a>`
        }).join('');
        return `
          <article class="article-art">
          <div class="texts">
            <div class="year"><h2>${art.year}</h2></div>
              <h1><a href="">${art.title}</a></h1>
              <h3>${art.subtitle}</h3>
              <p>${art.tags}</p>
              <p>${art.description !== null ? art.description : ""}</p>
              <p>${art.location}</p>
            </div>

            <div class="images">
              ${images}
            </div>
          </article>
          `;
      }).join('');
    },

    getDataFromAtelierStudioAPI() {
      fetch("data/atelier.json", {})
          .then(response => response.json())
          .then(json => this.updateAtelierStudio(json))
          .catch(error => console.log(error));
    },

    updateAtelierStudio(ate) {
      this.$atelier.innerHTML = ate.map((ate) => {

        return `
        <article class="article">
          <div class="img">
            <img src="static/img/imagess/${ate.image}">
          </div>

          <div class="text">
              <p>${ate.subtitle}</p>
              <h1>${ate.title}</h1>
              <h3>${ate.text}</h3>
              <p><a href="">${ate.learn}</a></p>
          </div>
        </article>`
      }).join('');
    },

    getDataFromPressAPI() {
      fetch("../data/press.json", {})
          .then(response => response.json())
          .then(json => this.updatePress(json))
          .catch(error => console.log(error));
    },

    updatePress(press) {
      console.log(press);
      this.$press.innerHTML = press.map((prs) => {

        return `
        <article class="article">
          <div class="img">
            <img src="../static/img/imagesss/${prs.image}">
          </div>

          <div class="text">
            <p>${prs.subtitle}</p>
            <h1>${prs.title}</h1>
            <h3>${prs.text}</h3>
            <p><a href="">${prs.learn}</a></p>
          </div>
        </article>`
      }).join('');

    },

}
  app.initialize();
})();