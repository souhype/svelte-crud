<script lang="ts">
  import { onMount } from "svelte";
  import { list } from "./stores";

  $: filteredList = $list;

  let value = "",
    currentId = 0,
    input: HTMLInputElement = null;

  onMount(() => input.focus());

  function addItem() {
    list.set([
      ...$list,
      { id: currentId++, name: value, checked: false, readonly: true },
    ]);
    value = "";
  }

  function editItem(id: number, readonly: boolean) {
    list.set(
      $list.map((item) => {
        if (item.id !== id) return item;
        return { ...item, readonly: !item.readonly };
      })
    );
    readonly &&
      document
        .querySelector<HTMLInputElement>(`#${CSS.escape(id.toString())}`)
        .select();
  }

  function removeItem(id: number) {
    list.set($list.filter((item) => item.id !== id));
  }

  function checkAll() {
    list.set(
      $list.map((item) => {
        return { ...item, checked: true };
      })
    );
  }

  function uncheckAll() {
    list.set(
      $list.map((item) => {
        return { ...item, checked: false };
      })
    );
  }

  function removeChecked() {
    list.set($list.filter((item) => !item.checked));
  }

  function showAll() {
    filteredList = $list.filter((item) => item);
  }

  function showChecked() {
    filteredList = $list.filter((item) => item.checked);
  }

  function showActive() {
    filteredList = $list.filter((item) => !item.checked);
  }
</script>

<main>
  <h1>To Do App</h1>
  <form on:submit|preventDefault={addItem}>
    <input
      pattern="[a-zA-Z ]+"
      minlength="5"
      maxlength="15"
      placeholder="Your Task"
      required
      bind:value
      bind:this={input}
    />
  </form>
  {#if $list.length}
    <section>
      <input type="button" on:click={showAll} value={"all"} />
      <input type="button" on:click={showActive} value={"active"} />
      <input type="button" on:click={showChecked} value={"checked"} />
    </section>
    <ul>
      {#each filteredList as { id, name, checked, readonly } (id)}
        <li>
          <input bind:checked type="checkbox" />
          <input id={id.toString()} bind:value={name} {readonly} />
          <input
            class="edit"
            on:click={() => editItem(id, readonly)}
            type="button"
            value={readonly ? "edit" : "confirm"}
          />
          <input
            class="remove"
            on:click={() => removeItem(id)}
            type="button"
            value="remove"
          />
        </li>
      {/each}
    </ul>
    <section>
      <input type="button" on:click={checkAll} value={"check all"} />
      <input type="button" on:click={uncheckAll} value={"uncheck all"} />
      <input type="button" on:click={removeChecked} value={"remove checked"} />
    </section>
  {:else}
    <h1>Nothing to see here</h1>
  {/if}
</main>

<style>
  main {
    display: grid;
    place-items: center;
    gap: 1rem;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
    display: grid;
    gap: 1rem;
  }

  li {
    display: grid;
    grid-template-columns: 0.25fr 1fr auto auto;
  }

  input {
    margin: 0.25rem;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    border: none;
    outline: 0;
    cursor: pointer;
    font: inherit;
    text-transform: capitalize;
    color: inherit;
    background: hsl(0 0% 20%);
  }

  .edit {
    background: hsl(250 50% 50%);
  }

  .remove {
    background: hsl(0 50% 50%);
  }
</style>
