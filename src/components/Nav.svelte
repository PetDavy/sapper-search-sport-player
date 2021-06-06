<script>
	let isOpen = false;

	export let segment;
</script>

<style>
	.navbar {
		margin-bottom: 30px;
		padding-top: 10px;
		background-color: #f4f4f4;
		box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);
	}
</style>

<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="/">
      <img src="logo.png" width="30" height="40" alt="sport">
    </a>

    <div
			role="button"
			class="navbar-burger"
			class:is-active={isOpen}
			on:click={() => isOpen = !isOpen}
			aria-label="menu"
			aria-expanded="false"
			data-target="navbarBasicExample"
		>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </div>
  </div>

	<ul class="navbar-menu" class:is-active={isOpen}>
		<div class="navbar-start">
			<li>
				<a
					class="navbar-item"
					class:is-active={segment === undefined}
					aria-current="{segment === undefined ? 'page' : undefined}"
					href="/">
						HOME
					</a>
			</li>
			<li>
				<a
					class="navbar-item"
					class:is-active={segment === 'about'}
					aria-current="{segment === 'about' ? 'page' : undefined}"
					href="/about"
				>
					ABOUT
				</a>
			</li>
		</div>
	</ul>
</nav>

