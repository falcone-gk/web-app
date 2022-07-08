<template>
  <header>
    <div class="name-logo">
      <p>Enzo Falcón</p>
    </div>
    <nav class="nav-links">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/projects">Projects</router-link>
      <router-link to="/blog">Blog</router-link>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
$medium: 600px;

header {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 1em var(--side-padding);
}
  .name-logo {
    font-family: 'Lobster', cursive;
    font-size: 30px;
    display: flex;
    flex: 1 1 auto;

    p {
      display: inline;
      margin-right: auto;
      color: #ffffff;

      @media screen and (max-width: #{$medium}) {
        margin: auto;
      }
    }
  }

  .nav-links {
    display: flex;
    gap: min(5vw, 2em);

    @media screen and (max-width: #{$medium}) {
      flex: 1 1 auto;
    }

    a {
      position: relative;
      font-family: 'Lato';
      font-weight: 700;
      font-size: 1.3rem;
      color: #ffffff;
      text-decoration: none;

      @media screen and (max-width: #{$medium}) {
        flex: 1 1 auto;
      }

      &.router-link-active {
        color: var(--main-color);
      }

      &:after {
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 4px;
        bottom: -4px;
        left: 0;
        background-color: var(--main-color);
        border-radius: 5px;
        transform-origin: bottom center;
        transition: transform 0.25s ease-out;
      }
      &:hover::after {
        transform: scaleX(1);
        transform-origin: bottom center;
      }
    }
  }
</style>