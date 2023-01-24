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
  <section>
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
  </section>
  {#if $list.length}
    <section>
      <input type="button" on:click={showAll} value={"all"} />
      <input type="button" on:click={showActive} value={"active"} />
      <input type="button" on:click={showChecked} value={"checked"} />
    </section>
    <section>
      <ul>
        {#each filteredList as { id, name, checked, readonly } (id)}
          <li>
            <section>
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
            </section>
          </li>
        {/each}
      </ul>
    </section>
    <section>
      <input type="button" on:click={checkAll} value={"check all"} />
      <input type="button" on:click={uncheckAll} value={"uncheck all"} />
      <input type="button" on:click={removeChecked} value={"remove checked"} />
    </section>
  {:else}
    <section>
      <h1>Nothing to see here</h1>
    </section>
  {/if}
</main>
