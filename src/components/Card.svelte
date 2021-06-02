<script>
  export let item;
</script>

<style>
  .card {
    width: 280px;
    margin-right: 20px;
    margin-bottom: 30px;
  }
</style>

<div class="card">
  <div class="card-image">
    <figure class="image is-5by3">
      <img src={item.strTeamFanart1 ? item.strTeamFanart1 : item.strTeamLogo} alt="FanArt">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img src={item.strTeamBadge} alt="Badge">
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">{item.strTeam ? item.strTeam : item.strAlternate}</p>
        <p class="subtitle is-6">{item.strLeague}</p>
      </div>
    </div>

    <div class="content">
      To fined out more <a href="/">Click Hear</a>
    </div>
  </div>
</div>