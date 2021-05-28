<script>
	export let segment;
</script>

<nav>
	<ul class="navbar-menu">
		<div class="navbar-start">
			<li>
				<a
					class="navbar-item"
					aria-current="{segment === undefined ? 'page' : undefined}"
					href=".">
						home
					</a>
			</li>
			<li>
				<a
					class="navbar-item"
					aria-current="{segment === 'about' ? 'page' : undefined}"
					href="about"
				>
					about
				</a>
			</li>
			<li>
				<a
					class="navbar-item"
					rel=prefetch
					aria-current="{segment === 'blog' ? 'page' : undefined}" 
					href="blog"
				>
					blog
				</a>
			</li>
		</div>
	</ul>
</nav>
