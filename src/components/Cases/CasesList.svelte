<script lang="ts">
    import { onMount } from "svelte";
    import CaseCard from "./CaseCard.svelte";
    import Search from "./Filters/Search.svelte";
    import Cases from "@lib/Cases";
    import type { Writable } from "svelte/store";

    let cases: Writable<any>;

    onMount(async () => {
        const CasesProvider = new Cases();
        cases = CasesProvider.getStore();
    })
</script>

<section class="casesSearch">
    <Search placeholder="Wyszukaj po numerze sprawy lub słowach kluczowych..." />
</section>

<section class="casesList">
    {#if $cases}
        {#each $cases as entry}
            <CaseCard caseData={entry} />
        {/each}
    {/if}
</section>

<style lang="scss">
    .casesSearch {
        margin-bottom: 1rem;
        max-width: 550px;
    }
    .casesList {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;

        @media (max-width: 900px) {
            grid-template-columns: 1fr;
        }
    }
</style>

