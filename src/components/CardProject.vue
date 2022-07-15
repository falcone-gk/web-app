<template>
  <div class="card-container">
    <div class="card-description">
      <h1>Project Name</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae consectetur quibusdam tempora modi magnam nulla minima tenetur in animi harum!</p>
    </div>
    <div class="card-chips">
      <span class="chip">VueJs</span>
      <span class="chip">VueJs</span>
      <span class="chip">VueJs</span>
    </div>
    <div class="card-buttons">
      <a>View Code</a>
      <a>See More</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-container {
  display: flex;
  flex-direction: column;
  gap: 1em;
  position: relative;
  background-color: #121212;
  border-radius: 20px;
  width: 100%;
  max-width: 30rem;
  margin: auto;
  padding: 1em;
  transition: transform .5s ease, border-color .5s ease-out;

  &:hover {
    transform: translateY(-10px);
    border: 1px solid var(--primary-color);
  }
}
.card-description {
  text-align: left;
  line-height: 1.5em;

  h1 {
    color: #ffffff;
  }

  p {
    color: var(--para-color);
  }

}
.card-chips {
  display: flex;
  gap: 5px;
}
.card-buttons {
  display: flex;
  justify-content: right;
  gap: 10px;

  a {
    cursor: pointer;
    font-size: 12px;
    background-color: var(--primary-color);
    padding: .4rem .8rem;
    border-radius: 2rem;
    transition: background-color 0.5s ease;
    outline: none;

    &:hover {
      background-color: var(--primary-dark-color);
    }
  }
}
.chip {
  font-size: 11px;
  padding: 3px 8px;
  background-color: #ffffff;
  border-radius: 5px;
}
</style>