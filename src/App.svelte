<script lang="ts">
  import { onMount } from "svelte";
  import { list } from "./stores";
  import { uniqueId } from "./libs/uid";

  $: filteredList = $list;

  let value = "",
    input: HTMLInputElement = null;

  onMount(() => input.focus());

  function addItem() {
    list.set([
      ...$list,
      { id: uniqueId(), name: value, checked: false, readonly: true },
    ]);
    value = "";
  }

  function checkItem(id: string) {
    list.set(
      $list.map((item) => {
        if (item.id !== id) return item;
        return { ...item, checked: !item.checked };
      })
    );
  }

  function editItem(id: string, readonly: boolean) {
    list.set(
      $list.map((item) => {
        if (item.id !== id) return item;
        return { ...item, readonly: !item.readonly };
      })
    );
    readonly &&
      document
        .querySelector<HTMLInputElement>(`#${CSS.escape(id)}`)
        .select();
  }

  function removeItem(id: string) {
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
      <button on:click={showAll}
        ><span class="material-symbols-outlined">
          filter_list_off
        </span></button
      >
      <button on:click={showActive}
        ><span class="material-symbols-outlined"> filter_list </span></button
      >
      <button on:click={showChecked}
        ><span
          class="material-symbols-outlined"
          style="transform: rotate(180deg);"
        >
          filter_list
        </span></button
      >
    </section>
    <ul>
      {#each filteredList as { id, name, checked, readonly } (id)}
        <li>
          <button
            class={checked ? "checked" : ""}
            on:click={() => checkItem(id)}
            ><span class="material-symbols-outlined">
              check_circle
            </span></button
          >
          <input id={id} bind:value={name} {readonly} />
          <button
            aria-label="Edit task"
            class="edit"
            on:click={() => editItem(id, readonly)}
          >
            <span class="material-symbols-outlined">
              {readonly ? "edit" : "edit_off"}
            </span>
          </button>
          <button class="remove" on:click={() => removeItem(id)}
            ><span class="material-symbols-outlined"> delete </span></button
          >
        </li>
      {/each}
    </ul>
    <section>
      <button on:click={checkAll}
        ><span class="material-symbols-outlined"> done_all </span></button
      >
      <button on:click={uncheckAll}
        ><span class="material-symbols-outlined"> remove_done </span></button
      >
      <button on:click={removeChecked}
        ><span class="material-symbols-outlined"> delete_sweep </span></button
      >
    </section>
  {:else}
    <h2>Nothing to see here</h2>
  {/if}
</main>

<style>
  main {
    display: grid;
    place-items: center;
    gap: 1rem;
  }

  input {
    margin: 0.25rem;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    border: 0;
    outline: 0;
    cursor: pointer;
    font: inherit;
    text-transform: capitalize;
    color: inherit;
    background: hsl(0 0% 15%);
  }

  section {
    display: flex;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
    display: grid;
    gap: 1rem;
  }

  li {
    display: flex;
    flex-direction: row;
  }

  button {
    margin: 0.25rem;
    padding: 0.75rem;
    border: 0;
    border-radius: 50%;
    display: grid;
    cursor: pointer;
    background: hsl(0 0% 20%);
  }

  span {
    color: hsl(0 0% 90%);
  }

  .checked {
    background: hsl(150 50% 50%);
  }
  .remove {
    background: hsl(0 50% 50%);
  }
  .edit {
    background: hsl(200 50% 50%);
  }
</style>
